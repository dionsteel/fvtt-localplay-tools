import { ActorSourcePF2e } from "src/types/pf2e/module/actor/data/index.ts";
import { ItemSourcePF2e } from "src/types/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Move IWR data to `actor.system.attributes` */
export declare class Migration812RestructureIWR extends MigrationBase {
    #private;
    static version: number;
    updateActor(source: ActorSourcePF2e): Promise<void>;
    /** Sluggify precious material types, normalize precious material grades */
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
