import { ActorPF2e } from "src/types/pf2e/module/actor";
import { SpellPF2e } from "src/types/pf2e/module/item/spell/document.ts";
import { SpellCollection } from "./collection.ts";
import { BaseSpellcastingEntry, CastOptions, SpellcastingSheetData } from "./types.ts";
/** An in-memory spellcasting entry for rituals */
export declare class RitualSpellcasting<TActor extends ActorPF2e> implements BaseSpellcastingEntry<TActor> {
    actor: TActor;
    spells: SpellCollection<TActor, this>;
    constructor(actor: TActor, rituals: SpellPF2e<TActor>[]);
    get id(): string;
    get name(): string;
    get sort(): number;
    get category(): "ritual";
    get tradition(): null;
    get isFlexible(): false;
    get isFocusPool(): false;
    get isInnate(): false;
    get isPrepared(): false;
    get isRitual(): true;
    get isSpontaneous(): false;
    canCast(spell: SpellPF2e): boolean;
    cast(spell: SpellPF2e, options?: CastOptions): Promise<void>;
    getSheetData(): Promise<SpellcastingSheetData>;
}
