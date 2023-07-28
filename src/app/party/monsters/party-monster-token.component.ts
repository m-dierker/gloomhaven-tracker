import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { GameBox, getGameBoxFromClassId } from "src/types/gamebox";

@Component({
  selector: "app-party-monster-token",
  templateUrl: "./party-monster-token.component.html",
  styleUrls: ["./party-monster-token.component.scss"],
})
export class PartyMonsterTokenComponent implements OnChanges {
  @Input()
  classId: string;

  @Input()
  isBoss: boolean;

  @Input()
  tokenNum: number;

  @Input()
  isElite: boolean;

  gameBox: GameBox;
  GameBox = GameBox;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.classId) {
      this.gameBox = getGameBoxFromClassId(this.classId);
    }
  }
}
