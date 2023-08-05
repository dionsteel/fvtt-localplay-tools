/**
 * Dialog to confirm the deletion of an embedded item with advancement or decreasing a class level.
 */
declare class AdvancementConfirmationDialog {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /**
     * A helper function that displays the dialog prompting for an item deletion.
     * @param {Item5e} item  Item to be deleted.
     * @returns {Promise<boolean|null>}  Resolves with whether advancements should be unapplied. Rejects with null.
     */
    static forDelete(item: Item5e): Promise<boolean | null>;
    /**
     * A helper function that displays the dialog prompting for leveling down.
     * @param {Item5e} item  The class whose level is being changed.
     * @returns {Promise<boolean|null>}  Resolves with whether advancements should be unapplied. Rejects with null.
     */
    static forLevelDown(item: Item5e): Promise<boolean | null>;
    /**
     * A helper constructor function which displays the confirmation dialog.
     * @param {Item5e} item              Item to be changed.
     * @param {string} title             Localized dialog title.
     * @param {string} message           Localized dialog message.
     * @param {object} continueButton    Object containing label and icon for the action button.
     * @returns {Promise<boolean|null>}  Resolves with whether advancements should be unapplied. Rejects with null.
     */
    static createDialog(item: Item5e, title: string, message: string, continueButton: object): Promise<boolean | null>;
}
