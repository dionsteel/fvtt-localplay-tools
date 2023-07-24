/**
 * Data definition for Feature items.
 * @mixes ItemDescriptionTemplate
 * @mixes ActivatedEffectTemplate
 * @mixes ActionTemplate
 *
 * @property {object} type
 * @property {string} type.value         Category to which this feature belongs.
 * @property {string} type.subtype       Feature subtype according to its category.
 * @property {string} requirements       Actor details required to use this feature.
 * @property {object} recharge           Details on how a feature can roll for recharges.
 * @property {number} recharge.value     Minimum number needed to roll on a d6 to recharge this feature.
 * @property {boolean} recharge.charged  Does this feature have a charge remaining?
 */
export default class FeatData extends SystemDataModel {
    /** @inheritdoc */
    static defineSchema(): DataSchema;
    /** @inheritdoc */
    static migrateData(source: any): void;
    /**
     * Ensure feats have a type object.
     * @param {object} source The candidate source data from which the model will be constructed.
     */
    static "__#16@#migrateType"(source: object): void;
    /**
     * Migrate 0 values to null.
     * @param {object} source The candidate source data from which the model will be constructed.
     */
    static "__#16@#migrateRecharge"(source: object): void;
    /**
     * Properties displayed in chat.
     * @type {string[]}
     */
    get chatProperties(): string[];
    /** @inheritdoc */
    get hasLimitedUses(): any;
}
import SystemDataModel from "../abstract.mjs";
