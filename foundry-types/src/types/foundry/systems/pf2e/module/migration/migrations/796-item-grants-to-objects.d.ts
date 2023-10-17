import { ActorSourcePF2e } from "src/types/foundry/systems/pf2e/module/actor/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Convert `itemGrants` flags from arrays to `Record<string, GrantedItemData>`s */
export declare class Migration796ItemGrantsToObjects extends MigrationBase {
    #private;
    static version: number;
    updateActor(source: ActorSourcePF2e): Promise<void>;
}
