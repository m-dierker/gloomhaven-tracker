import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { Monster } from "../db/monster";
import { Figure } from "../db/figure";
import { FigureType } from "src/types/figure-type";

@Component({
  selector: "monster-cell",
  templateUrl: "./monster-cell.component.html",
  styleUrls: ["./monster-cell.component.scss"],
})
export class MonsterCellComponent implements OnInit, OnChanges {
  @Input()
  figure: Figure;

  /** Set if figure.type == MONSTER, else undefined. */
  monster: Monster;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.figure) {
      this.monster =
        this.figure.type === FigureType.MONSTER
          ? (this.figure as Monster)
          : undefined;
    }
  }
}
