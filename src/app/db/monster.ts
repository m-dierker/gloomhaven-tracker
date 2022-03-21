import { ScenarioMonsterData } from "../../types/party";
import {
  MonsterStats,
  MonsterData,
  MonsterType,
  EnemyStats,
} from "../../types/monsters";
import { StatusEffect } from "../../types/status";

/** Wrapper to serve both generic data about a monster (ex: Attack value) combined with specific data about an instance of the monster (ex: current HP). */
export class Monster {
  /** Serializable data specific to this instance of the monster. */
  private scenarioData_: ScenarioMonsterData;

  // TODO: More thought needed here to properly separate Monster vs. Boss.
  /** Stats specific to this level of monster. */
  private monsterStats_: EnemyStats;

  constructor(
    scenarioData: ScenarioMonsterData,
    private monsterData: MonsterData
  ) {
    // This constructor is called by Boss, and MonsterData could be BossData.
    // It's not clear if that method of doing things is better vs. keeping it separate (but not calling super).
    this.onNewScenarioData(scenarioData);
  }

  getMonsterId() {
    return this.scenarioData.monsterId;
  }

  getTokenId() {
    return this.scenarioData.tokenId;
  }

  getScenarioId() {
    return this.scenarioData.id;
  }

  getHealth() {
    if (this.scenarioData.health !== undefined) {
      return this.scenarioData.health;
    }
    return this.monsterStats.health;
  }

  getMaxHealth() {
    // Returning the max in case a single monster gets some sort of buff that bumps it above max health.
    if (this.scenarioData.health !== undefined) {
      return Math.max(this.monsterStats.health, this.scenarioData.health);
    }
    return this.monsterStats.health;
  }

  getType(): MonsterType {
    return this.scenarioData.type;
  }

  getDisplayName() {
    return this.monsterData.displayName;
  }

  getStatuses(): StatusEffect[] {
    return this.scenarioData.statuses.map((statusId) =>
      StatusEffect.getEffectById(statusId)
    );
  }

  hasStatus(status: StatusEffect): boolean {
    return this.scenarioData.statuses.includes(status.id);
  }

  setStatus(status: StatusEffect, active: boolean) {
    if (active && !this.scenarioData.statuses.includes(status.id)) {
      this.scenarioData.statuses.push(status.id);
    } else if (!active && this.scenarioData.statuses.includes(status.id)) {
      this.scenarioData.statuses.splice(
        this.scenarioData.statuses.indexOf(status.id),
        1
      );
    }
  }

  /**
   * Returns the generic data about this type of monster.
   */
  getGenericMonsterData() {
    return this.monsterData;
  }

  isDead(): boolean {
    return this.getHealth() <= 0;
  }

  isElite(): boolean {
    return this.getType() == MonsterType.ELITE;
  }

  compareTo(other: Monster) {
    if (this.isDead() !== other.isDead()) {
      return this.isDead() ? 1 : -1;
    }
    if (this.scenarioData.type !== other.scenarioData.type) {
      return this.scenarioData.type.localeCompare(other.scenarioData.type);
    }
    return this.scenarioData.tokenId - other.scenarioData.tokenId;
  }

  setHealth(health: number) {
    this.scenarioData.health = health;
  }

  /**
   * Returns the data that should be persisted to Firebase for this monster.
   */
  getSaveData(): ScenarioMonsterData {
    return this.scenarioData;
  }

  get monsterStats() {
    return this.monsterStats_;
  }

  /** Exposes setting monsterStats to child classes. */
  protected set monsterStats(stats: MonsterStats) {
    this.monsterStats = stats;
  }

  get scenarioData() {
    return this.scenarioData_;
  }

  /** Exposes setting scenarioData to child classes. */
  protected set scenarioData(data: ScenarioMonsterData) {
    this.scenarioData_ = data;
  }

  onNewScenarioData(data: ScenarioMonsterData) {
    this.scenarioData = data;
    this.monsterStats = this.monsterData.levelStats[data.level][data.type];
  }
}
