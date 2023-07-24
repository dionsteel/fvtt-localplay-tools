/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { ItemPF2e } from "src/types/pf2e/module/item";
/** Extend ItemDirectory to show more information */
export declare class ItemDirectoryPF2e<TItem extends ItemPF2e<null>> extends ItemDirectory<TItem> {
    #private;
    static entryPartial: string;
    static get defaultOptions(): SidebarDirectoryOptions;
    activateListeners($html: JQuery<HTMLElement>): void;
    /** Include flattened update data so parent method can read nested update keys */
    protected _render(force?: boolean, context?: SidebarDirectoryRenderOptions): Promise<void>;
}
