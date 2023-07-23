import { ElementRef } from "@angular/core";
import { ElementState, ElementType } from "src/app/db/elements";

/**
 * Manually computes absolute CSS positioning for elements based on their state.
 * This is required to allow elements to animate as they become active or inactive.
 */
export class AnimatedElementTracker {
  static setPositions(
    elementHtmlMap: Map<ElementType, HTMLElement>,
    elementStateMap: Map<ElementState, ElementType[]>,
    viewWrapper: ElementRef,
    config: AnimatedTrackerConfig
  ) {
    const vert = config.direction === "vert";
    // TODO: Check scrollHeight vs. other properties to confirm what this should be.
    const totalHeight = vert
      ? viewWrapper.nativeElement.scrollHeight
      : viewWrapper.nativeElement.scrollWidth;
    // The code says height/top but it means width/left when horizontal.
    let heightInStates = 0;
    for (const state of config.orderedStates) {
      const elements = elementStateMap.get(state) || [];
      heightInStates +=
        config.elementSizePx * elements.length +
        // This can underflow for empty states.
        Math.max(0, config.elementGapPx * (elements.length - 1));
    }
    const gapHeight = Math.floor(
      (totalHeight - heightInStates) / (config.orderedStates.length - 1)
    );

    let top = 0;
    for (const state of config.orderedStates) {
      const elements = elementStateMap.get(state);
      if (elements) {
        for (const [idx, elementType] of elements.entries()) {
          elementHtmlMap.get(elementType).style[
            vert ? "top" : "left"
          ] = `${top}px`;
          top += config.elementSizePx;
          if (idx !== elements.length - 1) {
            top += config.elementGapPx;
          }
        }
      }
      top += gapHeight;
    }
  }
}

export interface AnimatedTrackerConfig {
  /** Space between elements in the same state. */
  elementGapPx: number;

  /** Size in px of an element cell. Must match the CSS. */
  elementSizePx: number;

  /** An ordered list of the states to include. */
  orderedStates: ElementState[];

  /** Direction of the tracker. */
  direction: "horz" | "vert";
}
