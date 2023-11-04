<script setup lang="ts">
import { ref, computed } from "vue";
import { IonContent, IonItem, IonList, IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonMenuButton, IonTitle, IonAccordionGroup } from "@ionic/vue";
import DynamicComponent from "../../../../lib/DynamicComponent.vue";
import { usePF2eGame } from "@/store/pf2e";
import { TreeEntry } from "./interfaces";
import JournalTree from "./JournalTree.vue";
import { useRoute } from "vue-router";
import { NPCPF2e } from "@/interfaces/pf2e";
import { ItemPF2e } from "@/interfaces/pf2e/item";
import ItemCardPF2e from "../components/cards/ItemCardPF2e.vue";
import { PackItemListing } from "./PackItemListing";
import { CompendiumPackMetadata } from "./CompendiumPackMetadata";

interface CompendiumPack {
  metadata: CompendiumPackMetadata;
  index: any;
  apps: any[];
  values: PackItemListing[];
}

interface PackItem {}

const route$ = useRoute();
const { packType = "item", uuid } = route$.params;
const game = usePF2eGame();
let item = await game.config.fetchJson<PackItem>(`/uuid/${route$.params.uuid}`);
const typesmap = {
  item: ["ancestry", "action","class", "feature", "classfeature", "weapon", "consumable", "container", "backpack", "heritage", "background", "feat"],
  actor: ["creature", "npc", "actor", "character", "monster"],
};
</script>

<template>
  <IonPage>
    <IonHeader :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <IonTitle> Test </IonTitle>
      </ion-toolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <!-- <JournalTree :entry="journals"></JournalTree> -->
      <!-- <IonList>
        <IonItem v-for="entry in item.values" :button="true" :detail="true" :href="`/pf2e/uuid/${entry.uuid}`">
          {{ entry.name }} <small>({{ entry.type }})</small>
        </IonItem>
      </IonList> -->

      <template v-if="typesmap.item.includes(`${packType}`)">
        <IonAccordionGroup>
          <ItemCardPF2e :item="(item as ItemPF2e)"></ItemCardPF2e>
        </IonAccordionGroup>
      </template>

      <template v-else>
        <pre>
          {{ item }}
        </pre>
      </template>
    </IonContent>
  </IonPage>
</template>
