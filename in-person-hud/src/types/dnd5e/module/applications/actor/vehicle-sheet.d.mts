/**
 * An Actor sheet for Vehicle type actors.
 */
export default class ActorSheet5eVehicle extends ActorSheet5e {
    /**
     * Creates a new cargo entry for a vehicle Actor.
     * @type {object}
     */
    static get newCargo(): any;
    /**
     * Compute the total weight of the vehicle's cargo.
     * @param {number} totalWeight    The cumulative item weight from inventory items
     * @param {object} actorData      The data object for the Actor being rendered
     * @returns {{max: number, value: number, pct: number}}
     * @private
     */
    private _computeEncumbrance;
    /** @override */
    override _getMovementSpeed(actorData: any, largestPrimary?: boolean): {
        primary: string;
        special: string;
    };
    /**
     * Prepare items that are mounted to a vehicle and require one or more crew to operate.
     * @param {object} item     Copy of the item data being prepared for display.
     * @param {object} context  Display context for the item.
     * @protected
     */
    protected _prepareCrewedItem(item: object, context: object): void;
    /** @override */
    override _prepareItems(context: any): void;
    /**
     * Handle saving a cargo row (i.e. crew or passenger) in-sheet.
     * @param {Event} event              Triggering event.
     * @returns {Promise<Actor5e>|null}  Actor after update if any changes were made.
     * @private
     */
    private _onCargoRowChange;
    /**
     * Handle editing certain values like quantity, price, and weight in-sheet.
     * @param {Event} event  Triggering event.
     * @returns {Promise<Item5e>}  Item with updates applied.
     * @private
     */
    private _onEditInSheet;
    /** @inheritDoc */
    _onItemCreate(event: any): any;
    /** @inheritDoc */
    _onItemDelete(event: any): any;
    /** @override */
    override _onDropSingleItem(itemData: any): Promise<any>;
    /**
     * Special handling for editing HP to clamp it within appropriate range.
     * @param {Event} event  Triggering event.
     * @returns {Promise<Item5e>}  Item after the update is applied.
     * @private
     */
    private _onHPChange;
    /**
     * Special handling for editing quantity value of equipment and weapons inside the features tab.
     * @param {Event} event  Triggering event.
     * @returns {Promise<Item5e>}  Item after the update is applied.
     * @private
     */
    private _onQtyChange;
    /**
     * Handle toggling an item's crewed status.
     * @param {Event} event  Triggering event.
     * @returns {Promise<Item5e>}  Item after the toggling is applied.
     * @private
     */
    private _onToggleItem;
}
import ActorSheet5e from "./base-sheet.mjs";
