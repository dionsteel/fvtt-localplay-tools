import { ItemSourcePF2e } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Add critical specialization effect to the Ruffian class feature, DamageDice REs to healing/harming hands */
export declare class Migration791RuffianHands extends MigrationBase {
    #private;
    static version: number;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
