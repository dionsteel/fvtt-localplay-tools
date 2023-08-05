/**
 * Abstract base class which various advancement types can subclass.
 * @param {Item5e} item          Item to which this advancement belongs.
 * @param {object} [data={}]     Raw data stored in the advancement object.
 * @param {object} [options={}]  Options which affect DataModel construction.
 * @abstract
 */
declare class Advancement extends BaseAdvancement {
    static ERROR: typeof AdvancementError;
    /**
     * Information on how an advancement type is configured.
     *
     * @typedef {object} AdvancementMetadata
     * @property {object} dataModels
     * @property {DataModel} configuration  Data model used for validating configuration data.
     * @property {DataModel} value          Data model used for validating value data.
     * @property {number} order          Number used to determine default sorting order of advancement items.
     * @property {string} icon           Icon used for this advancement type if no user icon is specified.
     * @property {string} title          Title to be displayed if no user title is specified.
     * @property {string} hint           Description of this type shown in the advancement selection dialog.
     * @property {boolean} multiLevel    Can this advancement affect more than one level? If this is set to true,
     *                                   the level selection control in the configuration window is hidden and the
     *                                   advancement should provide its own implementation of `Advancement#levels`
     *                                   and potentially its own level configuration interface.
     * @property {Set<string>} validItemTypes  Set of types to which this advancement can be added.
     * @property {object} apps
     * @property {*} apps.config         Subclass of AdvancementConfig that allows for editing of this advancement type.
     * @property {*} apps.flow           Subclass of AdvancementFlow that is displayed while fulfilling this advancement.
     */
    /**
     * Configuration information for this advancement type.
     * @type {AdvancementMetadata}
     */
    static get metadata(): {
        dataModels: object;
        /**
         * Data model used for validating configuration data.
         */
        configuration: DataModel;
        /**
         * Data model used for validating value data.
         */
        value: DataModel;
        /**
         * Number used to determine default sorting order of advancement items.
         */
        order: number;
        /**
         * Icon used for this advancement type if no user icon is specified.
         */
        icon: string;
        /**
         * Title to be displayed if no user title is specified.
         */
        title: string;
        /**
         * Description of this type shown in the advancement selection dialog.
         */
        hint: string;
        /**
         * Can this advancement affect more than one level? If this is set to true,
         * the level selection control in the configuration window is hidden and the
         * advancement should provide its own implementation of `Advancement#levels`
         * and potentially its own level configuration interface.
         */
        multiLevel: boolean;
        /**
         * Set of types to which this advancement can be added.
         */
        validItemTypes: Set<string>;
        apps: {
            config: any;
            flow: any;
        };
    };
    /**
     * Can an advancement of this type be added to the provided item?
     * @param {Item5e} item  Item to check against.
     * @returns {boolean}    Should this be enabled as an option on the `AdvancementSelection` dialog?
     */
    static availableForItem(item: Item5e): boolean;
    constructor(data: any, { parent, ...options }?: {
        parent?: any;
    });
    /** @inheritdoc */
    _initialize(options: any): void;
    /**
     * Unique identifier for this advancement within its item.
     * @type {string}
     */
    get id(): string;
    /**
     * Globally unique identifier for this advancement.
     * @type {string}
     */
    get uuid(): string;
    /**
     * Item to which this advancement belongs.
     * @type {Item5e}
     */
    get item(): Item5e;
    /**
     * Actor to which this advancement's item belongs, if the item is embedded.
     * @type {Actor5e|null}
     */
    get actor(): any;
    /**
     * List of levels in which this advancement object should be displayed. Will be a list of class levels if this
     * advancement is being applied to classes or subclasses, otherwise a list of character levels.
     * @returns {number[]}
     */
    get levels(): number[];
    /**
     * Should this advancement be applied to a class based on its class restriction setting? This will always return
     * true for advancements that are not within an embedded class item.
     * @type {boolean}
     * @protected
     */
    protected get appliesToClass(): boolean;
    /**
     * Prepare data for the Advancement.
     */
    prepareData(): void;
    title: any;
    icon: any;
    /**
     * Has the player made choices for this advancement at the specified level?
     * @param {number} level  Level for which to check configuration.
     * @returns {boolean}     Have any available choices been made?
     */
    configuredForLevel(level: number): boolean;
    /**
     * Value used for sorting this advancement at a certain level.
     * @param {number} level  Level for which this entry is being sorted.
     * @returns {string}      String that can be used for sorting.
     */
    sortingValueForLevel(level: number): string;
    /**
     * Title displayed in advancement list for a specific level.
     * @param {number} level                       Level for which to generate a title.
     * @param {object} [options={}]
     * @param {object} [options.configMode=false]  Is the advancement's item sheet in configuration mode? When in
     *                                             config mode, the choices already made on this actor should not
     *                                             be displayed.
     * @returns {string}                           HTML title with any level-specific information.
     */
    titleForLevel(level: number, { configMode }?: {
        configMode?: object;
    }): string;
    /**
     * Summary content displayed beneath the title in the advancement list.
     * @param {number} level                       Level for which to generate the summary.
     * @param {object} [options={}]
     * @param {object} [options.configMode=false]  Is the advancement's item sheet in configuration mode? When in
     *                                             config mode, the choices already made on this actor should not
     *                                             be displayed.
     * @returns {string}                           HTML content of the summary.
     */
    summaryForLevel(level: number, { configMode }?: {
        configMode?: object;
    }): string;
    /**
     * Render all of the Application instances which are connected to this advancement.
     * @param {boolean} [force=false]     Force rendering
     * @param {object} [context={}]       Optional context
     */
    render(force?: boolean, context?: object): void;
    /**
     * Update this advancement.
     * @param {object} updates          Updates to apply to this advancement.
     * @returns {Promise<Advancement>}  This advancement after updates have been applied.
     */
    update(updates: object): Promise<Advancement>;
    /**
     * Update this advancement's data on the item without performing a database commit.
     * @param {object} updates  Updates to apply to this advancement.
     * @returns {Advancement}   This advancement after updates have been applied.
     */
    updateSource(updates: object): Advancement;
    /**
     * Serialize salient information for this Advancement when dragging it.
     * @returns {object}  An object of drag data.
     */
    toDragData(): object;
    /**
     * Locally apply this advancement to the actor.
     * @param {number} level   Level being advanced.
     * @param {object} data    Data from the advancement form.
     * @abstract
     */
    apply(level: number, data: object): Promise<void>;
    /**
     * Locally apply this advancement from stored data, if possible. If stored data can not be restored for any reason,
     * throw an AdvancementError to display the advancement flow UI.
     * @param {number} level  Level being advanced.
     * @param {object} data   Data from `Advancement#reverse` needed to restore this advancement.
     * @abstract
     */
    restore(level: number, data: object): Promise<void>;
    /**
     * Locally remove this advancement's changes from the actor.
     * @param {number} level  Level being removed.
     * @returns {object}      Data that can be passed to the `Advancement#restore` method to restore this reversal.
     * @abstract
     */
    reverse(level: number): object;
}
import BaseAdvancement from "../../data/advancement/base-advancement";
/**
 * Error that can be thrown during the advancement update preparation process.
 */
declare class AdvancementError extends Error {
    constructor(...args: any[]);
}
export {};
