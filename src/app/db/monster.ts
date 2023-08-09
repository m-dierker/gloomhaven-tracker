import { GameContext } from "src/types/game";
import {
  getMonsterTypeDbString,
  MonsterData,
  MonsterType,
} from "src/types/monster-data";
import { ScenarioFigureData } from "src/types/scenario-figure-data";
import { Figure } from "./figure";

/** Subclass responsibility: Translate MonsterData into EnemyStats + expose any monster-specific methods. */
export class Monster extends Figure {
  constructor(
    scenarioData: ScenarioFigureData,
    context: GameContext,
    private monsterData: MonsterData
  ) {
    super();
    this.onNewScenarioData(scenarioData, context);
  }

  override onNewScenarioData(
    data: ScenarioFigureData,
    context: GameContext
  ): void {
    super.onNewScenarioData(data, context);
    this.figureStats = {
      ...this.monsterData.levelStats[data.level][
        getMonsterTypeDbString(data.monsterData.type)
      ],
    };
  }

  override get displayName(): string {
    return this.monsterData.displayName;
  }

  setElite(isElite: boolean) {
    this.scenarioData.monsterData.type = isElite
      ? MonsterType.ELITE
      : MonsterType.NORMAL;
  }

  isElite(): boolean {
    return this.scenarioData.monsterData.type == MonsterType.ELITE;
  }

  override isMonster(): boolean {
    return true;
  }

  /**
   * @override to include Elite logic in compareTo. Annoying to replicate this but it needs to go in the middle.
   */
  override compareTo(other: Monster) {
    if (this.isDead() !== other.isDead()) {
      return this.isDead() ? 1 : -1;
    }
    if (this.type !== other.type) {
      return this.type - other.type;
    }
    if (this.classId !== other.classId) {
      return this.classId.localeCompare(other.classId);
    }
    // Elite takes priority.
    if (
      this.scenarioData.monsterData.type !== other.scenarioData.monsterData.type
    ) {
      return (
        this.scenarioData.monsterData.type - other.scenarioData.monsterData.type
      );
    }
    return this.scenarioData.tokenNum - other.scenarioData.tokenNum;
  }
}
