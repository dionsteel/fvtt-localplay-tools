import { SystemTypeMap } from "../actor";

export interface ItemSystemData {
  description?: { gm: string; value: string };
}
export interface Item<D extends ItemSystemData = ItemSystemData, S extends SystemTypeMap = SystemTypeMap> {
  img: string;
  name: string;
  system: D;
  type: keyof S["ItemDataTypes"];
  flags: Record<string, Record<string, string | number | boolean>>;
  effects: string[];
  folder: string;
  sort: string;
  ownership: string;
  _stats: string;
  _id: string;
}

export interface ItemListing extends Partial<Item> {}
