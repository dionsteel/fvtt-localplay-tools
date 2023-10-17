import { MeasuredTemplatePF2e } from "src/types/foundry/systems/pf2e/module/canvas/measured-template.ts";
import { ScenePF2e } from "./document.ts";
import { ItemPF2e } from "src/types/foundry/systems/pf2e/module/item";
import { ActorPF2e } from "src/types/foundry/systems/pf2e/module/actor";
import { ItemOriginFlag } from "src/types/foundry/systems/pf2e/module/chat-message/data.ts";
export declare class MeasuredTemplateDocumentPF2e<TParent extends ScenePF2e | null = ScenePF2e | null> extends MeasuredTemplateDocument<TParent> {
    get item(): ItemPF2e<ActorPF2e> | null;
}
export interface MeasuredTemplateDocumentPF2e<TParent extends ScenePF2e | null = ScenePF2e | null> extends MeasuredTemplateDocument<TParent> {
    get object(): MeasuredTemplatePF2e<this> | null;
    flags: DocumentFlags & {
        pf2e?: {
            origin?: ItemOriginFlag;
        };
    };
}
