/**
 * Inline application that presents the player with a choice of items.
 */
declare class ItemChoiceFlow extends ItemGrantFlow {
    /**
     * Set of selected UUIDs.
     * @type {Set<string>}
     */
    selected: Set<string>;
    /**
     * Cached items from the advancement's pool.
     * @type {Item5e[]}
     */
    pool: Item5e[];
    /**
     * List of dropped items.
     * @type {Item5e[]}
     */
    dropped: Item5e[];
    /** @inheritdoc */
    getContext(): Promise<{
        choices: {
            max: any;
            current: any;
            full: boolean;
        };
        items: any;
        previousLevels: {};
    }>;
    /** @inheritdoc */
    _onChangeInput(event: any): void;
    /**
     * Handle deleting a dropped item.
     * @param {Event} event  The originating click event.
     * @protected
     */
    protected _onItemDelete(event: Event): Promise<void>;
    /** @inheritdoc */
    _onDrop(event: any): Promise<any>;
    /**
     * Determine the maximum spell slot level for the actor to which this advancement is being applied.
     * @returns {number}
     */
    _maxSpellSlotLevel(): number;
}
import ItemGrantFlow from "./item-grant-flow";
