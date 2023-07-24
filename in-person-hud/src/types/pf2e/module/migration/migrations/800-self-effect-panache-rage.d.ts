import { ActorSourcePF2e } from "src/types/pf2e/module/actor/data/index.ts";
import { ItemSourcePF2e } from "src/types/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Rename any predicate statement of "rage" or "panache" to a statement that the effect is present  */
export declare class Migration800SelfEffectPanacheRage extends MigrationBase {
    static version: number;
    updateItem(source: ItemSourcePF2e, actorSource?: ActorSourcePF2e): Promise<void>;
}
