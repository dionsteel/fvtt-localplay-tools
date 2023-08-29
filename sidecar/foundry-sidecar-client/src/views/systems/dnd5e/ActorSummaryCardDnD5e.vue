<script setup lang="ts">
import { Actor5e } from "@/interfaces/dnd5e/actor";
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage, IonCardContent, IonImg, IonAvatar } from "@ionic/vue";
import { capitalize } from "vue";

const props = defineProps<{ actor: Actor5e }>();
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
