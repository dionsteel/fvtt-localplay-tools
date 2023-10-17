import { ItemPF2e } from "src/types/foundry/systems/pf2e/module/item";
import { EffectContextData } from "src/types/foundry/systems/pf2e/module/item/abstract-effect/index.ts";
export type DropCanvasItemDataPF2e = DropCanvasData<"Item", ItemPF2e> & {
    value?: number;
    level?: number;
    context?: EffectContextData;
};
export type DropCanvasDataPF2e<TDocumentType extends string = string, TObject extends object = object> = TDocumentType extends "Item" ? DropCanvasItemDataPF2e : DropCanvasData<TDocumentType, TObject>;
