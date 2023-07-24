/**
 * Override and extend the core ItemSheet implementation to handle specific item types.
 */
export default class ItemSheet5e {
    /** @inheritdoc */
    static get defaultOptions(): any;
    constructor(...args: any[]);
    /**
     * Whether advancements on embedded items should be configurable.
     * @type {boolean}
     */
    advancementConfigurationMode: boolean;
    /** @inheritdoc */
    get template(): string;
    /** @override */
    override getData(options: any): Promise<any>;
    /**
     * Get the display object used to show the advancement tab.
     * @param {Item5e} item  The item for which the advancement is being prepared.
     * @returns {object}     Object with advancement data grouped by levels.
     */
    _getItemAdvancement(item: Item5e): object;
    /**
     * Get the base weapons and tools based on the selected type.
     * @returns {Promise<object>}  Object with base items for this type formatted for selectOptions.
     * @protected
     */
    protected _getItemBaseTypes(): Promise<object>;
    /**
     * Get the valid item consumption targets which exist on the actor
     * @returns {Object<string>}   An object of potential consumption targets
     * @private
     */
    private _getItemConsumptionTargets;
    /**
     * Get the text item status which is shown beneath the Item type in the top-right corner of the sheet.
     * @returns {string|null}  Item status string if applicable to item's type.
     * @protected
     */
    protected _getItemStatus(): string | null;
    /**
     * Get the Array of item properties which are used in the small sidebar of the description tab.
     * @returns {string[]}   List of property labels to be shown.
     * @private
     */
    private _getItemProperties;
    /** @inheritDoc */
    setPosition(position?: {}): any;
    /** @inheritdoc */
    activateEditor(name: any, options?: {}, initialContent?: string): Promise<any>;
    /** @inheritDoc */
    _getSubmitData(updateData?: {}): any;
    /** @inheritDoc */
    activateListeners(html: any): void;
    /**
     * Get the set of ContextMenu options which should be applied for advancement entries.
     * @returns {ContextMenuEntry[]}  Context menu entries.
     * @protected
     */
    protected _getAdvancementContextMenuOptions(): ContextMenuEntry[];
    /**
     * Add or remove a damage part from the damage formula.
     * @param {Event} event             The original click event.
     * @returns {Promise<Item5e>|null}  Item with updates applied.
     * @private
     */
    private _onDamageControl;
    /** @inheritdoc */
    _onDragStart(event: any): void;
    /** @inheritdoc */
    _onDrop(event: any): Promise<any>;
    /**
     * Handle the dropping of ActiveEffect data onto an Item Sheet
     * @param {DragEvent} event                  The concluding DragEvent which contains drop data
     * @param {object} data                      The data transfer extracted from the event
     * @returns {Promise<ActiveEffect|boolean>}  The created ActiveEffect object or false if it couldn't be created.
     * @protected
     */
    protected _onDropActiveEffect(event: DragEvent, data: object): Promise<ActiveEffect | boolean>;
    /**
     * Handle the dropping of an advancement or item with advancements onto the advancements tab.
     * @param {DragEvent} event                  The concluding DragEvent which contains drop data.
     * @param {object} data                      The data transfer extracted from the event.
     */
    _onDropAdvancement(event: DragEvent, data: object): Promise<any>;
    /**
     * Handle spawning the TraitSelector application for selection various options.
     * @param {Event} event   The click event which originated the selection.
     * @private
     */
    private _onConfigureTraits;
    /**
     * Handle one of the advancement actions from the buttons or context menu.
     * @param {Element} target  Button or context menu entry that triggered this action.
     * @param {string} action   Action being triggered.
     * @returns {Promise|void}
     */
    _onAdvancementAction(target: Element, action: string): Promise<any> | void;
    /** @inheritdoc */
    _onSubmit(...args: any[]): Promise<void>;
}
