import { Component, OnInit } from "@angular/core";
import { ScenarioFigureData } from "src/types/scenario-figure-data";
import { FigureType } from "src/types/figure-type";
import { Party } from "src/types/party";
import { RoleClass, allClassesForGame } from "src/app/db/role-class";
import { DbService } from "src/app/services/db.service";

@Component({
  selector: "app-party-create-character",
  templateUrl: "./party-create-character.component.html",
  styleUrls: ["./party-create-character.component.scss"],
})
export class PartyCreateCharacterComponent implements OnInit {
  roleClasses: RoleClass[] = [];

  private party: Party;

  constructor(private db: DbService) {}

  ngOnInit() {
    this.db.getParty().subscribe((party) => {
      this.party = party;
      this.roleClasses = allClassesForGame(party.gamebox);
    });
  }

  async createCharacter(role: RoleClass) {
    // TODO: Make this a real page.
    const name = prompt("Enter character name:");
    if (!name) {
      alert("Try again and enter a name.");
      return;
    }

    const data: ScenarioFigureData = {
      figureType: FigureType.CHARACTER,
      classId: role,
      // TODO: Add level to the create form.
      level: 1,
      statuses: [],
      characterData: {
        name,
      },
    } as ScenarioFigureData;

    const newId = await this.db.createPartyCharacter(data);
    await this.db.setUserCharacter(newId);
  }
}
