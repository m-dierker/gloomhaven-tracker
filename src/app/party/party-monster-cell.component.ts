import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { Monster } from "../db/monster";
import { DbService } from "../services/db.service";
import { StatusEffect } from "../../types/status";
import { Enemy } from "../db/enemy";
import { EnemyType } from "src/types/enemy";
import { Subscription } from "rxjs";

@Component({
  selector: "party-monster-cell",
  templateUrl: "./party-monster-cell.component.html",
  styleUrls: ["./party-monster-cell.component.scss"],
})
export class PartyMonsterCellComponent implements OnInit, OnChanges {
  @Input()
  public enemy: Enemy;

  /** Only applies if enemy.enemyType is MONSTER, else undefined. */
  public monster?: Monster;

  public isBoss: boolean;

  public allStatuses: StatusEffect[];
  public cancelledStatuses: StatusEffect[] = [];
  public dropdownVisible = false;
  public editsVisible = false;

  public localHealth?: number = undefined;
  public statusesBlockingHeal: StatusEffect[] = [];

  private enemy$: Subscription;

  constructor(private db: DbService) {}

  ngOnInit() {
    this.allStatuses = StatusEffect.getAllStatuses();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // TODO: Understand why this method runs 10x for every change. -_-
    if (changes.enemy) {
      if (this.enemy.enemyType == EnemyType.MONSTER) {
        this.monster = this.enemy as Monster;
        this.isBoss = false;
      } else {
        this.monster = undefined;
      }
      if (this.enemy.enemyType == EnemyType.BOSS) {
        this.isBoss = true;
      }
      if (changes.enemy.currentValue !== changes.enemy.previousValue) {
        if (this.enemy$) {
          this.enemy$.unsubscribe();
        }
        this.enemy$ = this.enemy.onScenarioDataUpdate.subscribe(() => {
          // Network changes blow away local changes.
          if (this.enemy.getHealth() !== this.localHealth) {
            this.localHealth = undefined;
            this.recalculateCancelledStatuses();
          }
        });
      }
    }
  }

  changeLocalHealth(amount: number) {
    if (this.statusesBlockingHeal.length > 0 && amount > 0) {
      return;
    }
    if (this.localHealth === undefined) {
      this.localHealth = this.enemy.getHealth();
    }
    this.localHealth += amount;
    if (this.localHealth < 0) {
      this.localHealth = 0;
    }
    this.recalculateCancelledStatuses();
  }

  setLocalHealth(newLocalHealth: number) {
    this.localHealth = newLocalHealth;
    this.recalculateCancelledStatuses();
  }

  applyLocalHealth() {
    this.enemy.setHealth(this.localHealth);
    this.db.saveEnemy(this.enemy);
    this.localHealth = undefined;
  }

  private clearLocalHealth() {
    this.localHealth = undefined;
    this.recalculateCancelledStatuses();
  }

  /** Display string for how much health has changed. */
  localHealthDeltaStr(): string {
    if (this.localHealth === undefined) {
      return "";
    }
    if (this.statusesBlockingHeal.length > 0) {
      return (
        "Heal " + this.statusesBlockingHeal.map((s) => s.displayName).join(", ")
      );
    }
    const diff = this.localHealthAdded();
    if (diff === 0) {
      return "Cancel";
    } else if (diff > 0) {
      return `Add ${diff} heal`;
    } else {
      return `Do ${-1 * diff} dmg`;
    }
  }

  toggleStatusesVisible() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  toggleStatus(status: StatusEffect) {
    if (this.enemy.hasStatus(status)) {
      this.enemy.setStatus(status, false);
    } else {
      this.enemy.setStatus(status, true);
    }
    this.db.saveEnemy(this.enemy);

    this.dropdownVisible = false;
  }

  toggleEditsVisible() {
    this.editsVisible = !this.editsVisible;
  }

  toggleElite() {
    if (!this.monster) {
      return;
    }
    this.monster.setElite(!this.monster.isElite());
    this.db.saveEnemy(this.enemy);
    this.editsVisible = false;
    this.dropdownVisible = false;
  }

  changeToken() {
    const newId = prompt("Enter new token ID: ");
    const newIdNum = parseInt(newId);
    if (Number.isNaN(newIdNum)) {
      alert("Invalid, enter just a token number");
      return;
    }
    this.enemy.setTokenNum(newIdNum);
    this.db.saveEnemy(this.enemy);
    this.editsVisible = false;
    this.dropdownVisible = false;
  }

  changeMaxHealth() {
    const newHealth = prompt("Enter new max health: ");
    const newHealthNum = parseInt(newHealth);
    if (Number.isNaN(newHealth)) {
      alert("Invalid, enter just a number");
      return;
    }
    const isFull = this.enemy.getHealth() === this.enemy.getMaxHealth();
    this.enemy.setMaxHealth(newHealthNum);
    if (this.enemy.getHealth() > newHealthNum) {
      // If the health is over the new max, reset to just full health.
      this.enemy.setHealth(newHealthNum);
    } else if (isFull) {
      // If the health is full, we assume the user wants to adjust the health as well.
      this.enemy.setHealth(newHealthNum);
    }
    this.db.saveEnemy(this.enemy);

    this.editsVisible = false;
    this.dropdownVisible = false;
  }

  private recalculateCancelledStatuses() {
    this.statusesBlockingHeal = [];
    if (this.localHealthAdded() <= 0) {
      this.cancelledStatuses = [];
      return;
    }
    const newCancelledStatuses: StatusEffect[] = [];
    for (const effect of this.enemy.getStatuses()) {
      if (effect.blocksHeal || effect.removedOnHeal) {
        newCancelledStatuses.push(effect);
      }
      if (effect.blocksHeal) {
        this.statusesBlockingHeal.push(effect);
      }
    }
    this.cancelledStatuses = newCancelledStatuses;
  }

  private localHealthAdded(): number {
    if (this.localHealth === undefined) {
      return 0;
    }
    return this.localHealth - this.enemy.getHealth();
  }
}
