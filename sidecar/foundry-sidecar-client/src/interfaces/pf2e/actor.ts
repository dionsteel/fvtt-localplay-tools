import { Actor } from "../core/actor";
import { ActorSystemData } from "./actor/data/base";
import { FamiliarSystemData } from "./actor/familiar";
import { LootSystemData } from "./actor/loot";
import { PartySystemData } from "./actor/party";
import { VehicleSystemData } from "./actor/vehicle";
import { PF2eTypes } from "./typemap";
export type { CreaturePF2e } from "./actor/creature";
export type { CharacterPF2e } from "./actor/character";
export type { HazardPF2e } from "./actor/hazard/index";
export type { NPCPF2e } from "./actor/npc/index";
// export type { } from "./actor/party";
export interface ActorWrapPF2e<SD extends ActorSystemData = ActorSystemData> extends Actor<PF2eTypes> {
  system: SD;
}
export interface ActorPF2e extends ActorWrapPF2e<ActorSystemData> {}
export interface LootPF2e extends ActorWrapPF2e<LootSystemData> {}
export interface VehiclePF2e extends ActorWrapPF2e<VehicleSystemData> {}
export interface PartyPF2e extends ActorWrapPF2e<PartySystemData> {}
export interface FamiliarPF2e extends ActorWrapPF2e<FamiliarSystemData> {}
