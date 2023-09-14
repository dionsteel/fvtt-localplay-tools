import { defineStore } from "pinia";
import { useWorldStore, fetchJson } from "./world";
import { ActorPF2e, CharacterPF2e } from "@/interfaces/pf2e/actor";
import { Ref, watch } from "vue";
import { Observable, Subject } from "rxjs";
import { filter, map, reduce } from "rxjs/operators";
import { applyDeep } from "@/lib/utils";
import { WebSocketSubject, webSocket } from "rxjs/webSocket";
import { SystemHelper } from "@/interfaces/core/helper";
import { PF2eHelper } from "@/interfaces/pf2e/helper";

export interface ActorSocketEvent extends Record<string, any> {
  event: "updateActor" | "updateCombat" | "updateToken" | string;
  data: any;
  target?: any;
  eventSource?: string;
}
export interface ActorUpdateEvent extends ActorSocketEvent {
  event: "updateActor";
  data: Partial<ActorPF2e>;
  target: ActorPF2e;
}
export interface CharacterUpdateEvent extends ActorUpdateEvent {
  event: "updateActor";
  data: Partial<CharacterPF2e>;
  target: CharacterPF2e;
}
export interface ActorClient {
  actor: Ref<ActorPF2e>;
  events: WebSocketSubject<ActorSocketEvent>;
  updates: Observable<ActorUpdateEvent>;
}

export interface CharacterClient {
  actor?: Ref<CharacterPF2e>;
  events?: WebSocketSubject<ActorSocketEvent>;
  updates: Observable<CharacterUpdateEvent>;
}

export const usePF2eGame = defineStore("pf2e", () => {
  const world = useWorldStore();
  // const actors: Record<string, CharacterClient> = {};
  const helper = new PF2eHelper();
  const allEvents = helper.allEvents;
  return { world, config: world.config, helper, events: allEvents };
});

/*

function refreshActor(id: string) {
  fetchJson<CharacterPF2e>(`/actor/${id}`).subscribe((v) => actor$.next(v));
}

function getWebsocketUrl(id: string) {
  let proto = window.location.protocol == "https" ? "wss" : "ws";
  let host = window.location.hostname;
  let port = window.location.port != "80" ? ":" + window.location.port : "";
  return `${proto}://${host}${port}/actor/${id}`;
}

*/
