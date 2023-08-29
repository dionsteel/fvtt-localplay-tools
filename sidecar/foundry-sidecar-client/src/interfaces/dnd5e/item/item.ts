import { Item, ItemSystemData } from "@/interfaces/core/items/item";
import { ImageFilePath } from "@/lib/utils";
import { DnD5eTypes } from "../typemap";
// import Item5e from "src/types/dnd5e/module/documents/item.mjs";

export interface Item5E extends Item<ItemSystemData, DnD5eTypes> {
  name: string;
  img: ImageFilePath;
}
