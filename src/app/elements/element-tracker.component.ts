import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import {
  ALL_ELEMENT_TYPES,
  ElementState,
  ElementType,
  getElementCode,
  ORDERED_ACTIVE_ELEMENT_STATES,
  ORDERED_ELEMENT_STATES,
} from "src/app/db/elements";
import { DbService } from "src/app/services/db.service";
import { AnimatedElementTracker } from "../display/elements/AnimatedElementTracker";
import { ElementTrackerCellComponent } from "./element-tracker-cell.component";

@Component({
  selector: "app-element-tracker",
  templateUrl: "./element-tracker.component.html",
  styleUrls: ["./element-tracker.component.scss"],
})
export class ElementTrackerComponent implements OnInit, AfterViewInit {
  @Input()
  direction: "horz" | "vert";

  @Input()
  elementGapPx: number;

  @Input()
  stateConfig: "activeStates" | "allStates";

  @ViewChildren(ElementTrackerCellComponent, { read: ElementRef })
  elementCellRefs: QueryList<ElementRef>;

  @ViewChild("elementWrapper")
  viewWrapper: ElementRef;

  elementStateMap: Map<ElementState, ElementType[]>;

  ALL_ELEMENT_TYPES = ALL_ELEMENT_TYPES;
  ElementState = ElementState;

  private elementHtmlMap: Map<ElementType, HTMLElement>;

  constructor(private db: DbService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // TODO: Potentially change this to another parameter.
    this.viewWrapper.nativeElement.classList.add(this.direction);
    if (this.stateConfig === "activeStates") {
      this.viewWrapper.nativeElement.classList.add("hideInactive");
    }
    this.db
      .getSortedElementsByState()
      .subscribe((elementStateMap) =>
        this.onElementDocUpdates(elementStateMap)
      );
  }

  private onElementDocUpdates(
    elementStateMap: Map<ElementState, ElementType[]>
  ) {
    this.elementStateMap = elementStateMap;

    this.buildElementHtmlMap();
    AnimatedElementTracker.setPositions(
      this.elementHtmlMap,
      this.elementStateMap,
      this.viewWrapper,
      {
        elementGapPx: this.elementGapPx,
        elementSizePx: this.getElementSizePx(),
        orderedStates:
          this.stateConfig === "allStates"
            ? ORDERED_ELEMENT_STATES
            : ORDERED_ACTIVE_ELEMENT_STATES,
        direction: this.direction,
      }
    );
  }

  /** Builds a map of ElementType --> HTMLElement. */
  private buildElementHtmlMap() {
    if (this.elementHtmlMap) {
      return;
    }
    this.elementHtmlMap = new Map();
    this.elementCellRefs.forEach((htmlElem) =>
      this.elementHtmlMap.set(
        // TODO: Fix this.
        Number(htmlElem.nativeElement.getAttribute("lang")),
        htmlElem.nativeElement
      )
    );
  }

  /** This needs to stay in sync with the CSS. */
  private getElementSizePx(): number {
    return this.direction === "horz" ? 32 : 70;
  }
}
