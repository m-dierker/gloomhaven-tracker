import { GameContext } from "src/types/game";
import { Figure } from "./figure";
import { ScenarioFigureData } from "src/types/scenario-figure-data";
import { CharacterData } from "src/types/monsters";

export class Character extends Figure {
  constructor(
    scenarioData: ScenarioFigureData,
    context: GameContext,
    private charData: CharacterData
  ) {
    super();
    this.onNewScenarioData(scenarioData, context);
  }

  override onNewScenarioData(
    data: ScenarioFigureData,
    context: GameContext
  ): void {
    super.onNewScenarioData(data, context);
    this.figureStats = this.charData.levelStats[data.level];
  }

  isCharacter(): boolean {
    return true;
  }

  get className(): string {
    return this.charData.displayName;
  }

  get displayName(): string {
    // Display name for characters is the actual character's name, not the class name.
    return this.scenarioData.characterData.name;
  }

  get level(): number {
    return this.scenarioData.level;
  }

  get xp(): number {
    return this.scenarioData.characterData.xp || 0;
  }

  setXp(xp: number): void {
    this.scenarioData.characterData.xp = xp;
  }

  setLevel(level: number): void {
    this.scenarioData.level = level;
    // Health from charData will update after the save.
  }

  isDead(): boolean {
    // Characters never die since health isn't tracked now.
    // If this ever changes, dbService needs to be updated to not delete the doc.
    return false;
  }
}
