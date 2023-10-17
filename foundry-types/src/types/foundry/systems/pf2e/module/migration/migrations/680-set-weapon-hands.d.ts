import { ArmorSource, ItemSourcePF2e } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Set the "hands" (usage) property of weapons */
export declare class Migration680SetWeaponHands extends MigrationBase {
    static version: number;
    private oneHandedWeapons;
    private onePlusHandedWeapons;
    private shieldAttachments;
    private firearmAttachments;
    private wornGloves;
    private twoHandedWeapons;
    isShield(source: ItemSourcePF2e & {
        system: {
            armorType?: {
                value?: unknown;
            };
        };
    }): source is MaybeOldShieldData;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
interface MaybeOldShieldData extends ArmorSource {
    armorType?: {
        value?: unknown;
    };
}
export {};
