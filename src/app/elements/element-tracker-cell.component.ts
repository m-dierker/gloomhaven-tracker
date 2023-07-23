import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Subscription } from "rxjs";
import {
  ElementData,
  ElementState,
  ElementType,
  getElementCode,
} from "src/app/db/elements";
import { DbService } from "src/app/services/db.service";

@Component({
  selector: "app-element-tracker-cell",
  templateUrl: "./element-tracker-cell.component.html",
  styleUrls: ["./element-tracker-cell.component.scss"],
})
export class ElementTrackerCellComponent implements OnChanges {
  @Input()
  element: ElementType;

  data: ElementData;
  animated: boolean;

  ElementState = ElementState;
  getElementCode = getElementCode;

  private elementData$: Subscription;

  constructor(private db: DbService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes["element"]) {
      if (this.elementData$) {
        this.elementData$.unsubscribe();
      }
      this.elementData$ = this.db
        .getElementUpdates(this.element)
        .subscribe((data) => this.onNewData(data));
    }
  }

  onNewData(data: ElementData) {
    this.data = data;
    this.animated = ANIMATED_STATES.has(data.state);
  }
}

/** States that should use the animated GIF. */
const ANIMATED_STATES = new Set([ElementState.ACTIVE, ElementState.WANING]);
