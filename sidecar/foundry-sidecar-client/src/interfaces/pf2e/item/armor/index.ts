import { ConfigPF2e } from "../../config";

type ArmorTrait = keyof ConfigPF2e["PF2E"]["armorTraits"];
type ArmorCategory = keyof ConfigPF2e["PF2E"]["armorCategories"];
type ArmorGroup = keyof ConfigPF2e["PF2E"]["armorGroups"];
type BaseArmorType = keyof ConfigPF2e["PF2E"]["baseArmorTypes"];
type ResilientRuneType = "" | "resilient" | "greaterResilient" | "majorResilient";
type OtherArmorTag = "shoddy";
export type { ArmorTrait, ArmorCategory, ArmorGroup, BaseArmorType, ResilientRuneType, OtherArmorTag };
