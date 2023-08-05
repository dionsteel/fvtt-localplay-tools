import { CharacterSource } from "src/types/pf2e/module/actor/character/data.ts";
import { CreatureType } from "src/types/pf2e/module/actor/creature/data.ts";
import { FamiliarSource } from "src/types/pf2e/module/actor/familiar/data.ts";
import { HazardSource } from "src/types/pf2e/module/actor/hazard/data.ts";
import { LootSource } from "src/types/pf2e/module/actor/loot/data.ts";
import { NPCSource } from "src/types/pf2e/module/actor/npc/data.ts";
import { PartySource } from "src/types/pf2e/module/actor/party/data.ts";
import { VehicleSource } from "src/types/pf2e/module/actor/vehicle/data.ts";
import { StatisticRollParameters } from "src/types/pf2e/module/system/statistic/index.ts";
type CreatureSource = CharacterSource | NPCSource | FamiliarSource;
type ActorType = CreatureType | "hazard" | "loot" | "party" | "vehicle";
type ActorSourcePF2e = CreatureSource | HazardSource | LootSource | PartySource | VehicleSource;
interface RollInitiativeOptionsPF2e extends RollInitiativeOptions, StatisticRollParameters {
    secret?: boolean;
}
export { ActorSourcePF2e, ActorType, CharacterSource, CreatureSource, FamiliarSource, HazardSource, LootSource, NPCSource, PartySource, RollInitiativeOptionsPF2e, VehicleSource, };
