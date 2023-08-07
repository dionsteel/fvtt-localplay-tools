import { Component, Input } from "@angular/core";
import { filter, interval } from "rxjs";
import SETTINGS from "src/app/Settings";
import { CDComponent } from "src/app/cdcomponent";
import { eventHook } from "src/lib/state";
import { PlayerSeatPF2e } from "src/app/systems/system-helper-pf2e.service";
import { ActorPF2e } from "src/types/pf2e/module/documents";
import { TokenPF2e } from "src/types/pf2e/module/canvas";

@Component({
  selector: "app-actorpf2e",
  templateUrl: "./actorpf2e.component.html",
  styleUrls: ["./actorpf2e.component.scss"],
})
export class Actorpf2eComponent extends CDComponent {
  @Input() wrapper: PlayerSeatPF2e;
  @Input() actor: ActorPF2e;
  @Input() currentTableFocusedActor: boolean = false;
  @Input() currentlyControlled: boolean = false;
  @Input() activeActionIndex: number = 0;
  @Input() activeStrikeIndex: number = 0;
  currentToken: TokenPF2e;

  events = SETTINGS.events.pipe(
    filter((e) => this.wrapper.focusedActor == this.actor && this.currentToken?.controlled),
    filter((e) => ["cycleActions", "cycleStrikes", "cycleSpells", "performCurrentStrike", "performCurrentSpell"].includes(e.type)),
  );
  activeSpellIndex = 0;
  currentCastLevel: number = 1;

  findAndAssignCurrentToken() {
    let tokens: TokenPF2e[] = this.actor.getActiveTokens(true, false) as TokenPF2e[];
    if (tokens.length > 0) {
      this.currentToken = tokens[0];
      this.dirty.next(true);
    }
  }

  ngOnInit() {
    this.findAndAssignCurrentToken();
    interval(100).subscribe(this.dirty)
    // this.wrapper.actions.subscribe(() => this.dirty.next(true));
    eventHook("controlToken").subscribe(() => {
      if (this.isControlled) {
        (document.querySelector(":root") as HTMLElement).style.setProperty(
          "--seat-rotation",
          this.wrapper.config.seatIndex > 1 ? "180deg" : "0deg",
        );
      }
      this.dirty.next(true);
    });
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
    this.events.pipe(filter((e) => e.type == "cycleSpells")).subscribe((e) => {
      let oi = this.activeSpellIndex;
      this.rotateSpells();
      console.log("cycleSpells", oi, this.activeSpellIndex, e);

      this.dirty.next(true);
    });
    this.events.pipe(filter((e) => e.type == "performCurrentStrike")).subscribe((e) => {
      let readyActions = this.wrapper.focusedActor.system.actions?.filter((a) => a.ready);
      let currentAction = readyActions[this.activeActionIndex];
      let currentStrike = currentAction.variants[this.activeStrikeIndex];
      currentStrike.roll(undefined).then((r) => {
        console.log("Perform Strike", this.actor.name, currentStrike.label, r, e);
        this.rotateStrikes();
        this.dirty.next(true);
      });
    });
    this.events.pipe(filter((e) => e.type == "performCurrentSpell")).subscribe((e) => {
      // let availableSpells = this.wrapper.focusedActor.system.actions?.filter((a) => a.ready);
      const spell = this.actor.itemTypes.spell[this.activeSpellIndex];
      if (spell.isAttack) {
        spell.rollAttack(null, this.activeStrikeIndex);
      } else {
        spell?.spellcasting?.cast(spell, { level: this.currentCastLevel }).catch((e) => console.warn(e));
      }
      // availableSpells[this.activeSpellIndex].variants[this.activeStrikeIndex].roll({});
      // this.rotateStrikes();
      console.log("Cast Spell", e, spell);

      this.dirty.next(true);
    });
  }
  getClass(actor: ActorPF2e) {
    return actor.itemTypes.class.map((c) => c.name).join(" / ");
  }
  ngAfterViewInit() {
    this.dirty.next(true);
  }

  get isControlled() {
    return this.wrapper.currentToken.controlled;
  }

  isActorControlled(actor) {
    return this.wrapper.helper.canvas.tokens.controlled.map((t) => t.actor.id).includes(actor.id);
  }

  rotateActions() {
    let readyActions = this.wrapper.focusedActor.system.actions?.filter((a) => a.ready);
    console.log("rotateActions", this.wrapper.focusedActor.name, readyActions.length, this.activeActionIndex);
    this.activeActionIndex = (this.activeActionIndex + 1) % readyActions.length;
  }

  rotateStrikes() {
    this.activeStrikeIndex = (this.activeStrikeIndex + 1) % 3;
  }
  rotateSpells() {
    this.activeSpellIndex = (this.activeSpellIndex + 1) % this.actor.itemTypes.spell.length;
  }
}
