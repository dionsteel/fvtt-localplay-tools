/**
 * Interface for managing a character's armor calculation.
 */
declare class ActorArmorConfig extends BaseConfigSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    constructor(...args: any[]);
    /**
     * Cloned copy of the actor for previewing changes.
     * @type {Actor5e}
     */
    clone: Actor5e;
    /** @inheritdoc */
    get title(): string;
    /** @inheritdoc */
    getData(): Promise<{
        ac: any;
        isFlat: any;
        calculations: any;
        valueDisabled: boolean;
        formula: any;
        formulaDisabled: boolean;
    }>;
    /** @inheritdoc */
    _updateObject(event: any, formData: any): Promise<any>;
    /** @inheritdoc */
    _onChangeInput(event: any): Promise<void>;
}
import BaseConfigSheet from "./base-config";
