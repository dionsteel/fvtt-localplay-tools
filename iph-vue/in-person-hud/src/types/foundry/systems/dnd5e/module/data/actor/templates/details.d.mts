/**
 * Shared contents of the details schema between various actor types.
 */
declare class DetailsField {
    /**
     * Fields shared between characters, NPCs, and vehicles.
     *
     * @type {object}
     * @property {object} biography         Actor's biography data.
     * @property {string} biography.value   Full HTML biography information.
     * @property {string} biography.public  Biography that will be displayed to players with observer privileges.
     */
    static get common(): any;
    /**
     * Fields shared between characters and NPCs.
     *
     * @type {object}
     * @property {string} alignment  Creature's alignment.
     * @property {string} race       Creature's race.
     */
    static get creature(): any;
}
