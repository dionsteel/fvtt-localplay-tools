<script setup lang="ts">
import type { SeatConfig } from '@/stores/table-player';
import type { GameSystem } from '@/types/base';

defineProps<{ seat: SeatConfig<GameSystem<'dnd5e'>>; seatIndex?: number; seatName?: string; }>();

</script>
<template>
  <div class="seat">
    <div class="seat-actor" v-for="sa of seat?.actors">
      <div class="profile" :id="'actor_' + sa.id">
        <span v-text="sa.name"></span>

        <img class="portrait" :src="sa.img" />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  transition: all 0.3s ease-in-out;
}

.seat {
  display: flex;
  position: fixed;
  height: 120px;
  width: 500px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
  border-radius: 20px 20px 0px 0px;
  margin: 0px;
  padding: 1px;

  &.seat1 {
    bottom: 10px;
    right: calc(var(--sidebar-width) + 10px);
  }

  & .seat2 {
    bottom: 10px;
    left: 10%;
  }

  &.seat3 {
    top: 10px;
    right: calc(var(--sidebar-width) + 10px);
    transform: rotate(180deg);
  }

  &.seat4 {
    top: 10px;
    left: 10%;
    transform: rotate(180deg);
  }

  &.seat5 {
    left: -200px;
    top: 40%;
    transform: rotate(90deg);
  }

  .seat-actor {
    max-height: 100%;
    display: flex;
    flex-direction: row;

    .profile {
      display: flex;
      flex-direction: column;

      .portrait {
        height: 80px;
        width: 80px;
      }
    }

    .details {
      visibility: collapse;
    }

    &.focused {
      visibility: visible;
    }
  }
}
</style>
