<script setup lang="ts">
import { Actor } from "@/interfaces/core";
import { useWorldStore, fetchJson } from "@/store/world";
import { from, useObservable, useSubject } from "@vueuse/rxjs";
import { Observable, Subject } from "rxjs";
import { concatMap, switchMap, filter, distinctUntilKeyChanged } from "rxjs/operators";
import { WebSocketSubject, webSocket } from "rxjs/webSocket";
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { IonPage, IonHeader, IonToolbar, IonMenu, IonMenuButton, IonButtons, IonTitle, IonContent, IonCard, IonCardContent, IonPopover, IonCardHeader, IonIcon } from "@ionic/vue";
import { skull, bed, bulb } from "ionicons/icons";
import { applyDeep } from "@/lib/utils";
import { Actor5e, DnD5eTypes, Actor5eItemTypes } from "@/interfaces/dnd5e/index";
import DynamicComponent from "@/lib/DynamicComponent.vue";

const route$ = useRoute();
const store = useWorldStore();
interface ActorSocketEvent {
  event: "actorUpdate" | "combatUpdate" | "tokenUpdate";
  data: any;
  target: any;
}
interface ActorUpdateEvent extends ActorSocketEvent {
  event: "actorUpdate";
  data: Partial<Actor5e>;
  target: Actor;
}
const props = defineProps<{ id: string }>();
// const actorid = ref(route$.params.id);
const actor$ = new Subject<Actor5e>();
function refreshActor(id: string) {
  fetchJson<Actor5e>(`/actor/${id}`).subscribe((v) => actor$.next(v));
}

function getWebsocketUrl(id: string) {
  let proto = window.location.protocol == "https" ? "wss" : "ws";
  let host = window.location.hostname;
  let port = window.location.port != "80" ? ":" + window.location.port : "";
  return `${proto}://${host}${port}/actor/${id}`;
}

watch(
  () => route$.params,
  ({ id }) => refreshActor(`${id}`),
  { immediate: true, flush: "post" }
);
const actor = useObservable(actor$);
refreshActor(props.id);
const actorUpdates = actor$
  .pipe(
    filter((a) => !!(a && a._id)),
    distinctUntilKeyChanged("_id"),
    switchMap((_a) => webSocket<ActorSocketEvent>({ url: getWebsocketUrl(_a._id) }))
  )
  .subscribe({
    next: (e) => {
      switch (e.event) {
        case "actorUpdate":
          console.log("Incoming Actor Update", e.event, e.data, e.target);
          if (typeof actor.value !== "undefined") {
            applyDeep(actor.value, e.target);
          }
          break;
        default:
          console.log("Incoming update", e.event, e.data, e.target);
      }
    },
  });
const itemTypes = computed(
  () =>
    actor.value?.items.reduce((a, c) => {
      if (!a[c.type]) {
        a[c.type] = [];
      }
      a[c.type].push(c);
      return a;
    }, {} as Actor5eItemTypes)
);
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
          <span v-for="classItem in itemTypes?.class"> {{ classItem.name }}</span>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header> {{ actor?.name }} {{ actor?.type }} </ion-card-header>
        <ion-card-content>
          <div class="actor-system-info">
            <div class="abilities">
              <span class="ability" v-for="(data, ak) in actor?.system.abilities">
                {{ ak.toUpperCase() }} {{ data.value }} {{ data.proficient }} {{ data.max }} {{ data.bonuses.check }}{{ data.bonuses.save }}
              </span>
            </div>
            <div class="attributes">
              <!-- "ac": { "flat": null, "calc": "default", "formula": "" },  -->
              <span class="ac">{{ actor?.system.attributes?.ac.calc || actor?.system.attributes?.ac.flat || actor?.system.attributes?.ac.formula }}</span>
              <!-- "hp": { "value": 31, "max": 31, "temp": 0, "tempmax": 0, "bonuses": { "level": "", "overall": "" }  },  -->
              <span class="hp">
                {{ actor?.system.attributes?.hp.value }} + {{ actor?.system.attributes?.hp.temp }} / {{ actor?.system.attributes?.hp.max }} + {{ actor?.system.attributes?.hp.tempmax }}
              </span>
              <span class="init">{{ actor?.system.abilities[actor.system.attributes.init.ability] }}{{ actor?.system.attributes?.init.bonus }}</span>
              <span class="movement" v-for="(moveSpeed, msKey) in actor?.system.attributes?.movement"> <span class="movement-{{ mk }}"></span></span>
              <span class="attunement">Max: {{ actor?.system.attributes?.attunement?.max }}</span>
              <span class="senses"
                ><span v-for="(senseRange, sense) in actor?.system.attributes?.senses"> </span>
                <span class="sense-darkvision" v-if="(actor?.system.attributes?.senses?.darkvision || 0) > 0">
                  {{ actor?.system.attributes?.senses?.darkvision }} {{ actor?.system.attributes?.senses?.units }}</span
                >
                <span class="sense-blindsight" v-if="(actor?.system.attributes?.senses?.blindsight || 0) > 0">
                  {{ actor?.system.attributes?.senses?.blindsight }} {{ actor?.system.attributes?.senses?.units }}</span
                >
                <span class="sense-tremorsense" v-if="(actor?.system.attributes?.senses?.tremorsense || 0) > 0">
                  {{ actor?.system.attributes?.senses?.tremorsense }} {{ actor?.system.attributes?.senses?.units }}</span
                >
                <span class="sense-truesight" v-if="(actor?.system.attributes?.senses?.truesight || 0) > 0">
                  {{ actor?.system.attributes?.senses?.truesight }} {{ actor?.system.attributes?.senses?.units }}
                </span>
                <span class="sense-special" v-if="actor?.system.attributes?.senses?.special">{{ actor?.system.attributes?.senses?.special }}</span>
              </span>
              <span class="spellcasting-stat">{{ actor?.system.attributes?.spellcasting }}</span>
              <span class="death-saves">
                <IonIcon v-for="n in actor?.system.attributes?.death?.success" :icon="skull" :color="'green'"></IonIcon>
                <IonIcon v-for="n in actor?.system.attributes?.death?.failure" :icon="skull" :color="'red'"></IonIcon>
              </span>
              <span v-for="n in actor?.system.attributes?.exhaustion"><IonIcon :icon="bed" color="orange"></IonIcon> </span>
              <IonIcon :icon="bulb" :color="actor?.system.attributes?.inspiration ? 'blue' : '#cccccc'"></IonIcon>
              <!-- "attributes": { 
                "init": { "ability": "dex", "bonus": "" }, 
                "movement": { "burrow": 0, "climb": 0, "fly": 0, "swim": 0, "walk": 30, "units": "ft", "hover": false },
                "attunement": { "max": 3 }, "senses": { "darkvision": 60, "blindsight": 0, "tremorsense": 0, "truesight": 0, "units": "ft", "special": "" }, 
                "spellcasting": "cha",
                "death": { "success": 0, "failure": 0 }, "exhaustion": 0, "inspiration": true 
              },  -->
            </div>
            <!-- "details": { 
              "biography": { "value": "", "public": "" }, 
              "alignment": "Lawful Good", 
              "race": "Half-Orc", 
              "background": "", 
              "originalClass": "XewbmFE8lvmlw8MO", 
              "xp": { "value": 12233 }, 
              "appearance": "", 
              "trait": "", 
              "ideal": "", 
              "bond": "", 
              "flaw": ""
            },  -->
            <!-- "traits": { 
            "size": "med", 
            "di": { "value": [], "bypasses": [], "custom": "" }, 
            "dr": { "value": [], "bypasses": [], "custom": ""  }, 
            "dv": { "value": [], "bypasses": [], "custom": "" }, 
            "ci": { "value": [ "diseased" ], "custom": "" }, 
            "languages": { "value": [ "common", "orc" ], "custom": "" }, 
            "weaponProf": { "value": [ "sim", "mar" ], "custom": "" }, 
            "armorProf": { "value": [ "lgt", "med", "hvy", "shl" ], "custom": "" } 
          },  -->
            <!-- "currency": { "pp": 0, "gp": 30, "ep": 0, "sp": 0, "cp": 0 }, -->
            <!-- "skills": { 
            "acr": { "value": 0, "ability": "dex", "bonuses": { "check": "", "passive": "" } }, 
            "ani": { "value": 1, "ability": "wis", "bonuses": { "check": "", "passive": "" } }, 
            "arc": { "value": 0, "ability": "int", "bonuses": { "check": "", "passive": "" } }, 
            "ath": { "value": 1, "ability": "str", "bonuses": { "check": "", "passive": "" } }, 
            "dec": { "value": 0, "ability": "cha", "bonuses": { "check": "", "passive": "" } }, 
            "his": { "value": 0, "ability": "int", "bonuses": { "check": "", "passive": "" } }, 
            "ins": { "value": 0, "ability": "wis", "bonuses": { "check": "", "passive": "" } }, 
            "itm": { "value": 1, "ability": "cha", "bonuses": { "check": "", "passive": "" } }, 
            "inv": { "value": 0, "ability": "int", "bonuses": { "check": "", "passive": "" } }, 
            "med": { "value": 0, "ability": "wis", "bonuses": { "check": "", "passive": "" } }, 
            "nat": { "value": 0, "ability": "int", "bonuses": { "check": "", "passive": "" } }, 
            "prc": { "value": 0, "ability": "wis", "bonuses": { "check": "", "passive": "" } }, 
            "prf": { "value": 0, "ability": "cha", "bonuses": { "check": "", "passive": "" } }, 
            "per": { "value": 1, "ability": "cha", "bonuses": { "check": "", "passive": "" } }, 
            "rel": { "value": 0, "ability": "int", "bonuses": { "check": "", "passive": "" } }, 
            "slt": { "value": 0, "ability": "dex", "bonuses": { "check": "", "passive": "" } }, 
            "ste": { "value": 0, "ability": "dex", "bonuses": { "check": "", "passive": "" } }, 
            "sur": { "value": 1, "ability": "wis", "bonuses": { "check": "", "passive": "" } } 
          },  -->
            <!-- "tools": { 
            "smith": { "value": 1, "ability": "int", "bonuses": { "check": "" } } 
          },  -->
            <!-- "spells": { 
            "spell1": { "value": 4, "override": null },
            "spell2": { "value": 2, "override": null }, 
            "spell3": { "value": 0, "override": null }, 
            "spell4": { "value": 0, "override": null }, 
            "spell5": { "value": 0, "override": null }, 
            "spell7": { "value": 0, "override": null }, 
            "spell8": { "value": 0, "override": null }, 
            "spell9": { "value": 0, "override": null }, 
            "pact": { "value": 0, "override": null }, 
            "spell0": { "value": 0, "override": null } 
          },  -->
            <!-- "bonuses": { 
            "mwak": { "attack": "", "damage": "" }, 
            "rwak": { "attack": "", "damage": "" }, 
            "msak": { "attack": "", "damage": "" }, 
            "rsak": { "attack": "", "damage": "" }, 
            "abilities": { "check": "", "save": "", "skill": "" },
            "spell": { "dc": "" } 
          }, 
          "resources": { 
            "primary": { "value": 25, "max": 25, "sr": false, "lr": true, "label": "Lay on Hands Pool" }, 
            "secondary": { "value": 4, "max": 4, "sr": false, "lr": true, "label": "Divine Sense" }, 
            "tertiary": { "value": 1, "max": 1, "sr": false, "lr": true, "label": "Relentless Endurance" } 
          } 
        -->
          </div>
          <div v-for="item of actor?.items" :id="'item_' + item._id">
            {{ item.type }} | {{ item.name }}<br />
            <IonPopover :trigger="'item_' + item._id" reference="trigger" size="auto" class="item-desc">
              <IonContent class="item-desc">
                <DynamicComponent :html="item.system.description?.value || ''"></DynamicComponent>
              </IonContent>
            </IonPopover>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<style>
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
  --padding-start: 15px;
  --padding-end: 15px;
  --padding-top: 5px;
  --padding-bottom: 5px;
}
</style>
