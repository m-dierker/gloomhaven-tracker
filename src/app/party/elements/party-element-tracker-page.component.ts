import { Component, OnInit } from "@angular/core";
import {
  ALL_ELEMENT_TYPES,
  ElementState,
  ElementType,
} from "src/app/db/elements";
import { DbService } from "src/app/services/db.service";

@Component({
  selector: "app-party-element-tracker-page",
  templateUrl: "./party-element-tracker-page.component.html",
  styleUrls: ["./party-element-tracker-page.component.scss"],
})
export class PartyElementTrackerPageComponent implements OnInit {
  ALL_ELEMENT_TYPES = ALL_ELEMENT_TYPES;

  constructor(private db: DbService) {}

  ngOnInit(): void {}

  async onSetElementState(element: ElementType, state: ElementState) {
    this.db.setElementState(element, state);
  }
}
