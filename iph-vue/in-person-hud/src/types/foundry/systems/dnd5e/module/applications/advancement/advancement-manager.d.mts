/**
 * Internal type used to manage each step within the advancement process.
 *
 * @typedef {object} AdvancementStep
 * @property {string} type                Step type from "forward", "reverse", "restore", or "delete".
 * @property {AdvancementFlow} [flow]     Flow object for the advancement being applied by this step.
 * @property {Item5e} [item]              For "delete" steps only, the item to be removed.
 * @property {object} [class]             Contains data on class if step was triggered by class level change.
 * @property {Item5e} [class.item]        Class item that caused this advancement step.
 * @property {number} [class.level]       Level the class should be during this step.
 * @property {boolean} [automatic=false]  Should the manager attempt to apply this step without user interaction?
 */
/**
 * Application for controlling the advancement workflow and displaying the interface.
 *
 * @param {Actor5e} actor        Actor on which this advancement is being performed.
 * @param {object} [options={}]  Additional application options.
 */
declare class AdvancementManager {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /**
     * Construct a manager for a newly added advancement from drag-drop.
     * @param {Actor5e} actor               Actor from which the advancement should be updated.
     * @param {string} itemId               ID of the item to which the advancements are being dropped.
     * @param {Advancement[]} advancements  Dropped advancements to add.
     * @param {object} options              Rendering options passed to the application.
     * @returns {AdvancementManager}  Prepared manager. Steps count can be used to determine if advancements are needed.
     */
    static forNewAdvancement(actor: Actor5e, itemId: string, advancements: Advancement[], options: object): AdvancementManager;
    /**
     * Construct a manager for a newly added item.
     * @param {Actor5e} actor         Actor to which the item is being added.
     * @param {object} itemData       Data for the item being added.
     * @param {object} options        Rendering options passed to the application.
     * @returns {AdvancementManager}  Prepared manager. Steps count can be used to determine if advancements are needed.
     */
    static forNewItem(actor: Actor5e, itemData: object, options?: object): AdvancementManager;
    /**
     * Construct a manager for modifying choices on an item at a specific level.
     * @param {Actor5e} actor         Actor from which the choices should be modified.
     * @param {object} itemId         ID of the item whose choices are to be changed.
     * @param {number} level          Level at which the choices are being changed.
     * @param {object} options        Rendering options passed to the application.
     * @returns {AdvancementManager}  Prepared manager. Steps count can be used to determine if advancements are needed.
     */
    static forModifyChoices(actor: Actor5e, itemId: object, level: number, options: object): AdvancementManager;
    /**
     * Construct a manager for an advancement that needs to be deleted.
     * @param {Actor5e} actor         Actor from which the advancement should be unapplied.
     * @param {string} itemId         ID of the item from which the advancement should be deleted.
     * @param {string} advancementId  ID of the advancement to delete.
     * @param {object} options        Rendering options passed to the application.
     * @returns {AdvancementManager}  Prepared manager. Steps count can be used to determine if advancements are needed.
     */
    static forDeletedAdvancement(actor: Actor5e, itemId: string, advancementId: string, options: object): AdvancementManager;
    /**
     * Construct a manager for an item that needs to be deleted.
     * @param {Actor5e} actor         Actor from which the item should be deleted.
     * @param {string} itemId         ID of the item to be deleted.
     * @param {object} options        Rendering options passed to the application.
     * @returns {AdvancementManager}  Prepared manager. Steps count can be used to determine if advancements are needed.
     */
    static forDeletedItem(actor: Actor5e, itemId: string, options: object): AdvancementManager;
    /**
     * Construct a manager for a change in a class's levels.
     * @param {Actor5e} actor         Actor whose level has changed.
     * @param {string} classId        ID of the class being changed.
     * @param {number} levelDelta     Levels by which to increase or decrease the class.
     * @param {object} options        Rendering options passed to the application.
     * @returns {AdvancementManager}  Prepared manager. Steps count can be used to determine if advancements are needed.
     */
    static forLevelChange(actor: Actor5e, classId: string, levelDelta: number, options?: object): AdvancementManager;
    /**
     * Creates advancement flows for all advancements at a specific level.
     * @param {Item5e} item          Item that has advancement.
     * @param {number} level         Level in question.
     * @returns {AdvancementFlow[]}  Created flow applications.
     * @protected
     */
    protected static flowsForLevel(item: Item5e, level: number): AdvancementFlow[];
    /**
     * Determine the proper working level either from the provided item or from the cloned actor.
     * @param {Item5e} item    Item being advanced. If class or subclass, its level will be used.
     * @param {Actor5e} actor  Actor being advanced.
     * @returns {number}       Working level.
     */
    static currentLevel(item: Item5e, actor: Actor5e): number;
    constructor(actor: any, options?: {});
    /**
     * The original actor to which changes will be applied when the process is complete.
     * @type {Actor5e}
     */
    actor: Actor5e;
    /**
     * A clone of the original actor to which the changes can be applied during the advancement process.
     * @type {Actor5e}
     */
    clone: Actor5e;
    /**
     * Individual steps that will be applied in order.
     * @type {object}
     */
    steps: object;
    /**
     * Step being currently displayed.
     * @type {number|null}
     * @private
     */
    private _stepIndex;
    /**
     * Is the prompt currently advancing through un-rendered steps?
     * @type {boolean}
     * @private
     */
    private _advancing;
    /** @inheritdoc */
    get title(): string;
    /** @inheritdoc */
    get id(): string;
    /**
     * Get the step that is currently in progress.
     * @type {object|null}
     */
    get step(): any;
    /**
     * Get the step before the current one.
     * @type {object|null}
     */
    get previousStep(): any;
    /**
     * Get the step after the current one.
     * @type {object|null}
     */
    get nextStep(): any;
    /**
     * Create steps based on the provided level change data.
     * @param {string} classItem      Class being changed.
     * @param {number} levelDelta     Levels by which to increase or decrease the class.
     * @returns {AdvancementManager}  Manager with new steps.
     * @private
     */
    private createLevelChangeSteps;
    /** @inheritdoc */
    getData(): {
        actor?: undefined;
        flowId?: undefined;
        header?: undefined;
        subheader?: undefined;
        steps?: undefined;
    } | {
        actor: Actor5e;
        flowId: any;
        header: any;
        subheader: any;
        steps: {
            current: any;
            total: any;
            hasPrevious: boolean;
            hasNext: boolean;
        };
    };
    /** @inheritdoc */
    render(...args: any[]): any;
    /** @inheritdoc */
    _render(force: any, options: any): Promise<void>;
    /** @inheritdoc */
    activateListeners(html: any): void;
    /** @inheritdoc */
    close(options?: {}): Promise<any>;
    /**
     * Advance through the steps until one requiring user interaction is encountered.
     * @param {Event} [event]  Triggering click event if one occurred.
     * @returns {Promise}
     * @private
     */
    private _forward;
    /**
     * Reverse through the steps until one requiring user interaction is encountered.
     * @param {Event} [event]                  Triggering click event if one occurred.
     * @param {object} [options]               Additional options to configure behavior.
     * @param {boolean} [options.render=true]  Whether to render the Application after the step has been reversed. Used
     *                                         by the restart workflow.
     * @returns {Promise}
     * @private
     */
    private _backward;
    /**
     * Reset back to the manager's initial state.
     * @param {MouseEvent} [event]  The triggering click event if one occurred.
     * @returns {Promise}
     * @private
     */
    private _restart;
    /**
     * Apply changes to actual actor after all choices have been made.
     * @param {Event} event  Button click that triggered the change.
     * @returns {Promise}
     * @private
     */
    private _complete;
}
/**
 * Internal type used to manage each step within the advancement process.
 */
export type AdvancementStep = {
    /**
     * Step type from "forward", "reverse", "restore", or "delete".
     */
    type: string;
    /**
     * Flow object for the advancement being applied by this step.
     */
    flow?: AdvancementFlow;
    /**
     * For "delete" steps only, the item to be removed.
     */
    item?: Item5e;
    /**
     * Contains data on class if step was triggered by class level change.
     */
    class?: {
        item?: Item5e;
        level?: number;
    };
    /**
     * Should the manager attempt to apply this step without user interaction?
     */
    automatic?: boolean;
};
import Advancement from "../../documents/advancement/advancement";
