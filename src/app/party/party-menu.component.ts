import { Component, OnInit } from "@angular/core";
import { DbService } from "../services/db.service";
import { Observable } from "rxjs";
import { Party } from "src/types/party";

@Component({
  selector: "app-party-menu",
  templateUrl: "./party-menu.component.html",
  styleUrls: ["./party-menu.component.scss"],
})
export class PartyMenuComponent implements OnInit {
  party: Observable<Party>;

  constructor(private db: DbService) {}

  ngOnInit() {
    this.party = this.db.getParty();
  }

  // TODO: Port this from PartyRoleHeader
  // toggleMenuVisible() {
  //   this.menuVisible = !this.menuVisible;
  // }
  async changeScenario() {
    // Uppercase is picked because A and B are uppercase in the scenario DB.
    const newScenario = prompt("Enter a scenario number:").trim().toUpperCase();
    try {
      await this.db.updateScenarioNumber(newScenario);
    } catch (e) {
      alert("Scenario update failed: " + e);
    }
  }
  // async changeScenarioLevel() {
  //   const newLevel = prompt("Enter new scenario level: ");
  //   const scenarioLevel = parseInt(newLevel);
  //   if (
  //     scenarioLevel < MIN_SCENARIO_LEVEL ||
  //     scenarioLevel > MAX_SCENARIO_LEVEL ||
  //     isNaN(scenarioLevel)
  //   ) {
  //     alert(
  //       `Invalid scenario level. Enter just a number ${MIN_SCENARIO_LEVEL}-${MAX_SCENARIO_LEVEL}.`
  //     );
  //     return;
  //   }
  //   this.menuVisible = false;
  //   await this.db.updateScenarioLevel(scenarioLevel);
  //   alert("Scenario level updated");
  // }
  // resetGameState() {
  //   if (
  //     confirm(
  //       "Are you sure you wish to reset the game? THIS WILL CLEAR ALL HEALTH TRACKING."
  //     )
  //   ) {
  //     if (
  //       confirm(
  //         "Are you *absolutely sure* you want to irrevocably delete everything?"
  //       )
  //     ) {
  //       this.menuVisible = false;
  //       this.reset.resetGameState();
  //     }
  //   }
  // }
}
