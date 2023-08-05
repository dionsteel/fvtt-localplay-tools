<script setup lang="ts">
import { useAttrs } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'
import { useTableStore } from '../stores/table-player';
import SeatPF2e from '../components/SeatPF2e.vue';
import Seat5e from '../components/Seat5e.vue';

const tableStore = useTableStore();
console.log('LOADED TABLE STORE!', tableStore);
</script>

<template>
  <div v-if="tableStore.game.system.id == 'pf2e'">
    <SeatPF2e :class="['seat', seatIndex]" v-for="(seat, seatIndex) in tableStore.seats" :seat="seat" :seat-name="seatIndex">
    </SeatPF2e>
  </div>
  <div v-if="tableStore.game.system.id == 'dnd5e'">
    <Seat5e :class="['seat', seatIndex]" v-for="(seat, seatIndex) in tableStore.seats" :seat="seat" :seat-name="seatIndex">
    </Seat5e>
  </div>
    <!-- <div :class="['seat', seatIndex]" v-for="(seat, seatIndex) in tableStore.seats">
    <div class="seat-actor" v-for="sa of seat.actors">
      <div class="profile" :id="'actor_' + sa.id">
        <span v-text="sa.name"></span>

        <img class="portrait" :src="sa.img" />
      </div>
    </div>
  </div> -->
</template>

<style scoped>
:host {
  display: flex;
  position: absolute;
}

* {
  transition: all 0.3s ease-in-out;
}
</style>