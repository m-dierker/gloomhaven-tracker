import { Component, OnDestroy, OnInit } from "@angular/core";
import { Auth, authState, signOut, User } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Party } from "src/types/party";
import { DbService } from "../services/db.service";
import { ResetService } from "../services/reset.service";

const MAX_SCENARIO = 95;
// Scenario 0 = debugging scenario with all monsters.
const MIN_SCENARIO = 0;

const MAX_SCENARIO_LEVEL = 7;
const MIN_SCENARIO_LEVEL = 0;

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
    private reset: ResetService,
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
      // Haaaaaaacks. (DB blocks things, this is just for UI.)
      this.isAdmin = user.uid == "BSzss3ZuWLVfW8qB3m5IlNIBX432";
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
        this.reset.resetGameState();
      }
    }
  }

  async changeScenario() {
    const newScenario = prompt("Enter a scenario number:");
    const scenarioNum = parseInt(newScenario.trim());
    if (
      scenarioNum < MIN_SCENARIO ||
      scenarioNum > MAX_SCENARIO ||
      isNaN(scenarioNum)
    ) {
      alert(
        `Invalid scenario. Enter just a number ${MIN_SCENARIO}-${MAX_SCENARIO}.`
      );
      return;
    }
    await this.db.updateScenarioNumber(scenarioNum);
    alert("Scenario updated!");
  }

  async changeScenarioLevel() {
    const newLevel = prompt("Enter new scenario level: ");
    const scenarioLevel = parseInt(newLevel);
    if (
      scenarioLevel < MIN_SCENARIO_LEVEL ||
      scenarioLevel > MAX_SCENARIO_LEVEL ||
      isNaN(scenarioLevel)
    ) {
      alert(
        `Invalid scenario level. Enter just a number ${MIN_SCENARIO_LEVEL}-${MAX_SCENARIO_LEVEL}.`
      );
      return;
    }
    await this.db.updateScenarioLevel(scenarioLevel);
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
