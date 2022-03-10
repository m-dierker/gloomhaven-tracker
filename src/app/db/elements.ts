export enum ElementType {
  /** Water, Earth, Fire, Air. ;) Then Light and Dark of course.  */
  WATER = 1,
  EARTH = 2,
  FIRE = 3,
  WIND = 4,
  LIGHT = 5,
  DARK = 6,
}

// TODO: Figure out how to do this automatically. Object.keys and Object.values don't work properly.
export const ALL_ELEMENT_TYPES: ElementType[] = [
  ElementType.WATER,
  ElementType.EARTH,
  ElementType.FIRE,
  ElementType.WIND,
  ElementType.LIGHT,
  ElementType.DARK,
];

/** Element code ("wind", "water") used for image name. */
export function getElementCode(element: ElementType) {
  switch (element) {
    case ElementType.WATER:
      return "water";
    case ElementType.EARTH:
      return "earth";
    case ElementType.FIRE:
      return "fire";
    case ElementType.WIND:
      return "wind";
    case ElementType.LIGHT:
      return "light";
    case ElementType.DARK:
      return "dark";
  }
  throw new Error("Unknown element: " + element);
}

export enum ElementState {
  INACTIVE = 0,
  WANING = 1,
  ACTIVE = 2,
}

export const ORDERED_ELEMENT_STATES = [
  ElementState.ACTIVE,
  ElementState.WANING,
  ElementState.INACTIVE,
];

/** Firebase serialized data for elements. */
export interface ElementData {
  state: ElementState;
}
