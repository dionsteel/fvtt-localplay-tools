<script setup lang="ts">
import { IonAccordion, IonAccordionGroup, IonChip, IonIcon, IonItem } from '@ionic/vue';
import { JournalEntry } from './interfaces';
import DynamicComponent from '@/lib/DynamicComponent.vue';
import { documentSharp, journalSharp } from 'ionicons/icons';
const { entry } = defineProps<{ entry: JournalEntry }>();


</script>

<template>
    <IonAccordion>
        <IonItem slot="header">
            <IonIcon :icon="journalSharp" slot="start"></IonIcon>
            {{ entry.name }}
        </IonItem>
        <IonAccordionGroup :multiple="false" expand="inset" slot="content">
            <IonAccordion v-for="page in entry.pages">
                <IonItem slot="header">
                    <IonIcon :icon="documentSharp" slot="start"></IonIcon>
                    {{ page.name }} <IonChip slot="end">{{ page.type }}</IonChip>
                </IonItem>
                <div slot="content" class="ion-padding">
                    <DynamicComponent v-if="page.text.format == 1" :html="page.text.content">
                    </DynamicComponent>

                    <template v-else>
                        {{ page }}
                    </template>
                </div>
            </IonAccordion>
        </IonAccordionGroup>
    </IonAccordion>
</template>