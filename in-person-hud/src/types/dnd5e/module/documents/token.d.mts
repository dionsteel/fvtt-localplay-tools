/**
 * Extend the base TokenDocument class to implement system-specific HP bar logic.
 */
export default class TokenDocument5e  extends TokenDocument {
    /** @inheritdoc */
    static getTrackedAttributes(data: any, _path?: any[]): any;
    /** @inheritdoc */
    static _getTrackedAttributesFromSchema(schema: any, _path?: any[]): {
        bar: any[];
        value: any[];
    };
    /**
     * Get an Array of attribute choices which are suitable for being consumed by an item usage.
     * @param {object} data  The actor data.
     * @returns {{bar: string[], value: string[]}}
     */
    static getConsumedAttributes(data: object): {
        bar: string[];
        value: string[];
    };
    /**
     * Traverse the configured allowed attributes to see if the provided one matches.
     * @param {object} allowed  The allowed attributes structure.
     * @param {string[]} attrs  The attributes list to test.
     * @returns {boolean}       Whether the given attribute is allowed.
     * @private
     */
    private static _isAllowedAttribute;
    /** @inheritdoc */
    getBarAttribute(...args: any[]): any;
}
