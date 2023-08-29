<script setup lang="ts">
import { ActorPF2e, CharacterPF2e } from "@/interfaces/pf2e/actor";
import { IonImg, IonItem, IonTitle } from "@ionic/vue";
import ArmourClassPF2e from "./ArmourClassPF2e.vue";
export interface CharacterHeaderProps {
  actor: CharacterPF2e;
}
defineProps<CharacterHeaderProps>();
</script>
<template>
  <IonItem>
    <IonImg :src="actor?.img" class="actor-portrait"></IonImg>
    <ArmourClassPF2e :ac="actor?.system?.attributes?.ac"></ArmourClassPF2e>
  </IonItem>
</template>

<style scoped>
.actor-portrait {
  width: 80px;
  height:auto;
}
</style>
