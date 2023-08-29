import { AdvancementMixin } from "./background";
import { ItemWithDescription } from "./mixins/item-description";

export interface ClassItem5e extends ItemWithDescription, AdvancementMixin {
  levels: number; // Current number of levels in this class.
  identifier: string; // Identifier slug for this class.
  hitDice: string; // Denomination of hit dice available as defined in `DND5E.hitDieTypes`.
  hitDiceUsed: number; // Number of hit dice consumed.
  saves: string[]; // Savings throws in which this class grants proficiency.
  skills: ClassSkillChoices5e; // Available class skills and selected skills.
  spellcasting: SpellcastingAbility5e; // Details on class's spellcasting ability.
}

export interface ClassSkillChoices5e {
  number: number; //  Number of skills selectable by the player.
  choices: string[]; //  List of skill keys that are valid to be chosen.
  value: string[]; //  List of skill keys the player has chosen.
}

export interface SpellcastingAbility5e {
  type: string;
  levels: number;
  progression: string; //  Spell progression granted by class as from `DND5E.spellProgression`.
  ability: string; //  Ability score to use for spellcasting.
}
