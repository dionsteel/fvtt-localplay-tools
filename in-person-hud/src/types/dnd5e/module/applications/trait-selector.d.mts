/**
 * A specialized form used to select from a checklist of attributes, traits, or properties.
 * @deprecated since dnd5e 2.1, targeted for removal in 2.3
 */
export default class TraitSelector {
    /** @inheritDoc */
    static get defaultOptions(): any;
    constructor(...args: any[]);
    /** @inheritdoc */
    get title(): any;
    /**
     * Return a reference to the target attribute
     * @type {string}
     */
    get attribute(): string;
    /** @override */
    override getData(): {
        choices: any;
        custom: any;
        customPath: string;
    };
    /**
     * Prepare the update data to include choices in the provided object.
     * @param {object} formData  Form data to search for choices.
     * @returns {object}         Updates to apply to target.
     */
    _prepareUpdateData(formData: object): object;
    /** @override */
    override _updateObject(event: any, formData: any): Promise<void>;
}
