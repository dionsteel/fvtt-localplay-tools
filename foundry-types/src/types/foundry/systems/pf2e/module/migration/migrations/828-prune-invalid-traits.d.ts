import { ActorSourcePF2e } from "src/types/foundry/systems/pf2e/module/actor/data/index.ts";
import { ItemSourcePF2e } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Prune traits from actors and items that are invalid for the given type */
export declare class Migration828PruneInvalidTraits extends MigrationBase {
    static version: number;
    updateActor(source: ActorSourcePF2e): Promise<void>;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
