import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Character } from "src/app/db/character";
import { DbService } from "src/app/services/db.service";
import { GameService } from "src/app/services/game.service";

@Component({
  selector: "app-party-character",
  templateUrl: "./party-character.component.html",
  styleUrls: ["./party-character.component.scss"],
})
export class PartyCharacterComponent implements OnInit, OnDestroy {
  character: Character;
  private character$: Subscription;

  constructor(private db: DbService, private game: GameService) {}

  ngOnInit(): void {
    this.character$ = this.db
      .getUserCharacter()
      .subscribe((character) => (this.character = character));
  }

  ngOnDestroy(): void {
    this.character$.unsubscribe();
  }

  async nextTurn() {
    await this.game.nextTurnFigure(this.character);
  }
}
