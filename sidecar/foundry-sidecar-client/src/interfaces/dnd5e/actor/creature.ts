import {
  AttackBonusesData,
  SkillData,
  SpellSlotData,
  CreatureAttributes,
  CreatureBonuses,
  CreatureTraits,
  CreatureDetails,
  CommonAttributes,
  CommonDetails,
} from "./attributes";
import { ActorData } from "./common";

export interface CreatureData extends ActorData {
  attributes: CommonAttributes & CreatureAttributes;
  details: CommonDetails & CreatureDetails;
  bonuses: CreatureBonuses;
  skills: Record<string, SkillData>; //  Actor's skills.
  spells: Record<string, SpellSlotData>; //  Actor's spell slots.
  traits: CreatureTraits;
}
