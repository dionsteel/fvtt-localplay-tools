/**
 * An Actor sheet for player character type actors.
 */
export default class ActorSheet5eCharacter extends ActorSheet5e {
    /** @inheritDoc */
    getData(options?: {}): Promise<any>;
    /** @override */
    override _prepareItems(context: any): void;
    /**
     * A helper method to establish the displayed preparation state for an item.
     * @param {Item5e} item     Item being prepared for display.
     * @param {object} context  Context data for display.
     * @protected
     */
    protected _prepareItemToggleState(item: Item5e, context: object): void;
    /**
     * Handle mouse click events for character sheet actions.
     * @param {MouseEvent} event  The originating click event.
     * @returns {Promise}         Dialog or roll result.
     * @private
     */
    private _onSheetAction;
    /**
     * Respond to a new level being selected from the level selector.
     * @param {Event} event                           The originating change.
     * @returns {Promise<AdvancementManager|Item5e>}  Manager if advancements needed, otherwise updated class item.
     * @private
     */
    private _onLevelChange;
    /**
     * Handle toggling the state of an Owned Item within the Actor.
     * @param {Event} event        The triggering click event.
     * @returns {Promise<Item5e>}  Item with the updates applied.
     * @private
     */
    private _onToggleItem;
    /**
     * Take a short rest, calling the relevant function on the Actor instance.
     * @param {Event} event             The triggering click event.
     * @returns {Promise<RestResult>}  Result of the rest action.
     * @private
     */
    private _onShortRest;
    /**
     * Take a long rest, calling the relevant function on the Actor instance.
     * @param {Event} event             The triggering click event.
     * @returns {Promise<RestResult>}  Result of the rest action.
     * @private
     */
    private _onLongRest;
    /** @override */
    override _onDropSingleItem(itemData: any): Promise<any>;
}
import ActorSheet5e from "./base-sheet.mjs";
