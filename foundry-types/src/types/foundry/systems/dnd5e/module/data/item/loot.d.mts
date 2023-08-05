/**
 * Data definition for Loot items.
 * @mixes ItemDescriptionTemplate
 * @mixes PhysicalItemTemplate
 */
declare class LootData extends SystemDataModel {
    /**
     * Properties displayed in chat.
     * @type {string[]}
     */
    get chatProperties(): string[];
}
import SystemDataModel from "../abstract";
