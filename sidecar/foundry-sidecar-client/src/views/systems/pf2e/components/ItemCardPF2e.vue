<script setup lang="ts">
import { ItemPF2e } from "@/interfaces/pf2e/item";
import { usePF2eGame } from "@/store/pf2e";
import { IonAccordion, IonImg, IonItem, IonLabel, IonBadge, IonCard, IonCardContent, IonIcon } from "@ionic/vue";
// import { useRoute } from "vue-router";
import DynamicComponent from "@/lib/DynamicComponent.vue";
import { refreshCircleSharp } from "ionicons/icons";
import { capitalize } from "vue";

const game = usePF2eGame();
const { item } = defineProps<{ item: ItemPF2e }>();
</script>

<template>
  <IonAccordion :trigger="'item_' + item._id" :value="`${capitalize(item.type||'')}.${item._id}`" reference="trigger" size="auto" class="item-desc" :id="'item_' + item._id">
    <IonItem slot="header">
      <IonImg slot="start" :src="game.config.getAPIUrl(item.img || '')" :style="{ width: '64px', height: '64px', 'margin-right': '5px' }"></IonImg>

      <IonLabel>
        <!-- <IonBadge slot="start">{{ item.type }}</IonBadge> -->
        {{ item.name }}
      </IonLabel>
    </IonItem>
    <IonCard slot="content">
      <IonCardContent>
        <DynamicComponent :html="item.system?.description?.value || ''"></DynamicComponent> <br/>
        <IonBadge class="systag">{{ capitalize( item.system?.traits?.rarity||'') }}</IonBadge>
       <IonBadge class="systag" v-for="trait of item.system?.traits?.value">{{ capitalize(trait||'') }}</IonBadge>
        <IonIcon :icon="refreshCircleSharp" v-if="item.system?.publication?.remaster"></IonIcon><br/>
        {{  item.system?.publication?.title }}
        <!-- <pre>{{ item }}</pre> -->
      </IonCardContent>
    </IonCard>
    <!-- <IonContent class="item-desc">
          </IonContent> -->
  </IonAccordion>
</template>

<style>
ion-badge {
  border: 1px solid #999;
  color: #999;
  background: transparent;
  font-weight: 300; margin: 0.5px;
}
</style>
