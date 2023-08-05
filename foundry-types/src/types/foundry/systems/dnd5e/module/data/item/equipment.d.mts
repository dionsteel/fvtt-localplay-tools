/**
 * Data definition for Equipment items.
 * @mixes ItemDescriptionTemplate
 * @mixes PhysicalItemTemplate
 * @mixes EquippableItemTemplate
 * @mixes ActivatedEffectTemplate
 * @mixes ActionTemplate
 * @mixes MountableTemplate
 *
 * @property {object} armor             Armor details and equipment type information.
 * @property {string} armor.type        Equipment type as defined in `DND5E.equipmentTypes`.
 * @property {number} armor.value       Base armor class or shield bonus.
 * @property {number} armor.dex         Maximum dex bonus added to armor class.
 * @property {string} baseItem          Base armor as defined in `DND5E.armorIds` for determining proficiency.
 * @property {object} speed             Speed granted by a piece of vehicle equipment.
 * @property {number} speed.value       Speed granted by this piece of equipment measured in feet or meters
 *                                      depending on system setting.
 * @property {string} speed.conditions  Conditions that may affect item's speed.
 * @property {number} strength          Minimum strength required to use a piece of armor.
 * @property {boolean} stealth          Does this equipment grant disadvantage on stealth checks when used?
 * @property {boolean} proficient       Does the owner have proficiency in this piece of equipment?
 */
declare class EquipmentData extends SystemDataModel {
    /** @inheritdoc */
    static defineSchema(): DataSchema;
    /** @inheritdoc */
    static migrateData(source: any): void;
    /**
     * Apply migrations to the armor field.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#15@#migrateArmor"(source: object): void;
    /**
     * Ensure blank strength values are migrated to null, and string values are converted to numbers.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#15@#migrateStrength"(source: object): void;
    /**
     * Properties displayed in chat.
     * @type {string[]}
     */
    get chatProperties(): string[];
    /**
     * Is this Item any of the armor subtypes?
     * @type {boolean}
     */
    get isArmor(): boolean;
    /**
     * Is this item a separate large object like a siege engine or vehicle component that is
     * usually mounted on fixtures rather than equipped, and has its own AC and HP?
     * @type {boolean}
     */
    get isMountable(): boolean;
}
import SystemDataModel from "../abstract";
