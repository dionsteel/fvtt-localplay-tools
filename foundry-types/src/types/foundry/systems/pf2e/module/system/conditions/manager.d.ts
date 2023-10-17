import { ActorPF2e } from "src/types/foundry/systems/pf2e/module/actor";
import { ConditionPF2e } from "src/types/foundry/systems/pf2e/module/item";
import { ConditionSource } from "src/types/foundry/systems/pf2e/module/item/condition/data.ts";
import { ConditionSlug } from "src/types/foundry/systems/pf2e/module/item/condition/types.ts";
import { TokenPF2e } from "src/types/foundry/systems/pf2e/module/canvas/index.ts";
/** A helper class to manage PF2e Conditions */
export declare class ConditionManager {
    #private;
    static conditions: Map<ConditionSlug | ItemUUID, ConditionPF2e<null>>;
    private static CONDITION_SOURCES?;
    /** Gets a list of condition slugs. */
    static get conditionsSlugs(): string[];
    static initialize(force?: boolean): Promise<void>;
    /**
     * Get a condition using the condition name.
     * @param slug A condition slug
     */
    static getCondition(slug: ConditionSlug, modifications?: DeepPartial<ConditionSource>): ConditionPF2e<null>;
    static getCondition(slug: string, modifications?: DeepPartial<ConditionSource>): ConditionPF2e<null> | null;
    static updateConditionValue(itemId: string, actor: ActorPF2e, value: number): Promise<void>;
    static updateConditionValue(itemId: string, token: TokenPF2e, value: number): Promise<void>;
    static updateConditionValue(itemId: string, actorOrToken: ActorPF2e | TokenPF2e, value: number): Promise<void>;
}
