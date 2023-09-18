<script setup lang="ts">
import { SocketEventMap } from "@/interfaces/core/helper";
import { ActorHelperPF2e, PF2eTypes } from "@/interfaces/pf2e";
import { StrikeLookupData } from "@/interfaces/pf2e/chat-message";
import DynamicComponent from "@/lib/DynamicComponent.vue";
import { usePF2eGame } from "@/store/pf2e";
import { useWorldStore } from "@/store/world";
import { IonHeader, IonButtons, IonMenuButton, IonItem, IonList, IonListHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonContent } from "@ionic/vue";
import { useObservable } from "@vueuse/rxjs";
import { ref, computed, watch } from "vue";

const store = useWorldStore();
const game = usePF2eGame();

let chatMessages = ref([] as Array<SocketEventMap<PF2eTypes>["renderChatMessage"] & { eventSource: ActorHelperPF2e }>);

game.helper.chat$.subscribe((m) => {
  console.log("New Chat message", m);
  chatMessages.value.push(m as any);
});
const transformHtml = (html: string) => {
  return html.replace(/(src|href)=\"([^\"]+)\"/gi, (all, attr, uri) => `${attr}="${store.config.getAPIUrl(uri)}"`);
};
function handleChatCardClicks(event: MouseEvent, msg: SocketEventMap<PF2eTypes>["renderChatMessage"] & { eventSource: ActorHelperPF2e }) {
  const data = { ...((event.target as HTMLButtonElement)?.dataset || {}) };
  const helper = msg.eventSource;

  console.log("clicked in chat card", data, msg);
  switch (data.action || "") {
    case "strike-damage":
    case "strike-critical":
      const strike = msg?.message?.flags?.pf2e?.strike as StrikeLookupData;
      console.log(strike);
      if (strike) {
        helper.rollStrikeDamage(strike.index, data.action?.endsWith("critical"));
        // data.
      }
  }
}
</script>

<template>
  <IonPage>
    <!-- <base href="http://192.168.8.115/" /> -->
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Chat Messages</ion-title>
      </ion-toolbar>
    </ion-header>
    <IonContent>
      <IonList>
        <!-- <IonListHeader><IonTitle></IonTitle></IonListHeader> -->
        <IonItem v-for="(msg, idx) in chatMessages" :id="'chatmsg-' + idx">
          <div class="ion-padding chat-message" style="flex-direction: column">
            <DynamicComponent @click.capture="handleChatCardClicks($event, msg as any)" :html="transformHtml(msg?.html || '')"></DynamicComponent>
            <!-- {{ msg. }} -->
          </div>
        </IonItem>
      </IonList>
    </IonContent>
  </IonPage>
</template>

<style scoped>
.chat-message {
  display: flex;
}
</style>
