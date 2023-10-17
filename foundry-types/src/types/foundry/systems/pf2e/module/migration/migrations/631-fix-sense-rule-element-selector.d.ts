import { MigrationBase } from "../base.ts";
import { ItemSourcePF2e } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
/** Correct any sense rule element selector values that are using the old lowercase selector values */
export declare class Migration631FixSenseRuleElementSelector extends MigrationBase {
    static version: number;
    private readonly SENSE_SELECTOR_CONVERSION;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
