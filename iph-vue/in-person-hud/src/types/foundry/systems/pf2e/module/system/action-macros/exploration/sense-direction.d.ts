import { SkillActionOptions } from "../index.ts";
import { SingleCheckAction } from "src/types/pf2e/module/actor/actions/index.ts";
declare function senseDirection(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { senseDirection as legacy, action };
