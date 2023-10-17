import { ActorSourcePF2e } from "src/types/foundry/systems/pf2e/module/actor/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Delete owned spells with no corresponding spellcastiong entry */
export declare class Migration632DeleteOrphanedSpells extends MigrationBase {
    static version: number;
    requiresFlush: boolean;
    updateActor(actorData: ActorSourcePF2e): Promise<void>;
}
