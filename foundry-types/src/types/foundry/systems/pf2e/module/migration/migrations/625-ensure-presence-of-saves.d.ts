import { ActorSourcePF2e } from "src/types/pf2e/module/actor/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Ensure presence of all three save types on NPCs */
export declare class Migration625EnsurePresenceOfSaves extends MigrationBase {
    static version: number;
    updateActor(actorData: ActorSourcePF2e): Promise<void>;
}
