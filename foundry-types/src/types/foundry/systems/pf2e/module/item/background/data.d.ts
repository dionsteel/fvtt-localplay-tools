import { SkillAbbreviation } from "src/types/foundry/systems/pf2e/module/actor/creature/data.ts";
import { AbilityString } from "src/types/foundry/systems/pf2e/module/actor/types.ts";
import { ABCSystemData, ABCSystemSource } from "src/types/foundry/systems/pf2e/module/item/abc/data.ts";
import { BaseItemSourcePF2e, ItemTraits } from "src/types/foundry/systems/pf2e/module/item/data/base.ts";
type BackgroundSource = BaseItemSourcePF2e<"background", BackgroundSystemSource>;
interface BackgroundSystemSource extends ABCSystemSource {
    traits: ItemTraits;
    boosts: Record<number, {
        value: AbilityString[];
        selected: AbilityString | null;
    }>;
    trainedLore: string;
    trainedSkills: {
        value: SkillAbbreviation[];
    };
    level?: never;
}
interface BackgroundSystemData extends Omit<BackgroundSystemSource, "items">, Omit<ABCSystemData, "level" | "traits"> {
}
export { BackgroundSource, BackgroundSystemData };
