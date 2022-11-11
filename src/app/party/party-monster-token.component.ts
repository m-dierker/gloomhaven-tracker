import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-party-monster-token",
  templateUrl: "./party-monster-token.component.html",
  styleUrls: ["./party-monster-token.component.scss"],
})
export class PartyMonsterTokenComponent implements OnInit {
  @Input()
  dbClassId: string;

  @Input()
  isBoss: boolean;

  @Input()
  tokenNum: number;

  @Input()
  isElite: boolean;

  constructor() {}

  ngOnInit(): void {}
}
