import { Actor5e } from "src/types/dnd5e/module/documents/_module.mjs";
import Item5e from "src/types/dnd5e/module/documents/item.mjs";
import { StrikeData } from "src/types/pf2e/module/actor/data/base";
import { ActorPF2e, ScenePF2e } from "src/types/pf2e/module/documents";
import { ActionItemPF2e, PhysicalItemPF2e, ABCItemPF2e, WeaponPF2e, MeleePF2e } from "src/types/pf2e/module/item";

export interface PlayerSeatConfig {
  seatIndex: number;
  userId: string;
  actorIds: string[];
  actors?: Actor[];
}
// ({} as PlayerSeatConfig).actor

// let x:PlayerSeatConfig = {actor}

export interface SystemActorTypes {
  dnd5e: Actor5e;
  pf2e: ActorPF2e;
  dcc: Actor;
  starfinder: Actor;
}
export interface SystemItemTypes {
  dnd5e: Item5e;
  pf2e: ActionItemPF2e | WeaponPF2e | MeleePF2e;
  dcc: Item;
  starfinder: Item;
}
export interface SystemActionTypes {
  pf2e: StrikeData;
  dnd5e: Item5e;
  dcc: Item;
  starfinder: Item;
}
export interface SeatActionButton {
  perform?: <T = any>(...args: T[]) => Promise<any>;
  title: string;
  id: string;
  icon?: string;
  conditions?: any;
  description?: any;
  system: keyof SystemActorTypes;
}
export interface SeatActionPF2EButton extends SeatActionButton {
  system: "pf2e";
}
export interface SeatActionDND5EButton extends SeatActionButton {
  system: "dnd5e";
}
// let x:SeatActionButton={system:''}
export interface SeatAction {
  system: keyof SystemActorTypes;

  item?: any;
  buttons?: SeatActionButton[];
}

export interface SeatActionPF2e extends SeatAction {
  system: "pf2e";
  item: SystemItemTypes[SeatAction["system"]];
}
