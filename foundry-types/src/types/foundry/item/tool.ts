import { EquippableItem } from "./mixins/equippable-item";
import { ItemWithDescription } from "./mixins/item-description";
import { PhysicalItem5e } from "./mixins/physical";

export interface ToolItem5e extends ItemWithDescription, PhysicalItem5e, EquippableItem {
  toolType: string; //                  Tool category as defined in `DND5E.toolTypes`.
  baseItem: string; //                  Base tool as defined in `DND5E.toolIds` for determining proficiency.
  ability: string; //                   Default ability when this tool is being used.
  chatFlavor: string; //                Additional text added to chat when this tool is used.
  proficient: number; //                Level of proficiency in this tool as defined in `DND5E.proficiencyLevels`.
  bonus: string; //                     Bonus formula added to tool rolls.
  get chatProperties(): string[]; //    Properties displayed in chat
  get abilityMod(): string; //          Which ability score modifier is used by this item?
}
