import { ItemSourcePF2e } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
export declare class Migration618MigrateItemImagePaths extends MigrationBase {
    #private;
    static version: number;
    updateItem(itemData: ItemSourcePF2e): Promise<void>;
}
