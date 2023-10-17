import { MigrationBase } from "../base.ts";
import { ActorSourcePF2e } from "src/types/foundry/systems/pf2e/module/actor/data/index.ts";
export declare class Migration611UpdateToughnessMountainsStoutness extends MigrationBase {
    #private;
    static version: number;
    requiresFlush: boolean;
    constructor();
    updateActor(actorData: ActorSourcePF2e): Promise<void>;
}
