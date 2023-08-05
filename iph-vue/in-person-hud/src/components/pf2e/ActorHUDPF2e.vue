<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{ actor: ActorPF2e; focused?: Boolean; }>();

const token = computed(() => (actor.getActiveTokens() || [])[0]);
const isControlled = computed(() => token.controlled);
</script>


<template>
  <div class="seat-actor" :class="[isControlled ? 'focused' : '']">
    <div class="profile" :id="'actor_' + actor.id">
      <span v-text="actor.name"></span>

      <img class="portrait" :src="actor.img" />
    </div>
  </div>
</template>

<style scoped>
.seat-actor {
  max-height: 100%;
  display: flex;
  flex-direction: row;

  .profile {
    text-align: center;
    display: flex;
    color: #FFF;
    flex-direction: column;

    .portrait {
      height: 80px;
      width: 80px;

    }
  }

  .details {
    visibility: collapse;
  }

}

.seat-actor.focused {
  .details {
    visibility: visible;
  }

  .portait {
    border: 1px solid #f00;
  }
}
</style>