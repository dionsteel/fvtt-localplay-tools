import { ItemSourcePF2e } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Set the "ability" property on ability FlatModifier REs */
export declare class Migration696FlatAbilityModifiers extends MigrationBase {
    static version: number;
    private abilityModPattern;
    private abbreviationMap;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
