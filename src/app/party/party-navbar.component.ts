import { Component, OnInit } from "@angular/core";
import { DbService } from "../services/db.service";
import { Party } from "src/types/party";
import { Auth, User } from "@angular/fire/auth";

@Component({
  selector: "app-party-navbar",
  templateUrl: "./party-navbar.component.html",
  styleUrls: ["./party-navbar.component.scss"],
})
export class PartyNavbarComponent implements OnInit {
  party: Party;
  user: User;

  constructor(private db: DbService, private auth: Auth) {}

  ngOnInit(): void {
    this.db.getParty().subscribe((party) => {
      this.party = party;
      // This is slightly sketchy... but also I'm pretty sure it works fine?
      this.user = this.auth.currentUser;
    });
  }
}
