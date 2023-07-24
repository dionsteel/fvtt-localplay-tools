import { ClassPF2e } from "src/types/pf2e/module/item/class/document.ts";
import { SheetOptions } from "src/types/pf2e/module/sheet/helpers.ts";
import { ABCSheetData, ABCSheetPF2e } from "../abc/sheet.ts";
export declare class ClassSheetPF2e extends ABCSheetPF2e<ClassPF2e> {
    getData(options?: Partial<DocumentSheetOptions>): Promise<ClassSheetData>;
}
interface ClassSheetData extends ABCSheetData<ClassPF2e> {
    skills: typeof CONFIG.PF2E.skills;
    proficiencyChoices: typeof CONFIG.PF2E.proficiencyLevels;
    selectedKeyAbility: Record<string, string>;
    ancestryTraits: SheetOptions;
    trainedSkills: SheetOptions;
    ancestryFeatLevels: SheetOptions;
    classFeatLevels: SheetOptions;
    generalFeatLevels: SheetOptions;
    skillFeatLevels: SheetOptions;
    skillIncreaseLevels: SheetOptions;
}
export {};
