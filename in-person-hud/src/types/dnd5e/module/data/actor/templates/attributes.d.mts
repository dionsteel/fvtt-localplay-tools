/**
 * Shared contents of the attributes schema between various actor types.
 */
export default class AttributesFields {
    /**
     * Fields shared between characters, NPCs, and vehicles.
     *
     * @type {object}
     * @property {object} init
     * @property {number} init.value       Calculated initiative modifier.
     * @property {number} init.bonus       Fixed bonus provided to initiative rolls.
     * @property {object} movement
     * @property {number} movement.burrow  Actor burrowing speed.
     * @property {number} movement.climb   Actor climbing speed.
     * @property {number} movement.fly     Actor flying speed.
     * @property {number} movement.swim    Actor swimming speed.
     * @property {number} movement.walk    Actor walking speed.
     * @property {string} movement.units   Movement used to measure the various speeds.
     * @property {boolean} movement.hover  Is this flying creature able to hover in place.
     */
    static get common(): any;
    /**
     * Fields shared between characters and NPCs.
     *
     * @type {object}
     * @property {object} attunement
     * @property {number} attunement.max      Maximum number of attuned items.
     * @property {object} senses
     * @property {number} senses.darkvision   Creature's darkvision range.
     * @property {number} senses.blindsight   Creature's blindsight range.
     * @property {number} senses.tremorsense  Creature's tremorsense range.
     * @property {number} senses.truesight    Creature's truesight range.
     * @property {string} senses.units        Distance units used to measure senses.
     * @property {string} senses.special      Description of any special senses or restrictions.
     * @property {string} spellcasting        Primary spellcasting ability.
     */
    static get creature(): any;
    /**
     * Migrate the old init.value and incorporate it into init.bonus.
     * @param {object} source  The source attributes object.
     * @internal
     */
    static _migrateInitiative(source: object): void;
}
