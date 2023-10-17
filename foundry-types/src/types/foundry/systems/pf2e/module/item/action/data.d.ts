import { ActionType, BaseItemSourcePF2e, Frequency, FrequencySource, ItemSystemData, ItemSystemSource, ItemTraits } from "src/types/foundry/systems/pf2e/module/item/data/base.ts";
import { OneToThree } from "src/types/foundry/systems/pf2e/module/data.ts";
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
export { ActionCategory, ActionItemSource, ActionSystemData, ActionTrait, ActionTraits };
