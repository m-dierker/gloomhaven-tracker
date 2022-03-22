import { Component, OnDestroy, OnInit } from "@angular/core";
import { Auth, authState, signOut, User } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Party } from "src/types/party";
import { DbService } from "../services/db.service";

@Component({
  selector: "party-manager",
  templateUrl: "./party-manager.component.html",
  styleUrls: ["./party-manager.component.scss"],
})
export class PartyManagerComponent implements OnInit, OnDestroy {
  public party: Party;

  public user: User;
  private user$: Subscription;

  constructor(
    private db: DbService,
    private auth: Auth,
    private router: Router
  ) {}

  ngOnInit() {
    this.db.getParty().subscribe((party) => {
      this.party = party;
    });
    this.user$ = authState(this.auth).subscribe((user) => {
      if (!user) {
        this.router.navigateByUrl("/login");
        return;
      }
      this.user = user;
    });

    // this.initializeChromecast();
  }

  ngOnDestroy(): void {
    this.user$.unsubscribe();
  }

  resetGameState() {
    if (
      confirm(
        "Are you sure you wish to reset the game? THIS WILL CLEAR ALL HEALTH TRACKING."
      )
    ) {
      if (
        confirm(
          "Are you *absolutely sure* you want to irrevocably delete everything?"
        )
      ) {
        this.db.fullyResetGameState();
      }
    }
  }

  async logout() {
    await signOut(this.auth);
    // Let login get cleared.
    setTimeout(() => this.router.navigateByUrl("/login"));
  }

  // private initializeChromecast() {
  //   window["__onGCastApiAvailable"] = function (isAvailable) {
  //     if (isAvailable) {
  //       // @ts-ignore
  //       cast.framework.CastContext.getInstance().setOptions({
  //         receiverApplicationId: "948CAC63",
  //         // @ts-ignore
  //         autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
  //       });
  //     }
  //   };
  // }
}
