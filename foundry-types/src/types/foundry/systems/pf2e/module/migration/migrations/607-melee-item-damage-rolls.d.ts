import { MigrationBase } from "../base.ts";
import { ItemSourcePF2e } from "src/types/pf2e/module/item/data/index.ts";
/** Convert damageRolls arrays to objects. */
export declare class Migration607MeleeItemDamageRolls extends MigrationBase {
    static version: number;
    updateItem(itemData: ItemSourcePF2e): Promise<void>;
}
