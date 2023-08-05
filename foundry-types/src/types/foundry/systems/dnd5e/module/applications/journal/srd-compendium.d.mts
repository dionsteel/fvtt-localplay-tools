declare class SRDCompendium {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /**
     * The IDs of some special pages that we use when configuring the display of the compendium.
     * @type {Object<string>}
     * @protected
     */
    protected static _SPECIAL_PAGES: any;
    /** @inheritdoc */
    getData(options: any): Promise<any>;
    /** @inheritdoc */
    activateListeners(html: any): void;
    /**
     * Handle clicking a link to a journal entry or page.
     * @param {MouseEvent} event  The triggering click event.
     * @protected
     */
    protected _onClickLink(event: MouseEvent): Promise<void>;
}
