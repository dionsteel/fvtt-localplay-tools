import { SkillActionOptions } from "../index.ts";
import { SingleCheckAction, SingleCheckActionVariant, SingleCheckActionVariantData } from "src/types/pf2e/module/actor/actions/index.ts";
declare function createForgery(options: SkillActionOptions): Promise<void>;
declare class CreateForgeryAction extends SingleCheckAction {
    constructor();
    protected toActionVariant(data?: SingleCheckActionVariantData): SingleCheckActionVariant;
}
declare const action: CreateForgeryAction;
export { createForgery as legacy, action };
