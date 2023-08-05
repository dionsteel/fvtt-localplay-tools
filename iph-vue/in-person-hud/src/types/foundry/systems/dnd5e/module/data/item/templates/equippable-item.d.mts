/**
 * Data model template with information on items that can be attuned and equipped.
 *
 * @property {number} attunement  Attunement information as defined in `DND5E.attunementTypes`.
 * @property {boolean} equipped   Is this item equipped on its owning actor.
 * @mixin
 */
declare class EquippableItemTemplate {
    /** @inheritdoc */
    static defineSchema(): {
        attunement: any;
        equipped: any;
    };
    /** @inheritdoc */
    static migrateData(source: any): void;
    /**
     * Migrate the item's attuned boolean to attunement string.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#13@#migrateAttunement"(source: object): void;
    /**
     * Migrate the equipped field.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#13@#migrateEquipped"(source: object): void;
    /**
     * Chat properties for equippable items.
     * @type {string[]}
     */
    get equippableItemChatProperties(): string[];
}
