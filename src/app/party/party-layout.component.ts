import { Component, OnInit } from "@angular/core";
import { DbService } from "../services/db.service";
import { Party } from "src/types/party";

@Component({
  selector: "app-party-layout",
  templateUrl: "./party-layout.component.html",
  styleUrls: ["./party-layout.component.scss"],
})
export class PartyLayoutComponent implements OnInit {
  party: Party;

  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.db.getParty().subscribe((party) => {
      this.party = party;
    });
  }
}
