import { ActorPF2e } from "src/types/foundry/systems/pf2e/module/actor";
import { SpellPF2e } from "src/types/foundry/systems/pf2e/module/item";
import { SpellConsumableItemType } from "src/types/foundry/systems/pf2e/module/item/consumable/spell-consumables.ts";
import { OneToTen } from "src/types/foundry/systems/pf2e/module/data.ts";
interface FormInputData extends FormApplicationData<ActorPF2e> {
    itemTypeOptions?: Object;
    validLevels?: number[];
    itemType?: SpellConsumableItemType;
    level?: OneToTen;
}
type FormOutputData = {
    itemType: SpellConsumableItemType;
    level: OneToTen;
};
export declare class CastingItemCreateDialog extends FormApplication<ActorPF2e> {
    onSubmitCallback: CastingItemCreateCallback;
    spell: SpellPF2e;
    formDataCache: FormOutputData;
    constructor(object: ActorPF2e, options: Partial<FormApplicationOptions>, callback: CastingItemCreateCallback, spell: SpellPF2e);
    static get defaultOptions(): FormApplicationOptions;
    getData(): Promise<FormInputData>;
    _updateObject(event: Event, formData: FormOutputData): Promise<void>;
}
type CastingItemCreateCallback = (level: OneToTen, itemType: SpellConsumableItemType, spell: SpellPF2e) => Promise<void>;
export {};
