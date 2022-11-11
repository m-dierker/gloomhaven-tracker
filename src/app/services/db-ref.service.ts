import { Injectable } from "@angular/core";
import { Firestore } from "@angular/fire/firestore";
import {
  collection,
  CollectionReference,
  doc,
  DocumentReference,
} from "firebase/firestore";
import { ElementData, ElementType } from "../db/elements";
import {
  PARTY_COLLECTION as PARTIES_COLLECTION,
  DEFAULT_PARTY,
  PARTY_COLLECTION,
  PARTY_MONSTERS_COLLECTION,
  SCENARIOS_COLLECTION,
  MONSTER_ABILITY_DECK_COLLECTION,
} from "../db/db-constants";
import { UserData } from "../db/user";
import { ScenarioEnemyData } from "src/types/scenario";
import { ScenarioInfo } from "../db/scenario";
import { Party } from "src/types/party";
import { AppBootstrap } from "./bootstrap";
import { MonsterAbilityDeckDocument } from "src/types/ability-cards";

@Injectable({
  providedIn: "root",
})
export class DbRefService {
  constructor(private firestore: Firestore) {}

  /** Returns the active party ID for this session. */
  private partyId(): string {
    return AppBootstrap.partyId;
  }

  defaultPartyDoc(): DocumentReference<Party> {
    return doc(
      this.firestore,
      `${PARTIES_COLLECTION}/${this.partyId()}`
    ) as DocumentReference<Party>;
  }

  /** Doc tracking a single element. */
  elementDoc(element: ElementType): DocumentReference<ElementData> {
    return doc(
      this.firestore,
      `${PARTIES_COLLECTION}/${this.partyId()}/elements/${element}`
    ) as DocumentReference<ElementData>;
  }

  /** Collection of all elements for a party. */
  elementsCollection(): CollectionReference<ElementData> {
    return collection(
      this.firestore,
      `${PARTIES_COLLECTION}/${this.partyId()}/elements`
    ) as CollectionReference<ElementData>;
  }

  /** Collection of all monsters active on the board for a party. */
  partyMonstersCollection(): CollectionReference<ScenarioEnemyData> {
    return collection(
      this.firestore,
      `${PARTY_COLLECTION}/${this.partyId()}/${PARTY_MONSTERS_COLLECTION}`
    ) as CollectionReference<ScenarioEnemyData>;
  }

  scenarioDoc(scenarioId: string): DocumentReference<ScenarioInfo> {
    return doc(
      this.firestore,
      `${SCENARIOS_COLLECTION}/${scenarioId}`
    ) as DocumentReference<ScenarioInfo>;
  }

  monsterAbilityDeckCollection() {
    return collection(
      this.firestore,
      `${PARTIES_COLLECTION}/${this.partyId()}/${MONSTER_ABILITY_DECK_COLLECTION}`
    ) as CollectionReference<MonsterAbilityDeckDocument>;
  }

  monsterAbilityDeckDoc(cardId: string) {
    return doc(
      this.firestore,
      `${PARTIES_COLLECTION}/${this.partyId()}/${MONSTER_ABILITY_DECK_COLLECTION}/${cardId}`
    ) as DocumentReference<MonsterAbilityDeckDocument>;
  }

  userDoc(uid: string): DocumentReference<UserData> {
    return doc(
      this.firestore,
      `${PARTIES_COLLECTION}/${this.partyId()}/members/${uid}`
    ) as DocumentReference<UserData>;
  }
}
