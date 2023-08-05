import { ItemSourcePF2e } from "src/types/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Normalize stringy level and price values */
export declare class Migration639NormalizeLevelAndPrice extends MigrationBase {
    static version: number;
    private coinSlugs;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
