/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { CreatureSheetData } from "src/types/foundry/systems/pf2e/module/actor/creature/index.ts";
import { ActorSheetDataPF2e } from "src/types/foundry/systems/pf2e/module/actor/sheet/data-types.ts";
import { SaveType } from "src/types/foundry/systems/pf2e/module/actor/types.ts";
import { AncestryPF2e, BackgroundPF2e, ClassPF2e, DeityPF2e, FeatPF2e, HeritagePF2e, ItemPF2e } from "src/types/foundry/systems/pf2e/module/item";
import { ActionCost, Frequency } from "src/types/foundry/systems/pf2e/module/item/data/base.ts";
import { ItemSourcePF2e } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
import { MagicTradition } from "src/types/foundry/systems/pf2e/module/item/spell/types.ts";
import { SpellcastingSheetData } from "src/types/foundry/systems/pf2e/module/item/spellcasting-entry/types.ts";
import { DropCanvasItemDataPF2e } from "src/types/foundry/systems/pf2e/module/canvas/drop-canvas-data.ts";
import { ActorPF2e } from "src/types/foundry/systems/pf2e/module/documents.ts";
import { SheetOptions } from "src/types/foundry/systems/pf2e/module/sheet/helpers.ts";
import { CreatureSheetPF2e } from "../creature/sheet.ts";
import { CharacterConfig } from "./config.ts";
import { CraftingEntry, CraftingFormula } from "./crafting/index.ts";
import { CharacterSaveData, CharacterStrike, CharacterSystemData, ClassDCData } from "./data.ts";
import { CharacterPF2e } from "./document.ts";
import { FeatGroup } from "./feats.ts";
import { CHARACTER_SHEET_TABS } from "./values.ts";
declare class CharacterSheetPF2e<TActor extends CharacterPF2e> extends CreatureSheetPF2e<TActor> {
    #private;
    protected readonly actorConfigClass: typeof CharacterConfig;
    /** A cache of this PC's known formulas, for use by sheet callbacks */
    private knownFormulas;
    /** Non-persisted tweaks to formula data */
    private formulaQuantities;
    static get defaultOptions(): ActorSheetOptions;
    get template(): string;
    getData(options?: ActorSheetOptions): Promise<CharacterSheetData<TActor>>;
    /** Organize and classify Items for Character sheets */
    prepareItems(sheetData: ActorSheetDataPF2e<CharacterPF2e>): Promise<void>;
    /** Disable the initiative button located on the sidebar */
    disableInitiativeButton(): void;
    /** Enable the initiative button located on the sidebar */
    enableInitiativeButton(): void;
    activateListeners($html: JQuery): void;
    protected _onDropItem(event: ElementDragEvent, data: DropCanvasItemDataPF2e): Promise<ItemPF2e<ActorPF2e | null>[]>;
    protected _onDrop(event: ElementDragEvent): Promise<boolean | void>;
    /** Handle a drop event for an existing Owned Item to sort that item */
    protected _onSortItem(event: ElementDragEvent, itemSource: ItemSourcePF2e): Promise<ItemPF2e<TActor>[]>;
    /** Get the font-awesome icon used to display hero points */
    private getHeroPointsIcon;
    /** Overriden to open sub-tabs if requested */
    protected openTab(name: string): void;
}
interface CharacterSheetPF2e<TActor extends CharacterPF2e> extends CreatureSheetPF2e<TActor> {
    getStrikeFromDOM(target: HTMLElement): CharacterStrike | null;
}
type CharacterSheetOptions = ActorSheetOptions;
type CharacterSystemSheetData = CharacterSystemData & {
    attributes: {
        perception: {
            rankName: string;
        };
    };
    details: CharacterSystemData["details"] & {
        keyability: {
            value: keyof typeof CONFIG.PF2E.abilities;
            singleOption: boolean;
        };
    };
    resources: {
        heroPoints: {
            icon: string;
            hover: string;
        };
    };
    saves: Record<SaveType, CharacterSaveData & {
        rankName?: string;
        short?: string;
    }>;
};
export interface CraftingEntriesSheetData {
    dailyCrafting: boolean;
    other: CraftingEntry[];
    alchemical: {
        entries: CraftingEntry[];
        totalReagentCost: number;
        infusedReagents: {
            value: number;
            max: number;
        };
    };
}
interface CraftingSheetData {
    noCost: boolean;
    hasQuickAlchemy: boolean;
    knownFormulas: Record<number, CraftingFormula[]>;
    entries: CraftingEntriesSheetData;
}
type CharacterSheetTabVisibility = Record<(typeof CHARACTER_SHEET_TABS)[number], boolean>;
interface CharacterSheetData<TActor extends CharacterPF2e = CharacterPF2e> extends CreatureSheetData<TActor> {
    abpEnabled: boolean;
    ancestry: AncestryPF2e<CharacterPF2e> | null;
    heritage: HeritagePF2e<CharacterPF2e> | null;
    background: BackgroundPF2e<CharacterPF2e> | null;
    adjustedBonusEncumbranceBulk: boolean;
    adjustedBonusLimitBulk: boolean;
    class: ClassPF2e<CharacterPF2e> | null;
    classDCs: {
        dcs: ClassDCSheetData[];
        /** The slug of the character's primary class DC */
        primary: string | null;
        /** Show class label and individual modifier lists for each class DC */
        perDCDetails: boolean;
    };
    crafting: CraftingSheetData;
    data: CharacterSystemSheetData;
    deity: DeityPF2e<CharacterPF2e> | null;
    hasStamina: boolean;
    /** This actor has actual containers for stowing, rather than just containers serving as a UI convenience */
    hasRealContainers: boolean;
    magicTraditions: Record<MagicTradition, string>;
    options: CharacterSheetOptions;
    preparationType: Object;
    showPFSTab: boolean;
    spellcastingEntries: SpellcastingSheetData[];
    tabVisibility: CharacterSheetTabVisibility;
    actions: {
        combat: Record<"action" | "reaction" | "free", {
            label: string;
            actions: ActionSheetData[];
        }>;
        exploration: {
            active: ActionSheetData[];
            other: ActionSheetData[];
        };
        downtime: ActionSheetData[];
    };
    feats: FeatGroup[];
}
interface ActionSheetData {
    id: string;
    name: string;
    img: string;
    actionCost: ActionCost | null;
    frequency: Frequency | null;
    feat: FeatPF2e | null;
    traits: SheetOptions;
    exploration?: {
        active: boolean;
    };
}
interface ClassDCSheetData extends ClassDCData {
    icon: string;
    hover: string;
    rankSlug: string;
    rankName: string;
}
export { CharacterSheetPF2e, CharacterSheetTabVisibility };
