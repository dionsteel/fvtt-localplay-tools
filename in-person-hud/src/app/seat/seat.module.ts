import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SeatComponent } from "./seat.component";
import { SeatActorComponent } from "./seat-actor/seat-actor.component";
import { SeatActorPF2eComponent } from './seat-actor/seat-actor-pf2e/seat-actor-pf2e.component';

@NgModule({
  declarations: [SeatComponent, SeatActorComponent, SeatActorPF2eComponent],
  exports: [SeatActorComponent, SeatComponent],
  imports: [CommonModule],
})
export class SeatModule {}
