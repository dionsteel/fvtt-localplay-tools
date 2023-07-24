import { Component, Input } from "@angular/core";
import { filter } from "rxjs";
import SETTINGS from "src/app/Settings";
import { CDComponent } from "src/app/cdcomponent";
import { PlayerSeatPF2e } from "src/app/systems/system-helper-pf2e.service";
import { eventHook } from "src/lib/state";
import { PF2ECONFIG } from "src/types/pf2e/scripts/config";

@Component({
  selector: "app-seat-actor-pf2e",
  templateUrl: "./seat-actor-pf2e.component.html",
  styleUrls: ["./seat-actor-pf2e.component.scss"],
})
export class SeatActorPF2eComponent extends CDComponent {
  @Input() wrapper: PlayerSeatPF2e;
  @Input() activeActionIndex: number = 0;
  @Input() activeStrikeIndex: number = 0;

  events = SETTINGS.events.pipe(
    filter((e) => this.wrapper._actor.getActiveTokens().filter((t) => t.controlled).length > 0),
    filter((e) => ["cycleActions", "cycleStrikes", "performCurrentStrike"].includes(e.type))
  );
  ngOnInit() {
    this.wrapper.actions.subscribe(() => this.dirty.next(true));
    eventHook("controlToken").subscribe(this.dirty);
    this.events.pipe(filter((e) => e.type == "cycleActions")).subscribe((e) => {
      console.log("cycleActions", e);
      this.rotateActions();
      this.dirty.next(true);
    });

    this.events.pipe(filter((e) => e.type == "cycleStrikes")).subscribe((e) => {
      this.rotateStrikes();
      console.log("cycleStrikes", e);

      this.dirty.next(true);
    });
    this.events.pipe(filter((e) => e.type == "performCurrentStrike")).subscribe((e) => {
      this.wrapper._actor.system.actions[this.activeActionIndex].variants[this.activeStrikeIndex].roll({});
      this.rotateStrikes();
      console.log("cycleStrikes", e);

      this.dirty.next(true);
    });
  }

  ngAfterViewInit() {
    this.dirty.next(true);
  }
  get isControlled() {
    return this.wrapper.currentToken.value.controlled;
  }

  rotateActions() {
    let readyActions = this.wrapper._actor.system.actions?.filter((a) => a.ready);
    console.log("rotateActions", this.wrapper._actor.name, readyActions.length, this.activeActionIndex);
    this.activeActionIndex = (this.activeActionIndex + 1) % readyActions.length;
  }
  rotateStrikes() {
    this.activeStrikeIndex = (this.activeStrikeIndex + 1) % 3;
  }
}
