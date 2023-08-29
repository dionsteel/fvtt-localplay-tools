import { ItemWrapPF2e } from "..";
import { ConfigPF2e } from "../../config";
import { AbilitySystemData } from "./data";

export type ActionCategory = keyof ConfigPF2e["PF2E"]["actionCategories"];
export type ActionTrait = keyof ConfigPF2e["PF2E"]["actionTraits"];
