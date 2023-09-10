import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ElementRef,
  ViewChild,
  OnDestroy,
} from "@angular/core";
import { FigureType } from "src/types/figure-type";
import { Subscription } from "rxjs";
import { Figure } from "src/app/db/figure";
import { Monster } from "src/app/db/monster";
import { DbService } from "src/app/services/db.service";
import { StatusEffect } from "src/types/status";
import { Character } from "src/app/db/character";

@Component({
  selector: "app-party-monster-cell",
  templateUrl: "./party-monster-cell.component.html",
  styleUrls: ["./party-monster-cell.component.scss"],
})
export class PartyMonsterCellComponent implements OnChanges, OnDestroy {
  @Input()
  public figure: Figure;

  /** If the status dropdown should always be visible. */
  @Input()
  public alwaysShowDropdown: boolean;

  /** Only applies if figure.type is MONSTER, else undefined. */
  public monster?: Monster;
  /** Only applies for figure.type = CHARACTER, else undefined. */
  public character?: Character;

  public isBoss: boolean;

  public cancelledStatuses: StatusEffect[] = [];
  public dropdownVisible = false;
  public editsVisible = false;

  public localHealth?: number = undefined;
  public localXp?: number = undefined;
  public statusesBlockingHeal: StatusEffect[] = [];

  private figure$: Subscription;

  private dropdownRef: ElementRef<HTMLElement>;
  @ViewChild("dropdown", { static: false }) set content(content: ElementRef) {
    if (content) {
      this.dropdownRef = content;
    }
  }

  constructor(private db: DbService) {}

  ngOnChanges(changes: SimpleChanges): void {
    // TODO: Understand why this method runs 10x for every change. -_-
    if (changes.figure) {
      if (this.figure.type == FigureType.MONSTER) {
        this.monster = this.figure as Monster;
      } else {
        this.monster = undefined;
      }
      if (this.figure.type == FigureType.BOSS) {
        this.isBoss = true;
      } else {
        this.isBoss = false;
      }
      if (this.figure.type == FigureType.CHARACTER) {
        this.character = this.figure as Character;
      } else {
        this.character = undefined;
      }
      if (changes.figure.currentValue !== changes.figure.previousValue) {
        if (this.figure$) {
          this.figure$.unsubscribe();
        }
        this.figure$ = this.figure.onScenarioDataUpdate.subscribe(() => {
          // Network changes blow away local changes.
          if (this.figure.getHealth() !== this.localHealth) {
            this.localHealth = undefined;
            this.recalculateCancelledStatuses();
          }
        });
      }
    }
  }

  ngOnDestroy() {
    if (this.figure$) {
      this.figure$.unsubscribe();
    }
  }

  changeLocalHealth(amount: number) {
    if (this.statusesBlockingHeal.length > 0 && amount > 0) {
      return;
    }
    if (this.localHealth === undefined) {
      this.localHealth = this.figure.getHealth();
    }
    this.localHealth += amount;
    if (this.localHealth < 0) {
      this.localHealth = 0;
    }

    // TODO: Apply this to more than Character after testing.
    // If the health is back to normal, just close the menu.
    if (
      this.figure.isCharacter() &&
      this.localHealth === this.figure.getHealth()
    ) {
      this.localHealth = undefined;
    }

    this.recalculateCancelledStatuses();
  }

  setLocalHealth(newLocalHealth: number) {
    this.localHealth = newLocalHealth;

    this.recalculateCancelledStatuses();
  }

  applyLocalHealth() {
    // It's a heal if health is added, or if statuses are actively blocking a heal.
    const isHeal =
      this.localHealthAdded() > 0 || this.statusesBlockingHeal.length;
    if (isHeal && this.statusesBlockingHeal.length) {
      // Statuses blocking heal are removed instead of healing.
      for (const status of this.statusesBlockingHeal) {
        this.figure.setStatus(status, false);
      }
    } else {
      this.figure.setHealth(this.localHealth);
    }
    // On any heal, statuses removed on heal are removed.
    if (isHeal) {
      for (const status of this.figure.getStatuses()) {
        if (status.removedOnHeal) {
          this.figure.setStatus(status, false);
        }
      }
    }
    this.db.saveFigure(this.figure);

    this.localHealth = undefined;
    this.recalculateCancelledStatuses();
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

  /** TODO: Merge this pllllzzzz. */
  condensedLocalHealthDeltaStr(): string {
    if (this.localHealth === undefined) {
      return "";
    }
    if (this.statusesBlockingHeal.length > 0) {
      return (
        "Heal " + this.statusesBlockingHeal.map((s) => s.displayName).join(", ")
      );
    }
    const diff = this.localHealthAdded();
    return `${diff < 0 ? "- " : "+ "} ${Math.abs(diff)} HP`;
  }

  changeLocalXp(amount: number) {
    if (!this.character) {
      return;
    }
    if (this.localXp === undefined) {
      this.localXp = this.character.xp;
    }
    this.localXp += amount;
    if (this.localXp < 0) {
      this.localXp = 0;
    }
    if (this.localXp === this.character.xp) {
      this.localXp = undefined;
    }
  }

  setLocalXp(xp: number) {
    this.localXp = xp;
  }

  applyLocalXp() {
    if (!this.character) {
      return;
    }
    this.character.setXp(this.localXp);
    this.db.saveFigure(this.character);
    this.localXp = undefined;
  }

  /** TODO: Merge this pllllzzzz. */
  localXpDeltaStr(): string {
    if (this.localXp === undefined || !this.character) {
      return "";
    }
    const diff = this.localXp - this.character.xp;
    return `${diff < 0 ? "- " : "+ "} ${Math.abs(diff)} XP`;
  }

  toggleStatusesVisible() {
    this.setDropdown(!this.dropdownVisible);
  }

  statusChanged() {
    this.setDropdown(false);
  }

  toggleEditsVisible() {
    this.editsVisible = !this.editsVisible;
  }

  toggleElite() {
    if (!this.monster) {
      return;
    }
    this.monster.setElite(!this.monster.isElite());
    this.db.saveFigure(this.figure);
    this.setDropdown(false);
  }

  changeToken() {
    const newId = prompt("Enter new token ID: ");
    const newIdNum = parseInt(newId);
    if (Number.isNaN(newIdNum)) {
      alert("Invalid, enter just a token number");
      return;
    }
    this.figure.setTokenNum(newIdNum);
    this.db.saveFigure(this.figure);
    this.setDropdown(false);
  }

  changeMaxHealth() {
    const newHealth = prompt("Enter new max health: ");
    const newHealthNum = parseInt(newHealth);
    if (Number.isNaN(newHealth)) {
      alert("Invalid, enter just a number");
      return;
    }
    const isFull = this.figure.getHealth() === this.figure.getMaxHealth();
    this.figure.setMaxHealth(newHealthNum);
    if (this.figure.getHealth() > newHealthNum) {
      // If the health is over the new max, reset to just full health.
      this.figure.setHealth(newHealthNum);
    } else if (isFull) {
      // If the health is full, we assume the user wants to adjust the health as well.
      this.figure.setHealth(newHealthNum);
    }
    this.db.saveFigure(this.figure);

    this.setDropdown(false);
  }

  private recalculateCancelledStatuses() {
    this.statusesBlockingHeal = [];
    if (this.localHealthAdded() <= 0) {
      this.cancelledStatuses = [];
      return;
    }
    const newCancelledStatuses: StatusEffect[] = [];
    for (const effect of this.figure.getStatuses()) {
      if (effect.blocksHeal || effect.removedOnHeal) {
        newCancelledStatuses.push(effect);
      }
      if (effect.blocksHeal) {
        this.statusesBlockingHeal.push(effect);
        this.localHealth = this.figure.getHealth();
      }
    }
    this.cancelledStatuses = newCancelledStatuses;
  }

  /**
   * Returns the amount of health added locally.
   * Positive numbers indicate healing, negative numbers indicate damage.
   */
  private localHealthAdded(): number {
    if (this.localHealth === undefined) {
      return 0;
    }
    return this.localHealth - this.figure.getHealth();
  }

  private setDropdown(visible: boolean) {
    this.dropdownVisible = visible;
    if (!this.dropdownVisible) {
      this.editsVisible = false;
    }
    if (this.dropdownVisible) {
      // Once the element is visible, make the dropdown scroll into view.
      setTimeout(() => {
        if (!this.dropdownRef) {
          console.warn(
            "Dropdown element is missing in monster cell. Check HTML template."
          );
          return;
        }
        // Add an extra padding so it's above the elements.
        this.dropdownRef.nativeElement.style.paddingBottom = "32px";
        this.dropdownRef.nativeElement.scrollIntoView({
          // @ts-ignore
          behavior: "smooth",
          block: "end",
        });
        this.dropdownRef.nativeElement.style.paddingBottom = "0px";
      }, 0);
    }
  }
}
