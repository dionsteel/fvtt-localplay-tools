import { PhysicalItemSheetData, PhysicalItemSheetPF2e } from "src/types/pf2e/module/item/physical/index.ts";
import { ContainerPF2e } from "./document.ts";
export declare class ContainerSheetPF2e extends PhysicalItemSheetPF2e<ContainerPF2e> {
    getData(options?: Partial<DocumentSheetOptions>): Promise<PhysicalItemSheetData<ContainerPF2e>>;
}
