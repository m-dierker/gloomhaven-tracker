import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MonsterAttackDeckService } from "src/app/services/monster-attack-deck.service";
import { AttackModifier, AttackModifierUtil } from "src/types/attack-modifiers";

@Component({
  selector: "app-monster-attack-deck-display",
  templateUrl: "./monster-attack-deck-display.component.html",
  styleUrls: ["./monster-attack-deck-display.component.scss"],
})
export class MonsterAttackDeckDisplayComponent implements OnInit {
  @ViewChild("animateStack")
  private animateStackRef: ElementRef<any>;

  public lastCard?: AttackModifier;
  public allFlippedCards: AttackModifier[] = [];
  public blessCount = 0;
  public curseCount = 0;
  public historyVisible = false;

  public animatingCard?: AttackModifier;
  public animatingFlipped: boolean;
  public AttackModifier = AttackModifier;
  private animatingCardTimeout?: any;

  private lastFlip: number | undefined;

  constructor(private mAttackDeck: MonsterAttackDeckService) {}

  ngOnInit(): void {
    this.mAttackDeck.getMonsterDeck().subscribe((monsterDeck) => {
      const flippedCards = monsterDeck.flipped;
      const unflippedCards = monsterDeck.unflipped;

      // Check for a deck reset.
      if (!flippedCards || flippedCards.length === 0) {
        this.lastCard = undefined;
        this.animatingCard = undefined;
        this.allFlippedCards = [];
        this.recomputeStats(unflippedCards);
        return;
      }

      // Check for the observable firing when it shouldn't have.
      // TODO: This should go away at some point.
      if (flippedCards.length === this.allFlippedCards.length) {
        // Drop the update for now.
        this.recomputeStats(unflippedCards);
        return;
      }

      // End the animation early if it's still happening.
      if (this.animatingCard) {
        this.onEndCardAnimation();
      }

      this.allFlippedCards = flippedCards;
      this.recomputeStats(unflippedCards);
      this.animatingCard = flippedCards[0];
      this.animatingFlipped = false;

      setTimeout(() => {
        this.animatingFlipped = true;
        this.animatingCardTimeout = setTimeout(() => {
          this.onEndCardAnimation();
        }, FLIP_ANIMATION_DURATION_MS);
      }, AFTER_DOM_THRESHOLD_MS);
    });
  }

  private onEndCardAnimation() {
    this.lastCard = this.animatingCard;
    this.animateStackRef.nativeElement.classList.remove("flipped");
    this.animatingCard = undefined;

    // Clear this out just in case it was called early.
    clearTimeout(this.animatingCardTimeout);
    this.animatingCardTimeout = undefined;
  }

  async drawCard() {
    this.historyVisible = false;

    await this.maybeAnimateShuffle();

    // const now = Date.now();
    // if (this.lastFlip && now - this.lastFlip < CLICK_DEDUPE_THRESHOLD_MS) {
    //   console.log("Dropping card draw as too close to last draw");
    //   return;
    // }
    // Drop the press if an animation is happening.
    if (this.animatingCard) {
      return;
    }
    this.lastFlip = Date.now();
    return this.mAttackDeck.flipAttackCard();
  }

  public addToDeck(card: AttackModifier) {
    this.mAttackDeck.addCard(card);
  }

  public undoLastDraw() {
    this.mAttackDeck.undoLastDraw();
  }

  public toggleHistory() {
    this.historyVisible = !this.historyVisible;
  }

  private isDeckAboutToShuffle(): boolean {
    return (
      // Check allFlippedCards in case an animation is still in progress.
      this.allFlippedCards.length > 0 &&
      AttackModifierUtil.shouldFlipAfterDrawing(this.allFlippedCards[0])
    );
  }

  private async maybeAnimateShuffle(): Promise<void> {
    if (!this.isDeckAboutToShuffle()) {
      return;
    }
    return new Promise((resolve) => {
      // Animate in reverse
      this.animatingFlipped = true;
      this.animatingCard = this.allFlippedCards[0];
      // Remove the last card early so there's an empty spot during the cycle back.
      this.lastCard = undefined;
      setTimeout(() => {
        this.animatingFlipped = false;
        setTimeout(() => {
          this.animatingCard = undefined;
          this.allFlippedCards = [];
          resolve();
        }, FLIP_ANIMATION_DURATION_MS);
      }, AFTER_DOM_THRESHOLD_MS);
    });
  }

  private recomputeStats(unflippedCards: AttackModifier[]) {
    this.blessCount = this.curseCount = 0;
    for (const card of unflippedCards) {
      if (card == AttackModifier.BLESS) {
        this.blessCount++;
      } else if (card == AttackModifier.CURSE) {
        this.curseCount++;
      }
    }
  }
}

/** Millis to wait before animating after animation card is in the dom. There is probably a better way to do this. */
const AFTER_DOM_THRESHOLD_MS = 50;

/** Threshold for click dedupes on drawing a card. */
const CLICK_DEDUPE_THRESHOLD_MS = 200;

/** Duration for the flip animation. Must match CSS. */
const FLIP_ANIMATION_DURATION_MS = 500;
