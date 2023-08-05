import { ItemPF2e } from "src/types/pf2e/module/item/base.ts";
import { ActionItemSource, ActionSystemData } from "./data.ts";
import { UserPF2e } from "src/types/pf2e/module/user/index.ts";
import { ActionCost, Frequency } from "src/types/pf2e/module/item/data/base.ts";
import { ItemSummaryData } from "src/types/pf2e/module/item/data/index.ts";
import { ActorPF2e } from "src/types/pf2e/module/actor";
declare class ActionItemPF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends ItemPF2e<TParent> {
    get actionCost(): ActionCost | null;
    get frequency(): Frequency | null;
    prepareBaseData(): void;
    getChatData(this: ActionItemPF2e<ActorPF2e>, htmlOptions?: EnrichHTMLOptions): Promise<ItemSummaryData>;
    protected _preCreate(data: PreDocumentId<ActionItemSource>, options: DocumentModificationContext<TParent>, user: UserPF2e): Promise<boolean | void>;
    protected _preUpdate(changed: DeepPartial<this["_source"]>, options: DocumentModificationContext<TParent>, user: UserPF2e): Promise<boolean | void>;
}
interface ActionItemPF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends ItemPF2e<TParent> {
    readonly _source: ActionItemSource;
    system: ActionSystemData;
}
export { ActionItemPF2e };
