<script lang="ts" setup>
import { ajax } from "rxjs/ajax";
import { fromFetch } from "rxjs/fetch";
import { concatMap, map } from "rxjs/operators";
import { useObservable } from "@vueuse/rxjs";
import {
  IonItem,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonList,
  IonListHeader,
  IonLabel,
  IonIcon,
  IonButton,
  IonRouterOutlet,
} from "@ionic/vue";
import { Actor, ActorListing } from "@/interfaces/core";
import { useWorldStore } from "@/store/world";
import { useRouter } from "vue-router";
import { addSharp, removeSharp } from "ionicons/icons";
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
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Character Selection</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- <div class="actor-list"></div> -->
      <ion-list id="selected-actors-list">
        <ion-list-header>Selected Characters</ion-list-header>
        <IonItem v-for="actor of store.currentWorldActors" :router-link="'/dnd5e/actors/'+actor?.id">
          <img class="actorPortrait" :src="actor?.image" slot="start" />
          <ion-label>{{ actor?.name }}</ion-label>
          <IonButton @click="removeSelectedActor(actor)" slot="end"><IonIcon :icon="removeSharp"></IonIcon></IonButton>
        </IonItem>
      </ion-list>
      <ion-list id="owned-actors-list">
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
