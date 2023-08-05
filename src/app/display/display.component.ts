import { Component, OnInit } from "@angular/core";
import { DbService } from "../services/db.service";
import { Party } from "../../types/party";
import { Observable } from "rxjs";
import { FigureClassId, FigureType } from "src/types/figure";
import { Figure } from "../db/figure";
import { ScenarioInfo } from "../db/scenario-info";
import { Character } from "../db/character";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.scss"],
})
export class DisplayComponent implements OnInit {
  public party: Party;
  public scenarioInfo: ScenarioInfo;

  public monsterClassList: FigureClassId[];
  public bossClassList: FigureClassId[];
  public enemiesByClass: Map<FigureClassId, Figure[]> = new Map();

  public partyCharacters: Character[] = [];

  private party_: Observable<Party>;

  constructor(private db: DbService) {}

  ngOnInit() {
    this.party_ = this.db.getParty();
    this.party_.subscribe((party) => (this.party = party));
    this.db.getPartyEnemies().subscribe((enemyMap) => {
      this.enemiesByClass = enemyMap;
      this.onPartyEnemiesUpdate();
    });
    this.db
      .getActiveScenarioInfo()
      .subscribe((scenarioInfo) => (this.scenarioInfo = scenarioInfo));
    this.db.getPartyCharacters().subscribe((characters) => {
      this.partyCharacters = characters;
    });
  }

  private onPartyEnemiesUpdate() {
    this.bossClassList = [];
    this.monsterClassList = [];

    for (const [classId, enemyList] of this.enemiesByClass.entries()) {
      switch (enemyList[0].type) {
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
