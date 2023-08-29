import { ActorPF2e } from "@/interfaces/pf2e/actor";
import { CreaturePF2e } from "@/interfaces/pf2e/actor/creature";
import { ModifierPF2e, StatisticModifier } from "@/interfaces/pf2e/actor/modifiers";
import { ItemPF2e } from "@/interfaces/pf2e/item";
import { WeaponTrait } from "@/interfaces/pf2e/item/weapon/index";
import { RollNotePF2e } from "@/interfaces/pf2e/notes";
// import { any } from "@/interfaces/pf2e/scene";
// import { CheckRoll, CheckType } from "@/interfaces/pf2e/system/check/index";
import { CheckDC, DegreeOfSuccessString } from "@/interfaces/pf2e/system/degree-of-success";
// import { Statistic } from "@/interfaces/pf2e/system/statistic";
type ActionGlyph = "A" | "D" | "T" | "R" | "F" | "a" | "d" | "t" | "r" | "f" | 1 | 2 | 3 | "1" | "2" | "3";
declare class CheckContextError extends Error {
  actor: ActorPF2e;
  slug: string;
  constructor(message: string, actor: ActorPF2e, slug: string);
}
interface BuildCheckContextOptions<ItemType extends ItemPF2e> {
  actor: ActorPF2e;
  item?: ItemType;
  rollOptions: {
    contextual: string[];
    generic: string[];
  };
  target?: ActorPF2e | null;
}
interface BuildCheckContextResult<ItemType extends ItemPF2e> {
  actor: ActorPF2e;
  item?: ItemType;
  rollOptions: string[];
  target?: ActorPF2e | null;
}
interface CheckContextOptions<ItemType extends ItemPF2e> {
  actor: ActorPF2e;
  buildContext: (options: BuildCheckContextOptions<ItemType>) => BuildCheckContextResult<ItemType>;
  target?: ActorPF2e | null;
}
interface CheckContextData<ItemType extends ItemPF2e> {
  item?: ItemType;
  modifiers?: ModifierPF2e[];
  rollOptions: string[];
  slug: string;
}
interface CheckContext<ItemType extends ItemPF2e> {
  actor: ActorPF2e;
  item?: ItemType;
  modifiers?: ModifierPF2e[];
  rollOptions: string[];
  slug: string;
  statistic:
    | any
    | (StatisticModifier & {
        rank?: number;
      });
  subtitle: string;
  type: any;
}
interface CheckResultCallback {
  actor: ActorPF2e;
  message?: any;
  outcome: DegreeOfSuccessString | null | undefined;
  roll: any;
}
interface SimpleRollActionCheckOptions<ItemType extends ItemPF2e> {
  actors: ActorPF2e | ActorPF2e[] | undefined;
  actionGlyph: ActionGlyph | undefined;
  title: string;
  checkContext: (context: CheckContextOptions<ItemType>) => Promise<CheckContext<ItemType>> | CheckContext<ItemType> | undefined;
  content?: (title: string) => Promise<string | null | undefined | void> | string | null | undefined | void;
  item?: (actor: ActorPF2e) => ItemType | undefined;
  traits: string[];
  event?: JQuery.TriggeredEvent | Event | null;
  difficultyClass?: CheckDC;
  difficultyClassStatistic?: (creature: CreaturePF2e) => any | null;
  extraNotes?: (selector: string) => RollNotePF2e[];
  callback?: (result: CheckResultCallback) => void;
  createMessage?: boolean;
  weaponTrait?: WeaponTrait;
  weaponTraitWithPenalty?: WeaponTrait;
  target?: () => {
    token: any;
    actor: ActorPF2e;
  } | null;
}
interface ActionDefaultOptions {
  event?: JQuery.TriggeredEvent | Event | null;
  actors?: ActorPF2e | ActorPF2e[];
  glyph?: ActionGlyph;
  modifiers?: ModifierPF2e[];
  callback?: (result: CheckResultCallback) => void;
}
interface SkillActionOptions extends ActionDefaultOptions {
  skill?: string;
  difficultyClass?: CheckDC;
}
export type {
  ActionGlyph,
  CheckContext,
  CheckContextData,
  CheckContextError,
  CheckContextOptions,
  CheckResultCallback,
  SimpleRollActionCheckOptions,
  ActionDefaultOptions,
  SkillActionOptions,
};
