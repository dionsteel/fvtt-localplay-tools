/**
 * Data model template for items that can be used as some sort of action.
 *
 * @property {object} activation            Effect's activation conditions.
 * @property {string} activation.type       Activation type as defined in `DND5E.abilityActivationTypes`.
 * @property {number} activation.cost       How much of the activation type is needed to use this item's effect.
 * @property {string} activation.condition  Special conditions required to activate the item.
 * @property {object} duration              Effect's duration.
 * @property {number} duration.value        How long the effect lasts.
 * @property {string} duration.units        Time duration period as defined in `DND5E.timePeriods`.
 * @property {number} cover                 Amount of cover does this item affords to its crew on a vehicle.
 * @property {object} target                Effect's valid targets.
 * @property {number} target.value          Length or radius of target depending on targeting mode selected.
 * @property {number} target.width          Width of line when line type is selected.
 * @property {string} target.units          Units used for value and width as defined in `DND5E.distanceUnits`.
 * @property {string} target.type           Targeting mode as defined in `DND5E.targetTypes`.
 * @property {object} range                 Effect's range.
 * @property {number} range.value           Regular targeting distance for item's effect.
 * @property {number} range.long            Maximum targeting distance for features that have a separate long range.
 * @property {string} range.units           Units used for value and long as defined in `DND5E.distanceUnits`.
 * @property {object} uses                  Effect's limited uses.
 * @property {number} uses.value            Current available uses.
 * @property {string} uses.max              Maximum possible uses or a formula to derive that number.
 * @property {string} uses.per              Recharge time for limited uses as defined in `DND5E.limitedUsePeriods`.
 * @property {object} consume               Effect's resource consumption.
 * @property {string} consume.type          Type of resource to consume as defined in `DND5E.abilityConsumptionTypes`.
 * @property {string} consume.target        Item ID or resource key path of resource to consume.
 * @property {number} consume.amount        Quantity of the resource to consume per use.
 * @mixin
 */
export default class ActivatedEffectTemplate {
    /** @inheritdoc */
    static defineSchema(): {
        activation: any;
        duration: any;
        cover: any;
        crewed: any;
        target: any;
        range: any;
        uses: {};
        consume: any;
    };
    /**
     * Extension of SchemaField used to track item uses.
     * @internal
     */
    static ItemUsesField: {
        new (extraSchema: any, options: any): {};
    };
    /** @inheritdoc */
    static migrateData(source: any): void;
    /**
     * Ensure a 0 or null in max uses & durations are converted to an empty string rather than "0". Convert numbers into
     * strings.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#12@#migrateFormulaFields"(source: object): void;
    /**
     * Fix issue with some imported range data that uses the format "100/400" in the range field,
     * rather than splitting it between "range.value" & "range.long".
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#12@#migrateRanges"(source: object): void;
    /**
     * Ensure blank strings in targets are converted to null.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#12@#migrateTargets"(source: object): void;
    /**
     * Ensure a blank string in uses.value is converted to null.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#12@#migrateUses"(source: object): void;
    /**
     * Migrate the consume field.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#12@#migrateConsume"(source: object): void;
    /**
     * Chat properties for activated effects.
     * @type {string[]}
     */
    get activatedEffectChatProperties(): string[];
    /**
     * Does the Item have an area of effect target?
     * @type {boolean}
     */
    get hasAreaTarget(): boolean;
    /**
     * Does the Item target one or more distinct targets?
     * @type {boolean}
     */
    get hasIndividualTarget(): boolean;
    /**
     * Is this Item limited in its ability to be used by charges or by recharge?
     * @type {boolean}
     */
    get hasLimitedUses(): boolean;
    /**
     * Does the Item duration accept an associated numeric value or formula?
     * @type {boolean}
     */
    get hasScalarDuration(): boolean;
    /**
     * Does the Item range accept an associated numeric value?
     * @type {boolean}
     */
    get hasScalarRange(): boolean;
    /**
     * Does the Item target accept an associated numeric value?
     * @type {boolean}
     */
    get hasScalarTarget(): boolean;
    /**
     * Does the Item have a target?
     * @type {boolean}
     */
    get hasTarget(): boolean;
}
