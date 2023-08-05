import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import {
  SETTINGS,
  registerSettings,
  registerKeybindings,
} from "./stores/settings";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);

app.use(router);

export async function preloadTemplates() {
  const templatePaths: string[] = [
    // Add paths to "modules/in-person-hud/templates"
    "modules/in-person-hud/templates/host.hbs",
    "modules/in-person-hud/templates/seat-mapping.hbs",
  ];

  return loadTemplates(templatePaths);
}

export class IPHApplication extends Application {
  static override get defaultOptions(): ApplicationOptions {
    return mergeObject(super.defaultOptions, {
      id: "inpersonhud",
      popOut: false,
      template: "modules/in-person-hud/templates/host.hbs",
    });
  }
  override getData(
    options?: Partial<ApplicationOptions> | undefined
  ): object | Promise<object> {
    return mergeObject(IPHApplication.defaultOptions, {});
  }
  override async render(
    force?: boolean | undefined,
    options?: RenderOptions | undefined
  ): Promise<this> {
    await super.render(force, options);
    setTimeout(() => {
      Hooks.call("in-person-hud.rendered", this.element[0]);
    }, 10);
    return this;
  }
}

export class InPersonHUD {
  static MODULE_NAME = "in-person-hud";
  static settings = SETTINGS;
  static _app = app;
  static _route = router;

  static log(...args: any[]) {
    console.log("InPersonHud | ", ...args);
  }

  static async mountApp(hostApp: HTMLElement) {
    this.log("Mounting app");
    let inst = this._app.mount(hostApp);
    console.log("app instance", inst, this._app);
  }

  static loadTableMode() {
    this._route.push("table");
    console.log("loadTableMode", this._route);
  }
}

Hooks.once("init", async () => {
  InPersonHUD.log("initialising...");
  SETTINGS.init("in-person-hud");
  await preloadTemplates();
  registerSettings();
  registerKeybindings();
});
Hooks.once("ready", async () => {
  const hostApp = new IPHApplication();
  await hostApp.render(true);
});
Hooks.once("in-person-hud.rendered", async (e) => {
  InPersonHUD.log("Created host app, mounting...", e);
  await InPersonHUD.mountApp(e as HTMLElement);

  InPersonHUD.loadTableMode();
});
