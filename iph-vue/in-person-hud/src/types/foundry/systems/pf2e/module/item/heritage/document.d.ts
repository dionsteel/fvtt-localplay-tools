import { ActorPF2e } from "src/types/pf2e/module/actor";
import { CreatureTrait } from "src/types/pf2e/module/actor/creature/index.ts";
import { ItemPF2e } from "src/types/pf2e/module/item";
import { Rarity } from "src/types/pf2e/module/data.ts";
import { HeritageSource, HeritageSystemData } from "./data.ts";
declare class HeritagePF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends ItemPF2e<TParent> {
    get traits(): Set<CreatureTrait>;
    get rarity(): Rarity;
    get isVersatile(): boolean;
    /** Prepare a character's data derived from their heritage */
    prepareActorData(this: HeritagePF2e<ActorPF2e>): void;
    getRollOptions(prefix?: string): string[];
}
interface HeritagePF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends ItemPF2e<TParent> {
    readonly _source: HeritageSource;
    system: HeritageSystemData;
}
export { HeritagePF2e };
