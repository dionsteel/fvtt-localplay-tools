import { ActorPF2e } from "src/types/foundry/systems/pf2e/module/actor";
import { AbstractEffectPF2e, EffectBadge } from "src/types/foundry/systems/pf2e/module/item/abstract-effect/index.ts";
import { UserPF2e } from "src/types/foundry/systems/pf2e/module/user/index.ts";
import { AfflictionFlags, AfflictionSource, AfflictionSystemData } from "./data.ts";
import { AfflictionDamageTemplate, DamageRollContext } from "src/types/foundry/systems/pf2e/module/system/damage/index.ts";
declare class AfflictionPF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends AbstractEffectPF2e<TParent> {
    get badge(): EffectBadge;
    get stage(): number;
    increase(): Promise<void>;
    decrease(): Promise<void>;
    prepareBaseData(): void;
    /** Retrieves the damage for a specific stage */
    getStageDamage(stage: number): AfflictionDamage | null;
    createStageMessage(): Promise<void>;
    protected _preUpdate(changed: DeepPartial<this["_source"]>, options: DocumentModificationContext<TParent>, user: UserPF2e): Promise<boolean | void>;
    protected _onCreate(data: AfflictionSource, options: DocumentModificationContext<TParent>, userId: string): void;
    _onUpdate(changed: DeepPartial<this["_source"]>, options: DocumentModificationContext<TParent>, userId: string): void;
}
interface AfflictionPF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends AbstractEffectPF2e<TParent> {
    flags: AfflictionFlags;
    readonly _source: AfflictionSource;
    system: AfflictionSystemData;
}
interface AfflictionDamage {
    template: AfflictionDamageTemplate;
    context: DamageRollContext;
}
export { AfflictionPF2e };
