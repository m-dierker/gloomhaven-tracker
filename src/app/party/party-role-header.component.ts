import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { UserData } from "../db/user";
import { DbService } from "../services/db.service";

@Component({
  selector: "app-party-role-header",
  templateUrl: "./party-role-header.component.html",
  styleUrls: ["./party-role-header.component.scss"],
})
export class PartyRoleHeaderComponent implements OnInit {
  public user: Observable<UserData>;

  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.user = this.db.getUserInfo();
  }
}