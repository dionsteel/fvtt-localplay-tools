<script setup lang="ts">
import { Actor } from "@/interfaces/core";
import { useWorldStore, fetchJson } from "@/store/world";
import { from, useObservable, useSubject } from "@vueuse/rxjs";
import { Observable, Subject } from "rxjs";
import { concatMap, switchMap, filter, distinctUntilKeyChanged } from "rxjs/operators";
import { WebSocketSubject, webSocket } from "rxjs/webSocket";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { IonPage, IonHeader, IonToolbar, IonMenu, IonMenuButton, IonButtons, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader } from "@ionic/vue";
const route$ = useRoute();
const store = useWorldStore();
interface ActorSocketEvent {
  event: "actorUpdate" | "combatUpdate" | "tokenUpdate";
  data: any;
  target: any;
}
interface ActorUpdateEvent extends ActorSocketEvent {
  event: "actorUpdate";
  data: Partial<Actor>;
  target: Actor;
}
const props = defineProps<{ id: string }>();
// const actorid = ref(route$.params.id);
const actor$ = new Subject<Actor>();
function refreshActor(id: string) {
  fetchJson<Actor>(`/actor/${id}`).subscribe((v) => actor$.next(v));
}

function getWebsocketUrl(id: string) {
  let proto = window.location.protocol == "https" ? "wss" : "ws";
  let host = window.location.hostname;
  let port = window.location.port != "80" ? ":" + window.location.port : "";
  return `${proto}://${host}${port}/actor/${id}`;
}

watch(
  () => route$.params,
  ({ id }) => refreshActor(`${id}`),
  { immediate: true, flush: "post" }
);
const actor = useObservable(actor$);
refreshActor(props.id);
const actorUpdates = actor$
  .pipe(
    filter((a) => !!(a && a._id)),
    distinctUntilKeyChanged("_id"),
    switchMap((_a) => webSocket<ActorSocketEvent>({ url: getWebsocketUrl(_a._id) }))
  )
  .subscribe({
    next: (e) => {
      switch (e.event) {
        case "actorUpdate":
          console.log("Incoming Actor Update", e.event, e.data, e.target);
          for (let k in e.target) {
            if (typeof actor.value !== "undefined") {
              (actor.value as any)[k] = e.target[k];
            }
          }
          break;
        default:
          console.log("Incoming update", e.event, e.data, e.target);
      }
    },
  });
</script>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ actor?.name }}{{ id }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header> {{ actor?.name }} {{ actor?.type }} </ion-card-header>
        <ion-card-content>
          {{ actor?.system }}
          <div v-for="item of actor?.items">
            {{ item.type }} | {{ item.name }}<br />
            <p v-html="item.system.description?.value"></p>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
