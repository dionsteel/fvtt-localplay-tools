/**
 * Data definition for Spell items.
 * @mixes ItemDescriptionTemplate
 * @mixes ActivatedEffectTemplate
 * @mixes ActionTemplate
 *
 * @property {number} level                      Base level of the spell.
 * @property {string} school                     Magical school to which this spell belongs.
 * @property {object} components                 General components and tags for this spell.
 * @property {boolean} components.vocal          Does this spell require vocal components?
 * @property {boolean} components.somatic        Does this spell require somatic components?
 * @property {boolean} components.material       Does this spell require material components?
 * @property {boolean} components.ritual         Can this spell be cast as a ritual?
 * @property {boolean} components.concentration  Does this spell require concentration?
 * @property {object} materials                  Details on material components required for this spell.
 * @property {string} materials.value            Description of the material components required for casting.
 * @property {boolean} materials.consumed        Are these material components consumed during casting?
 * @property {number} materials.cost             GP cost for the required components.
 * @property {number} materials.supply           Quantity of this component available.
 * @property {object} preparation                Details on how this spell is prepared.
 * @property {string} preparation.mode           Spell preparation mode as defined in `DND5E.spellPreparationModes`.
 * @property {boolean} preparation.prepared      Is the spell currently prepared?
 * @property {object} scaling                    Details on how casting at higher levels affects this spell.
 * @property {string} scaling.mode               Spell scaling mode as defined in `DND5E.spellScalingModes`.
 * @property {string} scaling.formula            Dice formula used for scaling.
 */
export default class SpellData extends SystemDataModel {
    /** @inheritdoc */
    static defineSchema(): DataSchema;
    /** @inheritdoc */
    static migrateData(source: any): void;
    /**
     * Migrate the spell's component object to remove any old, non-boolean values.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#17@#migrateComponentData"(source: object): void;
    /**
     * Migrate spell scaling.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#17@#migrateScaling"(source: object): void;
    /**
     * Properties displayed in chat.
     * @type {string[]}
     */
    get chatProperties(): string[];
    /** @inheritdoc */
    get _typeAbilityMod(): any;
    /** @inheritdoc */
    get _typeCriticalThreshold(): any;
}
import SystemDataModel from "../abstract.mjs";
