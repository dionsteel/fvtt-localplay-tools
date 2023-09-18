<script setup lang="ts">
import { Item } from "@/interfaces/core/items/item";
import { CharacterPF2e } from "@/interfaces/pf2e";
import { SpellPF2e } from "@/interfaces/pf2e/item";
import DynamicComponent from "@/lib/DynamicComponent.vue";
import { usePF2eGame } from "@/store/pf2e";
import { IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonContent, IonItem, IonPage, IonPopover } from "@ionic/vue";
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
        <IonAccordion :trigger="'spell_' + spell._id" reference="trigger" size="auto" class="spell-desc" v-for="spell of spells" :id="'spell_' + spell._id">
          <IonItem slot="header"> {{ spell.system.level }} | {{ spell.name }} </IonItem>
          <IonCard slot="content">
            <IonCardContent>
              <DynamicComponent :html="spell.system.description?.value || ''"></DynamicComponent>

              <!-- {{ spell.system?.description?.value }} -->
            </IonCardContent>
          </IonCard>
          <!-- <IonContent class="spell-desc">
          </IonContent> -->
        </IonAccordion>
      </IonAccordionGroup>
    </IonContent>
  </IonPage>
</template>
