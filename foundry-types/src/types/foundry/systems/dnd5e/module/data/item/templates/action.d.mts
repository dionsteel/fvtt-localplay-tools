/**
 * Data model template for item actions.
 *
 * @property {string} ability             Ability score to use when determining modifier.
 * @property {string} actionType          Action type as defined in `DND5E.itemActionTypes`.
 * @property {string} attackBonus         Numeric or dice bonus to attack rolls.
 * @property {string} chatFlavor          Extra text displayed in chat.
 * @property {object} critical            Information on how critical hits are handled.
 * @property {number} critical.threshold  Minimum number on the dice to roll a critical hit.
 * @property {string} critical.damage     Extra damage on critical hit.
 * @property {object} damage              Item damage formulas.
 * @property {string[][]} damage.parts    Array of damage formula and types.
 * @property {string} damage.versatile    Special versatile damage formula.
 * @property {string} formula             Other roll formula.
 * @property {object} save                Item saving throw data.
 * @property {string} save.ability        Ability required for the save.
 * @property {number} save.dc             Custom saving throw value.
 * @property {string} save.scaling        Method for automatically determining saving throw DC.
 * @mixin
 */
declare class ActionTemplate {
    /** @inheritdoc */
    static defineSchema(): {
        ability: any;
        actionType: any;
        attackBonus: FormulaField;
        chatFlavor: any;
        critical: any;
        damage: any;
        formula: FormulaField;
        save: any;
    };
    /** @inheritdoc */
    static migrateData(source: any): void;
    /**
     * Migrate the ability field.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#11@#migrateAbility"(source: object): void;
    /**
     * Ensure a 0 or null in attack bonus is converted to an empty string rather than "0".
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#11@#migrateAttackBonus"(source: object): void;
    /**
     * Ensure the critical field is an object.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#11@#migrateCritical"(source: object): void;
    /**
     * Migrate the save field.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#11@#migrateSave"(source: object): void;
    /**
     * Migrate damage parts.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#11@#migrateDamage"(source: object): void;
    /**
     * Which ability score modifier is used by this item?
     * @type {string|null}
     */
    get abilityMod(): string;
    /**
     * Default ability key defined for this type.
     * @type {string|null}
     * @internal
     */
    get _typeAbilityMod(): string;
    /**
     * What is the critical hit threshold for this item? Uses the smallest value from among the following sources:
     *  - `critical.threshold` defined on the item
     *  - `critical.threshold` defined on ammunition, if consumption mode is set to ammo
     *  - Type-specific critical threshold
     * @type {number|null}
     */
    get criticalThreshold(): number;
    /**
     * Default critical threshold for this type.
     * @type {number}
     * @internal
     */
    get _typeCriticalThreshold(): number;
    /**
     * Does the Item implement an ability check as part of its usage?
     * @type {boolean}
     */
    get hasAbilityCheck(): boolean;
    /**
     * Does the Item implement an attack roll as part of its usage?
     * @type {boolean}
     */
    get hasAttack(): boolean;
    /**
     * Does the Item implement a damage roll as part of its usage?
     * @type {boolean}
     */
    get hasDamage(): boolean;
    /**
     * Does the Item implement a saving throw as part of its usage?
     * @type {boolean}
     */
    get hasSave(): boolean;
    /**
     * Does the Item provide an amount of healing instead of conventional damage?
     * @type {boolean}
     */
    get isHealing(): boolean;
    /**
     * Does the Item implement a versatile damage roll as part of its usage?
     * @type {boolean}
     */
    get isVersatile(): boolean;
}
import { FormulaField } from "../../fields";
