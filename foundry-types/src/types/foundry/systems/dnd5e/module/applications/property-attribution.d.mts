/**
 * Description for a single part of a property attribution.
 * @typedef {object} AttributionDescription
 * @property {string} label  Descriptive label that will be displayed. If the label is in the form
 *                           of an @ property, the system will try to turn it into a human-readable label.
 * @property {number} mode   Application mode for this step as defined in
 *                           [CONST.ACTIVE_EFFECT_MODES](https://foundryvtt.com/api/module-constants.html#.ACTIVE_EFFECT_MODES).
 * @property {number} value  Value of this step.
 */
/**
 * Interface for viewing what factors went into determining a specific property.
 *
 * @param {Document} object                        The Document that owns the property being attributed.
 * @param {AttributionDescription[]} attributions  An array of all the attribution data.
 * @param {string} property                        Dot separated path to the property.
 * @param {object} [options={}]                    Application rendering options.
 */
declare class PropertyAttribution {
    /** @inheritDoc */
    static get defaultOptions(): any;
    constructor(object: any, attributions: any, property: any, options?: {});
    object: any;
    attributions: any;
    property: any;
    /**
     * Render this view as a tooltip rather than a whole window.
     * @param {HTMLElement} element  The element to which the tooltip should be attached.
     */
    renderTooltip(element: HTMLElement): Promise<void>;
    /** @inheritDoc */
    getData(): {
        caption: any;
        sources: any;
        total: any;
    };
    /**
     * Produce a human-readable and localized name for the provided property.
     * @param {string} property  Dot separated path to the property.
     * @returns {string}         Property name for display.
     */
    getPropertyLabel(property: string): string;
}
/**
 * Description for a single part of a property attribution.
 */
export type AttributionDescription = {
    /**
     * Descriptive label that will be displayed. If the label is in the form
     * of an @ property, the system will try to turn it into a human-readable label.
     */
    label: string;
    /**
     * Application mode for this step as defined in
     * [CONST.ACTIVE_EFFECT_MODES](https://foundryvtt.com/api/module-constants.html#.ACTIVE_EFFECT_MODES).
     */
    mode: number;
    /**
     * Value of this step.
     */
    value: number;
};
