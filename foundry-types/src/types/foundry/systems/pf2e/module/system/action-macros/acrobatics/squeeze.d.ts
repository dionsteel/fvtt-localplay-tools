import { SingleCheckAction } from "src/types/foundry/systems/pf2e/module/actor/actions/index.ts";
import { SkillActionOptions } from "../index.ts";
declare function squeeze(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { squeeze as legacy, action };
