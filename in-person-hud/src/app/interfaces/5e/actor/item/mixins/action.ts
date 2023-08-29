import { FormulaField } from "src/types/dnd5e/data/fields.mjs";
import { Item5E} from "../item";

export interface Action5e extends Item5E {
  ability: string; //  Ability score to use when determining modifier.
  actionType: string; //  Action type as defined in `DND5E.itemActionTypes`.
  attackBonus: string; //  Numeric or dice bonus to attack rolls.
  chatFlavor: string; //  Extra text displayed in chat.
  critical: ActionCriticalDetails; //  Information on how critical hits are handled.

  damage: ActionDamageDetails; //  Item damage formulas.
  formula: FormulaField; //  Other roll formula.
  save: ActionSaveDetails; //  Item saving throw data.

  /**
   * Which ability score modifier is used by this item?
   * @type {string|null}
   */
  get abilityMod(): string;
  /**
   * Default ability key defined for this type.
   * @type {string|null}
   * @internal
   */
  get _typeAbilityMod(): string;
  /**
   * What is the critical hit threshold for this item? Uses the smallest value from among the following sources:
   *  - `critical.threshold` defined on the item
   *  - `critical.threshold` defined on ammunition, if consumption mode is set to ammo
   *  - Type-specific critical threshold
   * @type {number|null}
   */
  get criticalThreshold(): number;
  /**
   * Default critical threshold for this type.
   * @type {number}
   * @internal
   */
  get _typeCriticalThreshold(): number;
  /**
   * Does the Item implement an ability check as part of its usage?
   * @type {boolean}
   */
  get hasAbilityCheck(): boolean;
  /**
   * Does the Item implement an attack roll as part of its usage?
   * @type {boolean}
   */
  get hasAttack(): boolean;
  /**
   * Does the Item implement a damage roll as part of its usage?
   * @type {boolean}
   */
  get hasDamage(): boolean;
  /**
   * Does the Item implement a saving throw as part of its usage?
   * @type {boolean}
   */
  get hasSave(): boolean;
  /**
   * Does the Item provide an amount of healing instead of conventional damage?
   * @type {boolean}
   */
  get isHealing(): boolean;
  /**
   * Does the Item implement a versatile damage roll as part of its usage?
   * @type {boolean}
   */
  get isVersatile(): boolean;
}

export interface ActionCriticalDetails {
  threshold: number; //  Minimum number on the dice to roll a critical hit.
  damage: string; //  Extra damage on critical hit.
}

export interface ActionDamageDetails {
  parts: string[][]; //  Array of damage formula and types.
  versatile: string; //  Special versatile damage formula.
}

export interface ActionSaveDetails {
  ability: string; //  Ability required for the save.
  dc: number; //  Custom saving throw value.
  scaling: string; //  Method for automatically determining saving throw DC.
}
