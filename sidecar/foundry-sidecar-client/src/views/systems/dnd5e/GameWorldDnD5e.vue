<script setup lang="ts">
import { useWorldStore } from "@/store/world";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonLabel,
  IonPage,
  IonTitle,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonList,
  IonItem,
} from "@ionic/vue";
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
      <IonCard>
        <IonCardContent>
          <IonList>
            <IonItem class="world-info" v-for="(prop, pk) in game?.world">
              <IonLabel>{{ capitalize(pk) }}</IonLabel> {{ prop }}
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
</template>

<style scoped>
:host {
  --ion-background-color: rgba(255, 255, 255, 0.35);
  --ion-toolbar-background: rgba(255, 255, 255, 0.9);
  --ion-menu-background: rgba(255, 255, 255, 0.65);
}
ion-header ion-toolbar {
  --ion-toolbar-background: rgba(255, 255, 255, 0.9);
}
ion-card {
  --ion-card-background: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  --color: #121212;
  color: #121212;

  ion-card-content * {
    --ion-background-color: rgba(255, 255, 255, 0.5);
    --background: rgba(255, 255, 255, 0.25);
    background: rgba(255, 255, 255, 0.25);
    --color: #121212;
    color: #121212;
  }
}
ion-label {
  --ion-label-background: rgba(255, 255, 255, 0.5);
  --ion-background-color: rgba(255, 255, 255, 0.5);
  background: var(--ion-label-background);
  --background: var(--ion-label-background);
}
</style>
