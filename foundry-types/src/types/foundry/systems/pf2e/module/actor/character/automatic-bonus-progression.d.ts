import { ActorPF2e } from "src/types/pf2e/module/actor";
import { ArmorPF2e, WeaponPF2e } from "src/types/pf2e/module/item";
import { ZeroToThree } from "src/types/pf2e/module/data.ts";
import { FlatModifierRuleElement } from "src/types/pf2e/module/rules/rule-element/flat-modifier.ts";
import { CharacterPF2e } from "./document.ts";
declare class AutomaticBonusProgression {
    /** Whether the ABP variant is enabled and also not selectively disabled for a particular actor */
    static isEnabled(actor: ActorPF2e | null): boolean;
    /** Get striking damage dice according to character level */
    static getStrikingDice(level: number): ZeroToThree;
    /**
     * @param level The name of this collection of statistic modifiers.
     * @param synthetics All relevant modifiers for this statistic.
     */
    static concatModifiers(actor: CharacterPF2e): void;
    /** Remove stored runes from specific magic weapons or otherwise set prior to enabling ABP */
    static cleanupRunes(item: ArmorPF2e | WeaponPF2e): void;
    /**
     * Determine whether a rule element can be applied to an actor.
     * @param rule The rule element to assess
     * @returns Whether the rule element is to be ignored
     */
    static suppressRuleElement(rule: FlatModifierRuleElement, value: number): boolean;
    static getAttackPotency(level: number): ZeroToThree;
    private static abpValues;
}
export { AutomaticBonusProgression };
