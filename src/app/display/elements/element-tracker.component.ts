import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { QueryDocumentSnapshot } from "firebase/firestore";
import { Subscription } from "rxjs";
import {
  ALL_ELEMENT_TYPES,
  ElementData,
  ElementState,
  ElementType,
  getElementCode,
  ORDERED_ELEMENT_STATES,
} from "src/app/db/elements";
import { DbService } from "src/app/services/db.service";
import { ElementTrackerCellComponent } from "./element-tracker-cell.component";

@Component({
  selector: "app-element-tracker",
  templateUrl: "./element-tracker.component.html",
  styleUrls: ["./element-tracker.component.scss"],
})
export class ElementTrackerComponent implements OnInit, AfterViewInit {
  @ViewChildren(ElementTrackerCellComponent, { read: ElementRef })
  elementCellRefs: QueryList<ElementRef>;

  @ViewChild("elementWrapper")
  viewWrapper: ElementRef;

  private elementHtmlMap: Map<ElementType, HTMLElement>;
  elementDataMap: Map<ElementType, ElementData>;

  ALL_ELEMENT_TYPES = ALL_ELEMENT_TYPES;
  getElementCode = getElementCode;

  constructor(private db: DbService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.db
      .getElementUpdates()
      .subscribe((elementDocs) => this.onElementDocUpdates(elementDocs));
    this.setElementCss();
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

  private onElementDocUpdates(
    elementDocs: QueryDocumentSnapshot<ElementData>[]
  ) {
    if (!this.elementDataMap) {
      this.elementDataMap = new Map();
    }
    for (const doc of elementDocs) {
      this.elementDataMap.set(Number(doc.id) as ElementType, doc.data());
    }
    // Run this at the end to guarantee the view has been created.
    // There might be a better way to do this.
    setTimeout(() => {
      this.buildElementHtmlMap();
      this.setElementCss();
    });
  }

  private setElementCss() {
    // First doc update vs. first ViewChild set is undefined. Both trigger this.
    if (!this.viewWrapper) {
      return;
    }
    const elementsByState = this.getSortedElementsByState();
    // TODO: Check which height this is actually supposed to use.
    const totalHeight = this.viewWrapper.nativeElement.scrollHeight;
    const numStates = elementsByState.size;
    let heightInStates = 0;
    for (const [state, elements] of elementsByState.entries()) {
      heightInStates +=
        ELEMENT_SIZE_PX * elements.length +
        ELEMENT_MARGIN_PX * (elements.length - 1);
    }
    const gapHeight = Math.floor(
      (totalHeight - heightInStates) / (ORDERED_ELEMENT_STATES.length - 1)
    );

    let top = 0;
    for (const state of ORDERED_ELEMENT_STATES) {
      const elements = elementsByState.get(state);
      if (elements) {
        for (const [idx, elementType] of elements.entries()) {
          this.elementHtmlMap.get(elementType).style.top = `${top}px`;
          top += ELEMENT_SIZE_PX;
          if (idx !== elements.length - 1) {
            top += ELEMENT_MARGIN_PX;
          }
        }
      }
      top += gapHeight;
    }
  }

  /** Splits elements by state, then sorts each state by element order. */
  private getSortedElementsByState(): Map<ElementState, ElementType[]> {
    const elementsByState = new Map();
    for (const [element, data] of this.elementDataMap.entries()) {
      if (elementsByState.has(data.state)) {
        elementsByState.get(data.state).push(element);
      } else {
        elementsByState.set(data.state, [element]);
      }
    }
    for (const elements of Object.values(elementsByState)) {
      elements.sort();
    }
    return elementsByState;
  }
}

/** Space between elements in the same state. */
const ELEMENT_MARGIN_PX = 10;
/** Size in px of an element cell. Must stay in sync with CSS. */
const ELEMENT_SIZE_PX = 70;
