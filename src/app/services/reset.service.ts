import { Injectable } from "@angular/core";
import { DbService } from "./db.service";
import { MonsterAbilityDeckService } from "./monster-ability-deck.service";
import { MonsterAttackDeckService } from "./monster-attack-deck.service";

/**
 * Service purely to reset the state of other services via a common entry point.
 * This helps avoid circular dependencies (ex: MonsterDeckService and DbService).
 */
@Injectable({
  providedIn: "root",
})
export class ResetService {
  constructor(
    private db: DbService,
    private mAttackDeck: MonsterAttackDeckService,
    private mAbilityDeck: MonsterAbilityDeckService
  ) {}

  async resetGameState() {
    await this.db.resetGameStateFromResetService();
    await this.mAttackDeck.resetDeck();
    await this.mAbilityDeck.deleteAllDecks();
  }
}
