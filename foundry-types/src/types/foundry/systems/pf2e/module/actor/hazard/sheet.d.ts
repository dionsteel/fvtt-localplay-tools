/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { ActorSheetPF2e } from "src/types/pf2e/module/actor/sheet/base.ts";
import { HazardPF2e } from "./document.ts";
import { HazardSheetData } from "./types.ts";
export declare class HazardSheetPF2e extends ActorSheetPF2e<HazardPF2e> {
    #private;
    static get defaultOptions(): ActorSheetOptions;
    get template(): string;
    get title(): string;
    get editing(): boolean;
    getData(options?: ActorSheetOptions): Promise<HazardSheetData>;
    activateListeners($html: JQuery): void;
    protected _updateObject(event: Event, formData: Record<string, unknown>): Promise<void>;
}
