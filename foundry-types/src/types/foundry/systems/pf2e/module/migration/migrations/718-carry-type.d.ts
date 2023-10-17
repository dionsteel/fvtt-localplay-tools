import { ItemSourcePF2e } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
import { ActorSourcePF2e } from "src/types/foundry/systems/pf2e/module/actor/data/index.ts";
/** Update physical item usage and equipped to reflect carry types (held, worn, stowed) */
export declare class Migration718CarryType extends MigrationBase {
    static version: number;
    updateItem(itemData: ItemSourcePF2e, actor?: ActorSourcePF2e): Promise<void>;
}
