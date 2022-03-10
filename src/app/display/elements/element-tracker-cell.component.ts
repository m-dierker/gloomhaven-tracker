import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import {
  ElementData,
  ElementState,
  ElementType,
  getElementCode,
} from "src/app/db/elements";

@Component({
  selector: "app-element-tracker-cell",
  templateUrl: "./element-tracker-cell.component.html",
  styleUrls: ["./element-tracker-cell.component.scss"],
})
export class ElementTrackerCellComponent implements OnChanges {
  @Input()
  element: ElementType;

  @Input()
  elementData: ElementData;
  animated: boolean;

  ElementState = ElementState;
  getElementCode = getElementCode;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["elementData"]) {
      this.animated = ANIMATED_STATES.has(this.elementData.state);
    }
  }
}

/** States that should use the animated GIF. */
const ANIMATED_STATES = new Set([ElementState.ACTIVE, ElementState.WANING]);
