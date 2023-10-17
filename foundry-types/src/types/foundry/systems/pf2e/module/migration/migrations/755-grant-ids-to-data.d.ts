import { ActorSourcePF2e } from "src/types/foundry/systems/pf2e/module/actor/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Convert grant flags containing IDs to `ItemGrantData` objects */
export declare class Migration755GrantIdsToData extends MigrationBase {
    static version: number;
    updateActor(source: ActorSourcePF2e): Promise<void>;
}
