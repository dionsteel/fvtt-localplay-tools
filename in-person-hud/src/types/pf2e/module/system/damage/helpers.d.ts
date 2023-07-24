import { DamageInstance, DamageRoll } from "./roll.ts";
import { ArithmeticExpression, Grouping } from "./terms.ts";
import { DamageCategory, DamageDieSize, DamageType } from "./types.ts";
declare function nextDamageDieSize(next: {
    upgrade: DamageDieSize;
}): DamageDieSize;
declare function nextDamageDieSize(next: {
    downgrade: DamageDieSize;
}): DamageDieSize;
/** Provides constants for typical damage categories */
declare const DamageCategorization: {
    /** Map a damage type to its corresponding damage category, if any. */
    readonly fromDamageType: (damageType: DamageType) => DamageCategory | null;
    /** Get a set of all damage categories (both base and custom). */
    readonly allCategories: () => Set<"adamantine" | "darkwood" | "energy" | "mithral" | "orichalcum" | "physical" | "silver" | "warpglass" | "precision" | "splash" | "abysium" | "cold-iron" | "djezet" | "keep-stone" | "noqual" | "peachwood" | "sisterstone-dusk" | "sisterstone-scarlet" | "sovereign-steel" | "persistent" | "alignment" | null>;
    /** Get a set of all of the base rule damage types. */
    readonly baseCategories: () => Set<"adamantine" | "darkwood" | "energy" | "mithral" | "orichalcum" | "physical" | "silver" | "warpglass" | "precision" | "splash" | "abysium" | "cold-iron" | "djezet" | "keep-stone" | "noqual" | "peachwood" | "sisterstone-dusk" | "sisterstone-scarlet" | "sovereign-steel" | "persistent" | "alignment" | null>;
    /** Map a damage category to the set of damage types in it. */
    readonly toDamageTypes: (category: string) => Set<string>;
};
/** Create a span element for displaying splash damage */
declare function renderComponentDamage(term: RollTerm): HTMLElement;
declare function isSystemDamageTerm(term: RollTerm): term is ArithmeticExpression | Grouping;
declare function deepFindTerms(term: RollTerm, { flavor }: {
    flavor: string;
}): RollTerm[];
/** Check whether a roll has dice terms associated with a damage roll */
declare function looksLikeDamageRoll(roll: Roll): boolean;
/** Create a representative Font Awesome icon from a damage roll */
declare function damageDiceIcon(roll: DamageRoll | DamageInstance, { fixedWidth }?: {
    fixedWidth?: boolean | undefined;
}): HTMLElement;
/** Indicate in a term's options that it was multiplied by 2 or 3 */
declare function markAsCrit(term: RollTerm, multiplier: 2 | 3): void;
export { DamageCategorization, damageDiceIcon, deepFindTerms, isSystemDamageTerm, looksLikeDamageRoll, markAsCrit, nextDamageDieSize, renderComponentDamage, };
