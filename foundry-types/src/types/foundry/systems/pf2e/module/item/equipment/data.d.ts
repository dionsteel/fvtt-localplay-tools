import { BasePhysicalItemSource, Investable, PhysicalItemTraits, PhysicalSystemData, PhysicalSystemSource } from "src/types/pf2e/module/item/physical/data.ts";
import type { EquipmentTrait, OtherEquipmentTag } from "./types.ts";
type EquipmentSource = BasePhysicalItemSource<"equipment", EquipmentSystemSource>;
interface EquipmentSystemSource extends Investable<PhysicalSystemSource> {
    traits: EquipmentTraits;
}
interface EquipmentSystemData extends Omit<EquipmentSystemSource, "hp" | "identification" | "price" | "temporary" | "usage">, Omit<Investable<PhysicalSystemData>, "traits"> {
}
interface EquipmentTraits extends PhysicalItemTraits<EquipmentTrait> {
    otherTags: OtherEquipmentTag[];
}
export { EquipmentSource, EquipmentSystemData, EquipmentSystemSource, EquipmentTrait };
