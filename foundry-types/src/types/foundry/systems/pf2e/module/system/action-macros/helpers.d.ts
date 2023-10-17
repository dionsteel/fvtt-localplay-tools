import { ActorPF2e } from "src/types/foundry/systems/pf2e/module/actor";
import { ModifierPF2e } from "src/types/foundry/systems/pf2e/module/actor/modifiers.ts";
import { ItemPF2e, WeaponPF2e } from "src/types/foundry/systems/pf2e/module/item";
import { WeaponTrait } from "src/types/foundry/systems/pf2e/module/item/weapon/types.ts";
import { RollNotePF2e } from "src/types/foundry/systems/pf2e/module/notes.ts";
import { TokenDocumentPF2e } from "src/types/foundry/systems/pf2e/module/scene/index.ts";
import { CheckType } from "src/types/foundry/systems/pf2e/module/system/check/index.ts";
import { DegreeOfSuccessString } from "src/types/foundry/systems/pf2e/module/system/degree-of-success.ts";
import { CheckContext, CheckContextData, CheckContextOptions, SimpleRollActionCheckOptions } from "./types.ts";
export declare class ActionMacroHelpers {
    static resolveStat(stat: string): {
        checkType: CheckType;
        property: string;
        stat: string;
        subtitle: string;
    };
    static defaultCheckContext<ItemType extends ItemPF2e<ActorPF2e>>(options: CheckContextOptions<ItemType>, data: CheckContextData<ItemType>): CheckContext<ItemType> | undefined;
    static note(selector: string, translationPrefix: string, outcome: DegreeOfSuccessString, translationKey?: string): RollNotePF2e;
    static outcomesNote(selector: string, translationKey: string, outcomes: DegreeOfSuccessString[]): RollNotePF2e;
    static simpleRollActionCheck<ItemType extends ItemPF2e<ActorPF2e>>(options: SimpleRollActionCheckOptions<ItemType>): Promise<void>;
    static target(): {
        token: TokenDocumentPF2e | null;
        actor: ActorPF2e | null;
    };
    static getWeaponPotencyModifier(item: WeaponPF2e<ActorPF2e>, selector: string): ModifierPF2e | null;
    static getApplicableEquippedWeapons(actor: ActorPF2e, trait: WeaponTrait): WeaponPF2e<ActorPF2e>[];
}
