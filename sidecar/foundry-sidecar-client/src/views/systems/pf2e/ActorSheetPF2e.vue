<script setup lang="ts">
import { Actor } from "@/interfaces/core";
import { useWorldStore } from "@/store/world";
import { from, useObservable, useSubject } from "@vueuse/rxjs";
import { Observable, Subject } from "rxjs";
import { concatMap, switchMap, filter, distinctUntilKeyChanged } from "rxjs/operators";
import { WebSocketSubject, webSocket } from "rxjs/webSocket";
import { computed, ref, watch, capitalize, provide, Ref } from "vue";
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
  IonList,
  IonButton,
  IonProgressBar,
  IonChip,
  IonRow,
  IonGrid,
  IonCol,
  IonSelect,
  IonSelectOption,
  IonCheckbox,
} from "@ionic/vue";

import { skullSharp, bedSharp, bulbSharp, medalSharp, addSharp, bandageSharp, shapesSharp, medkitSharp, shieldSharp, keySharp, diceSharp } from "ionicons/icons";
import { applyDeep } from "@/lib/utils";
import { ActorPF2e, PF2eTypes, ActorPF2eItemTypes, CharacterPF2e, ActorHelperPF2e } from "@/interfaces/pf2e/index";

import DynamicComponent from "@/lib/DynamicComponent.vue";
import CharacterHeaderPF2e from "./components/CharacterHeaderPF2e.vue";
import { usePF2eGame } from "@/store/pf2e";
import { i18n } from "@/interfaces/pf2e/lang/all";

const props = defineProps<{ id: string }>();
const route$ = useRoute();
const store = useWorldStore();
const sysStore = usePF2eGame();
const parchment = store.config.getAPIUrl("/systems/pf2e/assets/sheet/parchment.png");

const helper = sysStore.helper;

const actors = helper.allActors;

let actorHelper: ActorHelperPF2e = (await helper.getActorHelper(`${route$.params.id}`)) as ActorHelperPF2e; // helper.actors[`${route$.params.id}`];
let actor = (await actorHelper.getActor()) as any as Ref<CharacterPF2e>;
watch(
  () => route$.params.id,
  async () => {
    if (route$.params.id) {
      actorHelper = (await helper.getActorHelper(`${route$.params.id}`)) as ActorHelperPF2e;
      actor = (await actorHelper.getActor()) as any as Ref<CharacterPF2e>;
    }
  },
  { immediate: true }
);

console.log({ actorHelper, actor, helper, actors, store, sysStore, props, route$ });

provide("actor", actor);
provide<ActorHelperPF2e>("actorHelper", actorHelper);
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
function getID(a: any) {
  return a._id || a.id;
}
const actorID = computed(() => actor.value._id);
const tabs = computed(() => [
  { name: "Actions", path: `/pf2e/actors/${route$.params.id}/actions` },
  { name: "Attributes", path: `/pf2e/actors/${route$.params.id}/attributes` },
  // { name: "Abilities", path: `/pf2e/actors/${route$.params.id}/abilities` },
  { name: "Inventory", path: `/pf2e/actors/${route$.params.id}/inventory` },
  // { name: "Skills", path: `/pf2e/actors/${route$.params.id}/skills` },
  { name: "Spells", path: `/pf2e/actors/${route$.params.id}/spells` },
  { name: "Features", path: `/pf2e/actors/${route$.params.id}/features` },
  // { name: "Biography", path: `/pf2e/actors/${route$.params.id}/biography` },
]);
let healthGroups = ["danger", "warning", "success"];
let hitPointColour = ref(healthGroups[2]); //()=>{let hn = ; return ['danger','warning','success'][hn)]})
watch(
  actor,
  (v, p, cu) => {
    hitPointColour.value = healthGroups[Math.round(((actor?.value?.hitPoints?.value || 0) / (actor?.value?.hitPoints?.max || 1)) * 2)];
  },
  { immediate: true }
);
const expandSkills = ref(false);
const profColours = ["", "primary", "secondary", "tertiary"];
</script>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
          <IonButton>
            <IonAvatar slot="start"><IonImg :src="store.config.getAPIUrl(actor?.img)" style="background-color: #deedef"></IonImg></IonAvatar>
          </IonButton>
        </ion-buttons>
        <ion-title>
          {{ actor?.name }}
        </ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-title>
          <div style="flex-direction: row">
            <IonIcon v-for="n in actor?.system?.resources?.heroPoints?.value" :icon="medalSharp" color="primary"></IonIcon>
            <IonIcon v-for="n in actor?.system?.attributes?.dying?.value" :icon="skullSharp" color="danger"></IonIcon>
            <IonIcon v-for="n in actor?.system?.attributes?.wounded?.value" :icon="bandageSharp" color="warning"></IonIcon>
            <img
              style="width: 24px; height: 24px"
              v-for="condition in actor?.itemTypes?.condition"
              :src="store.config.getAPIUrl(condition.img)"
              color="secondary"
              :title="
                condition.name +
                (condition.system.value.isValued ? ': ' + condition.system.value.value : '') +
                ' (' +
                [condition.system.duration.expiry, condition.system.duration.value, condition.system.duration.unit].filter((v) => v).join(' ') +
                ')'
              " /></div
        ></ion-title>
        <IonChip slot="end">
          <IonIcon :icon="medkitSharp">HP</IonIcon>
          <IonLabel>
            {{ actor?.system?.attributes?.hp.value }} <small v-if="actor?.system?.attributes?.hp.temp">+ {{ actor?.system?.attributes?.hp.temp }}</small> /
            {{ actor?.system?.attributes?.hp.max }}
          </IonLabel>
        </IonChip>
        <IonChip slot="end" id="ac">
          <IonIcon :icon="shieldSharp">HP</IonIcon>
          <IonLabel> {{ actor.system?.attributes?.ac?.value }} </IonLabel>
          <IonPopover trigger="ac">{{ i18n(actor.system.attributes.ac.label) }} {{ actor.system.attributes.ac.breakdown }}</IonPopover>
        </IonChip>

        <ion-buttons slot="end"> </ion-buttons>
        <IonProgressBar
          type="determinate"
          :value="actor?.system?.attributes?.hp?.value / actor.system?.attributes?.hp?.max"
          :color="healthGroups[Math.round(((actor?.system?.attributes?.hp?.value || 0) / (actor?.system.attributes.hp?.max || 1)) * 2)]"></IonProgressBar>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <IonTabs>
        <IonToolbar>
          <IonGrid>
            <IonRow @click="expandSkills = !expandSkills">
              <IonCol v-for="(data, ak) in actor?.system?.abilities">
                {{ ak.toUpperCase() }}
                <span class="abilityscore">
                  {{ data.mod >= 0 ? "+" : "" }}{{ data?.mod }} <IonIcon v-if="actor?.system?.details?.keyability?.value == ak" :icon="keySharp"></IonIcon>
                  <!--{{ Math.floor((data.value - 10) / 2) }} -->
                </span>
              </IonCol>
            </IonRow>
            <IonRow v-if="expandSkills">
              <IonCol v-for="(data, ak) in actor?.system?.abilities">
                <small v-if="ak == 'con'" class="fullscore save" title="Saving Throw">
                  Save: {{ ["", "T", "E", "M", "L"][actor.system.saves.fortitude.rank] + " " }}+{{ actor.system.saves.fortitude.totalModifier }}<br />
                </small>
                <small v-if="ak == 'dex'" class="fullscore save" title="Saving Throw">
                  Save: {{ ["", "T", "E", "M", "L"][actor.system.saves.reflex.rank] + " " }}+{{ actor.system.saves.reflex.totalModifier }}<br />
                </small>
                <small v-if="ak == 'wis'" class="fullscore save" title="Saving Throw">
                  Save: {{ ["", "T", "E", "M", "L"][actor.system.saves.will.rank] + " " }}+{{ actor.system.saves.will.totalModifier }}<br />
                </small>
                <template v-for="skil of actor.system.skills">
                  <small :class="`skill skill-rank-${skil.rank}`" v-if="skil.ability == ak && skil.rank > 0">
                    {{ capitalize(skil?.label || "") }} +{{ skil.totalModifier }} <br
                  /></small>
                </template>
              </IonCol>
            </IonRow>
            <IonRow>
              <!-- <IonCol>
                <IonLabel style="font-weight: bold">Saves</IonLabel>
              </IonCol> -->
              <IonCol>
                <IonButton id="rolls_savingthrow" size="small" fill="outline"> <IonIcon :icon="diceSharp" slot="start"></IonIcon>Saves</IonButton>
                <IonPopover trigger="rolls_savingthrow">
                  <div class="ion-padding">
                    <IonButton @click="actorHelper.rollSavingThrow({ save: 'reflex' })" fill="outline" :color="profColours[actor.system.saves.reflex.rank]" size="small"
                      >Reflex: {{ ["", "T", "E", "M", "L"][actor.system.saves.reflex.rank] + " " }}+{{ actor.system.saves.reflex.totalModifier }}
                    </IonButton>
                    <IonButton @click="actorHelper.rollSavingThrow({ save: 'will' })" fill="outline" :color="profColours[actor.system.saves.will.rank]" size="small"
                      >Will: {{ ["", "T", "E", "M", "L"][actor.system.saves.will.rank] + " " }}+{{ actor.system.saves.will.totalModifier }}
                    </IonButton>
                    <IonButton @click="actorHelper.rollSavingThrow({ save: 'fortitude' })" fill="outline" :color="profColours[actor.system.saves.fortitude.rank]" size="small"
                      >Fortitude: {{ ["", "T", "E", "M", "L"][actor.system.saves.fortitude.rank] + " " }}+{{ actor.system.saves.fortitude.totalModifier }}
                    </IonButton>
                  </div>
                </IonPopover>
                <!-- </IonCol>
              <IonCol> -->
                <IonButton id="rolls_skillcheck" size="small" fill="outline"> <IonIcon :icon="diceSharp" slot="start"></IonIcon>Checks</IonButton>
                <IonPopover alignment="center" side="bottom" trigger="rolls_skillcheck">
                  <!-- <IonContent class="ion-padding"> -->
                  <IonList>
                    <IonItem :button="true" @click="actorHelper.rollPerceptionCheck({ skill: 'perception' })" lines="full" :title="actor.system.attributes.perception.breakdown">
                      <IonIcon slot="start" :color="profColours[actor.system.attributes.perception.rank]" :icon="diceSharp"></IonIcon>
                      Perception
                      <IonLabel slot="end">
                        {{ ["", "T", "E", "M", "L"][actor.system.attributes.perception.rank] }}
                        {{ (actor.system.attributes.perception.value ? "+" : "") + actor.system.attributes.perception.value }}
                      </IonLabel>
                      <!-- </IonButton> -->
                    </IonItem>
                    <template v-for="skill of actor.system.skills">
                      <IonItem v-if="skill.rank" lines="full" :button="true" @click="actorHelper.rollSkillCheck({ skill: skill.slug })" :title="skill.breakdown">
                        <IonIcon :color="profColours[skill.rank]" slot="start" :icon="diceSharp"></IonIcon>
                        {{ skill.label }}
                        <IonLabel slot="end">
                          {{ ["", "T", "E", "M", "L"][skill.rank] }}
                          {{ (skill.value ? "+" : "") + skill.value }}
                        </IonLabel>
                        <!-- </IonButton> -->
                      </IonItem>
                    </template>
                  </IonList>
                  <!-- </IonContent> -->
                </IonPopover>
                <!-- </IonCol>
              <IonCol> -->
                <IonButton id="rolls_initiative" lines="none" size="small" fill="outline" :title="actor.system.attributes.initiative.breakdown">
                  <IonIcon :icon="diceSharp"></IonIcon>Initiative
                </IonButton>
                <IonPopover trigger="rolls_initiative" class="ion-padding">
                  <div class="ion-padding">
                    <IonSelect
                      @ion-change="(e) => actorHelper.setInitiativeStat({ slug: e.target.value })"
                      label="Set Initiative"
                      :value="actor.system.attributes.initiative.statistic">
                      <IonSelectOption key="perception" value="perception"
                        >Perception {{ (actor.system.attributes.perception.value ? "+" : "") + actor.system.attributes.perception.value }}</IonSelectOption
                      >
                      <IonSelectOption v-for="skill of actor.system.skills" :key="skill.slug" :value="skill.slug"
                        >{{ skill.label }}{{ (skill.value ? "+" : "") + skill.value }}</IonSelectOption
                      >
                    </IonSelect>
                    <IonButton @click="actorHelper.rollInitiative()">
                      Roll Initiative
                      {{ (actor.system.attributes.initiative.value ? "+" : "") + actor.system.attributes.initiative.value }}
                    </IonButton>
                  </div>
                </IonPopover>
                <!-- <IonCol>
              </IonCol> -->
              </IonCol>
            </IonRow>
            <!-- <IonRow>
              <IonCol size="auto"> </IonCol>
            </IonRow> -->
            <!-- <IonRow>
              <template v-for="item in actor?.items">
                <template v-for="rt in item.system.rules.filter((r) => r.toggleable)">
                  <IonCheckbox label-placement="end" :checked="rt.value"> {{ i18n(rt.label || "") }}</IonCheckbox>
                </template>
              </template>
            </IonRow> -->
          </IonGrid>
          <!-- <CharacterHeaderPF2e :actor="actor"></CharacterHeaderPF2e> -->
        </IonToolbar>
        <IonTabBar slot="top">
          <IonTabButton v-for="tab in tabs" :tab="tab.name" :href="tab.path" :router-direction="'root'">{{ tab.name }} </IonTabButton>
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
ion-toolbar {
  /* --background: white; */
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
