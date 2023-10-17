<script setup lang="ts">
import { ActionItemPF2e } from "@/interfaces/pf2e/item";
import { usePF2eGame } from "@/store/pf2e";
import {
  IonAccordion,
  IonAccordionGroup,
  IonActionSheet,
  IonBadge,
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
  IonButton,
  IonSelect,
  IonSelectOption,
  IonText,
  IonHeader,
} from "@ionic/vue";
import { capitalize, computed, inject } from "vue";
import DynamicComponent from "@/lib/DynamicComponent.vue";
import { ActorHelperPF2e } from "@/interfaces/pf2e/helper";
import { ActionMacroDescription } from "@/interfaces/pf2e/action-macros";
import { SkillAbbreviation } from "@/interfaces/pf2e/actor/creature";
import { CharacterPF2e } from "@/interfaces/pf2e";

const game = usePF2eGame();

const { action } = defineProps<{ action: ActionItemPF2e & { macro?: ActionMacroDescription } }>();

const actorHelper = inject<ActorHelperPF2e>("actorHelper");
const actor = inject<CharacterPF2e>("actor");
const doActionVariant = (action: number, variant: number): void => {
  console.log({ action, variant, actorHelper });

  actorHelper?.performAction(action, variant);
};

function doActionAux(action: number, auxIdx: number) {
  console.log({ action, auxIdx });
  // actorHelper?.performActionAux(action, auxIdx);
}
const skillAbbrvMap: Record<string, SkillAbbreviation> = {
  acrobatics: "acr",
  arcana: "arc",
  athletics: "ath",
  crafting: "cra",
  deception: "dec",
  diplomacy: "dip",
  intimidation: "itm",
  medicine: "med",
  nature: "nat",
  occultism: "occ",
  performance: "prf",
  religion: "rel",
  society: "soc",
  stealth: "ste",
  survival: "sur",
  thievery: "thi",
};
const asys = computed(() => actor?.system);
const actorStats = Object.fromEntries(Object.entries(skillAbbrvMap).map(([k, v]) => [k, computed(() => asys.value?.skills[v]?.totalModifier)]));
// function getStatValue(key: string) {
//   return computed(() => {
//     let skill = skillAbbrvMap[key];
//     if(actorHelper?.actor?.value?.system?.skills[skill])
//     console.log(key, skill, actorHelper?.system?.skills, actorHelper?.system?.skills[skill]);
//     return actorHelper?.actor?.value?.system?.skills[skill] || actorHelper?.actor?.value?.system?.skills;
//   }); //?.totalModifier;
// }
console.log(actorStats, actor);
function mf(t: number) {
  return `${t >= 0 ? "+" : ""}${t}`;
}
</script>

<template>
  <IonAccordion>
    <IonItem slot="header">
      <IonImg class="action-icon" :src="game.world.config.getAPIUrl(action.img)"></IonImg>
      <IonLabel>{{ action.name }}</IonLabel>
      <template v-if="action.macro">
        <IonButton
          size="small"
          class="ion-text-wrap"
          style="max-width: 130px"
          v-if="(action.macro.variants?.length || 0) > 0"
          v-for="variant in action.macro.variants"
          @click.stop.prevent="actorHelper?.performGenericAction(action.macro.slug, { variant: variant.slug })">
          {{ variant.title || variant.name || variant.statistic?.toUpperCase() }} {{ mf(actorStats[variant.statistic || action.macro.statistic || ""]?.value || 0) }}
        </IonButton>
        <IonButton class="ion-text-wrap" style="max-width: 130px" size="small" v-else @click.stop.prevent="actorHelper?.performGenericAction(action.macro.slug)">
          {{ (action.macro?.statistic || action.macro.name || action.macro.title || "Use").toUpperCase() ?? "" }}
          {{ action.macro.statistic ? mf(actorStats[action.macro.statistic || ""]?.value || 0) : "" }}
        </IonButton>
      </template>
      <template v-else>
        <IonButton class="ion-text-wrap" style="max-width: 130px" @click.stop.prevent="actorHelper?.performAction(action._id) && false">Use</IonButton>
      </template>
      <!-- <IonLabel>
        <IonBadge slot="end" color="secondary" v-if="action.system.actionType.value">
          <span v-if="action.system.actions.value">{{ action.system.actions.value }}</span>
          {{ capitalize(action.system.actionType.value) }}<br />
        </IonBadge>
        <IonBadge slot="end" v-for="trait of action?.system?.traits?.value">{{ capitalize(trait || "") }}</IonBadge>
      </IonLabel> -->
      <!-- <IonBadge slot="end" color="tertiary" v-if="action?.system?.traits?.rarity">{{ capitalize(action?.system?.traits?.rarity || "") }}</IonBadge> -->
    </IonItem>
    <IonCard slot="content" class="ion-padding">
      <IonCardHeader>
        <!-- <IonCardTitle>
          <IonItem>
            <IonImg class="action-icon" :src="game.world.config.getAPIUrl(action.img)"></IonImg>
            <IonLabel>{{ action.name }}</IonLabel>
            <IonBadge color="secondary" v-if="action.system.actionType.value">
              <span v-if="action.system.actions.value">{{ action.system.actions.value }}</span>
              {{ capitalize(action.system.actionType.value) }}<br />
            </IonBadge>
          </IonItem>
        </IonCardTitle> -->
        <IonCardSubtitle>
          <IonLabel>
            <IonBadge justify="space-between" v-for="trait of action?.system?.traits?.value">{{ capitalize(trait || "") }}</IonBadge>
            <IonBadge justify="space-between" color="tertiary" v-if="action?.system?.traits?.rarity">{{ capitalize(action?.system?.traits?.rarity || "") }}</IonBadge>
          </IonLabel>
        </IonCardSubtitle>
        <!-- <IonCardSubtitle v-if="action.macro">
          Macro:
          <pre>{{ action.macro }}</pre>
        </IonCardSubtitle> -->
      </IonCardHeader>
      <IonCardContent>
        <DynamicComponent v-if="!((action.macro?.variants?.filter((v) => v.description).length || 0) > 0)" :html="action.system.description.value"></DynamicComponent>

        <template v-if="action.macro && action.macro.variants">
          <!-- <DynamicComponent :html="action.macro.description"></DynamicComponent> -->
          <IonList :inset="false">
            <IonItem :detail="false" v-if="(action.macro.variants?.length || 0) > 0" v-for="variant in action.macro.variants">
              <IonText v-if="variant.description">
                <IonLabel>
                  <b>{{ variant.title || variant.name }}</b>
                </IonLabel>
                <DynamicComponent :html="variant.description"> </DynamicComponent>
                <!-- <IonNote color="medium" class="ion-text-wrap" v-for="(note, outcome) in variant.notes">
                <b>{{ note.title || note.outcome.join(", ") }}:</b> {{ note.text }}
              </IonNote> -->
              </IonText>
              <IonButton @click="actorHelper?.performGenericAction(action.macro.slug, { variant: variant.slug })">
                {{ variant.title || variant.name || variant.statistic?.toUpperCase() }} {{ mf(actorStats[variant.statistic || action.macro.statistic || ""]?.value || 0) }}
              </IonButton>
            </IonItem>
          </IonList>
        </template>
        <!-- <template v-if="!action.macro">{{ action }}</template> -->
        <!-- <template v-else> -->
        <IonLabel v-if="action.system.source?.value">Source: {{ action.system.source.value }}<br /> </IonLabel>
        <span v-if="action.system.requirements?.value"> Requirements: {{ action.system.requirements.value }}<br /> </span>
        <span v-if="action.system.trigger?.value"> Trigger: {{ action.system.trigger.value }}<br /></span>
        <span v-if="action.system.rules && action.system.rules.length > 0"> Rules: {{ action.system.rules }} </span><br />
        <span v-if="action.system.frequency">
          Frequency: {{ action.system.frequency?.max ? `Max. ${action.system.frequency?.max} ` : action.system.frequency?.value }}
          {{ action.system.frequency?.per ? `per ${action.system.frequency?.per}` : `` }}
        </span>
        <pre v-if="(action.system?.options?.value?.length || 0) > 0">{{ action.system.options?.value }}</pre>
        <!-- </template> -->
      </IonCardContent>
      <IonButton v-if="action.macro && (action.macro.variants?.length || 0) < 1" @click="actorHelper?.performGenericAction(action.macro.slug)">
        {{ (action.macro?.statistic || action.macro.name || action.macro.title || "Use").toUpperCase() ?? "" }}
        {{ action.macro.statistic ? mf(actorStats[action.macro.statistic || ""]?.value || 0) : "" }}
      </IonButton>
      <template v-if="!action.macro">
        <IonButton @click.preventDefault="actorHelper?.performAction(action._id) && false">Use</IonButton>
      </template>
    </IonCard>
  </IonAccordion>
</template>

<style scoped>
ion-img.action-icon {
  width: 32px;
  height: 32px;
  margin: 1px 5px;
}
</style>
