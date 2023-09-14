<script setup lang="ts">
import { useWorldStore } from "@/store/world";
import { IonContent, IonItem, IonLabel, IonList, IonPage } from "@ionic/vue";

const worldStore = useWorldStore();
</script>

<template>
  <IonPage>
    <IonContent>
      <IonList>
        <IonItem :lines="'full'" :router-link="worldStore.activeGame?.world.system">
          <IonLabel >{{ worldStore.activeGame?.world.title }}</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  </IonPage>
</template>
