import { EquipmentTrait } from "src/types/pf2e/module/item/equipment/data.ts";
import { BasePhysicalItemSource, Investable, PhysicalItemTraits, PhysicalSystemData, PhysicalSystemSource } from "src/types/pf2e/module/item/physical/data.ts";
type ContainerSource = BasePhysicalItemSource<"backpack", ContainerSystemSource>;
type ContainerTraits = PhysicalItemTraits<EquipmentTrait>;
interface ContainerSystemSource extends Investable<PhysicalSystemSource> {
    traits: ContainerTraits;
    stowing: boolean;
    bulkCapacity: {
        value: string | null;
    };
    collapsed: boolean;
}
interface ContainerSystemData extends Omit<ContainerSystemSource, "hp" | "identification" | "price" | "temporary" | "usage">, Omit<Investable<PhysicalSystemData>, "traits"> {
}
export { ContainerSource, ContainerSystemData };
