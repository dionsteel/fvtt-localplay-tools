import { Component, HostBinding, InjectFlags, Input, ɵdetectChanges, ɵinjectChangeDetectorRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FoundryAPIService } from "../foundry-api.service";
import SETTINGS, { SettingsService } from "../Settings";
import { Subject, debounceTime, filter, map, merge, of, reduce } from "rxjs";
import { CDComponent } from "../cdcomponent";
import { SystemHelperService } from "../systems";

@Component({
  selector: "app-seat",
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: "./seat.component.html",
  styleUrls: ["./seat.component.scss"],
})
export class SeatComponent extends CDComponent {
  @Input() seatIndex: number = 0;
  @HostBinding("class.seat1") get isSeat1() {
    return this.seatIndex == 1 - 1;
  }
  @HostBinding("class.seat2") get isSeat2() {
    return this.seatIndex == 2 - 1;
  }
  @HostBinding("class.seat3") get isSeat3() {
    return this.seatIndex == 3 - 1;
  }
  @HostBinding("class.seat4") get isSeat4() {
    return this.seatIndex == 4 - 1;
  }
  @HostBinding("class.seat5") get isSeat5() {
    return this.seatIndex == 5 - 1;
  }
  seatActors: Actor[] = [];
  actorTokens: { [actorId: string]: Token } = {};

  constructor(public helper: SystemHelperService, private fttApi: FoundryAPIService, private settings: SettingsService) {
    super();
    // this.dirty.pipe(debounceTime(100)).subscribe(() => ɵdetectChanges(this));
    // const seatActorId = allSeatActors[this.seatIndex];
    // this.seatActors.push(game.actors.get(seatActorId));
    // .map((id) => [canvas.scene.tokens.find(t=>t.actor && t.actor.id==id)])
    // );
  }
  ngOnInit() {
    // const allSeatActors = merge(
    this.seatActors = SETTINGS.get<string[]>(`seat${this.seatIndex + 1}Actor`).filter((aid) => aid && aid.length > 1)
      .map((aid) => {
        console.log({ aid });
        return game.actors.get(aid);
      }); // this.settings.data.seat5Actor
    for (let sa of this.seatActors) {
      this.actorTokens[sa["id"]] = canvas.scene.tokens.find((t) => t.actor?.id == sa["id"]).object;
      // this.actorTokens[sa["id"]].control({releaseOthers:false})
    }
    // ɵinjectChangeDetectorRef(InjectFlags.Default).
    this.dirty.next(null);
    // )
    // .pipe(
    //   filter((v, i) => i == this.seatIndex - 1),
    //   reduce((a, c) => c)
    // )
    // .subscribe((v) => {
    //   this.seatActors.push(v);
    //   this.actorTokens = canvas.scene.tokens.find((t) => t.actor?.id == v.id);
    // });
  }
}

// declare global {
//   interface HTMLElementTagNameMap {
//     'iph-seat': NgElement & WithProperties<{ seatIndex: number }>;
//   }
// }
