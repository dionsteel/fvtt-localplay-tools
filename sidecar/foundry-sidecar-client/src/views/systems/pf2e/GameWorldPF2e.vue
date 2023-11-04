<script setup lang="ts">
import { useWorldStore } from "@/store/world";
import { IonContent, IonToolbar, IonButtons, IonMenuButton, IonHeader, IonLabel, IonPage, IonTitle, IonItem } from "@ionic/vue";
import { capitalize } from "vue";

const store = useWorldStore();
const game = store.activeGame;
const world = game?.world;
const gameSystem = game?.system;
</script>

<template>
  <IonPage>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ world?.title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <IonContent>
      <IonItem class="world-info" v-for="(prop, pk) in game?.world">
        <IonLabel>{{ capitalize(pk) }}</IonLabel> {{ prop }}
      </IonItem>
    </IonContent>
  </IonPage>
</template>
