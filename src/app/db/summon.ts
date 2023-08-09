import { GameContext } from "src/types/game";
import { Figure } from "./figure";
import { ScenarioFigureData } from "src/types/scenario-figure-data";
import { SummonData } from "src/types/monster-data";
import { RoleClass } from "./role-class";

export class Summon extends Figure {
  constructor(
    scenarioData: ScenarioFigureData,
    context: GameContext,
    private summonData: SummonData
  ) {
    super();
    this.onNewScenarioData(scenarioData, context);
  }

  override onNewScenarioData(
    data: ScenarioFigureData,
    context: GameContext
  ): void {
    super.onNewScenarioData(data, context);
    // Generally summons only have one set of stats.
    // This isn't always true, but is true enough and can be adjusted.
    this.figureStats = this.summonData.stats;
  }

  get ownerCharacterClass(): RoleClass | undefined {
    return this.summonData.characterId as RoleClass;
  }

  isSummon(): boolean {
    return true;
  }

  get displayName(): string {
    return this.summonData.displayName;
  }
}
