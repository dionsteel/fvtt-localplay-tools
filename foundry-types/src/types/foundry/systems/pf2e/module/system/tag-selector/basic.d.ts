/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { ActorPF2e } from "src/types/foundry/systems/pf2e/module/actor";
import { ItemPF2e } from "src/types/foundry/systems/pf2e/module/item";
import { BaseTagSelector } from "./base.ts";
import { SelectableTagField, TagSelectorOptions } from "./index.ts";
export interface BasicSelectorOptions extends TagSelectorOptions {
    objectProperty: string;
    configTypes: SelectableTagField[];
}
export type BasicConstructorOptions = Partial<BasicSelectorOptions> & {
    objectProperty: string;
};
declare class TagSelectorBasic<TDocument extends ActorPF2e | ItemPF2e> extends BaseTagSelector<TDocument> {
    #private;
    static get defaultOptions(): TagSelectorOptions;
    allowCustom: boolean;
    protected objectProperty: string;
    constructor(object: TDocument, options: BasicConstructorOptions);
    protected get configTypes(): readonly SelectableTagField[];
    getData(): Promise<TagSelectorBasicData<TDocument>>;
    activateListeners($html: JQuery): void;
    protected _updateObject(event: Event, formData: Record<string, unknown>): Promise<void>;
}
interface TagSelectorBasic<TDocument extends ActorPF2e | ItemPF2e> extends BaseTagSelector<TDocument> {
    options: BasicSelectorOptions;
}
interface TagSelectorBasicData<TDocument extends ActorPF2e | ItemPF2e> extends FormApplicationData<TDocument> {
    choices: Record<string, {
        label: string;
        selected: boolean;
        disabled: boolean;
    }>;
    allowCustom: boolean;
    custom: string | null;
    flat: boolean;
}
export { TagSelectorBasic };
