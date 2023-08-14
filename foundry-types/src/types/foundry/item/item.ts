// import Item5e from "src/types/dnd5e/module/documents/item";
import type { Item5e } from "../systems/dnd5e/module/documents/item.mjs";

export interface Item5E extends Item5e {
  name: string;
  img: ImageFilePath;
}
