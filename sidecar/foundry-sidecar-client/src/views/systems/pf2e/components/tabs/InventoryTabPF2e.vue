<script setup lang="ts">
import { CharacterPF2e } from "@/interfaces/pf2e";
import DynamicComponent from "@/lib/DynamicComponent.vue";
import { usePF2eGame } from "@/store/pf2e";
import { IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonContent, IonIcon, IonItem, IonPage, IonImg, IonLabel, IonBadge } from "@ionic/vue";

import { inject } from "vue";

const game = usePF2eGame();
const helper = game.helper;
const actor = inject<CharacterPF2e>("actor");
</script>

<template>
  <IonPage>
    <IonContent>
      <IonAccordionGroup>
        <IonAccordion :trigger="'item_' + item._id" reference="trigger" size="auto" class="item-desc"
          v-for="item of actor?.items" :id="'item_' + item._id">
          <IonItem slot="header"
            v-if="(['weapon', 'backpack', 'equipment', 'consumable', 'food', 'armor', 'tool', 'item', 'loot', 'rune', 'recipe'].includes('' + item?.type))">
            <IonImg :src="game.config.getAPIUrl(item.img || '')"
              :style="{ width: '64px', height: '64px', 'margin-right': '5px' }"></IonImg>

            <IonLabel>
              <IonBadge slot="start">{{ item.type }}</IonBadge>
              {{ item.name }}
            </IonLabel>
          </IonItem>
          <IonCard slot="content">
            <IonCardContent>
              <DynamicComponent :html="item.system?.description?.value || ''"></DynamicComponent>

              <!-- {{ item.system?.description?.value }} -->
            </IonCardContent>
          </IonCard>
          <!-- <IonContent class="item-desc">
          </IonContent> -->
        </IonAccordion>
      </IonAccordionGroup>
    </IonContent>
  </IonPage></template>
