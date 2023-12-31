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
import { Suspense, provide, ref, watch } from "vue";
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
  documentTextOutline,
  documentTextSharp,
  globeSharp,
} from "ionicons/icons";
import { useDnd5eGame } from "@/store/dnd5e";

const store = useWorldStore();
const game = useDnd5eGame();
const helper = game.helper;

const router = useRouter();
const route = useRoute();
const { getAPIUrl } = store.config;

const selectedIndex = ref(0);
const labels = store.currentWorldActors;
const appPages = [
  {
    title: "Game World",
    url: "/dnd5e/world",
    iosIcon: globeOutline,
    mdIcon: globeSharp,
  },
  {
    title: "Combat Mode",
    url: "/dnd5e/combat",
    iosIcon: gameControllerOutline,
    mdIcon: gameControllerSharp,
  },
  {
    title: "Chat",
    url: "/dnd5e/chat",
    iosIcon: chatboxOutline,
    mdIcon: chatboxSharp,
  },
  {
    title: "Dice Rolls",
    url: "/dnd5e/dice",
    iosIcon: diceOutline,
    mdIcon: diceSharp,
  },
  {
    title: "Select Characters",
    url: "/dnd5e/actors",
    iosIcon: personOutline,
    mdIcon: personSharp,
  },
  // {
  //   title: "Sheets",
  //   // url: "actor",
  //   iosIcon: documentTextOutline,
  //   mdIcon: documentTextSharp,
  // },
];
const background = store.activeGame?.world.background ? `url(/${game.config.getAPIUrl(store.activeGame?.world.background)})` : "";
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
  <ion-page :style="{ background, backgroundSize: 'cover' }">
    <!-- <link rel="stylesheet" href="http://localhost:3000/css/style.css" /> -->
    <link rel="stylesheet" href="http://localhost:3000/systems/dnd5e/dnd5e.css" />

    <ion-content>
      <Suspense>
        <ion-split-pane content-id="system-content" class="dnd5e-content">
          <ion-menu content-id="system-content" class="dnd5e-content" type="overlay">
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
                  :router-link="'/' + store.activeGame?.world.system + '/actors/' + actor?.id + '/'"
                  :class="{ selected: router.currentRoute.value.fullPath.endsWith(actor?.id) }">
                  <ion-icon
                    v-if="actor?.image.endsWith('.svg')"
                    aria-hidden="true"
                    slot="start"
                    :ios="bookmarkOutline"
                    :md="bookmarkSharp"
                    :src="getAPIUrl(actor?.image)"></ion-icon>
                  <img v-else width="32" slot="start" :src="getAPIUrl(actor?.image)" />
                  <ion-label>{{ actor?.name }}</ion-label>
                </ion-item>
              </ion-list>
            </ion-content>
          </ion-menu>
          <ion-router-outlet id="system-content" class="dnd5e-content"></ion-router-outlet>
        </ion-split-pane>
      </Suspense>
    </ion-content>
  </ion-page>
</template>

<style scoped>
/* :global(body) {
  background-color: unset !important;
  background-image: unset !important;
  --background: rgba(255, 255, 255, 0.1);
} */
:root {
  --ion-item-color: #333;
  --ion-background-color: rgba(255, 255, 255, 0.75);
  --ion-toolbar-background: rgba(255, 255, 255, 0.75);
  --ion-menu-background: rgba(255, 255, 255, 0.75);
}
:host {
  --ion-background-color: rgba(255, 255, 255, 0.75);
  --ion-toolbar-background: rgba(255, 255, 255, 0.75);
  --ion-menu-background: rgba(255, 255, 255, 0.8);

  --background: v-bind("background");
  --background-image: v-bind("background");
  --background-size: cover;

  background-color: transparent;
  background-image: v-bind("background");
  background-size: cover;
}
.dnd5e-content {
  --background: rgba(255, 255, 255, 0.2);
  --ion-background-color: rgba(255, 255, 255, 0.75);
}
ion-toolbar {
  --ion-toolbar-background: rgba(255, 255, 255, 0.75);
  --ion-background-color: rgba(255, 255, 255, 0.75);
}
ion-page {
  /* --ion-background-color: rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.1);
  --background-color: rgba(255, 255, 255, 0.1); */
  /* background-image: v-bind("background");
  --background: v-bind("background"); */
  --background-size: cover;
  /* --background-image: v-bind("background"); */
  ion-content {
    --ion-background-color: rgba(255, 255, 255, 0.75);
  }
}
ion-content {
  /* background-color: #ffffffaa; */
  --ion-background-color: transparent;
  /* --background-color: var(--ion-background-color); */
  /* background-color: var(--ion-background-color); */
  /* background-image: v-bind("background");
  --background: v-bind("background");
  --background-image: v-bind("background"); */
}
ion-menu {
  /* --ion-background-color: rgba(255, 255, 255, 0.5); */
  /* --ion-toolbar-background: rgba(255, 255, 255, 0.75); */
  /* --ion-menu-background: rgba(255, 255, 255, 0.5); */
  ion-list {
    background: transparent;
    --background: transparent;
  }
}
ion-menu ion-content {
  --ion-background-color: rgba(255, 255, 255, 0.8);
  ion-item {
    --background: transparent;
  }
  /* --background: var(--ion-item-background, var(--ion-background-color, #fff));
  --background: v-bind("background"); */
}

ion-header {
  --ion-background-color: rgba(255, 255, 255, 0.8);
}
ion-list-header,
ion-list ion-list-header {
  --ion-background-color: rgba(255, 255, 255, 0.8);
}
ion-card {
  --ion-background-color: rgba(255, 255, 255, 0.8);
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

ion-list.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-list.md ion-item.selected ion-icon {
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
