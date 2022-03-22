import { Injectable } from "@angular/core";
import { Observable, ReplaySubject, of, forkJoin } from "rxjs";
import { map, first, switchMap, flatMap, mergeMap } from "rxjs/operators";
import { MonsterData, BossData } from "../../types/monsters";
import {
  MONSTERS_COLLECTION,
  BOSS_COLLECTION as BOSSES_COLLECTION,
  PARTY_COLLECTION as PARTIES_COLLECTION,
  DEFAULT_PARTY,
  PARTY_MONSTERS_COLLECTION,
  PARTY_COLLECTION,
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
  QueryDocumentSnapshot,
} from "firebase/firestore";
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

  constructor(
    private firestore: Firestore,
    private dbRef: DbRefService,
    private auth: Auth
  ) {
    this.initMonsterMap();
    this.initBossMap();
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
    // FIXME
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
          console.log("starting forkjoin", enemyObservables);
          forkJoin(enemyObservables).subscribe((enemies) => {
            console.log("forkjoin done");
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

  /** Resets everything to have a fresh game. */
  async fullyResetGameState() {
    await this.deleteAllMonsters();
    await this.resetAllElements();
  }

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
                console.log("md resolved", monster);
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

  /** Returns a streaming list of element updates. This is done so a tracker can handle bulk updates at once. Each update includes all elements. */
  getElementUpdates(): Observable<QueryDocumentSnapshot<ElementData>[]> {
    return collectionSnapshots(this.dbRef.elementsCollection());
  }

  getElementUpdate(element: ElementType): Observable<ElementData> {
    const elementDoc = this.dbRef.elementDoc(element);
    return docSnapshots(elementDoc).pipe(
      map((snap) => snap.data() as ElementData)
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

  /**
   * Initializes local storage for all monster stats.
   */
  private initMonsterMap() {
    getCollectionMapById(
      collection(
        this.firestore,
        MONSTERS_COLLECTION
      ) as CollectionReference<MonsterData>
    ).subscribe((map) => this.monsterDataMapSubj.next(map));
  }

  private initBossMap() {
    getCollectionMapById(
      collection(
        this.firestore,
        BOSSES_COLLECTION
      ) as CollectionReference<BossData>
    ).subscribe((map) => this.bossDataMapSubj.next(map));
  }
}

/** Returns a map of all docs in a collection by {id, all data}. Fires on update. */
function getCollectionMapById<T>(
  ref: CollectionReference<T>
): Observable<Map<string, T>> {
  return collectionSnapshots(ref).pipe(
    map((docs) => {
      return new Map<string, T>(docs.map((doc) => [doc.id, doc.data() as T]));
    })
  );
}
