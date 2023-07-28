import { Component, OnDestroy, OnInit } from "@angular/core";
import { DbService } from "../services/db.service";
import { Unsubscribe } from "firebase/firestore";
import { Character } from "../db/character";
import { Subscription } from "rxjs";

@Component({
  selector: "app-party-character",
  templateUrl: "./party-character.component.html",
  styleUrls: ["./party-character.component.scss"],
})
export class PartyCharacterComponent implements OnInit, OnDestroy {
  character: Character;
  private character$: Subscription;

  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.character$ = this.db
      .getUserCharacter()
      .subscribe((character) => (this.character = character));
  }

  ngOnDestroy(): void {
    this.character$.unsubscribe();
  }
}
