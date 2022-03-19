import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {
  MonsterData,
  MonsterDataDisplayNameComparator,
} from "src/types/monsters";
import { Monster } from "../db/monsters";
import { DbService } from "../services/db.service";

@Component({
  selector: "app-party-monster-tracker",
  templateUrl: "./party-monster-tracker.component.html",
  styleUrls: ["./party-monster-tracker.component.scss"],
})
export class PartyMonsterTrackerComponent implements OnInit {
  private partyMonsters$: Observable<Monster[]>;

  public sortedMonsterClasses: MonsterData[];
  public monstersByClass: Map<MonsterData, Monster[]> = new Map();

  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.partyMonsters$ = this.db.getPartyMonsters();
    this.partyMonsters$.subscribe((partyMonsters) =>
      this.onPartyMonstersUpdate(partyMonsters)
    );
  }

  private onPartyMonstersUpdate(partyMonsters: Monster[]) {
    const monstersByClassId: Map<string, Monster[]> = new Map();
    for (const monster of partyMonsters) {
      if (monstersByClassId.has(monster.getMonsterId())) {
        monstersByClassId.get(monster.getMonsterId()).push(monster);
      } else {
        monstersByClassId.set(monster.getMonsterId(), [monster]);
      }
    }

    const monstersByClass: Map<MonsterData, Monster[]> = new Map();
    for (const [monsterId, monsters] of monstersByClassId.entries()) {
      const sortedMonsters = monsters.sort(
        (m1, m2) => m1.getTokenId() - m2.getTokenId()
      );
      monstersByClass.set(monsters[0].getGenericMonsterData(), sortedMonsters);
    }
    this.monstersByClass = monstersByClass;
    this.sortedMonsterClasses = Array.from(monstersByClass.keys()).sort(
      MonsterDataDisplayNameComparator
    );
  }
}
