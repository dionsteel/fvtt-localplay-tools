import { NPCPF2e } from "src/types/pf2e/module/actor";
import { SkillLongForm } from "src/types/pf2e/module/actor/types.ts";
import { DCAdjustment, DCOptions } from "./dc.ts";
declare function creatureIdentificationDCs(creature: NPCPF2e, { proficiencyWithoutLevel }?: DCOptions): CreatureIdentificationData;
interface RecallKnowledgeDC {
    dc: number;
    progression: number[];
    start: DCAdjustment;
}
interface CreatureIdentificationData {
    skills: SkillLongForm[];
    standard: RecallKnowledgeDC;
    lore: [RecallKnowledgeDC, RecallKnowledgeDC];
}
export { CreatureIdentificationData, creatureIdentificationDCs };
