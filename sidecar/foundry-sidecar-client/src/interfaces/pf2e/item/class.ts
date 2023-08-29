import { AbilityString, SaveType } from "@/interfaces/pf2e/actor/index";
import { ABCSystemSource } from "@/interfaces/pf2e/item/abc";
import { BaseItemSourcePF2e, ItemTraits } from "@/interfaces/pf2e/item/data/base";
import { ZeroToFour } from "@/interfaces/pf2e/data";
import { CLASS_TRAITS } from "./class/values";
type ClassSource = BaseItemSourcePF2e<"class", ClassSystemSource>;
interface ClassSystemSource extends ABCSystemSource {
  traits: ItemTraits;
  keyAbility: {
    value: AbilityString[];
    selected: AbilityString | null;
  };
  hp: number;
  perception: ZeroToFour;
  savingThrows: Record<SaveType, ZeroToFour>;
  attacks: ClassAttackProficiencies;
  defenses: ClassDefenseProficiencies;
  trainedSkills: {
    value: string[];
    additional: number;
  };
  classDC: ZeroToFour;
  ancestryFeatLevels: {
    value: number[];
  };
  classFeatLevels: {
    value: number[];
  };
  generalFeatLevels: {
    value: number[];
  };
  skillFeatLevels: {
    value: number[];
  };
  skillIncreaseLevels: {
    value: number[];
  };
  level?: never;
}
type ClassSystemData = ClassSystemSource;
interface ClassAttackProficiencies {
  simple: ZeroToFour;
  martial: ZeroToFour;
  advanced: ZeroToFour;
  unarmed: ZeroToFour;
  other: {
    name: string;
    rank: ZeroToFour;
  };
}
interface ClassDefenseProficiencies {
  unarmored: ZeroToFour;
  light: ZeroToFour;
  medium: ZeroToFour;
  heavy: ZeroToFour;
}
export type SetElement<S> = S extends Set<infer T> ? T : never;
type ClassTrait = SetElement<typeof CLASS_TRAITS>;
export type { ClassAttackProficiencies, ClassDefenseProficiencies, ClassSource, ClassSystemData, ClassTrait };
