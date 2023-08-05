import { GameBox } from "src/types/gamebox";

export enum RoleClass {
  // Gloomhaven
  BEAST_TYRANT = "beast_tyrant",
  BERSERKER = "berserker",
  BRUTE = "brute",
  CRAGHEART = "cragheart",
  DOOMSTALKER = "doomstalker",
  ELEMENTALIST = "elementalist",
  MINDTHIEF = "mindthief",
  NIGHTSHROUD = "nightshroud",
  PLAGUEHERALD = "plagueherald",
  QUARTERMASTER = "quartermaster",
  SAWBONES = "sawbones",
  SCOUNDREL = "scoundrel",
  SOOTHSINGER = "soothsinger",
  SPELLWEAVER = "spellweaver",
  SUMMONER = "summoner",
  SUNKEEPER = "sunkeeper",
  TINKERER = "tinkerer",

  // Jaws of the Lion
  DEMOLITIONIST = "demolitionist",
  HATCHET = "hatchet",
  RED_GUARD = "red_guard",
  VOIDWARDEN = "voidwarden",

  // Frosthaven
  BANNER_SPEAR = "fh_banner_spear",
  DRIFTER = "fh_drifter",
  BONESHAPER = "fh_boneshaper",
  DEATHWALKER = "fh_deathwalker",
  BLINKBLADE = "fh_blinkblade",
  GEMINATE = "fh_geminate",
}

export function allClassesForGame(game: GameBox): RoleClass[] {
  switch (game) {
    case GameBox.GLOOMHAVEN:
      return GLOOMHAVEN_CLASSES;
    case GameBox.JAWS_OF_THE_LION:
      return JOTL_CLASSES;
    case GameBox.FROSTHAVEN:
      return FROSTHAVEN_CLASSES;
    default:
      console.error("Unable to load classes for game: " + game);
      return [];
  }
}

// TODO: This needs to handle unlockable classes.
const GLOOMHAVEN_CLASSES = [
  RoleClass.BEAST_TYRANT,
  RoleClass.BERSERKER,
  RoleClass.BRUTE,
  RoleClass.CRAGHEART,
  RoleClass.DOOMSTALKER,
  RoleClass.ELEMENTALIST,
  RoleClass.MINDTHIEF,
  RoleClass.NIGHTSHROUD,
  RoleClass.PLAGUEHERALD,
  RoleClass.QUARTERMASTER,
  RoleClass.SAWBONES,
  RoleClass.SCOUNDREL,
  RoleClass.SOOTHSINGER,
  RoleClass.SPELLWEAVER,
  RoleClass.SUMMONER,
  RoleClass.SUNKEEPER,
  RoleClass.TINKERER,
];

const JOTL_CLASSES = [
  RoleClass.DEMOLITIONIST,
  RoleClass.HATCHET,
  RoleClass.RED_GUARD,
  RoleClass.VOIDWARDEN,
];

const FROSTHAVEN_CLASSES = [
  RoleClass.BANNER_SPEAR,
  RoleClass.DRIFTER,
  RoleClass.BONESHAPER,
  RoleClass.DEATHWALKER,
  RoleClass.BLINKBLADE,
  RoleClass.GEMINATE,
];
