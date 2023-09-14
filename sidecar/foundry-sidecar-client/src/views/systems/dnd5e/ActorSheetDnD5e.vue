<script setup lang="ts">
import { Actor } from "@/interfaces/core";
import { useWorldStore } from "@/store/world";
import { from, useObservable, useSubject } from "@vueuse/rxjs";
import { Observable, Subject, firstValueFrom } from "rxjs";
import { concatMap, switchMap, filter, distinctUntilKeyChanged } from "rxjs/operators";
import { WebSocketSubject, webSocket } from "rxjs/webSocket";
import { computed, provide, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonMenu,
  IonMenuButton,
  IonButtons,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonPopover,
  IonCardHeader,
  IonIcon,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
  IonTabs,
  IonNav,
  IonTabBar,
  IonNavLink,
  IonTabButton,
  IonRouterOutlet,
} from "@ionic/vue";
import { skull, bed, bulb } from "ionicons/icons";
import { applyDeep } from "@/lib/utils";
import { Actor5e, DnD5eTypes, Actor5eItemTypes } from "@/interfaces/dnd5e/index";
import DynamicComponent from "@/lib/DynamicComponent.vue";
import { useDnd5eGame } from "@/store/dnd5e";

const props = defineProps<{ id: string }>();
const route$ = useRoute();
const store = useWorldStore();
const sysStore = useDnd5eGame();

const helper = sysStore.helper;

const actors = helper.allActors;

let actorHelper = await helper.getActorHelper(`${route$.params.id}`); // helper.actors[`${route$.params.id}`];
let actor = await actorHelper.getActor();
watch(
  () => route$.params.id,
  async () => {
    actorHelper = await helper.getActorHelper(`${route$.params.id}`);
    actor = await actorHelper.getActor();
  }
);

console.log({ actorHelper, actor, helper, actors, store, sysStore, props, route$ });
const rolls = ref([
  {
    event: "rollRequest",
    data: {
      terms: [
        {
          id: "0",
          idx: 0,
          faces: "1d20",
          hasTotal: false,
          term: {
            class: "Die",
            options: {
              critical: 20,
              fumble: 1,
            },
            evaluated: true,
            number: 1,
            faces: 20,
            modifiers: [],
            results: [],
          },
        },
        {
          id: "1",
          idx: 0,
          faces: "1d4",
          hasTotal: false,
          term: {
            class: "Die",
            options: {},
            evaluated: true,
            number: 1,
            faces: 4,
            modifiers: [],
            results: [],
          },
        },
      ],
      controlled: {
        tokens: ["6iTXDhfr8rqlsZhd"],
        actors: ["mB9hj9id8f3sVApS", "mB9hj9id8f3sVApS"],
      },
    },
    reply: {
      closed: false,
      currentObservers: null,
      observers: [],
      isStopped: false,
      hasError: false,
      thrownError: null,
    },
    controlled: {
      tokens: ["6iTXDhfr8rqlsZhd"],
      actors: ["mB9hj9id8f3sVApS", "mB9hj9id8f3sVApS"],
    },
    id: 847,
  },
]);
function sendRollReply(id: string, data?: any) {
  let rollIdx = helper.rolls.findIndex((r) => r.data == data);
  if (rollIdx >= 0) {
    let roll = rolls.value[rollIdx];
    console.log("sendRollReply", roll, { id, data });
    actorHelper?.answerRoll(id, { id: id || data.id, ...data });
  } else {
    console.warn("sendRollReply", id, data, rollIdx);
  }
}
import ActionsTab5e from "./components/ActionsTab5e.vue";
import InventoryTab5e from "./components/InventoryTab5e.vue";
import SkillsTab5e from "./components/SkillsTab5e.vue";
let component = ActionsTab5e;
provide("actor", actor);

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
        <ion-title>{{ actor?.name }}</ion-title>
        <ion-title size="small">
          <span v-for="classItem in actorHelper?.itemTypes?.value?.class"> {{ classItem.name }}</span>
        </ion-title>
      </ion-toolbar>
      <div class="actor-system-info">
        <div class="abilities">
          <div class="ability" v-for="(data, ak) in actor?.system?.abilities" :class.proficient="data.proficient">
            <div class="title">
              {{ ak.toUpperCase() }} <span class="abilityscore">{{ data.value - 10 >= 0 ? "+" : "" }}{{ Math.floor((data.value - 10) / 2) }}</span>
            </div>
            <div class="value">
              <small class="fullscore">
                {{ data.value }}
                <span class="bonus" v-if="data.bonuses && (data.bonuses.check || data.bonuses.save)">
                  {{ data.bonuses.check }} /
                  {{ data.bonuses.save }}
                </span>
              </small>
            </div>
            <!-- {{ data.proficient }}
            {{ data.max }} -->
          </div>
        </div>
      </div>
    </ion-header>
    <ion-content>
      <IonTabs>
        <IonTabBar slot="top">
          <IonTabButton v-for="tab in tabs" :tab="tab.path" :href="tab.path" :router-direction="'forward'">{{ tab.name }}</IonTabButton>
        </IonTabBar>

        <IonRouterOutlet></IonRouterOutlet>
      </IonTabs>

      <!-- <ion-card v-for="re of rolls">
        <ion-card-header>Manual Dice Roll</ion-card-header>
        <ion-card-content>
          <IonList>
             <form  :id="`roll-${re.id}`"> 
            <IonItem v-for="term of re.data.terms">
              <IonLabel>{{ term.term.number }} d {{ term.faces }}</IonLabel>
              <IonInput v-for="die of term.term.number" :label="term.faces" type="number" :name="`term-${term.id}-${die}`" v-model="term.term.results[die]"></IonInput>
            </IonItem>
          </form> 
            <IonItem> <IonLabel>Submit</IonLabel><IonButton @click="sendRollReply('' + re.id, re.data)">Submit</IonButton> </IonItem>
          </IonList>
        </ion-card-content>
      </ion-card> -->

      <!-- <ion-card>
        <ion-card-header> {{ actor?.name }} {{ actor?.type }} </ion-card-header>
        <ion-card-content>
          
        </ion-card-content>
      </ion-card> -->
    </ion-content>
  </ion-page>
</template>

<style>
ion-page {
  --background: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.85);
}
ion-popover {
  &.item-desc {
    --min-width: 40vw;
    --max-width: calc(min(1024px, 90vw));
    --width: auto;
  }
}
div.popover-content {
  margin-right: 2vw;
}
ion-content.item-desc {
  --background: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.85);
  --padding-start: 15px;
  --padding-end: 15px;
  --padding-top: 5px;
  --padding-bottom: 5px;
}

.abilities {
  display: flex;
  flex-direction: row;
  padding: 10px;
}
.ability {
  display: flex;
  padding: 10px;
  flex-direction: column;
}
</style>
