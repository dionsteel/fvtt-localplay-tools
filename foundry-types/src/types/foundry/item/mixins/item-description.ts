import { Item5E } from "../item";

export interface ItemDescription {
  value: string; //  Full item description.
  chat: string; //  Description displayed in chat card.
  unidentified: string; //  Description displayed if item is unidentified.
}

export interface ItemWithDescription extends Item5E {
  description: ItemDescription; // Various item descriptions.
  source: string; // Adventure or sourcebook where this item originated.
}
