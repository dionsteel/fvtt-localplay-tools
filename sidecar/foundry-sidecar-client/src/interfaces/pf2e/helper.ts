import { Ref } from "vue";
import { CharacterPF2e } from ".";
import { ActorHelper, SystemHelper } from "../core/helper";
import { PF2eTypes } from "./typemap";
import { CharacterStrike } from "./actor/character";
import { ActionVariant } from "./actor/actions";

import { ModifierPF2e } from "@/interfaces/pf2e/actor/modifiers";
import { RollTwiceOption } from "@/interfaces/pf2e/system/check";
import { DamageType } from "@/interfaces/pf2e/system/damage";
import { CheckDC } from "@/interfaces/pf2e/system/degree-of-success";
import { Rolled } from "@/interfaces/pf2e/system/roll";
import { DamageRollParams } from "@/interfaces/pf2e/system/rolls";
import { config } from "./lang/all";

const elementTraits = {
  air: config.PF2E.TraitAir,
  earth: config.PF2E.TraitEarth,
  fire: config.PF2E.TraitFire,
  metal: config.PF2E.TraitMetal,
  water: config.PF2E.TraitWater,
  wood: config.PF2E.TraitWood,
};
type ElementTrait = keyof typeof elementTraits;

/** Possible parameters of a RollFunction */
interface RollParameters {
  /** The triggering event */
  event?: MouseEvent | JQuery.TriggeredEvent;
  /** Any options which should be used in the roll. */
  options?: string[] | Set<string>;
  /** Optional DC data for the roll */
  dc?: CheckDC | null;
  /** Callback called when the roll occurs. */
  callback?: (roll: Rolled<any>) => void;
  /** Additional modifiers */
  modifiers?: ModifierPF2e[];
}

interface AttackRollParams extends RollParameters {
  /** A target token: pulled from `game.users.targets` if not provided */
  target?: any | null;
  /** Retrieve the formula of the strike roll without following through to the end */
  getFormula?: true;
  /** Should this strike consume ammunition, if applicable? */
  consumeAmmo?: boolean;
  /** The strike is involve throwing a thrown melee weapon or to use the melee usage of a combination weapon */
  altUsage?: "thrown" | "melee" | null;
  /** Should this roll be rolled twice? If so, should it keep highest or lowest? */
  rollTwice?: RollTwiceOption;
}

interface BlastAttackParams extends AttackRollParams {
  mapIncreases: number;
  element: ElementTrait;
  damageType: DamageType;
  melee: boolean;
}

interface BlastDamageParams extends DamageRollParams {
  element: ElementTrait;
  damageType: DamageType;
  melee: boolean;
  actionCost?: number;
  outcome?: "success" | "criticalSuccess";
}

export class ActorHelperPF2e extends ActorHelper<PF2eTypes> {
  async performStrike(strikeIdx: number, variantIdx: number = 0, options: any = {}) {
    // const strikeIdx = (await this.getActor())?.value?.system?.actions.findIndex(a=>a==strike);
    console.log("performStrike", strikeIdx, this.actor, variantIdx);
    this.socket.next({ event: "playerRPC", action: "performStrike", options: { strikeIdx, variantIdx, ...options } });
  }

  async rollStrikeDamage(identifier: string, critical: boolean = false, options: any = {}) {
    this.socket.next({ event: "playerRPC", action: "rollStrikeDamage", options: { identifier, critical, ...options } });
  }
  async performStrikeAux(strikeIdx: number, aux?: number, options: any = {}) {
    // const strikeIdx = (await this.getActor()).value?.system?.actions?.findIndex((a) => a == strike);
    // const auxAction = strike.auxiliaryActions[0]
    this.socket.next({ event: "playerRPC", action: "performStrikeAux", options: { strikeIdx, aux, ...options } });
  }

  async performRPC(action: string, options: any = {}) {
    this.socket.next({ event: "playerRPC", action, options });
  }
  async performAction(actionId: any, options: any = {}) {
    this.performRPC("performAction", { actionId, ...options });
  }
  async performElementalBlast(options: BlastAttackParams) {
    this.performRPC("performAction", options);
  }
  async performGenericAction(slug: any, options: any = {}) {
    // const strikeIdx = (await this.getActor())?.value?.system?.actions.findIndex(a=>a==strike);
    // console.log("performStrike", strikeIdx, this.actor, variantIdx);
    this.performRPC("performSkillAction", { slug, ...options });
  }
  async rollSavingThrow(options: any = {}) {
    this.performRPC("rollSavingThrow", options);
  }
  async rollSkillCheck(options: any = {}) {
    this.performRPC("rollSkillCheck", options);
  }
  async rollPerceptionCheck(options: any = {}) {
    this.performRPC("rollPerceptionCheck", options);
  }
  async rollInitiative(options: any = {}) {
    this.performRPC("rollInitiative", options);
  }
  setItemToggle(options: any = {}) {
    this.performRPC("setRuleToggle", options);
  }

  // async setInitiativeStat(options: any = {}) {
  //   this.performRPC("setInitiative", options);
  // }

  async castSpell(options: any = {}) {
    this.performRPC("castSpell", options);
  }
}
export class PF2eHelper extends SystemHelper<PF2eTypes> {
  declare actors: Record<string, ActorHelperPF2e>;
  override createActorHelper(id: string): ActorHelperPF2e {
    return new ActorHelperPF2e(id);
  }
}
