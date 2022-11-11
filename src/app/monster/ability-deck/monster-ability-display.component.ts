import { Component, OnInit } from "@angular/core";
import { QueryDocumentSnapshot } from "@angular/fire/firestore";
import { MonsterAbilityDeckService } from "src/app/services/monster-ability-deck.service";
import { MonsterAbilityDeckDocument } from "src/types/ability-cards";

@Component({
  selector: "app-monster-ability-display",
  templateUrl: "./monster-ability-display.component.html",
  styleUrls: ["./monster-ability-display.component.scss"],
})
export class MonsterAbilityDisplayComponent implements OnInit {
  public decks: { id: string; deck: MonsterAbilityDeckDocument }[];

  constructor(private mAbilityDeck: MonsterAbilityDeckService) {}

  ngOnInit(): void {
    this.mAbilityDeck.getDecks().subscribe((decks) => {
      this.decks = decks.map((doc) => {
        return { id: doc.id, deck: doc.data() };
      });
    });
  }
}
