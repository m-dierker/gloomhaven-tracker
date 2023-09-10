export enum FigureType {
  MONSTER = 1,
  BOSS = 2,
  CHARACTER = 3,
  SUMMON = 4,
  SCENARIO_OBJECTIVE = 5,
}

/** String that identifies a figure, unique across all types in all games. Should not be shown directly. */
export type FigureClassId = string;
