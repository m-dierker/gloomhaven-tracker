import { Injectable, NgZone } from "@angular/core";
import { Observable, ReplaySubject, from, combineLatest } from "rxjs";
import { map, first, mergeMap, combineLatestWith } from "rxjs/operators";
import { MonsterData, BossData, SummonData } from "../../types/monster-data";
import {
  MONSTERS_COLLECTION,
  BOSSES_COLLECTION,
  GAME_BUNDLE_NAME,
  CHARACTERS_COLLECTION,
  SUMMONS_COLLECTION,
} from "../db/db-constants";
import { Party } from "../../types/party";
import { Monster } from "../db/monster";
import { CharacterData } from "src/types/monster-data";
import {
  collection,
  CollectionReference,
  collectionSnapshots,
  doc,
  docSnapshots,
  Firestore,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
  writeBatch,
} from "@angular/fire/firestore";
import {
  deleteDoc,
  getDoc,
  getDocFromCache,
  getDocsFromCache,
  loadBundle,
  DocumentChange,
  Query,
  QueryDocumentSnapshot,
  onSnapshot,
  runTransaction,
  addDoc,
} from "firebase/firestore";
import { getBlob, getStorage, list, ref } from "firebase/storage";
import { ElementData, ElementState, ElementType } from "../db/elements";
import { DbRefService } from "./db-ref.service";
import { authState } from "rxfire/auth";
import { Auth } from "@angular/fire/auth";
import {
  getClassCardId,
  ScenarioFigureData,
} from "src/types/scenario-figure-data";
import { Figure } from "../db/figure";
import { FigureClassId, FigureType } from "src/types/figure";
import { Boss } from "../db/boss";
import { GameContext } from "src/types/game";
import { ScenarioInfo } from "../db/scenario-info";
import { GameBox } from "src/types/gamebox";
import { Character } from "../db/character";
import { RoleClass } from "../db/role-class";
import { Summon } from "../db/summon";

/**
 * NOTE: AngularFire exports the API from RxFire and then doesn't really document it. -_-
 * RxFire docs are here: https://github.com/FirebaseExtended/rxfire/blob/main/docs/firestore.md.
 */

@Injectable({
  providedIn: "root",
})
export class DbService {
  private partySubj: ReplaySubject<Party>;

  /** Calling these maps needs to check enemyDataLoadedPromise first. */
  private monsterDataMap: Map<string, MonsterData>;
  private bossDataMap: Map<string, BossData>;
  private characterDataMap: Map<string, CharacterData>;
  private summonDataMap: Map<string, SummonData>;

  private enemyDataLoadedPromise = new Promise((resolve) => {
    this.enemyDataLoadedResolve = resolve;
  });
  private enemyDataLoadedResolve: Function;

  /** Unsubscribe function for non-Angular Firebase listener while avoiding the AngularFire bug. */
  private partyMonsterUnsub: Function;
  private partyCharacterUnsub: Function;
  private partySummonsUnsub: Function;
  /** Map of global ID --> figure. This is basically the local database. */
  private figureIdMap: Map<string, Figure> = new Map();
  /** Map of class --> array of enemies of that class. this is effectively a cached DB index. */
  private partyEnemySubj: ReplaySubject<Map<FigureClassId, Figure[]>>;

  private userCharacterSubj: ReplaySubject<Character>;
  private partyCharactersSubj: ReplaySubject<Character[]>;
  /** Cached copy of eligible summons. */
  private eligibleSummonsSubj: ReplaySubject<Map<RoleClass, string[]>>;
  /** Cached copy of actual party summons. */
  private partySummonsSubj: ReplaySubject<Map<RoleClass, Summon[]>>;

  private gameDataLoadedPromise = new Promise((resolve) => {
    this.gameDataLoadedResolve = resolve;
  });
  private gameDataLoadedResolve: Function;

  constructor(
    private firestore: Firestore,
    private dbRef: DbRefService,
    private auth: Auth,
    private zone: NgZone
  ) {
    this.initLoginListener();
  }

  /** Returns all eligible monsters for this gamebox. */
  getAllMonsters(): Observable<MonsterData[]> {
    return from(this.enemyDataLoadedPromise).pipe(
      map(() => {
        return Array.from(this.monsterDataMap.values());
      })
    );
  }

  getAllBosses(): Observable<BossData[]> {
    return from(this.enemyDataLoadedPromise).pipe(
      map(() => {
        return Array.from(this.bossDataMap.values());
      })
    );
  }

  async createPartyMonsters(newMonsters: ScenarioFigureData[]): Promise<void> {
    const batch = writeBatch(this.firestore);
    for (const newMonster of newMonsters) {
      const newMonsterDoc = doc(this.dbRef.partyMonstersCollection());
      batch.set(newMonsterDoc, newMonster);

      const monsterDeckDoc = this.dbRef.monsterAbilityDeckDoc(
        getClassCardId(newMonster)
      );
      const monsterDeckSnap = await getDoc(monsterDeckDoc);
      if (!monsterDeckSnap.exists()) {
        batch.set(monsterDeckDoc, {
          flipped: [],
          unflipped: [1, 2, 3, 4, 5, 6, 7, 8],
        });
      }
    }
    return batch.commit();
  }

  async createPartySummon(newSummon: ScenarioFigureData): Promise<void> {
    await addDoc(this.dbRef.partySummonsCollection(), newSummon);
  }

  /** Creates a new character and returns the new ID once created. */
  async createPartyCharacter(
    newCharacter: ScenarioFigureData
  ): Promise<string> {
    // New ID is generated here.
    const newCharacterDoc = doc(this.dbRef.partyCharactersCollection());
    await setDoc(newCharacterDoc, newCharacter);
    return newCharacterDoc.id;
  }

  getUserCharacter(): Observable<Character> {
    if (!this.userCharacterSubj) {
      this.userCharacterSubj = new ReplaySubject(1);
      if (!this.auth.currentUser.uid) {
        console.error("Cannot load user character, not logged in");
        return;
      }
      combineLatest([
        this.getParty(),
        from(this.enemyDataLoadedPromise),
      ]).subscribe(([party, _]) => {
        const characterId: string =
          party.members[this.auth.currentUser.uid].character;
        const characterDoc = this.dbRef.partyCharacterDoc(characterId);

        // This needs to be rethought if other characters are exposed.
        docSnapshots(characterDoc).subscribe((snap) => {
          const data = snap.data();
          data.id = snap.id;
          if (this.figureIdMap.get(characterId)) {
            this.figureIdMap.get(characterId).onNewScenarioData(data, {
              party,
            });
          } else {
            const characterData = this.characterDataMap.get(data.classId);
            if (!characterData) {
              console.error("Unable to find data for character", data.classId);
            }
            const character = new Character(data, { party }, characterData);
            this.figureIdMap.set(characterId, character);
          }
          this.userCharacterSubj.next(
            this.figureIdMap.get(characterId) as Character
          );
        });
      });
    }
    return this.userCharacterSubj.asObservable();
  }

  /** Sets the active character in the party for the given user. */
  async setUserCharacter(id: string): Promise<void> {
    if (!this.auth.currentUser.uid) {
      console.warn("Unable to handle setting character for user not logged in");
      return;
    }
    const partyDoc = this.dbRef.partyDoc();
    return runTransaction(this.firestore, async (t) => {
      const partySnap = await t.get(partyDoc);
      const party = partySnap.data() as Party;
      const newMembers = party.members || {};
      newMembers[this.auth.currentUser.uid] = {
        character: id,
      };
      await t.update(partyDoc, { members: newMembers });
    });
  }

  getPartyCharacters(): Observable<Character[]> {
    if (!this.partyCharactersSubj) {
      this.partyCharactersSubj = new ReplaySubject(1);
      combineLatest([
        from(this.enemyDataLoadedPromise),
        this.getContext(),
      ]).subscribe(([_, context]) => {
        if (this.partyCharacterUnsub) {
          this.partyCharacterUnsub();
        }
        // This is bypassing AngularFire because there's a bug where collectionSnapshots is including extra data unnecessarily.
        // https://github.com/FirebaseExtended/rxfire/issues/75
        // Instead, this uses the Firebase API directly.
        this.partyCharacterUnsub = onSnapshot(
          this.dbRef.partyCharactersCollection(),
          (snapshot) => {
            let listRefreshNeeded = false;
            for (const update of snapshot.docChanges()) {
              if (update.type === "added") {
                const character = new Character(
                  update.doc.data(),
                  context,
                  this.characterDataMap.get(update.doc.data().classId)
                );
                this.figureIdMap.set(update.doc.id, character);
                listRefreshNeeded = true;
              } else if (update.type === "modified") {
                if (!this.figureIdMap.has(update.doc.id)) {
                  console.error("Update received for missing character.");
                  continue;
                }
                this.zone.run(() => {
                  this.figureIdMap
                    .get(update.doc.id)
                    .onNewScenarioData(update.doc.data(), context);
                });
              } else if (update.type === "removed") {
                this.figureIdMap.delete(update.doc.id);
                listRefreshNeeded = true;
              }
            }
            if (listRefreshNeeded) {
              // This could be more efficient, but will generally only run once.
              const characters: Figure[] = Array.from(
                this.figureIdMap.values()
              ).filter((figure) => figure.isCharacter());
              // Trigger in NgZone to get back in an Angular context.
              this.zone.run(() => {
                this.partyCharactersSubj.next(characters as Character[]);
              });
            }
          }
        );
      });
    }
    return this.partyCharactersSubj.asObservable();
  }

  /** Returns a list of character class --> summon class IDs available to characters at their current level. */
  getEligibleSummonIds(): Observable<Map<RoleClass, string[]>> {
    if (!this.eligibleSummonsSubj) {
      this.eligibleSummonsSubj = new ReplaySubject(1);
      combineLatest([
        from(this.enemyDataLoadedPromise),
        this.getPartyCharacters(),
      ]).subscribe(([_, characters]) => {
        const charactersByClass: Map<string, Character> = new Map(
          characters.map((char) => {
            return [char.classId, char];
          })
        );
        const mapByClass: Map<RoleClass, string[]> = new Map();
        for (const [id, summon] of this.summonDataMap.entries()) {
          const characterId = summon.characterId as RoleClass;
          // Check if the summon is on a character in the party + if that character is a high enough level.
          if (
            charactersByClass.has(characterId) &&
            summon.unlockedLevel <= charactersByClass.get(characterId).level
          ) {
            if (mapByClass.has(characterId)) {
              mapByClass.get(characterId).push(id);
            } else {
              mapByClass.set(characterId, [id]);
            }
          }
        }
        this.eligibleSummonsSubj.next(mapByClass);
      });
    }
    return this.eligibleSummonsSubj.asObservable();
  }

  getPartySummons(): Observable<Map<RoleClass, Summon[]>> {
    if (!this.partySummonsSubj) {
      this.partySummonsSubj = new ReplaySubject(1);
      combineLatest([
        from(this.enemyDataLoadedPromise),
        this.getContext(),
      ]).subscribe(([_, context]) => {
        if (this.partySummonsUnsub) {
          this.partySummonsUnsub();
        }
        // This is bypassing AngularFire because there's a bug where collectionSnapshots is including extra data unnecessarily.
        // https://github.com/FirebaseExtended/rxfire/issues/75
        // Instead, this uses the Firebase API directly.
        this.partySummonsUnsub = onSnapshot(
          this.dbRef.partySummonsCollection(),
          (snapshot) => {
            let listRefreshNeeded = false;
            for (const update of snapshot.docChanges()) {
              const data = update.doc.data();
              data.id = update.doc.id;
              if (update.type === "added") {
                const summon = new Summon(
                  data,
                  context,
                  this.summonDataMap.get(update.doc.data().classId)
                );
                this.figureIdMap.set(update.doc.id, summon);
                listRefreshNeeded = true;
              } else if (update.type === "modified") {
                if (!this.figureIdMap.has(update.doc.id)) {
                  console.error("Update received for missing summon.");
                  continue;
                }
                // Trigger update in an Angular context.
                this.zone.run(() => {
                  this.figureIdMap
                    .get(update.doc.id)
                    .onNewScenarioData(data, context);
                });
              } else if (update.type === "removed") {
                this.figureIdMap.delete(update.doc.id);
                listRefreshNeeded = true;
              }
            }
            if (listRefreshNeeded) {
              // Could be more efficient since it filters the entire figureIdMap but whatever.
              const summons: Map<RoleClass, Summon[]> = new Map();
              for (const figure of this.figureIdMap.values()) {
                if (figure.isSummon()) {
                  const summon = figure as Summon;
                  if (summons.has(summon.ownerCharacterClass)) {
                    summons.get(summon.ownerCharacterClass).push(summon);
                  } else {
                    summons.set(summon.ownerCharacterClass, [summon]);
                  }
                }
              }
              // Trigger in NgZone to get back in an Angular context.
              this.zone.run(() => {
                this.partySummonsSubj.next(summons);
              });
            }
          }
        );
      });
    }
    return this.partySummonsSubj.asObservable();
  }

  /**
   * Returns wrapper objects for Enemies in a given party.
   * The wrappers have both scenario-specific data and generic EnemyData.
   *
   * Results are grouped by class since every current usage requires this.
   */
  getPartyEnemies(): Observable<Map<FigureClassId, Figure[]>> {
    if (!this.partyEnemySubj) {
      this.partyEnemySubj = new ReplaySubject(1);
      combineLatest([
        from(this.enemyDataLoadedPromise),
        this.getContext(),
      ]).subscribe(([_, context]) => {
        if (this.partyMonsterUnsub) {
          this.partyMonsterUnsub();
        }
        // This is bypassing AngularFire because there's a bug where collectionSnapshots is including extra data unnecessarily.
        // https://github.com/FirebaseExtended/rxfire/issues/75
        // Instead, this uses the Firebase API directly.
        this.partyMonsterUnsub = onSnapshot(
          this.dbRef.partyMonstersCollection(),
          (snapshot) => {
            const updatePromises = snapshot
              .docChanges()
              .map((change) => this.processEnemyChange(change, context));
            Promise.all(updatePromises).then(() => {
              // Recalculate the "index" of FigureType --> Figure[].
              const map: Map<FigureClassId, Figure[]> = new Map();
              for (const figure of this.figureIdMap.values()) {
                // Skip characters which shouldn't be exposed as party enemies.
                if (figure.isCharacter()) {
                  continue;
                }
                if (map.has(figure.classId)) {
                  map.get(figure.classId).push(figure);
                } else {
                  map.set(figure.classId, [figure]);
                }
              }
              // Sort each class list by tokenNum.
              Array.from(map.values()).forEach((arr) =>
                arr.sort((m1, m2) => m1.compareTo(m2))
              );
              // Trigger in NgZone to get back in an Angular context.
              this.zone.run(() => {
                this.partyEnemySubj.next(map);
              });
            });
          }
        );
      });
    }
    return this.partyEnemySubj;
  }

  /** Proceses new data for a single enemy. Returns a promise when that change is processed. */
  private async processEnemyChange(
    change: DocumentChange<ScenarioFigureData>,
    context: GameContext
  ): Promise<void> {
    const enemyData = change.doc.data();
    // enemyData.id has to be manually set, just like idField in the Firebase library.
    const id = (enemyData.id = change.doc.id);
    if (change.type === "added") {
      const enemy = await this.createEnemyFromScenarioData(enemyData, context);
      if (!enemy) {
        console.error(
          "Unable to create enemy from scenario data",
          change,
          enemyData
        );
        return;
      }
      this.figureIdMap.set(id, enemy);
    } else if (change.type === "modified") {
      if (!this.figureIdMap.has(id)) {
        console.error("Enemy that should exist is missing", id);
        return;
      }
      this.figureIdMap.get(id).onNewScenarioData(enemyData, context);
    } else if (change.type === "removed") {
      this.figureIdMap.delete(id);
    }
  }

  /**
   * Game destructor for the pieces of the game owned by this service.
   *
   * Should only be called by ResetService.
   */
  async resetGameStateFromResetService() {
    await this.deleteAllMonsters();
    await this.resetAllElements();
    await this.resetAllCharacters();
    await this.deleteAllSummons();
  }

  /** Deletes all monsters. */
  private async deleteAllMonsters() {
    const monsterCol = await getDocs(this.dbRef.partyMonstersCollection());
    const batch = writeBatch(this.firestore);
    for (const monsterDoc of monsterCol.docs) {
      batch.delete(monsterDoc.ref);
    }
    return batch.commit();
  }

  /** Deletes all summons. */
  private async deleteAllSummons() {
    const summonCol = await getDocs(this.dbRef.partySummonsCollection());
    const batch = writeBatch(this.firestore);
    for (const summonDoc of summonCol.docs) {
      batch.delete(summonDoc.ref);
    }
    return batch.commit();
  }

  /** Resets all elements to the inactive state. */
  private async resetAllElements() {
    const elementsCol = await getDocs(this.dbRef.elementsCollection());
    const batch = writeBatch(this.firestore);
    for (const elementDoc of elementsCol.docs) {
      if (elementDoc.data().state !== ElementState.INACTIVE) {
        batch.set(elementDoc.ref, { state: ElementState.INACTIVE });
      }
    }
    return batch.commit();
  }

  /** Resets all characters to full HP and no XP. */
  private async resetAllCharacters() {
    const characterCol = await getDocs(this.dbRef.partyCharactersCollection());
    const batch = writeBatch(this.firestore);
    for (const characterDoc of characterCol.docs) {
      // This should technically be a transaction, but whatever, it doesn't matter now.
      const data: ScenarioFigureData = characterDoc.data();
      const newCharData = data.characterData;
      newCharData.xp = 0;
      batch.update(characterDoc.ref, {
        characterData: newCharData,
        health: null,
        // Max health overrides shouldn't persist between games.
        maxHealth: null,
      });
    }
    await batch.commit();
  }

  private async createEnemyFromScenarioData(
    scenarioData: ScenarioFigureData,
    context: GameContext
  ): Promise<Figure | undefined> {
    if (scenarioData.figureType == FigureType.MONSTER) {
      const classData = this.monsterDataMap.get(scenarioData.classId);
      if (!classData) {
        console.error("Unable to find Monster class data for", scenarioData);
        return;
      }
      return new Monster(scenarioData, context, classData);
    }
    if (scenarioData.figureType == FigureType.BOSS) {
      const classData = this.bossDataMap.get(scenarioData.classId);
      if (!classData) {
        console.error("Unable to find Boss class data for", scenarioData);
        return;
      }
      return new Boss(scenarioData, context, classData);
    }
    console.error("Unable to find FigureType for ", scenarioData);
  }

  saveFigure(figure: Figure) {
    const saveData = figure.getSaveData();
    const figureDoc = this.dbRef.partyFigureDoc(figure);
    console.log(
      "Sending a save for figure ",
      saveData.id,
      figure.tokenNum,
      figure.scenarioId,
      figure.classId
    );
    // Remove dead non-characters automatically.
    if (figure.isDead()) {
      deleteDoc(figureDoc);
    } else {
      updateDoc(figureDoc, saveData as unknown);
    }
  }

  getParty(): Observable<Party> {
    if (!this.partySubj) {
      this.partySubj = new ReplaySubject(1);
      docSnapshots(this.dbRef.partyDoc()).subscribe((snap) =>
        this.partySubj.next(snap.data() as Party)
      );
    }
    return this.partySubj.asObservable();
  }

  getContext(): Observable<GameContext> {
    // I expect more probably comes here at some point and this is low overhead.
    return this.getParty().pipe(
      map((party) => {
        return { party };
      })
    );
  }

  updateScenarioNumber(newLevel: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.partySubj.pipe(first()).subscribe(async (party) => {
        const fullScenarioId = this.scenarioIdForGame(party.gamebox, newLevel);
        const scenarioDoc = this.dbRef.scenarioDoc(fullScenarioId);

        let scenarioFound = false;
        try {
          const cachedDoc = await getDocFromCache(scenarioDoc);
          scenarioFound = cachedDoc.exists();
        } catch (e) {
          // Firebase seems to throw an error rather than return a doc.exists = false.
          scenarioFound = false;
        }

        if (!scenarioFound) {
          return reject("Scenario not found: " + fullScenarioId);
        }
        await updateDoc(this.dbRef.partyDoc(), {
          activeScenario: fullScenarioId,
        });
        resolve();
      });
    });
  }

  private scenarioIdForGame(game: GameBox, scenarioNum: string): string {
    switch (game) {
      case GameBox.GLOOMHAVEN:
        return `gh-${scenarioNum}`;
      case GameBox.JAWS_OF_THE_LION:
        return `jotl_${scenarioNum}`;
      case GameBox.FROSTHAVEN:
        return `fh_${scenarioNum}`;
      default:
        console.error("Cannot make scenario for unknown GameBox", game);
        return scenarioNum;
    }
  }

  updateScenarioLevel(scenarioLevel: number): Promise<void> {
    return updateDoc(this.dbRef.partyDoc(), {
      scenarioLevel,
    });
  }

  /** Returns a streaming list of element updates. This is done so a tracker can handle bulk updates at once. Each update includes all elements. */
  getElementCollectionUpdates(): Observable<
    QueryDocumentSnapshot<ElementData>[]
  > {
    return collectionSnapshots(this.dbRef.elementsCollection());
  }

  getElementUpdates(element: ElementType): Observable<ElementData> {
    // TODO: Change this to use getElementCollectionUpdates, it's a dual read right now. :(
    const elementDoc = this.dbRef.elementDoc(element);
    return docSnapshots(elementDoc).pipe(
      map((snap) => snap.data() as ElementData)
    );
  }

  /**
   * Convenience wrapper around getElementUpdates grouped by state and sorted.
   * All elements in the DB are guaranteed to be present.
   */
  getSortedElementsByState(): Observable<Map<ElementState, ElementType[]>> {
    return this.getElementCollectionUpdates().pipe(
      map((elementSnap) => {
        const map = new Map<ElementState, ElementType[]>();
        for (const elementDoc of elementSnap) {
          const elementType = Number(elementDoc.id) as ElementType;
          const elementState = elementDoc.data().state;
          if (map.has(elementState)) {
            map.get(elementState).push(elementType);
          } else {
            map.set(elementState, [elementType]);
          }
        }
        for (const elements of map.values()) {
          elements.sort();
        }
        return map;
      })
    );
  }

  setElementState(element: ElementType, state: ElementState): Promise<void> {
    const elementDoc = this.dbRef.elementDoc(element);
    const data: ElementData = {
      state,
    };
    // Element docs are simple, no reason an update is needed.
    return setDoc(elementDoc, data);
  }

  getActiveScenarioInfo(): Observable<ScenarioInfo> {
    // TODO: Is there a better way to indicate the game data is loaded?
    // Could use a ReplaySubject or something but not clear that's better than this weird promise.
    return from(this.gameDataLoadedPromise).pipe(
      combineLatestWith(this.getParty()),
      mergeMap(([_, party]) => {
        return from(
          getDocFromCache(this.dbRef.scenarioDoc(party.activeScenario))
        ).pipe(map((docSnap) => docSnap.data()));
      })
    );
  }

  /** Returns all parties with the current user as a member. */
  async getEligibleParties(): Promise<Party[]> {
    if (!this.auth.currentUser) {
      console.warn("User not logged in, cannot select parties");
      return [];
    }
    const resp = await getDocs(
      query(
        collection(this.firestore, "parties"),
        where(`members.${this.auth.currentUser.uid}`, "!=", null)
      )
    );
    return resp.docs.map((doc) => {
      const party = doc.data() as Party;
      party.id = doc.id;
      return party;
    });
  }

  async setActiveParty(partyId: string): Promise<void> {
    if (this.auth.currentUser == null) {
      alert("Not logged in");
    }
    await updateDoc(this.dbRef.userDocNew(this.auth.currentUser.uid), {
      party: partyId,
    });
  }

  private async initLoginListener() {
    authState(this.auth).subscribe((user) => {
      if (user) {
        this.initLocalStorage();
      } else {
        console.log("Deferring DB initialization until user is logged in");
      }
    });
  }

  /** Reads bundle and initializes static storage. */
  private async initLocalStorage() {
    await this.loadGameBundle();
    await Promise.all([
      this.initMonsterMap(),
      this.initBossMap(),
      this.initCharacterMap(),
      this.initSummonMap(),
    ]);
    this.enemyDataLoadedResolve();
  }

  /** Loads static data (monsters, bosses, scenarios) from Cloud Storage. */
  private async loadGameBundle() {
    const storage = getStorage();
    const gameBundle = ref(storage, GAME_BUNDLE_NAME);
    const gameBundleData = await getBlob(gameBundle);
    const arrBuffer = await gameBundleData.arrayBuffer();
    try {
      // There's a random "unimplemented" error here from a Google SDK,
      // but it seems to work...
      // TODO: Investigate error.
      const result = await loadBundle(this.firestore, arrBuffer);
      console.log("Game bundle loaded from Cloud Store successfully", result);
      this.gameDataLoadedResolve();
    } catch (e) {
      console.error("Unable to load Game Bundle", e);
    }
  }

  /**
   * Initializes local storage for all monster stats.
   * Loaded once because it doesn't make sense to keep updated.
   */
  private async initMonsterMap() {
    return new Promise<void>((resolve) => {
      this.getParty().subscribe(async (party) => {
        const map = await getCachedCollectionMapById(
          query(
            collection(
              this.firestore,
              MONSTERS_COLLECTION
            ) as CollectionReference<MonsterData>,
            where("gamebox", "==", party.gamebox)
          )
        );
        this.monsterDataMap = map;
        resolve();
      });
    });
  }

  private async initBossMap() {
    return new Promise<void>((resolve) => {
      this.getParty().subscribe(async (party) => {
        const map = await getCachedCollectionMapById(
          query(
            collection(
              this.firestore,
              BOSSES_COLLECTION
            ) as CollectionReference<BossData>,
            where("gamebox", "==", party.gamebox)
          )
        );
        this.bossDataMap = map;
        resolve();
      });
    });
  }

  private async initCharacterMap() {
    return new Promise<void>((resolve) => {
      this.getParty().subscribe(async (party) => {
        const map = await getCachedCollectionMapById(
          query(
            collection(
              this.firestore,
              CHARACTERS_COLLECTION
            ) as CollectionReference<CharacterData>,
            where("gamebox", "==", party.gamebox)
          )
        );
        this.characterDataMap = map;
        resolve();
      });
    });
  }

  private async initSummonMap() {
    return new Promise<void>((resolve) => {
      this.getParty().subscribe(async (party) => {
        const map = await getCachedCollectionMapById(
          query(
            collection(
              this.firestore,
              SUMMONS_COLLECTION
            ) as CollectionReference<SummonData>,
            where("gamebox", "==", party.gamebox)
          )
        );
        this.summonDataMap = map;
        resolve();
      });
    });
  }
}

/** Returns a map of all docs in a collection by {id, all data}. Fires on update. */
async function getCachedCollectionMapById<T>(
  ref: Query<T>
): Promise<Map<string, T>> {
  const querySnap = await getDocsFromCache(ref);
  return new Map<string, T>(
    querySnap.docs.map((doc) => [doc.id, doc.data() as T])
  );
}
