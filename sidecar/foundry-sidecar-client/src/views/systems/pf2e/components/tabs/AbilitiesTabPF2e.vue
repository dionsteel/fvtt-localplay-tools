<script setup lang="ts">
import { CharacterPF2e } from "@/interfaces/pf2e/index";
import { usePF2eGame } from "@/store/pf2e";
import { IonContent, IonPage, IonIcon } from "@ionic/vue";
import { bed, bulb, skull } from "ionicons/icons";
import { inject } from "vue";

const game = usePF2eGame();
const helper = game.helper;
const actor = inject<CharacterPF2e>("actor");
</script>

<template>
  <IonPage>
    <IonContent>
      <div class="actor-system-info">
        <div class="abilities">
          <div class="ability" v-for="(data, ak) in actor?.system?.abilities">
            <div class="title">
              {{ ak.toUpperCase() }} 
              <span class="abilityscore">
                {{ data.mod }}
                <!-- {{ data.value - 10 >= 0 ? "+" : "" }}{{ Math.floor((data.value - 10) / 2) }} -->
              </span>
            </div>
            <div class="value">
              <small class="fullscore">
                {{ data.value }} {{data.base}} {{ data.mod }}
              </small>
            </div>
            <!-- {{ data.proficient }}
            {{ data.max }} -->
          </div>
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
    </IonContent>
  </IonPage>
</template>

<style scoped>
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
