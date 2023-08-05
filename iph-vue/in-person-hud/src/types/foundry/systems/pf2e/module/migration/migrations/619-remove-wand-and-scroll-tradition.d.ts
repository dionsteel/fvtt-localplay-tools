import { ActorSourcePF2e } from "src/types/pf2e/module/actor/data/index.ts";
import { ItemSourcePF2e } from "src/types/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
export declare class Migration619TraditionLowercaseAndRemoveWandScroll extends MigrationBase {
    static version: number;
    updateItem(item: ItemSourcePF2e, actorData?: ActorSourcePF2e): Promise<void>;
}
