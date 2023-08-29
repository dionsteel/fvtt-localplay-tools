import { SaveType } from "@/interfaces/pf2e/actor/index";
import { AbstractEffectSystemData, AbstractEffectSystemSource, EffectAuraData, EffectContextData, EffectTraits, TimeUnit } from "@/interfaces/pf2e/item/abstract-effect";
import { ConditionSlug } from "@/interfaces/pf2e/item/condition/index";
import { BaseItemSourcePF2e, ItemFlagsPF2e, ItemSystemSource } from "@/interfaces/pf2e/item/data/base";
import { DamageCategoryUnique, DamageType } from "@/interfaces/pf2e/system/damage/index";
import { ItemUUID, PartialDeep } from "@/lib/utils";
type AfflictionSource = BaseItemSourcePF2e<"affliction", AfflictionSystemSource> & {
  flags: PartialDeep<AfflictionFlags>;
};
type AfflictionFlags = ItemFlagsPF2e & {
  pf2e: {
    aura?: EffectAuraData;
  };
};
interface AfflictionSystemSource extends AbstractEffectSystemSource, ItemSystemSource {
  level: {
    value: number;
  };
  traits: EffectTraits;
  save: {
    type: SaveType;
    value: number;
  };
  stage: number;
  stages: Record<string, AfflictionStageData>;
  onset?: AfflictionOnset;
  duration: {
    value: number;
    unit: TimeUnit | "unlimited";
    expiry?: null;
  };
  /** Origin, target, and roll context of the action that spawned this effect */
  context: EffectContextData | null;
}
interface AfflictionSystemData extends Omit<AfflictionSystemSource, "fromSpell">, Omit<AbstractEffectSystemData, "level" | "traits"> {}
interface AfflictionOnset {
  value: number;
  unit: TimeUnit;
}
interface AfflictionDamage {
  formula: string;
  type: DamageType;
  category?: DamageCategoryUnique | null;
}
interface AfflictionStageData {
  damage: Record<string, AfflictionDamage>;
  conditions: Record<string, AfflictionConditionData>;
  effects: AfflictionEffectData[];
}
interface AfflictionConditionData {
  slug: ConditionSlug;
  value?: number;
  /** Whether the condition should disappear when the stage changes. Defaults to true */
  linked?: boolean;
}
interface AfflictionEffectData {
  uuid: ItemUUID;
}
export type { AfflictionConditionData, AfflictionDamage, AfflictionFlags, AfflictionOnset, AfflictionSource, AfflictionStageData, AfflictionSystemData };
