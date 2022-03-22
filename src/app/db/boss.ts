import { GameContext } from "src/types/game";
import {
  BossData,
  BossStats,
  EnemyStats,
  MonsterData,
  MonsterType,
} from "src/types/monsters";
import { Party } from "src/types/party";
import { ScenarioEnemyData } from "src/types/scenario";
import { Enemy } from "./enemy";

export class Boss extends Enemy {
  constructor(
    scenarioData: ScenarioEnemyData,
    context: GameContext,
    private bossData: BossData
  ) {
    super();
    this.onNewScenarioData(scenarioData, context);
  }

  onNewScenarioData(data: ScenarioEnemyData, context: GameContext): void {
    super.onNewScenarioData(data, context);

    // Convert BossStats into the generic EnemyStats.
    const enemyStats: EnemyStats = { ...this.bossData.levelStats[data.level] };
    // Intentionally do an unsafe typecast to avoid having to replicate every property here from BossStats manually.
    // The proper way to do this would be for the boss data in the DB to have a different name than "health".
    enemyStats.health = getBossHealth(
      enemyStats.health as unknown as string,
      context.party
    );
    enemyStats.displayName = this.bossData.displayName;
    this.enemyStats = enemyStats;
  }
}

/**
 * Converts a boss health formula into their actual health.
 * Formulas are in the format "9xC", where "C" is number of characters in the party.
 * It can be multiple digits. All bosses in Gloomhaven seem to match this formula.
 */
function getBossHealth(healthStr: string, party: Party): number {
  const match = healthStr.match(/(\d+)xC/);
  if (match.length !== 2) {
    throw new Error("Invalid Boss HP formula: " + healthStr);
  }
  return Number(match[1]) * party.numCharacters;
}
