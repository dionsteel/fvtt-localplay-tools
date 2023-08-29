import { CharacterSource } from "@/interfaces/pf2e/actor/character";
import { CreatureType } from "@/interfaces/pf2e/actor/creature";
import { FamiliarSource } from "@/interfaces/pf2e/actor/familiar";
import { HazardSource } from "@/interfaces/pf2e/actor/hazard";
import { LootSource } from "@/interfaces/pf2e/actor/loot";
import { NPCSource } from "@/interfaces/pf2e/actor/npc";
import { PartySource } from "@/interfaces/pf2e/actor/party";
import { VehicleSource } from "@/interfaces/pf2e/actor/vehicle";
// import { StatisticRollParameters } from "@/interfaces/pf2e/system/statistic";
type CreatureSource = CharacterSource | NPCSource | FamiliarSource;
type ActorType = CreatureType | "hazard" | "loot" | "party" | "vehicle";
type ActorSourcePF2e = CreatureSource | HazardSource | LootSource | PartySource | VehicleSource;
interface RollInitiativeOptionsPF2e extends Object {
  secret?: boolean;
}
export type {
  ActorSourcePF2e,
  ActorType,
  CharacterSource,
  CreatureSource,
  FamiliarSource,
  HazardSource,
  LootSource,
  NPCSource,
  PartySource,
  RollInitiativeOptionsPF2e,
  VehicleSource,
};
