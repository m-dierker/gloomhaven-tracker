import { Monster } from "src/app/db/monster";
import { AttackModifier } from "./attack-modifiers";
import { GameBox } from "./gamebox";
import { MonsterType } from "./monsters";

export interface Party {
  averageCharacterLevel: number;
  activeScenario: string;
  id: string;
  numCharacters: number;
  // format is: {uid: {character: characterId}, uid2: ...}
  // This is any because Partial<Party> doesn't seem to accept a complex type.
  members: any;
  partyName: string;
  scenarioLevel: number;

  /** Which game the party is playing
   *
   */
  gamebox: GameBox;

  monsterDeck: MonsterDeck;
}

export interface MonsterDeck {
  unflipped: AttackModifier[];
  // Cards ordered by decrementing flip time (i.e. recent cards are first).
  flipped: AttackModifier[];
}
