import { Component, OnDestroy, OnInit } from "@angular/core";
import { DbService } from "../services/db.service";
import { Observable, Subscription } from "rxjs";
import { Party } from "src/types/party";
import { Character } from "../db/character";
import { ResetService } from "../services/reset.service";

@Component({
  selector: "app-party-menu",
  templateUrl: "./party-menu.component.html",
  styleUrls: ["./party-menu.component.scss"],
})
export class PartyMenuComponent implements OnInit, OnDestroy {
  party: Observable<Party>;
  character: Character;
  private character$: Subscription;

  constructor(private db: DbService, private reset: ResetService) {}

  ngOnInit() {
    this.party = this.db.getParty();
    this.character$ = this.db
      .getUserCharacter()
      .subscribe((character) => (this.character = character));
  }

  ngOnDestroy() {
    this.character$.unsubscribe();
  }

  async changeScenario() {
    // Uppercase is picked because A and B are uppercase in the scenario DB.
    const newScenario = prompt("Enter a scenario number:").trim().toUpperCase();
    try {
      await this.db.updateScenarioNumber(newScenario);
    } catch (e) {
      alert("Scenario update failed: " + e);
    }
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
    alert("Scenario level updated");
  }

  async setCharacterLevel() {
    const newLevel = prompt("Enter new character level: ");
    const characterLevel = parseInt(newLevel);
    if (
      characterLevel < MIN_CHARACTER_LEVEL ||
      characterLevel > MAX_CHARACTER_LEVEL ||
      isNaN(characterLevel)
    ) {
      alert(
        `Invalid character level. Enter just a number ${MIN_CHARACTER_LEVEL}-${MAX_CHARACTER_LEVEL}.`
      );
      return;
    }
    this.character.setLevel(characterLevel);
    await this.db.saveFigure(this.character);
    alert("Character level updated");
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
}

const MIN_CHARACTER_LEVEL = 1;
const MAX_CHARACTER_LEVEL = 9;

const MIN_SCENARIO_LEVEL = 0;
const MAX_SCENARIO_LEVEL = 7;
