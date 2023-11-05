<script setup lang="ts">
import { config } from "@/interfaces/pf2e/lang/all";
import { useConfigStore, ActorSelection } from "@/store/config";
import { useWorldStore } from "@/store/world";
import { IonContent, IonItem, IonLabel, IonList, IonModal, IonPage, IonHeader, IonToolbar, IonButton, IonButtons, IonTitle, IonInput, IonIcon } from "@ionic/vue";
import { trashSharp } from "ionicons/icons";
import { ref } from "vue";

const worldStore = useWorldStore();
const configStore = useConfigStore();

const settingsModal = ref();
const cancel = () => settingsModal.value.$el.dismiss(null, "cancel");

const confirm = () => {
  // const name = input.value.$el.value;
  settingsModal.value.$el.dismiss("confirm");
};
function removeActor(actor: ActorSelection) {
  configStore.SelectedActors = configStore.SelectedActors.filter((a) => a.actorId != actor.actorId);
}
</script>

<template>
  <IonPage>
    <IonContent>
      <IonList>
        <IonItem :button="true" :lines="'full'" :router-link="worldStore.activeGame?.world.system">
          <IonLabel>{{ worldStore.activeGame?.world.title }}</IonLabel>
        </IonItem>
        <IonItem :button="true" @click="configStore.$reset()"><IonLabel>Reset Saved Data</IonLabel></IonItem>
        <IonItem :button="true" id="openSettingsBtn">Settings</IonItem>
        <IonModal ref="settingsModal" trigger="openSettingsBtn">
          <ion-header>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-button @click="cancel()">Cancel</ion-button>
              </ion-buttons>
              <ion-title>Welcome</ion-title>
              <ion-buttons slot="end">
                <ion-button :strong="true" @click="confirm()">Confirm</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <ion-item>
              <ion-input label="SidecarServer" label-placement="stacked" v-model="configStore.SidecarServer" type="text" placeholder="Server hostname"></ion-input>
            </ion-item>
            <ion-item>
              <ion-input label="SidecarUrl" label-placement="stacked" v-model="configStore.SidecarUrl" type="text" placeholder="Server url"></ion-input>
            </ion-item>
            <ion-item v-for="(actor, idx) in configStore.SelectedActors">
              <IonLabel> World: {{ actor.worldId }}</IonLabel>
              <IonLabel> Actor: {{ actor.listing?.name || actor.actorId }}</IonLabel>
              <!-- <ion-input label="fname" label-placement="stacked" v-model="field" type="text" placeholder="Your name"></ion-input> -->
              <IonButton slot="end" @click="removeActor(actor)"> <IonIcon slot="end" :icon="trashSharp"></IonIcon> Remove </IonButton>
            </ion-item>
          </ion-content>
        </IonModal>
      </IonList>
    </IonContent>
  </IonPage>
</template>
