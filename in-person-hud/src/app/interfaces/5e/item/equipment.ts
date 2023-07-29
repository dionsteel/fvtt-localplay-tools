import { Action5e } from "./mixins/action";
import { ActivatedEffect5e } from "./mixins/activated-effect";
import { EquippableItem } from "./mixins/equippable-item";
import { ItemWithDescription } from "./mixins/item-description";
import { EquipmentArmour, MountableEquipment } from "./mixins/mountable";
import { PhysicalItem5e } from "./mixins/physical";

export interface EquipmentSpeed {
  value: number; //                     Speed granted by this piece of equipment measured in feet or meters depending on system setting.
  conditions: number; //                Conditions that may affect item's speed.
}

export interface EquipmentItemArmour extends EquipmentArmour {
  /** Equipment type as defined in `DND5E.equipmentTypes`. */
  type: string;
  /** Base armor class or shield bonus. */
  dex: number;
  /** Maximum dex bonus added to armor class. */
  value: number;
}
export interface Equipment5e extends ItemWithDescription, PhysicalItem5e, EquippableItem, ActivatedEffect5e, Action5e, MountableEquipment {
  /** Armor details and equipment type information. */
  armor: EquipmentItemArmour;
  /** Base armor as defined in `DND5E.armorIds` for determining proficiency. */
  baseItem: string;
  /**  Speed granted by a piece of vehicle equipment. */
  speed: EquipmentSpeed;
  /** Minimum strength required to use a piece of armor. */
  strength: number;
  /** Does this equipment grant disadvantage on stealth checks when used? */
  stealth: boolean;
  /** Does the owner have proficiency in this piece of equipment? */
  proficient: boolean;
  /** Properties displayed in chat. */
  get chatProperties(): string[];
  /** Is this Item any of the armor subtypes? */
  get isArmor(): boolean;

  /**
   * Is this item a separate large object like a siege engine or vehicle component that is
   * usually mounted on fixtures rather than equipped, and has its own AC and HP?
   */
  get isMountable(): boolean;
}
