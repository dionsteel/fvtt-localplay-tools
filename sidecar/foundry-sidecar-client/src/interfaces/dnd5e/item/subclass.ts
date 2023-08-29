import { SpellcastingAbility5e } from "./class";
import { ItemWithDescription } from "./mixins/item-description";

export interface Subclass5e extends ItemWithDescription {
  identifier: string; //                        Identifier slug for this subclass.
  classIdentifier: string; //                   Identifier slug for the class with which this subclass should be associated.
  spellcasting: SpellcastingAbility5e; //       Details on subclass's spellcasting ability.
}
