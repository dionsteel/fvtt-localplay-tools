import { ActorPF2e } from "src/types/pf2e/module/actor";
import { SaveType } from "src/types/pf2e/module/actor/types.ts";
import { ConditionPF2e } from "src/types/pf2e/module/item";
import { ItemType } from "src/types/pf2e/module/item/data/index.ts";
import { Rarity } from "src/types/pf2e/module/data.ts";
import { TokenDocumentPF2e } from "src/types/pf2e/module/scene/index.ts";
import { DamageType } from "src/types/pf2e/module/system/damage/index.ts";
import { Statistic } from "src/types/pf2e/module/system/statistic/index.ts";
import { HazardSource, HazardSystemData } from "./data.ts";
declare class HazardPF2e<TParent extends TokenDocumentPF2e | null = TokenDocumentPF2e | null> extends ActorPF2e<TParent> {
    skills: {
        stealth: Statistic;
    };
    get allowedItemTypes(): (ItemType | "physical")[];
    get rarity(): Rarity;
    get isComplex(): boolean;
    get hardness(): number;
    get hasDefenses(): boolean;
    /** Minimal check since the disabled status of a hazard isn't logged */
    get canAttack(): boolean;
    get emitsSound(): boolean;
    /** Hazards without hit points are unaffected by damage */
    isAffectedBy(effect: DamageType | ConditionPF2e): boolean;
    prepareBaseData(): void;
    prepareDerivedData(): void;
    protected prepareSaves(): {
        [K in SaveType]?: Statistic;
    };
}
interface HazardPF2e<TParent extends TokenDocumentPF2e | null = TokenDocumentPF2e | null> extends ActorPF2e<TParent> {
    readonly _source: HazardSource;
    readonly abilities?: never;
    system: HazardSystemData;
    saves: {
        [K in SaveType]?: Statistic;
    };
}
export { HazardPF2e };
