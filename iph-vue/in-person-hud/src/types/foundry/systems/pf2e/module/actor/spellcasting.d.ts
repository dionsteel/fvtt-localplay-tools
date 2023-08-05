import { ActorPF2e } from "src/types/pf2e/module/actor";
import { ConsumablePF2e, SpellcastingEntryPF2e } from "src/types/pf2e/module/item";
import { SpellcastingEntrySource } from "src/types/pf2e/module/item/spellcasting-entry/index.ts";
import { SpellCollection } from "src/types/pf2e/module/item/spellcasting-entry/collection.ts";
import { RitualSpellcasting } from "src/types/pf2e/module/item/spellcasting-entry/rituals.ts";
import { BaseSpellcastingEntry } from "src/types/pf2e/module/item/spellcasting-entry/types.ts";
export declare class ActorSpellcasting<TActor extends ActorPF2e> extends Collection<BaseSpellcastingEntry<TActor>> {
    readonly actor: TActor;
    /** All available spell lists on this actor */
    collections: Collection<SpellCollection<TActor, BaseSpellcastingEntry<TActor>>>;
    constructor(actor: TActor, entries: BaseSpellcastingEntry<TActor>[]);
    /** Returns a list of entries pre-filtered to SpellcastingEntryPF2e */
    get regular(): SpellcastingEntryPF2e<TActor>[];
    /** Get this actor's ritual casting ability */
    get ritual(): RitualSpellcasting<TActor> | null;
    /**
     * All spellcasting entries that count as prepared/spontaneous, which qualify as a
     * full fledged spellcasting feature for wands and scrolls.
     */
    get spellcastingFeatures(): SpellcastingEntryPF2e<TActor>[];
    canCastConsumable(item: ConsumablePF2e): boolean;
    refocus(options?: {
        all?: boolean;
    }): {
        "system.resources.focus.value": number;
    } | null;
    /**
     * Recharges all spellcasting entries based on the type of entry it is
     * @todo Support a timespan property of some sort and handle 1/hour innate spells
     */
    recharge(): {
        itemUpdates: ((Record<string, unknown> | Partial<SpellcastingEntrySource>) & {
            _id: string;
        })[];
        actorUpdates: {
            "system.resources.focus.value": number;
        } | null;
    };
}
