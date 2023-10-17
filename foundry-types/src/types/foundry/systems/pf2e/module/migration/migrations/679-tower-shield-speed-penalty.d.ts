import { ItemSourcePF2e } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Set a speed penalty of -5 on all tower shields, plus some basic tidying */
export declare class Migration679TowerShieldSpeedPenalty extends MigrationBase {
    static version: number;
    private towerShieldSlugs;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
