import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Party } from "src/types/party";
import { UserData } from "../db/user";
import { DbService } from "../services/db.service";
import { ResetService } from "../services/reset.service";

// TODO: Update this for different GameBox values.
const MAX_SCENARIO = 95;
// Scenario 0 = debugging scenario with all monsters.
const MIN_SCENARIO = 0;

const MAX_SCENARIO_LEVEL = 7;
const MIN_SCENARIO_LEVEL = 0;

@Component({
  selector: "app-party-role-header",
  templateUrl: "./party-role-header.component.html",
  styleUrls: ["./party-role-header.component.scss"],
})
export class PartyRoleHeaderComponent implements OnInit {
  public user: Observable<UserData>;
  public party: Observable<Party>;

  public menuVisible = false;

  constructor(private db: DbService, private reset: ResetService) {}

  ngOnInit(): void {
    this.user = this.db.getUserInfo();
    this.party = this.db.getParty();
  }

  toggleMenuVisible() {
    this.menuVisible = !this.menuVisible;
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
    this.menuVisible = false;
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
    this.menuVisible = false;
    await this.db.updateScenarioLevel(scenarioLevel);
    alert("Scenario level updated");
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
        this.menuVisible = false;
        this.reset.resetGameState();
      }
    }
  }
}
