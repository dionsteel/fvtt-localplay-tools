import { ActorSourcePF2e } from "src/types/pf2e/module/actor/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Ensure actor speed values are numbers */
export declare class Migration780NumifySpeeds extends MigrationBase {
    #private;
    static version: number;
    updateActor(source: ActorSourcePF2e): Promise<void>;
}
