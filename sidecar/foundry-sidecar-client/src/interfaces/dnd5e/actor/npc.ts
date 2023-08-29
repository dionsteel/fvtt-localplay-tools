import {
  CreatureAttributes,
  CreatureDetails,
  CommonAttributes,
  CommonDetails,
  NPCAttributes,
  NPCDetails,
  NPCResources,
} from "./attributes";
import { ActorData } from "./common";
import { CreatureData } from "./creature";

export interface NPCData extends ActorData, CreatureData {
  attributes: CommonAttributes & CreatureAttributes & NPCAttributes;
  details: CommonDetails & CreatureDetails & NPCDetails;
  resources: NPCResources;
}
