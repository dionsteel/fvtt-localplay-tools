/**
 * Configuration application for item grants.
 */
declare class ItemGrantConfig extends AdvancementConfig {
    /** @inheritdoc */
    getData(options?: {}): any;
    /** @inheritdoc */
    _validateDroppedItem(event: any, item: any): void;
}
import AdvancementConfig from "./advancement-config";
