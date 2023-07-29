import { Action5e } from "./mixins/action";
import { ActivatedEffect5e } from "./mixins/activated-effect";
import { EquippableItem } from "./mixins/equippable-item";
import { ItemWithDescription } from "./mixins/item-description";
import { MountableEquipment } from "./mixins/mountable";
import { PhysicalItem5e } from "./mixins/physical";
/**
 * Data definition for Weapon items.
 * @mixes ItemDescriptionTemplate
 * @mixes PhysicalItemTemplate
 * @mixes EquippableItemTemplate
 * @mixes ActivatedEffectTemplate
 * @mixes ActionTemplate
 * @mixes MountableTemplate
 *
 * @property {string} weaponType   Weapon category as defined in `DND5E.weaponTypes`.
 * @property {string} baseItem     Base weapon as defined in `DND5E.weaponIds` for determining proficiency.
 * @property {object} properties   Mapping of various weapon property booleans.
 * @property {boolean} proficient  Does the weapon's owner have proficiency?
 */

export interface Weapon5e extends ItemWithDescription, PhysicalItem5e, EquippableItem, ActivatedEffect5e, Action5e, MountableEquipment {
  weaponType: string; //   Weapon category as defined in `DND5E.weaponTypes`.
  baseItem: string; //     Base weapon as defined in `DND5E.weaponIds` for determining proficiency.
  properties: object; //   Mapping of various weapon property booleans.
  proficient: boolean; //  Does the weapon's owner have proficiency?

  get chatProperties(): string[]; //      Properties displayed in chat.

  get _typeAbilityMod(): "str" | "dex";
  get _typeCriticalThreshold(): any;

  /**
   * Is this item a separate large object like a siege engine or vehicle component that is
   * usually mounted on fixtures rather than equipped, and has its own AC and HP?
   */
  get isMountable(): boolean;
}
