/**
 * @typedef {object} AbilityData
 * @property {number} value          Ability score.
 * @property {number} proficient     Proficiency value for saves.
 * @property {object} bonuses        Bonuses that modify ability checks and saves.
 * @property {string} bonuses.check  Numeric or dice bonus to ability checks.
 * @property {string} bonuses.save   Numeric or dice bonus to ability saving throws.
 */
/**
 * A template for all actors that share the common template.
 *
 * @property {Object<string, AbilityData>} abilities  Actor's abilities.
 * @mixin
 */
export default class CommonTemplate extends SystemDataModel {
    /** @inheritdoc */
    static defineSchema(): DataSchema;
    /**
     * Populate the proper initial value for abilities.
     * @param {string} key       Key for which the initial data will be created.
     * @param {object} initial   The initial skill object created by SkillData.
     * @param {object} existing  Any existing mapping data.
     * @returns {object}         Initial ability object.
     * @private
     */
    private static _initialAbilityValue;
    /** @inheritdoc */
    static migrateData(source: any): void;
    /**
     * Migrate the actor ac.value to new ac.flat override field.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#6@#migrateACData"(source: object): void;
    /**
     * Migrate the actor speed string to movement object.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#6@#migrateMovementData"(source: object): void;
}
export type AbilityData = {
    /**
     * Ability score.
     */
    value: number;
    /**
     * Proficiency value for saves.
     */
    proficient: number;
    /**
     * Bonuses that modify ability checks and saves.
     */
    bonuses: {
        check: string;
        save: string;
    };
};
import SystemDataModel from "../../abstract.mjs";
