import { ActorPF2e } from "@/interfaces/pf2e/actor";
// import { ActorUpdateContext } from "@/interfaces/pf2e/actor/index";
import { ActorSheetDataPF2e } from "@/interfaces/pf2e/actor/sheet/data-types";
import { AbilityString, SaveType } from "@/interfaces/pf2e/actor/index";
import { MeleePF2e, WeaponPF2e } from "@/interfaces/pf2e/item";
import { ZeroToFour } from "@/interfaces/pf2e/data";
// import { SheetOptions } from "@/interfaces/pf2e/helper";
// import { any } from "@/interfaces/pf2e/scene";
import { ALIGNMENTS, ALIGNMENT_TRAITS } from "./values";
import { AbilityData, CreatureSystemData, SaveData, SkillData, CreaturePF2e } from "../creature";
import { ConfigPF2e } from "../../config";
import { SetElement } from "../../item/class";
type Alignment = SetElement<typeof ALIGNMENTS>;
type AlignmentTrait = SetElement<typeof ALIGNMENT_TRAITS>;
type CreatureTrait = keyof ConfigPF2e["PF2E"]["creatureTraits"] | AlignmentTrait;
type ModeOfBeing = "living" | "undead" | "construct" | "object";
interface GetReachParameters {
  action?: "interact" | "attack";
  weapon?: WeaponPF2e | MeleePF2e | null;
}
interface CreatureUpdateContext {
  allowHPOverage?: boolean;
}
type WithRank = {
  icon?: string;
  hover?: string;
  rank: ZeroToFour;
};
interface CreatureSheetData<TActor extends CreaturePF2e> extends ActorSheetDataPF2e<TActor> {
  data: CreatureSystemData & {
    abilities: Record<
      AbilityString,
      AbilityData & {
        label?: string;
      }
    >;
    attributes: {
      perception: CreatureSystemData["attributes"]["perception"] & WithRank;
    };
    saves: Record<SaveType, SaveData & WithRank>;
    skills: Record<string, SkillData & WithRank>;
  };
  languages: any;
  abilities: ConfigPF2e["PF2E"]["abilities"];
  skills: ConfigPF2e["PF2E"]["skills"];
  actorSizes: ConfigPF2e["PF2E"]["actorSizes"];
  alignments: {
    [K in Alignment]?: string;
  };
  rarity: ConfigPF2e["PF2E"]["rarityTraits"];
  frequencies: ConfigPF2e["PF2E"]["frequencies"];
  attitude: ConfigPF2e["PF2E"]["attitude"];
  pfsFactions: ConfigPF2e["PF2E"]["pfsFactions"];
  dying: {
    maxed: boolean;
    remainingDying: number;
    remainingWounded: number;
  };
}
export type { Alignment, AlignmentTrait, CreatureSheetData, CreatureTrait, CreatureUpdateContext, GetReachParameters, ModeOfBeing };
