import { NPCAttributes, NPCDetails, NPCResources } from "./attributes";
import { CreatureData } from "./creature";

export interface NPCData extends CreatureData {
  attributes: NPCAttributes;
  details: NPCDetails;
  resources: NPCResources;
}
