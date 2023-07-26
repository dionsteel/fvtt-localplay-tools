import { Component, Input } from "@angular/core";

import { CharacterData, NPCData, VehicleData } from "src/app/interfaces/5e/actor5e";
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
  @Input() actor: Actor5e<CharacterData>;

  itemCategories: { [type: string]: Item[] };

  get sysdata(): CharacterData | NPCData | VehicleData {
    return this.actor.system;
  }

  get attributes() {
    return (this.sysdata as CharacterData).attributes;
  }

  constructor() {}

  ngOnInit() {
    this.itemCategories = this.actor.items.reduce((a, i) => {
      a[i.type] = a[i.type] || [];
      a[i.type].push(i);
      return a;
    }, {});
  }
}
