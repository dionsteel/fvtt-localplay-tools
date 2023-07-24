/**
 * Configuration application for item choices.
 */
export default class ItemChoiceConfig extends AdvancementConfig {
    /** @inheritdoc */
    getData(options?: {}): any;
    /** @inheritdoc */
    prepareConfigurationUpdate(configuration: any): Promise<any>;
    /** @inheritdoc */
    _validateDroppedItem(event: any, item: any): void;
}
import AdvancementConfig from "./advancement-config.mjs";
