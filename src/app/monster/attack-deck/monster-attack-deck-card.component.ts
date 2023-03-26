import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { AttackModifier } from "src/types/attack-modifiers";

@Component({
  selector: "app-monster-attack-deck-card",
  templateUrl: "./monster-attack-deck-card.component.html",
  styleUrls: ["./monster-attack-deck-card.component.scss"],
})
export class MonsterAttackDeckCardComponent {
  @Input()
  val: AttackModifier | undefined;

  @Input()
  flipped: boolean;

  visible: boolean;

  constructor() {}
}
