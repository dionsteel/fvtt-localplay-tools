/**
 * A helper class for building MeasuredTemplates for 5e spells and abilities
 */
export default class AbilityTemplate {
    /**
     * A factory method to create an AbilityTemplate instance using provided data from an Item5e instance
     * @param {Item5e} item               The Item object for which to construct the template
     * @returns {AbilityTemplate|null}    The template object, or null if the item does not produce a template
     */
    static fromItem(item: Item5e): AbilityTemplate | null;
    /**
     * Creates a preview of the spell template.
     * @returns {Promise}  A promise that resolves with the final measured template if created.
     */
    drawPreview(): Promise<any>;
    /**
     * Activate listeners for the template preview
     * @param {CanvasLayer} initialLayer  The initially active CanvasLayer to re-activate after the workflow is complete
     * @returns {Promise}                 A promise that resolves with the final measured template if created.
     */
    activatePreviewListeners(initialLayer: CanvasLayer): Promise<any>;
    /**
     * Shared code for when template placement ends by being confirmed or canceled.
     * @param {Event} event  Triggering event that ended the placement.
     */
    _finishPlacement(event: Event): Promise<void>;
    /**
     * Move the template preview when the mouse moves.
     * @param {Event} event  Triggering mouse event.
     */
    _onMovePlacement(event: Event): void;
    /**
     * Rotate the template preview by 3˚ increments when the mouse wheel is rotated.
     * @param {Event} event  Triggering mouse event.
     */
    _onRotatePlacement(event: Event): void;
    /**
     * Confirm placement when the left mouse button is clicked.
     * @param {Event} event  Triggering mouse event.
     */
    _onConfirmPlacement(event: Event): Promise<void>;
    /**
     * Cancel placement when the right mouse button is clicked.
     * @param {Event} event  Triggering mouse event.
     */
    _onCancelPlacement(event: Event): Promise<void>;
    #private;
}
