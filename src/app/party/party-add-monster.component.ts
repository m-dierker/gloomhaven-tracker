import { Component, OnInit } from "@angular/core";
import { MonsterData } from "src/types/monsters";
import { DbService } from "../services/db.service";

@Component({
  selector: "app-party-add-monster",
  templateUrl: "./party-add-monster.component.html",
  styleUrls: ["./party-add-monster.component.scss"],
})
export class PartyAddMonsterComponent implements OnInit {
  public allMonsterData: MonsterData[];

  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.db
      .getAllMonsters()
      .subscribe((monsters) => (this.allMonsterData = monsters));
  }
}
