import { SetElement } from "@/lib/utils";
import { FEAT_CATEGORIES } from "./values";
import { ConfigPF2e } from "../../config";
type FeatCategory = SetElement<typeof FEAT_CATEGORIES>;
type FeatTrait = keyof ConfigPF2e["PF2E"]["featTraits"];
export type { FeatCategory, FeatTrait };
