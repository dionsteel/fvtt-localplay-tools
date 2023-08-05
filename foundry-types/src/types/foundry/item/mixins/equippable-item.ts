import { Item5E } from "../item";

export interface EquippableItem extends Item5E {
  attunement: number; //  Attunement information as defined in `DND5E.attunementTypes`.
  equipped: boolean; //  Is this item equipped on its owning actor.
  get equippableItemChatProperties(): string[];
}
