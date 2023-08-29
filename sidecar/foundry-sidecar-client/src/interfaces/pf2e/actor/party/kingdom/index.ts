import { ImageFilePath } from "@/lib/utils";
// import { KINGDOM_SCHEMA } from "../kingdom";
import { KINGDOM_ABILITIES, KINGDOM_COMMODITIES, KINGDOM_LEADERSHIP, KINGDOM_SKILLS } from "./values";
import { ModelPropsFromSchema, SourceFromSchema } from "@/interfaces/pf2e/rules/rule-element/choice-set";
interface KingdomCHG {
  name: string;
  img: ImageFilePath;
  description: string;
  boosts: (KingdomAbility | "free")[];
  flaw: KingdomAbility | null;
}
interface KingdomGovernment extends KingdomCHG {
  skills: string[];
}
type KingdomAbility = (typeof KINGDOM_ABILITIES)[number];
type KingdomSkill = (typeof KINGDOM_SKILLS)[number];
type KingdomLeadershipRole = (typeof KINGDOM_LEADERSHIP)[number];
type KingdomCommodity = (typeof KINGDOM_COMMODITIES)[number];
type KingdomNationType = "territory" | "province" | "state" | "country" | "dominion";
type KingdomSchema = any; //typeof KINGDOM_SCHEMA;
type KingdomSource = any; //SourceFromSchema<typeof KINGDOM_SCHEMA>;
type KingdomData = any; // ModelPropsFromSchema<typeof KINGDOM_SCHEMA>;
type KingdomAbilityData = KingdomData["abilities"][KingdomAbility];
type KingdomLeadershipData = KingdomData["leadership"][KingdomLeadershipRole];
type KingdomCommodityData = KingdomData["resources"]["commodities"][KingdomCommodity];
type FameType = "fame" | "infamy";
export type {
  KingdomAbility,
  KingdomAbilityData,
  KingdomCommodity,
  KingdomCommodityData,
  KingdomCHG,
  KingdomData,
  KingdomGovernment,
  KingdomLeadershipData,
  KingdomLeadershipRole,
  KingdomNationType,
  KingdomSchema,
  KingdomSkill,
  KingdomSource,
  FameType,
};
