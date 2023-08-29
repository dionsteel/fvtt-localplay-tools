<script setup lang="ts">
import { ActorPF2e } from "@/interfaces/pf2e/actor";
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage, IonCardContent, IonImg, IonAvatar } from "@ionic/vue";
import { capitalize } from "vue";

const props = defineProps<{ actor: ActorPF2e }>();
</script>

<template>
  <IonCard>
    <IonCardHeader>
      <IonCardTitle><IonAvatar :model-value="actor.img"></IonAvatar>{{ actor.name }}</IonCardTitle>
      <IonCardSubtitle>{{ capitalize(actor.type) }}</IonCardSubtitle>
      <IonCardContent></IonCardContent>
    </IonCardHeader>
  </IonCard>
</template>
