import { ActorSourcePF2e } from "src/types/pf2e/module/actor/data/index.ts";
import { ItemSourcePF2e } from "src/types/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Update the rule elements of the Laughing Shadow hybrid study, remove its presence from Arcane Cascade rules */
export declare class Migration738UpdateLaughingShadow extends MigrationBase {
    #private;
    static version: number;
    updateActor(source: ActorSourcePF2e): Promise<void>;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
