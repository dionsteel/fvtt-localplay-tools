import { ActorPF2e } from "src/types/pf2e/module/actor/base.ts";
import { Coins } from "src/types/pf2e/module/item/physical/data.ts";
interface AddCoinsFormData extends Coins {
    combineStacks: boolean;
}
/**
 * @category Other
 */
export declare class AddCoinsPopup extends FormApplication<ActorPF2e> {
    static get defaultOptions(): FormApplicationOptions;
    _updateObject(_event: Event, formData: Record<string, unknown> & AddCoinsFormData): Promise<void>;
}
export {};
