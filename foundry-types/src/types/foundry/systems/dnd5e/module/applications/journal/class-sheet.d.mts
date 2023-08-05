/**
 * Journal entry page that displays an automatically generated summary of a class along with additional description.
 */
declare class JournalClassPageSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /** @inheritdoc */
    get template(): string;
    /** @inheritdoc */
    toc: {};
    /** @inheritdoc */
    getData(options: any): Promise<any>;
    /**
     * Prepare features granted by various advancement types.
     * @param {Item5e} item  Class item belonging to this journal.
     * @returns {object}     Prepared advancement section.
     */
    _getAdvancement(item: Item5e): object;
    /**
     * Enrich all of the entries within the descriptions object on the sheet's system data.
     * @param {JournalEntryPage} page  Journal page being enriched.
     * @returns {Promise<object>}      Object with enriched descriptions.
     */
    _getDescriptions(page: JournalEntryPage): Promise<object>;
    /**
     * Prepare table based on non-optional GrantItem advancement & ScaleValue advancement.
     * @param {Item5e} item              Class item belonging to this journal.
     * @param {number} [initialLevel=1]  Level at which the table begins.
     * @returns {object}                 Prepared table.
     */
    _getTable(item: Item5e, initialLevel?: number): object;
    /**
     * Build out the spell progression data.
     * @param {Item5e} item  Class item belonging to this journal.
     * @returns {object}     Prepared spell progression table.
     */
    _getSpellProgression(item: Item5e): object;
    /**
     * Prepare options table based on optional GrantItem advancement.
     * @param {Item5e} item    Class item belonging to this journal.
     * @returns {object|null}  Prepared optional features table.
     */
    _getOptionalTable(item: Item5e): object | null;
    /**
     * Fetch data for each class feature listed.
     * @param {Item5e} item               Class or subclass item belonging to this journal.
     * @param {boolean} [optional=false]  Should optional features be fetched rather than required features?
     * @returns {object[]}   Prepared features.
     */
    _getFeatures(item: Item5e, optional?: boolean): object[];
    /**
     * Fetch each subclass and their features.
     * @param {string[]} uuids   UUIDs for the subclasses to fetch.
     * @returns {object[]|null}  Prepared subclasses.
     */
    _getSubclasses(uuids: string[]): object[] | null;
    /**
     * Prepare data for the provided subclass.
     * @param {Item5e} item  Subclass item being prepared.
     * @returns {object}     Presentation data for this subclass.
     */
    _getSubclass(item: Item5e): object;
    /** @inheritdoc */
    _renderInner(...args: any[]): Promise<any>;
    /** @inheritdoc */
    activateListeners(html: any): void;
    /**
     * Handle deleting a dropped item.
     * @param {Event} event  The triggering click event.
     * @returns {JournalClassSummary5ePageSheet}
     */
    _onDeleteItem(event: Event): JournalClassSummary5ePageSheet;
    /**
     * Handle launching the individual text editing window.
     * @param {Event} event  The triggering click event.
     */
    _onLaunchTextEditor(event: Event): void;
    /** @inheritdoc */
    _onDrop(event: any): Promise<any>;
}
