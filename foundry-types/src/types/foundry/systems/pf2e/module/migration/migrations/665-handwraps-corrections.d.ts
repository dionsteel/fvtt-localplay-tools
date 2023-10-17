import { ItemSourcePF2e } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Correct the usage and misspelled icon filename for handwraps of mighty blows */
export declare class Migration665HandwrapsCorrections extends MigrationBase {
    static version: number;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
