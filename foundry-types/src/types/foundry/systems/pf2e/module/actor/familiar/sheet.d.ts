/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { CharacterPF2e } from "src/types/foundry/systems/pf2e/module/actor";
import { CreatureSheetPF2e } from "src/types/foundry/systems/pf2e/module/actor/creature/sheet.ts";
import { FamiliarPF2e } from "src/types/foundry/systems/pf2e/module/actor/familiar/index.ts";
import { ActionItemPF2e } from "src/types/foundry/systems/pf2e/module/item";
import { CreatureSheetData } from "src/types/foundry/systems/pf2e/module/actor/creature/index.ts";
/**
 * @category Actor
 */
export declare class FamiliarSheetPF2e<TActor extends FamiliarPF2e> extends CreatureSheetPF2e<TActor> {
    /** There is currently no actor config for familiars */
    protected readonly actorConfigClass: null;
    static get defaultOptions(): ActorSheetOptions;
    get template(): string;
    getData(options?: ActorSheetOptions): Promise<FamiliarSheetData<TActor>>;
    activateListeners($html: JQuery): void;
}
interface FamiliarSheetData<TActor extends FamiliarPF2e> extends CreatureSheetData<TActor> {
    master: CharacterPF2e | null;
    masters: CharacterPF2e[];
    abilities: ConfigPF2e["PF2E"]["abilities"];
    size: string;
    familiarAbilities: {
        value: number;
        items: ActionItemPF2e[];
    };
}
export {};
