import { CreatureSheetData } from "@/interfaces/pf2e/actor/creature/index";
import { HitPointsStatistic, PerceptionData } from "@/interfaces/pf2e/actor/data/base";
import { MovementType, SaveType, SkillAbbreviation } from "@/interfaces/pf2e/actor/index";
import { ActionItemPF2e, EffectPF2e, ItemPF2e } from "@/interfaces/pf2e/item";
import { SpellcastingSheetData } from "@/interfaces/pf2e/item/spellcasting-entry/index";
import { ZeroToFour } from "@/interfaces/pf2e/data";
import { NPCAttributes, NPCSaveData, NPCSkillData, NPCSystemData } from "../npc";
import { ImageFilePath, VideoFilePath } from "@/lib/utils";
import { NPCStrike } from "../npc";
import { ActorPF2e } from "../../actor";
import { CreaturePF2e } from "../creature";
// import { TraitTagifyEntry } from "@/interfaces/pf2e/";
// import { ArmorClassTraceData } from "@/interfaces/pf2e/system/statistic";
export interface NPCPF2e extends CreaturePF2e {}

type ArmorClassTraceData = any;
type InitiativeTraceData = any;
interface ActionsDetails {
  label: string;
  actions: NPCSheetItemData<ActionItemPF2e>[];
}
interface NPCActionSheetData {
  passive: ActionsDetails;
  free: ActionsDetails;
  reaction: ActionsDetails;
  action: ActionsDetails;
}
/** Highlight such a statistic if adjusted by data preparation */
interface WithAdjustments {
  adjustedHigher?: boolean;
  adjustedLower?: boolean;
}
interface VariantCloneParams {
  name?: string;
  description?: string;
  img?: {
    actor?: ImageFilePath;
    token?: VideoFilePath;
  };
  save?: boolean;
  keepId?: boolean;
}
type WithRank = {
  icon?: string;
  hover?: string;
  rank: ZeroToFour;
};
type NPCSkillSheetData = NPCSkillData & WithAdjustments & WithRank;
interface NPCSystemSheetData extends NPCSystemData {
  actions: NPCStrikeSheetData[];
  attributes: NPCAttributes & {
    ac: any & WithAdjustments;
    hp: HitPointsStatistic & WithAdjustments;
    perception: PerceptionData & WithAdjustments & WithRank;
  };
  details: NPCSystemData["details"] & {
    level: NPCSystemData["details"]["level"] & WithAdjustments;
    alignment: {
      localizedName?: string;
    };
  };
  sortedSkills: Record<SkillAbbreviation, NPCSkillSheetData>;
  saves: Record<
    SaveType,
    NPCSaveData &
      WithAdjustments &
      WithRank & {
        labelShort?: string;
      }
  >;
  skills: Record<SkillAbbreviation, NPCSkillSheetData>;
}
interface NPCStrikeSheetData extends NPCStrike {
  /** The damage formula of the strike for display on sheets */
  damageFormula?: string;
}
interface NPCSpellcastingSheetData extends SpellcastingSheetData {
  adjustedHigher?: {
    dc: boolean;
    mod: boolean;
  };
  adjustedLower?: {
    dc: boolean;
    mod: boolean;
  };
}
/** Additional fields added in sheet data preparation */
interface NPCSheetData<TActor extends NPCPF2e = NPCPF2e> extends CreatureSheetData<TActor> {
  actions: NPCActionSheetData;
  data: NPCSystemSheetData;
  items: NPCSheetItemData<ItemPF2e>[];
  effectItems: EffectPF2e[];
  spellcastingEntries: SpellcastingSheetData[];
  orphanedSpells: boolean;
  identificationDCs: NPCIdentificationSheetData;
  isNotCommon?: boolean;
  actorSize?: string;
  isWeak?: boolean;
  isElite?: boolean;
  eliteState: "active" | "inactive";
  weakState: "active" | "inactive";
  notAdjusted: boolean;
  hasShield?: boolean;
  hasHardness?: boolean;
  configLootableNpc?: boolean;
  traitTagifyData: any[];
  languageDetails?: string;
  speeds: Record<
    "land",
    NPCSpeedSheetData & {
      details: string;
    }
  > &
    Record<Exclude<MovementType, "land">, NPCSpeedSheetData | null>;
}
interface NPCSpeedSheetData {
  value: number;
  label: string;
  adjustedHigher: boolean;
  adjustedLower: boolean;
}
type RawObject<T> = { [P in keyof T]: T[P] };
type NPCSheetItemData<TItem extends ItemPF2e> = RawObject<TItem> & {
  glyph: string;
  imageUrl: string;
  traits: {
    label: string;
    description?: string;
  }[];
  chatData?: unknown;
  system: {
    bonus?: {
      value: number;
      total?: number;
    };
    isAgile?: boolean;
    prepared?: boolean;
    tradition?: {
      ritual: boolean;
      focus: boolean;
    };
    weaponType?: string;
  };
  hasAura: boolean;
};
interface NPCIdentificationSheetData {
  standard: string | null;
  lore: string;
}
export type {
  NPCActionSheetData,
  NPCIdentificationSheetData,
  NPCSheetData,
  NPCSheetItemData,
  NPCSkillSheetData,
  NPCSpeedSheetData,
  NPCSpellcastingSheetData,
  NPCStrikeSheetData,
  NPCSystemSheetData,
  VariantCloneParams,
};
