import { FeatGroup } from "src/types/pf2e/module/actor/character/feats.ts";
import { ItemType } from "src/types/pf2e/module/item/data/index.ts";
import { Statistic } from "src/types/pf2e/module/system/statistic/index.ts";
import type { PartyPF2e } from "../document.ts";
import { PartyCampaign } from "../types.ts";
import { KingdomCHG, KingdomGovernment, KingdomNationType, KingdomSchema, KingdomSkill, KingdomSource } from "./types.ts";
import { CampaignFeaturePF2e } from "src/types/pf2e/module/item";
declare const DataModel: typeof import("../../../../../types/foundry/common/abstract/data.js").default;
/** Model for the Kingmaker campaign data type, which represents a Kingdom */
declare class Kingdom extends DataModel<PartyPF2e, KingdomSchema> implements PartyCampaign {
    nationType: KingdomNationType;
    feats: FeatGroup<PartyPF2e, CampaignFeaturePF2e>;
    bonusFeats: FeatGroup<PartyPF2e, CampaignFeaturePF2e>;
    skills: Record<KingdomSkill, Statistic>;
    control: Statistic;
    static defineSchema(): KingdomSchema;
    get actor(): PartyPF2e;
    get extraItemTypes(): ItemType[];
    get activities(): CampaignFeaturePF2e[];
    get charter(): KingdomCHG | null;
    get heartland(): KingdomCHG | null;
    get government(): KingdomGovernment | null;
    _initialize(options?: Record<string, unknown>): void;
    /** Creates sidebar buttons to inject into the chat message sidebar */
    createSidebarButtons(): HTMLElement[];
    update(data: DeepPartial<KingdomSource> & Record<string, unknown>): Promise<void>;
    private prepareAbilityScores;
    private prepareData;
    private prepareFeats;
    getRollData(): Record<string, unknown>;
    importActivities({ skipDialog }?: {
        skipDialog?: boolean;
    }): Promise<void>;
    getStatistic(slug: string): Statistic | null;
}
interface Kingdom extends ModelPropsFromSchema<KingdomSchema> {
}
export { Kingdom };
