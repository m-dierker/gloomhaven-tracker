import { MonsterType } from "./monsters";

export interface Party {
  averageCharacterLevel: number;
  activeScenario: string;
  numCharacters: number;
  partyName: string;
  scenarioLevel: number;
}
