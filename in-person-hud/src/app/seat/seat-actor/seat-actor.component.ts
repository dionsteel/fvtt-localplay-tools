import { Component, Inject, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CDComponent } from "src/app/cdcomponent";
import { SystemHelperService } from "src/app/systems";
import { PlayerSeatWrapper } from "src/app/systems/system-helper.service";

@Component({
  selector: "app-seat-actor",
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: "./seat-actor.component.html",
  styleUrls: ["./seat-actor.component.scss"],
})
export class SeatActorComponent extends CDComponent {
  @Input() actor: foundry.documents.BaseActor;
  @Input() seatWrapper: PlayerSeatWrapper;

  constructor(@Inject(SystemHelperService) private helper) {
    super();
  }
  get image() {
    return this.actor.img;
  }
  ngOnInit() {
    this.dirty.next(true);
    // this.actor.img;
    console.log("SeatActorComponent init. ", this);
    Hooks.on("updateActor", () => this.dirty.next(true));
    Hooks.on("controlToken", () => this.dirty.next(true));
  }
  get game() {
    return game;
  }
  get wrapper() {
    return this.seatWrapper as any;
  }
  get system() {
    return game.system.id;
  }
  get isControlled() {
    return canvas.tokens.controlled
      .map((t) => t.actor as Actor)
      .filter((a) => a)
      .map((a) => a["id"])
      .includes(this.actor["id"]);
  }
}
