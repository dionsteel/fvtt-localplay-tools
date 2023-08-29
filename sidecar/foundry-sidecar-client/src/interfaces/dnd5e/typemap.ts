import { SystemTypeMap } from "../core/actor";
import { BaseActorSystemData } from "../core/flags";
import { Item, ItemSystemData } from "../core/items/item";
import { Item5e, ItemData5e } from "./items/base";
// import { ItemDataPF2e } from "./items/base";
export interface AblilityScore5e {
  value: number;
  proficient: number;
  max: number | null;
  bonuses: { check: string; save: string };
}

export interface Abilities5e {
  str: AblilityScore5e; // { value: 18; proficient: 0; max: null; bonuses: { check: ""; save: "" } };
  dex: AblilityScore5e; // {};
  con: AblilityScore5e; // { value: 13; proficient: 0; max: null; bonuses: { check: ""; save: "" } };
  int: AblilityScore5e; // { value: 12; proficient: 0; max: null; bonuses: { check: ""; save: "" } };
  wis: AblilityScore5e; // { value: 9; proficient: 1; max: null; bonuses: { check: ""; save: "" } };
  cha: AblilityScore5e; // { value: 16; proficient: 1; max: null; bonuses: { check: ""; save: "" } };
}

export interface ArmorClass5e {
  flat: string | number | null;
  calc: string;
  formula: string;
}
export interface HealthPoints5e {
  value: number;
  max: number;
  temp: number;
  tempmax: number;
  bonuses: {
    level: string;
    overall: string;
  };
}
export interface InititativeScore5e {
  ability: AbilityScoreKey5e;
  bonus: string | number;
}
export type Units5e = "ft" | "m" | "yards" | "y" | string;

export interface MovementAttributes {
  burrow: number;
  climb: number;
  fly: number;
  swim: number;
  walk: number;
  units: Units5e;
  hover: false;
}
export interface Senses5e {
  darkvision: number;
  blindsight: number;
  tremorsense: number;
  truesight: number;
  units: Units5e;
  special: string;
}
export type AbilityScoreKey5e = keyof Abilities5e;
export interface Attributes5e {
  ac: ArmorClass5e; // { flat: null; calc: "default"; formula: "" };
  hp: HealthPoints5e;
  init: InititativeScore5e; // { ability: "dex"; bonus: "" };
  movement: MovementAttributes;
  attunement: { max: number };
  senses: Senses5e;
  spellcasting: AbilityScoreKey5e;
  death: { success: 0; failure: 0 };
  exhaustion: 0;
  inspiration: true;
}

export type ItemId = string;
export interface ActorDetails5e {
  biography: { value: string; public: string };
  alignment: string;
  race: string | ItemId;
  background: ItemId;
  originalClass: ItemId;
  xp: { value: number };
  appearance: string;
  trait: string;
  ideal: string;
  bond: string;
  flaw: string;
}
export type DamageTypeName5e = "bludgeoning" | "piercing" | "slashing" | "fire" | "ice" | "acid" | "lighting" | "thunder" | "force" | "cold" | "radiant" | "necrotic";
export type BaseConditionNames5e =
  | "diseased"
  | "charmed"
  | "frightened"
  | "dying"
  | "stunned"
  | "paralysed"
  | "restrained"
  | "prone"
  | "unconscious"
  | "rage"
  | "enraged"
  | "grappled"
  | "flanked"
  | "exhausted"
  | "exhausted1"
  | "exhausted2"
  | "exhausted3"
  | "exhausted4"
  | "exhausted5";

export type LanguageName5e = "common" | "orc" | "sylvan" | "elvish" | "dwarvish" | "infernal" | "gnomish" | "undercommon" | "deepspeak" | "celestial";
export type WeaponTypeKey5e = /** Simple */ "sim" | /** Martial */ "mar" | /** Ranged */ "ranged" | /** Melee */ "melee";
export type ArmorTypeKey5e = /** Light */ "lgt" | /** Medium */ "med" | /** Heavy */ "hvy" | /** Shield */ "shl";
export interface Traits5e {
  size: "sml" | "med" | "lrg" | "huge";
  di: { value: DamageTypeName5e[]; bypasses: string[]; custom: string };
  dr: { value: DamageTypeName5e[]; bypasses: string[]; custom: string };
  dv: { value: DamageTypeName5e[]; bypasses: string[]; custom: string };
  ci: { value: BaseConditionNames5e[]; custom?: string };
  languages: { value: LanguageName5e[]; custom?: string };
  weaponProf: { value: WeaponTypeKey5e[]; custom?: string };
  armorProf: { value: ArmorTypeKey5e[]; custom: "" };
}
export interface CurrencyRecord5e {
  pp: number;
  gp: number;
  ep: number;
  sp: number;
  cp: number;
}
/**
 * Formula - A string containing a foundy formula
 */
export type Formula = string;
export interface SkillRecord5e {
  value: number;
  ability: AbilityScoreKey5e;
  bonuses: { check: Formula; passive: Formula };
}
export interface SkillMap5e {
  acr: SkillRecord5e;
  ani: SkillRecord5e;
  arc: SkillRecord5e;
  ath: SkillRecord5e;
  dec: SkillRecord5e;
  his: SkillRecord5e;
  ins: SkillRecord5e;
  itm: SkillRecord5e;
  inv: SkillRecord5e;
  med: SkillRecord5e;
  nat: SkillRecord5e;
  prc: SkillRecord5e;
  prf: SkillRecord5e;
  per: SkillRecord5e;
  rel: SkillRecord5e;
  slt: SkillRecord5e;
  ste: SkillRecord5e;
  sur: SkillRecord5e;
}
export interface ToolProficiency5e {
  value: number;
  ability: AblilityScore5e;
  bonuses: { check: Formula };
}
export interface ToolProficiencyMap5e {
  smith?: ToolProficiency5e;
}
export type ToolKey5e = keyof ToolProficiencyMap5e;
export type SkillKey5e = keyof SkillMap5e;
export type CurrencyKey5e = keyof CurrencyRecord5e;
export interface SpellSlot5e {
  value: number;
  override: number | Formula;
}
export interface SpellcastingAbility5e {
  spell1: SpellSlot5e;
  spell2: SpellSlot5e;
  spell3: SpellSlot5e;
  spell4: SpellSlot5e;
  spell5: SpellSlot5e;
  spell6: SpellSlot5e;
  spell7: SpellSlot5e;
  spell8: SpellSlot5e;
  spell9: SpellSlot5e;
  spell0: SpellSlot5e;
  pact: SpellSlot5e;
}
export type SpellSlotNames5e = keyof SpellcastingAbility5e;
export interface Bonuses5e {
  mwak: { attack: Formula; damage: Formula };
  rwak: { attack: Formula; damage: Formula };
  msak: { attack: Formula; damage: Formula };
  rsak: { attack: Formula; damage: Formula };
  abilities: { check: Formula; save: Formula; skill: Formula };
  spell: { dc: Formula | number };
}
export interface ResourceEntry5e {
  value: number;
  max: number;
  sr: boolean;
  lr: boolean;
  label: string;
}
export interface ResourceMap5e {
  primary?: ResourceEntry5e;
  secondary?: ResourceEntry5e;
  tertiary?: ResourceEntry5e;
}
export interface ActorData5e {
  abilities: Abilities5e;
  attributes: Attributes5e;
  details: ActorDetails5e;
  traits: Traits5e;
  currency: CurrencyRecord5e;
  skills: SkillMap5e;
  tools: ToolProficiencyMap5e;
  spells: SpellcastingAbility5e;
  bonuses: Bonuses5e;
  resources: ResourceMap5e;
}
export interface DnD5eTypes extends SystemTypeMap {
  ActorTypes: "character" | "npc" | "vehicle" | "loot" | "hazard";
  ActorSystemType: ActorData5e;
  BaseItemData: ItemData5e;
  ItemDataTypes: {
    weapon: ItemData5e;
    ancestry: ItemData5e;
    class: ItemData5e;
    background: ItemData5e;
    tool: ItemData5e;
    feat: ItemData5e;
  };
}
export type ItemDataTypeNames5e = keyof DnD5eTypes["ItemDataTypes"];
export type ItemDataType5e<K extends ItemDataTypeNames5e> = DnD5eTypes["ItemDataTypes"][K];
export type Actor5eItemTypes = { [P in ItemDataTypeNames5e]: Item5e<ItemDataType5e<P>>[] };
