import { ItemSourcePF2e } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/**  Move TempHPRuleElement source `onCreate` and `onTurnStart` to `events` object */
export declare class Migration847TempHPRuleEvents extends MigrationBase {
    static version: number;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
