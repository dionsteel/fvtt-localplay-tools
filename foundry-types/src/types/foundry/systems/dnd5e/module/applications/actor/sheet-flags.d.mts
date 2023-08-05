/**
 * An application class which provides advanced configuration for special character flags which modify an Actor.
 */
declare class ActorSheetFlags extends BaseConfigSheet {
    /** @inheritDoc */
    static get defaultOptions(): any;
    /** @inheritDoc */
    get title(): string;
    /** @inheritDoc */
    getData(): {
        actor: any;
        classes: any;
        flags: any;
        bonuses: any[];
    };
    /**
     * Prepare an object of sorted classes.
     * @returns {object}
     * @private
     */
    private _getClasses;
    /**
     * Prepare an object of flags data which groups flags by section
     * Add some additional data for rendering
     * @returns {object}
     * @private
     */
    private _getFlags;
    /**
     * Get the bonuses fields and their localization strings
     * @returns {Array<object>}
     * @private
     */
    private _getBonuses;
    /** @inheritDoc */
    _updateObject(event: any, formData: any): Promise<void>;
}
import BaseConfigSheet from "./base-config";
