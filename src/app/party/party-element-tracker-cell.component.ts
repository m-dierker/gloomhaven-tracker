import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Subscription } from "rxjs";
import { ElementState, ElementType, getElementCode } from "../db/elements";
import { DbService } from "../services/db.service";

@Component({
  selector: "app-party-element-tracker-cell",
  templateUrl: "./party-element-tracker-cell.component.html",
  styleUrls: ["./party-element-tracker-cell.component.scss"],
})
export class PartyElementTrackerCellComponent implements OnChanges {
  @Input()
  element: ElementType;

  @Output()
  changeState: EventEmitter<ElementState> = new EventEmitter();

  state: ElementState;
  private elementData$: Subscription;

  ElementState = ElementState;
  getElementCode = getElementCode;

  constructor(private db: DbService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes);
    if (changes["element"]) {
      this.onElementChange();
    }
  }

  private onElementChange() {
    if (this.elementData$) {
      this.elementData$.unsubscribe();
    }
    this.elementData$ = this.db
      .getElementUpdate(this.element)
      .subscribe((data) => {
        this.state = data.state;
      });
  }

  setState(state: ElementState) {
    // State will be propagated back after Firebase write.
    this.changeState.emit(state);
  }
}
