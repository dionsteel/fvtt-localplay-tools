import { CreatureTrait, Language } from "src/types/foundry/systems/pf2e/module/actor/creature/index.ts";
import { AbilityString } from "src/types/foundry/systems/pf2e/module/actor/types.ts";
import { ABCSystemData, ABCSystemSource } from "src/types/foundry/systems/pf2e/module/item/abc/index.ts";
import { BaseItemSourcePF2e } from "src/types/foundry/systems/pf2e/module/item/data/base.ts";
import { Size, TraitsWithRarity, ValuesList } from "src/types/foundry/systems/pf2e/module/data.ts";
type AncestrySource = BaseItemSourcePF2e<"ancestry", AncestrySystemSource>;
export type CreatureTraits = TraitsWithRarity<CreatureTrait>;
interface AncestrySystemSource extends ABCSystemSource {
    traits: CreatureTraits;
    additionalLanguages: {
        count: number;
        value: string[];
        custom: string;
    };
    /** If present, use the alternate ancestry boosts, which are two free */
    alternateAncestryBoosts?: AbilityString[];
    boosts: Record<string, {
        value: AbilityString[];
        selected: AbilityString | null;
    }>;
    flaws: Record<string, {
        value: AbilityString[];
        selected: AbilityString | null;
    }>;
    voluntary?: {
        boost?: AbilityString | null;
        flaws: AbilityString[];
    };
    hp: number;
    languages: ValuesList<Language>;
    speed: number;
    size: Size;
    reach: number;
    vision: "normal" | "darkvision" | "lowLightVision";
    level?: never;
}
interface AncestrySystemData extends Omit<AncestrySystemSource, "items">, Omit<ABCSystemData, "level" | "traits"> {
}
export { AncestrySource, AncestrySystemData };
