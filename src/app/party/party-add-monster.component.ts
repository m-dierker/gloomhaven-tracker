import { ThisReceiver } from "@angular/compiler";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { TypeaheadMatch } from "ngx-bootstrap/typeahead";
import { EnemyClassId, EnemyType } from "src/types/enemy";
import { BossData, MonsterData, MonsterType } from "src/types/monsters";
import { Party } from "src/types/party";
import { ScenarioEnemyData } from "src/types/scenario";
import { Enemy } from "../db/enemy";
import { Monster } from "../db/monster";
import { ScenarioInfo } from "../db/scenario";
import { DbService } from "../services/db.service";

@Component({
  selector: "app-party-add-monster",
  templateUrl: "./party-add-monster.component.html",
  styleUrls: ["./party-add-monster.component.scss"],
})
export class PartyAddMonsterComponent implements OnInit {
  public allAutocompleteData: AutocompleteEntry[];

  public createMonsterData = {} as CreateMonsterData;
  scenarioInfo: ScenarioInfo;
  panelVisible = false;

  private partyEnemiesByClass: Map<EnemyClassId, Enemy[]> = new Map();

  private party: Party;
  private allMonsterData: MonsterData[];
  private allBossData: BossData[];

  @ViewChild("monsterPanel")
  monsterPanel: ElementRef;

  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.db.getAllMonsters().subscribe((monsters) => {
      this.allMonsterData = monsters;
      this.regenAutocompleteData();
    });
    this.db.getAllBosses().subscribe((bosses) => {
      this.allBossData = bosses;
      this.regenAutocompleteData();
    });
    this.db.getParty().subscribe((party) => {
      this.party = party;
      this.createMonsterData.level = party.scenarioLevel;
      this.refreshEligibleMonsters();
    });
    this.db
      .getPartyEnemies()
      .subscribe((enemies) => (this.partyEnemiesByClass = enemies));
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

  private async refreshEligibleMonsters() {
    this.scenarioInfo = await this.db.getScenarioInfo(
      this.party.activeScenario
    );
  }

  createMonsters() {
    if (this.createMonsterData.numMonsters > 100) {
      alert("Too many monsters.");
      return;
    }
    const newMonsters = [];
    const newIdsUsed = [];
    for (let i = 0; i < this.createMonsterData.numMonsters; i++) {
      const tokenNum = this.getNextTokenNum(this.createMonsterData, newIdsUsed);
      const enemyType = this.createMonsterData.autocompleteEntry.enemyType;
      const scenarioData: ScenarioEnemyData = {
        id: "", // Generated in the service
        tokenNum,
        enemyType,
        classId: this.createMonsterData.autocompleteEntry.classId,
        level: this.createMonsterData.level,
        statuses: [],
      };
      if (enemyType == EnemyType.MONSTER) {
        scenarioData.monsterData = {
          type: this.createMonsterData.elite
            ? MonsterType.ELITE
            : MonsterType.NORMAL,
        };
      }
      newIdsUsed.push(tokenNum);
      newMonsters.push(scenarioData);
    }
    this.db.createPartyMonsters(newMonsters);
    this.createMonsterData = {
      level: this.party.scenarioLevel,
    } as CreateMonsterData;
    this.setVisible(false);
  }

  onCreateMonsterSelected(evt: TypeaheadMatch) {
    this.createMonsterData.autocompleteEntry = evt.item;
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
  private getNextTokenNum(
    data: CreateMonsterData,
    otherUsedNumbers: number[]
  ): number {
    // TODO: Alex says you can't do this hack more than once.
    const existingEnemies =
      this.partyEnemiesByClass.get(
        `${data.autocompleteEntry.enemyType}-${data.autocompleteEntry.classId}`
      ) || [];
    const usedNumbers = new Set(existingEnemies.map((enemy) => enemy.tokenNum));
    otherUsedNumbers.forEach((num) => usedNumbers.add(num));
    // Return the next available number starting from 1 since tokens begin at 1.
    let maxUnusedNum = 1;
    while (usedNumbers.has(maxUnusedNum)) {
      maxUnusedNum++;
    }
    return maxUnusedNum;
  }

  private regenAutocompleteData() {
    // This function will be called before at least one of these is ready.
    if (!this.allMonsterData || !this.allBossData) {
      return;
    }
    const monsterAutocomplete: AutocompleteEntry[] = this.allMonsterData.map(
      (monsterData) => {
        return {
          classId: monsterData.id,
          title: monsterData.displayName,
          enemyType: EnemyType.MONSTER,
        };
      }
    );
    const bossAutocomplete: AutocompleteEntry[] = this.allBossData.map(
      (bossData) => {
        return {
          classId: bossData.id,
          title: bossData.displayName + " (Boss)",
          enemyType: EnemyType.BOSS,
        };
      }
    );
    this.allAutocompleteData = monsterAutocomplete.concat(bossAutocomplete);
  }
}

interface CreateMonsterData {
  autocompleteEntry: AutocompleteEntry;
  enemyDisplayName: string;
  numMonsters: number;
  level: number;
  elite: boolean;
}

interface AutocompleteEntry {
  enemyType: EnemyType;
  classId: EnemyClassId;

  title: string;
}
