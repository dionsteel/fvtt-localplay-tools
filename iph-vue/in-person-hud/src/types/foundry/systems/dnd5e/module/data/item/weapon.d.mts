/**
 * Data definition for Weapon items.
 * @mixes ItemDescriptionTemplate
 * @mixes PhysicalItemTemplate
 * @mixes EquippableItemTemplate
 * @mixes ActivatedEffectTemplate
 * @mixes ActionTemplate
 * @mixes MountableTemplate
 *
 * @property {string} weaponType   Weapon category as defined in `DND5E.weaponTypes`.
 * @property {string} baseItem     Base weapon as defined in `DND5E.weaponIds` for determining proficiency.
 * @property {object} properties   Mapping of various weapon property booleans.
 * @property {boolean} proficient  Does the weapon's owner have proficiency?
 */
declare class WeaponData extends SystemDataModel {
    /** @inheritdoc */
    static defineSchema(): DataSchema;
    /** @inheritdoc */
    static migrateData(source: any): void;
    /**
     * Migrate the weapons's properties object to remove any old, non-boolean values.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#19@#migratePropertiesData"(source: object): void;
    /**
     * Migrate the proficient field to remove non-boolean values.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#19@#migrateProficient"(source: object): void;
    /**
     * Migrate the weapon type.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#19@#migrateWeaponType"(source: object): void;
    /**
     * Properties displayed in chat.
     * @type {string[]}
     */
    get chatProperties(): string[];
    /** @inheritdoc */
    get _typeAbilityMod(): "str" | "dex";
    /** @inheritdoc */
    get _typeCriticalThreshold(): any;
    /**
     * Is this item a separate large object like a siege engine or vehicle component that is
     * usually mounted on fixtures rather than equipped, and has its own AC and HP?
     * @type {boolean}
     */
    get isMountable(): boolean;
}
import SystemDataModel from "../abstract";
