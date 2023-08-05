import { ItemSourcePF2e } from "src/types/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Add Adjust Modifier REs to Mighty Bulwark to suppress dexterity and standard bulwark modifiers */
export declare class Migration754MightyBulwarkAdjustModifiers extends MigrationBase {
    static version: number;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
