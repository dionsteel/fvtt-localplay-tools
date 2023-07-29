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
import SETTINGS, { EventSubject } from "../Settings";

@Injectable({
  providedIn: "root",
})
export class SystemHelperService {
  get game(): Game<Actor> {
    return game as Game<Actor>;
  }
  get canvas(): Canvas<Scene> {
    return canvas;
  }
  get scene(): Scene {
    return canvas.scene;
  }
  get settings(): SETTINGS {
    return SETTINGS;
  }
  get events() {
    return SETTINGS.events;
  }

  public get actors() {
    return this.game.actors;
  }

  public static SYSTEM_NAME = "GENERIC";
  seatActorIds = [
    SETTINGS.get<string[]>("seat1Actor"),
    SETTINGS.get<string[]>("seat2Actor"),
    SETTINGS.get<string[]>("seat3Actor"),
    SETTINGS.get<string[]>("seat4Actor"),
    SETTINGS.get<string[]>("seat5Actor"),
  ];
  controlTokenChange = mkState(eventHook("controlToken").pipe(filter(([u, t]) => u.isSelf && t.isOwner)));
  currentControlledToken = this.controlTokenChange.pipe(
    filter(([u, t, c]) => c),
    map(([u, t, c]) => t),
  );
  currentControlledCharacter = this.currentControlledToken.pipe(map((t) => t.actor));
  currentControlledSeatIndex = this.currentControlledCharacter.pipe(
    map((a) => this.seatActorIds.findIndex((aid) => (a as any).id == aid)),
    filter((idx) => idx >= 0),
  );
  seats = this.seatActorIds.map((said, seatIndex) => {
    let actors: Actor[] = said.map((id) => game.actors.get(id, { strict: false }));
    if (!actors) {
      console.warn("InPersonHUD | actor not found", { actors, actorID: said, seatIndex });
    }

    console.log("building seat", { actors, said, seatIndex });
    return new PlayerSeatWrapper(this, this.api, {
      seatIndex: seatIndex,
      actorIds: said,
      userId: game.user.id,
      actors,
    });
  });
  currentControlledSeat = _mkState(this.currentControlledSeatIndex.pipe(map((cs) => this.seats[cs])));

  constructor(private api: FoundryAPIService) {
    console.log(`InPersonHud | ${Object.getPrototypeOf(this).constructor.SYSTEM_NAME} Helper loaded.`);
  }
}

export class PlayerSeatWrapper {
  actors = this.config.actors || this.config.actorIds.map((aid) => game.actors.get(aid));
  get _actors() {
    return this.actors;
  }

  focusedActorIndex = 0;
  get focusedActor() {
    return this.actors[this.focusedActorIndex];
  }

  actorTokens: { [actorId: string]: Token } = this.actors.reduce((o, a) => {
    let cts = a?.getActiveTokens();
    cts.forEach((t) => (o[(a as any).id] = t));
    return o;
  }, {});

  get currentToken() {
    return this.actorTokens[(this.focusedActor as any).id];
  }

  isControlled = state<boolean>();
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
    }, [] as Token[]),
  );

  events = new Subject<{ type: string; data: any }>();

  constructor(
    public helper: SystemHelperService,
    public api: FoundryAPIService,
    public config: PlayerSeatConfig,
  ) {
    eventHook("targetToken").subscribe(this.currentTargets);
    eventHook("controlToken")
      .pipe(filter(([u, t, c]) => u.id == game.user.id && this.config.actorIds.includes((t.actor as any).id)))
      .subscribe(([user, token, controlled]) => {
        this.isControlled.next(controlled);
        if (controlled) {
          if (this.config.seatIndex > 1) {
            (document.querySelector(':root') as HTMLElement).style.setProperty("--seat-rotation", "180deg");
          } else {
            (document.querySelector(':root') as HTMLElement).style.setProperty("--seat-rotation", "0deg");
          }
          let contActor = this.actors.findIndex((a) => (a as any).id == (token.actor as any).id);
          if (contActor) {
            this.focusedActorIndex = Math.max(0, contActor);

          }
        } else {
        }
      });
  }
}
