import { ActorPF2e } from "@/interfaces/pf2e/actor";
import { ActorSizePF2e } from "@/interfaces/pf2e/actor/data/size";
// import { InventoryBulk } from "@/interfaces/pf2e/actor/index";
import { PhysicalItemPF2e } from "@/interfaces/pf2e/item/physical";
import { Coins } from "@/interfaces/pf2e/item/physical";
import { PhysicalItemType } from "@/interfaces/pf2e/item/physical/index";
import { RollOptionToggle } from "@/interfaces/pf2e/rules/synthetics";
// import { SheetOptions } from "@/interfaces/pf2e/sheet";
type SheetOptions = any;
export interface InventoryItem<TItem extends PhysicalItemPF2e = PhysicalItemPF2e> {
  item: TItem;
  /** Item size if it causes any weight difference relative to the actor */
  itemSize?: ActorSizePF2e | null;
  editable: boolean;
  isContainer: boolean;
  canBeEquipped: boolean;
  isInvestable: boolean;
  isSellable: boolean;
  hasCharges: boolean;
  heldItems?: InventoryItem[];
}
interface CoinDisplayData {
  value: number;
  label: string;
}
export type CoinageSummary = {
  [K in keyof Coins]?: CoinDisplayData;
};
interface SheetItemList {
  label: string;
  type: PhysicalItemType;
  items: InventoryItem[];
}
export interface SheetInventory {
  sections: Record<Exclude<PhysicalItemType, "book">, SheetItemList>;
  bulk: number | any;
  showValueAlways: boolean;
  showIndividualPricing: boolean;
  hasStowingContainers: boolean;
  invested?: {
    value: number;
    max: number;
  } | null;
}
interface ActorSheetData<TActor extends { [s: string]: any }> {}
export interface ActorSheetDataPF2e<TActor extends ActorPF2e> extends ActorSheetData<TActor> {
  traits: SheetOptions;
  isTargetFlatFooted: boolean;
  user: {
    isGM: boolean;
  };
  toggles: RollOptionToggle[];
  totalCoinage: CoinageSummary;
  totalCoinageGold: string;
  totalWealth: Coins;
  totalWealthGold: string;
  inventory: SheetInventory;
  enrichedContent: Record<string, string>;
}
export interface ActorSheetRenderOptionsPF2e {
  /** What tab to switch to when rendering the sheet */
  tab?: string;
}
export {};
