import { HoldsCurrency } from "./mixins/currency";
import { EquippableItem } from "./mixins/equippable-item";
import { ItemWithDescription } from "./mixins/item-description";
import { PhysicalItem5e } from "./mixins/physical";

/**
 * Data definition for Backpack items.
 * @mixes ItemDescriptionTemplate
 * @mixes PhysicalItemTemplate
 * @mixes EquippableItemTemplate
 * @mixes CurrencyTemplate
 *
 * @property {object} capacity
 * @property {string} capacity.type
 * @property {number} capacity.value
 * @property {boolean} capacity.weightless
 */

export interface ContainerCapacity {
  type: string; //    Method for tracking max capacity as defined in `DND5E.itemCapacityTypes`.
  value: number; //    Total amount of the type this container can carry.
  weightless: boolean; //    Does the weight of the items in the container carry over to the actor?
}
export interface Container5e extends ItemWithDescription, PhysicalItem5e, EquippableItem, HoldsCurrency {
  capacity: ContainerCapacity; //  Information on container's carrying capacity.
}
