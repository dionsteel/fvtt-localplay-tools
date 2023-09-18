<script setup lang="ts">
import { ActionItemPF2e } from "@/interfaces/pf2e/item";
import { usePF2eGame } from "@/store/pf2e";
import {
  IonAccordion,
  IonAccordionGroup,
  IonActionSheet,
  IonBadge,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonContent,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import { capitalize, inject } from "vue";
import DynamicComponent from "@/lib/DynamicComponent.vue";

const game = usePF2eGame();

const { action } = defineProps<{ action: ActionItemPF2e }>();

const actorHelper = inject("actorHelper");
</script>

<template>
  <IonAccordion>
    <IonItem slot="header">
      <IonImg class="action-icon" :src="game.world.config.getAPIUrl(action.img)"></IonImg>
      <IonLabel>{{ action.name }}</IonLabel>
      <IonLabel>
        <IonBadge slot="end" color="secondary" v-if="action.system.actionType.value">
          <span v-if="action.system.actions.value">{{ action.system.actions.value }}</span>
          {{ capitalize(action.system.actionType.value) }}<br />
        </IonBadge>
        <IonBadge slot="end" v-for="trait of action?.system?.traits?.value">{{ capitalize(trait || "") }}</IonBadge>
      </IonLabel>
      <!-- <IonBadge slot="end" color="tertiary" v-if="action?.system?.traits?.rarity">{{ capitalize(action?.system?.traits?.rarity || "") }}</IonBadge> -->
    </IonItem>
    <IonCard slot="content">
      <IonCardHeader>
        <!-- <IonCardTitle>
          <IonItem>
            <IonImg class="action-icon" :src="game.world.config.getAPIUrl(action.img)"></IonImg>
            <IonLabel>{{ action.name }}</IonLabel>
            <IonBadge color="secondary" v-if="action.system.actionType.value">
              <span v-if="action.system.actions.value">{{ action.system.actions.value }}</span>
              {{ capitalize(action.system.actionType.value) }}<br />
            </IonBadge>
          </IonItem>
        </IonCardTitle> -->
        <IonCardSubtitle>
          <IonLabel>
            <IonBadge justify="space-between" v-for="trait of action?.system?.traits?.value">{{ capitalize(trait || "") }}</IonBadge>
            <IonBadge justify="space-between" color="tertiary" v-if="action?.system?.traits?.rarity">{{ capitalize(action?.system?.traits?.rarity || "") }}</IonBadge>
          </IonLabel>
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <DynamicComponent :html="action.system.description.value"></DynamicComponent>
        <IonLabel v-if="action.system.source?.value">Source: {{ action.system.source.value }}<br /> </IonLabel>
        <span v-if="action.system.requirements?.value"> Requirements: {{ action.system.requirements.value }}<br /> </span>
        <span v-if="action.system.trigger?.value"> Trigger: {{ action.system.trigger.value }}<br /></span>
        <span v-if="action.system.rules && action.system.rules.length > 0"> Rules: {{ action.system.rules }} </span><br />
        <span v-if="action.system.frequency">
          Frequency: {{ action.system.frequency?.max ? `Max. ${action.system.frequency?.max} ` : action.system.frequency?.value }}
          {{ action.system.frequency?.per ? `per ${action.system.frequency?.per}` : `` }}
        </span>
      </IonCardContent>
    </IonCard>
  </IonAccordion>
</template>

<style scoped>
ion-img.action-icon {
  width: 32px;
  height: 32px;
  margin: 1px 5px;
}
</style>
