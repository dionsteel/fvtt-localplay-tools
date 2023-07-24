/**
 * A specialized Dialog subclass for ability usage.
 *
 * @param {Item5e} item             Item that is being used.
 * @param {object} [dialogData={}]  An object of dialog data which configures how the modal window is rendered.
 * @param {object} [options={}]     Dialog rendering options.
 */
export default class AbilityUseDialog {
    /**
     * A constructor function which displays the Spell Cast Dialog app for a given Actor and Item.
     * Returns a Promise which resolves to the dialog FormData once the workflow has been completed.
     * @param {Item5e} item  Item being used.
     * @returns {Promise}    Promise that is resolved when the use dialog is acted upon.
     */
    static create(item: Item5e): Promise<any>;
    /**
     * Get dialog data related to limited spell slots.
     * @param {object} actorData  System data from the actor using the spell.
     * @param {object} itemData   System data from the spell being used.
     * @param {object} data       Data for the dialog being presented.
     * @returns {object}          Modified dialog data.
     * @private
     */
    private static _getSpellData;
    /**
     * Get the ability usage note that is displayed.
     * @param {object} item                                     Data for the item being used.
     * @param {{value: number, max: number, per: string}} uses  Object uses and recovery configuration.
     * @param {{charged: boolean, value: string}} recharge      Object recharge configuration.
     * @returns {string}                                        Localized string indicating available uses.
     * @private
     */
    private static _getAbilityUseNote;
    constructor(item: any, dialogData?: {}, options?: {});
    /**
     * Store a reference to the Item document being used
     * @type {Item5e}
     */
    item: Item5e;
}
