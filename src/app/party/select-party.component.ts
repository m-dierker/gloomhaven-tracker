import { Component, OnDestroy, OnInit } from "@angular/core";
import { Auth, Unsubscribe, User } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ALL_GAME_BOXES, GameBox } from "src/types/gamebox";
import { Party } from "src/types/party";
import { DbService } from "../services/db.service";

@Component({
  selector: "app-select-party",
  templateUrl: "./select-party.component.html",
  styleUrls: ["./select-party.component.scss"],
})
export class SelectPartyComponent implements OnInit, OnDestroy {
  partiesByGame: Map<GameBox, Party[]> = new Map();
  GameBox = GameBox;
  user: User;

  private user$: Unsubscribe;

  constructor(
    private db: DbService,
    private auth: Auth,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user$ = this.auth.onAuthStateChanged(async (user) => {
      if (!user) {
        return;
      }
      const parties = await this.db.getEligibleParties();

      const partiesByGame = new Map();
      for (let party of parties) {
        if (partiesByGame.has(party.gamebox)) {
          partiesByGame.get(party.gamebox).push(party);
        } else {
          partiesByGame.set(party.gamebox, [party]);
        }
      }
      this.partiesByGame = partiesByGame;

      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.user$();
  }

  async changeParty(party: Party) {
    this.router.navigateByUrl("/");
    await this.db.setActiveParty(party.id);
  }
}
