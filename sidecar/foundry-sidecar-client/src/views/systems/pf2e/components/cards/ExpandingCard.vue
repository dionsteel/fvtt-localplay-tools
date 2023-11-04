<script setup lang="ts">
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonImg, IonThumbnail } from "@ionic/vue";
import { caretDown, caretUp } from "ionicons/icons";
import { computed } from "vue";
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
  expandable = true,
  collapsed = true,
  buttons = [],
} = defineProps<{ title?: string; subtitle?: string; thumbnail?: string; image?: string; collapsed?: boolean; expandable?: boolean; buttons?: CardButtonSpec[] }>();

const imageStyle = computed(() => {
  if (expandable) {
    return {
      height: collapsed ? "200px" : "auto",
      width: "unset",
    };
  } else {
  }
});
</script>

<template>
  <IonCard>
    <img v-if="(!expandable || (expandable && !collapsed)) && image" :src="image" :alt="title" class="actor-card-image ion-padding" />

    <IonCardHeader @click="collapsed = !collapsed">
      <IonCardTitle v-if="title">
        <IonThumbnail style="align-self: flex-start; float: left" v-if="expandable && collapsed && (image || thumbnail)">
          <img :src="image || thumbnail" :alt="title" class="actor-card-image" />
        </IonThumbnail>
        <span :style="{ paddingLeft: collapsed ? '10px' : '2px' }">{{ title }}</span>
        <IonIcon v-if="expandable" style="position: absolute; right: .5em; top: .5em;" :icon="collapsed ? caretDown : caretUp"></IonIcon>
        <IonCardSubtitle v-if="subtitle">
          <span :style="{ paddingLeft: collapsed ? '10px' : '2px' }">{{ subtitle }}</span>
        </IonCardSubtitle>
      </IonCardTitle>

      <!-- <IonIcon v-else :icon="caretUp"></IonIcon> -->
    </IonCardHeader>
    <IonCardContent v-if="expandable && !collapsed">
      <slot></slot>
    </IonCardContent>
    <IonButton v-for="button in buttons" @click="button.onClick" :title="button.hover">
      <IonIcon v-if="button.icon" :icon="button.icon" :slot="button.iconSide || 'start'"></IonIcon>
    </IonButton>
  </IonCard>
</template>

<style>
.actor-card-image {
  height: fit-content;
  width: fit-content;
  border: none;
  margin-right: 10px;
}
.actor-card-image.collapsed {
  height: 200px;
  width: min-content;
  /* display: inline; */
}
</style>
