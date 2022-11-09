import { Component, Input, OnInit } from "@angular/core";
import { AttackModifier } from "src/types/attack-modifiers";

@Component({
  selector: "app-monster-attack-deck-card",
  templateUrl: "./monster-attack-deck-card.component.html",
  styleUrls: ["./monster-attack-deck-card.component.scss"],
})
export class MonsterAttackDeckCardComponent implements OnInit {
  @Input()
  val: AttackModifier | undefined;

  @Input()
  flipped: boolean;

  constructor() {}

  ngOnInit(): void {}
}
