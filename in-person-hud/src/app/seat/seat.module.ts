import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SeatComponent } from "./seat.component";
import { SeatActorComponent } from "./seat-actor/seat-actor.component";
import { SeatActorPF2eComponent } from './seat-actor/seat-actor-pf2e/seat-actor-pf2e.component';
import { SeatActorDnd5eComponent } from './seat-actor/seat-actor-dnd5e/seat-actor-dnd5e.component';
import { SeatActorDccComponent } from './seat-actor/seat-actor-dcc/seat-actor-dcc.component';
import { SeatActorStarfinderComponent } from './seat-actor/seat-actor-starfinder/seat-actor-starfinder.component';
import { Actor5eComponent } from './seat-actor/seat-actor-dnd5e/actor5e/actor5e.component';

@NgModule({
  declarations: [SeatComponent, SeatActorComponent, SeatActorPF2eComponent, SeatActorDnd5eComponent, SeatActorDccComponent, SeatActorStarfinderComponent, Actor5eComponent],
  exports: [SeatActorComponent, SeatComponent],
  imports: [CommonModule],
})
export class SeatModule {}
