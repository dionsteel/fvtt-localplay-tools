/**
 * Object describing the proficiency for a specific ability or skill.
 *
 * @param {number} proficiency   Actor's flat proficiency bonus based on their current level.
 * @param {number} multiplier    Value by which to multiply the actor's base proficiency value.
 * @param {boolean} [roundDown]  Should half-values be rounded up or down?
 */
declare class Proficiency {
    /**
     * Calculate an actor's proficiency modifier based on level or CR.
     * @param {number} level  Level or CR To use for calculating proficiency modifier.
     * @returns {number}      Proficiency modifier.
     */
    static calculateMod(level: number): number;
    constructor(proficiency: any, multiplier: any, roundDown?: boolean);
    /**
     * Base proficiency value of the actor.
     * @type {number}
     * @private
     */
    private _baseProficiency;
    /**
     * Value by which to multiply the actor's base proficiency value.
     * @type {number}
     */
    multiplier: number;
    /**
     * Direction decimal results should be rounded ("up" or "down").
     * @type {string}
     */
    rounding: string;
    /**
     * Flat proficiency value regardless of proficiency mode.
     * @type {number}
     */
    get flat(): number;
    /**
     * Dice-based proficiency value regardless of proficiency mode.
     * @type {string}
     */
    get dice(): string;
    /**
     * Either flat or dice proficiency term based on configured setting.
     * @type {string}
     */
    get term(): string;
    /**
     * Whether the proficiency is greater than zero.
     * @type {boolean}
     */
    get hasProficiency(): boolean;
    /**
     * Override the default `toString` method to return flat proficiency for backwards compatibility in formula.
     * @returns {string}  Flat proficiency value.
     */
    toString(): string;
}
