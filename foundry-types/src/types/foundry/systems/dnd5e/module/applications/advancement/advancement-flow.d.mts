/**
 * Base class for the advancement interface displayed by the advancement prompt that should be subclassed by
 * individual advancement types.
 *
 * @param {Item5e} item           Item to which the advancement belongs.
 * @param {string} advancementId  ID of the advancement this flow modifies.
 * @param {number} level          Level for which to configure this flow.
 * @param {object} [options={}]   Application rendering options.
 */
declare class AdvancementFlow {
    /** @inheritdoc */
    static get defaultOptions(): any;
    constructor(item: any, advancementId: any, level: any, options?: {});
    /**
     * The item that houses the Advancement.
     * @type {Item5e}
     */
    item: Item5e;
    /**
     * ID of the advancement this flow modifies.
     * @type {string}
     * @private
     */
    private _advancementId;
    /**
     * Level for which to configure this flow.
     * @type {number}
     */
    level: number;
    /**
     * Data retained by the advancement manager during a reverse step. If restoring data using Advancement#restore,
     * this data should be used when displaying the flow's form.
     * @type {object|null}
     */
    retainedData: object | null;
    /** @inheritdoc */
    get id(): string;
    /** @inheritdoc */
    get title(): any;
    /**
     * The Advancement object this flow modifies.
     * @type {Advancement|null}
     */
    get advancement(): any;
    /** @inheritdoc */
    getData(): {
        appId: string;
        advancement: any;
        type: any;
        title: any;
        summary: any;
        level: number;
    };
    /** @inheritdoc */
    _updateObject(event: any, formData: any): Promise<void>;
}
