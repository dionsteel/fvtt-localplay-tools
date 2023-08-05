/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { SkillAbbreviation } from "src/types/pf2e/module/actor/creature/data.ts";
import { Alignment } from "src/types/pf2e/module/actor/creature/types.ts";
import { DeityPF2e } from "src/types/pf2e/module/item";
import { ItemSheetPF2e } from "src/types/pf2e/module/item/sheet/base.ts";
import { ItemSheetDataPF2e } from "src/types/pf2e/module/item/sheet/data-types.ts";
import { SheetOptions } from "src/types/pf2e/module/sheet/helpers.ts";
export declare class DeitySheetPF2e extends ItemSheetPF2e<DeityPF2e> {
    static get defaultOptions(): DocumentSheetOptions;
    getData(options?: Partial<DocumentSheetOptions>): Promise<DeitySheetData>;
    activateListeners($html: JQuery): void;
    _onDrop(event: ElementDragEvent): Promise<void>;
    /** Foundry inflexibly considers checkboxes to be booleans: set back to a string tuple for Divine Font */
    _updateObject(event: Event, formData: Record<string, unknown>): Promise<void>;
}
interface DeitySheetData extends ItemSheetDataPF2e<DeityPF2e> {
    alignments: Record<Alignment, string>;
    atheistic: boolean;
    skills: Record<SkillAbbreviation, string>;
    divineFonts: SheetOptions;
    spells: SpellBrief[];
}
interface SpellBrief {
    uuid: ItemUUID;
    level: number;
    name: string;
    img: ImageFilePath;
}
export {};
