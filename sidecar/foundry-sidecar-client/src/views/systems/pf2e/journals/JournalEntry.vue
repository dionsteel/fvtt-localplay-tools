<script setup lang="ts">
import { IonAccordion, IonAccordionGroup, IonChip, IonIcon, IonItem, AccordionGroupCustomEvent } from "@ionic/vue";
import { JournalEntry } from "./interfaces";
import DynamicComponent from "@/lib/DynamicComponent.vue";
import { documentSharp, journalSharp } from "ionicons/icons";
const { entry } = defineProps<{ entry: JournalEntry }>();
function scrollAccordionHeader(e: AccordionGroupCustomEvent) {
  e.target.childNodes.forEach((cn, ck, pn) => {
    let ca = cn as HTMLIonAccordionElement;
    if (ca.value == e.detail.value) {
      setTimeout(() => {
        (ca.childNodes[0] as HTMLIonItemElement)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 280);
      // (cn as HTMLIonAccordionElement).scrollIntoView();
    }
  }); //  scrollIntoView()
}
</script>
<template>
  <IonAccordion>
    <IonItem slot="header">
      <IonIcon :icon="journalSharp" slot="start"></IonIcon>
      {{ entry.name }}
    </IonItem>
    <IonAccordionGroup :multiple="false" expand="compact" slot="content" @ion-change="scrollAccordionHeader">
      <IonAccordion v-for="page in entry.pages" :value="page._id" :id="`JournalPage.${page._id}`" :name="`JournalPage.${page._id}`">
        <IonItem slot="header">
          <IonIcon :icon="documentSharp" slot="start"></IonIcon>
          {{ page.name }} <IonChip slot="end">{{ page.type }}</IonChip>
        </IonItem>
        <div slot="content" class="ion-padding">
          <DynamicComponent v-if="page.text.format == 1" :html="page.text.content"> </DynamicComponent>

          <template v-else>
            {{ page }}
          </template>
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  </IonAccordion>
</template>
