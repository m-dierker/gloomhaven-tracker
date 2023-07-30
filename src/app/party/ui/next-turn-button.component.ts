import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-next-turn-button",
  templateUrl: "./next-turn-button.component.html",
  styleUrls: ["./next-turn-button.component.scss"],
})
export class NextTurnButtonComponent {
  disableNextTurn = false;

  @Output() nextTurn = new EventEmitter<void>();

  nextTurnClicked() {
    if (this.disableNextTurn) {
      return;
    }
    this.disableNextTurn = true;
    setTimeout(() => (this.disableNextTurn = false), NEXT_TURN_DISABLE_TIME_MS);
    this.nextTurn.emit();
  }
}

const NEXT_TURN_DISABLE_TIME_MS = 1000;
