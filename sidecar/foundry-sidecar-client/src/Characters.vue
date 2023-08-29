<script lang="ts" setup>
import { ajax } from 'rxjs/ajax'
import { fromFetch } from 'rxjs/fetch'
import { concatMap, map } from 'rxjs/operators';
import { useObservable } from '@vueuse/rxjs';
import { IonItem, IonList, IonListHeader, IonLabel, IonIcon } from '@ionic/vue';
import { Actor, ActorListing } from './interfaces/core';
import {useWorldStore} from '@/store/world';
const store=useWorldStore();

const actors = store.ownedActors;
// const actors = useObservable<ActorListing[]>(ajax('http://localhost:3000/actor').pipe(map(r => {
//   console.log('got response', r);
//   return r.response as any
// })));
function addSelectedActor(actor:ActorListing){
  console.log('Adding actor to list',actor,store.currentWorldActors);
  store.addSelectedActor(actor.id);
}
import fs from 'fs';
fs.mkdirSync('',{})
</script>

<template>
  <div class="actor-list">

  </div>
  <ion-page>
    <ion-content>
      <ion-list id="actors-list">
        <ion-list-header>Player Characters</ion-list-header>
        <IonItem v-for="actor of actors">
          <img class="actorPortrait" :src="actor.image" slot="start" @click="addSelectedActor(actor);"/>
          <ion-label>{{ actor?.name }}</ion-label>
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
