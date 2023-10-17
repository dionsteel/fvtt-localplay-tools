import { ItemSourcePF2e } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
/** Trim roll options with "self:" prefixes but are unnecessary for targeting */
export declare class Migration727TrimSelfRollOptions extends MigrationBase {
    static version: number;
    protected optionPattern: RegExp;
    protected optionReplacement: string;
    protected trimRollOption(option: string): string;
    protected trimPredicates(obj: Record<string, unknown>): Record<string, unknown>;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
