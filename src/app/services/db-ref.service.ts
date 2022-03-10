import { Injectable } from "@angular/core";
import { Firestore } from "@angular/fire/firestore";
import { doc, DocumentReference } from "firebase/firestore";
import { ElementType } from "../db/elements";
import {
  PARTY_COLLECTION as PARTIES_COLLECTION,
  DEFAULT_PARTY,
} from "../config/db";

@Injectable({
  providedIn: "root",
})
export class DbRefService {
  constructor(private firestore: Firestore) {}

  elementDoc(element: ElementType): DocumentReference {
    return doc(
      this.firestore,
      `${PARTIES_COLLECTION}/${DEFAULT_PARTY}/elements/${element}`
    );
  }
}
