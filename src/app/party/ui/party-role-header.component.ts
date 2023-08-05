import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Auth } from "@angular/fire/auth";
import { Unsubscribe, User } from "firebase/auth";
import { Observable } from "rxjs";
import { Character } from "src/app/db/character";
import { RoleClass } from "src/app/db/role-class";
import { DbService } from "src/app/services/db.service";
import { ResetService } from "src/app/services/reset.service";
import { Party } from "src/types/party";

// TODO: Update this for different GameBox values.
const MAX_SCENARIO = 95;
// Scenario 0 = debugging scenario with all monsters.
const MIN_SCENARIO = 0;

const MAX_SCENARIO_LEVEL = 7;
const MIN_SCENARIO_LEVEL = 0;

@Component({
  selector: "app-party-role-header",
  templateUrl: "./party-role-header.component.html",
  styleUrls: ["./party-role-header.component.scss"],
})
export class PartyRoleHeaderComponent implements OnInit, OnDestroy {
  /** Optional: Set to override the class shown. */
  @Input() public roleClass: RoleClass;

  // TODO: This should probably take a character input instead.
  public userChar: Observable<Character>;

  constructor(
    private db: DbService,
    private reset: ResetService,
    private auth: Auth
  ) {}

  ngOnInit(): void {
    if (!this.roleClass) {
      this.userChar = this.db.getUserCharacter();
    }
  }

  ngOnDestroy(): void {}
}
