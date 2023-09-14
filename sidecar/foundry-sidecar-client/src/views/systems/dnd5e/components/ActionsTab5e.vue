<script setup lang="ts">
import { Character5e } from "@/interfaces/dnd5e";
import { useDnd5eGame } from "@/store/dnd5e";
import { IonContent, IonPage } from "@ionic/vue";
import { inject } from "vue";

const game = useDnd5eGame();
const helper = game.helper;
const actor = inject<Character5e>("actor");
</script>

<template>
  <IonPage>
    <IonContent> Actions!! </IonContent>
  </IonPage>
</template>
