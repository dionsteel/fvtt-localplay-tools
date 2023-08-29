import { BasePhysicalItemSource, Investable, PhysicalItemTraits, PhysicalSystemData, PhysicalSystemSource } from "@/interfaces/pf2e/item/physical";
import type { EquipmentTrait, OtherEquipmentTag } from "./equipment/index";
type EquipmentSource = BasePhysicalItemSource<"equipment", EquipmentSystemSource>;
interface EquipmentSystemSource extends Investable<PhysicalSystemSource> {
  traits: EquipmentTraits;
}
interface EquipmentSystemData extends Omit<EquipmentSystemSource, "hp" | "identification" | "price" | "temporary" | "usage">, Omit<Investable<PhysicalSystemData>, "traits"> {}
interface EquipmentTraits extends PhysicalItemTraits<EquipmentTrait> {
  otherTags: OtherEquipmentTag[];
}
export type { EquipmentSource, EquipmentSystemData, EquipmentSystemSource, EquipmentTrait };
