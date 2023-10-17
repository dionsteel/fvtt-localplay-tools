/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { PhysicalItemSheetData, PhysicalItemSheetPF2e } from "src/types/foundry/systems/pf2e/module/item/physical/sheet.ts";
import { BookPF2e } from "./document.ts";
export declare class BookSheetPF2e extends PhysicalItemSheetPF2e<BookPF2e> {
    getData(options?: Partial<DocumentSheetOptions>): Promise<PhysicalItemSheetData<BookPF2e>>;
    activateListeners($html: JQuery): void;
}
