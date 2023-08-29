import { PreciousMaterialType } from "@/interfaces/pf2e/item/physical/index";
import { MELEE_WEAPON_GROUPS, WEAPON_CATEGORIES, WEAPON_GROUPS, WEAPON_PROPERTY_RUNE_TYPES, WEAPON_RANGES } from "./values";
import { ConfigPF2e } from "../../config";
type WeaponPropertyRuneType = SetElement<typeof WEAPON_PROPERTY_RUNE_TYPES>;
type WeaponCategory = SetElement<typeof WEAPON_CATEGORIES>;
type MeleeWeaponGroup = SetElement<typeof MELEE_WEAPON_GROUPS>;
type WeaponGroup = SetElement<typeof WEAPON_GROUPS>;
type BaseWeaponType = keyof ConfigPF2e["PF2E"]["baseWeaponTypes"];
type WeaponTrait = keyof ConfigPF2e["PF2E"]["weaponTraits"];
type OtherWeaponTag = "crossbow" | "improvised" | "shoddy";
type WeaponRangeIncrement = SetElement<typeof WEAPON_RANGES>;
type SetElement<T> = T extends Set<infer V> ? V : never;
type WeaponReloadTime = "-" | "0" | "1" | "2" | "3" | "10";
type StrikingRuneType = "striking" | "greaterStriking" | "majorStriking";
type WeaponMaterialType = Exclude<PreciousMaterialType, "dragonhide" | "grisantian-pelt">;
export type {
  BaseWeaponType,
  MeleeWeaponGroup,
  OtherWeaponTag,
  StrikingRuneType,
  WeaponCategory,
  WeaponGroup,
  WeaponMaterialType,
  WeaponPropertyRuneType,
  WeaponRangeIncrement,
  WeaponReloadTime,
  WeaponTrait,
};
