/**
 * Data definition for Consumable items.
 * @mixes ItemDescriptionTemplate
 * @mixes PhysicalItemTemplate
 * @mixes EquippableItemTemplate
 * @mixes ActivatedEffectTemplate
 * @mixes ActionTemplate
 *
 * @property {string} consumableType     Type of consumable as defined in `DND5E.consumableTypes`.
 * @property {object} uses
 * @property {boolean} uses.autoDestroy  Should this item be destroyed when it runs out of uses.
 */

import { Action5e } from "./mixins/action";
import { ActivatedEffect5e, EffectLimitedUses } from "./mixins/activated-effect";
import { EquippableItem } from "./mixins/equippable-item";
import { ItemWithDescription } from "./mixins/item-description";
import { PhysicalItem5e } from "./mixins/physical";

export interface ConsumableUses extends EffectLimitedUses {
  autoDestroy: true;
}

export interface ConsumableItem5e extends Action5e, ItemWithDescription, PhysicalItem5e, EquippableItem, ActivatedEffect5e {
  consumableType: string; //    Type of consumable as defined in `DND5E.consumableTypes`.
  uses: ConsumableUses;

  /** Properties displayed in chat.  */
  get chatProperties(): string[];
  /** @inheritdoc */
  get _typeAbilityMod(): any;
}
