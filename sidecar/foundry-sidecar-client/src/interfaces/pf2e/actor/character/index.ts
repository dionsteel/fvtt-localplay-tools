import { HitPointsSummary } from "@/interfaces/pf2e/actor/base";
import { AbilityString, SkillLongForm } from "@/interfaces/pf2e/actor/index";
import { ZeroToFour } from "@/interfaces/pf2e/data";
import { Statistic } from "@/interfaces/pf2e/system/statistic/index";
interface CharacterHitPointsSummary extends HitPointsSummary {
  recoveryMultiplier: number;
  recoveryAddend: number;
}
type CharacterSkill = Statistic & {
  rank: ZeroToFour;
  ability: AbilityString;
};
type CharacterSkills = Record<SkillLongForm, CharacterSkill> & Partial<Record<string, CharacterSkill>>;
/** Single source of a Dexterity modifier cap to Armor Class, including the cap value itself. */
interface DexterityModifierCapData {
  /** The numeric value that constitutes the maximum Dexterity modifier. */
  value: number;
  /** The source of this Dex cap - usually the name of an armor, a monk stance, or a spell. */
  source: string;
}
export type { CharacterHitPointsSummary, CharacterSkill, CharacterSkills, DexterityModifierCapData };
