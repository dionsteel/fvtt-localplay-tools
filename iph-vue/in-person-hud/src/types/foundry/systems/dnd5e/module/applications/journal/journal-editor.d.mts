/**
 * Pop out ProseMirror editor window for journal entries with multiple text areas that need editing.
 *
 * @param {JournalEntryPage} document   Journal entry page to be edited.
 * @param {object} options
 * @param {string} options.textKeyPath  The path to the specific HTML field being edited.
 */
declare class JournalEditor {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /** @inheritdoc */
    get title(): any;
    /** @inheritdoc */
    getData(): Promise<any>;
    /** @inheritdoc */
    _updateObject(event: any, formData: any): void;
}
