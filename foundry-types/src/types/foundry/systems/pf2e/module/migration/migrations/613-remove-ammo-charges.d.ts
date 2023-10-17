import { MigrationBase } from "../base.ts";
import { ItemSourcePF2e } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
/** Remove charges from ammunition to ensure ammo consumption works properly. */
export declare class Migration613RemoveAmmoCharges extends MigrationBase {
    static version: number;
    updateItem(itemData: ItemSourcePF2e): Promise<void>;
}
