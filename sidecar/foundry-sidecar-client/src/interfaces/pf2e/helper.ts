import { Ref } from "vue";
import { CharacterPF2e } from ".";
import { ActorHelper, SystemHelper } from "../core/helper";
import { PF2eTypes } from "./typemap";
import { CharacterStrike } from "./actor/character";
import { ActionVariant } from "./actor/actions";

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

  async setInitiativeStat(options: any = {}) {
    this.performRPC("setInitiative", options);
  }

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
