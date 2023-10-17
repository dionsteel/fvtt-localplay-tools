import { ActorSourcePF2e } from "src/types/foundry/systems/pf2e/module/actor/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Move hazard source(book) object to be in line with NPCs */
export declare class Migration837MoveHazardBookSources extends MigrationBase {
    static version: number;
    updateActor(source: MaybeWithMisplacedSource): Promise<void>;
}
type MaybeWithMisplacedSource = ActorSourcePF2e & {
    system: {
        source?: unknown;
        "-=source"?: null;
    };
};
export {};
