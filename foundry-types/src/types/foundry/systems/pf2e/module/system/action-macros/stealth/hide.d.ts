import { SkillActionOptions } from "../index.ts";
import { SingleCheckAction } from "src/types/foundry/systems/pf2e/module/actor/actions/index.ts";
declare function hide(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { hide as legacy, action };
