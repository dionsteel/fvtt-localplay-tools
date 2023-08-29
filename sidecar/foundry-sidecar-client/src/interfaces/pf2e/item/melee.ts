import { BaseItemSourcePF2e, ItemFlagsPF2e, ItemSystemData, ItemSystemSource, ItemTraits } from "@/interfaces/pf2e/item/data/base";
import { PreciousMaterialGrade } from "@/interfaces/pf2e/item/physical/index";
import { WeaponMaterialType } from "@/interfaces/pf2e/item/weapon/index";
import { DamageType } from "@/interfaces/pf2e/system/damage/index";
import { PartialDeep } from "@/lib/utils";
import { ConfigPF2e } from "../config";
type MeleeSource = BaseItemSourcePF2e<"melee", MeleeSystemSource> & {
  flags: PartialDeep<MeleeFlags>;
};
type MeleeFlags = ItemFlagsPF2e & {
  pf2e: {
    linkedWeapon?: string;
  };
};
interface MeleeSystemSource extends ItemSystemSource {
  level?: never;
  traits: NPCAttackTraits;
  attack: {
    value: string;
  };
  damageRolls: Record<string, NPCAttackDamage>;
  bonus: {
    value: number;
  };
  attackEffects: {
    value: string[];
  };
  weaponType: {
    value: "melee" | "ranged";
  };
}
interface MeleeSystemData extends MeleeSystemSource, Omit<ItemSystemData, "level" | "traits"> {
  material: {
    precious: {
      type: WeaponMaterialType;
      grade: PreciousMaterialGrade;
    } | null;
  };
}
interface NPCAttackDamageSource {
  damage: string;
  damageType: DamageType;
  category?: "persistent" | "precision" | "splash" | null;
}
type NPCAttackDamage = Required<NPCAttackDamageSource>;
export type NPCAttackTrait = keyof ConfigPF2e["PF2E"]["npcAttackTraits"];
export type NPCAttackTraits = ItemTraits<NPCAttackTrait>;
export type { NPCAttackDamage, MeleeFlags, MeleeSource, MeleeSystemData, MeleeSystemSource };
