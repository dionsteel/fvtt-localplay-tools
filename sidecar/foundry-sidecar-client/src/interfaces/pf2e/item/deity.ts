import { SkillAbbreviation } from "@/interfaces/pf2e/actor/creature";
import { Alignment } from "@/interfaces/pf2e/actor/creature/index";
import { AbilityString } from "@/interfaces/pf2e/actor/index";
import { BaseItemSourcePF2e, ItemSystemSource } from "@/interfaces/pf2e/item/data/base";
import { BaseWeaponType } from "@/interfaces/pf2e/item/weapon/index";
import { DeityDomain } from "./deity/index";
type DeitySource = BaseItemSourcePF2e<"deity", DeitySystemSource>;
interface DeitySystemSource extends ItemSystemSource {
  category: "deity" | "pantheon" | "philosophy";
  alignment: {
    own: Alignment | null;
    follower: Alignment[];
  };
  domains: {
    primary: DeityDomain[];
    alternate: DeityDomain[];
  };
  font: DivineFonts;
  ability: AbilityString[];
  skill: SkillAbbreviation | null;
  weapons: BaseWeaponType[];
  spells: Record<number, string>;
  level?: never;
  traits?: never;
}
type DivineFonts = ["harm"] | ["heal"] | ["harm", "heal"] | never[];
type DeitySystemData = DeitySystemSource;
export type { DeitySource, DeitySystemData, DeitySystemSource };
