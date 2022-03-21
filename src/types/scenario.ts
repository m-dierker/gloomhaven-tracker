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
  monsterData?: ScenairoMonsterDataRenameMe;

  /** Current health. If missing, uses monster default from the DB. */
  health?: number;

  /** Array of active status IDs. */
  statuses: string[];
}

/** Monster-specific metadata about an enemy. */
// TODO: Rename once other usages are verified to be gone.
export interface ScenairoMonsterDataRenameMe {
  type: MonsterType;
}
