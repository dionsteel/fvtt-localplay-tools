/**
 * A specialized form used to select from a checklist of attributes, traits, or properties
 */
declare class ActorTypeConfig {
    /** @inheritDoc */
    static get defaultOptions(): any;
    /** @inheritDoc */
    get title(): string;
    /** @override */
    override get id(): string;
    /** @override */
    override getData(options?: {}): {
        types: {};
        custom: {
            value: any;
            label: any;
            chosen: boolean;
        };
        subtype: any;
        swarm: any;
        sizes: any;
        preview: string;
    };
    /** @override */
    override _updateObject(event: any, formData: any): Promise<any>;
    /** @inheritdoc */
    activateListeners(html: any): void;
    /** @inheritdoc */
    _onChangeInput(event: any): void;
    /**
     * Select the custom radio button when the custom text field is focused.
     * @param {FocusEvent} event      The original focusin event
     * @private
     */
    private _onCustomFieldFocused;
}
