import { MigrationBase } from "../base.ts";
import { ActorSourcePF2e } from "src/types/pf2e/module/actor/data/index.ts";
export declare class Migration612NormalizeRarities extends MigrationBase {
    static version: number;
    updateActor(actorData: ActorSourcePF2e): Promise<void>;
}
