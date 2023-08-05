import { ActorPF2e } from "src/types/pf2e/module/actor";
import { ItemPF2e } from "src/types/pf2e/module/item";
/** Check an item prior to its deletion for GrantItem on-delete actions */
declare function processGrantDeletions(item: ItemPF2e<ActorPF2e>, pendingItems: ItemPF2e<ActorPF2e>[]): Promise<void>;
export { processGrantDeletions };
