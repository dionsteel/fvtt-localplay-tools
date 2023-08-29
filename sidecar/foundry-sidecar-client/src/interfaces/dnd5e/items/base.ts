import { Item } from "@/interfaces/core/items/item";
import { DnD5eTypes } from "../typemap";

export interface ItemDescription {
  gm: string;
  value: string;
}
export interface ItemSource {
  value: string;
}
export type ActionCategory = "interaction" | "general";

export interface ItemRuleElement<V extends number | string | boolean = number> {
  key: string;
  mode?: string;
  path?: string;
  value?: V;
  choices?: { value: V }[];
  allowedDrops?: { label: string; predicate: string[] };
  flag?: string;
  prompt?: string;
  selection?: V;
  uuid?: string;
}

export interface ItemData5e {
  description: ItemDescription;
  source: ItemSource;
  rules: ItemRuleElement[];
  slug: string;
  schema: ItemSchemaInfo;
  traits: { value: string[]; rarity: Rarity };
}
export interface Item5e<K extends ItemData5e = ItemData5e> extends Item<ItemData5e, DnD5eTypes> {}
export type Rarity = "common" | "uncommon" | "rare" | "legendary" | "unique";
export interface ItemSchemaInfo {
  version: number;
  lastMigration: {
    version: {
      schema: number;
      foundry: string;
      system: string;
    };
  };
}

export interface ItemLink extends Record<string, any> {
  img: string;
  name: string;
  uuid: string;
}
