import { GameContext } from "src/types/game";
import { Figure } from "./figure";
import { ScenarioFigureData } from "src/types/scenario";

export class Character extends Figure {
  constructor(
    scenarioData: ScenarioFigureData,
    context: GameContext
    // TODO: Add CharacterData here once they're in the database.
  ) {
    super();
    this.onNewScenarioData(scenarioData, context);
  }

  isCharacter(): boolean {
    return true;
  }

  get displayName(): string {
    return this.scenarioData.characterData.name;
  }

  isDead(): boolean {
    // Characters never die since health isn't tracked now.
    // If this ever changes, dbService needs to be updated to not delete the doc.
    return false;
  }
}
