/// <reference types="jquery" resolution-mode="require"/>
import { CharacterPF2e } from "src/types/foundry/systems/pf2e/module/actor";
import { Statistic } from "src/types/foundry/systems/pf2e/module/system/statistic/index.ts";
declare function runEarnIncome({ actor, event, skill, level, days }: RunEarnIncomeParams): void;
interface RunEarnIncomeParams {
    actor: CharacterPF2e;
    event: JQuery.TriggeredEvent | undefined;
    skill: Statistic;
    level: number;
    days: number;
}
declare function askSkillPopupTemplate(skills: Statistic[]): string;
export { askSkillPopupTemplate, runEarnIncome };
