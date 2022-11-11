import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { MonsterAbilityDeckService } from "src/app/services/monster-ability-deck.service";
import { MonsterAbilityDeckDocument } from "src/types/ability-cards";

@Component({
  selector: "app-monster-ability-deck",
  templateUrl: "./monster-ability-deck.component.html",
  styleUrls: ["./monster-ability-deck.component.scss"],
})
export class MonsterAbilityDeckComponent implements OnInit, OnChanges {
  @Input()
  cardClassId: string;

  @Input()
  deck: MonsterAbilityDeckDocument;

  public lastCard?: number;

  constructor(private mAbilityDeck: MonsterAbilityDeckService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.deck.flipped.length === 0) {
      this.lastCard = undefined;
    }
    this.lastCard = this.deck.flipped[0];
  }

  drawCard() {
    this.mAbilityDeck.flipCard(this.cardClassId);
  }

  shuffleCards() {
    this.mAbilityDeck.shuffleCards(this.cardClassId);
  }
}
