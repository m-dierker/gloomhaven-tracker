import { Component, OnInit } from "@angular/core";
import { ALL_ELEMENT_TYPES, ElementState, ElementType } from "../db/elements";
import { DbService } from "../services/db.service";
import { GloomhavenService } from "../services/gloomhaven.service";

@Component({
  selector: "app-party-element-tracker",
  templateUrl: "./party-element-tracker.component.html",
  styleUrls: ["./party-element-tracker.component.scss"],
})
export class PartyElementTrackerComponent implements OnInit {
  panelOpen = false;

  ALL_ELEMENT_TYPES = ALL_ELEMENT_TYPES;

  constructor(private db: DbService, private game: GloomhavenService) {}

  disableNextTurn = false;

  ngOnInit(): void {}

  togglePanelOpen() {
    this.panelOpen = !this.panelOpen;
  }

  async nextTurn() {
    this.disableNextTurn = true;
    await this.game.nextTurn();
    // Intentionally keep the button off a little longer to avoid double clicks.
    setTimeout(() => {
      this.disableNextTurn = false;
    }, NEXT_TURN_DISABLE_TIME_MS);
  }

  async onSetElementState(element: ElementType, state: ElementState) {
    this.db.setElementState(element, state);
    this.togglePanelOpen();
  }
}

const NEXT_TURN_DISABLE_TIME_MS = 2000;
