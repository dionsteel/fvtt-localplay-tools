import { ItemSourcePF2e } from "src/types/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Clean up entries of consumable system data */
export declare class Migration815ConsumableDataCleanup extends MigrationBase {
    static version: number;
    consumableKeys: Set<string>;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
