import { ActorPF2e } from "src/types/pf2e/module/actor";
import { Alignment } from "src/types/pf2e/module/actor/creature/types.ts";
import { ItemPF2e } from "src/types/pf2e/module/item";
import { BaseWeaponType } from "src/types/pf2e/module/item/weapon/types.ts";
import { DeitySource, DeitySystemData } from "./data.ts";
declare class DeityPF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends ItemPF2e<TParent> {
    get category(): "deity" | "pantheon" | "philosophy";
    get alignment(): Alignment | null;
    get favoredWeapons(): BaseWeaponType[];
    prepareBaseData(): void;
    prepareActorData(this: DeityPF2e<ActorPF2e>): void;
    /** If applicable, set a trained proficiency with this deity's favored weapon */
    setFavoredWeaponRank(this: DeityPF2e<ActorPF2e>): void;
    getRollOptions(prefix?: string): string[];
}
interface DeityPF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends ItemPF2e<TParent> {
    readonly _source: DeitySource;
    system: DeitySystemData;
}
export { DeityPF2e };
