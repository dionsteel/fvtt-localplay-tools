<script setup lang="ts">
import { ActionItemPF2e } from "@/interfaces/pf2e/item";
import { usePF2eGame } from "@/store/pf2e";
import {
  IonAccordion,
  IonAccordionGroup,
  IonActionSheet,
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonContent,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import { Ref, capitalize, inject } from "vue";
import DynamicComponent from "@/lib/DynamicComponent.vue";
import { CharacterStrike } from "@/interfaces/pf2e/actor/character";
import { ActionVariant } from "@/interfaces/pf2e/actor/actions";
import { ActorHelperPF2e } from "@/interfaces/pf2e";

const game = usePF2eGame();

const { strike, strikeIdx } = defineProps<{ strike: CharacterStrike; strikeIdx: number }>();
const actorHelper = inject<ActorHelperPF2e>("actorHelper"); //, () => new ActorHelperPF2e(""), true);

const doStrikeVariant = (action: number, variant: number): void => {
  console.log({ action, variant, actorHelper });

  actorHelper?.performStrike(action, variant);
};

function doStrikeAux(action: number, auxIdx: number) {
  console.log({ action, auxIdx });
  actorHelper?.performStrikeAux(action, auxIdx);
}
</script>

<template>
  <IonAccordion>
    <IonItem slot="header">
      <IonImg class="action-icon" :src="game.world.config.getAPIUrl(strike.imageUrl)"></IonImg>
      <IonLabel>{{ strike.label }}</IonLabel>
      <IonLabel>
        <IonBadge slot="end" color="secondary" v-if="strike.type"> {{ capitalize(strike.type || "") }}<br /> </IonBadge>
        <IonBadge slot="end" v-for="trait of [...strike?.traits, ...strike.weaponTraits]">{{ capitalize(trait.label || "") }}</IonBadge>
      </IonLabel>
    </IonItem>
    <div slot="content" class="ion-padding">
      <!-- <IonCard slot="content"> -->
      <!-- <IonCardHeader> -->
      <!-- <IonCardTitle>
          <IonItem>
            <IonImg class="action-icon" :src="game.world.config.getAPIUrl(action.img)"></IonImg>
            <IonLabel>{{ action.name }}</IonLabel>
            <IonBadge color="secondary" v-if="action.actionType.value">
              <span v-if="action.actions.value">{{ action.actions.value }}</span>
              {{ capitalize(action.actionType.value) }}<br />
            </IonBadge>
          </IonItem>
        </IonCardTitle> -->
      <!-- <IonCardSubtitle> -->
      <!-- </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent> -->
      <DynamicComponent :html="strike?.item?.system?.description?.value"></DynamicComponent>
      <IonItem v-if="strike.ready">
        <IonLabel>Strike: {{ strike.totalModifier }} ({{ strike.breakdown }})</IonLabel>
        <IonButton v-for="(variant, varIdx) of strike.variants" @click="doStrikeVariant(strikeIdx, varIdx)">{{ variant.label }}</IonButton>
      </IonItem>
      <IonItem>
        <IonButton v-for="(aux, auxIdx) in strike.auxiliaryActions" @click="doStrikeAux(strikeIdx, auxIdx)">{{ aux?.action }}: {{ aux?.fullPurpose }}</IonButton>
      </IonItem>
      <IonItem v-for="ammo in strike.ammunition">ammo: {{ ammo }}</IonItem>
      <IonItem v-for="mod in strike.modifiers">{{ mod }}</IonItem>
      <!-- <IonItem>domains: {{ action.domains }}</IonItem>
      <IonItem>glyph: {{ action.glyph }}</IonItem>
      <IonItem>notes: {{ action.notes }}</IonItem>
      <IonItem>success: {{ action.success }}</IonItem>
      <IonItem>criticalSuccess: {{ action.criticalSuccess }}</IonItem>
      <IonItem>options: {{ action.options }}</IonItem>
      <IonItem>ready: {{ action.ready }}</IonItem>
      <IonItem>traits: {{ action.traits }}</IonItem>
      <IonItem>weapon traits: {{ action.weaponTraits }}</IonItem>
      <IonItem>visible: {{ action.visible }}</IonItem>
      <IonItem>variants: {{ action.variants }}</IonItem> -->
      <IonItem v-if="strike.versatileOptions?.length > 0">versatileOptions: {{ strike.versatileOptions }}</IonItem>
      <IonItem v-if="strike.altUsages?.length > 0">altUsages: {{ strike.altUsages }}</IonItem>
      <br />
      <IonBadge :style="{ margin: '1px 5px' }" v-for="trait of [...strike?.traits, ...strike.weaponTraits]">{{ capitalize(trait.label || "") }}</IonBadge>
      <IonBadge slot="end" color="tertiary" v-if="strike?.item.system.traits.rarity">{{ capitalize(strike?.item.system.traits.rarity || "") }}</IonBadge>

      <!-- <IonLabel v-if="action.source?.value">Source: {{ action.source.value }}<br /> </IonLabel> -->
      <!-- <span v-if="action..requirements?.value"> Requirements: {{ action.requirements.value }}<br /> </span>
        <span v-if="action.trigger?.value"> Trigger: {{ action.trigger.value }}<br /></span>
        <span v-if="action.rules && action.rules.length > 0"> Rules: {{ action.rules }} </span><br />
        <span v-if="action.frequency">
          Frequency: {{ action.frequency?.max ? `Max. ${action.frequency?.max} ` : action.frequency?.value }}
          {{ action.frequency?.per ? `per ${action.frequency?.per}` : `` }}
        </span> -->
      <!-- </IonCardContent>
      </IonCardContent>
    </IonCard> -->
    </div>
  </IonAccordion>
</template>

<style scoped>
ion-img.action-icon {
  width: 32px;
  height: 32px;
  margin: 1px 5px;
}
</style>
