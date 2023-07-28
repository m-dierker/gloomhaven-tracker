import { EventEmitter } from "@angular/core";
import { GameContext } from "src/types/game";
import { ScenarioFigureData } from "src/types/scenario";
import { FigureStats } from "../../types/monsters";
import { StatusEffect } from "../../types/status";

/**
 * Wrapper to serve both generic data about a Figure (ex: Attack value)
 * combined with specific data about an instance of the enemy (ex: current HP).
 * This class is a parent for Monsters, Bosses, and other types.
 */
export abstract class Figure {
  /** Serializable data specific to this instance of the monster. */
  private scenarioData_: ScenarioFigureData;

  /** Stats specific to this level of figure. */
  private figureStats_: FigureStats;

  public onScenarioDataUpdate: EventEmitter<void> = new EventEmitter();

  /**
   * Returns a unique string for this figure type (ex: monsterId from monster DB for monsters).
   */
  get classId() {
    return this.scenarioData_.classId;
  }

  /**
   * Returns the physical token number of a given monster.
   * (Other figures can have this but it's generally not relevant.)
   */
  get tokenNum() {
    return this.scenarioData_.tokenNum;
  }

  setTokenNum(newNum: number) {
    this.scenarioData_.tokenNum = newNum;
  }

  /** Returns a unique ID for this instance of this enemy, globally unique. */
  get scenarioId() {
    return this.scenarioData_.id;
  }

  get figureType() {
    return this.scenarioData_.figureType;
  }

  getHealth() {
    if (this.scenarioData_.health !== undefined) {
      return this.scenarioData_.health;
    }
    return this.figureStats_.health;
  }

  getMaxHealth() {
    if (this.scenarioData_.maxHealth) {
      return this.scenarioData_.maxHealth;
    }
    // Returning the max in case a single monster gets some sort of buff that bumps it above max health.
    if (this.scenarioData_.health !== undefined) {
      return Math.max(this.figureStats_.health, this.scenarioData_.health);
    }
    return this.figureStats_.health;
  }

  setHealth(health: number) {
    // If HP goes over the max, reset the max.
    // Maybe there's a future case where this breaks, but the other way is confusing.
    if (health > this.getMaxHealth()) {
      this.scenarioData_.maxHealth = health;
    }
    this.scenarioData_.health = health;
  }

  setMaxHealth(health: number) {
    this.scenarioData_.maxHealth = health;
  }

  get displayName() {
    return this.figureStats_.displayName;
  }

  getStatuses(): StatusEffect[] {
    return this.scenarioData_.statuses
      .map((statusId) => StatusEffect.getEffectById(statusId))
      .sort((a, b) => a.compareTo(b));
  }

  hasStatus(status: StatusEffect): boolean {
    return this.scenarioData_.statuses.includes(status.id);
  }

  setStatus(status: StatusEffect, active: boolean) {
    if (active && !this.scenarioData_.statuses.includes(status.id)) {
      this.scenarioData_.statuses.push(status.id);
    } else if (!active && this.scenarioData_.statuses.includes(status.id)) {
      this.scenarioData_.statuses.splice(
        this.scenarioData_.statuses.indexOf(status.id),
        1
      );
    }
  }

  isDead(): boolean {
    return this.getHealth() <= 0;
  }

  isMonster(): boolean {
    return false;
  }

  isBoss(): boolean {
    return false;
  }

  isCharacter(): boolean {
    return false;
  }

  compareTo(other: Figure) {
    if (this.isDead() !== other.isDead()) {
      return this.isDead() ? 1 : -1;
    }
    if (this.figureType !== other.figureType) {
      return this.figureType - other.figureType;
    }
    if (this.classId !== other.classId) {
      return this.classId.localeCompare(other.classId);
    }
    return this.scenarioData_.tokenNum - other.scenarioData.tokenNum;
  }

  /**
   * Returns the data that should be persisted to Firebase for this figure.
   */
  getSaveData(): ScenarioFigureData {
    return this.scenarioData_;
  }

  get figureStats() {
    return this.figureStats_;
  }

  /** Exposes setting figureStats to child classes. */
  protected set figureStats(stats: FigureStats) {
    this.figureStats_ = stats;
  }

  /** Exposes .scenarioData to child classes. */
  protected get scenarioData() {
    return this.scenarioData_;
  }

  /** Exposes setting scenarioData to child classes. */
  protected set scenarioData(data: ScenarioFigureData) {
    this.scenarioData_ = data;
  }

  /** Called when new data from the database comes in. context is used in the Boss override. */
  onNewScenarioData(data: ScenarioFigureData, context: GameContext) {
    this.scenarioData = data;
    // Emit an update so controllers know there is one.
    this.onScenarioDataUpdate.emit();
  }
}
