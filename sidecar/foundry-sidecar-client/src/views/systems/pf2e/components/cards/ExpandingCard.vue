<script setup lang="ts">
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from "@ionic/vue";
import { caretDown, caretUp } from "ionicons/icons";
interface CardButtonSpec {
  onClick?: (e: MouseEvent) => void;
  text?: string;
  hover?: string;
  icon?: string;
  iconSide: string;
}
const {
  title,
  subtitle,
  thumbnail,
  image,
  collapsed = true,
  buttons = [],
} = defineProps<{ title?: string; subtitle?: string; thumbnail?: string; image?: string; collapsed: boolean; buttons?: CardButtonSpec[] }>();
</script>

<template>
  <IonCard>
    <IonCardHeader>
      <IonCardTitle v-if="title">{{ title }}</IonCardTitle>
      <IonCardSubtitle v-if="subtitle">{{ subtitle }}</IonCardSubtitle>
      <IonButton fill="clear" @click="collapsed = !collapsed">
        <IonIcon v-if="collapsed" :icon="caretDown"></IonIcon>
        <IonIcon v-else="collapsed" :icon="caretUp"></IonIcon>
      </IonButton>
    </IonCardHeader>
    <IonCardContent v-if="collapsed">
      <slot></slot>
    </IonCardContent>
    <IonButton v-for="button in buttons" @click="button.onClick" :title="button.hover">
      <IonIcon v-if="button.icon" :icon="button.icon" :slot="button.iconSide || 'start'"></IonIcon>
    </IonButton>
  </IonCard>
</template>
