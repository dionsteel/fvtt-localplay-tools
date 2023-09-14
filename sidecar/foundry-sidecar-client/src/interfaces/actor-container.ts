import { fetchJson, useWorldStore } from "@/store/world";
import { Actor, SystemTypeMap } from "./core";
import { applyDeep, PartialDeep } from "@/lib/utils";
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { Token } from "./core/token";
import { Ref, UnwrapRef, computed, ref } from "vue";
import { ActorItemTypes, ItemTypes } from "./core/items/itemTypes";
import { KnownSystemIds, systemHelpers } from "./system-helpers";
import { SystemHelper } from "./core/helper";
import { PF2eTypes } from "./pf2e/typemap";
import { ActorPF2e } from "./pf2e/actor";
import { Actor5e, DnD5eTypes } from "./dnd5e";

export interface ActorSocketEvent {
  event: "actorUpdate" | "combatUpdate" | "tokenUpdate";
  data: any;
  target: any;
}
export interface ActorUpdateEvent extends ActorSocketEvent {
  event: "actorUpdate";
  data: Partial<Actor>;
  target: Actor;
}

export class ActorContainer<S extends SystemTypeMap = SystemTypeMap, T extends Actor = Actor<S>> {
  actorUpdates: WebSocketSubject<ActorSocketEvent>;
  public token?: Ref<UnwrapRef<Token<S>>>;
  public actor: Ref<UnwrapRef<T>>; // = ref(this._actor);
  public combat: any;
  private store = useWorldStore();
  public itemTypes = computed(() =>
    this.actor.value.items.reduce((itemTypes, item) => {
      if (!itemTypes[item.type as string]) {
        (itemTypes as any)[item.type] = [];
      }
      (itemTypes as any)[item.type].push(item);
      return itemTypes;
    }, {} as ActorItemTypes<S>)
  );

  public isActive = computed(() => this.token?.value?.controlled);

  public portaitImage = computed(() => this.actor.value.img);
  public tokenImage = computed(() => this.token?.value.img);
  public helper = this._makeSystemHelper();

  _makeSystemHelper() {
    let sysid: KnownSystemIds = this.store.activeGame?.system.id || ("generic" as any);

    let _sh = systemHelpers;
    let helper = _sh[sysid];
    if (typeof helper !== "undefined") {
      return helper;
    } else {
      return SystemHelper<S>;
    }
  }

  constructor(private _actor: T) {
    this.actor = ref(this._actor);
    this.actorUpdates = webSocket<ActorSocketEvent>({ url: this.getWebsocketUrl(this.actor.value._id) });
    this.actorUpdates.subscribe({
      next: (e) => {
        this.processIncomingUpdate(e);
      },
    });
  }

  refreshActor(id: string) {
    fetchJson<T>(`/actor/${id}`).subscribe((v) => this.updateActor(v));
  }

  processIncomingUpdate<E extends ActorSocketEvent = ActorSocketEvent>(e: E) {
    switch (e.event) {
      case "actorUpdate":
        console.log("Incoming Actor Update", e.event, e.data, e.target);
        this.updateActor(e.target);
        break;
      case "tokenUpdate":
        console.log("Incoming Token Update", e.event, e.data, e.target);
        this.updateToken(e.target);
        break;
      case "actorUpdate":
        console.log("Incoming Actor Update", e.event, e.data, e.target);
        this.updateActor(e.target);
        break;
      default:
        console.log("Incoming update", e.event, e.data, e.target);
    }
  }

  updateActor(changes: PartialDeep<T>) {
    if (typeof this.actor.value !== "undefined") {
      applyDeep(this.actor.value as T, changes);
    }
  }
  updateToken(changes: PartialDeep<UnwrapRef<Token<S>>>) {
    if (typeof this.token == "undefined") {
      this.token = ref({}) as any;
    }
    if (typeof this.token !== "undefined") {
      applyDeep(this.token.value, changes);
    }
  }
  updateCombat(changes: PartialDeep<any>) {
    if (typeof this.combat == "undefined") {
      this.combat = ref({});
    }
    if (typeof this.combat !== "undefined") {
      applyDeep(this.combat.value as any, changes);
    }
  }
  getWebsocketUrl(id: string) {
    let proto = window.location.protocol == "https" ? "wss" : "ws";
    let host = window.location.hostname;
    let port = window.location.port != "80" ? ":" + window.location.port : "";
    return `${proto}://${host}${port}/actor/${id}`;
  }
}

export class ActorContainerPF2e extends ActorContainer<PF2eTypes, ActorPF2e> {}
export class ActorContainer5e extends ActorContainer<DnD5eTypes, Actor5e> {}

export async function getCurrentActorContainers<S extends SystemTypeMap = SystemTypeMap>() {
  const store = useWorldStore();
  if (store.currentWorldActors) {
    return Promise.all(
      store.currentWorldActors.map((al) =>
        fetch(`/actor/${al?.id}`)
          .then((r) => r.json())
          .then((_actor) => new ActorContainer<S>(_actor))
      )
    );
  }
}
