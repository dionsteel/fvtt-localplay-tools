import { Component, Input } from "@angular/core";
import { Actor5e } from "src/types/dnd5e/module/documents/_module.mjs";

@Component({
  selector: "app-actor5e",
  templateUrl: "./actor5e.component.html",
  styleUrls: ["./actor5e.component.scss"],
})
export class Actor5eComponent {
  isControlled() {
    for (let tok of canvas.tokens.controlled) {
      if (this.actor.id == tok.actor.id) {
        return true;
      }
    }
    return false;
  }
  @Input() actor: Actor5e;

  constructor() {}

  ngOnInit() {}
}
