import { Component, OnDestroy, OnInit } from "@angular/core";
import { Auth, authState, signOut, User } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { TypeaheadMatch } from "ngx-bootstrap/typeahead";
import { Observable, Subscriber, Subscription } from "rxjs";
import {
  MonsterData,
  MonsterDataDisplayNameComparator,
  MonsterType,
} from "src/types/monsters";
import { Party, ScenarioMonsterData } from "src/types/party";
import { Monster } from "../db/monsters";
import { DbService } from "../services/db.service";

@Component({
  selector: "party-manager",
  templateUrl: "./party-manager.component.html",
  styleUrls: ["./party-manager.component.scss"],
})
export class PartyManagerComponent implements OnInit, OnDestroy {
  private partyMonsters$: Observable<Monster[]>;
  private partyMonsters: Monster[] = [];

  public sortedMonsterClasses: MonsterData[];
  public monstersByClass: Map<MonsterData, Monster[]> = new Map();

  public allMonsterData: MonsterData[];
  public createMonsterData = {} as CreateMonsterData;
  public party: Party;

  public user: User;
  private user$: Subscription;

  constructor(
    private db: DbService,
    private auth: Auth,
    private router: Router
  ) {}

  ngOnInit() {
    this.partyMonsters$ = this.db.getPartyMonsters();
    this.partyMonsters$.subscribe((partyMonsters) =>
      this.onPartyMonstersUpdate(partyMonsters)
    );
    this.db
      .getAllMonsters()
      .subscribe((monsters) => (this.allMonsterData = monsters));
    this.db.getParty().subscribe((party) => {
      this.party = party;
      if (!this.createMonsterData.level) {
        this.createMonsterData.level = this.party.scenarioLevel;
      }
    });
    this.user$ = authState(this.auth).subscribe((user) => {
      if (!user) {
        this.router.navigateByUrl("/login");
        return;
      }
      this.user = user;
    });

    this.initializeChromecast();
  }

  ngOnDestroy(): void {
    this.user$.unsubscribe();
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
  }

  onCreateMonsterSelected(evt: TypeaheadMatch) {
    this.createMonsterData.monsterId = evt.item.id;
  }

  resetGameState() {
    if (
      confirm(
        "Are you sure you wish to reset the game? THIS WILL CLEAR ALL HEALTH TRACKING."
      )
    ) {
      if (
        confirm(
          "Are you *absolutely sure* you want to irrevocably delete everything?"
        )
      ) {
        this.db.fullyResetGameState();
      }
    }
  }

  async logout() {
    await signOut(this.auth);
    // Let login get cleared.
    setTimeout(() => this.router.navigateByUrl("/login"));
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
    const usedNumbers = new Set(
      this.partyMonsters
        .filter((monster) => monster.getMonsterId() === monsterId)
        .map((monster) => monster.getTokenId())
    );
    otherUsedNumbers.forEach((num) => usedNumbers.add(num));
    // Return the next available number starting from 1 since tokens begin at 1.
    let maxUnusedNum = 1;
    while (usedNumbers.has(maxUnusedNum)) {
      maxUnusedNum++;
    }
    return maxUnusedNum;
  }

  private onPartyMonstersUpdate(partyMonsters: Monster[]) {
    this.partyMonsters = partyMonsters;
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

  private initializeChromecast() {
    window["__onGCastApiAvailable"] = function (isAvailable) {
      if (isAvailable) {
        // @ts-ignore
        cast.framework.CastContext.getInstance().setOptions({
          receiverApplicationId: "948CAC63",
          // @ts-ignore
          autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
        });
      }
    };
  }
}

interface CreateMonsterData {
  monsterId: string;
  monsterName: string;
  numMonsters: number;
  level: number;
  elite: boolean;
}