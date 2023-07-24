/**
 * Data model template with information on physical items.
 *
 * @property {number} quantity            Number of items in a stack.
 * @property {number} weight              Item's weight in pounds or kilograms (depending on system setting).
 * @property {object} price
 * @property {number} price.value         Item's cost in the specified denomination.
 * @property {string} price.denomination  Currency denomination used to determine price.
 * @property {string} rarity              Item rarity as defined in `DND5E.itemRarity`.
 * @property {boolean} identified         Has this item been identified?
 * @mixin
 */
export default class PhysicalItemTemplate {
    /** @inheritdoc */
    static defineSchema(): {
        quantity: any;
        weight: any;
        price: any;
        rarity: any;
        identified: any;
    };
    /** @inheritdoc */
    static migrateData(source: any): void;
    /**
     * Migrate the item's price from a single field to an object with currency.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#14@#migratePrice"(source: object): void;
    /**
     * Migrate the item's rarity from freeform string to enum value.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#14@#migrateRarity"(source: object): void;
    /**
     * Convert null weights to 0.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#14@#migrateWeight"(source: object): void;
}
