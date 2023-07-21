const effectIdMap: Map<string, StatusEffect> = new Map();

export class StatusEffect {
  public static DISARM: StatusEffect = new StatusEffect("disarm", "Disarmed");
  public static IMMOBILIZE: StatusEffect = new StatusEffect(
    "immobilize",
    "Immobilized"
  );
  public static INVISIBILITY: StatusEffect = new StatusEffect(
    "invisibility",
    "Invisible"
  );
  public static MUDDLE: StatusEffect = new StatusEffect("muddle", "Muddled");
  public static POISON: StatusEffect = new StatusEffect("poison", "Poisoned", {
    blocksHeal: true,
  });
  public static STRENGTH: StatusEffect = new StatusEffect(
    "strength",
    "Strength"
  );
  public static STUN: StatusEffect = new StatusEffect("stun", "Stunned");
  public static WOUND: StatusEffect = new StatusEffect("wound", "Wounded", {
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
}
