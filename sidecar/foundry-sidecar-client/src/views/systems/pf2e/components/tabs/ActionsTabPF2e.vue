<script setup lang="ts">
import { ActorHelperPF2e, CharacterPF2e } from "@/interfaces/pf2e";
import { ActionsPF2e } from "@/interfaces/pf2e/actions_pf2e";
import { ActionMacroDescription, ActionMacros } from "@/interfaces/pf2e/action-macros";
import { ActionItemPF2e } from "@/interfaces/pf2e/item";
import { usePF2eGame } from "@/store/pf2e";
import {
  IonAccordion,
  IonAccordionGroup,
  IonActionSheet,
  IonBadge,
  IonCard,
  IonCardContent,
  IonCheckbox,
  IonContent,
  IonImg,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import { capitalize, computed, inject } from "vue";
import DynamicComponent from "@/lib/DynamicComponent.vue";
import ActionCardPF2e from "../ActionCardPF2e.vue";
import StrikeCardPF2e from "../StrikeCardPF2e.vue";
import { i18n } from "@/interfaces/pf2e/lang/all";

const game = usePF2eGame();
const helper = game.helper;
const actor = inject<CharacterPF2e>("actor");
const actorHelper = inject<ActorHelperPF2e>("actorHelper");
function categorise<T = any>(actions: any[]): Record<string, T[]> {
  return Object.fromEntries(
    Object.entries(
      actions.reduce((grp, itm) => {
        let iType = itm?.system?.category ? itm.system.category : itm.type;
        grp[iType] = grp[iType] || [];
        grp[iType].push(itm);
        return grp;
      }, {} as any)
    ).sort((a, b) => {
      if (a[0] > b[0]) return 1;
      if (a[0] < b[0]) return -1;
      return 0;
    })
  ) as any;
}

const actorActions: Array<ActionItemPF2e> =
  ((actor?.items || []).filter((i) => i.type == "action" || ((i as any).system?.actionType?.value && (i as any).system?.actionType.value != "passive")) as any) || [];
const allActions: Array<ActionItemPF2e & { macro?: ActionMacroDescription }> = [...actorActions, ...ActionsPF2e].map((a: any) => {
  a.macro = ActionMacros[a.system.slug];
  return a;
}) as any;
function sortName<T extends { name: string }>(a: T, b: T) {
  return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
}
const explorationActions = allActions.filter((a) => (a as any).system?.traits?.value.includes("exploration"));
const downtimeActions = allActions.filter((a) => (a as any).system?.traits?.value.includes("downtime"));
const explorationActionCategories = categorise(explorationActions);
const downtimeActionCategories = categorise(downtimeActions);
const realtimeActions = allActions.filter((a) => !(explorationActions.includes(a) || downtimeActions.includes(a))).sort(sortName);
const skillActions = realtimeActions.filter((a) => (a as any).system?.traits?.value.includes("skill")).sort(sortName);
const skillActionCategories = categorise<ActionItemPF2e>(skillActions);
const generalActions = realtimeActions.filter((a) => (a as any).system?.traits?.value.includes("general"));
const manipulateActions = realtimeActions.filter((a) => (a as any).system?.traits?.value.includes("manipulate"));
const eidolonActions = realtimeActions.filter((a) => (a as any).system?.traits?.value.includes("eidolon"));
const combatActions = realtimeActions.filter((a) => (a as any).system?.traits?.value.includes("combat"));
const categorizedActions = categorise<ActionItemPF2e>(realtimeActions);
const allTraitTags = allActions.flatMap((a) => a.system?.traits || []);
const allTraits = allTraitTags
  .flatMap((a) => a.value || [])
  .reduce((a, c) => {
    if (!a.includes(c)) {
      a.push(c);
    }
    return a;
  }, [] as string[]);
let allowedTraits = ["general", "move", "interaction", "concentrate", "manipulate", "attack", "defensive", "fortune", "misfortune", "magical", "secret", "exploration", "downtime"];
let allowIfTraits = ["general", "move", "attack", "skill"];
let allowedRarities = ["common", "uncommon", "rare", "unique"];
function allTraitsAllowed(action: ActionItemPF2e) {
  if (action?.system?.traits?.value.length < 1) return false;
  if (action?.system?.requirements?.value) return false;
  if (action?.system?.traits?.value.find((t) => allowIfTraits.includes(t))) {
    return true;
  }
  return false;
  return allowedRarities.includes(action.system.traits.rarity || "") && action.system.traits.value.every((t) => allowedTraits.includes(t));
}
const toggleItems = computed(() => actor?.items?.filter((i) => i.system.rules.filter((r) => r.toggleable).length > 0));
</script>

<template>
  <IonPage>
    <IonContent>
      <IonList>
        <!-- <IonItem>
          <IonSelect aria-label="Filter Traits" :multiple="true" :label="'Filter Traits'" :value="allowedTraits">
            <IonSelectOption v-for="tag in allTraits" :value="tag">
              {{ capitalize(tag) }}
            </IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>In-Combat Actions </IonItem>
        <IonItem>Your Actions</IonItem> -->
        <IonItemGroup>
          <IonItemDivider> Toggles </IonItemDivider>
          <IonItem v-for="item in actor?.synthetics?.toggles">
            <template v-if="item.suboptions?.length > 0">
              <IonSelect :label="item.label" :value="item.suboptions.find(s => s.selected)?.value"
                :onIonChange="(e) => actorHelper?.setItemToggle({ itemId: item.itemId, value: e.target.value, domain: item.domain, option: item.option, suboption: e.target.value })">
                <IonSelectOption v-for="suboption in item.suboptions" :value="suboption.value">{{
                  i18n(suboption.label) || suboption.label }}</IonSelectOption>
              </IonSelect>
              <!-- <IonCheckbox v-for="suboption in item.suboptions"
                :onIonChange="(e) => actorHelper?.setItemToggle({ itemId: item.itemId, value: e.target.checked, domain: item.domain, option: item.option, suboption })"
                label-placement="end" :checked="item.checked">
                {{ item.label }}:{{ suboption }}
              </IonCheckbox> -->
            </template>
            <template v-else>

              <!-- <template v-for="rt in item.system.rules.filter((r) => r.toggleable)"> -->
              <IonCheckbox
                :onIonChange="(e) => actorHelper?.setItemToggle({ itemId: item.itemId, value: e.target.checked, domain: item.domain, option: item.option })"
                label-placement="end" :checked="item.checked">
                {{ item.label }}
              </IonCheckbox>
            </template>

            <!-- </template> -->
          </IonItem>
          <IonItemDivider> Strikes</IonItemDivider>
          <IonAccordionGroup>
            <StrikeCardPF2e v-for="(strike, strikeIdx) in actor?.system.actions" :strike="strike" :strikeIdx="strikeIdx">
            </StrikeCardPF2e>
            <IonItemDivider>Your Actions</IonItemDivider>
            <ActionCardPF2e v-for="action in actorActions" :action="action"></ActionCardPF2e>

            <IonItemDivider>General Actions</IonItemDivider>
            <IonAccordionGroup>
              <ActionCardPF2e v-for="action in generalActions" :action="action"></ActionCardPF2e>
            </IonAccordionGroup>

            <IonItemDivider>Skill Actions</IonItemDivider>
            <IonAccordionGroup>
              <ActionCardPF2e v-for="action in skillActionCategories.action" :action="action"></ActionCardPF2e>
              <ActionCardPF2e v-for="action in skillActionCategories.offensive" :action="action"></ActionCardPF2e>
              <ActionCardPF2e v-for="action in skillActionCategories.defensive" :action="action"></ActionCardPF2e>
              <ActionCardPF2e v-for="action in skillActionCategories.interaction" :action="action"></ActionCardPF2e>
            </IonAccordionGroup>
          </IonAccordionGroup>

          <IonItemDivider> Exploration Actions </IonItemDivider>
          <IonAccordionGroup>
            <IonAccordion v-for="(actions, cat) in explorationActionCategories">
              <IonItem slot="header">
                {{ capitalize(cat) }}
              </IonItem>
              <IonAccordionGroup slot="content">
                <ActionCardPF2e v-for="action in actions" :action="action"></ActionCardPF2e>
              </IonAccordionGroup>
            </IonAccordion>
          </IonAccordionGroup>

          <IonItem> Downtime Actions </IonItem>
          <IonAccordionGroup>
            <IonAccordion v-for="(actions, cat) in downtimeActionCategories">
              <IonItem slot="header">
                {{ capitalize(cat) }}
              </IonItem>
              <IonAccordionGroup slot="content">
                <ActionCardPF2e v-for="action in actions" :action="action"></ActionCardPF2e>
              </IonAccordionGroup>
            </IonAccordion>
          </IonAccordionGroup>
        </IonItemGroup>
      </IonList>
    </IonContent>
  </IonPage>
</template>

<style scoped>
ion-img {
  width: 32px;
  height: 32px;
  margin: 1px 5px;
}
</style>
