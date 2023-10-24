<script setup lang="ts">
import { CharacterPF2e } from "@/interfaces/pf2e";
import { PF2ECONFIG } from "@/interfaces/pf2e/config";
import { usePF2eGame } from "@/store/pf2e";
import { IonContent, IonPage, IonIcon, IonItem, IonLabel, IonSelect, IonSelectOption, IonImg, IonAccordion, IonList, IonAccordionGroup } from "@ionic/vue";
import { bedSharp, bulbSharp, skullSharp, addSharp, medalSharp, medal } from "ionicons/icons";
import { inject, capitalize } from "vue";

const game = usePF2eGame();
const helper = game.helper;
const actor = inject<CharacterPF2e>("actor");
function calculateInititative() {
  return actor?.system?.attributes?.initiative?.label;
  // const abl = actor?.system?.abilities[actor?.system?.attributes?.init?.ability || "dex"];
  // const mod = Math.floor(((abl?.value || 10) - 10) / 2);
  // let total = mod + Number(actor?.system?.attributes?.init?.bonus || 0);
  // let prof = abl?.proficient ? 2 + Math.floor((actor?.flags?.ddbimporter?.dndbeyond?.totalLevels || 1) / 5) : 0;
  // return total + prof;
}

// PF2ECONFIG.materialDamageEffects.abysium
</script>

<template>
  <IonPage>
    <IonContent>
      <div class="attributes" v-if="actor">
        <IonList>
          <!-- "ac": { "flat": null, "calc": "default", "formula": "" },  -->
          <IonItem class="ac">
            <IonLabel slot="start"> HP </IonLabel>
            <p>
              {{ actor?.system?.attributes?.hp.value }} <small v-if="actor?.system?.attributes?.hp.temp">+ {{ actor?.system?.attributes?.hp.temp }}</small> /
              {{ actor?.system?.attributes?.hp.max }}
            </p>
          </IonItem>
          <IonItem class="ac">
            <IonLabel slot="start"> AC </IonLabel>
            <p>
              {{ actor?.system.attributes.ac.value }}
              <!-- {{ actor?.flags?.ddbimporter?.overrideAC?.calc == "flat" ? actor?.flags.ddbimporter?.overrideAC.flat : actor?.flags.ddbimporter?.overrideAC?.calc }} -->
            </p>
          </IonItem>
          <IonItem>
            <IonLabel slot="start"> Shield </IonLabel>
            <IonImg style="width: 32px; height: 32px" :src="game.config.getAPIUrl(actor?.system?.attributes?.shield?.icon)"></IonImg>
            {{ actor?.system?.attributes?.shield?.name }}
            AC {{ actor?.system?.attributes?.shield?.ac }} Hardness {{ actor?.system?.attributes?.shield?.hardness }} HP {{ actor?.system?.attributes?.shield?.hp.value }} /
            {{ actor?.system?.attributes?.shield?.hp.max }}
            {{ actor?.system?.attributes?.shield?.raised ? "Raised" : "Not Raised" }}
            {{ actor?.system?.attributes?.shield?.broken ? "Broken" : "" }}
            {{ actor?.system?.attributes?.shield?.destroyed ? "Destroyed" : "" }}
            <!-- {{ actor?.system?.attributes?.shield?.itemId }} -->
            Break Threshold {{ actor?.system?.attributes?.shield?.brokenThreshold }}
          </IonItem>

          <IonItem>
            <IonLabel slot="start">Spell DC</IonLabel>
            <span class="spellcasting-stat">
              {{ actor?.system?.attributes?.spellDC?.value }} ({{ ["Untrained", "Trained", "Expert", "Master", "Legendary"][actor?.system?.attributes?.spellDC?.rank || 0] }})
            </span>
          </IonItem>
          <IonItem>
            <IonLabel slot="start">Class DC</IonLabel>
            <span class="spellcasting-stat">{{ actor?.system?.attributes?.classDC?.value }} ({{ actor?.system?.attributes?.classDC?.breakdown }}</span
            >)
          </IonItem>
          <IonItem>
            <IonSelect label="Initiative" :value="actor.system.attributes.initiative.statistic">
              <!-- <p>{{ actor.system.attributes.initiative.label }}</p> -->
              <IonSelectOption key="perception" value="perception"
                >Perception {{ (actor.system.attributes.perception.value ? "+" : "") + actor.system.attributes.perception.value }}</IonSelectOption
              >
              <IonSelectOption v-for="skill of actor.system.skills" :key="skill.slug" :value="skill.slug"
                >{{ skill.label }}{{ (skill.value ? "+" : "") + skill.value }}</IonSelectOption
              >
            </IonSelect>
          </IonItem>
          <!-- "hp": { "value": 31, "max": 31, "temp": 0, "tempmax": 0, "bonuses": { "level": "", "overall": "" }  },  -->
          <IonItem class="movement">
            <IonLabel slot="start"> Movement </IonLabel>
            <ul>
              <li>{{ actor.system.attributes.speed.breakdown }}</li>
              <li v-for="moveSpeed in actor?.system?.attributes?.speed.otherSpeeds">
                <template v-if="!['units', 'hover'].includes(moveSpeed.type) && moveSpeed">
                  <h2>{{ moveSpeed.label }}</h2>
                  <p class="movement-{{ msKey }}">{{ moveSpeed.value }}</p>
                </template>
              </li>
            </ul>
          </IonItem>

          <IonItem class="senses ion-wrap" v-if="actor.system.traits.senses.length > 0">
            <IonLabel slot="start">Senses</IonLabel>
            <span class="ion-wrap">
              <template v-for="(sense, sidx) in actor?.system?.traits.senses">
                {{ capitalize(sense.type) }} ({{ capitalize(sense.acuity) }}{{ sense.value || sense.range ? " " + (sense.value || sense.range) + "ft" : "" }})<br />
              </template>
            </span>
          </IonItem>
          <IonItem> <IonLabel slot="start">XP</IonLabel> {{ actor.system.details.xp.value }}</IonItem>
          <IonItem>
            <IonLabel slot="start">Ancestry</IonLabel>
            {{ actor.system.details.ancestry?.name }}
            {{ actor.system.details.ancestry?.trait }}
            {{ actor.system.details.ancestry?.adopted }}
            {{ actor.system.details.ancestry?.versatile }}
            {{ actor.system.details.ancestry?.countsAs }}
          </IonItem>
          <IonItem> <IonLabel slot="start">Heritage</IonLabel> {{ actor?.system?.details?.heritage?.name }}</IonItem>
          <IonItem> <IonLabel slot="start">Class</IonLabel> {{ actor?.system?.details?.class?.name }}</IonItem>
          <IonItem v-if="actor.system.traits.languages.value.length > 0">
            <IonLabel slot="start">Languages: </IonLabel>
            <span v-for="(lang, idx) in actor.system.traits.languages.value">{{ idx > 0 ? ", " : "" }}{{ capitalize(lang) }}</span>
          </IonItem>

          <IonItem v-if="actor.system.attributes.immunities.length > 0">
            <IonLabel slot="start">Immunities:</IonLabel>
            <span v-for="imm in actor.system.attributes.immunities">{{ imm.applicationLabel }}</span>
          </IonItem>
          <IonItem v-if="actor.system.attributes.resistances.length > 0">
            <IonLabel slot="start">Resistances:</IonLabel>
            <span v-for="imm in actor.system.attributes.resistances">{{ imm.applicationLabel }} {{ imm.value }}</span>
          </IonItem>
          <IonItem v-if="actor.system.attributes.weaknesses.length > 0">
            <IonLabel slot="start">Weaknesses:</IonLabel>
            <span v-for="imm in actor.system.attributes.weaknesses">{{ imm.applicationLabel }} {{ imm.value }}</span>
          </IonItem>
          <IonItem class="death-saves">
            <!-- <IonIcon v-for="n in actor?.system?.attributes?.dying.value?.success" :icon="skull" :color="'green'"></IonIcon> -->
            <IonIcon v-for="n in actor?.system?.attributes?.dying?.value" :icon="skullSharp" color="danger"></IonIcon>
            <IonIcon v-for="n in actor?.system?.attributes?.wounded?.value" :icon="addSharp" color="warning"></IonIcon>
            <IonIcon v-for="n in actor?.system?.resources?.heroPoints?.value" :icon="medalSharp" color="primary"></IonIcon>
          </IonItem>

          <IonItem> <IonLabel slot="start">Class HP</IonLabel> {{ actor?.system?.attributes?.classhp }} </IonItem>
          <IonItem> <IonLabel slot="start">Ancestry HP</IonLabel> {{ actor?.system?.attributes?.ancestryhp }} </IonItem>
          <IonItem> <IonLabel slot="start">Hands Free</IonLabel> {{ actor?.system?.attributes?.handsFree }} </IonItem>
          <IonItem> <IonLabel slot="start">Bonus Limit Bulk</IonLabel> {{ actor?.system?.attributes?.bonusLimitBulk }} </IonItem>
          <IonItem> <IonLabel slot="start">Bonus Encumbrance Bulk</IonLabel> {{ actor?.system?.attributes?.bonusEncumbranceBulk }} </IonItem>
          <IonItem> <IonLabel slot="start">Familiar Abilities</IonLabel> {{ actor?.system?.attributes?.familiarAbilities.value }} </IonItem>
          <IonItem> <IonLabel slot="start">Stamina Points</IonLabel> {{ actor?.system?.attributes?.sp }} </IonItem>
          <IonItem> <IonLabel slot="start">Resolve</IonLabel> {{ actor?.system?.attributes?.resolve }} </IonItem>
          <IonItem> <IonLabel slot="start">Polymorphed</IonLabel> {{ actor?.system?.attributes?.polymorphed }} </IonItem>
          <IonItem> <IonLabel slot="start">Battle Form</IonLabel> {{ actor?.system?.attributes?.battleForm }} </IonItem>

          <IonItem> <IonLabel slot="start">Key Ability</IonLabel> {{ actor.system.details.keyability.value }}</IonItem>
          <IonItem> <IonLabel slot="start">Age</IonLabel> {{ actor.system.details.age.value }}</IonItem>
          <IonItem> <IonLabel slot="start">Height</IonLabel> {{ actor.system.details.height.value }}</IonItem>
          <IonItem> <IonLabel slot="start">Weight</IonLabel> {{ actor.system.details.weight.value }}</IonItem>
          <IonItem> <IonLabel slot="start">Gender</IonLabel> {{ actor.system.details.gender.value }}</IonItem>
          <IonItem> <IonLabel slot="start">Ethnicity</IonLabel> {{ actor.system.details.ethnicity.value }}</IonItem>
          <IonItem> <IonLabel slot="start">Nationality</IonLabel> {{ actor.system.details.nationality.value }}</IonItem>
          <IonAccordionGroup>
            <IonAccordion>
              <IonItem slot="header">Biography</IonItem>
              <div slot="content">
                <IonItem v-for="(val, key) in actor.system.details.biography">
                  <IonLabel>{{ capitalize(key) }}</IonLabel>
                  <span class="ion-wrap"> {{ val }} <br /></span>
                </IonItem>
              </div>
            </IonAccordion>
          </IonAccordionGroup>

          <IonItem>
            <IonLabel slot="start">Deities</IonLabel> {{ actor.system.details.deities.primary }} {{ actor.system.details.deities.secondary }}
            {{ actor.system.details.deities.domains }}</IonItem
          >
        </IonList>
      </div>
    </IonContent>
  </IonPage>
</template>
<style>
ul {
  list-style: none;
  margin-left: 0px;
  padding: 0px !important;
  list-style-position: inside;
  text-indent: none;
}
li {
  padding: 0px;
  margin: 0px;
  list-style: none;
}
</style>
