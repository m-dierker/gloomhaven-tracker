import { Component, OnInit } from "@angular/core";
import {
  ALL_ELEMENT_TYPES,
  ElementState,
  ElementType,
} from "src/app/db/elements";
import { DbService } from "src/app/services/db.service";
import { GloomhavenService } from "src/app/services/gloomhaven.service";

@Component({
  selector: "app-party-element-tracker-page",
  templateUrl: "./party-element-tracker-page.component.html",
  styleUrls: ["./party-element-tracker-page.component.scss"],
})
export class PartyElementTrackerPageComponent implements OnInit {
  ALL_ELEMENT_TYPES = ALL_ELEMENT_TYPES;

  disableNextTurn = false;

  constructor(private db: DbService, private game: GloomhavenService) {}

  ngOnInit(): void {}

  async onSetElementState(element: ElementType, state: ElementState) {
    this.db.setElementState(element, state);
  }

  async nextTurn() {
    this.disableNextTurn = true;
    await this.game.nextTurn();
    // Intentionally keep the button off a little longer to avoid double clicks.
    setTimeout(() => {
      this.disableNextTurn = false;
    }, NEXT_TURN_DISABLE_TIME_MS);
  }
}

const NEXT_TURN_DISABLE_TIME_MS = 2000;
