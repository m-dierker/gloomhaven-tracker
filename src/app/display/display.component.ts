import { Component, OnInit } from "@angular/core";
import { DbService } from "../services/db.service";
import {
  MonsterData,
  BossData,
  MonsterDataDisplayNameComparator,
} from "../../types/monsters";
import { Party } from "../../types/party";
import { Observable } from "rxjs";
import { Monster } from "../db/monster";
import { EnemyClassId, EnemyType } from "src/types/enemy";
import { Enemy } from "../db/enemy";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.scss"],
})
export class DisplayComponent implements OnInit {
  public party: Party;

  public monsterClassList: EnemyClassId[];
  public bossClassList: EnemyClassId[];
  public enemiesByClass: Map<EnemyClassId, Enemy[]> = new Map();

  private party_: Observable<Party>;

  constructor(private db: DbService) {}

  ngOnInit() {
    this.party_ = this.db.getParty();
    this.party_.subscribe((party) => (this.party = party));
    this.db.getPartyEnemies().subscribe((enemyMap) => {
      this.enemiesByClass = enemyMap;
      this.onPartyEnemiesUpdate();
    });
  }

  onPartyUpdate(party: Party) {
    this.party = party;
  }

  private onPartyEnemiesUpdate() {
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
