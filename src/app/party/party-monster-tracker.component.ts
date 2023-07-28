import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { FigureClassId, FigureType } from "src/types/figure";
import {
  MonsterData,
  MonsterDataDisplayNameComparator,
} from "src/types/monsters";
import { Figure } from "../db/figure";
import { Monster } from "../db/monster";
import { DbService } from "../services/db.service";

@Component({
  selector: "app-party-monster-tracker",
  templateUrl: "./party-monster-tracker.component.html",
  styleUrls: ["./party-monster-tracker.component.scss"],
})
export class PartyMonsterTrackerComponent implements OnInit {
  public bossClassList: FigureClassId[];
  public monsterClassList: FigureClassId[];
  public enemiesByClass: Map<FigureClassId, Figure[]> = new Map();

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
      switch (enemyList[0].figureType) {
        case FigureType.BOSS:
          this.bossClassList.push(classId);
          break;
        case FigureType.MONSTER:
          this.monsterClassList.push(classId);
          break;
      }
    }

    this.bossClassList.sort();
    this.monsterClassList.sort();
  }
}
