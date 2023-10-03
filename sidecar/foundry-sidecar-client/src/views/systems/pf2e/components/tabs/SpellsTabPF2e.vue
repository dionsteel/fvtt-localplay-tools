<script setup lang="ts">
import { Item } from "@/interfaces/core/items/item";
import { CharacterPF2e } from "@/interfaces/pf2e";
import { SpellPF2e } from "@/interfaces/pf2e/item";
import DynamicComponent from "@/lib/DynamicComponent.vue";
import { usePF2eGame } from "@/store/pf2e";
import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonItem, IonPage, IonPopover } from "@ionic/vue";
import { inject } from "vue";

const game = usePF2eGame();
const helper = game.helper;
const actor = inject<CharacterPF2e>("actor");
const spells: SpellPF2e[] = actor?.items?.filter((i) => i.type == "spell") as any[];
</script>

<template>
  <IonPage>
    <IonContent>
      <IonAccordionGroup>
        <IonAccordion :trigger="'spell_' + spell._id" reference="trigger" size="auto" class="spell-desc"
          v-for="spell of spells" :id="'spell_' + spell._id">
          <IonItem slot="header"> {{ spell.system.level.value }} | {{ spell.name }} </IonItem>
          <div class="ion-padding" slot="content">
            <DynamicComponent :html="spell.system.description?.value || ''"></DynamicComponent>
            <!-- {{ spell.system.heightening }} -->
            <!-- {{ spell.system?.description?.value }} -->
            <IonButton v-if="spell.system.heightening?.type == 'interval'"
              v-for="num in ((actor?.system.details.level.value || 1) / spell.system.heightening.interval)">
              Rank {{ spell.system.level.value * num }}
            </IonButton>
            <IonButton v-else>
              Rank {{ spell.system.level.value }}
            </IonButton>
            <template v-if="spell.system.heightening?.type == 'fixed'">
              <template v-for="(details, hlev) in  spell.system.heightening.levels">
                <IonButton v-if="hlev < Math.max(1, (actor?.system.details.level.value || 1) / 2)">
                  Rank {{ hlev }}
                </IonButton>
              </template>
            </template>
          </div>
          <!-- <IonContent class="spell-desc">
          </IonContent> -->
        </IonAccordion>
      </IonAccordionGroup>
    </IonContent>
  </IonPage>
</template>
