import { BasePhysicalItemSource, PhysicalItemTraits, PhysicalSystemData, PhysicalSystemSource } from "@/interfaces/pf2e/item/physical";
import { SpellSource } from "@/interfaces/pf2e/item/spell";
import type { ConsumableTrait, OtherConsumableTag } from "./consumable/index";
import { ConfigPF2e } from "../config";
type ConsumableSource = BasePhysicalItemSource<"consumable", ConsumableSystemSource>;
type ConsumableCategory = keyof ConfigPF2e["PF2E"]["consumableTypes"];
interface ConsumableTraits extends PhysicalItemTraits<ConsumableTrait> {
  otherTags: OtherConsumableTag[];
}
interface ConsumableSystemSource extends PhysicalSystemSource {
  traits: ConsumableTraits;
  consumableType: {
    value: ConsumableCategory;
  };
  charges: {
    value: number;
    max: number;
  };
  consume: {
    value: string;
  };
  autoDestroy: {
    value: boolean;
  };
  spell: SpellSource | null;
}
interface ConsumableSystemData extends Omit<ConsumableSystemSource, "hp" | "identification" | "price" | "temporary" | "usage">, Omit<PhysicalSystemData, "traits"> {}
export type { ConsumableCategory, ConsumableSource, ConsumableSystemData, ConsumableSystemSource, ConsumableTrait };
