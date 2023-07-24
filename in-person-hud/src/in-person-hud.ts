import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { BootstrapOptions, CompilerOptions, StaticProvider, importProvidersFrom } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { BrowserModule, bootstrapApplication, createApplication } from "@angular/platform-browser";
import { createCustomElement } from "@angular/elements";
import { elements } from "./app/elements";
import { preloadTemplates } from "./lib/preloadTemplates";
import { InPersonHUDApplication } from "./app/foundry-wrapper";
import SETTINGS, { SETTINGS_TOKEN, SettingsService } from "./app/Settings";
import { FoundryAPIService } from "./app/foundry-api.service";
import { GMAppComponent } from "./app/gm-app/gm-app.component";
import { TableAppComponent } from "./app/table-app/table-app.component";
import { GMAppModule } from "./app/gm-app/gm-app.module";
import { TableAppModule } from "./app/table-app/table-app.module";
import systemHelpers, { SystemHelperService } from "./app/systems";
import libWrapperShared from "./app/libWrapperShared";

export class InPersonHUD {
  static activeApplication: InPersonHUDApplication;
}
let PanOnCycle = false;
const platform = platformBrowserDynamic();
const _ss = new SettingsService();
try {
  Hooks.once("init", () => {
    try {
      // libWrapper.register('in-person-hud', 'TokenLayer.prototype')
      libWrapper.register(
        "in-person-hud",
        "TokenLayer.prototype.cycleTokens",
        function (wrapped, forwards: boolean, reset: boolean) {
          /**
           * Cycle the controlled token by rotating through the list of Owned Tokens that are available within the Scene
           * Tokens are currently sorted in order of their TokenID
           *
           * @param {boolean} forwards  Which direction to cycle. A truthy value cycles forward, while a false value
           *                            cycles backwards.
           * @param {boolean} reset     Restart the cycle order back at the beginning?
           * @returns {Token|null}       The Token object which was cycled to, or null
           */
          // cycleTokens(forwards, reset) {
          if (PanOnCycle) {
            return wrapped(forwards, reset);
          }
          let next = null;
          if (reset) this._tabIndex = null;
          const order = this._getCycleOrder();

          // If we are not tab cycling, try and jump to the currently controlled or impersonated token
          if (this._tabIndex === null) {
            this._tabIndex = 0;

            // Determine the ideal starting point based on controlled tokens or the primary character
            let current = this.controlled.length ? order.find((t) => this.controlled.includes(t)) : null;
            if (!current && game.user.character) {
              const actorTokens = game.user.character.getActiveTokens();
              current = actorTokens.length ? order.find((t) => actorTokens.includes(t)) : null;
            }
            current = current || order[this._tabIndex] || null;

            // Either start cycling, or cancel
            if (!current) return null;
            next = current;
          }

          // Otherwise, cycle forwards or backwards
          else {
            if (forwards) this._tabIndex = this._tabIndex < order.length - 1 ? this._tabIndex + 1 : 0;
            else this._tabIndex = this._tabIndex > 0 ? this._tabIndex - 1 : order.length - 1;
            next = order[this._tabIndex];
            if (!next) return null;
          }

          // Pan to the token and control it (if possible)
          if (PanOnCycle) {
            canvas.animatePan({ x: next.center.x, y: next.center.y, duration: 250 });
          }
          next.control();
          return next;
        },
        "MIXED"
      );

      // const _apisvc = new FoundryAPIService(_ss);
      // CONFIG.debug.hooks = true;

      Hooks.once("inPersonHud.ready", (appName) => {
        try {
          let sys_helper = systemHelpers[game.system.id] || systemHelpers.generic;
          console.log("InPersonHUD Ready, loading angular App", appName, game.system.id, sys_helper);
          const bso: CompilerOptions & BootstrapOptions = {
            providers: [
              { provide: SettingsService, useFactory: () => _ss },
              // { provide: FoundryAPIService, useValue: _apisvc }
            ],
          };
          if (appName == "gm") {
            platform.bootstrapModule(GMAppModule, bso);
          } else if (appName == "table") {
            platform.bootstrapModule(TableAppModule, bso);
          }
        } catch (error) {
          console.error("InPersonHUD | Error Loading Angular App", error);
        }
      });
    } catch (error) {
      console.error("InPersonHUD | Error Loading Angular App", error);
    }
    //;.bootstrapModule()
    // export const InPersonHUDAppRef = createApplication({
    //   providers: [importProvidersFrom(BrowserModule), SettingsService, FoundryAPIService],
    // }).then(async (appRef) => {
    //   // for (let [selector, component] of Object.entries(elements)) {
    //   //   customElements.define(
    //   //     selector,
    //   //     createCustomElement(component, {
    //   //       injector: appRef.injector,
    //   //     })
    //   //   );
    //   // }
    //   let _settings = appRef.injector.get(SettingsService);
    //   let _appCompRef;
    //   Hooks.once("inPersonHud.ready", (appName) => {
    //     if (appName == "gm") {
    //       _appCompRef = appRef.bootstrap(GMAppComponent);
    //     } else if (appName == "table") {
    //       _appCompRef = appRef.bootstrap(TableAppComponent);
    //     }
    //   });
    //   return appRef;
    // });
    // for (let i = 1; i < 6; i++) {
    //   const seat = document.createElement('iph-seat');
    //   seat.seatIndex = i;
    //   $.parseHTML(`<iph-seat seatIndex="${i}"></iph-seat>`, document);
    // }

    preloadTemplates();
    return true;
  });
  Hooks.once("ready", () => {
    try {
      const tablePlayerId = SETTINGS.get<string>("tablePlayerUserId");
      const isTablePlayer = tablePlayerId == game.user.id;
      console.log("In-Person-HUD | Mounting Foundry App", { isTablePlayer, tablePlayerId, userid: game.user.id });

      InPersonHUD.activeApplication = new InPersonHUDApplication({
        isGM: game.user.isGM,
        isTablePlayer,
      });
      InPersonHUD.activeApplication.render(true);
      console.log("In-Person-HUD | Mounted Foundry App");
    } catch (error) {
      console.error("InPersonHUD error mounting app", error);
    }
  });
} catch (err) {
  console.error("InPersonHUD | ", err);
}
