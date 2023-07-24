/**
 * A character sheet for group-type Actors.
 * The functionality of this sheet is sufficiently different from other Actor types that we extend the base
 * Foundry VTT ActorSheet instead of the ActorSheet5e abstraction used for character, npc, and vehicle types.
 */
export default class GroupActorSheet {
    /** @inheritDoc */
    static get defaultOptions(): any;
    /**
     * A set of item types that should be prevented from being dropped on this type of actor sheet.
     * @type {Set<string>}
     */
    static unsupportedItemTypes: Set<string>;
    /**
     * IDs for items on the sheet that have been expanded.
     * @type {Set<string>}
     * @protected
     */
    protected _expanded: Set<string>;
    /** @inheritDoc */
    getData(options?: {}): Promise<any>;
    /** @inheritDoc */
    _render(force: any, options?: {}): Promise<any>;
    /** @inheritDoc */
    close(options?: {}): Promise<any>;
    /** @inheritDoc */
    activateListeners(html: any): void;
    /**
     * Handle clicks to action buttons on the group sheet.
     * @param {PointerEvent} event      The initiating click event
     * @protected
     */
    protected _onClickActionButton(event: PointerEvent): void;
    /**
     * Handle clicks to item control buttons on the group sheet.
     * @param {PointerEvent} event      The initiating click event
     * @protected
     */
    protected _onClickItemControl(event: PointerEvent): void;
    /**
     * Handle workflows to create a new Item directly within the Group Actor sheet.
     * @param {HTMLElement} button      The clicked create button
     * @returns {Item5e}                The created embedded Item
     * @protected
     */
    protected _createItem(button: HTMLElement): Item5e;
    /**
     * Handle activation of a context menu for an embedded Item document.
     * Dynamically populate the array of context menu options.
     * Reuse the item context options provided by the base ActorSheet5e class.
     * @param {HTMLElement} element       The HTML element for which the context menu is activated
     * @protected
     */
    protected _onItemContext(element: HTMLElement): void;
    /**
     * Handle clicks on member names in the members list.
     * @param {PointerEvent} event      The initiating click event
     * @protected
     */
    protected _onClickMemberName(event: PointerEvent): void;
    /**
     * Handle clicks on an item name to expand its description
     * @param {PointerEvent} event      The initiating click event
     * @protected
     */
    protected _onClickItemName(event: PointerEvent): void;
    /** @override */
    override _onDropActor(event: any, data: any): Promise<any>;
    /** @override */
    override _onDropItemCreate(itemData: any): Promise<any>;
    /**
     * Handles dropping of a single item onto this group sheet.
     * @param {object} itemData            The item data to create.
     * @returns {Promise<object|boolean>}  The item data to create after processing, or false if the item should not be
     *                                     created or creation has been otherwise handled.
     * @protected
     */
    protected _onDropSingleItem(itemData: object): Promise<object | boolean>;
    #private;
}
import Item5e from "../../documents/item.mjs";
