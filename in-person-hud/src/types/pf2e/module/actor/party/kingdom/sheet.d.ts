/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { ActorPF2e } from "src/types/pf2e/module/actor";
import { FeatGroup } from "src/types/pf2e/module/actor/character/feats.ts";
import { ActorSheetPF2e } from "src/types/pf2e/module/actor/sheet/base.ts";
import { ActorSheetDataPF2e } from "src/types/pf2e/module/actor/sheet/data-types.ts";
import { CampaignFeaturePF2e, ItemPF2e } from "src/types/pf2e/module/item";
import { ItemSourcePF2e } from "src/types/pf2e/module/item/data/index.ts";
import { DropCanvasItemDataPF2e } from "src/types/pf2e/module/canvas/drop-canvas-data.ts";
import { Statistic } from "src/types/pf2e/module/system/statistic/index.ts";
import { PartyPF2e } from "../document.ts";
import { KingdomAbilityData, KingdomCommodityData, KingdomData, KingdomLeadershipData } from "./types.ts";
import { Kingdom } from "./model.ts";
import { SheetOptions } from "src/types/pf2e/module/sheet/helpers.ts";
declare const KINGDOM_TRAITS: string[];
type KingdomTrait = (typeof KINGDOM_TRAITS)[number];
declare class KingdomSheetPF2e extends ActorSheetPF2e<PartyPF2e> {
    #private;
    protected selectedFilter: KingdomTrait | null;
    constructor(actor: PartyPF2e, options?: Partial<ActorSheetOptions>);
    get kingdom(): Kingdom;
    get title(): string;
    static get defaultOptions(): ActorSheetOptions;
    getData(options?: ActorSheetOptions): Promise<KingdomSheetData>;
    activateListeners($html: JQuery<HTMLElement>): void;
    protected filterActions(trait: string | null, options?: {
        instant?: boolean;
    }): void;
    protected _onDropItem(event: ElementDragEvent, data: DropCanvasItemDataPF2e): Promise<ItemPF2e<ActorPF2e | null>[]>;
    /** Handle a drop event for an existing Owned Item to sort that item */
    protected _onSortItem(event: ElementDragEvent, itemSource: ItemSourcePF2e): Promise<ItemPF2e<PartyPF2e>[]>;
    protected _onDropActor(event: ElementDragEvent, data: DropCanvasData<"Actor", PartyPF2e>): Promise<false | void>;
    protected _updateObject(_event: Event, formData: Record<string, unknown>): Promise<void>;
}
interface KingdomSheetData extends ActorSheetDataPF2e<PartyPF2e> {
    kingdom: Kingdom;
    nationTypeLabel: string;
    abilities: (KingdomAbilityData & {
        slug: string;
        label: string;
    })[];
    leadership: (KingdomLeadershipData & {
        actor: ActorPF2e | null;
        img: string;
        role: string;
        label: string;
    })[];
    actions: {
        item: CampaignFeaturePF2e;
        traits: SheetOptions;
    }[];
    skills: Statistic[];
    feats: FeatGroup<PartyPF2e, CampaignFeaturePF2e>[];
    resources: {
        dice: KingdomData["resources"]["dice"] & {
            icon: string;
        };
        commodities: (KingdomCommodityData & {
            type: string;
            label: string;
        })[];
    };
    actionFilterChoices: SheetOptions;
}
export { KingdomSheetPF2e };
