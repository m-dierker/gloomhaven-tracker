import { Component, OnDestroy, OnInit } from "@angular/core";
import { Auth, authState, signOut, User } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Party } from "src/types/party";
import { DbService } from "../services/db.service";
import { ResetService } from "../services/reset.service";

@Component({
  selector: "party-manager",
  templateUrl: "./party-manager.component.html",
  styleUrls: ["./party-manager.component.scss"],
})
export class PartyManagerComponent implements OnInit, OnDestroy {
  public party: Party;

  public user: User;
  public isAdmin: boolean;
  private user$: Subscription;

  constructor(
    private db: DbService,
    private auth: Auth,
    private router: Router
  ) {}

  ngOnInit() {
    return;
    this.db.getParty().subscribe((party) => {
      this.party = party;
    });
    this.user$ = authState(this.auth).subscribe((user) => {
      if (!user) {
        this.router.navigateByUrl("/login");
        return;
      }
      this.user = user;
      // Haaaaaaacks. (DB blocks things, this is just for UI.)
      this.isAdmin = user.uid == "BSzss3ZuWLVfW8qB3m5IlNIBX432";
    });

    // this.initializeChromecast();
  }

  ngOnDestroy(): void {
    this.user$.unsubscribe();
  }

  goFullscreen() {
    document.documentElement.requestFullscreen();
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
