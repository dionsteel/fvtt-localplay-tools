import { CreatureTrait } from "@/interfaces/pf2e/actor/creature/index";
import { ActionTrait } from "@/interfaces/pf2e/item/action";
import { NPCAttackTrait } from "@/interfaces/pf2e/item/melee";
import { PhysicalItemTrait } from "@/interfaces/pf2e/item/physical";
import { DocumentSchemaRecord, OneToThree, Rarity } from "@/interfaces/pf2e/data";
import { RuleElementSource } from "@/interfaces/pf2e/rules/rule-element";
import { ItemType } from "./index";
import { KingmakerTrait } from "@/interfaces/pf2e/item/campaign-feature/index";
import { ConfigPF2e } from "../../config";
import { PartialDeep as DeepPartial } from "@/lib/utils";
interface BaseItemSourcePF2e<TType extends ItemType, TSystemSource extends ItemSystemSource = ItemSystemSource> {
  flags: ItemSourceFlagsPF2e;
  // [k: string]: any;
}
type ItemTrait = ActionTrait | CreatureTrait | PhysicalItemTrait | NPCAttackTrait | KingmakerTrait;
type ActionType = keyof ConfigPF2e["PF2E"]["actionTypes"];
interface ActionCost {
  type: Exclude<ActionType, "passive">;
  value: OneToThree | null;
}
interface ItemTraits<T extends ItemTrait = ItemTrait> {
  value: T[];
  rarity?: Rarity;
}
interface ItemFlagsPF2e extends Record<string, any> {
  pf2e: {
    rulesSelections: Record<string, string | number | object>;
    itemGrants: Record<string, ItemGrantData>;
    grantedBy: ItemGrantData | null;
    [key: string]: unknown;
  };
}
interface ItemSourceFlagsPF2e extends Record<string, any> {
  pf2e?: {
    rulesSelections?: Record<string, string | number | object>;
    itemGrants?: Record<string, ItemGrantSource>;
    grantedBy?: ItemGrantSource | null;
    [key: string]: unknown;
  };
}
type ItemGrantData = Required<ItemGrantSource>;
interface ItemGrantSource {
  id: string;
  onDelete?: ItemGrantDeleteAction;
}
type ItemGrantDeleteAction = "cascade" | "detach" | "restrict";
interface ItemSystemSource {
  level?: {
    value: number;
  };
  description: {
    gm: string;
    value: string;
  };
  source: {
    value: string;
  };
  traits?: ItemTraits;
  options?: {
    value: string[];
  };
  rules: RuleElementSource[];
  slug: string | null;
  schema?: DocumentSchemaRecord;
}
type ItemSystemData = Omit<ItemSystemSource, "schema">;
interface FrequencySource {
  value?: number;
  max: number;
  /** Gap between recharges as an ISO8601 duration, or "day" for daily prep. */
  per: keyof ConfigPF2e["PF2E"]["frequencies"];
}
interface Frequency extends FrequencySource {
  value: number;
}
export type {
  ActionCost,
  ActionType,
  BaseItemSourcePF2e,
  Frequency,
  FrequencySource,
  ItemFlagsPF2e,
  ItemGrantData,
  ItemGrantDeleteAction,
  ItemGrantSource,
  ItemSystemData,
  ItemSystemSource,
  ItemTrait,
  ItemTraits,
};
