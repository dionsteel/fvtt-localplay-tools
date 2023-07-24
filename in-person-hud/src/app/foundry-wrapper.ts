export interface InPersonHUDOptions extends ApplicationOptions {
  isGM: boolean;
  isTablePlayer: boolean;
  isNormalPlayer?: boolean;
}
export class InPersonHUDApplication extends Application<InPersonHUDOptions> {
  static override get defaultOptions(): InPersonHUDOptions {
    return mergeObject(super.defaultOptions, {
      id: "in-person-hud",
      template: "modules/in-person-hud/templates/in-person-hud.hbs",
      popOut: false,
      minimizable: false,
      isGM: false,
      isTablePlayer: false,
      resizable: false,
      classes: ["iph-base"],
    });
  }
  override getData(options?: Partial<InPersonHUDOptions>): object | Promise<object> {
    return this.options;
  }
  override render(force?: boolean, options?: RenderOptions) {
    let p = super.render(force, options);
    const apptag = this.options.isGM ? "gm" : this.options.isTablePlayer ? "table" : "player";
    console.log("rendering iph wrapper app", apptag, this.options);
    if (apptag != "player") {
      setTimeout(() => Hooks.call("inPersonHud.ready", apptag), 10);
    }
    return p;
  }
}
