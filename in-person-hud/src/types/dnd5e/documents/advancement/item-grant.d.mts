/**
 * Advancement that automatically grants one or more items to the player. Presents the player with the option of
 * skipping any or all of the items.
 */
export default class ItemGrantAdvancement extends Advancement {
    /** @inheritdoc */
    static get metadata(): any;
    /**
     * The item types that are supported in Item Grant.
     * @type {Set<string>}
     */
    static VALID_TYPES: Set<string>;
    /** @inheritdoc */
    configuredForLevel(level: any): boolean;
    /** @inheritdoc */
    summaryForLevel(level: any, { configMode }?: {
        configMode?: boolean;
    }): any;
    /**
     * Location where the added items are stored for the specified level.
     * @param {number} level  Level being advanced.
     * @returns {string}
     */
    storagePath(level: number): string;
    /**
     * Locally apply this advancement to the actor.
     * @param {number} level              Level being advanced.
     * @param {object} data               Data from the advancement form.
     * @param {object} [retainedData={}]  Item data grouped by UUID. If present, this data will be used rather than
     *                                    fetching new data from the source.
     */
    apply(level: number, data: object, retainedData?: object): Promise<void>;
    /** @inheritdoc */
    restore(level: any, data: any): void;
    /** @inheritdoc */
    reverse(level: any): {
        items: any[];
    };
    /**
     * Verify that the provided item can be used with this advancement based on the configuration.
     * @param {Item5e} item                   Item that needs to be tested.
     * @param {object} config
     * @param {boolean} [config.strict=true]  Should an error be thrown when an invalid type is encountered?
     * @returns {boolean}                     Is this type valid?
     * @throws An error if the item is invalid and strict is `true`.
     */
    _validateItemType(item: Item5e, { strict }?: {
        strict?: boolean;
    }): boolean;
}
import Advancement from "./advancement.mjs";
