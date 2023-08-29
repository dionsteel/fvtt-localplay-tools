<script lang="ts" setup>
import { ajax } from "rxjs/ajax";
import { fromFetch } from "rxjs/fetch";
import { concatMap, map } from "rxjs/operators";
import { useObservable } from "@vueuse/rxjs";
import { IonItem, IonList, IonListHeader, IonLabel, IonIcon, IonButton } from "@ionic/vue";
import { Actor, ActorListing } from "@/interfaces/core";
import { useWorldStore } from "@/store/world";
import { useRouter } from "vue-router";
import { addSharp, removeSharp } from "ionicons/icons";
import ActorSummaryCardPF2e from "./ActorSummaryCardPF2e.vue";
const store = useWorldStore();
const router = useRouter();

const actors = store.ownedActors;
// const actors = useObservable<ActorListing[]>(ajax('http://localhost:3000/actor').pipe(map(r => {
//   console.log('got response', r);
//   return r.response as any
// })));
function addSelectedActor(actor: ActorListing) {
  console.log("Adding actor to list", actor, store.currentWorldActors);
  store.addSelectedActor(actor.id);
}
function removeSelectedActor(actor: ActorListing) {
  console.log("Adding actor to list", actor, store.currentWorldActors);
  store.removeSelectedActor(actor.id);
}
</script>

<template>
  <div class="actor-list"></div>
  <ion-page
    ><ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title> Character Selection </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list id="actors-list">
        <ion-list-header>Selected Characters</ion-list-header>
        <IonItem v-for="actor of store.currentWorldActors" :router-link="actor?.id" router-direction="forward">
          <!-- <ActorSummaryCardPF2e :actor="store" -->
          <img class="actorPortrait" :src="actor?.image" slot="start" />
          <ion-label>{{ actor?.name }}</ion-label>
          <IonButton @click="removeSelectedActor(actor)" slot="end"><IonIcon :icon="removeSharp"></IonIcon></IonButton>
        </IonItem>
      </ion-list>
      <ion-list id="actors-list">
        <ion-list-header>Owned Actors</ion-list-header>
        <IonItem v-for="actor of actors">
          <img class="actorPortrait" :src="actor.image" slot="start" />
          <ion-label>{{ actor?.name }}</ion-label>
          <IonButton @click="addSelectedActor(actor)"><IonIcon :icon="addSharp"></IonIcon></IonButton>
        </IonItem>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<style>
img.actorPortrait {
  max-width: 80px;
  max-height: 80px;
}
</style>
