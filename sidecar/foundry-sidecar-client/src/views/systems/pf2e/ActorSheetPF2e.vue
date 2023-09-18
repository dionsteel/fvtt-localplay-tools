<script setup lang="ts">
import { Actor } from "@/interfaces/core";
import { useWorldStore } from "@/store/world";
import { from, useObservable, useSubject } from "@vueuse/rxjs";
import { Observable, Subject } from "rxjs";
import { concatMap, switchMap, filter, distinctUntilKeyChanged } from "rxjs/operators";
import { WebSocketSubject, webSocket } from "rxjs/webSocket";
import { computed, ref, watch, capitalize, provide } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  IonItem,
  IonPage,
  IonHeader,
  IonToolbar,
  IonMenu,
  IonAccordion,
  IonAccordionGroup,
  IonMenuButton,
  IonButtons,
  IonImg,
  IonAvatar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonTabs,
  IonTabBar,
  IonLabel,
  IonIcon,
  IonRouterOutlet,
  IonTabButton,
  IonCardHeader,
  IonPopover,
} from "@ionic/vue";

import { skullSharp, bedSharp, bulbSharp, medalSharp, addSharp } from "ionicons/icons";
import { applyDeep } from "@/lib/utils";
import { ActorPF2e, PF2eTypes, ActorPF2eItemTypes, CharacterPF2e } from "@/interfaces/pf2e/index";

import DynamicComponent from "@/lib/DynamicComponent.vue";
import CharacterHeaderPF2e from "./components/CharacterHeaderPF2e.vue";
import { usePF2eGame } from "@/store/pf2e";

const props = defineProps<{ id: string }>();
const route$ = useRoute();
const store = useWorldStore();
const sysStore = usePF2eGame();
const parchment = store.config.getAPIUrl("/systems/pf2e/assets/sheet/parchment.png");

const helper = sysStore.helper;

const actors = helper.allActors;

let actorHelper = await helper.getActorHelper(`${route$.params.id}`); // helper.actors[`${route$.params.id}`];
let actor = await actorHelper.getActor();
watch(
  () => route$.params.id,
  async () => {
    if (route$.params.id) {
      actorHelper = await helper.getActorHelper(`${route$.params.id}`);
      actor = await actorHelper.getActor();
    }
  }
);

console.log({ actorHelper, actor, helper, actors, store, sysStore, props, route$ });

provide("actor", actor);
provide("actorHelper", actorHelper);
const itemTypes = computed(
  () =>
    actor.value?.items.reduce((a, c) => {
      if (!a[c.type]) {
        a[c.type] = [];
      }
      a[c.type].push(c as any);
      return a;
    }, {} as any) as ActorPF2eItemTypes
);

function getClass(actor: ActorPF2e) {
  return itemTypes.value?.class[0].name;
}
const atts = computed(() => actor.value?.system.attributes);
const abl = computed(() => actor.value?.system.abilities);

const tabs = computed(() => [
  { name: "Actions", path: `actions` },
  { name: "Attributes", path: `attributes` },
  { name: "Abilities", path: `abilities` },
  { name: "Inventory", path: `inventory` },
  { name: "Skills", path: `skills` },
  { name: "Spells", path: `spells` },
  { name: "Features", path: `features` },
  { name: "Biography", path: `biography` },
]);
</script>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <CharacterHeaderPF2e :actor="actor"></CharacterHeaderPF2e>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <IonTabs>
        <IonTabBar slot="top">
          <IonTabButton v-for="tab in tabs" :tab="tab.path" :href="`/pf2e/actors/${actor._id}/${tab.path}`" :router-direction="'forward'">{{ tab.name }}</IonTabButton>
        </IonTabBar>

        <IonRouterOutlet></IonRouterOutlet>
      </IonTabs>
    </ion-content>
  </ion-page>
</template>

<style>
:host {
  --ion-background: v-bind("parchment");
}
ion-popover {
  &.item-desc {
    --width: 90vw;
  }
}
ion-content.item-desc {
  --padding-start: 15px;
  --padding-end: 15px;
}
</style>
