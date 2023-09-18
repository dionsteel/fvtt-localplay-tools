<script setup lang="ts">
import { usePF2eGame } from "@/store/pf2e";
import { useWorldStore } from "@/store/world";
import { IonHeader, IonButtons, IonMenuButton, IonItem, IonList, IonListHeader, IonPage, IonTitle, IonToolbar } from "@ionic/vue";
import { ref } from "@vue/runtime-dom";

const store = useWorldStore();
let rollRequests = ref([]);
const game = usePF2eGame();
</script>

<template>
  <IonPage>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Dice Rolls</ion-title>
      </ion-toolbar>
    </ion-header>
    <IonList>
      <!-- <IonListHeader><IonTitle></IonTitle></IonListHeader> -->
      <IonItem v-for="(msg, idx) in game.helper.rolls" :id="'diceroll-' + idx">{{ msg.terms }}</IonItem>
    </IonList>
  </IonPage>
</template>
