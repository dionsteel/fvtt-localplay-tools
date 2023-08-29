import { CreatureTrait } from "@/interfaces/pf2e/actor/creature/index";
import { Language } from "@/interfaces/pf2e/actor/creature";
import { AbilityString } from "@/interfaces/pf2e/actor/index";
import { ABCSystemData, ABCSystemSource } from "@/interfaces/pf2e/item/abc";
import { BaseItemSourcePF2e } from "@/interfaces/pf2e/item/data/base";
import { Size, TraitsWithRarity, ValuesList } from "@/interfaces/pf2e/data";
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
  boosts: Record<
    string,
    {
      value: AbilityString[];
      selected: AbilityString | null;
    }
  >;
  flaws: Record<
    string,
    {
      value: AbilityString[];
      selected: AbilityString | null;
    }
  >;
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
interface AncestrySystemData extends Omit<AncestrySystemSource, "items">, Omit<ABCSystemData, "level" | "traits"> {}
export type { AncestrySource, AncestrySystemData };
