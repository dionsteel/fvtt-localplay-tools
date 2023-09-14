import { defineStore } from "pinia";
import { useWorldStore, fetchJson } from "./world";
import { Actor5e, Character5e } from "@/interfaces/dnd5e/actor";
import { Ref, watch } from "vue";
import { Observable, Subject } from "rxjs";
import { filter, map, reduce } from "rxjs/operators";
import { applyDeep } from "@/lib/utils";
import { WebSocketSubject, webSocket } from "rxjs/webSocket";
import { SystemHelper } from "@/interfaces/core/helper";
import { DnD5eHelper } from "@/interfaces/dnd5e/helper";
import { ActorData5e } from "@/interfaces/dnd5e";
import { CharacterData } from "@/interfaces/dnd5e/actor5e";

export const useDnd5eGame = defineStore("dnd5e", () => {
  const world = useWorldStore();
  // const actors: Record<string, CharacterClient> = {};
  const helper = new DnD5eHelper();
  const allEvents = helper.allEvents;
  return { world, config: world.config, helper, events: allEvents };
});

/*

function refreshActor(id: string) {
  fetchJson<CharacterDnd5e>(`/actor/${id}`).subscribe((v) => actor$.next(v));
}

function getWebsocketUrl(id: string) {
  let proto = window.location.protocol == "https" ? "wss" : "ws";
  let host = window.location.hostname;
  let port = window.location.port != "80" ? ":" + window.location.port : "";
  return `${proto}://${host}${port}/actor/${id}`;
}

*/
