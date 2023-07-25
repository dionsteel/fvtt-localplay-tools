import { Component, Input } from "@angular/core";
import { filter } from "rxjs";
import SETTINGS from "src/app/Settings";
import { CDComponent } from "src/app/cdcomponent";
import { PlayerSeatDND5e } from "src/app/systems/system-helper-dnd5e.service";
import { eventHook } from "src/lib/state";

@Component({
  selector: "app-seat-actor-dnd5e",
  templateUrl: "./seat-actor-dnd5e.component.html",
  styleUrls: ["./seat-actor-dnd5e.component.scss"],
})
export class SeatActorDnd5eComponent extends CDComponent {
  @Input() wrapper: PlayerSeatDND5e;
  @Input() activeActionIndex: number = 0;

  events = SETTINGS.events.pipe(
    filter((e) => (this.wrapper.focusedActor.getActiveTokens() as any[]).filter((t) => t.controlled == true).length > 0),
    filter((e) => ["cycleActions", "cycleStrikes", "performCurrentStrike"].includes(e.type)),
  );

  constructor() {
    super();
  }
}
