import { ActorSourcePF2e } from "src/types/foundry/systems/pf2e/module/actor/data/index.ts";
import { NPCSystemSource } from "src/types/foundry/systems/pf2e/module/actor/npc/data.ts";
import { MigrationBase } from "../base.ts";
interface NPCSystemDataOld extends NPCSystemSource {
    details: NPCSystemSource["details"] & {
        flavorText?: string;
        "-=flavorText"?: string | null;
    };
}
/** Change Flavortext field on NPCs to PublicNotes and add new fields to NPCs */
export declare class Migration683FlavorTextToPublicNotes extends MigrationBase {
    static version: number;
    /** Migrate flavorText to public Notes and remove flavorText */
    replaceFlavorTextData(old: NPCSystemDataOld): void;
    updateActor(actorSource: ActorSourcePF2e): Promise<void>;
}
export {};
