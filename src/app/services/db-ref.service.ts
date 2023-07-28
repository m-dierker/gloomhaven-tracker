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
  USERS_COLLECTION,
  PARTY_CHARACTERS_COLLECTION,
} from "../db/db-constants";
import { ScenarioFigureData } from "src/types/scenario";
import { ScenarioInfo } from "../db/scenario";
import { Party } from "src/types/party";
import { AppBootstrap } from "./bootstrap";
import { MonsterAbilityDeckDocument } from "src/types/ability-cards";
import { UserData } from "../db/user";
import { Figure } from "../db/figure";

@Injectable({
  providedIn: "root",
})
export class DbRefService {
  constructor(private firestore: Firestore) {}

  /** Returns the active party ID for this session. */
  private partyId(): string {
    return AppBootstrap.partyId;
  }

  partyDoc(): DocumentReference<Party> {
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

  /** Collection of all monsters and bosses active on the board for a party. */
  partyMonstersCollection(): CollectionReference<ScenarioFigureData> {
    return collection(
      this.firestore,
      `${PARTY_COLLECTION}/${this.partyId()}/${PARTY_MONSTERS_COLLECTION}`
    ) as CollectionReference<ScenarioFigureData>;
  }

  partyMonsterDoc(monsterId: string): DocumentReference<ScenarioFigureData> {
    return doc(
      this.firestore,
      `${PARTY_COLLECTION}/${this.partyId()}/${PARTY_MONSTERS_COLLECTION}/${monsterId}`
    ) as DocumentReference<ScenarioFigureData>;
  }

  /** Finds the right doc for a Figure regardless of type. */
  partyFigureDoc(figure: Figure): DocumentReference<ScenarioFigureData> {
    if (figure.isCharacter()) {
      return this.partyCharacterDoc(figure.scenarioId);
    }
    return this.partyMonsterDoc(figure.scenarioId);
  }

  /**
   * Collection of all characters in a party.
   * Characters differ from all other figures in that they aren't cleared by scenario so they're stored separately.
   */
  partyCharactersCollection(): CollectionReference<ScenarioFigureData> {
    return collection(
      this.firestore,
      `${PARTY_COLLECTION}/${this.partyId()}/${PARTY_CHARACTERS_COLLECTION}`
    ) as CollectionReference<ScenarioFigureData>;
  }

  partyCharacterDoc(
    characterId: string
  ): DocumentReference<ScenarioFigureData> {
    return doc(
      this.firestore,
      `${PARTY_COLLECTION}/${this.partyId()}/${PARTY_CHARACTERS_COLLECTION}/${characterId}`
    ) as DocumentReference<ScenarioFigureData>;
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

  userDocNew(uid: string): DocumentReference<UserData> {
    return doc(
      this.firestore,
      `${USERS_COLLECTION}/${uid}`
    ) as DocumentReference<UserData>;
  }
}
