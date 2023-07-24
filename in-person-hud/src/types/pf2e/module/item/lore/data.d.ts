import { BaseItemSourcePF2e, ItemSystemSource } from "src/types/pf2e/module/item/data/base.ts";
import { ZeroToFour } from "src/types/pf2e/module/data.ts";
type LoreSource = BaseItemSourcePF2e<"lore", LoreSystemSource>;
interface LoreSystemSource extends ItemSystemSource {
    mod: {
        value: number;
    };
    proficient: {
        value: ZeroToFour;
    };
    variants?: Record<string, {
        label: string;
        options: string;
    }>;
    level?: never;
    traits?: never;
}
type LoreSystemData = LoreSystemSource;
export { LoreSource, LoreSystemData };
