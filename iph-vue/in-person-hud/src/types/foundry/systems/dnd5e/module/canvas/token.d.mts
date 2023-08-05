/**
 * Extend the base Token class to implement additional system-specific logic.
 */
declare class Token5e {
    /** @inheritdoc */
    _drawBar(number: any, bar: any, data: any): any;
    /**
     * Specialized drawing function for HP bars.
     * @param {number} number      The Bar number
     * @param {PIXI.Graphics} bar  The Bar container
     * @param {object} data        Resource data for this bar
     * @private
     */
    private _drawHPBar;
}
