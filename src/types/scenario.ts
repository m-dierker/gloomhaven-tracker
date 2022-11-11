import { EnemyType } from "./enemy";
import { MonsterType } from "./monsters";

/** Info about the given instance of an enemy in a round of gameplay.  */
export interface ScenarioEnemyData {
  /** Local ID of this monster, unique for both bosses and monsters within the current scenario. */
  id: string;

  /**
   * ID number of the physical token used to represent the monster.
   * Heard from friends (without spoilers) that this could apply to a boss too, so keeping for now.
   */
  tokenNum: number;

  /** Type of the enemy (ex: boss or monster). */
  enemyType: EnemyType;

  /** Type of monster, matching a monsterId from the monster DB for monsters or a bossId from the boss DB for bosses. */
  classId: string;

  /** Level of the monster. */
  level: number;

  /** Type of the monster, either "normal" or "elite". */
  monsterData?: ScenarioMonsterData;

  /** Current health. If missing, uses monster default from the DB. */
  health?: number;

  /** Array of active status IDs. */
  statuses: string[];
}

/** Monster-specific metadata about an enemy. */
// TODO: Rename once other usages are verified to be gone.
export interface ScenarioMonsterData {
  type: MonsterType;
}

/** Returns the name of the cards used. For monsters, this is usually their type (or a generic equivalent). For bosses, it's boss. */
export function getClassCardId(enemy: ScenarioEnemyData) {
  if (enemy.enemyType == EnemyType.BOSS) {
    return "boss";
  }
  switch (enemy.classId) {
    case "bandit_archer":
    case "city_archer":
    case "inox_archer":
      return "archer";
    case "bandit_guard":
    case "city_guard":
    case "inox_guard":
      return "guard";
    case "black_imp":
      return "imp";
    case "inox_shaman":
      return "shaman";
    case "vermling_scout":
      return "scout";
    // TODO: Special case different decks as needed.
    default:
      return enemy.classId;
  }
}
