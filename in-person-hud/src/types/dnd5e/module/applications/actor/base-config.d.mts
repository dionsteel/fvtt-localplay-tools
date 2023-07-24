/**
 * An abstract class containing common functionality between actor sheet configuration apps.
 * @extends {DocumentSheet}
 * @abstract
 */
export default class BaseConfigSheet {
    /** @inheritdoc */
    activateListeners(html: any): void;
    /**
     * Retrieve the list of fields that are currently modified by Active Effects on the Actor.
     * @returns {string[]}
     * @protected
     */
    protected _getActorOverrides(): string[];
}
