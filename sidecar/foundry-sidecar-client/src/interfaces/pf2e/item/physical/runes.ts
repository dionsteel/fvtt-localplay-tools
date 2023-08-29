import { DamageDicePF2e, DamageDiceParameters, ModifierAdjustment } from "@/interfaces/pf2e/actor/modifiers";
import { ResistanceType } from "@/interfaces/pf2e/actor/index";
// import { ArmorPF2e, WeaponPF2e } from "@/interfaces/pf2e/item/data/index";
import type { ResilientRuneType } from "@/interfaces/pf2e/item/armor/index";
import type { OtherWeaponTag, StrikingRuneType, WeaponPropertyRuneType, WeaponTrait } from "@/interfaces/pf2e/item/weapon/index";
import { OneToFour, OneToThree, Rarity, ZeroToFour, ZeroToThree } from "@/interfaces/pf2e/data";
import { RollNoteSource } from "@/interfaces/pf2e/notes";
import { StrikeAdjustment } from "@/interfaces/pf2e/rules/synthetics";
// declare function getPropertySlots(item: WeaponPF2e | ArmorPF2e): ZeroToFour;
// declare function getPropertyRunes(item: WeaponPF2e | ArmorPF2e, slots: number): string[];
// declare function getStrikingDice(itemData: {
//   strikingRune: {
//     value: StrikingRuneType | null;
//   };
// }): ZeroToThree;
// declare function getResilientBonus(itemData: {
//   resiliencyRune: {
//     value: ResilientRuneType | null;
//   };
// }): ZeroToThree;
type RuneDiceProperty = "slug" | "damageType" | "category" | "diceNumber" | "dieSize" | "predicate" | "critical";
type RuneDiceData = Partial<Pick<DamageDiceParameters, RuneDiceProperty>>;
interface WeaponPropertyRuneData {
  attack?: {
    notes?: RuneNoteData[];
  };
  damage?: {
    dice?: RuneDiceData[];
    notes?: RuneNoteData[];
    adjustments?: ModifierAdjustment[];
    /**
     * A list of resistances this weapon's damage will ignore--not limited to damage from the rune.
     * If `max` is numeric, the resistance ignored will be equal to the lower of the provided maximum and the
     * target's resistance.
     */
    ignoredResistances?: {
      type: ResistanceType;
      max: number | null;
    }[];
  };
  strikeAdjustments?: StrikeAdjustment[];
  level: number;
  name: string;
  price: number;
  rarity: Rarity;
  slug: string;
  traits: WeaponTrait[];
  otherTags?: OtherWeaponTag[];
}
/** Title and text are mandatory for these notes */
interface RuneNoteData extends Pick<RollNoteSource, "outcome" | "predicate" | "title" | "text"> {
  title: string;
  text: string;
}
export declare const WEAPON_PROPERTY_RUNES: Record<WeaponPropertyRuneType, WeaponPropertyRuneData>;
declare function getPropertyRuneDice(runes: WeaponPropertyRuneType[], options: Set<string>): DamageDicePF2e[];
declare function getPropertyRuneStrikeAdjustments(runes: WeaponPropertyRuneType[]): StrikeAdjustment[];
declare function getPropertyRuneModifierAdjustments(runes: WeaponPropertyRuneType[]): ModifierAdjustment[];
interface RuneValuationData {
  level: number;
  price: number;
  rarity: Rarity;
  traits: WeaponTrait[];
  otherTags?: OtherWeaponTag[];
}
interface WeaponValuationData {
  potency: {
    0: null;
  } & Record<OneToFour, RuneValuationData>;
  striking: {
    0: null;
  } & Record<OneToThree, RuneValuationData>;
}
declare const WEAPON_VALUATION_DATA: WeaponValuationData;
export type {
  RuneValuationData,
  WEAPON_VALUATION_DATA,
  WeaponPropertyRuneData,
  getPropertyRuneDice,
  getPropertyRuneModifierAdjustments,
  getPropertyRuneStrikeAdjustments,
  // getPropertyRunes,
  // getPropertySlots,
  // getResilientBonus,
  // getStrikingDice,
};
