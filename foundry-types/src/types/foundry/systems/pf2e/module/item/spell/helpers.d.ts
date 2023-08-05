import { DamageDicePF2e } from "src/types/pf2e/module/actor/modifiers.ts";
import { BaseDamageData } from "src/types/pf2e/module/system/damage/index.ts";
/** Apply damage dice to a spell's damage formulas (for now, terms only) */
declare function applyDamageDiceOverrides(base: BaseDamageData[], dice: DamageDicePF2e[]): void;
export { applyDamageDiceOverrides };
