import { GameContext } from "src/types/game";
import { MonsterData, MonsterType } from "src/types/monsters";
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
      ...this.monsterData.levelStats[data.level][data.monsterData.type],
    };
    this.enemyStats.displayName = this.monsterData.displayName;
  }

  isElite(): boolean {
    return this.scenarioData.monsterData.type == MonsterType.ELITE;
  }
}
