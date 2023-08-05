import { ActorPF2e } from "src/types/pf2e/module/actor";
import { ItemSummaryData } from "src/types/pf2e/module/item/data/index.ts";
import { PhysicalItemPF2e } from "src/types/pf2e/module/item/physical/index.ts";
import { EquipmentSource, EquipmentSystemData, EquipmentTrait } from "./data.ts";
import { OtherEquipmentTag } from "./types.ts";
declare class EquipmentPF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends PhysicalItemPF2e<TParent> {
    get otherTags(): Set<OtherEquipmentTag>;
    prepareBaseData(): void;
    prepareActorData(): void;
    getChatData(this: EquipmentPF2e<ActorPF2e>, htmlOptions?: EnrichHTMLOptions): Promise<ItemSummaryData>;
    generateUnidentifiedName({ typeOnly }?: {
        typeOnly?: boolean;
    }): string;
}
interface EquipmentPF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends PhysicalItemPF2e<TParent> {
    readonly _source: EquipmentSource;
    system: EquipmentSystemData;
    get traits(): Set<EquipmentTrait>;
}
export { EquipmentPF2e };
