import { HazardPF2e } from "src/types/foundry/systems/pf2e/module/actor";
import { TraitViewData } from "src/types/foundry/systems/pf2e/module/actor/data/base.ts";
import { ActorSheetDataPF2e } from "src/types/foundry/systems/pf2e/module/actor/sheet/data-types.ts";
import { SaveType } from "src/types/foundry/systems/pf2e/module/actor/types.ts";
import { ActionItemPF2e } from "src/types/foundry/systems/pf2e/module/item";
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
export { HazardActionSheetData, HazardSaveSheetData, HazardSheetData, HazardTrait };
