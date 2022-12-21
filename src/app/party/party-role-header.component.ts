import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Party } from "src/types/party";
import { UserData } from "../db/user";
import { DbService } from "../services/db.service";

@Component({
  selector: "app-party-role-header",
  templateUrl: "./party-role-header.component.html",
  styleUrls: ["./party-role-header.component.scss"],
})
export class PartyRoleHeaderComponent implements OnInit {
  public user: Observable<UserData>;
  public party: Observable<Party>;

  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.user = this.db.getUserInfo();
    this.party = this.db.getParty();
  }
}
