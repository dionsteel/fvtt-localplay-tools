<script setup lang="ts">
import type { SeatConfig } from '@/stores/table-player';
import type { GameSystem } from '@/types/base';
import ActorHUDPF2e from './pf2e/ActorHUDPF2e.vue';


defineProps<{ seat: SeatConfig<GameSystem<'pf2e'>>; seatIndex?: number; seatName?: string; }>();

</script>
<template>
  <div class="seat">
    <ActorHUDPF2e class="seat-actor" v-for="sa of seat?.actors" :actor="sa">
    </ActorHUDPF2e>
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
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px 20px 0px 0px;
  margin: 0px;
  padding: 1px;

  &.seat1 {
    bottom: 0px;
    right: calc(var(--sidebar-width) + 10px);
  }

  & .seat2 {
    bottom: 0px;
    left: 10%;
  }

  &.seat3 {
    top: 0px;
    right: calc(var(--sidebar-width) + 10px);
    transform: rotate(180deg);
  }

  &.seat4 {
    top: 0px;
    left: 10%;
    transform: rotate(180deg);
  }

  &.seat5 {
    left: -200px;
    top: 40%;
    transform: rotate(90deg);
  }

}
</style>
