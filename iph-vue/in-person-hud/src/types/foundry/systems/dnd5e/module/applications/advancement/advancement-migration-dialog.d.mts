/**
 * Dialog to select which new advancements should be added to an item.
 */
declare class AdvancementMigrationDialog {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /**
     * A helper constructor function which displays the migration dialog.
     * @param {Item5e} item                    Item to which the advancements are being added.
     * @param {Advancement[]} advancements     New advancements that should be displayed in the prompt.
     * @returns {Promise<Advancement[]|null>}  Resolves with the advancements that should be added, if any.
     */
    static createDialog(item: Item5e, advancements: Advancement[]): Promise<Advancement[] | null>;
}
