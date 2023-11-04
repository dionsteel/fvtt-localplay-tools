<script setup lang="ts">
import { ActorPF2e, CharacterPF2e, CreaturePF2e, NPCPF2e } from "@/interfaces/pf2e";
import ExpandingCard from "./ExpandingCard.vue";
import { capitalize, computed } from "vue";
import DynamicComponent from "@/lib/DynamicComponent.vue";
import { useConfigStore } from "@/store/config";
import { IonCol, IonGrid, IonItem, IonLabel, IonList, IonRow } from "@ionic/vue";
const config = useConfigStore();
const { actor } = defineProps<{ actor: Partial<ActorPF2e & CreaturePF2e & NPCPF2e & CharacterPF2e> }>();
const description = computed(() => actor?.system?.details?.publicNotes || actor?.system?.details?.blurb);
</script>
<template>
  <ExpandingCard :collapsed="false" :title="actor.name" :subtitle="capitalize(actor.type || '')" :image="actor.img ? config.getAPIUrl(actor.img) : undefined">
    <IonGrid>
      <IonRow>
        <IonCol v-for="(val, key) in actor?.system?.abilities">{{ key.toUpperCase() }} {{ (val.value ?? val.mod) > 0 ? "+" : "" }}</IonCol>
      </IonRow>
    </IonGrid>
    <DynamicComponent :html="description"></DynamicComponent>
    <ExpandingCard v-if="actor?.system?.details?.biography" :collapsed="true" title="Biography">
      <IonList>
        <IonItem v-for="(field, fName) in actor?.system?.details?.biography">
          <IonLabel slot="start">{{ capitalize(fName) }}</IonLabel>
          <DynamicComponent :html="field"></DynamicComponent>
        </IonItem>
      </IonList>
    </ExpandingCard>
  </ExpandingCard>
</template>
