import { BaseItemSourcePF2e, ItemSystemSource } from "@/interfaces/pf2e/item/data/base";
import { PhysicalItemTraits, PartialPrice } from "@/interfaces/pf2e/item/physical";
import { ItemUUID, ImageFilePath } from "@/lib/utils";
type KitSource = BaseItemSourcePF2e<"kit", KitSystemSource>;
interface KitEntryData {
  uuid: ItemUUID;
  img: ImageFilePath;
  quantity: number;
  name: string;
  isContainer: boolean;
  items?: Record<string, KitEntryData>;
}
interface KitSystemSource extends ItemSystemSource {
  traits: PhysicalItemTraits;
  items: Record<string, KitEntryData>;
  price: PartialPrice;
  level?: never;
}
type KitSystemData = KitSystemSource;
export type { KitEntryData, KitSource, KitSystemData, KitSystemSource };
