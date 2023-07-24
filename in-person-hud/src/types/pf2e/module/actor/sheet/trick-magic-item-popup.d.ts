import { ActorPF2e, CharacterPF2e } from "src/types/pf2e/module/actor";
import { ConsumablePF2e } from "src/types/pf2e/module/item";
import { TrickMagicItemDifficultyData } from "src/types/pf2e/module/item/consumable/spell-consumables.ts";
export declare class TrickMagicItemPopup {
    #private;
    /** The wand or scroll being "tricked" */
    readonly item: ConsumablePF2e<ActorPF2e>;
    /** The actor doing the tricking */
    readonly actor: CharacterPF2e;
    /** The skill DC of the action's check */
    readonly checkDC: TrickMagicItemDifficultyData;
    constructor(item: ConsumablePF2e);
}
