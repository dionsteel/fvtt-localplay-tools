import { ItemSourcePF2e } from "src/types/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Combine AE-likes altering creature size and TokenSize RuleElements into CreatureSize RuleElements */
export declare class Migration655CreatureTokenSizes extends MigrationBase {
    #private;
    static version: number;
    private dimensionToSize;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
