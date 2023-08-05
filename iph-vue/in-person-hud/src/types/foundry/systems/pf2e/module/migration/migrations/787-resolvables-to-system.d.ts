import { ItemSourcePF2e } from "src/types/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Convert object paths of weapon and spell resolvables with <V10 `data` properties to use `system` */
export declare class Migration787ResolvablesToSystem extends MigrationBase {
    static version: number;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
