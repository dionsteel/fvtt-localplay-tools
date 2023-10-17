import { ItemSourcePF2e } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Exclude the Universalist wizard feature from receiving an initial focus pool */
export declare class Migration769NoUniversalistFocusPool extends MigrationBase {
    static version: number;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
