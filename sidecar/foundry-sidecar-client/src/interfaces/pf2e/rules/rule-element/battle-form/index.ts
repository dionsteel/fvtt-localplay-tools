import { SkillAbbreviation } from "@/interfaces/pf2e/actor/creature";
import { CreatureTrait } from "@/interfaces/pf2e/actor/creature/index";
// import { SenseAcuity, SenseType } from "@/interfaces/pf2e/actor/creature/values";
import { AbilityString, MovementType } from "@/interfaces/pf2e/actor/index";
import { WeaponDamage } from "@/interfaces/pf2e/item/weapon";
import { BaseWeaponType, WeaponCategory, WeaponGroup, WeaponTrait } from "@/interfaces/pf2e/item/weapon/index";
import { Size } from "@/interfaces/pf2e/data";
import { RuleElementSource } from "../../index";
import { ItemRuleElement } from "@/interfaces/pf2e/items";
// import { ImmunityRuleElement, ResistanceRuleElement, WeaknessRuleElement } from ".";
type ImmunityRuleElement = ItemRuleElement & { _source: string };
type WeaknessRuleElement = ItemRuleElement & { _source: string };
type ResistanceRuleElement = ItemRuleElement & { _source: string };
export type SenseType = string;
export type SenseAcuity = number;
interface BattleFormSource extends RuleElementSource {
  overrides?: BattleFormOverrides;
  canCast?: boolean;
  canSpeak?: boolean;
  /** Does the character have hands, allowing it to use manipulate actions? */
  hasHands?: boolean;
  /** Can the character utilize its own unarmed strikes? */
  ownUnarmed?: boolean;
}
interface BattleFormOverrides {
  traits?: CreatureTrait[];
  armorClass?: BattleFormAC;
  tempHP?: number | null;
  senses?: BattleFormSenses;
  size?: Size | null;
  speeds?: BattleFormSpeeds;
  skills?: BattleFormSkills;
  strikes?: Record<string, BattleFormStrike>;
  immunities?: Omit<ImmunityRuleElement["_source"], "key">[];
  weaknesses?: Omit<WeaknessRuleElement["_source"], "key">[];
  resistances?: Omit<ResistanceRuleElement["_source"], "key">[];
}
interface BattleFormAC {
  modifier?: string | number;
  ignoreCheckPenalty?: boolean;
  ignoreSpeedPenalty?: boolean;
}
interface BattleFormSense {
  acuity?: SenseAcuity;
  range?: number | null;
}
interface BattleFormSkill {
  modifier: string | number;
  ownIfHigher?: boolean;
}
type BattleFormSenses = {
  [K in SenseType]?: BattleFormSense;
};
type BattleFormSkills = {
  [K in SkillAbbreviation]?: BattleFormSkill;
};
type BattleFormSpeeds = {
  [K in MovementType]?: number;
};
type ImageFilePath = string;
interface BattleFormStrike {
  label: string;
  img?: ImageFilePath;
  ability?: AbilityString;
  category: WeaponCategory;
  group: WeaponGroup | null;
  baseType?: BaseWeaponType | null;
  traits: WeaponTrait[];
  modifier: string | number;
  damage: WeaponDamage;
  ownIfHigher?: boolean;
  range?: number | null;
  maxRange?: number | null;
}
interface BattleFormStrikeQuery {
  pack: string;
  query: string;
  modifier: number;
  ownIfHigher: boolean;
}
export type { BattleFormAC, BattleFormOverrides, BattleFormSenses, BattleFormSkills, BattleFormSource, BattleFormSpeeds, BattleFormStrike, BattleFormStrikeQuery };
