import { EquipmentTrait } from "@/interfaces/pf2e/item/equipment";
import { BasePhysicalItemSource, Investable, PhysicalItemTraits, PhysicalSystemData, PhysicalSystemSource } from "@/interfaces/pf2e/item/physical";
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
interface ContainerSystemData extends Omit<ContainerSystemSource, "hp" | "identification" | "price" | "temporary" | "usage">, Omit<Investable<PhysicalSystemData>, "traits"> {}
export type { ContainerSource, ContainerSystemData };
