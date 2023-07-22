const effectIdMap: Map<string, StatusEffect> = new Map();

export class StatusEffect {
  public static DISARM: StatusEffect = new StatusEffect("disarm", "Disarm");
  public static IMMOBILIZE: StatusEffect = new StatusEffect(
    "immobilize",
    "Immobilize"
  );
  public static INVISIBLE: StatusEffect = new StatusEffect(
    "invisible",
    "Invisible"
  );
  public static MUDDLE: StatusEffect = new StatusEffect("muddle", "Muddle");
  public static POISON: StatusEffect = new StatusEffect("poison", "Poison", {
    blocksHeal: true,
  });
  public static STRENGTHEN: StatusEffect = new StatusEffect(
    "strengthen",
    "Strengthen"
  );
  public static STUN: StatusEffect = new StatusEffect("stun", "Stun");
  public static WOUND: StatusEffect = new StatusEffect("wound", "Wound", {
    removedOnHeal: true,
  });

  public removedOnHeal = false;
  public blocksHeal = false;

  private constructor(
    public id: string,
    public displayName: string,
    opts?: { removedOnHeal?: boolean; blocksHeal?: boolean }
  ) {
    effectIdMap.set(id, this);
    if (opts) {
      this.blocksHeal = opts.blocksHeal || false;
      this.removedOnHeal = opts.removedOnHeal || false;
    }
  }

  public static getEffectById(id: string): StatusEffect {
    return effectIdMap.get(id);
  }

  // TODO: Make this per-game.
  public static getAllStatuses(): StatusEffect[] {
    return Array.from(effectIdMap.values());
  }

  public getImgPath(): string {
    return `assets/statuses/${this.id}.png`;
  }

  public compareTo(other: StatusEffect): number {
    return this.displayName.localeCompare(other.displayName);
  }
}
