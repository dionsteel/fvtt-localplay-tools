<script setup lang="ts">
import { ref, computed } from "vue";
import { IonContent, IonItem, IonList, IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonMenuButton, IonTitle } from "@ionic/vue";
import DynamicComponent from "../../../../lib/DynamicComponent.vue";
import { usePF2eGame } from "@/store/pf2e";
import { TreeEntry } from "./interfaces";
import JournalTree from "./JournalTree.vue";
import { ItemFlagsPF2e } from "@/interfaces/pf2e/item/data/base";
interface CompendiumPackMetadata {
  name: string; // "bestiary-family-ability-glossary";
  label: string; // "Creature Family Ability Glossary";
  banner: string; // "systems/pf2e/assets/compendium-banner/green.webp";
  path: string; // "systems/pf2e/packs/bestiary-family-ability-glossary";
  type: string; //"Item";
  system: "pf2e";
  ownership: {
    PLAYER: "LIMITED" | "OBSERVER" | "OWNER";
    ASSISTANT: "OWNER";
  };
  flags: ItemFlagsPF2e;
  packageType: string; // "system";
  packageName: string; // "pf2e";
  id: string; //"pf2e.bestiary-family-ability-glossary";
}

const game = usePF2eGame();
const packs = await game.config.fetchJson<CompendiumPackMetadata[]>(`/packs`);
const packFilters = ref({ type: ["Actor", "Item", "JournalEntry"] });
</script>

<template>
  <IonPage>
    <IonHeader :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <IonTitle> Packs </IonTitle>
      </ion-toolbar>
    </IonHeader>
    <IonContent>
      <!-- <JournalTree :entry="journals"></JournalTree> -->
      <IonList>
        <template v-for="pack in packs">
          <IonItem v-if="packFilters.type.includes(pack.type)" :button="true" :detail="true" :title="pack.path" :router-link="`/pf2e/pack/${pack.id}`" router-direction="forward"
            >{{ pack.label }} <small>({{ pack.type }})</small></IonItem
          >
        </template>
      </IonList>
    </IonContent>
  </IonPage>
</template>
