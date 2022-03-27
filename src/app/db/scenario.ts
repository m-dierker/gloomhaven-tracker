import { EnemyClassId } from "src/types/enemy";
import { Enemy } from "./enemy";

export interface ScenarioInfo {
  bossIds: EnemyClassId[];
  monsterIds: EnemyClassId[];

  /** ID of the scenario (ex: "1"), a string to handle special cases. */
  scenarioNum: string;
  /** Title of the scenario (ex: "Black Barrow"). */
  scenarioTitle: string;
}
