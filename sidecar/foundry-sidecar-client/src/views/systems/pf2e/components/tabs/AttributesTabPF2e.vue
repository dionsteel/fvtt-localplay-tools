<script setup lang="ts">
import { Character5e } from "@/interfaces/dnd5e";
import { useDnd5eGame } from "@/store/dnd5e";
import { IonContent, IonPage, IonIcon, IonItem, IonLabel } from "@ionic/vue";
import { bed, bulb, skull } from "ionicons/icons";
import { inject, capitalize } from "vue";

const game = useDnd5eGame();
const helper = game.helper;
const actor = inject<Character5e>("actor");
function calculateInititative() {
  const abl = actor?.system?.abilities[actor?.system?.attributes?.init?.ability || "dex"];
  const mod = Math.floor(((abl?.value || 10) - 10) / 2);
  let total = mod + Number(actor?.system?.attributes?.init?.bonus || 0);
  let prof = abl?.proficient ? 2 + Math.floor((actor?.flags?.ddbimporter?.dndbeyond?.totalLevels || 1) / 5) : 0;
  return total + prof;
}
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
              {{ actor?.system?.attributes?.hp.max }} <small v-if="actor?.system?.attributes?.hp.tempmax">+ {{ actor?.system?.attributes?.hp.tempmax }}</small>
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
          <IonLabel v-for="(moveSpeed, msKey) in actor?.system?.attributes?.movement">
            <template v-if="!['units', 'hover'].includes(msKey) && moveSpeed">
              <h2>{{ capitalize(msKey) }}</h2>
              <p class="movement-{{ msKey }}">{{ moveSpeed }}{{ actor?.system?.attributes?.movement.units }} {{ actor?.system?.attributes?.movement.hover ? "H" : "" }}</p>
            </template>
          </IonLabel>
        </IonItem>
        <IonItem class="attunement">
          <IonLabel>
            <h2>Attunement</h2>
            <p>Max: {{ actor?.system?.attributes?.attunement?.max }}</p>
          </IonLabel>
        </IonItem>
        <div class="senses">
          <h4>Senses</h4>
          <span v-for="(senseRange, sense) in actor?.system?.attributes?.senses"> </span>
          <span class="sense-darkvision" v-if="(actor?.system?.attributes?.senses?.darkvision || 0) > 0">
            {{ actor?.system?.attributes?.senses?.darkvision }} {{ actor?.system?.attributes?.senses?.units }}</span
          >
          <span class="sense-blindsight" v-if="(actor?.system?.attributes?.senses?.blindsight || 0) > 0">
            {{ actor?.system?.attributes?.senses?.blindsight }} {{ actor?.system?.attributes?.senses?.units }}</span
          >
          <span class="sense-tremorsense" v-if="(actor?.system?.attributes?.senses?.tremorsense || 0) > 0">
            {{ actor?.system?.attributes?.senses?.tremorsense }} {{ actor?.system?.attributes?.senses?.units }}</span
          >
          <span class="sense-truesight" v-if="(actor?.system?.attributes?.senses?.truesight || 0) > 0">
            {{ actor?.system?.attributes?.senses?.truesight }} {{ actor?.system?.attributes?.senses?.units }}
          </span>
          <span class="sense-special" v-if="actor?.system?.attributes?.senses?.special">{{ actor?.system?.attributes?.senses?.special }}</span>
        </div>
        <span class="spellcasting-stat">{{ actor?.system?.attributes?.spellcasting }}</span>
        <span class="death-saves">
          <IonIcon v-for="n in actor?.system?.attributes?.death?.success" :icon="skull" :color="'green'"></IonIcon>
          <IonIcon v-for="n in actor?.system?.attributes?.death?.failure" :icon="skull" :color="'red'"></IonIcon>
        </span>
        <span v-for="n in actor?.system?.attributes?.exhaustion"><IonIcon :icon="bed" color="orange"></IonIcon> </span>
        <IonIcon :icon="bulb" :color="actor?.system?.attributes?.inspiration ? 'blue' : '#cccccc'"></IonIcon>
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
