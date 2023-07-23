export enum EnemyType {
  MONSTER = 1,
  BOSS = 2,
}

/** String that identifies a class, unique across all enemy types in all games. Should not be shown directly. */
export type EnemyClassId = string;
