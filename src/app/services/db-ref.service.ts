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
} from "../db/db-constants";

@Injectable({
  providedIn: "root",
})
export class DbRefService {
  constructor(private firestore: Firestore) {}

  /** Doc tracking a single element. */
  elementDoc(element: ElementType): DocumentReference<ElementData> {
    return doc(
      this.firestore,
      `${PARTIES_COLLECTION}/${DEFAULT_PARTY}/elements/${element}`
    ) as DocumentReference<ElementData>;
  }

  /** Collection of all elements for a party. */
  elementsCollection(): CollectionReference<ElementData> {
    return collection(
      this.firestore,
      `${PARTIES_COLLECTION}/${DEFAULT_PARTY}/elements`
    ) as CollectionReference<ElementData>;
  }

  /** Collection of all monsters active on the board for a party. */
  partyMonstersCollection(): CollectionReference {
    return collection(
      this.firestore,
      `${PARTY_COLLECTION}/${DEFAULT_PARTY}/${PARTY_MONSTERS_COLLECTION}`
    );
  }
}