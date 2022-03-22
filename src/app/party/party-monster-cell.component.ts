import { Component, OnInit, Input } from "@angular/core";
import { Monster } from "../db/monster";
import { DbService } from "../services/db.service";
import { StatusEffect } from "../../types/status";
import { Enemy } from "../db/enemy";

@Component({
  selector: "party-monster-cell",
  templateUrl: "./party-monster-cell.component.html",
  styleUrls: ["./party-monster-cell.component.scss"],
})
export class PartyMonsterCellComponent implements OnInit {
  @Input()
  public enemy: Enemy;

  public allStatuses: StatusEffect[];
  public statusesVisible = false;

  constructor(private db: DbService) {}

  ngOnInit() {
    this.allStatuses = StatusEffect.getAllStatuses();
  }

  changeHealth(amount: number) {
    this.enemy.setHealth(this.enemy.getHealth() + amount);
    this.db.saveMonster(this.enemy);
  }

  toggleStatusesVisible() {
    this.statusesVisible = !this.statusesVisible;
  }

  toggleStatus(status: StatusEffect) {
    if (this.enemy.hasStatus(status)) {
      this.enemy.setStatus(status, false);
    } else {
      this.enemy.setStatus(status, true);
    }
    this.db.saveMonster(this.enemy);
    this.statusesVisible = false;
  }
}
