/// <reference types="jquery" resolution-mode="require"/>
import { ActorPF2e } from "src/types/foundry/systems/pf2e/module/actor";
import { AbilityString } from "src/types/foundry/systems/pf2e/module/actor/types.ts";
import { ItemPF2e } from "src/types/foundry/systems/pf2e/module/item";
import { ActionTrait } from "src/types/foundry/systems/pf2e/module/item/action/data.ts";
import { ItemSourcePF2e, ItemSummaryData } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
import { TrickMagicItemEntry } from "src/types/foundry/systems/pf2e/module/item/spellcasting-entry/trick.ts";
import { BaseSpellcastingEntry } from "src/types/foundry/systems/pf2e/module/item/spellcasting-entry/types.ts";
import { MeasuredTemplatePF2e } from "src/types/foundry/systems/pf2e/module/canvas/index.ts";
import { ChatMessagePF2e, ItemOriginFlag } from "src/types/foundry/systems/pf2e/module/chat-message/index.ts";
import { OneToTen, ZeroToTwo } from "src/types/foundry/systems/pf2e/module/data.ts";
import { UserPF2e } from "src/types/foundry/systems/pf2e/module/user/index.ts";
import { CheckRoll } from "src/types/foundry/systems/pf2e/module/system/check/index.ts";
import { DamageRoll } from "src/types/foundry/systems/pf2e/module/system/damage/roll.ts";
import { DamageRollContext, SpellDamageTemplate } from "src/types/foundry/systems/pf2e/module/system/damage/types.ts";
import { StatisticRollParameters } from "src/types/foundry/systems/pf2e/module/system/statistic/index.ts";
import { EnrichHTMLOptionsPF2e } from "src/types/foundry/systems/pf2e/module/system/text-editor.ts";
import { SpellHeightenLayer, SpellOverlayType, SpellSource, SpellSystemData } from "./data.ts";
import { SpellOverlayCollection } from "./overlay.ts";
import { MagicSchool, MagicTradition, SpellComponent, SpellTrait } from "./types.ts";
interface SpellConstructionContext<TParent extends ActorPF2e | null> extends DocumentConstructionContext<TParent> {
    fromConsumable?: boolean;
}
declare class SpellPF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends ItemPF2e<TParent> {
    readonly isFromConsumable: boolean;
    /** The original spell. Only exists if this is a variant */
    original?: SpellPF2e<NonNullable<TParent>>;
    /** The overlays that were applied to create this variant */
    appliedOverlays?: Map<SpellOverlayType, string>;
    /** Set if casted with trick magic item. Will be replaced via overriding spellcasting on cast later. */
    trickMagicEntry: TrickMagicItemEntry<NonNullable<TParent>> | null;
    overlays: SpellOverlayCollection;
    constructor(data: PreCreate<ItemSourcePF2e>, context?: SpellConstructionContext<TParent>);
    /** The spell's "base" rank; that is, before heightening */
    get baseRank(): OneToTen;
    /** Legacy getter, though not yet deprecated */
    get baseLevel(): OneToTen;
    /**
     * Heightened rank of the spell if heightened, otherwise base.
     * This applies for spontaneous or innate spells usually, but not prepared ones.
     */
    get rank(): number;
    /** Legacy getter, though not yet deprecated */
    get level(): number;
    get traits(): Set<SpellTrait>;
    /** Action traits added when Casting this Spell */
    get castingTraits(): ActionTrait[];
    get school(): MagicSchool | null;
    get traditions(): Set<MagicTradition>;
    get spellcasting(): BaseSpellcastingEntry<NonNullable<TParent>> | null;
    get isAttack(): boolean;
    get isCantrip(): boolean;
    get isFocusSpell(): boolean;
    get isRitual(): boolean;
    get ability(): AbilityString;
    get components(): Record<SpellComponent, boolean> & {
        value: string;
    };
    /** Whether this spell has unlimited uses */
    get unlimited(): boolean;
    get isVariant(): boolean;
    get hasVariants(): boolean;
    get uuid(): ItemUUID;
    /** Given a slot level, compute the actual level the spell will be cast at */
    computeCastRank(slotRank?: number): number;
    getRollData(rollOptions?: {
        castLevel?: number | string;
    }): NonNullable<EnrichHTMLOptions["rollData"]>;
    getDamage(damageOptions?: SpellDamageOptions): Promise<SpellDamage | null>;
    /**
     * Loads an alternative version of this spell, called a variant.
     * The variant is created via the application of one or more overlays based on parameters.
     * This handles heightening as well as alternative cast modes of spells.
     * If there's nothing to apply, returns null.
     */
    loadVariant(options?: {
        castLevel?: number;
        overlayIds?: string[];
    }): SpellPF2e<NonNullable<TParent>> | null;
    getHeightenLayers(rank?: number): SpellHeightenLayer[];
    createTemplate(): MeasuredTemplatePF2e;
    placeTemplate(): void;
    prepareBaseData(): void;
    prepareSiblingData(this: SpellPF2e<ActorPF2e>): void;
    getRollOptions(prefix?: string): string[];
    toMessage(event?: MouseEvent | JQuery.TriggeredEvent, { create, data, rollMode }?: SpellToMessageOptions): Promise<ChatMessagePF2e | undefined>;
    getChatData(this: SpellPF2e<ActorPF2e>, htmlOptions?: EnrichHTMLOptionsPF2e, rollOptions?: {
        castLevel?: number | string;
        slotLevel?: number | string;
    }): Promise<Omit<ItemSummaryData, "traits">>;
    rollAttack(this: SpellPF2e<ActorPF2e>, event: MouseEvent | JQuery.ClickEvent, attackNumber?: number, context?: StatisticRollParameters): Promise<void>;
    rollDamage(this: SpellPF2e<ActorPF2e>, event: MouseEvent | JQuery.ClickEvent, mapIncreases?: ZeroToTwo): Promise<Rolled<DamageRoll> | null>;
    /** Roll counteract check */
    rollCounteract(event?: JQuery.ClickEvent): Promise<Rolled<CheckRoll> | null>;
    getOriginData(): ItemOriginFlag;
    update(data: DocumentUpdateData<this>, options?: DocumentUpdateContext<TParent>): Promise<this>;
    protected _preCreate(data: PreDocumentId<this["_source"]>, options: DocumentModificationContext<TParent>, user: UserPF2e): Promise<boolean | void>;
    protected _preUpdate(changed: DeepPartial<SpellSource>, options: DocumentUpdateContext<TParent>, user: UserPF2e): Promise<boolean | void>;
}
interface SpellPF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends ItemPF2e<TParent> {
    readonly _source: SpellSource;
    system: SpellSystemData;
}
interface SpellDamage {
    template: SpellDamageTemplate;
    context: DamageRollContext;
}
interface SpellToMessageOptions {
    create?: boolean;
    rollMode?: RollMode;
    data?: {
        castLevel?: number;
    };
}
interface SpellDamageOptions {
    rollMode?: RollMode | "roll";
    skipDialog?: boolean;
    target?: ActorPF2e | null;
}
export { SpellPF2e, SpellToMessageOptions };
