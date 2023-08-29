import { SkillAbbreviation } from "@/interfaces/pf2e/actor/creature";
import { AbilityString } from "@/interfaces/pf2e/actor/index";
import { ABCSystemData, ABCSystemSource } from "@/interfaces/pf2e/item/abc";
import { BaseItemSourcePF2e, ItemSystemData, ItemTraits } from "@/interfaces/pf2e/item/data/base";
type BackgroundSource = BaseItemSourcePF2e<"background", BackgroundSystemSource>;
interface BackgroundSystemSource extends ABCSystemSource {
  traits: ItemTraits;
  boosts: Record<
    number,
    {
      value: AbilityString[];
      selected: AbilityString | null;
    }
  >;
  trainedLore: string;
  trainedSkills: {
    value: SkillAbbreviation[];
  };
  level?: never;
}
interface BackgroundSystemData extends Omit<BackgroundSystemSource, "items">, Omit<ABCSystemData, "level" | "traits"> {}
export type { BackgroundSource, BackgroundSystemData };
