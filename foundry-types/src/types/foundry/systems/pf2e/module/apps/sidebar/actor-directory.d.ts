/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { ActorPF2e } from "src/types/pf2e/module/actor/base.ts";
/** Extend ActorDirectory to show more information */
declare class ActorDirectoryPF2e extends ActorDirectory<ActorPF2e<null>> {
    #private;
    static entryPartial: string;
    /** Any additional "folder like" elements (such as parties) that are maintained separately */
    extraFolders: Record<string, boolean>;
    /** If we are currently dragging a party. Needed because dragenter/dragover doesn't contain the drag source. */
    draggingParty: boolean;
    static get defaultOptions(): SidebarDirectoryOptions;
    getData(): Promise<object>;
    activateListeners($html: JQuery<HTMLElement>): void;
    protected _onDragStart(event: ElementDragEvent): void;
    /** Overriden to prevent highlighting of certain types of draggeed data (such as parties) */
    protected _onDragHighlight(event: DragEvent): void;
    protected _handleDroppedEntry(target: HTMLElement, data: ActorSidebarDropData): Promise<void>;
    /** Inject parties without having to alter a core template */
    protected _renderInner(data: object): Promise<JQuery>;
    /** Include flattened update data so parent method can read nested update keys */
    protected _render(force?: boolean, context?: SidebarDirectoryRenderOptions): Promise<void>;
    protected _contextMenu($html: JQuery<HTMLElement>): void;
    protected _getEntryContextOptions(): EntryContextOption[];
}
interface ActorSidebarDropData extends DropCanvasData<"actor", ActorPF2e> {
    fromParty?: string;
}
export { ActorDirectoryPF2e };
