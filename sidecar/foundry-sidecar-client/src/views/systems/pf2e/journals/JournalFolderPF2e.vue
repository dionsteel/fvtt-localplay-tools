<script setup lang="ts">
import { ref, computed } from 'vue';
import { IonContent, IonItem, IonList, IonPage, IonHeader } from '@ionic/vue';
import DynamicComponent from '../../../../lib/DynamicComponent.vue';
import { usePF2eGame } from '@/store/pf2e';
const game = usePF2eGame();
interface JournalFolder { name: string; };
interface JournalEntry { name: string; id: string; title: string; contents: string; };
interface TreeEntry {
    entries: JournalEntry[];
    children: TreeEntry[];
    folder?: JournalFolder;
}
const journals = await game.config.fetchJson<TreeEntry>('/journals');
</script>

<template>
    <IonPage>
        <IonContent>
            <IonList>
                <IonItem v-for="branch in journals.children">
                    {{ branch.folder?.name }}
                    <IonList>
                        <IonItem v-for="subbranch in branch.children">{{ subbranch.folder?.name }}
                            <IonList>
                                <IonItem v-for="leaf in subbranch.entries">{{ leaf.name }} / {{ leaf.title }}</IonItem>
                            </IonList>
                        </IonItem>
                        <IonItem v-for="leaf in branch.entries">{{ leaf.name }} / {{ leaf.title }}</IonItem>
                    </IonList>
                </IonItem>
            </IonList>
        </IonContent>
    </IonPage>
</template>