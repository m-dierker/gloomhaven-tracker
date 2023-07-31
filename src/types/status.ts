import { FigureType } from "./figure";
import { GameBox } from "./gamebox";

const effectIdMap: Map<string, StatusEffect> = new Map();

export class StatusEffect {
  // Bane is technically removed on next turn, but that's ignored for now. It's too severe to miss.
  public static BANE: StatusEffect = new StatusEffect("bane", "Bane", {
    removedOnHeal: true,
  });
  public static BRITTLE: StatusEffect = new StatusEffect("brittle", "Brittle", {
    removedOnHeal: true,
  });
  public static DISARM: StatusEffect = new StatusEffect("disarm", "Disarm", {
    removedOnNextTurn: true,
  });
  public static IMMOBILIZE: StatusEffect = new StatusEffect(
    "immobilize",
    "Immobilize",
    { removedOnNextTurn: true }
  );
  public static IMPAIR: StatusEffect = new StatusEffect("impair", "Impair", {
    figureTypes: [FigureType.CHARACTER],
  });
  public static INVISIBLE: StatusEffect = new StatusEffect(
    "invisible",
    "Invisible",
    { removedOnNextTurn: true }
  );
  public static MUDDLE: StatusEffect = new StatusEffect("muddle", "Muddle", {
    removedOnNextTurn: true,
  });
  public static POISON: StatusEffect = new StatusEffect("poison", "Poison", {
    blocksHeal: true,
  });
  public static REGENERATE: StatusEffect = new StatusEffect(
    "regenerate",
    "Regenerate"
  );
  public static STRENGTHEN: StatusEffect = new StatusEffect(
    "strengthen",
    "Strengthen",
    { removedOnNextTurn: true }
  );
  public static STUN: StatusEffect = new StatusEffect("stun", "Stun", {
    removedOnNextTurn: true,
  });
  public static WARD: StatusEffect = new StatusEffect("ward", "Ward");
  public static WOUND: StatusEffect = new StatusEffect("wound", "Wound", {
    removedOnHeal: true,
  });

  public removedOnHeal = false;
  public blocksHeal = false;
  public removedOnNextTurn = false;
  public figureTypes: FigureType[] = [];

  private constructor(
    public id: string,
    public displayName: string,
    opts?: {
      removedOnHeal?: boolean;
      blocksHeal?: boolean;
      removedOnNextTurn?: boolean;
      figureTypes?: FigureType[];
    }
  ) {
    effectIdMap.set(id, this);
    if (opts) {
      this.blocksHeal = opts.blocksHeal || false;
      this.removedOnHeal = opts.removedOnHeal || false;
      this.removedOnNextTurn = opts.removedOnNextTurn || false;
      this.figureTypes = opts.figureTypes || [];
    }
  }

  public static getEffectById(id: string): StatusEffect {
    return effectIdMap.get(id);
  }

  // TODO: Make this per-game.
  public static getAllStatuses(
    gamebox: GameBox,
    figureType: FigureType
  ): StatusEffect[] {
    switch (gamebox) {
      case GameBox.GLOOMHAVEN:
      case GameBox.JAWS_OF_THE_LION:
        // Gloomhaven has no figureType filtering.
        return GLOOMHAVEN_STATUS_EFFECTS;
      case GameBox.FROSTHAVEN:
        // TODO: Frosthaven implement.
        return [];
      default:
        throw new Error(`Unknown gamebox ${gamebox}`);
    }
  }

  public getImgPath(): string {
    return `assets/statuses/${this.id}.png`;
  }

  public compareTo(other: StatusEffect): number {
    return this.displayName.localeCompare(other.displayName);
  }
}

const GLOOMHAVEN_STATUS_EFFECTS = [
  StatusEffect.DISARM,
  StatusEffect.IMMOBILIZE,
  StatusEffect.INVISIBLE,
  StatusEffect.MUDDLE,
  StatusEffect.POISON,
  StatusEffect.STRENGTHEN,
  StatusEffect.STUN,
  StatusEffect.WOUND,
];

const FROSTHAVEN_STATUS_EFFECTS = [
  StatusEffect.BANE,
  StatusEffect.BRITTLE,
  StatusEffect.DISARM,
  StatusEffect.IMMOBILIZE,
  StatusEffect.IMPAIR,
  StatusEffect.INVISIBLE,
  StatusEffect.MUDDLE,
  StatusEffect.POISON,
  StatusEffect.REGENERATE,
  StatusEffect.STRENGTHEN,
  StatusEffect.STUN,
  StatusEffect.WARD,
  StatusEffect.WOUND,
];
