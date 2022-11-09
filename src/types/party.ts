import { Monster } from "src/app/db/monster";
import { AttackModifier } from "./attack-modifiers";
import { MonsterType } from "./monsters";

export interface Party {
  averageCharacterLevel: number;
  activeScenario: string;
  numCharacters: number;
  partyName: string;
  scenarioLevel: number;

  monsterDeck: MonsterDeck;
}

export interface MonsterDeck {
  unflipped: AttackModifier[];
  // Cards ordered by decrementing flip time (i.e. recent cards are first).
  flipped: AttackModifier[];
}
