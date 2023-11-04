<script setup lang="ts">
import { ActorPF2e, CharacterPF2e, CreaturePF2e, HazardPF2e, LootPF2e, NPCPF2e, PartyPF2e } from "@/interfaces/pf2e";
import ExpandingCard from "./ExpandingCard.vue";
import { capitalize, computed } from "vue";
import DynamicComponent from "@/lib/DynamicComponent.vue";
import { useConfigStore } from "@/store/config";
import { IonAccordionGroup, IonChip, IonCol, IonGrid, IonItem, IonLabel, IonList, IonPopover, IonRow } from "@ionic/vue";
import tests, { UUIDDocument } from "@/interfaces/pf2e/identifier";
import ItemCardPF2e from "./ItemCardPF2e.vue";
import { ItemPF2e } from "@/interfaces/pf2e/item";
const config = useConfigStore();
const { actor, compact = true } = defineProps<{ actor: ActorPF2e | NPCPF2e | CharacterPF2e | HazardPF2e | LootPF2e | PartyPF2e; compact?: boolean }>();
const description = computed(() => {
  if (tests.npc(actor)) {
    return actor?.system?.details?.publicNotes || actor?.system?.details?.blurb || "npc";
  } else if (tests.hazard(actor)) {
    return actor?.system.details.description;
  }
  // if(tests.creature(actor)){
  //   return actor?.system?.details.blurb;
  //   return ``;
  // }
  return ``;
});
</script>
<template>
  <ExpandingCard :collapsed="compact" :expandable="true" :title="actor.name" :subtitle="capitalize(actor.type || '')" :image="actor.img ? config.getAPIUrl(actor.img) : undefined">
    <IonGrid>
      <IonRow>
        <IonCol v-for="(val, key) in actor?.system?.abilities">{{ key.toUpperCase() }} {{ (val.value ?? val.mod) > 0 ? "+" : "" }}{{ val.mod ?? val.value }}</IonCol>
      </IonRow>
    </IonGrid>
    <DynamicComponent :html="description"></DynamicComponent>
    <ExpandingCard v-if="tests.character(actor) && actor?.system?.details?.biography" :collapsed="true" title="Biography">
      <IonList>
        <IonItem v-for="(field, fName) in actor?.system?.details?.biography">
          <IonLabel slot="start">{{ capitalize(fName) }}</IonLabel>
          <DynamicComponent :html="field"></DynamicComponent>
        </IonItem>
      </IonList>
    </ExpandingCard>
    <IonAccordionGroup>
    <template v-for="item in actor.items" :title="item.system.description?.value">
      <!-- <IonChip :id="'item_' + item._id">{{ item.name }}</IonChip>
      <IonPopover :trigger="'item_' + item._id">
      </IonPopover> -->
        <ItemCardPF2e :item="(item as ItemPF2e)"></ItemCardPF2e>
    </template>
    </IonAccordionGroup>
  </ExpandingCard>
</template>
