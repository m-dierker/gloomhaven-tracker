import { FigureType } from "./figure";
import { MonsterType } from "./monster-data";

/** Info about the given instance of a figure in a round of gameplay.  */
export interface ScenarioFigureData {
  /** Firestore ID of this specific figure, unique for all figures. */
  id: string;

  /**
   * ID number of the physical token used to represent the monster.
   * It's possible this could apply to other types in undiscovered ways
   * (multiple summons, multiple bosses, etc) so this is kept even without a specific use case.
   */
  tokenNum: number;

  /** Type of the figure (ex: boss or monster). */
  figureType: FigureType;

  /** DB ID for the figure (ex: "gh_black_imp"), matching a monsterId from the monster DB for monsters or a bossId from the boss DB for bosses. */
  classId: string;

  /** Level of the figure. */
  level: number;

  /** Current health. If missing, uses figure default from the DB. */
  health?: number;

  /** Max health for the enemy, only set if it's overriding the DB default. */
  maxHealth?: number;

  /** Array of active status IDs. */
  statuses: string[];

  /** Metadata specific to being a Monster. */
  monsterData?: ScenarioMonsterData;

  /** Metadata specific to being a Character. */
  characterData?: ScenarioCharacterData;
}

export interface ScenarioMonsterData {
  type: MonsterType;
}

export interface ScenarioCharacterData {
  name: string;
  xp: number;
}

/** Returns the name of the cards used. For monsters, this is usually their type (or a generic equivalent). For bosses, it's boss. */
export function getClassCardId(enemy: ScenarioFigureData) {
  if (enemy.figureType == FigureType.BOSS) {
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
    case "vermling_shaman":
      return "shaman";
    case "vermling_scout":
      return "scout";
    // TODO: Special case different decks as needed.
    default:
      return enemy.classId;
  }
}
