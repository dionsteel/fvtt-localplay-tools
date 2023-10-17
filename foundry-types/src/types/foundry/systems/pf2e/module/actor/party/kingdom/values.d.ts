import { KingdomAbility, KingdomCHG, KingdomGovernment, KingdomLeadershipRole, KingdomSkill } from "./types.ts";
import { ModifierAdjustment, RawModifier } from "src/types/foundry/systems/pf2e/module/actor/modifiers.ts";
declare const KINGDOM_ABILITIES: readonly ["culture", "economy", "loyalty", "stability"];
declare const KINGDOM_ABILITY_LABELS: Record<"culture" | "economy" | "loyalty" | "stability", string>;
declare const KINGDOM_LEADERSHIP: readonly ["ruler", "counselor", "general", "emissary", "magister", "treasurer", "viceroy", "warden"];
declare const KINGDOM_COMMODITIES: readonly ["food", "lumber", "luxuries", "ore", "stone"];
declare const KINGDOM_SKILLS: readonly ["agriculture", "arts", "boating", "defense", "engineering", "exploration", "folklore", "industry", "intrigue", "magic", "politics", "scholarship", "statecraft", "trade", "warfare", "wilderness"];
declare const KINGDOM_SKILL_LABELS: Record<"magic" | "exploration" | "defense" | "agriculture" | "arts" | "boating" | "engineering" | "folklore" | "industry" | "intrigue" | "politics" | "scholarship" | "statecraft" | "trade" | "warfare" | "wilderness", string>;
declare const KINGDOM_SKILL_ABILITIES: Record<KingdomSkill, KingdomAbility>;
declare const CONTROL_DC_BY_LEVEL: number[];
declare const KINGDOM_SIZE_DATA: {
    1: {
        faces: number;
        type: "territory";
        controlMod: number;
    };
    10: {
        faces: number;
        type: "province";
        controlMod: number;
    };
    25: {
        faces: number;
        type: "state";
        controlMod: number;
    };
    50: {
        faces: number;
        type: "country";
        controlMod: number;
    };
    100: {
        faces: number;
        type: "dominion";
        controlMod: number;
    };
};
type VacancyPenalty = {
    adjustments?: ModifierAdjustment[];
    modifiers?: Record<string, RawModifier[]>;
};
declare const VACANCY_PENALTIES: Record<KingdomLeadershipRole, () => VacancyPenalty>;
declare function getKingdomABCData(): {
    charter: Record<string, KingdomCHG | undefined>;
    heartland: Record<string, KingdomCHG | undefined>;
    government: Record<string, KingdomGovernment | undefined>;
};
export { CONTROL_DC_BY_LEVEL, KINGDOM_ABILITIES, KINGDOM_ABILITY_LABELS, KINGDOM_COMMODITIES, KINGDOM_SIZE_DATA, KINGDOM_SKILLS, KINGDOM_SKILL_ABILITIES, KINGDOM_SKILL_LABELS, KINGDOM_LEADERSHIP, VACANCY_PENALTIES, getKingdomABCData, };
