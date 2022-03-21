import { BossData, BossStats, MonsterData } from "src/types/monsters";
import { ScenarioMonsterData } from "src/types/party";
import { Monster } from "./monster";

export class Boss extends Monster {
  private bossStats: BossStats;

  constructor(scenarioData: ScenarioMonsterData, private bossData: BossData) {
    // TODO: It's probably not safe to pass BossData up like this without explicity extending.
    super(scenarioData, bossData);
  }

  onNewScenarioData(data: ScenarioMonsterData): void {
    this.scenarioData = data;
    this.bossStats = this.bossData.levelStats[data.level];
    
    // Pass this up so the superclass can use.

    this.monsterStats = this..levelStats[data.level][data.type];  
  }
}
