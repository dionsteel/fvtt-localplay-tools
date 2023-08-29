import { ActorPF2e } from "../actor";
import * as ItemInstance from "./data/index";
import { ActionItemPF2e, ActionSystemData } from "./action";
import { AfflictionSystemData } from "./affliction";
import { AncestrySystemData } from "./ancestry";
import { ArmorSystemData } from "./armor";
import { BackgroundSystemData } from "./background";
import { ContainerSystemData } from "./container";
import { BookSystemData } from "./book";
import { CampaignFeatureSystemData } from "./campaign-feature";
import { ClassSystemData } from "./class";
import { ConditionSystemData, PersistentDamageData } from "./condition";
import { ConsumableSystemData } from "./consumable";
import { DeitySystemData } from "./deity";
import { EffectSystemData } from "./effect";
import { EquipmentSystemData } from "./equipment";
import { FeatSystemData } from "./feat";
import { HeritageSystemData } from "./heritage";
import { KitSystemData } from "./kit";
import { LoreSystemData } from "./lore";
import { MeleeSystemData } from "./melee";

import { SpellSystemData } from "./spell";
import { SpellcastingEntrySystemData } from "./spellcasting-entry";
import { TreasureSystemData } from "./treasure";
import { WeaponSystemData } from "./weapon";
import { ItemSystemData } from "./data/base";
import { Item } from "@/interfaces/core/items/item";
import { PF2eTypes } from "../typemap";
// export type { }; // = ItemWrap<ActionSystemData>;
export type AfflictionPF2e = ItemWrapPF2e<AfflictionSystemData>;
export type AncestryPF2e = ItemWrapPF2e<AncestrySystemData>;
export type ArmorPF2e = ItemWrapPF2e<ArmorSystemData>;
export type BackgroundPF2e = ItemWrapPF2e<BackgroundSystemData>;
export type ContainerPF2e = ItemWrapPF2e<ContainerSystemData>;
export type BookPF2e = ItemWrapPF2e<BookSystemData>;
export type CampaignFeaturePF2e = ItemWrapPF2e<CampaignFeatureSystemData>;
export type ClassPF2e = ItemWrapPF2e<ClassSystemData>;
export type ConditionPF2e = ItemWrapPF2e<ConditionSystemData>;
export type ConsumablePF2e = ItemWrapPF2e<ConsumableSystemData>;
export type DeityPF2e = ItemWrapPF2e<DeitySystemData>;
export type EffectPF2e = ItemWrapPF2e<EffectSystemData>;
export type EquipmentPF2e = ItemWrapPF2e<EquipmentSystemData>;
export interface PersistentDamagePF2e extends Item<PersistentDamageData, PF2eTypes> {}
export interface FeatPF2e extends ItemPF2e {
  system: ItemSystemData & FeatSystemData;
  category: string;
  group: any;
  isFeat: boolean;
  isFeature: boolean;
}
export type HeritagePF2e = ItemWrapPF2e<HeritageSystemData>;
export type KitPF2e = ItemWrapPF2e<KitSystemData>;
export type LorePF2e = ItemWrapPF2e<LoreSystemData>;
export type MeleePF2e = ItemWrapPF2e<MeleeSystemData>;
export type SpellPF2e = ItemWrapPF2e<SpellSystemData>;
export type SpellcastingEntryPF2e = ItemWrapPF2e<SpellcastingEntrySystemData>;
export type TreasurePF2e = ItemWrapPF2e<TreasureSystemData>;
export type WeaponPF2e = ItemWrapPF2e<WeaponSystemData>;
interface ItemInstances<TParent extends ActorPF2e | null> {
  action: ActionItemPF2e;
  affliction: AfflictionPF2e;
  ancestry: AncestryPF2e;
  armor: ArmorPF2e;
  background: BackgroundPF2e;
  backpack: ContainerPF2e;
  book: BookPF2e;
  campaignFeature: CampaignFeaturePF2e;
  class: ClassPF2e;
  condition: ConditionPF2e;
  consumable: ConsumablePF2e;
  deity: DeityPF2e;
  effect: EffectPF2e;
  equipment: EquipmentPF2e;
  feat: FeatPF2e;
  heritage: HeritagePF2e;
  kit: KitPF2e;
  lore: LorePF2e;
  melee: MeleePF2e;
  spell: SpellPF2e;
  spellcastingEntry: SpellcastingEntryPF2e;
  treasure: TreasurePF2e;
  weapon: WeaponPF2e;
}
export interface ItemWrapPF2e<T extends ItemSystemData> extends Item<T, PF2eTypes> {
  system: T;
}

export interface ItemPF2e extends ItemWrapPF2e<ItemSystemData> {}
export type { ItemInstances, ActionItemPF2e };
