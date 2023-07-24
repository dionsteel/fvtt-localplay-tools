import { SkillActionOptions } from "../index.ts";
import { SingleCheckAction } from "src/types/pf2e/module/actor/actions/index.ts";
declare function treatDisease(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { treatDisease as legacy, action };
