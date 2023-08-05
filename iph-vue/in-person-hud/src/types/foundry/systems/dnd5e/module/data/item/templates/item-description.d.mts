/**
 * Data model template with item description & source.
 *
 * @property {object} description               Various item descriptions.
 * @property {string} description.value         Full item description.
 * @property {string} description.chat          Description displayed in chat card.
 * @property {string} description.unidentified  Description displayed if item is unidentified.
 * @property {string} source                    Adventure or sourcebook where this item originated.
 * @mixin
 */
declare class ItemDescriptionTemplate {
    /** @inheritdoc */
    static defineSchema(): {
        description: any;
        source: any;
    };
    /** @inheritdoc */
    static migrateData(source: any): void;
    /**
     * Convert null source to the blank string.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#9@#migrateSource"(source: object): void;
}
