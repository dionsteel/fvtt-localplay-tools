import { MigrationBase } from "../base.ts";
import { ItemSourcePF2e } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
/** Convert heritage "feats" be of type "heritage" */
export declare class Migration610SetHeritageFeatType extends MigrationBase {
    static version: number;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
