export interface ItemSystemData {
  description?: { gm: string; value: string };
}
export interface Item<D extends ItemSystemData = ItemSystemData> {
  img: string;
  name: string;
  system: D;
  type: string;
  flags: Record<string, Record<string, string | number | boolean>>;
  effects: string[];
  folder: string;
  sort: string;
  ownership: string;
  _stats: string;
  _id: string;
}

export interface ItemListing extends Partial<Item> {}
