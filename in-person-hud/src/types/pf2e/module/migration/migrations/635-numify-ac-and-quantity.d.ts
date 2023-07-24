import { ActorSourcePF2e } from "src/types/pf2e/module/actor/data/index.ts";
import { ItemSourcePF2e } from "src/types/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Ensure AC and quantity values are numeric */
export declare class Migration635NumifyACAndQuantity extends MigrationBase {
    static version: number;
    updateActor(actorData: ActorSourcePF2e): Promise<void>;
    updateItem(itemData: ItemSourcePF2e): Promise<void>;
}
