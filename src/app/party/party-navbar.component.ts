import { Component, OnInit } from "@angular/core";
import { DbService } from "../services/db.service";
import { Party } from "src/types/party";
import { Auth, User } from "@angular/fire/auth";
import { ActivatedRouteSnapshot, NavigationEnd, Router } from "@angular/router";
import { EnemyClassId } from "src/types/enemy";

@Component({
  selector: "app-party-navbar",
  templateUrl: "./party-navbar.component.html",
  styleUrls: ["./party-navbar.component.scss"],
})
export class PartyNavbarComponent implements OnInit {
  party: Party;
  user: User;

  enemySubpanelOpen = false;

  enemyClassIds: EnemyClassId[] = [];

  constructor(
    private db: DbService,
    private auth: Auth,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.db.getParty().subscribe((party) => {
      this.party = party;
      // This is slightly sketchy... but also I'm pretty sure it works fine?
      this.user = this.auth.currentUser;
    });

    this.db.getPartyEnemies().subscribe((enemyMap) => {
      this.enemyClassIds = Array.from(enemyMap.keys()).sort();
    });

    this.enemySubpanelOpen = this.router.url.startsWith("/party/monsters");
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.enemySubpanelOpen = evt.url.startsWith("/party/monsters");
      }
    });
  }
}
