import { GameBox } from "./gamebox";

/** Top level interface for any enemy (Monsters or Boss). */
export interface EnemyStats {
  displayName: string;

  health: number;
  move: number;
  attack: number;
  range: number;
}

/**
 * Top level interface for Monster stats.
 */
export interface MonsterData {
  /** lowercase_underscore format name of the monster. */
  id: string;

  /** Display name of the monster. */
  displayName: string;

  /** The game the monster belongs to (Gloomhaven, Jaws of the Lion, etc). */
  gamebox: GameBox;

  /** Level --> stats for a monster. */
  levelStats: { [level: number]: MonsterLevelStats };
}

/** Compare function for sorting monster classes by display name. */
export function MonsterDataDisplayNameComparator(
  m1: MonsterData,
  m2: MonsterData
) {
  return m1.displayName.localeCompare(m2.displayName);
}

/**
 * Stats for monsters at a specific level.
 */
export interface MonsterLevelStats {
  normal: MonsterStats;
  elite: MonsterStats;
}

export interface MonsterStats extends EnemyStats {
  attributes: string[];
}

/**
 * Enum tracking the valid options for MonsterLevelStats.
 */
export enum MonsterType {
  ELITE = 1,
  NORMAL = 2,
}

/** Converts a MonsterType into the DB string used for stats for that type ("normal" or "elite") */
export function getMonsterTypeDbString(type: MonsterType) {
  switch (type) {
    case MonsterType.ELITE:
      return "elite";
    case MonsterType.NORMAL:
      return "normal";
  }
  throw new Error("unknown MonsterType: " + type);
}

export interface BossData {
  /** lowercase_underscore format name of the boss. */
  id: string;

  /** Display name of the boss. */
  displayName: string;

  /** Which game the boss comes from. */
  gamebox: GameBox;

  /** Level --> stats r a boss. */
  levelStats: { number: BossStats };
}

export interface BossStats {
  /** Health is in the form "##xC", where C is average character level. */
  health: string;
  move: number;
  // Note... this can be different for some bosses.
  attack: number;
  range: number;
  special1: string[];
  special2: string[];
  immunities: string[];
  notes: "";
}
