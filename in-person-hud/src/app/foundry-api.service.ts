import { Injectable } from "@angular/core";
import type { SeatComponent } from "./seat/seat.component";
import { Subject, fromEvent, map, scan, share } from "rxjs";
import { SettingsService } from "./Settings";
// import type { socketlib } from './socketlib';

@Injectable({
  providedIn: "root",
})
export class FoundryAPIService {
  socket = fromEvent(Hooks, "socketlib.ready").pipe(
    map(() => socketlib.registerModule("in-person-hud")),
    share()
  );
  // seats = new Subject().pipe(
  //   scan((a, c) => {
  //     a.push(c);
  //     return a;
  //   }, [])
  // );
  seats = [
    {
      seatIndex: 1,
      dimensions: {
        x: "right",
        y: "bottom",
      },
      x: "33%",
      y: "10px",
    },
  ];

  constructor(public settings: SettingsService) {
    Hooks.once("init", () => this.init());
    Hooks.once("setup", () => this.setup());
    Hooks.once("ready", () => this.ready());
    console.log("InPersonHUD | Created Api Service");
    console.log({settings});
  }

  ready(): any {}

  setup(): any {}

  init(): any {
    // throw new Error('Method not implemented.');
  }
}
