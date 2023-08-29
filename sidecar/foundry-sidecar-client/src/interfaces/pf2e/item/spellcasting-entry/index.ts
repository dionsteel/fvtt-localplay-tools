import { ActorPF2e } from "@/interfaces/pf2e/actor";
import { AbilityString } from "@/interfaces/pf2e/actor/index";
import { PhysicalItemPF2e } from "@/interfaces/pf2e/item/physical";
// import { SpellPF2e } from "@/interfaces/pf2e/item/spell/document";
import { MagicTradition } from "@/interfaces/pf2e/item/spell/index";
import { ZeroToTen } from "@/interfaces/pf2e/data";
import { Statistic, StatisticChatData } from "@/interfaces/pf2e/system/statistic/index";
// import { SpellCollection } from "./collection";
import { SpellcastingEntrySystemData } from "../spellcasting-entry";
import { ConfigPF2e, RollMode } from "../../config";
import { SpellPF2e } from "..";
interface BaseSpellcastingEntry<TActor extends ActorPF2e | null = ActorPF2e | null> {
  id: string;
  name: string;
  actor: TActor;
  sort: number;
  category: SpellcastingCategory;
  ability?: AbilityString;
  isFlexible: boolean;
  isFocusPool: boolean;
  isInnate: boolean;
  isPrepared: boolean;
  isRitual: boolean;
  isSpontaneous: boolean;
  statistic?: Statistic | null;
  tradition: MagicTradition | null;
  spells: any| null;
  system?: SpellcastingEntrySystemData;
}
interface SpellcastingEntry<TActor extends ActorPF2e | null> extends BaseSpellcastingEntry<TActor> {
  ability: AbilityString;
  statistic: Statistic;
}
type SpellcastingCategory = keyof ConfigPF2e["PF2E"]["preparationType"];
interface CastOptions {
  slot?: number;
  /** The spell level to consume to cast the spell at */
  level?: number;
  message?: boolean;
  rollMode?: RollMode;
}
interface SpellcastingEntryPF2eCastOptions extends CastOptions {
  consume?: boolean;
}
type UnusedProperties = "actor" | "spells" | "getSheetData" | "cast" | "canCast";
type OptionalProperties = "isFlexible" | "isFocusPool" | "isInnate" | "isPrepared" | "isRitual" | "isSpontaneous";
/** Spell list render data for a `BaseSpellcastingEntry` */
interface SpellcastingSheetData extends Omit<BaseSpellcastingEntry<ActorPF2e>, "statistic" | OptionalProperties | UnusedProperties> {
  statistic: StatisticChatData | null;
  hasCollection: boolean;
  flexibleAvailable?: {
    value: number;
    max: number;
  } | null;
  levels: SpellcastingSlotRank[];
  spellPrepList: Record<number, SpellPrepEntry[]> | null;
  isFlexible?: boolean;
  isFocusPool?: boolean;
  isInnate?: boolean;
  isPrepared?: boolean;
  isRitual?: boolean;
  isSpontaneous?: boolean;
  showSlotlessLevels?: boolean;
}
interface SpellcastingSlotRank {
  label: string;
  level: ZeroToTen;
  isCantrip: boolean;
  /**
   * Number of uses and max slots or spells.
   * If this is null, allowed usages are infinite.
   * If value is undefined then it's not expendable, it's a count of total spells instead.
   */
  uses?: {
    value?: number;
    max: number;
  };
  active: (ActiveSpell | null)[];
}
interface SpellPrepEntry {
  spell: SpellPF2e;
  signature?: boolean;
}
interface ActiveSpell {
  spell: SpellPF2e;
  /** The level at which a spell is cast (if prepared or automatically heighted) */
  castLevel?: number;
  expended?: boolean;
  /** Is this spell marked as signature/collection */
  signature?: boolean;
  /** Is the spell not actually of this level? */
  virtual?: boolean;
}
export type {
  ActiveSpell,
  BaseSpellcastingEntry,
  CastOptions,
  SpellPrepEntry,
  SpellcastingCategory,
  SpellcastingEntry,
  SpellcastingEntryPF2eCastOptions,
  SpellcastingSheetData,
  SpellcastingSlotRank,
};
