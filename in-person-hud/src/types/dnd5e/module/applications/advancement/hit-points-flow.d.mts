/**
 * Inline application that presents hit points selection upon level up.
 */
export default class HitPointsFlow extends AdvancementFlow {
    /** @inheritdoc */
    getData(): any;
    /** @inheritdoc */
    activateListeners(html: any): void;
    /**
     * Update the roll result display when the average result is taken.
     * @protected
     */
    protected _updateRollResult(): void;
    /** @inheritdoc */
    _updateObject(event: any, formData: any): any;
}
import AdvancementFlow from "./advancement-flow.mjs";
