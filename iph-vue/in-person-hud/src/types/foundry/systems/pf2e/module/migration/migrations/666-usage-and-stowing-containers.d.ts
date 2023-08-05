import { ItemSourcePF2e } from "src/types/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Set appropriate usage and mark certain containers as being for stowing */
export declare class Migration666UsageAndStowingContainers extends MigrationBase {
    static version: number;
    backpacks: Set<string>;
    wornGarment: Set<string>;
    wornGloves: Set<string>;
    heldInTwoHands: Set<string>;
    stowingContainers: Set<string>;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
