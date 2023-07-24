/**
 * Data model for the Scale Value advancement type.
 *
 * @property {string} identifier        Identifier used to select this scale value in roll formulas.
 * @property {string} type              Type of data represented by this scale value.
 * @property {object} [distance]
 * @property {string} [distance.units]  If distance type is selected, the units each value uses.
 * @property {Object<string, *>} scale  Scale values for each level. Value format is determined by type.
 */
export class ScaleValueConfigurationData {
    /** @inheritdoc */
    static defineSchema(): {
        identifier: IdentifierField;
        type: any;
        distance: any;
        scale: MappingField;
    };
    /** @inheritdoc */
    static migrateData(source: any): void;
}
/**
 * Data field that automatically selects the appropriate ScaleValueType based on the selected type.
 */
export class ScaleValueEntryField {
    /** @override */
    override _cleanType(value: any, options: any): any;
    /** @override */
    override initialize(value: any, model: any): any;
    /** @override */
    override toObject(value: any): any;
}
/**
 * Base scale value data type that stores generic string values.
 *
 * @property {string} value  String value.
 */
export class ScaleValueType {
    /** @inheritdoc */
    static defineSchema(): {
        value: any;
    };
    /**
     * Information on how a scale value of this type is configured.
     *
     * @typedef {object} ScaleValueTypeMetadata
     * @property {string} label       Name of this type.
     * @property {string} hint        Hint for this type shown in the scale value configuration.
     * @property {boolean} isNumeric  When using the default editing interface, should numeric inputs be used?
     */
    /**
     * Configuration information for this scale value type.
     * @type {ScaleValueTypeMetadata}
     */
    static get metadata(): {
        /**
         * Name of this type.
         */
        label: string;
        /**
         * Hint for this type shown in the scale value configuration.
         */
        hint: string;
        /**
         * When using the default editing interface, should numeric inputs be used?
         */
        isNumeric: boolean;
    };
    /**
     * Attempt to convert another scale value type to this one.
     * @param {ScaleValueType} original  Original type to attempt to convert.
     * @param {object} [options]         Options which affect DataModel construction.
     * @returns {ScaleValueType|null}
     */
    static convertFrom(original: ScaleValueType, options?: object): ScaleValueType | null;
    /**
     * This scale value prepared to be used in roll formulas.
     * @type {string|null}
     */
    get formula(): string;
    /**
     * This scale value formatted for display.
     * @type {string|null}
     */
    get display(): string;
    /**
     * Shortcut to the prepared value when used in roll formulas.
     * @returns {string}
     */
    toString(): string;
}
/**
 * Scale value data type that stores numeric values.
 *
 * @property {number} value  Numeric value.
 */
export class ScaleValueTypeNumber extends ScaleValueType {
    /** @inheritdoc */
    static get metadata(): any;
    /** @inheritdoc */
    static convertFrom(original: any, options: any): ScaleValueTypeNumber;
}
/**
 * Scale value data type that stores challenge ratings.
 *
 * @property {number} value  CR value.
 */
export class ScaleValueTypeCR extends ScaleValueTypeNumber {
}
/**
 * Scale value data type that stores dice values.
 *
 * @property {number} number  Number of dice.
 * @property {number} faces   Die faces.
 */
export class ScaleValueTypeDice extends ScaleValueType {
    /** @inheritdoc */
    static defineSchema(): {
        number: any;
        faces: any;
    };
    /** @inheritdoc */
    static get metadata(): any;
    /**
     * List of die faces that can be chosen.
     * @type {number[]}
     */
    static FACES: number[];
    /** @inheritdoc */
    static convertFrom(original: any, options: any): ScaleValueTypeDice;
    /** @inheritdoc */
    static migrateData(source: any): void;
    /**
     * The die value to be rolled with the leading "d" (e.g. "d4").
     * @type {string}
     */
    get die(): string;
}
/**
 * Scale value data type that stores distance values.
 *
 * @property {number} value  Numeric value.
 */
export class ScaleValueTypeDistance extends ScaleValueTypeNumber {
}
/**
 * The available types of scaling value.
 */
export type TYPES = ScaleValueType;
export namespace TYPES {
    export { ScaleValueType as string };
    export { ScaleValueTypeNumber as number };
    export { ScaleValueTypeCR as cr };
    export { ScaleValueTypeDice as dice };
    export { ScaleValueTypeDistance as distance };
}
import { IdentifierField } from "../fields.mjs";
import { MappingField } from "../fields.mjs";
