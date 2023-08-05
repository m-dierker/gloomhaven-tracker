import { FigureClassId } from "src/types/figure";
import { Figure } from "./figure";

export interface ScenarioInfo {
  bossIds: FigureClassId[];
  monsterIds: FigureClassId[];

  /** ID of the scenario (ex: "1"), a string to handle special cases. */
  scenarioNum: string;
  /** Title of the scenario (ex: "Black Barrow"). */
  scenarioTitle: string;

  errata: string;
  /** Frosthaven difficulty, 1-3. */
  difficulty: number;
  /** Frosthaven section references. */
  sections: string[];
  allMapTiles: string[];
}
