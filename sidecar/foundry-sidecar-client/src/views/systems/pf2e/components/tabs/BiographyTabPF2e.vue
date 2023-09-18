<script setup lang="ts">
import { CharacterPF2e } from "@/interfaces/pf2e";
import { usePF2eGame } from "@/store/pf2e";
import { IonContent, IonPage } from "@ionic/vue";
import { inject } from "vue";

const game = usePF2eGame();
const helper = game.helper;
const actor = inject<CharacterPF2e>("actor");
</script>

<template>
  <IonPage><IonContent> Bio!! </IonContent></IonPage>
</template>
