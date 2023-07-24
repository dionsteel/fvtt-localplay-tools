/**
 * Advancement that presents the player with a choice of multiple items that they can take. Keeps track of which
 * items were selected at which levels.
 */
export default class ItemChoiceAdvancement extends ItemGrantAdvancement {
    /** @inheritdoc */
    get levels(): any;
    /** @inheritdoc */
    titleForLevel(level: any, { configMode }?: {
        configMode?: boolean;
    }): string;
    /** @inheritdoc */
    storagePath(level: any): string;
    /**
     * Verify that the provided item can be used with this advancement based on the configuration.
     * @param {Item5e} item                   Item that needs to be tested.
     * @param {object} config
     * @param {string} config.type            Type restriction on this advancement.
     * @param {object} config.restriction     Additional restrictions to be applied.
     * @param {boolean} [config.strict=true]  Should an error be thrown when an invalid type is encountered?
     * @returns {boolean}                     Is this type valid?
     * @throws An error if the item is invalid and strict is `true`.
     */
    _validateItemType(item: Item5e, { type, restriction, strict }?: {
        type: string;
        restriction: object;
        strict?: boolean;
    }): boolean;
}
import ItemGrantAdvancement from "./item-grant.mjs";
