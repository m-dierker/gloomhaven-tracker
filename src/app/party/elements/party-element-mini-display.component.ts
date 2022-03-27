import { Component, OnInit } from "@angular/core";
import { DbService } from "src/app/services/db.service";

@Component({
  selector: "app-party-element-mini-display",
  templateUrl: "./party-element-mini-display.component.html",
  styleUrls: ["./party-element-mini-display.component.scss"],
})
export class PartyElementMiniDisplayComponent implements OnInit {
  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.db.getElementCollectionUpdates;
  }
}
