import { Injectable } from "@angular/core";
import { Firestore, runTransaction } from "@angular/fire/firestore";
import { updateDoc, doc } from "firebase/firestore";
import { map, Observable } from "rxjs";
import { AttackModifier, AttackModifierUtil } from "src/types/attack-modifiers";
import { MonsterDeck, Party } from "src/types/party";
import { DbRefService } from "./db-ref.service";
import { DbService } from "./db.service";

@Injectable({
  providedIn: "root",
})
export class MonsterAttackDeckService {
  constructor(
    private firestore: Firestore,
    private dbRef: DbRefService,
    private db: DbService
  ) {}

  resetDeck() {
    const update: Partial<Party> = {
      monsterDeck: {
        unflipped: AttackModifierUtil.getStandardSet(),
        flipped: [],
      },
    };
    return updateDoc(this.dbRef.partyDoc(), update);
  }

  getMonsterDeck(): Observable<MonsterDeck> {
    // TODO: Only fire this when a change on monsterDeck.flipped actually occurred.
    return this.db.getParty().pipe(map((party) => party.monsterDeck));
  }

  flipAttackCard(): Promise<unknown> {
    // Latency notes: This transaction can take 250-750ms or so.
    return runTransaction(this.firestore, async (t) => {
      const party = await (await t.get(this.dbRef.partyDoc())).data();
      const oldDeck = party.monsterDeck;
      if (oldDeck.unflipped.length === 0) {
        // Shuffle deck
        alert(
          "Monster deck was empty. This should not be possible. Exiting..."
        );
        return;
      }

      let unflipped = oldDeck.unflipped;
      let oldFlipped = oldDeck.flipped;

      // Check if the deck needs to be shuffled after the last draw.
      if (
        oldFlipped.length > 0 &&
        AttackModifierUtil.shouldFlipAfterDrawing(oldFlipped[0])
      ) {
        let newDeck = AttackModifierUtil.getStandardSet();
        // Copy any bless/curse cards still in the deck.
        const unflippedTempCards = oldDeck.unflipped.filter((card) =>
          AttackModifierUtil.isTemporary(card)
        );

        unflipped = newDeck.concat(unflippedTempCards);
        oldFlipped = [];
      }

      const { drawnCard, remainingCards } = drawCard(unflipped);
      // const drawnCard = AttackModifier.ZERO;
      // const remainingCards = unflipped;
      t.update(this.dbRef.partyDoc(), {
        monsterDeck: {
          unflipped: remainingCards,
          flipped: [drawnCard].concat(oldFlipped),
        },
      });
    });
  }

  async undoLastDraw(): Promise<void> {
    return runTransaction(this.firestore, async (t) => {
      const party = await (await t.get(this.dbRef.partyDoc())).data();
      const oldDeck = party.monsterDeck;
      const oldFlipped = oldDeck.flipped;
      if (oldDeck.flipped.length === 0) {
        alert("No cards to undo");
        return;
      }
      const cardToUndo = oldFlipped.splice(0, 1)[0];
      t.update(this.dbRef.partyDoc(), {
        monsterDeck: {
          unflipped: [cardToUndo].concat(oldDeck.unflipped),
          flipped: oldFlipped,
        },
      });
    });
  }

  addCard(card: AttackModifier): Promise<void> {
    return runTransaction(this.firestore, async (t) => {
      const party = await (await t.get(this.dbRef.partyDoc())).data();
      t.update(this.dbRef.partyDoc(), {
        monsterDeck: {
          unflipped: party.monsterDeck.unflipped.concat([card]),
          flipped: party.monsterDeck.flipped,
        },
      });
    });
  }
}

function drawCard(cards: AttackModifier[]): {
  drawnCard: AttackModifier;
  remainingCards: AttackModifier[];
} {
  const randomCardIdx = Math.floor(Math.random() * cards.length);
  const drawnCard = cards.splice(randomCardIdx, 1)[0];
  return {
    drawnCard,
    remainingCards: cards,
  };
}
