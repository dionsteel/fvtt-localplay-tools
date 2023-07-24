/**
 * A simple form to set actor hit dice amounts.
 */
export default class ActorHitDiceConfig extends BaseConfigSheet {
    /** @inheritDoc */
    static get defaultOptions(): any;
    /** @inheritDoc */
    get title(): string;
    /** @inheritDoc */
    getData(options: any): {
        classes: any;
    };
    /** @inheritDoc */
    _updateObject(event: any, formData: any): Promise<any>;
    /**
     * Rolls the hit die corresponding with the class row containing the event's target button.
     * @param {MouseEvent} event  Triggering click event.
     * @protected
     */
    protected _onRollHitDie(event: MouseEvent): Promise<void>;
}
import BaseConfigSheet from "./base-config.mjs";
