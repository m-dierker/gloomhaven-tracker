import { Component } from "@angular/core";

@Component({
  selector: "app-party-menu",
  templateUrl: "./party-menu.component.html",
  styleUrls: ["./party-menu.component.scss"],
})
export class PartyMenuComponent {
  // TODO: Port this from PartyRoleHeader
  // toggleMenuVisible() {
  //   this.menuVisible = !this.menuVisible;
  // }
  // async changeScenario() {
  //   const newScenario = prompt("Enter a scenario number:");
  //   const scenarioNum = parseInt(newScenario.trim());
  //   if (
  //     scenarioNum < MIN_SCENARIO ||
  //     scenarioNum > MAX_SCENARIO ||
  //     isNaN(scenarioNum)
  //   ) {
  //     alert(
  //       `Invalid scenario. Enter just a number ${MIN_SCENARIO}-${MAX_SCENARIO}.`
  //     );
  //     return;
  //   }
  //   this.menuVisible = false;
  //   await this.db.updateScenarioNumber(scenarioNum);
  //   alert("Scenario updated!");
  // }
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
