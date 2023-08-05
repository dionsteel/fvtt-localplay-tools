/**
 * An Actor sheet for NPC type characters.
 */
declare class ActorSheet5eNPC extends ActorSheet5e {
    /** @inheritDoc */
    getData(options: any): Promise<any>;
    /** @override */
    override _prepareItems(context: any): void;
    /**
     * Format NPC armor information into a localized string.
     * @returns {string}  Formatted armor label.
     */
    getArmorLabel(): string;
    /** @inheritDoc */
    _updateObject(event: any, formData: any): Promise<any>;
}
import ActorSheet5e from "./base-sheet";
