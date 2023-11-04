<script setup lang="ts">
import { ref, computed } from "vue";
import {
  IonContent,
  IonItem,
  IonList,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonTitle,
  IonAccordionGroup,
  IonCard,
  IonCardHeader,
} from "@ionic/vue";
import DynamicComponent from "../../../../../lib/DynamicComponent.vue";
import { usePF2eGame } from "@/store/pf2e";
import { JournalEntry, TreeEntry } from "../../journals/interfaces";
import JournalTree from "../../journals/JournalTree.vue";
import { useRoute } from "vue-router";
import { ActorPF2e, CreaturePF2e, HazardPF2e, LootPF2e, NPCPF2e, PartyPF2e, VehiclePF2e, CharacterPF2e, FamiliarPF2e } from "@/interfaces/pf2e";
import {
  AncestryPF2e,
  ArmorPF2e,
  BackgroundPF2e,
  BookPF2e,
  ClassPF2e,
  DeityPF2e,
  EffectPF2e,
  FeatPF2e,
  HeritagePF2e,
  ItemPF2e,
  KitPF2e,
  LorePF2e,
  MeleePF2e,
  SpellPF2e,
  WeaponPF2e,
  ActionItemPF2e,
  AfflictionPF2e,
  CampaignFeaturePF2e,
  ConditionPF2e,
  ConsumablePF2e,
  ContainerPF2e,
  EquipmentPF2e,
  PersistentDamagePF2e,
  TreasurePF2e,
  SpellcastingEntryPF2e,
} from "@/interfaces/pf2e/item";
import ItemCardPF2e from "./ItemCardPF2e.vue";
import { PackItemListing } from "../../journals/PackItemListing";
import { CompendiumPackMetadata } from "../../journals/CompendiumPackMetadata";
import ActionCardPF2e from "./ActionCardPF2e.vue";
import GenericActorCardPF2e from "./GenericActorCardPF2e.vue";
// import ActionCardPF2e from "./ActionCardPF2e.vue";
import tests, { UUIDDocument } from "@/interfaces/pf2e/identifier";

interface CompendiumPack {
  metadata: CompendiumPackMetadata;
  index: any;
  apps: any[];
  values: PackItemListing[];
}

const { uuid, packType = "item", dataType = null } = defineProps<{ uuid: string; packType?: string; dataType?: string }>();

const game = usePF2eGame();
let item = await game.config.fetchJson<UUIDDocument>(`/uuid/${uuid}`);
</script>

<template>
  <!-- <IonHeader :translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
    </ion-toolbar>
  </IonHeader> -->
  <IonTitle>{{ item.name }} </IonTitle>
  <template v-if="tests.actionitem(item)">
    <ActionCardPF2e :action="item"></ActionCardPF2e>
  </template>
  <!-- <template v-else-if="tests.character(item)"></template> -->
  <!-- <template v-else-if="tests.creature(item)"></template> -->
  <template v-else-if="tests.actor(item) || tests.npc(item) || tests.hazard(item)">
    <GenericActorCardPF2e :actor="item"></GenericActorCardPF2e>
  </template>
  <!-- <template v-else-if="tests.npc(item)"></template> -->
  <!-- <template v-else-if="tests.familiar(item)"></template> -->
  <!-- <template v-else-if="tests.party(item)"></template> -->
  <!-- <template v-else-if="tests.affliction(item)"></template> -->
  <!-- <template v-else-if="tests.ancestry(item)"></template> -->
  <!-- <template v-else-if="tests.armor(item)"></template> -->
  <!-- <template v-else-if="tests.background(item)"></template> -->
  <!-- <template v-else-if="tests.book(item)"></template> -->
  <!-- <template v-else-if="tests.campaignfeature(item)"></template> -->
  <!-- <template v-else-if="tests.class(item)"></template> -->
  <!-- <template v-else-if="tests.condition(item)"></template> -->
  <!-- <template v-else-if="tests.consumable(item)"></template> -->
  <!-- <template v-else-if="tests.container(item)"></template> -->
  <!-- <template v-else-if="tests.deity(item)"></template> -->
  <!-- <template v-else-if="tests.weapon(item)"></template> -->
  <!-- <template v-else-if="tests.heritage(item)"></template> -->
  <!-- <template v-else-if="tests.feat(item)"></template> -->
  <!-- <template v-else-if="tests.kit(item)"></template> -->
  <!-- <template v-else-if="tests.lore(item)"></template> -->
  <!-- <template v-else-if="tests.loot(item)"></template> -->
  <!-- <template v-else-if="tests.spell(item)"></template> -->
  <!-- <template v-else-if="tests.effect(item)"></template> -->
  <!-- <template v-else-if="tests.vehicle(item)"></template> -->
  <!-- <template v-else-if="tests.melee(item)"></template> -->
  <!-- <template v-else-if="tests.equipment(item)"></template> -->
  <!-- <template v-else-if="tests.persistentdamage(item)"></template> -->
  <!-- <template v-else-if="tests.treasure(item)"></template> -->
  <!-- <template v-else-if="tests.spellcastingentry(item)"></template> -->

  <template v-else-if="tests.item(item)">
    <ItemCardPF2e :item="item"></ItemCardPF2e>
  </template>
  <template v-else>
    fallback:
    <pre>
        {{ item }}
    </pre>
  </template>
</template>
