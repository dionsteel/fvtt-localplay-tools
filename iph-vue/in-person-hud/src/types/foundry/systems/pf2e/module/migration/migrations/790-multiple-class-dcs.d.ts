import { ActorSourcePF2e } from "src/types/pf2e/module/actor/data/index.ts";
import { ItemSourcePF2e } from "src/types/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Add support for multiple class DCs  */
export declare class Migration790MultipleClassDCs extends MigrationBase {
    #private;
    static version: number;
    updateActor(source: ActorSourcePF2e): Promise<void>;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
