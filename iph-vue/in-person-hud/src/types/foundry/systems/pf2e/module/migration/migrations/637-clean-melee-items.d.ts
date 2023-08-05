import { ItemSourcePF2e } from "src/types/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Remove physical item data from melee items */
export declare class Migration637CleanMeleeItems extends MigrationBase {
    updateItem(itemData: ItemSourcePF2e): Promise<void>;
}
