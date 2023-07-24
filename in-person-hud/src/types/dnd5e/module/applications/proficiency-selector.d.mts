/**
 * An application for selecting proficiencies with categories that can contain children.
 * @deprecated since dnd5e 2.1, targeted for removal in 2.3
 */
export default class ProficiencySelector extends TraitSelector {
    /**
     * A static helper method to get a list of choices for a proficiency type.
     *
     * @param {string} type               Proficiency type to select, either `armor`, `tool`, or `weapon`.
     * @param {string[]} [chosen]         Optional list of items to be marked as chosen.
     * @returns {Object<string, SelectChoices>}  Object mapping proficiency ids to choice objects.
     * @deprecated since dnd5e 2.1, targeted for removal in 2.3
     */
    static getChoices(type: string, chosen?: string[]): {
        [x: string]: SelectChoices;
    };
    /**
     * Fetch an item for the provided ID. If the provided ID contains a compendium pack name
     * it will be fetched from that pack, otherwise it will be fetched from the compendium defined
     * in `DND5E.sourcePacks.ITEMS`.
     *
     * @param {string} identifier            Simple ID or compendium name and ID separated by a dot.
     * @param {object} [options]
     * @param {boolean} [options.indexOnly]  If set to true, only the index data will be fetched (will never return
     *                                       Promise).
     * @param {boolean} [options.fullItem]   If set to true, the full item will be returned as long as `indexOnly` is
     *                                       false.
     * @returns {Promise<Item5e>|object}     Promise for a `Document` if `indexOnly` is false & `fullItem` is true,
     *                                       otherwise else a simple object containing the minimal index data.
     * @deprecated since dnd5e 2.1, targeted for removal in 2.3
     */
    static getBaseItem(identifier: string, options?: {
        indexOnly?: boolean;
        fullItem?: boolean;
    }): Promise<Item5e> | object;
    /** @inheritdoc */
    getData(): Promise<{
        choices: any;
        custom: any;
        customPath: string;
    }>;
    /** @inheritdoc */
    activateListeners(html: any): void;
    /** @inheritdoc */
    _onChangeInput(event: any): Promise<void>;
    /**
     * Enable/disable all children when a category is checked.
     *
     * @param {HTMLElement} checkbox  Checkbox that was changed.
     * @private
     */
    private _onToggleCategory;
}
import TraitSelector from "./trait-selector.mjs";
