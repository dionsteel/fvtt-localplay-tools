import {
  ActorAttributes,
  ActorAttributesSource,
  ActorDetailsSource,
  ActorSystemData,
  ActorSystemSource,
  ActorTraitsData,
  BaseActorSourcePF2e,
  HitPointsStatistic,
} from "@/interfaces/pf2e/actor/data/base";
import { ImmunitySource } from "@/interfaces/pf2e/actor/data/iwr";
import { ActorSizePF2e } from "@/interfaces/pf2e/actor/data/size";
// import { ArmorClassTraceData } from "@/interfaces/pf2e/system/statistic/armor-class";
import { StatisticTraceData } from "@/interfaces/pf2e/system/statistic";
import { VehicleTrait } from "./vehicle/index";
import { ConfigPF2e } from "../config";
import { ActorPF2e } from "../actor";
import { HazardSystemData } from "./hazard";

export interface VehiclePF2e extends ActorPF2e {
  system: HazardSystemData;
}
type ArmorClassTraceData = any;
type InitiativeTraceData = any;
/** The stored source data of a vehicle actor */
type VehicleSource = BaseActorSourcePF2e<"vehicle", VehicleSystemSource>;
interface VehicleSystemSource extends ActorSystemSource {
  attributes: VehicleAttributesSource;
  details: VehicleDetailsSource;
  saves: {
    fortitude: VehicleFortitudeSaveData;
  };
  traits: VehicleTraitsData;
}
interface VehicleAttributesSource extends ActorAttributesSource {
  ac: {
    value: number;
  };
  hardness: number;
  initiative?: never;
  immunities: ImmunitySource[];
}
interface VehicleDetailsSource extends ActorDetailsSource {
  description: string;
  level: {
    value: number;
  };
  alliance: null;
  price: number;
  space: {
    long: number;
    wide: number;
    high: number;
  };
  crew: string;
  passengers: string;
  pilotingCheck: string;
  AC: number;
  speed: number;
}
/** The system-level data of vehicle actors. */
interface VehicleSystemData extends VehicleSystemSource, Omit<ActorSystemData, "attributes" | "details" | "traits"> {
  attributes: VehicleAttributes;
}
interface VehicleAttributes extends Omit<VehicleAttributesSource, AttributesSourceOmission>, ActorAttributes {
  ac: ArmorClassTraceData;
  hp: VehicleHitPoints;
  initiative?: never;
  shield?: never;
}
type AttributesSourceOmission = "immunities" | "weaknesses" | "resistances";
interface VehicleHitPoints extends HitPointsStatistic {
  negativeHealing: false;
  brokenThreshold: number;
}
interface VehicleFortitudeSaveData extends StatisticTraceData {
  saveDetail: string;
}
interface VehicleTraitsData extends ActorTraitsData<VehicleTrait> {
  rarity: keyof ConfigPF2e["PF2E"]["rarityTraits"];
  size: ActorSizePF2e;
}
interface TokenDimensions {
  width: number;
  height: number;
}
export type { TokenDimensions, VehicleSource, VehicleSystemData, VehicleTrait };
