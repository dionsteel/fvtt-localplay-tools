/**
 * Data definition for Tool items.
 * @mixes ItemDescriptionTemplate
 * @mixes PhysicalItemTemplate
 * @mixes EquippableItemTemplate
 *
 * @property {string} toolType    Tool category as defined in `DND5E.toolTypes`.
 * @property {string} baseItem    Base tool as defined in `DND5E.toolIds` for determining proficiency.
 * @property {string} ability     Default ability when this tool is being used.
 * @property {string} chatFlavor  Additional text added to chat when this tool is used.
 * @property {number} proficient  Level of proficiency in this tool as defined in `DND5E.proficiencyLevels`.
 * @property {string} bonus       Bonus formula added to tool rolls.
 */
export default class ToolData extends SystemDataModel {
    /** @inheritdoc */
    static defineSchema(): DataSchema;
    /** @inheritdoc */
    static migrateData(source: any): void;
    /**
     * Migrate the ability field.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#18@#migrateAbility"(source: object): void;
    /**
     * Properties displayed in chat.
     * @type {string[]}
     */
    get chatProperties(): string[];
    /**
     * Which ability score modifier is used by this item?
     * @type {string|null}
     */
    get abilityMod(): string;
}
import SystemDataModel from "../abstract.mjs";
