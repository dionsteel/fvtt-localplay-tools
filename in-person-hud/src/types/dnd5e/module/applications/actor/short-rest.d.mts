/**
 * A helper Dialog subclass for rolling Hit Dice on short rest.
 *
 * @param {Actor5e} actor           Actor that is taking the short rest.
 * @param {object} [dialogData={}]  An object of dialog data which configures how the modal window is rendered.
 * @param {object} [options={}]     Dialog rendering options.
 */
export default class ShortRestDialog {
    /** @inheritDoc */
    static get defaultOptions(): any;
    /**
     * A helper constructor function which displays the Short Rest dialog and returns a Promise once it's workflow has
     * been resolved.
     * @param {object} [options={}]
     * @param {Actor5e} [options.actor]  Actor that is taking the short rest.
     * @returns {Promise}                Promise that resolves when the rest is completed or rejects when canceled.
     */
    static shortRestDialog({ actor }?: {
        actor?: Actor5e;
    }): Promise<any>;
    constructor(actor: any, dialogData?: {}, options?: {});
    /**
     * Store a reference to the Actor document which is resting
     * @type {Actor}
     */
    actor: Actor;
    /**
     * Track the most recently used HD denomination for re-rendering the form
     * @type {string}
     */
    _denom: string;
    /** @inheritDoc */
    getData(): any;
    /** @inheritDoc */
    activateListeners(html: any): void;
    /**
     * Handle rolling a Hit Die as part of a Short Rest action
     * @param {Event} event     The triggering click event
     * @protected
     */
    protected _onRollHitDie(event: Event): Promise<void>;
}
