import { SimpleAction, SimpleActionVariant, SimpleActionVariantData } from "src/types/foundry/systems/pf2e/module/actor/actions/index.ts";
declare class StandAction extends SimpleAction {
    constructor();
    protected toActionVariant(data?: SimpleActionVariantData): SimpleActionVariant;
}
declare const stand: StandAction;
export { stand };
