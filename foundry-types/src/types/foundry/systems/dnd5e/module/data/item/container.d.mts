/**
 * Data definition for Backpack items.
 * @mixes ItemDescriptionTemplate
 * @mixes PhysicalItemTemplate
 * @mixes EquippableItemTemplate
 * @mixes CurrencyTemplate
 *
 * @property {object} capacity              Information on container's carrying capacity.
 * @property {string} capacity.type         Method for tracking max capacity as defined in `DND5E.itemCapacityTypes`.
 * @property {number} capacity.value        Total amount of the type this container can carry.
 * @property {boolean} capacity.weightless  Does the weight of the items in the container carry over to the actor?
 */
declare class ContainerData extends SystemDataModel {
    /** @inheritdoc */
    static defineSchema(): DataSchema;
}
import SystemDataModel from "../abstract";
