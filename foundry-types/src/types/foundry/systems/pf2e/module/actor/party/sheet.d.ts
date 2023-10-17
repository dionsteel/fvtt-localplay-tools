/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { ActorPF2e } from "src/types/foundry/systems/pf2e/module/actor";
import { ActorSheetPF2e } from "src/types/foundry/systems/pf2e/module/actor/sheet/base.ts";
import { ActorSheetDataPF2e, ActorSheetRenderOptionsPF2e } from "src/types/foundry/systems/pf2e/module/actor/sheet/data-types.ts";
import { ItemPF2e } from "src/types/foundry/systems/pf2e/module/item";
import { ItemSourcePF2e } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
import { Bulk } from "src/types/foundry/systems/pf2e/module/item/physical/index.ts";
import { ValueAndMax, ZeroToFour } from "src/types/foundry/systems/pf2e/module/data.ts";
import { SheetOptions } from "src/types/foundry/systems/pf2e/module/sheet/helpers.ts";
import { PartyPF2e } from "./document.ts";
interface PartySheetRenderOptions extends ActorSheetRenderOptionsPF2e {
    actors?: boolean;
}
declare class PartySheetPF2e extends ActorSheetPF2e<PartyPF2e> {
    #private;
    static get defaultOptions(): ActorSheetOptions;
    regionTemplates: Record<string, string>;
    get isLootSheet(): boolean;
    getData(options?: ActorSheetOptions): Promise<PartySheetData>;
    activateListeners($html: JQuery<HTMLElement>): void;
    /** Overriden to prevent inclusion of campaign-only item types. Those should get added to their own sheet */
    protected _onDropItemCreate(itemData: ItemSourcePF2e | ItemSourcePF2e[]): Promise<Item<PartyPF2e>[]>;
    render(force?: boolean, options?: PartySheetRenderOptions): Promise<this>;
    protected _renderInner(data: Record<string, unknown>, options: RenderOptions): Promise<JQuery<HTMLElement>>;
    protected _onDropActor(event: ElementDragEvent, data: DropCanvasData<"Actor", PartyPF2e>): Promise<false | void>;
}
interface PartySheetData extends ActorSheetDataPF2e<PartyPF2e> {
    restricted: boolean;
    members: MemberBreakdown[];
    languages: LanguageSheetData[];
    inventorySummary: {
        totalCoins: number;
        totalWealth: number;
        totalBulk: Bulk;
    };
    explorationSummary: {
        speed: number;
        activities: number;
    };
    explorationMembers: MemberExploration[];
    /** Unsupported items on the sheet, may occur due to disabled campaign data */
    orphaned: ItemPF2e[];
}
interface SkillData {
    slug: string;
    label: string;
    mod: number;
    rank?: ZeroToFour | null;
}
interface MemberBreakdown {
    actor: ActorPF2e;
    heroPoints: ValueAndMax | null;
    hasBulk: boolean;
    bestSkills: SkillData[];
    senses: {
        label: string | null;
        labelFull: string;
        acuity?: string;
    }[];
    /** If true, the current user is restricted from seeing meta details */
    restricted: boolean;
}
interface MemberExploration {
    actor: ActorPF2e;
    owner: boolean;
    activities: {
        img: string;
        id: string;
        name: string;
        traits: SheetOptions;
    }[];
    choices: {
        id: string;
        name: string;
    }[];
}
interface LanguageSheetData {
    slug: string;
    label: string;
    actors: ActorPF2e[];
}
export { PartySheetPF2e, PartySheetRenderOptions };
