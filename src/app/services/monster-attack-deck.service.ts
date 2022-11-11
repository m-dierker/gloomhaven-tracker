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
    return updateDoc(this.dbRef.defaultPartyDoc(), update);
  }

  getMonsterDeck(): Observable<MonsterDeck> {
    // TODO: Only fire this when a change on monsterDeck.flipped actually occurred.
    return this.db.getParty().pipe(map((party) => party.monsterDeck));
  }

  flipAttackCard() {
    runTransaction(this.firestore, async (t) => {
      const party = await (await t.get(this.dbRef.defaultPartyDoc())).data();
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
      t.update(this.dbRef.defaultPartyDoc(), {
        monsterDeck: {
          unflipped: remainingCards,
          flipped: [drawnCard].concat(oldFlipped),
        },
      });
    });
  }

  addCard(card: AttackModifier): Promise<void> {
    return runTransaction(this.firestore, async (t) => {
      const party = await (await t.get(this.dbRef.defaultPartyDoc())).data();
      t.update(this.dbRef.defaultPartyDoc(), {
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
