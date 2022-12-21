import { Component, Input, OnInit } from "@angular/core";
import { Party } from "src/types/party";
import { Enemy } from "../db/enemy";

@Component({
  selector: "app-enemy-image",
  templateUrl: "./enemy-image.component.html",
  styleUrls: ["./enemy-image.component.scss"],
})
export class EnemyImageComponent implements OnInit {
  @Input()
  dbClassId: string;

  @Input()
  isBoss: boolean;

  constructor() {}

  ngOnInit(): void {}
}
