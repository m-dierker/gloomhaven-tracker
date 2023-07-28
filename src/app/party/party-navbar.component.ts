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
  lastSelectedClassId: EnemyClassId;

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

    this.onUrlChange(this.router.url);
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.onUrlChange(evt.url);
      }
    });
  }

  private onUrlChange(newUrl: string) {
    console.log("newUrl", newUrl);
    this.enemySubpanelOpen = newUrl.startsWith(PARTY_MONSTERS_URL);
    if (newUrl.startsWith(PARTY_ADD_MONSTERS_URL)) {
      // Intentionally set null, which is not undefined (all).
      this.lastSelectedClassId = null;
    } else {
      const existingClassMatch = newUrl.match(PARTY_MONSTER_CLASS_ID_REGEX);
      if (existingClassMatch) {
        this.lastSelectedClassId = existingClassMatch[1] as EnemyClassId;
      }
      if (this.lastSelectedClassId === null) {
        this.lastSelectedClassId = undefined;
      }
    }
  }

  setClassFilter(classId: EnemyClassId) {
    // Actually changing the filter is done with routerLink.
    // This just updates internal state for highlighting.
    this.lastSelectedClassId = classId;
  }

  onMonsterNavClick(evt: Event) {
    // If the monster panel is already visible (i.e. this is a double tap), show all monsters.
    if (this.router.url.startsWith(PARTY_MONSTERS_URL)) {
      evt.preventDefault();
      evt.stopPropagation();

      this.router.navigate(["/party/monsters"]);
      this.lastSelectedClassId = undefined;
    }
  }

  /** Returns a list for routerLink of where the Skull button should navigate. */
  getLastMonstersRoute() {
    if (this.lastSelectedClassId) {
      return [PARTY_MONSTERS_URL, { classIdFilter: this.lastSelectedClassId }];
    } else {
      return [PARTY_MONSTERS_URL];
    }
  }
}

const PARTY_MONSTERS_URL = "/party/monsters";

const PARTY_ADD_MONSTERS_URL = "/party/monsters/add";

// There has to be a better way to do this. -_-
const PARTY_MONSTER_CLASS_ID_REGEX = /classIdFilter=([a-zA-Z_]+)/;
