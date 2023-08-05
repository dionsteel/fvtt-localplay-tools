/// <reference types="jquery" resolution-mode="require"/>
import { BaseRollContext } from "src/types/pf2e/module/system/rolls.ts";
/** Returns statistic dialog roll parameters based on held keys */
type ParamsFromEvent = Pick<BaseRollContext, "rollMode" | "skipDialog">;
declare function eventToRollParams(event?: JQuery.TriggeredEvent | Event | null): ParamsFromEvent;
export { eventToRollParams };
