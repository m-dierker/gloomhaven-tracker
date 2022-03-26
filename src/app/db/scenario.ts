import { EnemyClassId } from "src/types/enemy";
import { Enemy } from "./enemy";

export interface ScenarioInfo {
  bossIds: EnemyClassId[];
  monsterIds: EnemyClassId[];
}
