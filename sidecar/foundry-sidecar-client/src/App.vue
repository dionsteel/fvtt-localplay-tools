<template>
  <ion-app>
    <Suspense>
      <!-- <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="inbox-list">
            <ion-list-header>Inbox</ion-list-header>
            <ion-note>hi@ionicframework.com</ion-note>

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
    </ion-split-pane> -->
      <ion-router-outlet></ion-router-outlet>
    </Suspense>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonRouterOutlet, IonSplitPane } from "@ionic/vue";
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  bookmarkSharp,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
} from "ionicons/icons";
import { Suspense, provide, ref, watch } from "vue";

import { useWorldStore } from "@/store/world";
// const store = useWorldStore();

// const selectedIndex = ref(0);
// const appPages = [
//   {
//     title: "Select Characters",
//     url: "/actors",
//     iosIcon: mailOutline,
//     mdIcon: mailSharp,
//   },
// {
//   title: 'Outbox',
//   url: '/folder/Outbox',
//   iosIcon: paperPlaneOutline,
//   mdIcon: paperPlaneSharp,
// },
// {
//   title: 'Favorites',
//   url: '/folder/Favorites',
//   iosIcon: heartOutline,
//   mdIcon: heartSharp,
// },
// {
//   title: 'Archived',
//   url: '/folder/Archived',
//   iosIcon: archiveOutline,
//   mdIcon: archiveSharp,
// },
// {
//   title: 'Trash',
//   url: '/folder/Trash',
//   iosIcon: trashOutline,
//   mdIcon: trashSharp,
// },
// {
//   title: 'Spam',
//   url: '/folder/Spam',
//   iosIcon: warningOutline,
//   mdIcon: warningSharp,
// },
// ];
// const labels = store.currentWorldActors; //['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

// const path = window.location.pathname.split("folder/")[1];
// if (path !== undefined) {
//   selectedIndex.value = appPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
// }
</script>

<style scoped></style>
