import { CharacterAttributes, CharacterDetails, CharacterResources, CharacterTraits } from "./attributes";
import { CreatureData } from "./creature";

export interface CharacterData extends CreatureData {
  attributes: CharacterAttributes;
  details: CharacterDetails;
  traits: CharacterTraits;
  resources: CharacterResources;
}
