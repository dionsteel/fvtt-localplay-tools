import { SkillActionOptions } from "../index.ts";
import { SingleCheckAction } from "src/types/pf2e/module/actor/actions/index.ts";
declare function disableDevice(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { disableDevice as legacy, action };
