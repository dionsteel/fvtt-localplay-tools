// import { HazardPF2e } from "@/interfaces/pf2e/actor/hazard";
import { TraitViewData } from "@/interfaces/pf2e/actor/data/base";
import { ActorSheetDataPF2e } from "@/interfaces/pf2e/actor/sheet/data-types";
import { SaveType } from "@/interfaces/pf2e/actor/index";
import { ActionItemPF2e, ActionItemSource, ActionSystemData } from "@/interfaces/pf2e/item/action";
import { ConfigPF2e } from "../../config";
import { HazardSystemData } from "../hazard";
import { ActorPF2e } from "../../actor";
export interface HazardPF2e extends ActorPF2e {
  system: HazardSystemData;
}
interface HazardSheetData extends ActorSheetDataPF2e<HazardPF2e> {
  actions: HazardActionSheetData;
  editing: boolean;
  actorTraits: TraitViewData[];
  rarity: Record<string, string>;
  rarityLabel: string;
  brokenThreshold: number;
  saves: HazardSaveSheetData[];
  stealthDC: number | null;
  hasDefenses: boolean;
  hasHPDetails: boolean;
  hasSaves: boolean;
  hasIWR: boolean;
  hasStealth: boolean;
  hasStealthDescription: boolean;
  hasDescription: boolean;
  hasDisable: boolean;
  hasRoutineDetails: boolean;
  hasResetDetails: boolean;
}
interface HazardActionSheetData {
  reaction: ActionItemPF2e[];
  action: ActionItemPF2e[];
}
interface HazardSaveSheetData {
  label: string;
  type: SaveType;
  mod?: number;
}
type HazardTrait = keyof ConfigPF2e["PF2E"]["hazardTraits"];
export type { HazardActionSheetData, HazardSaveSheetData, HazardSheetData, HazardTrait };
