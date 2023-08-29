<script setup lang="ts">
import { ArmorClassTraceData } from "@/interfaces/pf2e/system/statistic/armor-class";
import { IonContent, IonIcon, IonItem, IonLabel, IonListHeader, IonPopover } from "@ionic/vue";
import { shieldOutline, shieldCheckmark, shieldCheckmarkOutline, shield, shieldCheckmarkSharp, shieldHalf, shieldHalfOutline, shieldHalfSharp, shieldSharp } from "ionicons/icons";
import { PF2EConfig } from "@/interfaces/pf2e/config";
import { computed } from "vue";

const props = defineProps<{ ac: ArmorClassTraceData }>();
const shieldImages = {
  natural: "/systems/pf2e/assets/sheet/shield-blue.webp",
  equipped: "/systems/pf2e/assets/sheet/shield-red.webp",
  flat: "/systems/pf2e/assets/sheet/shield-clear.svg",
};

const armourGroup = computed(() => {
  const domains = props?.ac?.modifiers?.filter((m) => m.enabled).map((m) => m.type);
  let armourGroup = "flat";
  if (domains.includes("ability")) armourGroup = "natural";
  if (domains.includes("proficiency")) armourGroup = "natural";
  if (domains.includes("item")) armourGroup = "equipped";
  return armourGroup as "natural" | "equipped" | "flat";
});
const bgImg = computed(() => `url(${shieldImages[armourGroup?.value || "flat"]})`);
</script>

<template>
  <div class="armour-class" :title="ac?.breakdown" v-if="ac" id="ac">
    <span class="over-icon" :title="ac?.breakdown">{{ ac?.value }}</span>
    <IonPopover trigger="ac">
      <IonContent class="ion-padding">{{ ac?.breakdown }}</IonContent>
    </IonPopover>
  </div>
</template>
<style>
ion-icon.ac {
  font-size: 48px;
}
.armour-class {
  background-image: v-bind("bgImg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 4em;
  height: 4em;
}
span.over-icon {
  /* position: absolute; */
  /* left: 14px; */
  /* top: 14px; */
  margin: 0.6em auto;
  display: block;
  /* width: 20px;
  height: 20px; */
  font-size: 1.6em;
  text-align: center;
  font-weight: bold;
}
</style>
