export * from "./actor/attributes";
import { ActorData } from "./actor/common";
import { CreatureData } from "./actor/creature";
import { NPCData } from "./actor/npc";
import { CharacterData } from "./actor/character";
import { VehicleData } from "./actor/vehicle";

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
export type ActorSystemTypes = ActorData | CharacterData | CreatureData | VehicleData | NPCData;


export interface ItemTypes5e {
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
