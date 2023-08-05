import { ActorSourcePF2e } from "src/types/pf2e/module/actor/data/index.ts";
import { MigrationBase } from "../base.ts";
export declare class Migration602UpdateDiehardFeat extends MigrationBase {
    #private;
    static version: number;
    requiresFlush: boolean;
    constructor();
    updateActor(actorData: ActorSourcePF2e): Promise<void>;
}
