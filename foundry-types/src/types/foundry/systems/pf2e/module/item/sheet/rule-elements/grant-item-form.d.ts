import { GrantItemRuleElement, GrantItemSource } from "src/types/pf2e/module/rules/rule-element/grant-item/rule-element.ts";
import { RuleElementForm, RuleElementFormSheetData } from "./base.ts";
/** Form handler for the GrantItem rule element */
declare class GrantItemForm extends RuleElementForm<GrantItemSource, GrantItemRuleElement> {
    template: string;
    getData(): Promise<GrantItemFormSheetData>;
    _updateObject(ruleData: DeepPartial<GrantItemSource>): void;
}
interface GrantItemFormSheetData extends RuleElementFormSheetData<GrantItemSource, GrantItemRuleElement> {
    granted: ClientDocument | null;
    allowDuplicate: boolean;
}
export { GrantItemForm };
