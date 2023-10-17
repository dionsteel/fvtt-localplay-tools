/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { ActorPF2e } from "src/types/foundry/systems/pf2e/module/actor";
export declare const InlineRollLinks: {
    injectRepostElement: (links: HTMLElement[], foundryDoc: ClientDocument | null) => void;
    listen: ($html: HTMLElement | JQuery, foundryDoc?: ClientDocument | null) => void;
    makeRepostHtml: (target: HTMLElement, defaultVisibility: string) => string;
    repostAction: (target: HTMLElement, foundryDoc?: ClientDocument | null) => void;
    /** Give inline damage-roll links from items flavor text of the item name */
    flavorDamageRolls(html: HTMLElement, actor?: ActorPF2e | null): void;
};
