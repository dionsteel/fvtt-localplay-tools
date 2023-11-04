<script setup lang="ts">
import { ref, computed } from "vue";
import {
  IonContent,
  IonItem,
  IonList,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonTitle,
  IonAccordionGroup,
  AccordionGroupCustomEvent,
} from "@ionic/vue";
import DynamicComponent from "../../../../lib/DynamicComponent.vue";
import { usePF2eGame } from "@/store/pf2e";
import { JournalEntry as IJournalEntry, TreeEntry } from "./interfaces";
import JournalTree from "./JournalTree.vue";
import { ItemFlagsPF2e } from "@/interfaces/pf2e/item/data/base";
import { useRoute } from "vue-router";
import ItemCardPF2e from "../components/cards/ItemCardPF2e.vue";
import { ItemPF2e } from "@/interfaces/pf2e/item";
import JournalEntry from "./JournalEntry.vue";
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
interface PackItemListing {
  _id: string; // "0yeq1xgdscswGtRZ",
  folder: string; // "DVa3GkbBsLwGp2In",
  img: string; // "icons/sundries/books/book-red-exclamation.webp",
  name: string; // "Ruin Resistance",
  type: string; // "campaignFeature",
  uuid: string; // "Compendium.pf2e.kingmaker-features.Item.0yeq1xgdscswGtRZ"
}
interface CompendiumPack {
  metadata: CompendiumPackMetadata;
  index: any;
  apps: any[];
  values: PackItemListing[];
}
const route$ = useRoute();

const game = usePF2eGame();
let pack = await game.config.fetchJson<CompendiumPack>(`/pack/${route$.params.packId}`);
let packValues = await Promise.all(pack.values.map((e) => game.config.fetchJson<ItemPF2e>(`/uuid/${e.uuid}`)));

function scrollAccordionHeader(e: AccordionGroupCustomEvent) {
  e.target.childNodes.forEach((cn, ck, pn) => {
    let ca = cn as HTMLIonAccordionElement;
    if (ca.value == e.detail.value) {
      setTimeout(() => {
        (ca.childNodes[0] as HTMLIonItemElement)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 280);
      // (cn as HTMLIonAccordionElement).scrollIntoView();
    }
  }); //  scrollIntoView()
}
</script>

<template>
  <IonPage>
    <IonHeader :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <IonTitle> {{ pack.metadata.label }} </IonTitle>
      </ion-toolbar>
    </IonHeader>
    <IonContent>
      <!-- <JournalTree :entry="journals"></JournalTree> -->
      <IonList>
        <IonAccordionGroup @ion-change="scrollAccordionHeader">
          <template v-if="pack.metadata.type == 'Actor'">
            <IonItem v-for="entry in pack.values" :button="true" :detail="true" :router-link="`/pf2e/compendium/${entry.type}/${entry.uuid}`" router-direction="forward">
              {{ entry.name }} <small>({{ entry.type }})</small>
            </IonItem>
          </template>

          <template v-if="pack.metadata.type == 'Item'">
            <ItemCardPF2e v-for="entry in packValues" :item="entry"></ItemCardPF2e>
          </template>
          <template v-if="pack.metadata.type == 'JournalEntry'">
            <JournalEntry v-for="entry in packValues" :entry="entry as any as IJournalEntry"></JournalEntry>
          </template>
        </IonAccordionGroup>
      </IonList>
    </IonContent>
  </IonPage>
</template>
