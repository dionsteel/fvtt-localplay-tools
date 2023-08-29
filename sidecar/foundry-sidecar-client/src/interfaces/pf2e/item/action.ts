import { ActionType, BaseItemSourcePF2e, Frequency, FrequencySource, ItemSystemData, ItemSystemSource, ItemTraits } from "@/interfaces/pf2e/item/data/base";
import { OneToThree } from "@/interfaces/pf2e/data";
import { ConfigPF2e } from "../config";
import { ItemWrapPF2e } from ".";
type ActionItemSource = BaseItemSourcePF2e<"action", ActionSystemSource>;
type ActionTrait = keyof ConfigPF2e["PF2E"]["actionTraits"];
interface ActionTraits extends ItemTraits<ActionTrait> {
  rarity?: never;
}
interface ActionSystemSource extends ItemSystemSource {
  traits: ActionTraits;
  actionType: {
    value: ActionType;
  };
  actions: {
    value: OneToThree | null;
  };
  category: ActionCategory | null;
  requirements: {
    value: string;
  };
  trigger: {
    value: string;
  };
  deathNote: boolean;
  frequency?: FrequencySource;
  level?: never;
}
interface ActionSystemData extends ActionSystemSource, Omit<ItemSystemData, "level" | "traits"> {
  frequency?: Frequency;
}
type ActionCategory = keyof ConfigPF2e["PF2E"]["actionCategories"];

export interface ActionItemPF2e extends ItemWrapPF2e<ActionSystemData> {}

export type { ActionCategory, ActionItemSource, ActionSystemData, ActionTrait, ActionTraits };
