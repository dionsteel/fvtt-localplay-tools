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
  IonNote,
  IonImg,
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
import GenericActorCardPF2e from "../components/cards/GenericActorCardPF2e.vue";
import { ActorPF2e } from "@/interfaces/pf2e";
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
const bgimg = ref<string>();
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
if (pack?.metadata?.banner) {
  bgimg.value = `url(${game.config.getAPIUrl(pack.metadata.banner)})`;
}
</script>

<template>
  <IonPage
    :style="{
      background: pack.metadata.banner ? `url(${game.config.getAPIUrl(pack.metadata.banner)})` : 'none',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundColor: ' #000',
    }">
    <IonHeader :translucent="true" class="seethru">
      <ion-toolbar class="seethru">
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <IonTitle class="seethru">
          {{ pack.metadata.label }}
        </IonTitle>
        <IonTitle class="seethru">
          <IonNote> {{ pack.metadata.id }} </IonNote>
        </IonTitle>
        <!-- <IonImg v-if="pack.metadata.banner" :src="game.config.getAPIUrl(pack.metadata.banner)"></IonImg> -->
      </ion-toolbar>
    </IonHeader>
    <IonContent class="seethru">
      <!-- <JournalTree :entry="journals"></JournalTree> -->
      <IonList class="seethru">
        <IonAccordionGroup @ion-change="scrollAccordionHeader" class="seethru">
          <template v-if="pack.metadata.type == 'Actor'">
            <!-- <IonItem v-for="entry in pack.values" :button="true" :detail="true" :router-link="`/pf2e/compendium/${entry.type}/${entry.uuid}`" router-direction="forward">
              {{ entry.name }} <small>({{ entry.type }})</small>
            </IonItem> -->

            <GenericActorCardPF2e class="seethru" :compact="true" v-for="entry in packValues" :actor="entry as any as ActorPF2e"></GenericActorCardPF2e>
          </template>

          <template v-if="pack.metadata.type == 'Item'">
            <ItemCardPF2e class="seethru" v-for="entry in packValues" :item="entry"></ItemCardPF2e>
          </template>
          <template v-if="pack.metadata.type == 'JournalEntry'">
            <JournalEntry class="seethru" v-for="entry in packValues" :entry="entry as any as IJournalEntry"></JournalEntry>
          </template>
        </IonAccordionGroup>
      </IonList>
    </IonContent>
  </IonPage>
</template>

<style>
.seethru {
  --background: rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
/* ion-header {
  --background: v-bind("bgimg");
}
IonHeader {
  --background: v-bind("bgimg");
}
ion-list {
  background: transparent;
  --background: transparent;
}
ion-list > * > * {
  background: rgba(0,0,0,0.5);
} */
</style>
