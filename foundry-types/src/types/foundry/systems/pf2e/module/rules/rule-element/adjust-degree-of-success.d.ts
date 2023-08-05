import { CharacterPF2e, NPCPF2e } from "src/types/pf2e/module/actor";
import { ActorType } from "src/types/pf2e/module/actor/data/index.ts";
import { DegreeOfSuccessString } from "src/types/pf2e/module/system/degree-of-success.ts";
import { RuleElementPF2e, RuleElementSchema } from "./index.ts";
import type { StringField } from "types/foundry/common/data/fields.d.ts";
import { RecordField } from "src/types/pf2e/module/system/schema-data-fields.ts";
/**
 * @category RuleElement
 */
declare class AdjustDegreeOfSuccessRuleElement extends RuleElementPF2e<AdjustDegreeRuleSchema> {
    protected static validActorTypes: ActorType[];
    static defineSchema(): AdjustDegreeRuleSchema;
    beforePrepareData(): void;
}
interface AdjustDegreeOfSuccessRuleElement extends RuleElementPF2e<AdjustDegreeRuleSchema>, ModelPropsFromSchema<AdjustDegreeRuleSchema> {
    get actor(): CharacterPF2e | NPCPF2e;
}
declare const degreeAdjustmentAmountString: readonly ["one-degree-better", "one-degree-worse", "two-degrees-better", "two-degrees-worse", "to-critical-failure", "to-failure", "to-success", "to-critical-success"];
type DegreeAdjustmentAmountString = (typeof degreeAdjustmentAmountString)[number];
type AdjustDegreeRuleSchema = RuleElementSchema & {
    selector: StringField<string, string, true, false, false>;
    adjustment: RecordField<StringField<"all" | DegreeOfSuccessString, "all" | DegreeOfSuccessString, true, false, false>, StringField<DegreeAdjustmentAmountString, DegreeAdjustmentAmountString, true, false, false>>;
};
export { AdjustDegreeOfSuccessRuleElement };
