/**
 * Configuration application for scale values.
 */
export default class ScaleValueConfig extends AdvancementConfig {
    /** @inheritdoc */
    static _cleanedObject(object: any): any;
    /**
     * Prepare the data to display at each of the scale levels.
     * @returns {object}
     * @protected
     */
    protected _prepareLevelData(): object;
    /**
     * Formats the placeholder for this scale value.
     * @param {*} placeholder
     * @returns {object}
     * @protected
     */
    protected _formatPlaceholder(placeholder: any): object;
    /**
     * For scale values with multiple properties, have missing properties inherit from earlier filled-in values.
     * @param {*} value      The primary value.
     * @param {*} lastValue  The previous value.
     */
    _mergeScaleValues(value: any, lastValue: any): void;
    /** @inheritdoc */
    prepareConfigurationUpdate(configuration: any): any;
    /**
     * Copies the full scale identifier hint to the clipboard.
     * @param {Event} event  The triggering click event.
     * @protected
     */
    protected _onIdentifierHintCopy(event: Event): void;
    /**
     * If no identifier is manually entered, slugify the custom title and display as placeholder.
     * @param {Event} event  Change event to the title input.
     */
    _onChangeTitle(event: Event): void;
}
import AdvancementConfig from "./advancement-config.mjs";
