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
export default class ConsumableData extends SystemDataModel {
    /** @inheritdoc */
    static defineSchema(): DataSchema;
    /**
     * Properties displayed in chat.
     * @type {string[]}
     */
    get chatProperties(): string[];
    /** @inheritdoc */
    get _typeAbilityMod(): any;
}
import SystemDataModel from "../abstract.mjs";
