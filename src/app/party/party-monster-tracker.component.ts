import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { EnemyClassId, EnemyType } from "src/types/enemy";
import {
  MonsterData,
  MonsterDataDisplayNameComparator,
} from "src/types/monsters";
import { Enemy } from "../db/enemy";
import { Monster } from "../db/monster";
import { DbService } from "../services/db.service";

@Component({
  selector: "app-party-monster-tracker",
  templateUrl: "./party-monster-tracker.component.html",
  styleUrls: ["./party-monster-tracker.component.scss"],
})
export class PartyMonsterTrackerComponent implements OnInit {
  public bossClassList: EnemyClassId[];
  public monsterClassList: EnemyClassId[];
  public enemiesByClass: Map<EnemyClassId, Enemy[]> = new Map();

  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.db.getPartyEnemies().subscribe((enemyMap) => {
      this.enemiesByClass = enemyMap;
      this.onPartyMonstersUpdate();
    });
  }

  private onPartyMonstersUpdate() {
    this.bossClassList = [];
    this.monsterClassList = [];

    for (const [classId, enemyList] of this.enemiesByClass.entries()) {
      switch (enemyList[0].enemyType) {
        case EnemyType.BOSS:
          this.bossClassList.push(classId);
          break;
        case EnemyType.MONSTER:
          this.monsterClassList.push(classId);
          break;
      }
    }

    this.bossClassList.sort();
    this.monsterClassList.sort();
  }
}
