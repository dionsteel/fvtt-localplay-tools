import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SeatModule } from "../seat/seat.module";
import { GMAppComponent } from "./gm-app.component";
import { FoundryAPIService } from "../foundry-api.service";
import { SettingsService } from "../Settings";
import { BrowserModule } from "@angular/platform-browser";
import systemHelpers, { SystemHelperService } from "../systems";
import { GmAppPf2eComponent } from './gm-app-pf2e/gm-app-pf2e.component';
import { GmAppDnd5eComponent } from './gm-app-dnd5e/gm-app-dnd5e.component';
import { GmAppDccComponent } from './gm-app-dcc/gm-app-dcc.component';
import { GmAppStarfinderComponent } from './gm-app-starfinder/gm-app-starfinder.component';

@NgModule({
  declarations: [GMAppComponent, GmAppPf2eComponent, GmAppDnd5eComponent, GmAppDccComponent, GmAppStarfinderComponent],
  exports: [GMAppComponent],
  bootstrap: [GMAppComponent],
  imports: [BrowserModule, CommonModule, SeatModule],
  providers: [
    SettingsService,
    FoundryAPIService,
    {
      provide: SystemHelperService,
      useFactory: (api: FoundryAPIService) => {
        return systemHelpers[game.system.id];
      },
      deps: [FoundryAPIService],
    },
  ],
})
export class GMAppModule {}
