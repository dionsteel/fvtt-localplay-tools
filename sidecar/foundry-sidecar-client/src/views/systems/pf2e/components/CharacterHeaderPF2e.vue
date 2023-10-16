<script setup lang="ts">
import { ActorPF2e, CharacterPF2e } from "@/interfaces/pf2e/actor";
import { IonImg, IonItem, IonIcon, IonLabel, IonTitle } from "@ionic/vue";
import ArmourClassPF2e from "./ArmourClassPF2e.vue";
import { usePF2eGame } from "@/store/pf2e";
import { useWorldStore } from "@/store/world";
import { skullSharp, bedSharp, bulbSharp, medalSharp, addSharp, keySharp, cutSharp, waterSharp, bandageSharp } from "ionicons/icons";
import { capitalize } from "vue";

export interface CharacterHeaderProps {
  actor: CharacterPF2e;
}

const { actor } = defineProps<CharacterHeaderProps>();

const store = useWorldStore();
const sysStore = usePF2eGame();
</script>
<template>
  <IonItem>
    <IonImg slot="start" class="actor-portrait" :style="{ width: '96px', height: '96px' }" v-if="actor"
      :src="sysStore.config.getAPIUrl(actor?.img || '')"></IonImg>
    <IonTitle class="ion-padding">
      {{ actor?.name }}
    </IonTitle>
    <IonIcon v-for="n in actor?.system?.resources?.heroPoints?.value" :icon="medalSharp" color="primary"></IonIcon>
    <IonIcon v-for="n in actor?.system?.attributes?.dying?.value" :icon="skullSharp" color="danger"></IonIcon>
    <IonIcon v-for="n in actor?.system?.attributes?.wounded?.value" :icon="bandageSharp" color="warning"></IonIcon>
    <!-- <IonItem
      v-if="actor?.system?.attributes?.dying?.value || actor?.system?.attributes?.wounded?.value || actor?.system?.resources?.heroPoints?.value">
    </IonItem> -->

    <ArmourClassPF2e :ac="actor?.system?.attributes?.ac"></ArmourClassPF2e>
    <div class="ion-padding hp-box">
      <h2>HP</h2>
      <p>
        {{ actor?.system?.attributes?.hp.value }} <small v-if="actor?.system?.attributes?.hp.temp">+ {{
          actor?.system?.attributes?.hp.temp }}</small> /
        {{ actor?.system?.attributes?.hp.max }}
      </p>
    </div>
  </IonItem>
  <IonItem>
    <div class="abilities">
      <div class="ability" v-for="(data, ak) in actor?.system?.abilities">
        <div class="title">
          {{ ak.toUpperCase() }}
          <span class="abilityscore">
            {{ data.mod }} <IonIcon v-if="actor.system.details.keyability.value == ak" :icon="keySharp"></IonIcon>
            <!-- {{ data.value - 10 >= 0 ? "+" : "" }}{{ Math.floor((data.value - 10) / 2) }} -->
          </span>
        </div>
        <div class="value">
          <small v-if="ak == 'con'" class="fullscore save" title="Saving Throw">
            {{ ['', 'T', 'E', 'M', 'L'][actor.system.saves.fortitude.rank] + ' ' }}+{{
              actor.system.saves.fortitude.totalModifier }}<br />
          </small>
          <small v-if="ak == 'dex'" class="fullscore save" title="Saving Throw">
            {{ ['', 'T', 'E', 'M', 'L'][actor.system.saves.reflex.rank] + ' ' }}+{{
              actor.system.saves.reflex.totalModifier }}<br />
          </small>
          <small v-if="ak == 'wis'" class="fullscore save" title="Saving Throw">
            {{ ['', 'T', 'E', 'M', 'L'][actor.system.saves.will.rank] + ' ' }}+{{
              actor.system.saves.will.totalModifier }}<br />
          </small>
          <template v-for="skil of actor.system.skills">
            <small :class="`skill skill-rank-${skil.rank}`" v-if="skil.ability == ak && skil.rank > 0">{{
              capitalize(skil.label) }} +{{
    skil.totalModifier }}
              <br /></small>
          </template>
        </div>
        <!-- {{ data.proficient }}
          {{ data.max }} -->
      </div>
    </div>
  </IonItem>
</template>

<style scoped>
.actor-portrait {
  width: 80px;
  height: auto;
}

.abilities {
  display: flex;
  flex-direction: row;
  padding: 10px;
  width: 100%;
  flex-wrap: wrap;
}

.ability {
  display: flex;
  padding: 0px;
  margin: 0px;
  flex-direction: column;
  flex-wrap: wrap;
  text-overflow: ellipsis;
  text-wrap: nowrap;
  word-wrap: break-word;
  width: 16.6%;
}

.save {
  background: rgba(10, 100, 15, .8);
  color: #eee;
  padding: 2px 6px 2px 2px;
  font-size: .7em;
  border-radius: 2px;
}

.skill {
  background: rgba(0, 25, 130, .8);
  color: #eee;
  padding: 2px 6px 2px 2px;
  border-radius: 2px;
  margin: none;
  text-overflow: ellipsis;
  text-wrap: nowrap;
  word-wrap: break-word;
  font-size: .65em;
  /* width: 15vw; */
  /* width: 16%; */
  /* max-width: 15%; */
}

.skill-rank-1 {
  background: rgba(177, 6, 6, 0.8);
}

.skill-rank-2 {
  background: rgba(238, 234, 4, 0.788);
}

.skill-rank-3 {
  background: rgba(10, 236, 3, 0.8);
}

.skill-rank-4 {
  background: rgba(252, 0, 155, 0.8);
}</style>
