import { CharacterSystemData } from "src/types/pf2e/module/actor/character/data.ts";
import { ActorSourcePF2e } from "src/types/pf2e/module/actor/data/index.ts";
import { MigrationBase } from "../base.ts";
interface CharacterSystemDataOld extends CharacterSystemData {
    details: CharacterSystemData["details"] & {
        biography: CharacterSystemData["details"]["biography"] & {
            public?: string | null;
            "-=public"?: string | null;
            value?: string | null;
            "-=value"?: string | null;
        };
    };
}
/** change Biography fields on characters. Public to appearanc, Private to campaignNotes */
export declare class Migration682BiographyFields extends MigrationBase {
    static version: number;
    /** Fix Biography migration. Correctly migrate fields and then remove them*/
    replaceBiographyData(old: CharacterSystemDataOld): void;
    updateActor(actorSource: ActorSourcePF2e): Promise<void>;
}
export {};
