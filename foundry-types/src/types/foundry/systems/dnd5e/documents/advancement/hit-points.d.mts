/**
 * Advancement that presents the player with the option to roll hit points at each level or select the average value.
 * Keeps track of player hit point rolls or selection for each class level. **Can only be added to classes and each
 * class can only have one.**
 */
declare class HitPointsAdvancement extends Advancement {
    /** @inheritdoc */
    static get metadata(): any;
    /**
     * Hit points given at the provided level.
     * @param {object} data         Contents of `value` used to determine this value.
     * @param {number} hitDieValue  Face value of the hit die used by this advancement.
     * @param {number} level        Level for which to get hit points.
     * @returns {number|null}       Hit points for level or null if none have been taken.
     */
    static valueForLevel(data: object, hitDieValue: number, level: number): number | null;
    /** @inheritdoc */
    static availableForItem(item: any): boolean;
    /** @inheritdoc */
    get levels(): any;
    /**
     * Shortcut to the hit die used by the class.
     * @returns {string}
     */
    get hitDie(): string;
    /**
     * The face value of the hit die used.
     * @returns {number}
     */
    get hitDieValue(): number;
    /** @inheritdoc */
    configuredForLevel(level: any): boolean;
    /** @inheritdoc */
    titleForLevel(level: any, { configMode }?: {
        configMode?: boolean;
    }): any;
    /**
     * Hit points given at the provided level.
     * @param {number} level   Level for which to get hit points.
     * @returns {number|null}  Hit points for level or null if none have been taken.
     */
    valueForLevel(level: number): number | null;
    /**
     * Total hit points provided by this advancement.
     * @returns {number}  Hit points currently selected.
     */
    total(): number;
    /**
     * Total hit points taking the provided ability modifier into account, with a minimum of 1 per level.
     * @param {number} mod  Modifier to add per level.
     * @returns {number}    Total hit points plus modifier.
     */
    getAdjustedTotal(mod: number): number;
    /** @inheritdoc */
    apply(level: any, data: any): void;
    /** @inheritdoc */
    restore(level: any, data: any): void;
    /** @inheritdoc */
    reverse(level: any): {
        [x: number]: any;
    };
    #private;
}
import Advancement from "./advancement";
