import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SeatModule } from "../seat/seat.module";
import { TableAppComponent } from "./table-app.component";
import { FoundryAPIService } from "../foundry-api.service";
import { SettingsService } from "../Settings";
import { BrowserModule } from "@angular/platform-browser";
import systemHelpers, { SystemHelperService } from "../systems";
// type Helper = extends SystemHelperService;

@NgModule({
  declarations: [TableAppComponent],
  exports: [TableAppComponent],
  bootstrap: [TableAppComponent],
  providers: [
    SettingsService,
    FoundryAPIService,
    {
      provide: SystemHelperService,
      useFactory: (api: FoundryAPIService) => {
        console.log("Building Helper for", (game as Game<Actor<null>>).system.id);
        const helperClass: typeof SystemHelperService = systemHelpers[game.system.id];
        return new helperClass(api);
      },
      deps: [FoundryAPIService],
    },
  ],
  imports: [BrowserModule, CommonModule, SeatModule],
})
export class TableAppModule {}
