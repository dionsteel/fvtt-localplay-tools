import type { ActionItemSource } from "@/interfaces/pf2e/item/action";
import type { AfflictionSource } from "@/interfaces/pf2e/item/affliction";
import type { AncestrySource } from "@/interfaces/pf2e/item/ancestry";
import type { ArmorSource } from "@/interfaces/pf2e/item/armor";
import type { BackgroundSource } from "@/interfaces/pf2e/item/background";
import type { BookSource } from "@/interfaces/pf2e/item/book";
import type { CampaignFeatureSource } from "@/interfaces/pf2e/item/campaign-feature";
import type { ClassSource } from "@/interfaces/pf2e/item/class";
import type { ConditionSource } from "@/interfaces/pf2e/item/condition";
import type { ConsumableSource } from "@/interfaces/pf2e/item/consumable";
import type { ContainerSource } from "@/interfaces/pf2e/item/container";
import type { DeitySource } from "@/interfaces/pf2e/item/deity";
import type { EffectSource } from "@/interfaces/pf2e/item/effect";
import type { EquipmentSource } from "@/interfaces/pf2e/item/equipment";
import type { FeatSource } from "@/interfaces/pf2e/item/feat";
import type { HeritageSource } from "@/interfaces/pf2e/item/heritage";
import type { KitSource } from "@/interfaces/pf2e/item/kit";
import type { LoreSource } from "@/interfaces/pf2e/item/lore";
import type { MeleeSource } from "@/interfaces/pf2e/item/melee";
import type { PhysicalItemType } from "@/interfaces/pf2e/item/physical/index";
import type { SpellSource } from "@/interfaces/pf2e/item/spell";
import type { SpellcastingEntrySource } from "@/interfaces/pf2e/item/spellcasting-entry";
import type { TreasureSource } from "@/interfaces/pf2e/item/treasure";
import type { WeaponSource } from "@/interfaces/pf2e/item/weapon";
import { PROFICIENCY_RANKS } from "@/interfaces/pf2e/data";
export * from "./helpers";
type ProficiencyRank = (typeof PROFICIENCY_RANKS)[number];
type NonPhysicalItemType =
  | "action"
  | "affliction"
  | "ancestry"
  | "background"
  | "campaignFeature"
  | "class"
  | "condition"
  | "deity"
  | "effect"
  | "feat"
  | "heritage"
  | "kit"
  | "lore"
  | "melee"
  | "spell"
  | "spellcastingEntry";
type ItemType = NonPhysicalItemType | PhysicalItemType;
type PhysicalItemSource = ArmorSource | BookSource | ConsumableSource | ContainerSource | EquipmentSource | TreasureSource | WeaponSource;
type ItemSourcePF2e =
  | PhysicalItemSource
  | ActionItemSource
  | AfflictionSource
  | AncestrySource
  | BackgroundSource
  | CampaignFeatureSource
  | ClassSource
  | ConditionSource
  | DeitySource
  | EffectSource
  | FeatSource
  | HeritageSource
  | KitSource
  | LoreSource
  | MeleeSource
  | SpellSource
  | SpellcastingEntrySource;
type MagicItemSource = Exclude<PhysicalItemSource, ConsumableSource | TreasureSource>;
interface ItemSummaryData {
  [key: string]: unknown;
  description?: {
    value: string;
  };
  traits?: TraitChatData[];
  properties?: (string | number | null)[];
}
interface TraitChatData {
  value: string;
  label: string;
  description?: string;
  mystified?: boolean;
  excluded?: boolean;
}
export type {
  ActionItemSource,
  AncestrySource,
  ArmorSource,
  BackgroundSource,
  BookSource,
  ClassSource,
  ConditionSource,
  ConsumableSource,
  ContainerSource,
  DeitySource,
  EffectSource,
  EquipmentSource,
  FeatSource,
  ItemSourcePF2e,
  ItemSummaryData,
  ItemType,
  KitSource,
  LoreSource,
  MagicItemSource,
  MeleeSource,
  NonPhysicalItemType,
  PhysicalItemSource,
  ProficiencyRank,
  SpellSource,
  SpellcastingEntrySource,
  TraitChatData,
  TreasureSource,
  WeaponSource,
};
