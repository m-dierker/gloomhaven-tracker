import { Injectable } from "@angular/core";
import {
  collectionSnapshots,
  Firestore,
  QueryDocumentSnapshot,
} from "@angular/fire/firestore";
import {
  getDocs,
  runTransaction,
  setDoc,
  writeBatch,
} from "firebase/firestore";
import { Observable } from "rxjs";
import { MonsterAbilityDeckDocument } from "src/types/ability-cards";
import { DbRefService } from "./db-ref.service";

@Injectable({
  providedIn: "root",
})
export class MonsterAbilityDeckService {
  constructor(private dbRef: DbRefService, private firestore: Firestore) {}

  getDecks(): Observable<QueryDocumentSnapshot<MonsterAbilityDeckDocument>[]> {
    return collectionSnapshots(this.dbRef.monsterAbilityDeckCollection());
  }

  flipCard(cardClassId: string): Promise<void> {
    return runTransaction(this.firestore, async (t) => {
      const oldDeck = (
        await t.get(this.dbRef.monsterAbilityDeckDoc(cardClassId))
      ).data();
      if (oldDeck.unflipped.length === 0) {
        alert("Cannot flip, please shuffle");
        return;
      }
      const drawnCard = oldDeck.unflipped.splice(
        Math.floor(oldDeck.unflipped.length * Math.random()),
        1
      )[0];
      t.set(this.dbRef.monsterAbilityDeckDoc(cardClassId), {
        unflipped: oldDeck.unflipped,
        flipped: [drawnCard].concat(oldDeck.flipped),
      });
    });
  }

  undoFlip(cardClassId: string): Promise<void> {
    return runTransaction(this.firestore, async (t) => {
      const oldDeck = (
        await t.get(this.dbRef.monsterAbilityDeckDoc(cardClassId))
      ).data();
      if (oldDeck.flipped.length === 0) {
        alert("No cards to undo");
        return;
      }
      const undoCard = oldDeck.flipped.splice(0, 1)[0];
      t.set(this.dbRef.monsterAbilityDeckDoc(cardClassId), {
        flipped: oldDeck.flipped,
        unflipped: [...oldDeck.unflipped, undoCard],
      });
    });
  }

  shuffleCards(cardClassId: string): Promise<void> {
    return setDoc(this.dbRef.monsterAbilityDeckDoc(cardClassId), {
      flipped: [],
      unflipped: [1, 2, 3, 4, 5, 6, 7, 8],
    });
  }

  async deleteAllDecks() {
    const decksCol = await getDocs(this.dbRef.monsterAbilityDeckCollection());
    const batch = writeBatch(this.firestore);
    for (const deckCol of decksCol.docs) {
      batch.delete(deckCol.ref);
    }
    return batch.commit();
  }
}
