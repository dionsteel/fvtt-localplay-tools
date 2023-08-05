/**
 * Base configuration application for advancements that can be extended by other types to implement custom
 * editing interfaces.
 *
 * @param {Advancement} advancement            The advancement item being edited.
 * @param {object} [options={}]                Additional options passed to FormApplication.
 * @param {string} [options.dropKeyPath=null]  Path within advancement configuration where dropped items are stored.
 *                                             If populated, will enable default drop & delete behavior.
 */
declare class AdvancementConfig {
    /** @inheritDoc */
    static get defaultOptions(): any;
    /**
     * Helper method to take an object and apply updates that remove any empty keys.
     * @param {object} object  Object to be cleaned.
     * @returns {object}       Copy of object with only non false-ish values included and others marked
     *                         using `-=` syntax to be removed by update process.
     * @protected
     */
    protected static _cleanedObject(object: object): object;
    constructor(advancement: any, options?: {});
    /**
     * Parent item to which this advancement belongs.
     * @type {Item5e}
     */
    item: Item5e;
    /**
     * The advancement being created or edited.
     * @type {Advancement}
     */
    get advancement(): Advancement;
    /** @inheritDoc */
    get title(): string;
    /** @inheritdoc */
    close(options?: {}): Promise<void>;
    /** @inheritdoc */
    getData(): any;
    /**
     * Perform any changes to configuration data before it is saved to the advancement.
     * @param {object} configuration  Configuration object.
     * @returns {object}              Modified configuration.
     */
    prepareConfigurationUpdate(configuration: object): object;
    /** @inheritdoc */
    activateListeners(html: any): void;
    /** @inheritdoc */
    render(force?: boolean, options?: {}): any;
    /** @inheritdoc */
    _updateObject(event: any, formData: any): Promise<void>;
    /**
     * Handle deleting an existing Item entry from the Advancement.
     * @param {Event} event        The originating click event.
     * @returns {Promise<Item5e>}  The updated parent Item after the application re-renders.
     * @protected
     */
    protected _onItemDelete(event: Event): Promise<Item5e>;
    /** @inheritdoc */
    _canDragDrop(): any;
    /** @inheritdoc */
    _onDrop(event: any): Promise<any>;
    /**
     * Called when an item is dropped to validate the Item before it is saved. An error should be thrown
     * if the item is invalid.
     * @param {Event} event  Triggering drop event.
     * @param {Item5e} item  The materialized Item that was dropped.
     * @throws An error if the item is invalid.
     * @protected
     */
    protected _validateDroppedItem(event: Event, item: Item5e): void;
    #private;
}
