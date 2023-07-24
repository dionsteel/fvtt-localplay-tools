/**
 * Presents a list of advancement types to create when clicking the new advancement button.
 * Once a type is selected, this hands the process over to the advancement's individual editing interface.
 *
 * @param {Item5e} item             Item to which this advancement will be added.
 * @param {object} [dialogData={}]  An object of dialog data which configures how the modal window is rendered.
 * @param {object} [options={}]     Dialog rendering options.
 */
export default class AdvancementSelection {
    /** @inheritDoc */
    static get defaultOptions(): any;
    /**
     * A helper constructor function which displays the selection dialog and returns a Promise once its workflow has
     * been resolved.
     * @param {Item5e} item                         Item to which the advancement should be added.
     * @param {object} [config={}]
     * @param {boolean} [config.rejectClose=false]  Trigger a rejection if the window was closed without a choice.
     * @param {object} [config.options={}]          Additional rendering options passed to the Dialog.
     * @returns {Promise<AdvancementConfig|null>}   Result of `Item5e#createAdvancement`.
     */
    static createDialog(item: Item5e, { rejectClose, options }?: {
        rejectClose?: boolean;
        options?: object;
    }): Promise<AdvancementConfig | null>;
    constructor(item: any, dialogData?: {}, options?: {});
    /**
     * Store a reference to the Item to which this Advancement is being added.
     * @type {Item5e}
     */
    item: Item5e;
    /** @inheritDoc */
    get id(): string;
    /** @inheritDoc */
    getData(): {
        types: {};
    };
    /** @inheritDoc */
    activateListeners(html: any): void;
    /** @inheritDoc */
    _onChangeInput(event: any): void;
}
