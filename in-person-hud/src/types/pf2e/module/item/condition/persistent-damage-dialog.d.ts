/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { ActorPF2e } from "src/types/pf2e/module/actor";
import { DamageType } from "src/types/pf2e/module/system/damage/types.ts";
declare class PersistentDamageDialog extends Application {
    #private;
    private actor;
    constructor(actor: ActorPF2e, options?: Partial<ApplicationOptions>);
    static get defaultOptions(): ApplicationOptions;
    /** Override to guarantee one persistent damage dialog per actor */
    get id(): string;
    get title(): string;
    getData(): Promise<PersistentDialogData>;
    activateListeners($html: JQuery<HTMLElement>): void;
    /** Overriden to autofocus on first render behavior */
    protected _injectHTML($html: JQuery<HTMLElement>): void;
}
interface PersistentDialogData {
    existing: DamageEntryData[];
    damageTypes: DamageTypeData[];
}
interface DamageEntryData {
    id: string;
    bullet: string;
    active: boolean;
    formula: string;
    damageType: DamageType;
    dc: number;
}
interface DamageTypeData {
    type: string;
    iconClass: string;
    label: string;
}
export { PersistentDamageDialog as PersistentDialog };
