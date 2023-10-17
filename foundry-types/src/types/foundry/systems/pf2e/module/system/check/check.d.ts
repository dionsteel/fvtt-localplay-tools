/// <reference types="jquery" resolution-mode="require"/>
import { CheckModifier } from "src/types/foundry/systems/pf2e/module/actor/modifiers.ts";
import { ChatMessagePF2e } from "src/types/foundry/systems/pf2e/module/chat-message/index.ts";
import { DegreeOfSuccessString } from "../degree-of-success.ts";
import { CheckRoll } from "./roll.ts";
import { CheckRollContext } from "./types.ts";
interface RerollOptions {
    heroPoint?: boolean;
    keep?: "new" | "best" | "worst";
}
type CheckRollCallback = (roll: Rolled<CheckRoll>, outcome: DegreeOfSuccessString | null | undefined, message: ChatMessagePF2e, event: Event | null) => Promise<void> | void;
declare class CheckPF2e {
    /** Roll the given statistic, optionally showing the check modifier dialog if 'Shift' is held down. */
    static roll(check: CheckModifier, context?: CheckRollContext, event?: JQuery.TriggeredEvent | Event | null, callback?: CheckRollCallback): Promise<Rolled<CheckRoll> | null>;
    private static createTagFlavor;
    /** Reroll a rolled check given a chat message. */
    static rerollFromMessage(message: ChatMessagePF2e, { heroPoint, keep }?: RerollOptions): Promise<void>;
    /**
     * Renders the reroll, highlighting the old result if it was a critical success or failure
     * @param roll  The roll that is to be rerendered
     * @param isOld This is the old roll render, so remove damage or other buttons
     */
    static renderReroll(roll: Rolled<Roll>, { isOld }: {
        isOld: boolean;
    }): Promise<string>;
    private static createResultFlavor;
}
export { CheckPF2e, CheckRollCallback };
