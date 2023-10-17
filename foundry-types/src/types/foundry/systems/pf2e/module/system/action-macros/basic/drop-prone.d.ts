import { SimpleAction, SimpleActionVariant, SimpleActionVariantData } from "src/types/foundry/systems/pf2e/module/actor/actions/index.ts";
declare class DropProneAction extends SimpleAction {
    constructor();
    protected toActionVariant(data?: SimpleActionVariantData): SimpleActionVariant;
}
declare const dropProne: DropProneAction;
export { dropProne };
