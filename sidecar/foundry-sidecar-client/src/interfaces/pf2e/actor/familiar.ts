import { BaseCreatureSource, CreatureAttributes, CreatureSystemData, CreatureSystemSource, CreatureTraitsData } from "@/interfaces/pf2e/actor/creature";
import { CreatureSensePF2e } from "@/interfaces/pf2e/actor/creature/sense";
import { Rollable } from "@/interfaces/pf2e/actor/data/base";
import { StatisticModifier } from "@/interfaces/pf2e/actor/modifiers";
import { AbilityString } from "@/interfaces/pf2e/actor/index";
type FamiliarSource = BaseCreatureSource<"familiar", FamiliarSystemSource>;
interface FamiliarSystemSource extends Pick<CreatureSystemSource, "schema"> {
  details: {
    creature: {
      value: string;
    };
  };
  attributes: FamiliarAttributesSource;
  master: {
    id: string | null;
    ability: AbilityString | null;
  };
  customModifiers?: never;
  resources?: never;
  traits?: never;
}
/** The raw information contained within the actor data object for familiar actors. */
interface FamiliarSystemData extends Omit<FamiliarSystemSource, "attributes" | "customModifiers" | "toggles" | "resources" | "traits">, CreatureSystemData {
  details: CreatureSystemData["details"] & {
    creature: {
      value: string;
    };
  };
  actions?: never;
  attack: StatisticModifier & Rollable;
  attributes: FamiliarAttributes;
  master: {
    id: string | null;
    ability: AbilityString | null;
  };
  traits: FamiliarTraitsData;
}
interface FamiliarAttributesSource {
  hp: {
    value: number;
  };
  initiative?: never;
  immunities?: never;
  weaknesses?: never;
  resistances?: never;
}
interface FamiliarAttributes extends CreatureAttributes {
  ac: {
    value: number;
    breakdown: string;
    check?: number;
  };
  initiative?: never;
}
interface FamiliarTraitsData extends CreatureTraitsData {
  senses: CreatureSensePF2e[];
}
export type { FamiliarSource, FamiliarSystemData, FamiliarSystemSource };
