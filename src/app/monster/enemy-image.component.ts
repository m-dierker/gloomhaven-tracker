import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Party } from "src/types/party";
import { Enemy } from "../db/enemy";

@Component({
  selector: "app-enemy-image",
  templateUrl: "./enemy-image.component.html",
  styleUrls: ["./enemy-image.component.scss"],
})
export class EnemyImageComponent implements OnInit, OnChanges {
  @Input()
  dbClassId: string;

  @Input()
  isBoss: boolean;

  /** For valid IDs, this will be the GameBox. */
  prefix: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dbClassId) {
      const split = this.dbClassId.indexOf("_");
      if (split === -1) {
        this.prefix = this.dbClassId;
      } else {
        this.prefix = this.dbClassId.substring(0, split);
      }
    }
  }
}
