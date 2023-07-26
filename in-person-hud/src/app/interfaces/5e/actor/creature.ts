import { AttackBonusesData, SkillData, SpellSlotData, CreatureAttributes, CreatureBonuses, CreatureTraits } from "./attributes";
import { ActorData } from "./common";

export interface CreatureData extends ActorData {
  attributes: CreatureAttributes;
  bonuses: CreatureBonuses;
  skills: Record<string, SkillData>; //  Actor's skills.
  spells: Record<string, SpellSlotData>; //  Actor's spell slots.
  traits: CreatureTraits;
}
