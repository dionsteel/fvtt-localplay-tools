import { ItemSourcePF2e } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Update from khakkara to khakkhara; wind and fire wheel to feng huo lun */
export declare class Migration825KhakkharaFengHuoLun extends MigrationBase {
    static version: number;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
