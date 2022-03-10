import { Injectable } from "@angular/core";
import { Observable, ReplaySubject, of, forkJoin } from "rxjs";
import { map, first, flatMap, switchMap } from "rxjs/operators";
import {
  MonsterData,
  BossData,
  MonsterType,
  MonsterStats,
} from "../../types/monsters";
import {
  MONSTERS_COLLECTION,
  BOSS_COLLECTION as BOSSES_COLLECTION,
  PARTY_COLLECTION as PARTIES_COLLECTION,
  DEFAULT_PARTY,
  PARTY_MONSTERS_COLLECTION,
  PARTY_COLLECTION,
} from "../config/db";
import { Party, ScenarioMonsterData } from "../../types/party";
import { Monster } from "../db/monsters";
import {
  addDoc,
  collection,
  CollectionReference,
  collectionSnapshots,
  doc,
  docSnapshots,
  enableIndexedDbPersistence,
  enableMultiTabIndexedDbPersistence,
  Firestore,
  getDocs,
  setDoc,
  updateDoc,
  writeBatch,
} from "@angular/fire/firestore";
import { deleteDoc, QueryDocumentSnapshot } from "firebase/firestore";
import { ElementData, ElementState, ElementType } from "../db/elements";
import { DbRefService } from "./db-ref.service";

@Injectable({
  providedIn: "root",
})
export class DbService {
  private monsterDataMap: ReplaySubject<Map<String, MonsterData>> =
    new ReplaySubject(1);
  private monsterIdMap: Map<string, Monster> = new Map();

  constructor(private firestore: Firestore, private dbRef: DbRefService) {
    this.initMonsterMap();
  }

  getAllMonsters(): Observable<MonsterData[]> {
    return this.monsterDataMap.pipe(
      map((monsterMap) => {
        const monsters = Array.from(monsterMap.values());
        return monsters;
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
  getMonsterDataById(monsterId: string): Observable<MonsterData> {
    return this.monsterDataMap.pipe(
      first(),
      map((monsterMap) => {
        if (!monsterMap.has(monsterId)) {
          console.error("Invalid monster specified: ", monsterId);
          return null;
        }
        return monsterMap.get(monsterId);
      })
    );
  }

  createPartyMonsters(newMonsters: ScenarioMonsterData[]) {
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
   * Returns wrapper objects for Monsters in a given party, including
   * both scenario-specific data and generic MonsterData.
   */
  getPartyMonsters(): Observable<Monster[]> {
    return collectionSnapshots(
      collection(
        this.firestore,
        `${PARTY_COLLECTION}/${DEFAULT_PARTY}/${PARTY_MONSTERS_COLLECTION}`
      ) as CollectionReference<ScenarioMonsterData>
    ).pipe(
      switchMap((scenarioMonsterDocs) => {
        // Preemptively return an empty list as forkJoin([]) never fires.
        if (scenarioMonsterDocs.length === 0) {
          return of([]);
        }
        const monsterObservables: Observable<Monster>[] = [];
        for (const scenarioMonsterDoc of scenarioMonsterDocs) {
          const scenarioMonsterData = scenarioMonsterDoc.data();
          scenarioMonsterData.id = scenarioMonsterDoc.id;
          monsterObservables.push(
            this.getMonsterForScenarioData(scenarioMonsterData)
          );
        }
        return forkJoin(monsterObservables);
      })
    );
  }

  async deletePartyMonsters() {
    const monsterCol = await getDocs(
      collection(
        this.firestore,
        `${PARTY_COLLECTION}/${DEFAULT_PARTY}/${PARTY_MONSTERS_COLLECTION}`
      )
    );
    const batch = writeBatch(this.firestore);
    for (const monsterDoc of monsterCol.docs) {
      batch.delete(monsterDoc.ref);
    }
    await batch.commit();
  }

  /**
   * Returns a Monster wrapper for the given ScenarioMonsterData.
   */
  private getMonsterForScenarioData(
    scenarioData: ScenarioMonsterData
  ): Observable<Monster> {
    // Monster objects that already exist should simply receive new ScenarioData.
    if (this.monsterIdMap.has(scenarioData.id)) {
      this.monsterIdMap.get(scenarioData.id).onNewScenarioData(scenarioData);
      return of(this.monsterIdMap.get(scenarioData.id));
    } else {
      return this.getMonsterDataById(scenarioData.monsterId).pipe(
        map((monsterData) => {
          const monster = new Monster(scenarioData, monsterData);
          this.monsterIdMap.set(scenarioData.id, monster);
          return monster;
        })
      );
    }
  }

  saveMonster(monster: Monster) {
    const saveData = monster.getSaveData();
    console.log("savedata", saveData);
    const monsterDoc = doc(
      this.firestore,
      `${PARTIES_COLLECTION}/${DEFAULT_PARTY}/${PARTY_MONSTERS_COLLECTION}/${saveData.id}`
    );
    // Remove dead monsters
    if (monster.isDead()) {
      deleteDoc(monsterDoc);
    } else {
      updateDoc(monsterDoc, saveData as unknown);
    }
  }

  getAllBosses(): Observable<BossData[]> {
    return collectionSnapshots(
      collection(
        this.firestore,
        BOSSES_COLLECTION
      ) as CollectionReference<BossData>
    ).pipe(map((bossCol) => bossCol.map((bossDoc) => bossDoc.data())));
  }

  getParty(): Observable<Party> {
    return docSnapshots(
      doc(this.firestore, `${PARTIES_COLLECTION}/${DEFAULT_PARTY}`)
    ).pipe(map((snap) => snap.data() as Party));
  }

  /** Returns a streaming list of element updates. This is done so a tracker can handle bulk updates at once. */
  getElementUpdates(): Observable<QueryDocumentSnapshot<ElementData>[]> {
    return collectionSnapshots(
      collection(
        this.firestore,
        `${PARTIES_COLLECTION}/${DEFAULT_PARTY}/elements`
      ) as CollectionReference<ElementData>
    );
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
   * Initializes local storage for all monster stats.
   */
  private initMonsterMap() {
    collectionSnapshots(
      collection(this.firestore, MONSTERS_COLLECTION)
    ).subscribe((monsterDocs) => {
      const monsterMap = new Map<string, MonsterData>(
        monsterDocs.map((monsterDoc) => {
          const monsterData = monsterDoc.data() as MonsterData;
          return [monsterData.id, monsterData];
        })
      );
      this.monsterDataMap.next(monsterMap);
    });
  }
}
