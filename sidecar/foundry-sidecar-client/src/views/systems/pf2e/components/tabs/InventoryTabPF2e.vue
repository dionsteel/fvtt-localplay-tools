<script setup lang="ts">
import { Character5e } from "@/interfaces/dnd5e";
import DynamicComponent from "@/lib/DynamicComponent.vue";
import { useDnd5eGame } from "@/store/dnd5e";
import { IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonContent, IonItem, IonPage } from "@ionic/vue";

import { inject } from "vue";

const game = useDnd5eGame();
const helper = game.helper;
const actor = inject<Character5e>("actor");
</script>

<template>
  <IonPage>
    <IonContent>
      <IonAccordionGroup>
        <IonAccordion :trigger="'item_' + item._id" reference="trigger" size="auto" class="item-desc" v-for="item of actor?.items" :id="'item_' + item._id">
          <IonItem slot="header"> {{ item.type }} | {{ item.name }} </IonItem>
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
  </IonPage>
</template>
