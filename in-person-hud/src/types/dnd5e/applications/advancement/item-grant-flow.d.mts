/**
 * Inline application that presents the player with a list of items to be added.
 */
export default class ItemGrantFlow extends AdvancementFlow {
    /**
     * Produce the rendering context for this flow.
     * @returns {object}
     */
    getContext(): object;
    /** @inheritdoc */
    getData(options?: {}): Promise<any>;
    /** @inheritdoc */
    activateListeners(html: any): void;
    /**
     * Handle clicking on a feature during item grant to preview the feature.
     * @param {MouseEvent} event  The triggering event.
     * @protected
     */
    protected _onClickFeature(event: MouseEvent): Promise<void>;
}
import AdvancementFlow from "./advancement-flow.mjs";
