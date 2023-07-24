/**
 * Advancement that represents a value that scales with class level. **Can only be added to classes or subclasses.**
 */
export default class ScaleValueAdvancement extends Advancement {
    /** @inheritdoc */
    static get metadata(): any;
    /**
     * The available types of scaling value.
     * @enum {ScaleValueType}
     */
    static TYPES: {
        string: typeof import("../../data/advancement/scale-value.mjs").ScaleValueType;
        number: typeof import("../../data/advancement/scale-value.mjs").ScaleValueTypeNumber;
        cr: typeof import("../../data/advancement/scale-value.mjs").ScaleValueTypeCR;
        dice: typeof import("../../data/advancement/scale-value.mjs").ScaleValueTypeDice;
        distance: typeof import("../../data/advancement/scale-value.mjs").ScaleValueTypeDistance;
    };
    /** @inheritdoc */
    get levels(): any;
    /**
     * Identifier for this scale value, either manual value or the slugified title.
     * @type {string}
     */
    get identifier(): string;
    /** @inheritdoc */
    titleForLevel(level: any, { configMode }?: {
        configMode?: boolean;
    }): any;
    /**
     * Scale value for the given level.
     * @param {number} level      Level for which to get the scale value.
     * @returns {ScaleValueType}  Scale value at the given level or null if none exists.
     */
    valueForLevel(level: number): ScaleValueType;
    /**
     * Compare two scaling values and determine if they are equal.
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     */
    testEquality(a: any, b: any): boolean;
}
import Advancement from "./advancement.mjs";
