import { Component, Input } from "@angular/core";

import { CharacterData, NPCData, VehicleData } from "src/app/interfaces/5e/actor5e";
import { Actor5E } from "src/app/interfaces/5e/actor5e";
import { Item5E, Weapon5e } from "src/app/interfaces/5e/item";
import { SystemHelperDND5eService } from "src/app/systems";

function statToMod(stat: number) {
  return Math.floor((stat - 10) / 2);
}
@Component({
  selector: "app-actor5e",
  templateUrl: "./actor5e.component.html",
  styleUrls: ["./actor5e.component.scss"],
})
export class Actor5eComponent {
  isControlled() {
    for (let tok of this.helper.canvas.tokens.controlled) {
      if (this.actor.id == tok.actor.id) {
        return true;
      }
    }
    return false;
  }
  @Input() actor: Actor5E<CharacterData>;

  itemCategories: { [type: string]: Item[] };

  get sysdata(): CharacterData | NPCData | VehicleData {
    return this.actor.system;
  }

  get attributes() {
    return (this.sysdata as CharacterData).attributes;
  }

  get weapons() {
    return this.actor.itemTypes.weapon.filter((w) => w.equipped);
  }

  get features() {
    return this.actor.itemTypes.feat;
  }

  get backgrounds() {
    return this.actor.itemTypes.background;
  }
  get backpacks() {
    return this.actor.itemTypes.backpack;
  }
  get classes() {
    return this.actor.itemTypes.class;
  }
  get consumables() {
    return this.actor.itemTypes.consumable;
  }
  get equipment() {
    return this.actor.itemTypes.equipment;
  }

  get loot() {
    return this.actor.itemTypes.loot;
  }
  get spells() {
    return this.actor.itemTypes.spell;
  }
  get subclasss() {
    return this.actor.itemTypes.subclass;
  }
  get tools() {
    return this.actor.itemTypes.tool;
  }

  get actions() {
    return [...this.weapons, ...this.consumables, ...this.spells, ...this.features];
  }
  @Input() activeActionIndex = 0;
  @Input() activeSubActionIndex = 0;

  actionUseFlags: Record<string, boolean>[] = [{ versatile: true }];

  constructor(private helper: SystemHelperDND5eService) {
    
  }

  ngOnInit() {
    console.log(this.weapons);

    this.itemCategories = this.actor.items.reduce((a, i) => {
      a[i.type] = a[i.type] || [];
      a[i.type].push(i);
      return a;
    }, {});
  }

  async attackVersatile(weapon: Item5E) {
    if (weapon.isVersatile) {
      let weaponIdx = this.actions.findIndex((a) => a == weapon);

      this.actionUseFlags[weaponIdx] = this.actionUseFlags[weaponIdx] || {};
      this.actionUseFlags[weaponIdx].versatile = true;

      const attackResult = await weapon.rollAttack();
      const currentTargets = [...game.user.targets.values()];
      for (let tgt of currentTargets) {
        let armour = (tgt.actor as Actor5E<NPCData>).armor.armor;
        let totalac = armour.dex + Math.max(statToMod(this.actor.system.abilities.dex.value), armour.value);
        if (attackResult.total >= totalac) {
          const dmg = await weapon.rollDamage({ critical: !!attackResult.isCritical, versatile: true });
        }
      }
    }
    // if(attackResult.total> ;
  }
}
