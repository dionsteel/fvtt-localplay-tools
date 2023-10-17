/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { ActionCategory, ActionTrait } from "src/types/foundry/systems/pf2e/module/item/action/index.ts";
import { ActionType } from "src/types/foundry/systems/pf2e/module/item/data/base.ts";
import { BaseSpellcastingEntry } from "src/types/foundry/systems/pf2e/module/item/spellcasting-entry/index.ts";
import { UserPF2e } from "src/types/foundry/systems/pf2e/module/user/document.ts";
import { BrowserTabs, PackInfo, SourceInfo, TabData, TabName } from "./data.ts";
import { ActionFilters, BestiaryFilters, EquipmentFilters, FeatFilters, HazardFilters, SpellFilters } from "./tabs/data.ts";
declare class PackLoader {
    #private;
    loadedPacks: {
        Actor: Record<string, {
            pack: CompendiumCollection;
            index: CompendiumIndex;
        } | undefined>;
        Item: Record<string, {
            pack: CompendiumCollection;
            index: CompendiumIndex;
        } | undefined>;
    };
    loadedSources: string[];
    sourcesSettings: CompendiumBrowserSources;
    constructor();
    loadPacks(documentType: "Actor" | "Item", packs: string[], indexFields: string[]): AsyncGenerator<{
        pack: CompendiumCollection<CompendiumDocument>;
        index: CompendiumIndex;
    }, void, unknown>;
    updateSources(packs: string[]): Promise<void>;
    reset(): void;
    hardReset(packs: string[]): Promise<void>;
}
declare class CompendiumBrowser extends Application {
    #private;
    settings: CompendiumBrowserSettings;
    dataTabsList: readonly ["action", "bestiary", "equipment", "feat", "hazard", "spell"];
    navigationTab: Tabs;
    tabs: BrowserTabs;
    packLoader: PackLoader;
    activeTab: TabName;
    constructor(options?: {});
    get title(): string;
    static get defaultOptions(): ApplicationOptions;
    /** Reset initial filtering */
    close(options?: {
        force?: boolean;
    }): Promise<void>;
    hookTab(): Tabs;
    initCompendiumList(): void;
    openTab(name: "action", filter?: ActionFilters): Promise<void>;
    openTab(name: "bestiary", filter?: BestiaryFilters): Promise<void>;
    openTab(name: "equipment", filter?: EquipmentFilters): Promise<void>;
    openTab(name: "feat", filter?: FeatFilters): Promise<void>;
    openTab(name: "hazard", filter?: HazardFilters): Promise<void>;
    openTab(name: "spell", filter?: SpellFilters): Promise<void>;
    openTab(name: "settings"): Promise<void>;
    openActionTab(options: {
        types?: ActionType[];
        categories?: ActionCategory[];
        traits?: ActionTrait[];
    }): Promise<void>;
    openSpellTab(entry: BaseSpellcastingEntry, maxLevel?: number): Promise<void>;
    loadTab(tabName: TabName): Promise<void>;
    loadedPacks(tab: TabName): string[];
    loadedPacksAll(): string[];
    activateListeners($html: JQuery): void;
    protected _canDragStart(): boolean;
    protected _canDragDrop(): boolean;
    /** Set drag data and lower opacity of the application window to reveal any tokens */
    protected _onDragStart(event: ElementDragEvent): void;
    protected _onDragOver(event: ElementDragEvent): void;
    getData(): {
        user: Active<UserPF2e>;
        settings?: {
            settings: CompendiumBrowserSettings;
            sources: CompendiumBrowserSources;
        };
        scrollLimit?: number;
    };
}
type CompendiumBrowserSettings = Omit<TabData<Record<string, PackInfo | undefined>>, "settings">;
type CompendiumBrowserSourcesList = Record<string, SourceInfo | undefined>;
interface CompendiumBrowserSources {
    ignoreAsGM: boolean;
    showEmptySources: boolean;
    showUnknownSources: boolean;
    sources: CompendiumBrowserSourcesList;
}
export { CompendiumBrowser, CompendiumBrowserSettings, CompendiumBrowserSources };
