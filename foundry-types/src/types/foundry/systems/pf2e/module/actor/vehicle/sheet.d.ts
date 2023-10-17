/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { ActorSheetPF2e } from "../sheet/base.ts";
import { VehiclePF2e } from "src/types/foundry/systems/pf2e/module/actor/vehicle/index.ts";
import { ActorSheetDataPF2e } from "src/types/foundry/systems/pf2e/module/actor/sheet/data-types.ts";
export declare class VehicleSheetPF2e extends ActorSheetPF2e<VehiclePF2e> {
    static get defaultOptions(): ActorSheetOptions;
    getData(): Promise<VehicleSheetData>;
    prepareItems(sheetData: VehicleSheetData): Promise<void>;
    activateListeners($html: JQuery): void;
}
interface AdjustedValue {
    value: number;
    adjustmentClass: "adjusted-higher" | "adjusted-lower" | null;
}
interface VehicleSheetData extends ActorSheetDataPF2e<VehiclePF2e> {
    actorRarities: typeof CONFIG.PF2E.rarityTraits;
    actorRarity: string;
    actorSizes: typeof CONFIG.PF2E.actorSizes;
    actorSize: string;
    ac: AdjustedValue;
    saves: {
        fortitude: AdjustedValue;
    };
}
export {};
