import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Party } from "src/types/party";
import { Figure } from "../db/figure";

@Component({
  selector: "app-enemy-image",
  templateUrl: "./enemy-image.component.html",
  styleUrls: ["./enemy-image.component.scss"],
})
export class EnemyImageComponent implements OnInit, OnChanges {
  @Input()
  classId: string;

  @Input()
  isBoss: boolean;

  /** For valid IDs, this will be the GameBox. */
  prefix: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    // FIXME this is gonna break.
    if (changes.classId) {
      const split = this.classId.indexOf("_");
      if (split === -1) {
        this.prefix = this.classId;
      } else {
        this.prefix = this.classId.substring(0, split);
      }
    }
  }
}
