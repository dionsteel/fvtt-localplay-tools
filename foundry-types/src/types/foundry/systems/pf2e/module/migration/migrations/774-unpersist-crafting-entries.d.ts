import { ActorSourcePF2e } from "src/types/foundry/systems/pf2e/module/actor/data/index.ts";
import { ItemSourcePF2e } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
import { PhysicalItemTrait } from "src/types/foundry/systems/pf2e/module/item/physical/data.ts";
import { PredicateStatement } from "src/types/foundry/systems/pf2e/module/system/predication.ts";
import { MigrationBase } from "../base.ts";
/** Convert crafting entry `requiredTrait` properties to be predicates */
export declare class Migration774UnpersistCraftingEntries extends MigrationBase {
    static version: number;
    munitionsCrafterPredicate: OldRawPredicate;
    updateActor(source: ActorSourcePF2e): Promise<void>;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
    generatePredicateFromRequiredTraits(requiredTraits: PhysicalItemTrait[][]): OldRawPredicate;
}
interface OldRawPredicate {
    all?: PredicateStatement[];
    any?: PredicateStatement[];
    not?: PredicateStatement[];
}
export {};
