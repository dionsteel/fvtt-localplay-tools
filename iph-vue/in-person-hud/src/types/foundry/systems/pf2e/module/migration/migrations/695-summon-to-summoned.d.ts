import { ItemSourcePF2e } from "src/types/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Change the "summon" creature trait to "summoned", correctly set "summon" trait on npc/hazard actions */
export declare class Migration695SummonToSummoned extends MigrationBase {
    static version: number;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
