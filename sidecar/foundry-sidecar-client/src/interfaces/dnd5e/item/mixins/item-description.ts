import { Item5E } from "../item";
import { ItemData5e, ItemDescription, ItemSource } from "../../items/base";

export interface ItemWithDescription extends ItemData5e {
  description: ItemDescription; // Various item descriptions.
  source: ItemSource; // Adventure or sourcebook where this item originated.
}
