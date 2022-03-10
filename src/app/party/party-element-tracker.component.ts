import { Component, OnInit } from "@angular/core";
import { ALL_ELEMENT_TYPES, ElementState, ElementType } from "../db/elements";
import { DbService } from "../services/db.service";

@Component({
  selector: "app-party-element-tracker",
  templateUrl: "./party-element-tracker.component.html",
  styleUrls: ["./party-element-tracker.component.scss"],
})
export class PartyElementTrackerComponent implements OnInit {
  panelOpen = false;

  ALL_ELEMENT_TYPES = ALL_ELEMENT_TYPES;

  constructor(private db: DbService) {}

  ngOnInit(): void {}

  togglePanelOpen() {
    this.panelOpen = !this.panelOpen;
  }

  async onSetElementState(element: ElementType, state: ElementState) {
    await this.db.setElementState(element, state);
  }
}
