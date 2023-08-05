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

  imageClassId: string;

  /** For valid IDs, this will be the GameBox. */
  prefix: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.classId) {
      // Frosthaven has scenario-specific monsters, ex: fh_found_scenario_0.
      // This is a hacky way to handle it, but it's wrapped in a component and not toooo bad.
      const fhMatch = this.classId.match(SCENARIO_ID_REGEX);
      if (fhMatch) {
        this.imageClassId = fhMatch[1];
      } else {
        this.imageClassId = this.classId;
      }

      const split = this.classId.indexOf("_");
      if (split === -1) {
        this.prefix = this.classId;
      } else {
        this.prefix = this.classId.substring(0, split);
      }
    }
  }
}

const SCENARIO_ID_REGEX = /^(fh_[a-zA-Z\s]+)_scenario_\d+$/;
