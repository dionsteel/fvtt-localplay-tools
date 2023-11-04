<script setup lang='ts'>
import { IonAccordion, IonAccordionGroup, IonButton, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonPopover } from '@ionic/vue';
import { TreeEntry } from './interfaces';
import { Component } from 'vue';
import JournalEntry from './JournalEntry.vue';
import { folderOpenSharp, fileTrayFullSharp } from 'ionicons/icons';

const props = defineProps<{ entry: TreeEntry, level?: number }>();
const level = props.level || 0;
// const opts = defineOptions({ name: 'JournalTree', });
// const JournalTree: Component<{entry:TreeEntry}>;// = this;

</script>

<template>
  <!-- <IonListHeader v-if="props.entry.folder"></IonListHeader> -->
  <template v-if="props.entry.folder">
    <IonAccordion>
      <IonItem slot="header">
        <IonIcon :icon="folderOpenSharp" slot="start"></IonIcon>
        {{ props.entry.folder.name }}
      </IonItem>
      <div slot="content">
        <IonList>
          <IonAccordionGroup :multiple="true" :expand="'compact'">
            <JournalTree v-for="child in props.entry.children" :entry="child" :level="level + 1"></JournalTree>
            <JournalEntry v-for="jrnEntry in  props.entry.entries " :entry="jrnEntry"> </JournalEntry>
          </IonAccordionGroup>

        </IonList>
      </div>
    </IonAccordion>
  </template>

  <template v-else>
    <IonList>
      <!-- <IonListHeader>Root</IonListHeader> -->
      <IonAccordionGroup :multiple="true" :expand="level > 0 ? 'inset' : 'compact'">
        <JournalTree v-for="child in props.entry.children" :entry="child" :level="level + 1"></JournalTree>
        <JournalEntry v-for="jrnEntry in  props.entry.entries " :entry="jrnEntry"> </JournalEntry>
      </IonAccordionGroup>
    </IonList>
  </template>
</template>
