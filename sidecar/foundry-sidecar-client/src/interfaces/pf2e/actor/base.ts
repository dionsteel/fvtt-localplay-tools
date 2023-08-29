import {
  ActorAlliance,
  ActorDimensions,
  ActorInstances,
  ApplyDamageParams,
  AttackItem,
  AuraData,
  CheckContext,
  CheckContextParams,
  DamageRollContextParams,
  EmbeddedItemInstances,
  RollContext,
  RollContextParams,
  SaveType,
} from "@/interfaces/pf2e/actor/types";
// import { AbstractEffectPF2e } from "@/interfaces/pf2e/item/abstract-effect";
export interface AbstractEffectPF2e extends ItemWrapPF2e<AbstractEffectSystemData> {}
export interface ConditionPF2e extends ItemWrapPF2e<ConditionSystemData> {}
import { PhysicalItemPF2e } from "@/interfaces/pf2e/item/physical";
import { ArmorPF2e, ContainerPF2e, ItemPF2e, ItemWrapPF2e } from "@/interfaces/pf2e/item";
import { ConditionKey, ConditionSlug } from "@/interfaces/pf2e/item/condition/index";
import { ConditionSource, ConditionSystemData } from "@/interfaces/pf2e/item/condition";
import { ItemSourcePF2e, ItemType, PhysicalItemSource } from "@/interfaces/pf2e/item/data/index";
import { EffectSource } from "@/interfaces/pf2e/item/effect";
// import type { ActiveEffectPF2e } from "@/interfaces/pf2e/active-effect";
// import { TokenPF2e } from "@/interfaces/pf2e/canvas/index";
import { AppliedDamageFlag } from "@/interfaces/pf2e/chat-message";
import { Size } from "@/interfaces/pf2e/data";
// import { ScenePF2e, any, UserPF2e } from "@/interfaces/pf2e/documents";
// import { CombatantPF2e, EncounterPF2e } from "@/interfaces/pf2e/";
import { RuleElementSynthetics } from "@/interfaces/pf2e/rules/index";
import { RuleElementPF2e } from "@/interfaces/pf2e/rules";
import { DamageType } from "@/interfaces/pf2e/system/damage/index";
import { ArmorStatistic } from "@/interfaces/pf2e/system/statistic/armor-class";
import { Statistic, StatisticCheck, StatisticDifficultyClass } from "@/interfaces/pf2e/system/statistic/index";
// import { EnrichmentOptionsPF2e } from "@/interfaces/pf2e/system/text-editor";
import { Abilities, CreatureSkills, VisionLevel } from "./creature";
import { GetReachParameters, ModeOfBeing } from "./creature/index";
import { ActorFlagsPF2e, ActorSystemData, PrototypeTokenPF2e, RollOptionFlags, StrikeData } from "./data/base.js";
import { ActorSourcePF2e, ActorType } from "./data/index.js";
// import { ActorInitiative } from "./initiative";
// import { ActorInventory } from "./inventory/index";
import { ActorSheetPF2e } from "./sheet/base.js";
// import { ActorSpellcasting } from "./spellcasting";
import { ActorWrapPF2e } from "..";
import { AbstractEffectSystemData } from "../item/abstract-effect";

interface HitPointsSummary {
  value: number;
  max: number;
  temp: number;
  unrecoverable: number;
  negativeHealing: boolean;
}
interface ActorUpdateContext<TParent extends any | null> extends Object {
  damageTaken?: number;
  damageUndo?: boolean;
}
/** A `Proxy` to to get Foundry to construct `ActorPF2e` subclasses */
// declare const ActorProxyPF2e: typeof ActorPF2e;
export type { ActorUpdateContext, HitPointsSummary };
