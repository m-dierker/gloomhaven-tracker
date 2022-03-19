import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { TypeaheadMatch } from "ngx-bootstrap/typeahead";
import { MonsterData, MonsterType } from "src/types/monsters";
import { Party, ScenarioMonsterData } from "src/types/party";
import { DbService } from "../services/db.service";

@Component({
  selector: "app-party-add-monster",
  templateUrl: "./party-add-monster.component.html",
  styleUrls: ["./party-add-monster.component.scss"],
})
export class PartyAddMonsterComponent implements OnInit {
  public allMonsterData: MonsterData[];
  public createMonsterData = {} as CreateMonsterData;

  panelVisible = false;
  private party: Party;

  @ViewChild("monsterPanel")
  monsterPanel: ElementRef;

  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.db
      .getAllMonsters()
      .subscribe((monsters) => (this.allMonsterData = monsters));
    this.db.getParty().subscribe((party) => {
      this.party = party;
      this.createMonsterData.level = party.scenarioLevel;
    });
  }

  togglePanel() {
    this.setVisible(!this.panelVisible);
  }

  private setVisible(visible: boolean) {
    this.panelVisible = visible;
    if (visible) {
      // Run at the end once the panel is visible again.
      setTimeout(() =>
        this.monsterPanel.nativeElement.scrollIntoView({ behavior: "smooth" })
      );
    }
  }

  createMonsters() {
    const newMonsters = [];
    const newIdsUsed = [];
    for (let i = 0; i < this.createMonsterData.numMonsters; i++) {
      const tokenId = this.getNextTokenId(
        this.createMonsterData.monsterId,
        newIdsUsed
      );
      const scenarioData: ScenarioMonsterData = {
        id: "", // Generated in the service
        tokenId,
        monsterId: this.createMonsterData.monsterId,
        level: this.createMonsterData.level,
        type: this.createMonsterData.elite
          ? MonsterType.ELITE
          : MonsterType.NORMAL,
        statuses: [],
      };
      newIdsUsed.push(tokenId);
      newMonsters.push(scenarioData);
    }
    this.db.createPartyMonsters(newMonsters);
    this.createMonsterData = {
      level: this.party.scenarioLevel,
    } as CreateMonsterData;
    this.setVisible(false);
  }

  onCreateMonsterSelected(evt: TypeaheadMatch) {
    this.createMonsterData.monsterId = evt.item.id;
  }

  /**
   * Returns the next unused token for the given monster type.
   * @param monsterId ID of the class being created.
   * @param otherUsedNumbers other numbers that are being used locally.
   *
   * For example: if monsters #1 and #3 are alive and two monsters are being added,
   * the right IDs are 2 and 4. These are done in a batch write, so IDs that are being
   * created locally have to be checked with IDs that are on the server.
   */
  private getNextTokenId(
    monsterId: string,
    otherUsedNumbers: number[]
  ): number {
    // const usedNumbers = new Set(
    //   this.partyMonsters
    //     .filter((monster) => monster.getMonsterId() === monsterId)
    //     .map((monster) => monster.getTokenId())
    // );
    // FIXME
    const usedNumbers = new Set();
    otherUsedNumbers.forEach((num) => usedNumbers.add(num));
    // Return the next available number starting from 1 since tokens begin at 1.
    let maxUnusedNum = 1;
    while (usedNumbers.has(maxUnusedNum)) {
      maxUnusedNum++;
    }
    return maxUnusedNum;
  }
}

interface CreateMonsterData {
  monsterId: string;
  monsterName: string;
  numMonsters: number;
  level: number;
  elite: boolean;
}
