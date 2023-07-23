export enum GameBox {
  GLOOMHAVEN = "gh",
  JAWS_OF_THE_LION = "jotl",
  FROSTHAVEN = "fh",
}

export function getGameBoxFromClassId(classId: string): GameBox {
  const underscoreIdx = classId.indexOf("_");
  if (underscoreIdx === -1) {
    console.error("Unable to match class ID", classId, "with a game");
    return null;
  }
  // This could be more robust if it needed to be.
  return classId.substring(0, underscoreIdx) as GameBox;
}

export const ALL_GAME_BOXES = [GameBox.GLOOMHAVEN, GameBox.JAWS_OF_THE_LION];
