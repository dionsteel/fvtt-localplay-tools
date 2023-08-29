import {
  CharacterAttributes,
  CharacterDetails,
  CharacterResources,
  CreatureTraits,
  CharacterTraits,
  CommonAttributes,
  CommonDetails,
  CommonTraits,
  CreatureAttributes,
  CreatureDetails,
} from "./attributes";
import { CreatureData } from "./creature";

export interface CharacterData extends CreatureData {
  attributes: CommonAttributes & CreatureAttributes & CharacterAttributes;
  details: CommonDetails & CreatureDetails & CharacterDetails;
  traits: CommonTraits & CreatureTraits & CharacterTraits;
  resources: CharacterResources;
}
