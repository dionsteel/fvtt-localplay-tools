/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { ActorPF2e } from "src/types/foundry/systems/pf2e/module/actor";
import { BaseTagSelector } from "./base.ts";
import { SelectableTagField, TagSelectorOptions } from "./index.ts";
export declare class SpeedSelector<TActor extends ActorPF2e> extends BaseTagSelector<TActor> {
    protected objectProperty: string;
    static get defaultOptions(): TagSelectorOptions;
    protected get configTypes(): readonly SelectableTagField[];
    getData(options?: Partial<TagSelectorOptions>): Promise<SpeedSelectorData<TActor>>;
    activateListeners($html: JQuery): void;
    protected _updateObject(_event: Event, formData: Record<string, unknown>): Promise<void>;
}
interface SpeedSelectorData<TActor extends ActorPF2e> extends FormApplicationData<TActor> {
    hasExceptions: boolean;
    choices: Record<string, ChoiceData>;
}
interface ChoiceData {
    selected: boolean;
    disabled: boolean;
    label: string;
    value: number | string;
}
export {};
