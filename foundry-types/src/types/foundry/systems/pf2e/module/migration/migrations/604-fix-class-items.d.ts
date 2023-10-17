import { ClassSource } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
export declare class Migration604FixClassItem extends MigrationBase {
    static version: number;
    updateItem(item: MaybeWithAbilityBoosLevels): Promise<void>;
}
type MaybeWithAbilityBoosLevels = ClassSource & {
    system: {
        abilityBoostLevels: unknown;
    };
};
export {};
