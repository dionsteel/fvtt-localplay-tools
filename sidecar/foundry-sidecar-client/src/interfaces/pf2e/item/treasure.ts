import { BasePhysicalItemSource, PhysicalSystemData, PhysicalSystemSource } from "@/interfaces/pf2e/item/physical";
type TreasureSource = BasePhysicalItemSource<"treasure", TreasureSystemSource>;
type TreasureSystemSource = PhysicalSystemSource;
type TreasureSystemData = PhysicalSystemData & {
  equipped: {
    invested?: never;
  };
};
export type { TreasureSource, TreasureSystemData, TreasureSystemSource };
