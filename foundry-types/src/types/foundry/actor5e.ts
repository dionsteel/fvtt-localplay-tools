export type * from "./actor/attributes";
import { ActorData } from "./actor/common";
import { CreatureData } from "./actor/creature";
import { NPCData } from "./actor/npc";
import { CharacterData } from "./actor/character";
import { VehicleData } from "./actor/vehicle";
import {
  Actor5e,
  TokenDocument5e,
} from "../foundry/systems/dnd5e/module/documents/_module.mjs";
import {
  Background5e,
  ClassItem5e,
  ConsumableItem5e,
  Container5e,
  Equipment5e,
  Feature5e,
  LootItem5e,
  Spell5e,
  Subclass5e,
  ToolItem5e,
  Weapon5e,
} from "./item";
export type ActorSystemTypes =
  | ActorData
  | CharacterData
  | CreatureData
  | VehicleData
  | NPCData;
export interface Actor5E<S extends ActorSystemTypes = ActorSystemTypes>
  extends Actor5e<S, TokenDocument5e> {
  id: string;
  name: string;
  img: ImageFilePath;
  itemTypes: ItemTypes;
}
export interface Token5E extends Token {
  actor: Actor5e & Actor5E;
}
export interface ItemTypes {
  background: Background5e[];
  backpack: Container5e[];
  class: ClassItem5e[];
  consumable: ConsumableItem5e[];
  equipment: Equipment5e[];
  feat: Feature5e[];
  loot: LootItem5e[];
  spell: Spell5e[];
  subclass: Subclass5e[];
  tool: ToolItem5e[];
  weapon: Weapon5e[];
}

export type { ActorData, CharacterData, CreatureData, VehicleData, NPCData };
