import { Injectable } from "@angular/core";
import { PlayerSeatWrapper, SystemHelperService } from "./system-helper.service";
import { FoundryAPIService } from "../foundry-api.service";
// import { Actor5e } from "src/types/dnd5e/module/documents/_module.mjs";

import SETTINGS from "../Settings";
import { PlayerSeatConfig } from "../interfaces";
import { Actor5E, Token5E } from "../interfaces/5e/actor5e";
import { Item5E } from "../interfaces/5e/item";

export interface Game5e extends Game<Actor5E, Actors<Actor5E>, ChatMessage, Combat, Item5E, Macro, Scene, User> {}
export interface Canvas5E extends Canvas<Scene> {
  tokens: TokenLayer<Token5E>;
}

@Injectable({
  providedIn: "root",
})
export class SystemHelperDND5eService extends SystemHelperService {
  public static override SYSTEM_NAME: string = "dnd5e";
  override get game(): Game5e {
    return game as any;
  }
  override get canvas(): Canvas5E {
    return canvas as any;
  }
  override get scene(): Scene {
    return canvas.scene;
  }
  override get settings(): SETTINGS {
    return SETTINGS;
  }
  override get actors(): Actors<Actor5E> {
    return this.game.actors;
  }

  constructor(api: FoundryAPIService) {
    super(api);
  }
}

export class PlayerSeatDND5e extends PlayerSeatWrapper {
  override actors: Actor5E[];
  override helper: SystemHelperDND5eService;
  override get focusedActor(): Actor5E {
    return super.focusedActor as any;
  }
  override get _actors(): Actor5E[] {
    return this.actors;
  }
  constructor(helper: SystemHelperDND5eService, api: FoundryAPIService, config: PlayerSeatConfig) {
    super(helper, api, config);
  }
}
