import { Injectable } from "@angular/core";
import { SystemHelperService, PlayerSeatWrapper } from "./system-helper.service";
import { FoundryAPIService } from "../foundry-api.service";
import { PlayerSeatConfig, SeatAction, SeatActionButton, SeatActionPF2e } from "../interfaces";
import { BehaviorSubject, filter, map, mergeMap, take, tap } from "rxjs";
import { Piped } from "src/lib/state";
import { ActorPF2e, ChatMessagePF2e, ItemPF2e, MacroPF2e, UserPF2e } from "src/types/pf2e/module/documents";
import { ScenePF2e, TokenDocumentPF2e } from "src/types/pf2e/module/scene";
import { MeleePF2e, WeaponPF2e } from "src/types/pf2e/module/item";
import { ActorsPF2e } from "src/types/pf2e/module/collection/actors";
import { EncounterPF2e } from "src/types/pf2e/module/encounter";
import { CanvasPF2e } from "src/types/pf2e/module/canvas";
import SETTINGS from "../Settings";

@Injectable({
  providedIn: "root",
})
export class SystemHelperPF2eService extends SystemHelperService {
  public static override SYSTEM_NAME: string = "pf2e";
  override seats: PlayerSeatPF2e[];
  public override get game(): Game<
    ActorPF2e<TokenDocumentPF2e<ScenePF2e>>,
    ActorsPF2e<ActorPF2e<null>>,
    ChatMessagePF2e,
    EncounterPF2e,
    ItemPF2e,
    MacroPF2e,
    ScenePF2e,
    UserPF2e
  > {
    return game as any;
  }

  public override get scene(): ScenePF2e {
    return canvas.scene as any;
  }
  public override get canvas(): CanvasPF2e {
    return canvas as any;
  }
  public override get actors(): Actors<ActorPF2e> {
    return this.game.actors;
  }
  // () {
  //   return this.game.actors;
  // }

  constructor(api: FoundryAPIService) {
    super(api);
    console.log("InPersonHud | Pathfinder2e Helper Loaded.");
    // SETTINGS.events
    //   .pipe(
    //     filter((e) => ["cycleActions", "cycleStrikes", "performCurrentStrike"].includes(e.type)),
    //     tap((e) => console.log(e))
    //   )
    //   .subscribe((e) => {
    //     console.log("finding current seat", e);
    //     this.currentControlledSeat.pipe(take(1)).subscribe((seat) => {
    //       console.log("got seat", seat, "sending event", e);
    //       seat.events.next(e);
    //     });
    //   });
  }
}
const system = "pf2e";

export class PlayerSeatPF2e extends PlayerSeatWrapper {
  override actors: ActorPF2e<TokenDocumentPF2e<ScenePF2e>>[];
  override get focusedActor(): ActorPF2e<TokenDocumentPF2e<ScenePF2e>> {
    return super.focusedActor as any;
  }
  override get _actors(): ActorPF2e[] {
    return this.actors;
  }
  override helper: SystemHelperPF2eService;
  constructor(helper: SystemHelperPF2eService, api: FoundryAPIService, config: PlayerSeatConfig) {
    super(helper, api, config);
  }
}
