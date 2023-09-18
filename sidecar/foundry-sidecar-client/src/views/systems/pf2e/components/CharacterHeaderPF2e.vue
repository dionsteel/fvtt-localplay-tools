<script setup lang="ts">
import { ActorPF2e, CharacterPF2e } from "@/interfaces/pf2e/actor";
import { IonImg, IonItem, IonIcon, IonLabel, IonTitle } from "@ionic/vue";
import ArmourClassPF2e from "./ArmourClassPF2e.vue";
import { usePF2eGame } from "@/store/pf2e";
import { useWorldStore } from "@/store/world";
import { skullSharp, bedSharp, bulbSharp, medalSharp, addSharp } from "ionicons/icons";

export interface CharacterHeaderProps {
  actor: CharacterPF2e;
}

const { actor } = defineProps<CharacterHeaderProps>();

const store = useWorldStore();
const sysStore = usePF2eGame();
</script>
<template>
  <IonImg slot="start" class="actor-portrait" :style="{ width: '96px', height: '96px' }" v-if="actor" :src="sysStore.config.getAPIUrl(actor?.img || '')"></IonImg>
  <IonTitle class="ion-padding">
    {{ actor?.name }}
  </IonTitle>
  
  <IonItem>
    <ArmourClassPF2e :ac="actor?.system?.attributes?.ac"></ArmourClassPF2e>
    <div class="ion-padding hp-box">
      <h2>HP</h2>
      <p>
        {{ actor?.system?.attributes?.hp.value }} <small v-if="actor?.system?.attributes?.hp.temp">+ {{ actor?.system?.attributes?.hp.temp }}</small> /
        {{ actor?.system?.attributes?.hp.max }}
      </p>
    </div>
    <IonItem>
      <IonIcon v-for="n in actor?.system?.attributes?.dying?.value" :icon="skullSharp" color="danger"></IonIcon>
      <IonIcon v-for="n in actor?.system?.attributes?.wounded?.value" :icon="addSharp" color="warning"></IonIcon>
      <IonIcon v-for="n in actor?.system?.resources?.heroPoints?.value" :icon="medalSharp" color="primary"></IonIcon>
    </IonItem>
  </IonItem>
</template>

<style scoped>
.actor-portrait {
  width: 80px;
  height: auto;
}
</style>
