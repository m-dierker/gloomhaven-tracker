import { Component, OnInit } from "@angular/core";
import { Party } from "src/types/party";
import { RoleClass } from "../db/classes";
import { AdminService } from "./admin.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  public newParty: Partial<Party> = {};
  public partyId: string;

  public uid: string;
  public addUserClassname: RoleClass;
  public roleClassOptions = Object.keys(RoleClass).map((val) => {
    return { name: val, id: RoleClass[val] };
  });

  constructor(private dbAdmin: AdminService) {}

  ngOnInit(): void {}

  async createParty() {
    if (!confirm("Are you sure you wish to create a new party?")) {
      return;
    }
    await this.dbAdmin.createParty(this.partyId, this.newParty);
  }

  async addPartyMember() {
    if (!this.partyId || !this.uid || !this.addUserClassname) {
      alert("Invalid input");
      return;
    }
    await this.dbAdmin.addUserToParty(
      this.partyId,
      this.uid,
      this.addUserClassname
    );
  }

  async setParty() {
    await this.dbAdmin.setParty(this.partyId, this.uid);
  }
}
