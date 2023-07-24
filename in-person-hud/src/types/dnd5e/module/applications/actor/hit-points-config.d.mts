/**
 * A form for configuring actor hit points and bonuses.
 */
export default class ActorHitPointsConfig extends BaseConfigSheet {
    /** @override */
    static override get defaultOptions(): any;
    constructor(...args: any[]);
    /**
     * Cloned copy of the actor for previewing changes.
     * @type {Actor5e}
     */
    clone: Actor5e;
    /** @inheritdoc */
    get title(): string;
    /** @inheritdoc */
    getData(options: any): {
        hp: any;
        source: any;
        isCharacter: boolean;
    };
    /** @inheritdoc */
    _updateObject(event: any, formData: any): Promise<any>;
    /** @inheritdoc */
    _onChangeInput(event: any): Promise<void>;
    /**
     * Handle rolling NPC health values using the provided formula.
     * @param {Event} event  The original click event.
     * @protected
     */
    protected _onRollHPFormula(event: Event): Promise<void>;
}
import BaseConfigSheet from "./base-config.mjs";
