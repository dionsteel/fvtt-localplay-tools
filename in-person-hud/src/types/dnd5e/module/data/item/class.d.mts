/**
 * Data definition for Class items.
 * @mixes ItemDescriptionTemplate
 *
 * @property {string} identifier        Identifier slug for this class.
 * @property {number} levels            Current number of levels in this class.
 * @property {string} hitDice           Denomination of hit dice available as defined in `DND5E.hitDieTypes`.
 * @property {number} hitDiceUsed       Number of hit dice consumed.
 * @property {object[]} advancement     Advancement objects for this class.
 * @property {string[]} saves           Savings throws in which this class grants proficiency.
 * @property {object} skills            Available class skills and selected skills.
 * @property {number} skills.number     Number of skills selectable by the player.
 * @property {string[]} skills.choices  List of skill keys that are valid to be chosen.
 * @property {string[]} skills.value    List of skill keys the player has chosen.
 * @property {object} spellcasting      Details on class's spellcasting ability.
 * @property {string} spellcasting.progression  Spell progression granted by class as from `DND5E.spellProgression`.
 * @property {string} spellcasting.ability      Ability score to use for spellcasting.
 */
export default class ClassData extends SystemDataModel {
    /** @inheritdoc */
    static defineSchema(): DataSchema;
    /** @inheritdoc */
    static migrateData(source: any): void;
    /**
     * Migrate the class levels.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#10@#migrateLevels"(source: object): void;
    /**
     * Migrate the class's spellcasting string to object.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#10@#migrateSpellcastingData"(source: object): void;
}
import SystemDataModel from "../abstract.mjs";
