import { SystemTypeMap } from "../core/actor";
import { BaseActorSystemData } from "../core/flags";
import { Item, ItemSystemData } from "../core/items/item";
import { ItemDataPF2e } from "./items/base";
export interface ActorDataPF2e {

}
export interface PF2eTypes extends SystemTypeMap {
  ActorTypes: "character" | "npc" | "vehicle" | "loot" | "hazard";
  ActorSystemType: ActorDataPF2e;
  BaseItemData: ItemDataPF2e;
  ItemDataTypes: {
    weapon: ItemSystemData;
    ancestry: ItemSystemData;
    class: ItemSystemData;
    background: ItemSystemData;
    tool: ItemSystemData;
    feat: ItemSystemData;
  };
}
