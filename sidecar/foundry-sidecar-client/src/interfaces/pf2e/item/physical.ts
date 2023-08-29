import { ActionTrait } from "@/interfaces/pf2e/item/action";
import { ArmorTrait } from "@/interfaces/pf2e/item/armor/index";
import { ConsumableTrait } from "@/interfaces/pf2e/item/consumable/index";
import { EquipmentTrait } from "@/interfaces/pf2e/item/equipment/index";
import { WeaponTrait } from "@/interfaces/pf2e/item/weapon/index";
import { Size, TraitsWithRarity, ValuesList } from "@/interfaces/pf2e/data";
import { ActionCost, BaseItemSourcePF2e, Frequency, ItemSystemData, ItemSystemSource } from "./data/base";
import type { ITEM_CARRY_TYPES } from "./data/values";
// import { CoinsPF2e } from "./helpers";
import { PhysicalItemType, PreciousMaterialGrade, PreciousMaterialType } from "./physical/index";
import { UsageDetails } from "./physical/usage";
import { PartialDeep } from "@/lib/utils";
import { PhysicalItemSource } from "./data";
type ItemCarryType = typeof ITEM_CARRY_TYPES;
type BasePhysicalItemSource<TType extends PhysicalItemType, TSystemSource extends PhysicalSystemSource = PhysicalSystemSource> = BaseItemSourcePF2e<TType, TSystemSource>;
interface PhysicalSystemSource extends ItemSystemSource {
  level: {
    value: number;
  };
  traits: PhysicalItemTraits;
  quantity: number;
  baseItem: string | null;
  hp: PhysicalItemHPSource;
  hardness: number;
  weight: {
    value: string;
  };
  equippedBulk: {
    value: string | null;
  };
  /** This is unused, remove when inventory bulk refactor is complete */
  unequippedBulk: {
    value: string;
  };
  price: PartialPrice;
  equipped: EquippedData;
  identification: IdentificationSource;
  stackGroup: string | null;
  negateBulk: {
    value: string;
  };
  containerId: string | null;
  preciousMaterial: {
    value: Exclude<PreciousMaterialType, "dragonhide" | "grisantian-pelt"> | null;
  };
  preciousMaterialGrade: {
    value: PreciousMaterialGrade | null;
  };
  size: Size;
  usage: {
    value: string;
  };
  activations?: Record<string, ItemActivation>;
  temporary?: boolean;
}
interface PhysicalSystemData extends PhysicalSystemSource, Omit<ItemSystemData, "level"> {
  hp: PhysicalItemHitPoints;
  price: Price;
  bulk: BulkData;
  traits: PhysicalItemTraits;
  temporary: boolean;
  identification: IdentificationData;
  usage: UsageDetails;
}
type Investable<TData extends PhysicalSystemData | PhysicalSystemSource> = TData & {
  equipped: {
    invested: boolean | null;
  };
};
/** The item's bulk in Light bulk units, given the item is of medium size */
interface BulkData {
  /** Held or stowed bulk */
  heldOrStowed: number;
  /** Worn bulk, if different than when held or stowed */
  worn: number | null;
  /** The applicable bulk value between the above two */
  value: number;
  /** The quantity of this item necessary to amount to the above bulk quantities: anything less is negligible */
  per: number;
}
type IdentificationStatus = "identified" | "unidentified";
interface MystifiedData {
  name: string;
  img: ImageFilePath;
  data: {
    description: {
      value: string;
    };
  };
}
type ImageFilePath = string;
type IdentifiedData = PartialDeep<MystifiedData>;
interface IdentificationSource {
  status: IdentificationStatus;
  unidentified: MystifiedData;
  misidentified: object;
}
interface IdentificationData extends IdentificationSource {
  identified: MystifiedData;
}
type EquippedData = {
  carryType: ItemCarryType;
  inSlot?: boolean;
  handsHeld?: number;
  invested?: boolean | null;
};
type PhysicalItemTrait = ArmorTrait | ConsumableTrait | EquipmentTrait | WeaponTrait;
interface PhysicalItemTraits<T extends PhysicalItemTrait = PhysicalItemTrait> extends TraitsWithRarity<T> {
  otherTags: string[];
}
interface ItemActivation {
  id: string;
  description: {
    value: string;
  };
  actionCost: ActionCost;
  components: {
    command: boolean;
    envision: boolean;
    interact: boolean;
    cast: boolean;
  };
  frequency?: Frequency;
  traits: ValuesList<ActionTrait>;
}
interface PhysicalItemHPSource {
  value: number;
  max: number;
}
interface PhysicalItemHitPoints extends PhysicalItemHPSource {
  brokenThreshold: number;
}
interface Coins {
  pp?: number;
  gp?: number;
  sp?: number;
  cp?: number;
}
interface PartialPrice {
  value: Coins;
  per?: number;
}
interface CoinsPF2e {
  cp: number;
  sp: number;
  gp: number;
  pp: number;
  [c: string]: number;
}
interface Price extends PartialPrice {
  value: CoinsPF2e;
  per: number;
}

export interface PhysicalItemPF2e {
  readonly _source: PhysicalItemSource;
  system: PhysicalSystemData;
}
export type {
  BasePhysicalItemSource,
  Coins,
  EquippedData,
  IdentificationData,
  IdentificationStatus,
  IdentifiedData,
  Investable,
  ItemActivation,
  ItemCarryType,
  MystifiedData,
  PartialPrice,
  PhysicalItemHPSource,
  PhysicalItemHitPoints,
  PhysicalItemTrait,
  PhysicalItemTraits,
  PhysicalSystemData,
  PhysicalSystemSource,
  Price,
};
