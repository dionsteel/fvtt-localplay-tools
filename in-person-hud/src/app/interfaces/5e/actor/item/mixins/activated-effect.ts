import { Item5E } from "../item";

export interface ActivatedEffect5e extends Item5E {
  // activation:Item;
  activation: ItemActivation; //  Effect's activation conditions.
  duration: EffectDuration; //  Effect's duration.
  cover: number; //  Amount of cover does this item affords to its crew on a vehicle.
  target: EffectTargets; //  Effect's valid targets.
  range: EffectRange; //  Effect's range.
  uses: EffectLimitedUses; //  Effect's limited uses
  consume: EffectResourceConsumption; //  Effect's resource consumption
  /**
   * Chat properties for activated effects.
   * @type {string[]}
   */
  get activatedEffectChatProperties(): string[];
  /**
   * Does the Item have an area of effect target?
   * @type {boolean}
   */
  get hasAreaTarget(): boolean;
  /**
   * Does the Item target one or more distinct targets?
   * @type {boolean}
   */
  get hasIndividualTarget(): boolean;
  /**
   * Is this Item limited in its ability to be used by charges or by recharge?
   * @type {boolean}
   */
  get hasLimitedUses(): boolean;
  /**
   * Does the Item duration accept an associated numeric value or formula?
   * @type {boolean}
   */
  get hasScalarDuration(): boolean;
  /**
   * Does the Item range accept an associated numeric value?
   * @type {boolean}
   */
  get hasScalarRange(): boolean;
  /**
   * Does the Item target accept an associated numeric value?
   * @type {boolean}
   */
  get hasScalarTarget(): boolean;
  /**
   * Does the Item have a target?
   * @type {boolean}
   */
  get hasTarget(): boolean;
}
export interface ItemActivation {
  type: string; //  Activation type as defined in `DND5E.abilityActivationTypes`.
  cost: number; //  How much of the activation type is needed to use this item's effect.
  condition: string; //  Special conditions required to activate the item.
}
export interface EffectDuration {
  value: number; //  How long the effect lasts.
  units: string; //  Time duration period as defined in `DND5E.timePeriods`.
}

/** Effect's Valid Targets */
export interface EffectTargets {
  value: number; //  Length or radius of target depending on targeting mode selected.
  width: number; //  Width of line when line type is selected.
  units: string; //  Units used for value and width as defined in `DND5E.distanceUnits`.
  type: string; //  Targeting mode as defined in `DND5E.targetTypes`.
}

/**
 * Effect's Range
 */
export interface EffectRange {
  value: number; //  Regular targeting distance for item's effect.
  long: number; //  Maximum targeting distance for features that have a separate long range.
  units: string; //  Units used for value and long as defined in `DND5E.distanceUnits`.
}

/**
 * Effect's resource consumption.
 */
export interface EffectResourceConsumption {
  type: string; //  Type of resource to consume as defined in `DND5E.abilityConsumptionTypes`.
  target?: string; //  Item ID or resource key path of resource to consume.
  amount: number; //  Quantity of the resource to consume per use.
}

/**
 * Effect's limited uses.
 */
export interface EffectLimitedUses {
  value: number; //  Current available uses.
  max: string; //  Maximum possible uses or a formula to derive that number.
  per: string; //  Recharge time for limited uses as defined in `DND5E.limitedUsePeriods`.
}
