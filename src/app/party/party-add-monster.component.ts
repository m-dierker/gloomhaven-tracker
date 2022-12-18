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

  public createMonsterData: Partial<CreateMonsterData> = {};
  public pendingTokens: PendingToken[] = [];
  public autocompleteVisible = false;

  scenarioInfo: ScenarioInfo;
  panelVisible = false;

  EnemyType = EnemyType;

  private partyEnemiesByClass: Map<EnemyClassId, Enemy[]> = new Map();

  private party: Party;
  private allMonsterData: MonsterData[];
  private allBossData: BossData[];

  @ViewChild("monsterPanel")
  monsterPanel: ElementRef;

  @ViewChild("numMonsters")
  numMonsters: ElementRef;

  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.resetForm();
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
    });
    this.db.getActiveScenarioInfo().subscribe((scenarioInfo) => {
      this.scenarioInfo = scenarioInfo;
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

  private resetForm() {
    this.createMonsterData = {
      numElite: 0,
      numNormal: 0,
    };
    this.autocompleteVisible = false;
  }

  createMonsters() {
    if (
      this.createMonsterData.numElite + this.createMonsterData.numNormal >
      100
    ) {
      alert("Too many monsters.");
      return;
    }
    // There's probably a better way to do this.
    if (!this.createMonsterData.autocompleteEntry) {
      return;
    }
    const newMonsters = [];
    const newIdsUsed: number[] = [];

    // Redo token calculation because I'm lazy.
    for (
      let i = 0;
      i < this.createMonsterData.numElite + this.createMonsterData.numNormal;
      i++
    ) {
      const isElite = i < this.createMonsterData.numElite;
      const tokenNum = this.getNextTokenNum(
        this.createMonsterData as CreateMonsterData,
        newIdsUsed
      );
      const enemyType = this.createMonsterData.autocompleteEntry.enemyType;
      const scenarioData: ScenarioEnemyData = {
        id: "", // Generated in the service
        tokenNum,
        enemyType,
        classId: this.createMonsterData.autocompleteEntry.classId,
        level: this.party.scenarioLevel,
        statuses: [],
      };
      if (enemyType == EnemyType.MONSTER) {
        scenarioData.monsterData = {
          type: isElite ? MonsterType.ELITE : MonsterType.NORMAL,
        };
      }
      newIdsUsed.push(tokenNum);
      newMonsters.push(scenarioData);
    }
    console.log("monsterData", newMonsters);
    this.db.createPartyMonsters(newMonsters);
    this.setVisible(false);
    this.resetForm();
  }

  onCreateMonsterSelected(evt: TypeaheadMatch) {
    this.createMonsterData.autocompleteEntry = evt.item;
    this.updateMonsterCount("elite", 0);
  }

  selectEnemy(enemyType: EnemyType, classId: string) {
    this.createMonsterData.autocompleteEntry = {
      enemyType,
      classId,
      title: classId,
    };
    this.createMonsterData.enemyDisplayName = classId;
    this.autocompleteVisible = false;
    // Fake an update for pending tokens.
    this.updateMonsterCount("elite", 0);
  }

  /** Override to allow showing the full form and using typeahead. */
  showAutocomplete() {
    this.autocompleteVisible = true;
  }

  public updateMonsterCount(count: "elite" | "normal", amt: number) {
    const field = count === "elite" ? "numElite" : "numNormal";
    this.createMonsterData[field] += amt;
    if (this.createMonsterData[field] < 0) {
      this.createMonsterData[field] = 0;
    }

    const pendingTokens: PendingToken[] = [];
    const usedTokens: number[] = [];
    // Reassign tokens.
    for (let i = 0; i < this.createMonsterData.numElite; i++) {
      const nextToken = this.getNextTokenNum(
        this.createMonsterData as CreateMonsterData,
        usedTokens
      );
      usedTokens.push(nextToken);
      pendingTokens.push({
        tokenNum: nextToken,
        elite: true,
      });
    }
    for (let i = 0; i < this.createMonsterData.numNormal; i++) {
      const nextToken = this.getNextTokenNum(
        this.createMonsterData as CreateMonsterData,
        usedTokens
      );
      usedTokens.push(nextToken);
      pendingTokens.push({
        tokenNum: nextToken,
        elite: false,
      });
    }
    this.pendingTokens = pendingTokens;
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
    console.log(this.allAutocompleteData);
  }
}

interface CreateMonsterData {
  autocompleteEntry: AutocompleteEntry;
  enemyDisplayName: string;
  numNormal: number;
  numElite: number;
}

interface AutocompleteEntry {
  enemyType: EnemyType;
  classId: EnemyClassId;

  title: string;
}

interface PendingToken {
  tokenNum: number;
  elite: boolean;
}
