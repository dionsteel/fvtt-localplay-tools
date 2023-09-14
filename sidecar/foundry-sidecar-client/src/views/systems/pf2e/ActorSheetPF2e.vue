<script setup lang="ts">
import { Actor } from "@/interfaces/core";
import { useWorldStore, fetchJson } from "@/store/world";
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
  IonCardHeader,
  IonPopover,
} from "@ionic/vue";

import { skull, bed, bulb } from "ionicons/icons";
import { applyDeep } from "@/lib/utils";
import { ActorPF2e, PF2eTypes, ActorPF2eItemTypes, CharacterPF2e } from "@/interfaces/pf2e/index";

import DynamicComponent from "@/lib/DynamicComponent.vue";
import CharacterHeaderPF2e from "./components/CharacterHeaderPF2e.vue";
import { usePF2eGame } from "@/store/pf2e";

const props = defineProps<{ id: string }>();
const route$ = useRoute();
const store = useWorldStore();
const sysStore = usePF2eGame();


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

provide("actor", actor);
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
        <ion-title>
          <IonAvatar>
            <IonImg :src="actor?.img"></IonImg>
          </IonAvatar>
          {{ actor?.name }}
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-accordion-group v-if="actor">
        <ion-accordion>
          <ion-item slot="header"> Basics </ion-item>
          <div slot="content"><CharacterHeaderPF2e :actor="actor"></CharacterHeaderPF2e></div>
        </ion-accordion>
        <IonAccordion>
          <IonItem slot="header">abilities</IonItem>
          <div slot="content">
            <table>
              <tr v-for="(att, attName) in actor.system.abilities">
                <td>{{ attName }}</td>
                <td v-if="typeof att == 'object'">
                  <table>
                    <tr v-for="(satt, sattName) in att">
                      <td>{{ sattName }}</td>
                      <td>{{ satt }}</td>
                    </tr>
                  </table>
                </td>
                <td v-else>{{ att }}</td>
              </tr>
            </table>
          </div>
        </IonAccordion>
        <IonAccordion>
          <IonItem slot="header">Attributes</IonItem>
          <div slot="content">
            <table>
              <tr v-for="(att, attName) in actor.system.attributes">
                <td>{{ attName }}</td>
                <td v-if="typeof att == 'object'">
                  <table>
                    <tr v-for="(satt, sattName) in att">
                      <td>{{ sattName }}</td>
                      <td>{{ satt }}</td>
                    </tr>
                  </table>
                </td>
                <td v-else>{{ att }}</td>
              </tr>
            </table>
          </div>
        </IonAccordion>
        <IonAccordion>
          <IonItem slot="header">Details</IonItem>
          <div slot="content">
            <table>
              <tr v-for="(att, attName) in actor.system.details">
                <td>{{ attName }}</td>
                <td v-if="typeof att == 'object'">
                  <table>
                    <tr v-for="(satt, sattName) in att">
                      <td>{{ sattName }}</td>
                      <td>{{ satt }}</td>
                    </tr>
                  </table>
                </td>
                <td v-else>{{ att }}</td>
              </tr>
            </table>
          </div>
        </IonAccordion>
        <IonAccordion>
          <IonItem slot="header">Actions</IonItem>
          <div slot="content">
            <table>
              <tr v-for="(att, attName) in actor.system.actions">
                <td>{{ attName }}</td>
                <td v-if="typeof att == 'object'">
                  <table>
                    <tr v-for="(satt, sattName) in att">
                      <td>{{ sattName }}</td>
                      <td>{{ satt }}</td>
                    </tr>
                  </table>
                </td>
                <td v-else>{{ att }}</td>
              </tr>
            </table>
          </div>
        </IonAccordion>
        <IonAccordion>
          <IonItem slot="header">Skills</IonItem>
          <div slot="content">
            <table>
              <tr v-for="(att, attName) in actor.system.skills">
                <td>{{ attName }}</td>
                <td v-if="typeof att == 'object'">
                  <table>
                    <tr v-for="(satt, sattName) in att">
                      <td>{{ sattName }}</td>
                      <td>{{ satt }}</td>
                    </tr>
                  </table>
                </td>
                <td v-else>{{ att }}</td>
              </tr>
            </table>
          </div>
        </IonAccordion>
        <IonAccordion>
          <IonItem slot="header">Crafting</IonItem>
          <div slot="content">
            <table>
              <tr v-for="(att, attName) in actor.system.crafting">
                <td>{{ attName }}</td>
                <td v-if="typeof att == 'object'">
                  <table>
                    <tr v-for="(satt, sattName) in att">
                      <td>{{ sattName }}</td>
                      <td>{{ satt }}</td>
                    </tr>
                  </table>
                </td>
                <td v-else>{{ att }}</td>
              </tr>
            </table>
          </div>
        </IonAccordion>
        <IonAccordion>
          <IonItem slot="header">Exploration</IonItem>
          <div slot="content">
            <table>
              <tr v-for="(att, attName) in actor.system.exploration">
                <td>{{ attName }}</td>
                <td v-if="typeof att == 'object'">
                  <table>
                    <tr v-for="(satt, sattName) in att">
                      <td>{{ sattName }}</td>
                      <td>{{ satt }}</td>
                    </tr>
                  </table>
                </td>
                <td v-else>{{ att }}</td>
              </tr>
            </table>
          </div>
        </IonAccordion>
        <IonAccordion>
          <IonItem slot="header">Martial</IonItem>
          <div slot="content">
            <table>
              <tr v-for="(att, attName) in actor.system.martial">
                <td>{{ attName }}</td>
                <td v-if="typeof att == 'object'">
                  <table>
                    <tr v-for="(satt, sattName) in att">
                      <td>{{ sattName }}</td>
                      <td>{{ satt }}</td>
                    </tr>
                  </table>
                </td>
                <td v-else>{{ att }}</td>
              </tr>
            </table>
          </div>
        </IonAccordion>
        <IonAccordion>
          <IonItem slot="header">Resources</IonItem>
          <div slot="content">
            <table>
              <tr v-for="(att, attName) in actor.system.resources">
                <td>{{ attName }}</td>
                <td v-if="typeof att == 'object'">
                  <table>
                    <tr v-for="(satt, sattName) in att">
                      <td>{{ sattName }}</td>
                      <td>{{ satt }}</td>
                    </tr>
                  </table>
                </td>
                <td v-else>{{ att }}</td>
              </tr>
            </table>
          </div>
        </IonAccordion>
        <IonAccordion>
          <IonItem slot="header">Saves</IonItem>
          <div slot="content"></div>
        </IonAccordion>
        <IonAccordion>
          <IonItem slot="header">Inventory</IonItem>
          <IonAccordionGroup slot="content">
            <IonAccordion v-for="(items, itemType) of itemTypes">
              <IonItem slot="header">{{ capitalize(itemType) }}</IonItem>
              <div slot="content">
                <IonCard v-for="item of items">
                  <IonCardHeader>{{ item.name }}</IonCardHeader>
                  <IonCardContent
                    ><div :id="'item_' + item._id">
                      <table>
                        <tr v-for="(att, attName) in item.system">
                          <td>{{ attName }}</td>
                          <td v-if="typeof att == 'object'">
                            <table>
                              <tr v-for="(satt, sattName) in att">
                                <td>{{ sattName }}</td>
                                <td v-if="sattName == 'value' && attName == 'description'">
                                  <IonPopover :trigger="'item_' + item._id" reference="trigger" size="auto" class="item-desc">
                                    <DynamicComponent :html="item?.system?.description?.value"></DynamicComponent>
                                  </IonPopover>
                                </td>
                                <td v-else>{{ satt }}</td>
                              </tr>
                            </table>
                          </td>
                          <td v-else>{{ att }}</td>
                        </tr>
                      </table>
                    </div>
                  </IonCardContent>
                </IonCard>
              </div>
            </IonAccordion>
          </IonAccordionGroup>
        </IonAccordion>
      </ion-accordion-group>
    </ion-content>
  </ion-page>
</template>

<style>
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
