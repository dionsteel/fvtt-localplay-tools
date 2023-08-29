import { Action5e } from "./mixins/action";
import { ActivatedEffect5e } from "./mixins/activated-effect";
import { ItemWithDescription } from "./mixins/item-description";

export interface SpellComponents5e {
  vocal: boolean; //                              Does this spell require vocal components?
  somatic: boolean; //                            Does this spell require somatic components?
  material: boolean; //                           Does this spell require material components?
  ritual: boolean; //                             Can this spell be cast as a ritual?
  concentration: boolean; //                      Does this spell require concentration?
}

export interface SpellMaterialComponents5e {
  value: string; //                               Description of the material components required for casting.
  consumed: boolean; //                           Are these material components consumed during casting?
  cost: number; //                                GP cost for the required components.
  supply: number; //                              Quantity of this component available.
}

export interface SpellPreparationMode5e {
  mode: string; //                                Spell preparation mode as defined in `DND5E.spellPreparationModes`.
  prepared: boolean; //                           Is the spell currently prepared?
}

export interface SpellScaling5e {
  mode: string; //                                Spell scaling mode as defined in `DND5E.spellScalingModes`.
  formula: string; //                             Dice formula used for scaling.
}

export interface Spell5e extends ItemWithDescription, ActivatedEffect5e, Action5e {
  level: number; //                               Base level of the spell.
  school: string; //                              Magical school to which this spell belongs.
  components: SpellComponents5e; //               General components and tags for this spell.
  materials: SpellMaterialComponents5e; //        Details on material components required for this spell.
  preparation: SpellPreparationMode5e; //         Details on how this spell is prepared.
  scaling: SpellScaling5e; //                     Details on how casting at higher levels affects this spell.
  get chatProperties(): string[]; //              Properties displayed in chat.
}
