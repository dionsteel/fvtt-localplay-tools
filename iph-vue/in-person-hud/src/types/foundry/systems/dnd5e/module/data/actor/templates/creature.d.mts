/**
 * @typedef {object} SkillData
 * @property {number} value            Proficiency level creature has in this skill.
 * @property {string} ability          Default ability used for this skill.
 * @property {object} bonuses          Bonuses for this skill.
 * @property {string} bonuses.check    Numeric or dice bonus to skill's check.
 * @property {string} bonuses.passive  Numeric bonus to skill's passive check.
 */
/**
 * A template for all actors that are creatures
 *
 * @property {object} bonuses
 * @property {AttackBonusesData} bonuses.mwak        Bonuses to melee weapon attacks.
 * @property {AttackBonusesData} bonuses.rwak        Bonuses to ranged weapon attacks.
 * @property {AttackBonusesData} bonuses.msak        Bonuses to melee spell attacks.
 * @property {AttackBonusesData} bonuses.rsak        Bonuses to ranged spell attacks.
 * @property {object} bonuses.abilities              Bonuses to ability scores.
 * @property {string} bonuses.abilities.check        Numeric or dice bonus to ability checks.
 * @property {string} bonuses.abilities.save         Numeric or dice bonus to ability saves.
 * @property {string} bonuses.abilities.skill        Numeric or dice bonus to skill checks.
 * @property {object} bonuses.spell                  Bonuses to spells.
 * @property {string} bonuses.spell.dc               Numeric bonus to spellcasting DC.
 * @property {Object<string, SkillData>} skills      Actor's skills.
 * @property {Object<string, SpellSlotData>} spells  Actor's spell slots.
 */
declare class CreatureTemplate extends CommonTemplate {
    /**
     * Populate the proper initial abilities for the skills.
     * @param {string} key      Key for which the initial data will be created.
     * @param {object} initial  The initial skill object created by SkillData.
     * @returns {object}        Initial skills object with the ability defined.
     * @private
     */
    private static _initialSkillValue;
    /**
     * Helper for building the default list of spell levels.
     * @type {string[]}
     * @private
     */
    private static get _spellLevels();
    /**
     * Migrate the actor traits.senses string to attributes.senses object.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#7@#migrateSensesData"(source: object): void;
    /**
     * Migrate traits.toolProf to the tools field.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#7@#migrateToolData"(source: object): void;
}
/**
 * Data on configuration of a specific spell slot.
 */
export type SpellSlotData = {
    /**
     * Currently available spell slots.
     */
    value: number;
    /**
     * Number to replace auto-calculated max slots.
     */
    override: number;
};
/**
 * Data structure for actor's attack bonuses.
 */
export type AttackBonusesData = {
    /**
     * Numeric or dice bonus to attack rolls.
     */
    attack: string;
    /**
     * Numeric or dice bonus to damage rolls.
     */
    damage: string;
};
export type SkillData = {
    /**
     * Proficiency level creature has in this skill.
     */
    value: number;
    /**
     * Default ability used for this skill.
     */
    ability: string;
    /**
     * Bonuses for this skill.
     */
    bonuses: {
        check: string;
        passive: string;
    };
};
import CommonTemplate from "./common";
