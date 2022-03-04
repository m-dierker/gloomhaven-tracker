import { Component, Input, OnInit } from "@angular/core";
import { ElementState, ElementType } from "src/app/db/elements";

@Component({
  selector: "app-element-tracker-cell",
  templateUrl: "./element-tracker-cell.component.html",
  styleUrls: ["./element-tracker-cell.component.scss"],
})
export class ElementTrackerCellComponent implements OnInit {
  @Input()
  element: ElementType;

  @Input()
  elementState: ElementState;
  ElementState = ElementState;

  constructor() {}

  ngOnInit(): void {}
}
