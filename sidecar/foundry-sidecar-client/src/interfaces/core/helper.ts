import { GenericEffect, SystemTypeMap } from "./actor";
import { defineStore } from "pinia";
import { useWorldStore } from "../../store/world";
import { Actor, Character } from "@/interfaces/core/actor";
import { ComputedRef, Ref, computed, ref, watch } from "vue";
import { Observable, Subject, firstValueFrom } from "rxjs";
import { filter, map, reduce, scan, share } from "rxjs/operators";
import { applyDeep } from "@/lib/utils";
import { WebSocketSubject, webSocket } from "rxjs/webSocket";
import { Token } from "./token";
import { Item } from "./items/item";
import { ChatMessagePF2e, ChatMessageSourcePF2e } from "../pf2e/chat-message";
import { ActorItemTypes, ItemTypes } from "./items/itemTypes";
import { useObservable, from } from "@vueuse/rxjs";

export interface TermJSON {
  /** Term ID */
  id: string;
  /** Term Index */
  idx: number;
  /** Term Dice Faces */
  faces: string;
  /** Has Total?; */
  hasTotal: boolean;
  /** Dice Term; */
  term: any;
}

export type SocketEventNames = keyof SocketEventMap;

export type SocketEvent<N, T> = { event: N; eventSource?: ActorHelper } & T;

export interface SocketEventMap<S extends SystemTypeMap = SystemTypeMap, TokenType = S["TokenSystemType"], ActorType = S["ActorSystemType"], ItemType = S["ItemDataTypes"]> {
  createActor: SocketEvent<"createActor", { actor: Partial<Actor<S>> }>;
  updateActor: SocketEvent<"updateActor", { actor: Partial<Actor<S>> }>;
  deleteActor: SocketEvent<"deleteActor", { actor: Partial<Actor<S>> }>;
  createToken: SocketEvent<"createToken", { actor: Partial<Token<S>> }>;
  deleteToken: SocketEvent<"deleteToken", { actor: Partial<Token<S>> }>;
  updateToken: SocketEvent<"updateToken", { actor: Partial<Token<S>> }>;
  controlToken: SocketEvent<"controlToken", { token: Partial<Token<S>>; controlled: boolean }>;
  targetToken: SocketEvent<"targetToken", { token: Partial<Token<S>>; targetted: boolean; user?: any }>;
  createItem: SocketEvent<"createItem", { item: Partial<Item<S["BaseItemData"], S>>; options: any; userId: string }>;
  deleteItem: SocketEvent<"deleteItem", { item: Partial<Item<S["BaseItemData"], S>>; options: any; userId: string }>;
  updateItem: SocketEvent<"updateItem", { item: Partial<Item<S["BaseItemData"], S>>; options: any; userId: string }>;
  createActiveEffect: SocketEvent<"createActiveEffect", { effect: GenericEffect; options: { render?: boolean; renderSheet?: boolean; temporary?: boolean }; userId: string }>;
  deleteActiveEffect: SocketEvent<"deleteActiveEffect", { effect: GenericEffect; options: { render?: boolean; renderSheet?: boolean; temporary?: boolean }; userId: string }>;
  updateActiveEffect: SocketEvent<"updateActiveEffect", { effect: GenericEffect; options: { render?: boolean; renderSheet?: boolean; temporary?: boolean }; userId: string }>;
  createCombat: SocketEvent<"createCombat", { data: any }>;
  deleteCombat: SocketEvent<"deleteCombat", { data: any }>;
  updateCombat: SocketEvent<"updateCombat", { data: any }>;
  rollRequest: SocketEvent<
    "rollRequest",
    { id: string; data: { terms: TermJSON[]; controlled: { actor: string[]; token: string[] } }; controlled: { actor: string[]; token: string[] } }
  >;
  rollReply: SocketEvent<"rollReply", { rollId: string; data: (TermJSON & any)[] }>;
  renderChatMessage: SocketEvent<"renderChatMessage", { message: Partial<ChatMessagePF2e>; html: string; source: ChatMessageSourcePF2e }>;
}

export interface ActorSocketEvent<S extends SystemTypeMap = SystemTypeMap, K extends SocketEventNames = SocketEventNames> extends Record<string, any> {
  event: K;
  // data: SocketEventMap<S>[K]["data"];
  target?: any;
  eventSource?: ActorHelper<S>;
}

export type ActorUpdateEvent<S extends SystemTypeMap = SystemTypeMap> = ActorSocketEvent<S, "updateActor">;

export interface CharacterUpdateEvent<S extends SystemTypeMap = SystemTypeMap> extends ActorUpdateEvent<S> {
  event: "updateActor";
  actor: Partial<Character>;
  target: Character;
}

export interface ActorClient {
  actor: Ref<Actor>;
  events: WebSocketSubject<ActorSocketEvent>;
  updates: Observable<ActorUpdateEvent>;
}

export interface CharacterClient {
  actor?: Ref<Character>;
  events?: WebSocketSubject<ActorSocketEvent>;
  updates: Observable<CharacterUpdateEvent>;
}

export class ActorHelper<S extends SystemTypeMap = SystemTypeMap> {
  private world = useWorldStore();
  actor: Ref<Character<S>>;
  events: Observable<ActorSocketEvent<S>>;
  updates: Observable<CharacterUpdateEvent<S>>;
  socket: WebSocketSubject<ActorSocketEvent<S>>;
  itemTypes: ComputedRef<ActorItemTypes<S>>;
  actor$: Observable<Character<S>>;
  loaded: Promise<boolean>;

  constructor(public id: string) {
    this.actor = ref({ id: this.id, _id: this.id } as any); // useObservable(this.actor$);
    this.actor$ = this.world.config.fetchJson$<Character<S>>(`/actor/${this.id}`);
    this.actor$.subscribe((a) => applyDeep(this.actor.value, a));
    this.loaded = firstValueFrom(this.actor$)
      .then((a) => this.applyChanges(a))
      .then(
        (a) => true,
        (e) => false
      );
    this.socket = this.world.config.getSocketSubject<ActorSocketEvent<S>>(`/actor/${this.id}`);
    this.itemTypes = computed(
      () =>
        this.actor?.value?.items?.reduce((a: any, c: any) => {
          if (!a[c.type]) {
            a[c.type] = [];
          }
          a[c.type].push(c as any);
          return a;
        }, {} as ActorItemTypes<S>) as ActorItemTypes<S>
    );
    this.events = this.socket.pipe(
      map((e) => {
        console.log(e);
        e.eventSource = this; //`/actor/${this.id}`;
        return e;
      }),
      share()
    );
    this.updates = this.events.pipe<CharacterUpdateEvent<S>>(filter<any>((e) => e.event == "updateActor"));
    this.updates.subscribe((e) => {
      if (typeof this.actor?.value !== "undefined") {
        applyDeep(this.actor?.value as any, (e.actor || e.data) as any);
      }
    });
  }
  applyChanges(partial: Partial<Character<S>>) {
    if (typeof this.actor?.value == "undefined") {
      (this.actor.value as any) = {};
    }
    return applyDeep(this.actor.value, partial);
  }
  answerRoll(rollId: string, rollData: any) {
    this.socket.next({ event: "rollReply", rollId, data: rollData });
  }

  async getActor() {
    return this.actor;
  }

  get name() {
    return this.actor?.value?.name;
  }
  get system() {
    return this.actor?.value?.system;
  }
  get effects() {
    return this.actor?.value?.effects;
  }
  get flags() {
    return this.actor?.value?.flags;
  }
  get folder() {
    return this.actor?.value?.folder;
  }
  get img() {
    return this.actor?.value?.img;
  }
  get items() {
    return this.actor?.value?.items;
  }
  get ownership() {
    return this.actor?.value?.ownership;
  }
  get prototypeToken() {
    return this.actor?.value?.prototypeToken;
  }
  get sort() {
    return this.actor?.value?.sort;
  }
  get type() {
    return this.actor?.value?.type;
  }
  get _id() {
    return this.actor?.value?._id || this.id;
  }
  // get id(){ return this.actor?.value?._id;}
  // get _stats() {
  //   return this.actor?.value?._stats;
  // }
}

export class SystemHelper<S extends SystemTypeMap = SystemTypeMap> {
  selectedActors = new Subject<string>().pipe(
    reduce((a, c) => {
      if (!a.includes(c)) {
        a.push(c);
      }
      return a;
    }, [] as string[])
  );
  world = useWorldStore();

  actors: Record<string, ActorHelper<S>> = {};
  allEvents = new Subject<ActorSocketEvent<S>>();

  chat = useObservable(
    this.allEvents.pipe(
      filter((e) => e.event == "renderChatMessage"),
      scan((a, c) => {
        a.push(c);
        return a;
      })
    )
  );

  rolls = useObservable(
    this.allEvents.pipe(
      filter((e) => e.event == "rollRequest"),
      scan((a, c) => {
        a.push(c);
        return a;
      }, [] as any[])
    ) as Observable<ActorSocketEvent<S, "rollRequest">[]>,
    { initialValue: [] }
  );

  allActors = computed(() => Object.values(this.actors));

  constructor() {
    this.updateActors();
    watch(
      () => this.world.currentWorldActors,
      (val, prev, onCleanup) => {
        this.updateActors();
      },
      { immediate: true }
    );
  }
  updateActors() {
    for (let al of this.world.currentWorldActors) {
      if (!this.actors[al.id]) {
        const actorHelper = new ActorHelper<S>(al.id);
        actorHelper.events.subscribe(this.allEvents);
        this.actors[al.id] = actorHelper;
      }
    }
  }

  async getActor(id: string) {
    return (await this.getActorHelper(id)).getActor();
  }
  async getActorHelper(id: string) {
    // await this.getActor(id);
    console.log("getting Actor helper", id, this.actors);
    if (!this.actors || !this.actors) {
      this.actors = {};
    }

    let h = this.actors[id];
    if (!h) {
      h = this.actors[id] = new ActorHelper(id);
    }
    await h.loaded;
    return h;
  }
}
