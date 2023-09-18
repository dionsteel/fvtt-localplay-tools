<script setup lang="ts">
import { CharacterPF2e } from "@/interfaces/pf2e";
import { PF2ECONFIG } from "@/interfaces/pf2e/config";
import { usePF2eGame } from "@/store/pf2e";
import { IonContent, IonPage, IonIcon, IonItem, IonLabel } from "@ionic/vue";
import { bedSharp, bulbSharp, skullSharp, addSharp,medalSharp, medal } from "ionicons/icons";
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
        <!-- "ac": { "flat": null, "calc": "default", "formula": "" },  -->
        <IonItem class="ac">
          <IonLabel>
            <h2>HP</h2>
            <p>
              {{ actor?.system?.attributes?.hp.value }} <small v-if="actor?.system?.attributes?.hp.temp">+ {{ actor?.system?.attributes?.hp.temp }}</small> /
              {{ actor?.system?.attributes?.hp.max }}
            </p>
          </IonLabel>
          <IonLabel>
            <h2>AC</h2>
            <p>
              {{ actor?.system.attributes.ac.value }}
              <!-- {{ actor?.flags?.ddbimporter?.overrideAC?.calc == "flat" ? actor?.flags.ddbimporter?.overrideAC.flat : actor?.flags.ddbimporter?.overrideAC?.calc }} -->
            </p>
          </IonLabel>

          <IonLabel>
            <h2>Initiative</h2>
            <p>{{ calculateInititative() }}</p>
          </IonLabel>
        </IonItem>
        <!-- "hp": { "value": 31, "max": 31, "temp": 0, "tempmax": 0, "bonuses": { "level": "", "overall": "" }  },  -->
        <IonItem class="movement">
          <IonLabel><h2>Movement Speed</h2></IonLabel>
          <IonLabel v-for="moveSpeed in actor?.system?.attributes?.speed.otherSpeeds">
            <template v-if="!['units', 'hover'].includes(moveSpeed.type) && moveSpeed">
              <h2>{{ moveSpeed.label }}</h2>
              <p class="movement-{{ msKey }}">{{ moveSpeed.value }}</p>
            </template>
          </IonLabel>
        </IonItem>
        <IonItem class="senses">
          <IonLabel><h4>Senses</h4></IonLabel>
          <IonLabel v-for="sense in actor?.system?.traits.senses">
            {{ sense.label }} <small>{{ sense.value }} {{ sense.acuity }}</small></IonLabel
          >
          <!-- <span class="sense-darkvision" v-if="(actor?.system?.attributes?.senses?.darkvision || 0) > 0">
            {{ actor?.system?.attributes?.senses?.darkvision }} {{ actor?.system?.attributes?.senses?.units }}</span
          >{{ sense }}
          <span class="sense-blindsight" v-if="(actor?.system?.attributes?.senses?.blindsight || 0) > 0">
            {{ actor?.system?.attributes?.senses?.blindsight }} {{ actor?.system?.attributes?.senses?.units }}</span
          >
          <span class="sense-tremorsense" v-if="(actor?.system?.attributes?.senses?.tremorsense || 0) > 0">
            {{ actor?.system?.attributes?.senses?.tremorsense }} {{ actor?.system?.attributes?.senses?.units }}</span
          >
          <span class="sense-truesight" v-if="(actor?.system?.attributes?.senses?.truesight || 0) > 0">
            {{ actor?.system?.attributes?.senses?.truesight }} {{ actor?.system?.attributes?.senses?.units }}
          </span>
          <span class="sense-special" v-if="actor?.system?.attributes?.senses?.special">{{ actor?.system?.attributes?.senses?.special }}</span> -->
        </IonItem>
        <IonItem>
          <IonLabel><h3>Spell DC</h3></IonLabel>
          <IonLabel class="spellcasting-stat">{{ actor?.system?.attributes?.spellDC?.value }}</IonLabel>
        </IonItem>
        <IonItem class="death-saves">
          <!-- <IonIcon v-for="n in actor?.system?.attributes?.dying.value?.success" :icon="skull" :color="'green'"></IonIcon> -->
          <IonIcon v-for="n in actor?.system?.attributes?.dying?.value" :icon="skullSharp" color="danger"></IonIcon>
          <IonIcon v-for="n in actor?.system?.attributes?.wounded?.value" :icon="addSharp" color="warning"></IonIcon>
          <IonIcon v-for="n in actor?.system?.resources?.heroPoints?.value" :icon="medalSharp" color="primary"></IonIcon>
        </IonItem>
        <!-- "attributes": { 
                "init": { "ability": "dex", "bonus": "" }, 
                "movement": { "burrow": 0, "climb": 0, "fly": 0, "swim": 0, "walk": 30, "units": "ft", "hover": false },
                "attunement": { "max": 3 }, "senses": { "darkvision": 60, "blindsight": 0, "tremorsense": 0, "truesight": 0, "units": "ft", "special": "" }, 
                "spellcasting": "cha",
                "death": { "success": 0, "failure": 0 }, "exhaustion": 0, "inspiration": true 
              },  -->
      </div>
    </IonContent>
  </IonPage>
</template>
