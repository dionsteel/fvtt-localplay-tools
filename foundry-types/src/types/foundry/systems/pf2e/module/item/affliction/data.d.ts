import { SaveType } from "src/types/foundry/systems/pf2e/module/actor/types.ts";
import { AbstractEffectSystemData, AbstractEffectSystemSource, EffectAuraData, EffectContextData, EffectTraits, TimeUnit } from "src/types/foundry/systems/pf2e/module/item/abstract-effect/index.ts";
import { ConditionSlug } from "src/types/foundry/systems/pf2e/module/item/condition/index.ts";
import { BaseItemSourcePF2e, ItemFlagsPF2e } from "src/types/foundry/systems/pf2e/module/item/data/base.ts";
import { DamageCategoryUnique, DamageType } from "src/types/foundry/systems/pf2e/module/system/damage/index.ts";
type AfflictionSource = BaseItemSourcePF2e<"affliction", AfflictionSystemSource> & {
    flags: DeepPartial<AfflictionFlags>;
};
type AfflictionFlags = ItemFlagsPF2e & {
    pf2e: {
        aura?: EffectAuraData;
    };
};
interface AfflictionSystemSource extends AbstractEffectSystemSource {
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
interface AfflictionSystemData extends Omit<AfflictionSystemSource, "fromSpell">, Omit<AbstractEffectSystemData, "level" | "traits"> {
}
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
export { AfflictionConditionData, AfflictionDamage, AfflictionFlags, AfflictionOnset, AfflictionSource, AfflictionStageData, AfflictionSystemData, };
