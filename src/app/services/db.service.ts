import { Injectable } from "@angular/core";
import {
  Observable,
  ReplaySubject,
  of,
  forkJoin,
  from,
  combineLatest,
} from "rxjs";
import {
  map,
  first,
  switchMap,
  flatMap,
  mergeMap,
  combineLatestWith,
} from "rxjs/operators";
import { MonsterData, BossData } from "../../types/monsters";
import {
  MONSTERS_COLLECTION,
  BOSSES_COLLECTION,
  PARTY_COLLECTION as PARTIES_COLLECTION,
  DEFAULT_PARTY,
  PARTY_MONSTERS_COLLECTION,
  PARTY_COLLECTION,
  GAME_BUNDLE_NAME,
} from "../db/db-constants";
import { Party } from "../../types/party";
import { Monster } from "../db/monster";
import {
  collection,
  CollectionReference,
  collectionSnapshots,
  doc,
  docSnapshots,
  Firestore,
  getDocs,
  setDoc,
  updateDoc,
  writeBatch,
} from "@angular/fire/firestore";
import {
  arrayRemove,
  deleteDoc,
  getDocFromCache,
  getDocsFromCache,
  loadBundle,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { getBlob, getStorage, ref } from "firebase/storage";
import { ElementData, ElementState, ElementType } from "../db/elements";
import { DbRefService } from "./db-ref.service";
import { authState } from "rxfire/auth";
import { Auth } from "@angular/fire/auth";
import { UserData } from "../db/user";
import { ScenarioEnemyData } from "src/types/scenario";
import { Enemy } from "../db/enemy";
import { EnemyClassId, EnemyType } from "src/types/enemy";
import { Boss } from "../db/boss";
import { GameContext } from "src/types/game";
import { ScenarioInfo } from "../db/scenario";
import { AttackModifierUtil } from "src/types/attack-modifiers";

@Injectable({
  providedIn: "root",
})
export class DbService {
  private monsterDataMapSubj: ReplaySubject<Map<string, MonsterData>> =
    new ReplaySubject(1);
  private bossDataMapSubj: ReplaySubject<Map<string, BossData>> =
    new ReplaySubject(1);
  private partySubj: ReplaySubject<Party>;
  private partyEnemySubj: ReplaySubject<Map<EnemyClassId, Enemy[]>>;
  private enemyIdMap: Map<string, Enemy> = new Map();

  private gameDataLoadedPromise = new Promise((resolve) => {
    this.gameDataLoadedResolve = resolve;
  });
  private gameDataLoadedResolve: Function;

  constructor(
    private firestore: Firestore,
    private dbRef: DbRefService,
    private auth: Auth
  ) {
    this.initLocalStorage();
  }

  // TODO: Comment this + getAllBosses properly.
  getAllMonsters(): Observable<MonsterData[]> {
    return this.monsterDataMapSubj.pipe(
      map((monsterMap) => {
        const monsters = Array.from(monsterMap.values());
        return monsters;
      })
    );
  }

  getAllBosses(): Observable<BossData[]> {
    return this.bossDataMapSubj.pipe(
      map((bossMap) => {
        const bosses = Array.from(bossMap.values());
        return bosses;
      })
    );
  }

  createPartyMonsters(newMonsters: ScenarioEnemyData[]) {
    const batch = writeBatch(this.firestore);
    for (const newMonster of newMonsters) {
      const newMonsterDoc = doc(
        collection(
          this.firestore,
          `${PARTIES_COLLECTION}/${DEFAULT_PARTY}/${PARTY_MONSTERS_COLLECTION}`
        )
      );
      batch.set(newMonsterDoc, newMonster);
    }
    batch.commit();
  }

  /**
   * Returns wrapper objects for Enemies in a given party, including
   * both scenario-specific data and generic EnemyData.
   *
   * Results are grouped by class since every current usage requires this.
   */
  getPartyEnemies(): Observable<Map<EnemyClassId, Enemy[]>> {
    if (!this.partyEnemySubj) {
      this.partyEnemySubj = new ReplaySubject(1);
      collectionSnapshots(this.dbRef.partyMonstersCollection()).subscribe(
        (scenarioEnemyDocs) => {
          // Preemptively return an empty list as forkJoin([]) never fires.
          if (scenarioEnemyDocs.length === 0) {
            this.partyEnemySubj.next(new Map());
            return;
          }
          const enemyObservables: Observable<Enemy>[] = [];
          for (const scenarioEnemyDoc of scenarioEnemyDocs) {
            const scenarioEnemyData = scenarioEnemyDoc.data();
            scenarioEnemyData.id = scenarioEnemyDoc.id;
            enemyObservables.push(
              // TODO: Understand why first() is needed here.
              this.getEnemyFromScenarioData(scenarioEnemyData).pipe(first())
            );
          }
          forkJoin(enemyObservables).subscribe((enemies) => {
            const map = new Map();
            for (const enemy of enemies) {
              if (map.has(enemy.classId)) {
                map.get(enemy.classId).push(enemy);
              } else {
                map.set(enemy.classId, [enemy]);
              }
            }
            // Sort each class list by tokenNum.
            Array.from(map.values()).forEach((arr) =>
              arr.sort((m1, m2) => m1.compareTo(m2))
            );
            this.partyEnemySubj.next(map);
          });
        }
      );
    }
    return this.partyEnemySubj.asObservable();
  }

  getUserInfo(): Observable<UserData> {
    return authState(this.auth).pipe(
      switchMap((user) => {
        return docSnapshots(this.dbRef.userDoc(user.uid)).pipe(
          map((doc) => doc.data())
        );
      })
    );
  }

  /**
   * Game destructor for the pieces of the game owned by this service.
   *
   * Should only be called by ResetService.
   */
  async resetGameStateFromResetService() {
    await this.deleteAllMonsters();
    await this.resetAllElements();
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

  private async resetMonsterDeck() {}

  /**
   * Returns an Enemy wrapper for the given ScenarioEnemyData.
   * Uses cached Enemy if possible.
   */
  private getEnemyFromScenarioData(
    scenarioData: ScenarioEnemyData
  ): Observable<Enemy> {
    // TODO: Change to getContext() if other things enter GameContext.
    return this.getParty().pipe(
      mergeMap((party) => {
        const context: GameContext = { party };
        // Enemy objects that already exist should simply receive new ScenarioData.
        if (this.enemyIdMap.has(scenarioData.id)) {
          this.enemyIdMap
            .get(scenarioData.id)
            .onNewScenarioData(scenarioData, context);
          return of(this.enemyIdMap.get(scenarioData.id));
        } else {
          // Construct a new Enemy only if needed.
          if (scenarioData.enemyType == EnemyType.MONSTER) {
            return this.getMonsterClassData(scenarioData.classId).pipe(
              map((monsterData) => {
                const monster = new Monster(scenarioData, context, monsterData);
                this.enemyIdMap.set(scenarioData.id, monster);
                return monster;
              })
            );
          } else if (scenarioData.enemyType == EnemyType.BOSS) {
            return this.getBossClassData(scenarioData.classId).pipe(
              map((bossData) => {
                const boss = new Boss(scenarioData, context, bossData);
                this.enemyIdMap.set(scenarioData.id, boss);
                return boss;
              })
            );
          }
        }
      })
    );
  }

  saveEnemy(enemy: Enemy) {
    const saveData = enemy.getSaveData();
    console.log("savedata", saveData);
    const enemyDoc = doc(
      this.firestore,
      `${PARTIES_COLLECTION}/${DEFAULT_PARTY}/${PARTY_MONSTERS_COLLECTION}/${saveData.id}`
    );
    // Remove dead enemies automatically.
    if (enemy.isDead()) {
      deleteDoc(enemyDoc);
    } else {
      updateDoc(enemyDoc, saveData as unknown);
    }
  }

  getParty(): Observable<Party> {
    if (!this.partySubj) {
      this.partySubj = new ReplaySubject(1);
      docSnapshots(
        doc(this.firestore, `${PARTIES_COLLECTION}/${DEFAULT_PARTY}`)
      ).subscribe((snap) => this.partySubj.next(snap.data() as Party));
    }
    return this.partySubj.asObservable();
  }

  updateScenarioLevel(newLevel: number): Promise<void> {
    return updateDoc(
      doc(this.firestore, `${PARTIES_COLLECTION}/${DEFAULT_PARTY}`),
      {
        activeScenario: `gh-${newLevel}`,
      }
    );
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

  /**
   * Returns *snapshot* of generic monster stats.
   *
   * This is a snapshot because it doesn't make sense to handle synchronizing base stats that don't change.
   * If base stats change somehow in the future, this will need to refresh.
   *
   * @param data from the current scenario
   */
  private getMonsterClassData(monsterId: string): Observable<MonsterData> {
    return this.getEnemyDataById(
      this.monsterDataMapSubj.asObservable(),
      monsterId
    );
  }

  private getBossClassData(bossId: string): Observable<BossData> {
    return this.getEnemyDataById(this.bossDataMapSubj.asObservable(), bossId);
  }

  private getEnemyDataById<T>(
    dataMap: Observable<Map<string, T>>,
    enemyId: string
  ) {
    return dataMap.pipe(
      first(),
      map((enemyMap) => {
        if (!enemyMap.has(enemyId)) {
          console.error("Invalid enemy specified: ", enemyId);
          return null;
        }
        return enemyMap.get(enemyId);
      })
    );
  }

  /** Reads bundle and initializes static storage. */
  private async initLocalStorage() {
    await this.loadGameBundle();
    return Promise.all([this.initMonsterMap(), this.initBossMap()]);
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
   */
  private async initMonsterMap() {
    this.monsterDataMapSubj.next(
      await getCollectionMapById(
        collection(
          this.firestore,
          MONSTERS_COLLECTION
        ) as CollectionReference<MonsterData>
      )
    );
  }

  private async initBossMap() {
    this.bossDataMapSubj.next(
      await getCollectionMapById(
        collection(
          this.firestore,
          BOSSES_COLLECTION
        ) as CollectionReference<BossData>
      )
    );
  }
}

/** Returns a map of all docs in a collection by {id, all data}. Fires on update. */
async function getCollectionMapById<T>(
  ref: CollectionReference<T>
): Promise<Map<string, T>> {
  const querySnap = await getDocsFromCache(ref);
  return new Map<string, T>(
    querySnap.docs.map((doc) => [doc.id, doc.data() as T])
  );
}
