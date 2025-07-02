export enum AttackModifier {
  MINUS_ONE = "-1",
  ZERO = "0",
  PLUS_ONE = "1",
  PLUS_TWO = "2",
  MINUS_TWO = "-2",
  TWO_X = "2x",
  MISS = "miss",

  // Special modifiers
  BLESS = "bless",
  CURSE = "curse",
}

export class AttackModifierUtil {
  /** Returns if the modifier should be removed after being played. */
  static isTemporary(modifier: AttackModifier): boolean {
    return modifier == AttackModifier.BLESS || modifier == AttackModifier.CURSE;
  }

  static shouldFlipAfterDrawing(modifier: AttackModifier) {
    return modifier == AttackModifier.TWO_X || modifier == AttackModifier.MISS;
  }

  /** Returns the default set of attack cards for monsters (and probably players?). */
  static getStandardSet(): AttackModifier[] {
    return [
      // Six 0s
      AttackModifier.ZERO,
      AttackModifier.ZERO,
      AttackModifier.ZERO,
      AttackModifier.ZERO,
      AttackModifier.ZERO,
      AttackModifier.ZERO,

      // Five +1s
      AttackModifier.PLUS_ONE,
      AttackModifier.PLUS_ONE,
      AttackModifier.PLUS_ONE,
      AttackModifier.PLUS_ONE,
      AttackModifier.PLUS_ONE,

      // Four -1s
      AttackModifier.MINUS_ONE,
      AttackModifier.MINUS_ONE,
      AttackModifier.MINUS_ONE,
      AttackModifier.MINUS_ONE,

      // One of each 2
      AttackModifier.PLUS_TWO,

      // Criticals
      AttackModifier.TWO_X,
      AttackModifier.MISS,
    ];
  }
}
