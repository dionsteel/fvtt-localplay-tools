import { Injectable } from "@angular/core";
import { PlayerSeatWrapper, SystemHelperService } from "./system-helper.service";
import { FoundryAPIService } from "../foundry-api.service";
import { Actor5e } from "src/types/dnd5e/module/documents/_module.mjs";
import SETTINGS from "../Settings";
import { PlayerSeatConfig } from "../interfaces";

export interface Game5e extends Game<Actor5e, Actors<Actor5e<TokenDocument<Scene> | null>>> {}

@Injectable({
  providedIn: "root",
})
export class SystemHelperDND5eService extends SystemHelperService {
  public static override SYSTEM_NAME: string = "dnd5e";
  override get game(): Game5e {
    return game as any;
  }
  override get canvas(): Canvas<Scene> {
    return canvas;
  }
  override get scene(): Scene {
    return canvas.scene;
  }
  override get settings(): SETTINGS {
    return SETTINGS;
  }
  override get actors(): Actors<Actor5e> {
    return this.game.actors;
  }

  constructor(api: FoundryAPIService) {
    super(api);
  }
}

export class PlayerSeatDND5e extends PlayerSeatWrapper {
  override actors: Actor5e[];
  override helper: SystemHelperDND5eService;
  override get focusedActor(): Actor5e<TokenDocument<Scene>> {
    return super.focusedActor as any;
  }
  override get _actors(): Actor5e[] {
    return this.actors;
  }
  constructor(helper: SystemHelperDND5eService, api: FoundryAPIService, config: PlayerSeatConfig) {
    super(helper, api, config);
  }
}
