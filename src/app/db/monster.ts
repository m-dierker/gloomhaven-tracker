import { GameContext } from "src/types/game";
import {
  getMonsterTypeDbString,
  MonsterData,
  MonsterType,
} from "src/types/monsters";
import { ScenarioEnemyData } from "src/types/scenario";
import { Enemy } from "./enemy";

/** Subclass responsibility: Translate MonsterData into EnemyStats + expose any monster-specific methods. */
export class Monster extends Enemy {
  constructor(
    scenarioData: ScenarioEnemyData,
    context: GameContext,
    private monsterData: MonsterData
  ) {
    super();
    this.onNewScenarioData(scenarioData, context);
  }

  onNewScenarioData(data: ScenarioEnemyData, context: GameContext): void {
    super.onNewScenarioData(data, context);
    this.enemyStats = {
      ...this.monsterData.levelStats[data.level][
        getMonsterTypeDbString(data.monsterData.type)
      ],
    };
    console.log(this.monsterData);
    this.enemyStats.displayName = this.monsterData.displayName;
  }

  setElite(isElite: boolean) {
    this.scenarioData.monsterData.type = isElite
      ? MonsterType.ELITE
      : MonsterType.NORMAL;
  }

  isElite(): boolean {
    return this.scenarioData.monsterData.type == MonsterType.ELITE;
  }

  isMonster(): boolean {
    return true;
  }

  isBoss(): boolean {
    return false;
  }

  /**
   * @override to include Elite logic in compareTo. Annoying to replicate this but it needs to go in the middle.
   */
  compareTo(other: Enemy) {
    if (this.isDead() !== other.isDead()) {
      return this.isDead() ? 1 : -1;
    }
    if (this.enemyType !== other.enemyType) {
      return this.enemyType - other.enemyType;
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
