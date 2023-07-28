import { GameContext } from "src/types/game";
import {
  BossData,
  BossStats,
  FigureStats,
  MonsterData,
  MonsterType,
} from "src/types/monsters";
import { Party } from "src/types/party";
import { ScenarioFigureData } from "src/types/scenario";
import { Figure } from "./figure";

export class Boss extends Figure {
  constructor(
    scenarioData: ScenarioFigureData,
    context: GameContext,
    private bossData: BossData
  ) {
    super();
    this.onNewScenarioData(scenarioData, context);
  }

  onNewScenarioData(data: ScenarioFigureData, context: GameContext): void {
    super.onNewScenarioData(data, context);

    // TODO: It isn't necessary for this to run as much as it does.
    // It only really needs to run if the new level is different from the old one.

    // Convert BossStats into the generic EnemyStats.
    const enemyStats: FigureStats = { ...this.bossData.levelStats[data.level] };
    // Unlike monsters, boss health is in the form of "9xC" in the database as a string.
    // Intentionally do an unsafe typecast to avoid having to replicate every property here from BossStats manually.
    // The proper way to do this would be for the boss data string in the DB to have a different name than "health".
    enemyStats.health = getBossHealth(
      enemyStats.health as unknown as string,
      context.party
    );
    enemyStats.displayName = this.bossData.displayName;
    this.figureStats = enemyStats;
  }

  isBoss(): boolean {
    return true;
  }
}

/**
 * Converts a boss health formula into their actual health.
 * Formulas are in the format "9xC", where "C" is number of characters in the party.
 * It can be multiple digits. All bosses in Gloomhaven seem to match this formula.
 */
function getBossHealth(healthStr: string, party: Party): number {
  // TODO: Probably needs to be updated for Frosthaven.
  const match = healthStr.match(/(\d+)xC/);
  if (match.length !== 2) {
    throw new Error("Invalid Boss HP formula: " + healthStr);
  }
  return Number(match[1]) * party.numCharacters;
}
