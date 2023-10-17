import { ActorPF2e } from "src/types/foundry/systems/pf2e/module/actor";
import { ClassDCData } from "src/types/foundry/systems/pf2e/module/actor/character/data.ts";
import { SpellcastingEntryPF2e } from "src/types/foundry/systems/pf2e/module/item";
import { SpellcastingEntrySystemSource } from "src/types/foundry/systems/pf2e/module/item/spellcasting-entry/data.ts";
/** Dialog to create or edit spellcasting entries. It works on a clone of spellcasting entry, but will not persist unless the changes are accepted */
declare class SpellcastingCreateAndEditDialog extends FormApplication<SpellcastingEntryPF2e<ActorPF2e>> {
    #private;
    private actor;
    constructor(object: ActorPF2e | SpellcastingEntryPF2e<ActorPF2e>, options: Partial<FormApplicationOptions>);
    static get defaultOptions(): FormApplicationOptions;
    getData(): Promise<SpellcastingCreateAndEditDialogSheetData>;
    protected _updateObject(event: Event, formData: Record<string, unknown>): Promise<void>;
    private updateAndClose;
}
interface SpellcastingCreateAndEditDialogSheetData extends FormApplicationData<SpellcastingEntryPF2e<ActorPF2e>> {
    actor: ActorPF2e;
    data: SpellcastingEntrySystemSource;
    classDCs: ClassDCData[];
    magicTraditions: ConfigPF2e["PF2E"]["magicTraditions"];
    spellcastingTypes: Omit<ConfigPF2e["PF2E"]["preparationType"], "ritual">;
    abilities: ConfigPF2e["PF2E"]["abilities"];
    hasAbility: boolean;
}
export declare function createSpellcastingDialog(event: MouseEvent, object: ActorPF2e | SpellcastingEntryPF2e<ActorPF2e>): Promise<SpellcastingCreateAndEditDialog>;
export {};
