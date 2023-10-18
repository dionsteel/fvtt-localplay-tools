<script setup lang="ts">
import { useWorldStore } from "@/store/world";
import { useRouter, useRoute } from "vue-router";
import { usePF2eGame } from "@/store/pf2e";
import {
  IonIcon,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  alertController,
  IonAlert,
  IonButton,
  AlertInput,
  IonSegment,
  IonSegmentButton, menuController,
  IonHeader,
} from "@ionic/vue";
import { ComponentPublicInstance, Suspense, provide, ref, watch } from "vue";
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  bookmarkSharp,
  heartOutline,
  heartSharp,
  personOutline,
  personSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  chatboxOutline,
  chatboxSharp,
  gameControllerOutline,
  gameControllerSharp,
  fitnessOutline,
  documentOutline,
  documentSharp,
  fitnessSharp,
  trashSharp,
  warningOutline,
  warningSharp,
  diceOutline,
  diceSharp,
  globeOutline,
  globeSharp,
} from "ionicons/icons";
import { useConfigStore } from "@/store/config";
import { Observable, Subject, firstValueFrom } from "rxjs";
import { filter, map, tap, reduce, scan, share } from "rxjs/operators";
import { SocketEventMap } from "@/interfaces/core/helper";
import { PF2eTypes, ActorHelperPF2e } from "@/interfaces/pf2e";
import { StrikeLookupData } from "@/interfaces/pf2e/chat-message";
import DynamicComponent from "@/lib/DynamicComponent.vue";

const store = useWorldStore();
const config = useConfigStore();
await store.started;
const router = useRouter();
const route = useRoute();
const game = usePF2eGame();
const helper = game.helper;

const selectedIndex = ref(0);
const labels = store.currentWorldActors;
const appPages = [
  {
    title: "Game World",
    url: "/pf2e/world",
    iosIcon: globeOutline,
    mdIcon: globeSharp,
  },
  {
    title: "Combat Mode",
    url: "/pf2e/combat",
    iosIcon: gameControllerOutline,
    mdIcon: gameControllerSharp,
  },
  {
    title: "Chat",
    url: "/pf2e/chat",
    iosIcon: documentOutline,
    mdIcon: documentSharp,
  },
  {
    title: "Dice Rolls",
    url: "/pf2e/dice",
    iosIcon: diceOutline,
    mdIcon: diceSharp,
  },
  {
    title: "Select Characters",
    url: "/pf2e/actors",
    iosIcon: personOutline,
    mdIcon: personSharp,
  },
];
const background = store.activeGame?.world.background ? `url(/${game.config.getAPIUrl(store.activeGame?.world.background)})` : "";

function updateSelectedIndex() {
  const path = window.location.pathname; //.split("dnd5e/")[1];
  if (path !== undefined) {
    selectedIndex.value = appPages.findIndex((page) => path.startsWith(page.url)); //page.url.split("dnd5e/")[1].toLowerCase() === path.toLowerCase());
  }
}
router.afterEach((from, to, err) => {
  updateSelectedIndex();
});
watch(
  () => window.location.pathname,
  () => updateSelectedIndex()
);
updateSelectedIndex();

game.helper.allEvents
  .pipe(
    // tap((e) => console.log("helper allevents", e)),
    filter((e) => e.event == "rollRequest")
  )
  .subscribe((e) => {
    const alert = alertController.create({
      header: "Roll Request",
      message: "Enter Manual Rolls",
      buttons: ["ROLL"],
      mode: "md",
      animated: true,
      keyboardClose: true,
      inputs: e.data.terms.map((t: any) => {
        let x: AlertInput = { label: t.faces, placeholder: t.faces, id: `${t.id}-total`, name: `${t.id}-total`, min: 1 };
        return x;
      }),
    });
    console.log("INCOMING ROLL", e);
    alert
      .then(async (r) => {
        await r.present();
        let { data, role } = await r.onDidDismiss();
        let { values } = data;
        e.eventSource?.answerRoll((e as any).id, { formData: values });
        return values;
      })
      .then((r) => console.log("alert result", r));
  });

let showChat = ref(0);


// let chatMessages = config.chatMessages; //ref([] as Array<SocketEventMap<PF2eTypes>["renderChatMessage"] & { eventSource: ActorHelperPF2e }>);

game.helper.chat$.subscribe((m) => {
  console.log("New Chat message", m);
  config.chatMessages.push(m as any);
  showChatMenu()
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
    const context = msg?.message?.flags?.pf2e?.context;
      console.log(context, msg);
      if (context) {
        helper.rollStrikeDamage(context.identifier || "", data.action?.endsWith("critical"));
        // data.
      } else {
        console.log("WHERE IS MY CONTEXT!?", msg, msg.message.flags?.pf2e.context);
      }
  }
}
async function showChatMenu() {

  await menuController.enable(true, 'chat-menu');
  await menuController.open('chat-menu')
  chatlog.value?.$el.scrollToBottom(300);
}

const chatlog = ref<ComponentPublicInstance | null>(null);

watch(()=>config.chatMessages, ()=>showChatMenu())
</script>

<template>
  <ion-page>
    <link rel="stylesheet" :href="game.config.getAPIUrl(`css/style.css`)" />
    <link rel="stylesheet" :href="game.config.getAPIUrl(`systems/pf2e/styles/pf2e.css`)" />
    <ion-content>
      <Suspense>

        <ion-split-pane content-id="system-content" class="pf2e-content">
          <ion-menu content-id="system-content" class="pf2e-content" type="overlay">
            <ion-content>
              <IonHeader>
                <ion-list id="world-list">
                  <ion-list-header>{{ store.activeGame?.world.title }}</ion-list-header>
                  <ion-note>{{ store.activeGame?.system.title }}</ion-note>

                  <ion-menu-toggle :auto-hide="false" v-for="(p, i) in appPages" :key="i">
                    <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none"
                      :detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                      <ion-icon aria-hidden="true" slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                      <ion-label>{{ p.title }}</ion-label>
                    </ion-item>
                  </ion-menu-toggle>
                </ion-list>

                <IonSegment :value="showChat">
                  <IonSegmentButton :value="0" @click="showChat = 0">
                    Characters
                  </IonSegmentButton>
                  <IonSegmentButton :value="1" @click="showChatMenu()">
                    Chat
                  </IonSegmentButton>
                </IonSegment>
              </IonHeader>
              <ion-list id="labels-list">
                <!-- <ion-list-header>
                </ion-list-header> -->

                <ion-item
                  v-for="(actor, index) in store?.allSelectedActors.filter(a => a.worldId == store.worldId && a.listing).map(a => a.listing)"
                  lines="none" :key="index" router-direction="forward"
                  :router-link="'/' + store.activeGame?.world.system + '/actors/' + actor?.id"
                  :class="{ selected: router.currentRoute.value.fullPath.endsWith(actor?.id || '') }">
                  <ion-icon v-if="actor?.image.endsWith('.svg')" aria-hidden="true" slot="start" :ios="bookmarkOutline"
                    :md="bookmarkSharp" :src="game.config.getAPIUrl(actor?.image)"></ion-icon>
                  <img v-else width="32" slot="start" :src="game.config.getAPIUrl(actor?.image || '')" />
                  <ion-label>{{ actor?.name }}</ion-label>
                </ion-item>
              </ion-list>

            </ion-content>
          </ion-menu>
          <ion-menu menu-id="chat-menu" :disabled="false" side="end" content-id="system-content">
            <IonContent ref="chatlog">
              <IonList>
                <!-- <IonListHeader><IonTitle></IonTitle></IonListHeader> -->
                <IonItem v-for="(msg, idx) in config.chatMessages" :id="'chatmsg-' + idx">
                  <div class="ion-padding chat-message" style="flex-direction: column">
                    <DynamicComponent @click.capture="handleChatCardClicks($event, msg as any)"
                      :html="transformHtml(msg?.html || '')"></DynamicComponent>
                    <!-- {{ msg. }} -->
                  </div>
                </IonItem>
              </IonList>

            </IonContent>
          </ion-menu>
          <ion-router-outlet id="system-content" class="pf2e-content"></ion-router-outlet>
        </ion-split-pane>
      </Suspense>


    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#world-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#world-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>
