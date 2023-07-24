import { EnvironmentInjector, EventEmitter, Injectable, InjectionToken } from "@angular/core";
import { FoundryAPIService } from "../foundry-api.service";
import { PlayerSeatConfig, SeatAction } from "../interfaces";
import {
  BehaviorSubject,
  connect,
  connectable,
  filter,
  fromEvent,
  map,
  mergeMap,
  Observable,
  OperatorFunction,
  scan,
  share,
  Subject,
} from "rxjs";
import { state, mkState, eventHook, _mkState } from "src/lib/state";
import { ActorPF2e } from "src/types/pf2e/module/documents";
import SETTINGS from "../Settings";

@Injectable({
  providedIn: "root",
})
export class SystemHelperService {
  public static SYSTEM_NAME = "GENERIC";
  seatActorIds = [
    SETTINGS.get<string>("seat1Actor"),
    SETTINGS.get<string>("seat2Actor"),
    SETTINGS.get<string>("seat3Actor"),
    SETTINGS.get<string>("seat4Actor"),
    SETTINGS.get<string>("seat5Actor"),
  ];
  controlTokenChange = mkState(eventHook("controlToken").pipe(filter(([u, t]) => u.isSelf && t.isOwner)));
  currentControlledToken = this.controlTokenChange.pipe(
    filter(([u, t, c]) => c),
    map(([u, t, c]) => t)
  );
  currentControlledCharacter = this.currentControlledToken.pipe(map((t) => t.actor));
  currentControlledSeatIndex = this.currentControlledCharacter.pipe(
    map((a) => this.seatActorIds.findIndex((aid) => (a as any).id == aid)),
    filter((idx) => idx >= 0)
  );
  seats = this.seatActorIds.map((said, seatIndex) => {
    let actor: Actor = game.actors.get(said, { strict: false });
    if (!actor) {
      console.warn("InPersonHUD | actor not found", { actor, actorID: said, seatIndex });
    }
    let tokens = actor?.getActiveTokens();
    let firstToken: Token = tokens?.at(0) as Token;
    let tokenId = firstToken?.id;
    console.log("building seat", { actor, tokens, firstToken, tokenId, said, seatIndex });
    return new PlayerSeatWrapper(this, this.api, {
      seatIndex: seatIndex,
      actorId: said,
      userId: game.user.id,
      tokenId,
      actor,
      token: firstToken as Token,
    });
  });
  currentControlledSeat = _mkState(this.currentControlledSeatIndex.pipe(map((cs) => this.seats[cs])));

  constructor(private api: FoundryAPIService) {
    console.log(`InPersonHud | ${Object.getPrototypeOf(this).constructor.SYSTEM_NAME} Helper loaded.`);
  }
}

export class PlayerSeatWrapper {
  actor = state<Actor>(this.config.actor || game.actors.get(this.config.actorId));
  get _actor() {
    return this.actor.getValue();
  }
  currentToken = state<Token>((this.config.actor || this._actor)?.getActiveTokens(true, false) as any);
  fullInventory = state<Item[]>();
  actions = state<SeatAction[]>();
  isControlled = _mkState(this.helper.currentControlledSeatIndex.pipe(map((csi) => csi == this.config.seatIndex)));
  currentTargets = state<Token[], [User, Token, boolean]>(
    null,
    filter(([u, t, c]) => this.isControlled.value && u.id == game.user.id),
    scan((a, [user, tok, controlled]) => {
      if (controlled) {
        if (!a.includes(tok)) a.push(tok);
      } else {
        if (a.includes(tok)) a.findSplice((e) => e.id == tok.id);
      }
      return a;
    }, [] as Token[])
  );

  events = new Subject<{ type: string; data: any }>();

  constructor(public helper: SystemHelperService, public api: FoundryAPIService, public config: PlayerSeatConfig) {
    eventHook("targetToken").subscribe(this.currentTargets);
    eventHook("controlToken")
      .pipe(
        filter(([u, t, c]) => c && u.id == game.user.id && (t.actor as any).id == this.config.actorId),
        map(([u, t, c]) => t)
      )
      .subscribe(this.currentToken);
    this.actor.next(this.config.actor || game.actors.get(this.config.actorId));
    this.actor.pipe(mergeMap((a) => a.getActiveTokens(true, false) || [])).subscribe(this.currentToken);
    // game.user.targets/;
    this.currentToken.pipe(map((t) => canvas.tokens.controlled.includes(t))).subscribe(this.isControlled);
  }
}
