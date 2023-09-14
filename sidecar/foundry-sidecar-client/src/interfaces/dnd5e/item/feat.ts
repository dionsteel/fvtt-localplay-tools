/**
 * Data definition for Feature items.
 * @mixes ItemDescriptionTemplate
 * @mixes ActivatedEffectTemplate
 * @mixes ActionTemplate
 *
 * @property {object} type
 * @property {string} type.value
 * @property {string} type.subtype
 * @property {string} requirements
 * @property {object} recharge
 */

import { Item5e } from "../items/base";
import { Action5e } from "./mixins/action";
import { ActivatedEffect5e } from "./mixins/activated-effect";
import { ItemWithDescription } from "./mixins/item-description";

export interface FeatureType {
  value: string; //                       Category to which this feature belongs.
  subtype: string; //                     Feature subtype according to its category.
}

export interface FeatureRechargeDetails {
  value: number; //                       Minimum number needed to roll on a d6 to recharge this feature.
  charged: boolean; //                    Does this feature have a charge remaining?
}

export interface FeatureData5e extends ItemWithDescription, ActivatedEffect5e, Action5e {
  type: "feat"; // & FeatureType;
  requirements: string; //                Actor details required to use this feature.
  recharge: FeatureRechargeDetails; //    Details on how a feature can roll for recharges.

  get chatProperties(): string[]; //      Properties displayed in chat.
  get hasLimitedUses(): boolean; //       Does this feat have limited uses?
}

export interface Feature5e extends Item5e<FeatureData5e> {}
