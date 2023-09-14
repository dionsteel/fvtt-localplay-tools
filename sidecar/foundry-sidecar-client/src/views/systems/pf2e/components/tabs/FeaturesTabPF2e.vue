<script setup lang="ts">
import { Character5e } from "@/interfaces/dnd5e";
import DynamicComponent from "@/lib/DynamicComponent.vue";
import { useDnd5eGame } from "@/store/dnd5e";
import { IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonContent, IonItem, IonPage } from "@ionic/vue";
import { inject } from "vue";

const game = useDnd5eGame();
const helper = game.helper;
const actor = inject<Character5e>("actor");
const feats = actor?.items?.filter((i) => i.type == "feat");
</script>

<template>
  <IonPage>
    <IonContent>
      <IonAccordionGroup>
        <IonAccordion :trigger="'feat_' + feat._id" reference="trigger" size="auto" class="feat-desc" v-for="feat of feats" :id="'feat_' + feat._id">
          <IonItem slot="header"> {{ feat.name }} </IonItem>
          <IonCard slot="content">
            <IonCardContent>
              <DynamicComponent :html="feat.system?.description?.value || ''"></DynamicComponent>

              <!-- {{ feat.system?.description?.value }} -->
            </IonCardContent>
          </IonCard>
          <!-- <IonContent class="feat-desc">
          </IonContent> -->
        </IonAccordion>
      </IonAccordionGroup>
    </IonContent>
  </IonPage>
</template>
