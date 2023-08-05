import { SkillActionOptions } from "../index.ts";
import { SingleCheckAction } from "src/types/pf2e/module/actor/actions/index.ts";
declare function concealAnObject(options: SkillActionOptions): Promise<void>;
declare const action: SingleCheckAction;
export { concealAnObject as legacy, action };
