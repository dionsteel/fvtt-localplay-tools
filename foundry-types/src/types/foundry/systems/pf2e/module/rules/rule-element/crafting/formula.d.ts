import { CharacterPF2e } from "src/types/foundry/systems/pf2e/module/actor";
import { ActorType } from "src/types/foundry/systems/pf2e/module/actor/data/index.ts";
import { RuleElementOptions, RuleElementPF2e, RuleElementSource } from "../index.ts";
/**
 * @category RuleElement
 */
declare class CraftingFormulaRuleElement extends RuleElementPF2e {
    protected static validActorTypes: ActorType[];
    constructor(data: CraftingFormulaSource, options: RuleElementOptions);
    beforePrepareData(): void;
}
interface CraftingFormulaRuleElement extends RuleElementPF2e {
    data: CraftingFormulaData;
    get actor(): CharacterPF2e;
}
interface CraftingFormulaData extends CraftingFormulaRuleElement {
    uuid: ItemUUID;
}
interface CraftingFormulaSource extends RuleElementSource {
    uuid?: unknown;
}
export { CraftingFormulaRuleElement };
