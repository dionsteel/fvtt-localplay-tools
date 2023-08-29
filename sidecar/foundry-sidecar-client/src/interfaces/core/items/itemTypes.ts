import { SystemTypeMap } from "../actor";
import { Item } from "./item";

export interface ItemTypes {
  class: Item[];
  background: Item[];
  weapon: Item[];
  tool: Item[];
  feat: Item[];
}

export type ItemDataTypeNames<S extends SystemTypeMap = SystemTypeMap> = keyof S["ItemDataTypes"];
export type ItemDataType<K extends ItemDataTypeNames<S>, S extends SystemTypeMap = SystemTypeMap> = S["ItemDataTypes"][K];
export type ActorItemTypes<S extends SystemTypeMap = SystemTypeMap, N = ItemDataTypeNames<S>> = { [P in ItemDataTypeNames<S>]: Item<ItemDataType<P, S>>[] };
