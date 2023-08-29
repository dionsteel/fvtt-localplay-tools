<script setup lang="ts">
import { useWorldStore } from "@/store/world";
import { useRouter, useRoute } from "vue-router";
import {
  IonIcon,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";

const store = useWorldStore();
const router = useRouter();
const route = useRoute();

import { ref, watch } from "vue";
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  bookmarkSharp,
  heartOutline,
  heartSharp,
  personOutline,
  personSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  chatboxOutline,
  chatboxSharp,
  gameControllerOutline,
  gameControllerSharp,
  fitnessOutline,
  documentOutline,
  documentSharp,
  fitnessSharp,
  trashSharp,
  warningOutline,
  warningSharp,
  diceOutline,
  diceSharp,
  globeOutline,
  globeSharp,
} from "ionicons/icons";

const selectedIndex = ref(0);
const labels = store.currentWorldActors;
const appPages = [
  {
    title: "Game World",
    url: "/pf2e/world",
    iosIcon: globeOutline,
    mdIcon: globeSharp,
  },
  {
    title: "Combat Mode",
    url: "/pf2e/combat",
    iosIcon: gameControllerOutline,
    mdIcon: gameControllerSharp,
  },
  {
    title: "Chat",
    url: "/pf2e/chat",
    iosIcon: documentOutline,
    mdIcon: documentSharp,
  },
  {
    title: "Dice Rolls",
    url: "/pf2e/dice",
    iosIcon: diceOutline,
    mdIcon: diceSharp,
  },
  {
    title: "Select Characters",
    url: "/pf2e/actors",
    iosIcon: personOutline,
    mdIcon: personSharp,
  },
  {
    title: "Sheets",
    url: "/pf2e/actor",
    iosIcon: documentOutline,
    mdIcon: documentSharp,
  },
];


function updateSelectedIndex() {
  const path = window.location.pathname; //.split("dnd5e/")[1];
  if (path !== undefined) {
    selectedIndex.value = appPages.findIndex((page) => path.startsWith(page.url)); //page.url.split("dnd5e/")[1].toLowerCase() === path.toLowerCase());
  }
}
router.afterEach((from, to, err) => {
  updateSelectedIndex();
});
watch(
  () => window.location.pathname,
  () => updateSelectedIndex()
);
updateSelectedIndex();
</script>

<template>
  <ion-page>
    <link rel="stylesheet" href="http://localhost:3000/css/style.css" />
    <link rel="stylesheet" href="http://localhost:3000/systems/pf2e/styles/pf2e.css" />
    <ion-content>
      <ion-split-pane content-id="system-content" class="pf2e-content">
        <ion-menu content-id="system-content" class="pf2e-content" type="overlay">
          <ion-content>
            <ion-list id="world-list">
              <ion-list-header>{{ store.activeGame?.world.title }}</ion-list-header>
              <ion-note>{{ store.activeGame?.system.title }}</ion-note>

              <ion-menu-toggle :auto-hide="false" v-for="(p, i) in appPages" :key="i">
                <ion-item
                  @click="selectedIndex = i"
                  router-direction="root"
                  :router-link="p.url"
                  lines="none"
                  :detail="false"
                  class="hydrated"
                  :class="{ selected: selectedIndex === i }">
                  <ion-icon aria-hidden="true" slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                  <ion-label>{{ p.title }}</ion-label>
                </ion-item>
              </ion-menu-toggle>
            </ion-list>

            <ion-list id="labels-list">
              <ion-list-header>Characters</ion-list-header>

              <ion-item
                v-for="(actor, index) in store?.currentWorldActors"
                lines="none"
                :key="index"
                router-direction="root"
                :router-link="'/' + store.activeGame?.world.system + '/actors/' + actor?.id">
                <ion-icon v-if="actor?.image.endsWith('.svg')" aria-hidden="true" slot="start" :ios="bookmarkOutline" :md="bookmarkSharp" :src="actor?.image"></ion-icon>
                <img v-else width="32" slot="start" :src="actor?.image" />
                <ion-label>{{ actor?.name }}</ion-label>
              </ion-item>
            </ion-list>
          </ion-content>
        </ion-menu>
        <ion-router-outlet id="system-content" class="pf2e-content"></ion-router-outlet>
      </ion-split-pane>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#world-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#world-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>
