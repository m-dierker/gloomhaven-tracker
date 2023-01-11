import { EventEmitter } from "@angular/core";
import { EnemyClassId } from "src/types/enemy";
import { GameContext } from "src/types/game";
import { ScenarioEnemyData } from "src/types/scenario";
import {
  MonsterStats,
  MonsterData,
  MonsterType,
  EnemyStats,
} from "../../types/monsters";
import { StatusEffect } from "../../types/status";

/**
 * Wrapper to serve both generic data about an Enemy (ex: Attack value)
 * combined with specific data about an instance of the enemy (ex: current HP).
 * This class works for both Monsters and Bosses.
 */
export abstract class Enemy {
  /** Serializable data specific to this instance of the monster. */
  private scenarioData_: ScenarioEnemyData;

  /** Stats specific to this level of enemy. */
  private enemyStats_: EnemyStats;

  public onScenarioDataUpdate: EventEmitter<void> = new EventEmitter();

  /**
   * Returns a unique ID for this monster class (ex: "Bandit Archer" or "Jekserah").
   * This is guaranteed to be unique across all enemy types.
   */
  get classId(): EnemyClassId {
    return `${this.scenarioData_.enemyType}-${this.dbClassId}`;
  }

  /**
   * Returns a type of monster (ex: monsterId from monster DB for monsters).
   * This is not technically guaranteed to be unique right now.
   * TODO: Consider if this is really needed publicly (or at all).
   */
  get dbClassId() {
    return this.scenarioData.classId;
  }

  /** Returns the physical token number of a given monster. */
  get tokenNum() {
    return this.scenarioData.tokenNum;
  }

  setTokenNum(newNum: number) {
    this.scenarioData.tokenNum = newNum;
  }

  /** Returns a unique ID for this instance of this enemy, globally unique. */
  getScenarioId() {
    return this.scenarioData.id;
  }

  get enemyType() {
    return this.scenarioData_.enemyType;
  }

  getHealth() {
    if (this.scenarioData.health !== undefined) {
      return this.scenarioData.health;
    }
    return this.enemyStats_.health;
  }

  getMaxHealth() {
    if (this.scenarioData.maxHealth) {
      return this.scenarioData.maxHealth;
    }
    // Returning the max in case a single monster gets some sort of buff that bumps it above max health.
    if (this.scenarioData.health !== undefined) {
      return Math.max(this.enemyStats_.health, this.scenarioData.health);
    }
    return this.enemyStats_.health;
  }

  setHealth(health: number) {
    this.scenarioData.health = health;
  }

  setMaxHealth(health: number) {
    this.scenarioData.maxHealth = health;
  }

  get displayName() {
    return this.enemyStats.displayName;
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

  isDead(): boolean {
    return this.getHealth() <= 0;
  }

  abstract isMonster(): boolean;
  abstract isBoss(): boolean;

  compareTo(other: Enemy) {
    if (this.isDead() !== other.isDead()) {
      return this.isDead() ? 1 : -1;
    }
    if (this.enemyType !== other.enemyType) {
      return this.enemyType - other.enemyType;
    }
    if (this.classId !== other.classId) {
      return this.classId.localeCompare(other.classId);
    }
    return this.scenarioData.tokenNum - other.scenarioData.tokenNum;
  }

  /**
   * Returns the data that should be persisted to Firebase for this monster.
   */
  getSaveData(): ScenarioEnemyData {
    return this.scenarioData;
  }

  get enemyStats() {
    return this.enemyStats_;
  }

  /** Exposes setting enemyStats to child classes. */
  protected set enemyStats(stats: EnemyStats) {
    this.enemyStats_ = stats;
  }

  get scenarioData() {
    return this.scenarioData_;
  }

  /** Exposes setting scenarioData to child classes. */
  protected set scenarioData(data: ScenarioEnemyData) {
    this.scenarioData_ = data;
  }

  onNewScenarioData(data: ScenarioEnemyData, context: GameContext) {
    this.scenarioData = data;
    // Emit an update so controllers know there is one.
    this.onScenarioDataUpdate.emit();
  }
}
