import { GameContext } from "src/types/game";
import { ScenarioFigureData } from "src/types/scenario-figure-data";
import { Figure } from "./figure";

export class ScenarioObjective extends Figure {
  constructor(scenarioData: ScenarioFigureData, context: GameContext) {
    super();
    this.onNewScenarioData(scenarioData, context);
  }

  override onNewScenarioData(
    data: ScenarioFigureData,
    context: GameContext
  ): void {
    super.onNewScenarioData(data, context);
    // Objectives don't have stats.
    this.figureStats = undefined;
  }

  get displayName(): string {
    return this.scenarioData.objectiveData?.name;
  }

  override isScenarioObjective(): boolean {
    return true;
  }
}
