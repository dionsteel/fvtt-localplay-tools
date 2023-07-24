/**
 * A data model and API layer which handles the schema and functionality of "group" type Actors in the dnd5e system.
 * @mixes CurrencyTemplate
 *
 * @property {object} description
 * @property {string} description.full           Description of this group.
 * @property {string} description.summary        Summary description (currently unused).
 * @property {Set<string>} members               IDs of actors belonging to this group in the world collection.
 * @property {object} attributes
 * @property {object} attributes.movement
 * @property {number} attributes.movement.land   Base movement speed over land.
 * @property {number} attributes.movement.water  Base movement speed over water.
 * @property {number} attributes.movement.air    Base movement speed through the air.
 *
 * @example Create a new Group
 * const g = new dnd5e.documents.Actor5e({
 *  type: "group",
 *  name: "Test Group",
 *  system: {
 *    members: ["3f3hoYFWUgDqBP4U"]
 *  }
 * });
 */
export default class GroupActor extends SystemDataModel {
    /** @inheritdoc */
    static defineSchema(): DataSchema;
    /**
     * Prepare base data for group actors.
     * @internal
     */
    _prepareBaseData(): void;
    /**
     * Prepare derived data for group actors.
     * @internal
     */
    _prepareDerivedData(): void;
    /**
     * Add a new member to the group.
     * @param {Actor5e} actor           A non-group Actor to add to the group
     * @returns {Promise<Actor5e>}      The updated group Actor
     */
    addMember(actor: Actor5e): Promise<Actor5e>;
    /**
     * Remove a member from the group.
     * @param {Actor5e|string} actor    An Actor or ID to remove from this group
     * @returns {Promise<Actor5e>}      The updated group Actor
     */
    removeMember(actor: Actor5e | string): Promise<Actor5e>;
}
import SystemDataModel from "../abstract.mjs";
