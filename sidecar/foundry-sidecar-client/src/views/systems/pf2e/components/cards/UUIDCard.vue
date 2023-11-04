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
import { ActorContainerPF2e } from "@/interfaces/actor-container";
import ActionCardPF2e from "./ActionCardPF2e.vue";
// import ActionCardPF2e from "./ActionCardPF2e.vue";

interface CompendiumPack {
  metadata: CompendiumPackMetadata;
  index: any;
  apps: any[];
  values: PackItemListing[];
}

type UUIDDocument =
  | ItemPF2e
  | JournalEntry
  | WeaponPF2e
  | ClassPF2e
  | AncestryPF2e
  | HeritagePF2e
  | BackgroundPF2e
  | FeatPF2e
  | ActorPF2e
  | KitPF2e
  | BookPF2e
  | LorePF2e
  | LootPF2e
  | NPCPF2e
  | SpellPF2e
  | PartyPF2e
  | ArmorPF2e
  | DeityPF2e
  | EffectPF2e
  | VehiclePF2e
  | MeleePF2e
  | CreaturePF2e
  | HazardPF2e
  | ActionItemPF2e
  | AfflictionPF2e
  | CampaignFeaturePF2e
  | ConditionPF2e
  | ConsumablePF2e
  | ContainerPF2e
  | EquipmentPF2e
  | PersistentDamagePF2e
  | TreasurePF2e
  | SpellcastingEntryPF2e
  | CharacterPF2e
  | FamiliarPF2e;

const { uuid, packType = "item", dataType = null } = defineProps<{ uuid: string; packType?: string; dataType?: string }>();

const game = usePF2eGame();
let item = await game.config.fetchJson<UUIDDocument>(`/uuid/${uuid}`);
const typesmap = {
  item: ["ancestry", "action", "class", "feature", "classfeature", "weapon", "consumable", "container", "backpack", "heritage", "background", "feat"],
  actor: ["creature", "npc", "actor", "character", "monster"],
};

const tests = {
  actor: (data: UUIDDocument): data is ActorPF2e => {
    return data.type == "actor";
  },
  creature: (data: UUIDDocument): data is CreaturePF2e => {
    return data.type == "creature";
  },
  character: (data: UUIDDocument): data is CharacterPF2e => {
    return data.type == "character";
  },
  familiar: (data: UUIDDocument): data is FamiliarPF2e => {
    return data.type == "familiar";
  },
  party: (data: UUIDDocument): data is PartyPF2e => {
    return data.type == "party";
  },
  npc: (data: UUIDDocument): data is NPCPF2e => {
    return data.type == "npc";
  },
  journalentry: (data: UUIDDocument): data is JournalEntry => {
    return data.type == "journalentry";
  },
  item: (data: UUIDDocument): data is ItemPF2e => {
    return data.type == "item" || typesmap.item.includes(data.type || "");
  },
  weapon: (data: UUIDDocument): data is WeaponPF2e => {
    return data.type == "weapon";
  },
  class: (data: UUIDDocument): data is ClassPF2e => {
    return data.type == "class";
  },
  ancestry: (data: UUIDDocument): data is AncestryPF2e => {
    return data.type == "ancestry";
  },
  heritage: (data: UUIDDocument): data is HeritagePF2e => {
    return data.type == "heritage";
  },
  background: (data: UUIDDocument): data is BackgroundPF2e => {
    return data.type == "background";
  },
  feat: (data: UUIDDocument): data is FeatPF2e => {
    return data.type == "feat";
  },
  kit: (data: UUIDDocument): data is KitPF2e => {
    return data.type == "kit";
  },
  book: (data: UUIDDocument): data is BookPF2e => {
    return data.type == "book";
  },
  lore: (data: UUIDDocument): data is LorePF2e => {
    return data.type == "lore";
  },
  loot: (data: UUIDDocument): data is LootPF2e => {
    return data.type == "loot";
  },
  spell: (data: UUIDDocument): data is SpellPF2e => {
    return data.type == "spell";
  },
  armor: (data: UUIDDocument): data is ArmorPF2e => {
    return data.type == "armor";
  },
  deity: (data: UUIDDocument): data is DeityPF2e => {
    return data.type == "deity";
  },
  effect: (data: UUIDDocument): data is EffectPF2e => {
    return data.type == "effect";
  },
  vehicle: (data: UUIDDocument): data is VehiclePF2e => {
    return data.type == "vehicle";
  },
  melee: (data: UUIDDocument): data is MeleePF2e => {
    return data.type == "melee";
  },
  hazard: (data: UUIDDocument): data is HazardPF2e => {
    return data.type == "hazard";
  },
  actionitem: (data: UUIDDocument): data is ActionItemPF2e => {
    return data.type == "actionitem";
  },
  affliction: (data: UUIDDocument): data is AfflictionPF2e => {
    return data.type == "affliction";
  },
  campaignfeature: (data: UUIDDocument): data is CampaignFeaturePF2e => {
    return data.type == "campaignfeature";
  },
  condition: (data: UUIDDocument): data is ConditionPF2e => {
    return data.type == "condition";
  },
  consumable: (data: UUIDDocument): data is ConsumablePF2e => {
    return data.type == "consumable";
  },
  container: (data: UUIDDocument): data is ContainerPF2e => {
    return data.type == "container";
  },
  equipment: (data: UUIDDocument): data is EquipmentPF2e => {
    return data.type == "equipment";
  },
  persistentdamage: (data: UUIDDocument): data is PersistentDamagePF2e => {
    return data.type == "persistentdamage";
  },
  treasure: (data: UUIDDocument): data is TreasurePF2e => {
    return data.type == "treasure";
  },
  spellcastingentry: (data: UUIDDocument): data is SpellcastingEntryPF2e => {
    return data.type == "spellcastingentry";
  },
};
</script>

<template>
  <template v-if="tests.actionitem(item)">
    <ActionCardPF2e :action="item"></ActionCardPF2e>
  </template>
  <!-- <template v-else-if="tests.character(item)"></template> -->
  <!-- <template v-else-if="tests.creature(item)"></template> -->
  <!-- <template v-else-if="tests.actor(item)"></template> -->
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
    <pre>
        {{ item }}
    </pre>
  </template>
</template>
