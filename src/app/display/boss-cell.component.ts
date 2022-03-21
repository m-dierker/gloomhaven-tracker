import { Component, Input, OnInit } from "@angular/core";
import { Boss } from "../db/boss";

@Component({
  selector: "app-boss-cell",
  templateUrl: "./boss-cell.component.html",
  styleUrls: ["./boss-cell.component.scss"],
})
export class BossCellComponent implements OnInit {
  @Input()
  boss: Boss;

  constructor() {}

  ngOnInit(): void {}
}
