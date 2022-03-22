import { Component, OnInit, Input } from "@angular/core";
import { MonsterData } from "../../types/monsters";
import { Monster } from "../db/monster";

@Component({
  selector: "monster-name",
  templateUrl: "./monster-name.component.html",
  styleUrls: ["./monster-name.component.scss"],
})
export class MonsterNameComponent implements OnInit {
  @Input()
  monster: Monster;

  constructor() {}

  ngOnInit() {}
}
