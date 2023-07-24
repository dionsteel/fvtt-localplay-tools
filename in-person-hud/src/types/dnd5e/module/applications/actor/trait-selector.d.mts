/**
 * A specialized application used to modify actor traits.
 *
 * @param {Actor5e} actor                       Actor for whose traits are being edited.
 * @param {string} trait                        Trait key as defined in CONFIG.traits.
 * @param {object} [options={}]
 * @param {boolean} [options.allowCustom=true]  Support user custom trait entries.
 */
export default class TraitSelector extends BaseConfigSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    constructor(actor: any, trait: any, options?: {});
    /**
     * Trait key as defined in CONFIG.traits.
     * @type {string}
     */
    trait: string;
    /** @inheritdoc */
    get id(): string;
    /** @inheritdoc */
    get title(): string;
    /** @inheritdoc */
    getData(): Promise<any>;
    /** @inheritdoc */
    _onChangeInput(event: any): Promise<void>;
    /**
     * Enable/disable all children when a category is checked.
     * @param {HTMLElement} checkbox  Checkbox that was changed.
     * @protected
     */
    protected _onToggleCategory(checkbox: HTMLElement): void;
    /**
     * Filter a list of choices that begin with the provided key for update.
     * @param {string} prefix    They initial form prefix under which the choices are grouped.
     * @param {string} path      Path in actor data where the final choices will be saved.
     * @param {object} formData  Form data being prepared. *Will be mutated.*
     * @protected
     */
    protected _prepareChoices(prefix: string, path: string, formData: object): void;
    /** @override */
    override _updateObject(event: any, formData: any): Promise<any>;
}
import BaseConfigSheet from "./base-config.mjs";
