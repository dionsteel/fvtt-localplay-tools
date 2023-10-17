import { ItemSourcePF2e } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
export declare class Migration715DangerousSorcery extends MigrationBase {
    static version: number;
    private dangerousSorcery;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
