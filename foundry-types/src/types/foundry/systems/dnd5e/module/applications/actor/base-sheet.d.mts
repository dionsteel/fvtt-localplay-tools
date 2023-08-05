/**
 * Extend the basic ActorSheet class to suppose system-specific logic and functionality.
 * @abstract
 */
declare class ActorSheet5e {
    /** @override */
    static override get defaultOptions(): any;
    /**
     * A set of item types that should be prevented from being dropped on this type of actor sheet.
     * @type {Set<string>}
     */
    static unsupportedItemTypes: Set<string>;
    /**
     * Track the set of item filters which are applied
     * @type {Object<string, Set>}
     * @protected
     */
    protected _filters: {
        [x: string]: Set;
    };
    /**
     * IDs for items on the sheet that have been expanded.
     * @type {Set<string>}
     * @protected
     */
    protected _expanded: Set<string>;
    /** @override */
    override get template(): string;
    /** @override */
    override getData(options: any): Promise<{
        actor: any;
        source: any;
        system: any;
        items: any;
        itemContext: {};
        abilities: any;
        skills: any;
        tools: any;
        labels: any;
        movement: {
            primary: string;
            special: string;
        };
        senses: any;
        effects: any;
        warnings: any;
        filters: {
            [x: string]: Set;
        };
        owner: any;
        limited: any;
        options: any;
        editable: any;
        cssClass: string;
        isCharacter: boolean;
        isNPC: boolean;
        isVehicle: boolean;
        config: any;
        rollableClass: string;
        rollData: any;
    }>;
    /**
     * Prepare labels object for the context.
     * @returns {object}           Object containing various labels.
     * @protected
     */
    protected _getLabels(): object;
    /**
     * Prepare the display of movement speed data for the Actor.
     * @param {object} systemData               System data for the Actor being prepared.
     * @param {boolean} [largestPrimary=false]  Show the largest movement speed as "primary", otherwise show "walk".
     * @returns {{primary: string, special: string}}
     * @protected
     */
    protected _getMovementSpeed(systemData: object, largestPrimary?: boolean): {
        primary: string;
        special: string;
    };
    /**
     * Prepare senses object for display.
     * @param {object} systemData  System data for the Actor being prepared.
     * @returns {object}           Senses grouped by key with localized and formatted string.
     * @protected
     */
    protected _getSenses(systemData: object): object;
    /** @inheritdoc */
    activateEditor(name: any, options?: {}, initialContent?: string): Promise<any>;
    /**
     * Break down all of the Active Effects affecting a given target property.
     * @param {string} target               The data property being targeted.
     * @returns {AttributionDescription[]}  Any active effects that modify that property.
     * @protected
     */
    protected _prepareActiveEffectAttributions(target: string): AttributionDescription[];
    /**
     * Produce a list of armor class attribution objects.
     * @param {object} rollData             Data provided by Actor5e#getRollData
     * @returns {AttributionDescription[]}  List of attribution descriptions.
     * @protected
     */
    protected _prepareArmorClassAttribution(rollData: object): AttributionDescription[];
    /**
     * Prepare the data structure for traits data like languages, resistances & vulnerabilities, and proficiencies.
     * @param {object} systemData  System data for the Actor being prepared.
     * @returns {object}           Prepared trait data.
     * @protected
     */
    protected _prepareTraits(systemData: object): object;
    /**
     * Prepare the data structure for items which appear on the actor sheet.
     * Each subclass overrides this method to implement type-specific logic.
     * @protected
     */
    protected _prepareItems(): void;
    /**
     * Insert a spell into the spellbook object when rendering the character sheet.
     * @param {object} context    Sheet rendering context data being prepared for render.
     * @param {object[]} spells   Spells to be included in the spellbook.
     * @returns {object[]}        Spellbook sections in the proper order.
     * @protected
     */
    protected _prepareSpellbook(context: object, spells: object[]): object[];
    /**
     * Determine whether an Owned Item will be shown based on the current set of filters.
     * @param {object[]} items       Copies of item data to be filtered.
     * @param {Set<string>} filters  Filters applied to the item list.
     * @returns {object[]}           Subset of input items limited by the provided filters.
     * @protected
     */
    protected _filterItems(items: object[], filters: Set<string>): object[];
    /**
     * Get the font-awesome icon used to display a certain level of skill proficiency.
     * @param {number} level  A proficiency mode defined in `CONFIG.DND5E.proficiencyLevels`.
     * @returns {string}      HTML string for the chosen icon.
     * @private
     */
    private _getProficiencyIcon;
    /** @inheritdoc */
    activateListeners(html: any): void;
    /**
     * Disable any fields that are overridden by active effects and display an informative tooltip.
     * @param {jQuery} html  The sheet's rendered HTML.
     * @protected
     */
    protected _disableOverriddenFields(html: jQuery): void;
    /**
     * Handle activation of a context menu for an embedded Item or ActiveEffect document.
     * Dynamically populate the array of context menu options.
     * @param {HTMLElement} element       The HTML element for which the context menu is activated
     * @protected
     */
    protected _onItemContext(element: HTMLElement): void;
    /**
     * Prepare an array of context menu options which are available for owned ActiveEffect documents.
     * @param {ActiveEffect5e} effect         The ActiveEffect for which the context menu is activated
     * @returns {ContextMenuEntry[]}          An array of context menu options offered for the ActiveEffect
     * @protected
     */
    protected _getActiveEffectContextOptions(effect: ActiveEffect5e): ContextMenuEntry[];
    /**
     * Prepare an array of context menu options which are available for owned Item documents.
     * @param {Item5e} item                   The Item for which the context menu is activated
     * @returns {ContextMenuEntry[]}          An array of context menu options offered for the Item
     * @protected
     */
    protected _getItemContextOptions(item: Item5e): ContextMenuEntry[];
    /**
     * Initialize Item list filters by activating the set of filters which are currently applied
     * @param {number} i  Index of the filter in the list.
     * @param {HTML} ul   HTML object for the list item surrounding the filter.
     * @private
     */
    private _initializeFilterItemList;
    /**
     * Handle input changes to numeric form fields, allowing them to accept delta-typed inputs.
     * @param {Event} event  Triggering event.
     * @protected
     */
    protected _onChangeInputDelta(event: Event): void;
    /**
     * Handle spawning the TraitSelector application which allows a checkbox of multiple trait options.
     * @param {Event} event   The click event which originated the selection.
     * @private
     */
    private _onConfigMenu;
    /**
     * Handle cycling proficiency in a skill or tool.
     * @param {Event} event     A click or contextmenu event which triggered this action.
     * @returns {Promise|void}  Updated data for this actor after changes are applied.
     * @protected
     */
    protected _onCycleProficiency(event: Event): Promise<any> | void;
    /** @override */
    override _onDropActor(event: any, data: any): Promise<any>;
    /** @override */
    override _onDropItemCreate(itemData: any): Promise<any>;
    /**
     * Handles dropping of a single item onto this character sheet.
     * @param {object} itemData            The item data to create.
     * @returns {Promise<object|boolean>}  The item data to create after processing, or false if the item should not be
     *                                     created or creation has been otherwise handled.
     * @protected
     */
    protected _onDropSingleItem(itemData: object): Promise<object | boolean>;
    /**
     * Reset certain pieces of data stored on items when they are dropped onto the actor.
     * @param {object} itemData    The item data requested for creation. **Will be mutated.**
     */
    _onDropResetData(itemData: object): void;
    /**
     * Stack identical consumables when a new one is dropped rather than creating a duplicate item.
     * @param {object} itemData         The item data requested for creation.
     * @returns {Promise<Item5e>|null}  If a duplicate was found, returns the adjusted item stack.
     */
    _onDropStackConsumables(itemData: object): Promise<Item5e> | null;
    /**
     * Handle enabling editing for a spell slot override value.
     * @param {MouseEvent} event    The originating click event.
     * @private
     */
    private _onSpellSlotOverride;
    /**
     * Change the uses amount of an Owned Item within the Actor.
     * @param {Event} event        The triggering click event.
     * @returns {Promise<Item5e>}  Updated item.
     * @private
     */
    private _onUsesChange;
    /**
     * Handle using an item from the Actor sheet, obtaining the Item instance, and dispatching to its use method.
     * @param {Event} event  The triggering click event.
     * @returns {Promise}    Results of the usage.
     * @protected
     */
    protected _onItemUse(event: Event): Promise<any>;
    /**
     * Handle attempting to recharge an item usage by rolling a recharge check.
     * @param {Event} event      The originating click event.
     * @returns {Promise<Roll>}  The resulting recharge roll.
     * @private
     */
    private _onItemRecharge;
    /**
     * Handle toggling and items expanded description.
     * @param {Event} event   Triggering event.
     * @private
     */
    private _onItemSummary;
    /**
     * Handle creating a new Owned Item for the actor using initial data defined in the HTML dataset.
     * @param {Event} event          The originating click event.
     * @returns {Promise<Item5e[]>}  The newly created item.
     * @private
     */
    private _onItemCreate;
    /**
     * Handle editing an existing Owned Item for the Actor.
     * @param {Event} event    The originating click event.
     * @returns {ItemSheet5e}  The rendered item sheet.
     * @private
     */
    private _onItemEdit;
    /**
     * Handle deleting an existing Owned Item for the Actor.
     * @param {Event} event  The originating click event.
     * @returns {Promise<Item5e|AdvancementManager>|undefined}  The deleted item if something was deleted or the
     *                                                          advancement manager if advancements need removing.
     * @private
     */
    private _onItemDelete;
    /**
     * Handle displaying the property attribution tooltip when a property is hovered over.
     * @param {Event} event   The originating mouse event.
     * @private
     */
    private _onPropertyAttribution;
    /**
     * Handle rolling an Ability test or saving throw.
     * @param {Event} event      The originating click event.
     * @private
     */
    private _onRollAbilityTest;
    /**
     * Handle rolling a Skill check.
     * @param {Event} event      The originating click event.
     * @returns {Promise<Roll>}  The resulting roll.
     * @private
     */
    private _onRollSkillCheck;
    _onRollToolCheck(event: any): any;
    /**
     * Handle toggling Ability score proficiency level.
     * @param {Event} event              The originating click event.
     * @returns {Promise<Actor5e>|void}  Updated actor instance.
     * @private
     */
    private _onToggleAbilityProficiency;
    /**
     * Handle toggling of filters to display a different set of owned items.
     * @param {Event} event     The click event which triggered the toggle.
     * @returns {ActorSheet5e}  This actor sheet with toggled filters.
     * @private
     */
    private _onToggleFilter;
    /**
     * Handle spawning the TraitSelector application which allows a checkbox of multiple trait options.
     * @param {Event} event      The click event which originated the selection.
     * @returns {TraitSelector}  Newly displayed application.
     * @private
     */
    private _onTraitSelector;
    /**
     * Handle links within preparation warnings.
     * @param {Event} event  The click event on the warning.
     * @protected
     */
    protected _onWarningLink(event: Event): Promise<void>;
    /** @override */
    override _getHeaderButtons(): any;
}
import ActiveEffect5e from "../../documents/active-effect";
import Item5e from "../../documents/item";
