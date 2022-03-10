import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from "@angular/core";
import { ALL_ELEMENT_TYPES, ElementType } from "src/app/db/elements";
import { ElementTrackerCellComponent } from "./element-tracker-cell.component";

@Component({
  selector: "app-element-tracker",
  templateUrl: "./element-tracker.component.html",
  styleUrls: ["./element-tracker.component.scss"],
})
export class ElementTrackerComponent implements OnInit, AfterViewInit {
  @ViewChildren(ElementTrackerCellComponent, { read: ElementRef })
  elementCellRefs: QueryList<ElementRef>;

  elementHtmlMap: Map<ElementType, HTMLElement> = new Map();
  sortedElements: ElementType[];

  constructor() {}

  ngOnInit(): void {
    this.sortElementsList();
  }

  ngAfterViewInit(): void {
    this.buildElementHtmlMap();
  }

  /** Builds a map of ElementType --> HTMLElement. */
  private buildElementHtmlMap() {
    this.elementCellRefs.forEach((htmlElem) =>
      this.elementHtmlMap.set(
        htmlElem.nativeElement.getAttribute("element"),
        htmlElem.nativeElement
      )
    );
  }

  /** Sorts and sets the list of elements. */
  private sortElementsList() {
    // TODO: Add custom comparator here.
    this.sortedElements = ALL_ELEMENT_TYPES.sort();
  }
}
