import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { FigureClassId, FigureType } from "src/types/figure";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { Figure } from "src/app/db/figure";
import { DbService } from "src/app/services/db.service";
import { GameService } from "src/app/services/game.service";

@Component({
  selector: "app-party-monsters-page",
  templateUrl: "./party-monsters-page.component.html",
  styleUrls: ["./party-monsters-page.component.scss"],
})
export class PartyMonstersPageComponent implements OnInit {
  public bossClassList: FigureClassId[];
  public monsterClassList: FigureClassId[];
  public enemiesByClass: Map<FigureClassId, Figure[]> = new Map();

  classIdFilter_: FigureClassId;

  @ViewChild("monstersContainer") monstersContainer: ElementRef;

  @Input()
  set classIdFilter(value: FigureClassId) {
    this.classIdFilter_ = value;
    // Reset scroll position to the top when the class changes.
    if (this.monstersContainer) {
      this.monstersContainer.nativeElement.scrollTop = 0;
    }
  }

  constructor(
    private db: DbService,
    private route: ActivatedRoute,
    private game: GameService
  ) {}

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

  async nextTurnClicked() {
    if (!this.classIdFilter_) {
      return;
    }
    await Promise.all(
      this.enemiesByClass
        .get(this.classIdFilter_)
        .map((enemy) => this.game.nextTurnFigure(enemy))
    );
  }
}