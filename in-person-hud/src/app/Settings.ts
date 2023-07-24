import { LiteralPrimitive } from "@angular/compiler";
import { Injectable, InjectionToken } from "@angular/core";
import { BehaviorSubject, Subject, filter, map } from "rxjs";
import BaseUser from "src/types/foundry/common/documents/user";

declare global {
  interface LenientGlobalVariableTypes {
    game: never;
    canvas: never;
  }
  interface String {
    /** Localizes the string via the global `game.i18n.localize()` function. */
    localize(): string;
  }
  type AnyFunction = (...args: any) => any;
}
type SettingValue<K extends keyof typeof InPersonHudSettings = keyof typeof InPersonHudSettings> = PrimitiveOf<(typeof InPersonHudSettings)[K]["type"]>;
type SettingChange<K extends keyof typeof InPersonHudSettings = keyof typeof InPersonHudSettings> = { settingId: K; value: SettingValue[K] };
export interface EventSubjectDataTypeMap {
  cycleActions: KeyboardEventContext;
  cycleStrikes: KeyboardEventContext;
  performCurrentStrike: KeyboardEventContext;
  settingChange: SettingChange;
};

export class EventSubject<M, K extends keyof M = keyof M, T extends M[K] = M[K]> extends Subject<{ type: K; data: T }> {
  emit(type: K, data: T) { this.next({ type, data }) }
  on(type: K) { return this.pipe(filter(e => e.type == type), map(e => e?.data)) }
}
export class SettingsEventSubject extends EventSubject<EventSubjectDataTypeMap>{ };
export interface SeatMappingSeatConfig {
  enabled: boolean;
  actors: string[];
}
export interface SeatMappingConfig {
  Seat1: SeatMappingConfig;
  Seat2: SeatMappingConfig;
  Seat3: SeatMappingConfig;
  Seat4: SeatMappingConfig;
  Seat5: SeatMappingConfig;
}
export class SeatMappingForm extends FormApplication<{ pc_actors: Actor[] }> {
  protected override async _updateObject(event: Event, formData: Record<string, boolean | string[]>): Promise<SeatMappingConfig> {
    console.log('update settings', event, formData);
    let out: Partial<SeatMappingConfig> = {};
    for (let k in formData) {
      let t = formData[k];
      let path = k.split(/./g);
      path.slice(0, -1).reduce((a, p) => (a[p] = a[p] || {}), out)[path[path.length - 1]] = t;

    }
    SETTINGS.set('seat1Actor', formData['seat1Actors'])
    SETTINGS.set('seat2Actor', formData['seat2Actors'])
    SETTINGS.set('seat3Actor', formData['seat3Actors'])
    SETTINGS.set('seat4Actor', formData['seat4Actors'])
    SETTINGS.set('seat5Actor', formData['seat5Actors'])

    return out as SeatMappingConfig;
  }

  static override get defaultOptions(): FormApplicationOptions {
    return mergeObject(super.defaultOptions, {
      closeOnSubmit: true, editable: true,
      template: "modules/in-person-hud/templates/seat-mapping.hbs",

      id: 'SeatMappingSettings',

    })
  }

  override getData(options?: Partial<FormApplicationOptions>) {
    const pc_actors = game.actors
      .filter(
        (a: ActorV11) => a.hasPlayerOwner
        // a.document.getUserLevel(game.users.get(SETTINGS.get("tablePlayerUserId"))) >= CONST.DOCUMENT_PERMISSION_LEVELS.OBSERVER
      )
    return {
      options,
      title: 'Seat Actor Mapping',
      seatIdx: [1, 2, 3, 4, 5],
      pc_actors
    };
  }

  static registerSettings() {

  }

}
export default class SETTINGS {
  static MOD_NAME: string;
  static init(moduleName: string) {
    this.MOD_NAME = moduleName;
    if (!String.prototype.localize) {
      String.prototype.localize = function () {
        return game.i18n.localize(this.valueOf());
      };
    }
  }
  static register<T>(key: string, config: SettingRegistration<Record<string, string>>) {
    game.settings.register(SETTINGS.MOD_NAME, key, config);
  }
  static registerMenu(key: string, config: SettingSubmenuConfig) {
    game.settings.registerMenu(SETTINGS.MOD_NAME, key, config);
  }
  static get<T>(key: string): T {
    return <T>game.settings.get(SETTINGS.MOD_NAME, key);
  }
  static async set<T>(key: string, value: T): Promise<T> {
    return (await game.settings.set(SETTINGS.MOD_NAME, key, value)) as T;
  }
  static default<T>(key: string): T {
    return <T>game.settings.settings.get(SETTINGS.MOD_NAME + "." + key)?.default;
  }
  static updateChoices<T extends string | number | symbol = string>(key: string, newChoices: Record<T, string>) {
    (game.settings.settings.get(`${SETTINGS.MOD_NAME}.${key}`) as SettingConfig<Record<string, string>>).choices = newChoices;
  }
  /** helper for referencing a Typed constructor for the `type` field of a setting { type: SETTINGS.typeOf<MyClass>() } */
  static typeOf<T>(): ConstructorOf<T> {
    return Object as any;
  }
  static live: Partial<{ [K in keyof typeof InPersonHudSettings]: SettingSubject<InstanceOf<(typeof InPersonHudSettings)[K]["type"]>> }> =
    {};

  static events = new SettingsEventSubject();
}

export class SettingSubject<T = any> extends BehaviorSubject<T> {
  constructor(
    public name: keyof typeof InPersonHudSettings,
    public options: SettingRegistration<Record<string, string>> & { getChoices?: () => Promise<Record<string, string>> }
  ) {
    SETTINGS.register<T>(name as string, {
      ...options,
      onChange: (value: string) => {
        super.next(value as T);
        SETTINGS.events.emit('settingChange', { settingId: name, value });
      },
    });
    super(SETTINGS.get(name as string) || (options.default as T));
    if (this.options.getChoices && !this.options.choices) {
      Hooks.on("ready", () => this.updateChoices());
    }
  }
  register() { }
  override next(value: T) {
    SETTINGS.set(this.name as string, value);
  }
  refresh() {
    super.next(SETTINGS.get(this.name as string));
  }
  async updateChoices() {
    //newChoices: Record<string | number | symbol, string>) {
    if (this.options.getChoices) {
      SETTINGS.updateChoices(this.name as string, await this.options.getChoices());
    }
  }
}
export interface ActorV11 extends Actor<null> {
  hasPlayerOwner: boolean;
}
export const SETTINGS_TOKEN = new InjectionToken<SETTINGS>("FOUNDRY_SETTINGS");
export const InPersonHudSettings: { [key: string]: Partial<SettingRegistration<Record<string, string>> & { getChoices: () => any | void }> } = {
  tablePlayerUserId: {
    scope: "world",
    name: "Table Player User",
    config:true,
    type: String,
    getChoices: () =>
      Object.fromEntries(
        game.users.players
          .filter((u) => !u.isGM)
          .map((u) => {
            return [u.id, (u as any)._source.name];
            // return [u._source._id, u._source.name];
          })
      ),
  },
  seat1Actor: {
    scope: "world",
    name: "Seat 1 Player Character",
    
    default: [],
    type: Array<String>,
    getChoices: () =>
      Object.fromEntries([
        ["", "None"],
        ...game.actors
          .filter(
            (a: ActorV11) => a.hasPlayerOwner
            // a.document.getUserLevel(game.users.get(SETTINGS.get("tablePlayerUserId"))) >= CONST.DOCUMENT_PERMISSION_LEVELS.OBSERVER
          )
          .map((a) => [a._id, a.name]),
      ]),
  },
  seat2Actor: {
    scope: "world",
    name: "Seat 2 Player Character",
    
    default: [],
    type: Array<String>,
    getChoices: () =>
      Object.fromEntries([
        ["", "None"],
        ...game.actors
          .filter(
            (a: ActorV11) => a.hasPlayerOwner
            // a.document.getUserLevel(game.users.get(SETTINGS.get("tablePlayerUserId"))) >= CONST.DOCUMENT_PERMISSION_LEVELS.OBSERVER
          )
          .map((a) => [a.id, a.name]),
      ]),
  },
  seat3Actor: {
    scope: "world",
    default: [],
    name: "Seat 3 Player Character",
    
    type: Array<String>,
    getChoices: () =>
      Object.fromEntries([
        ["", "None"],
        ...game.actors
          .filter(
            (a: ActorV11) => a.hasPlayerOwner
            // a.document.getUserLevel(game.users.get(SETTINGS.get("tablePlayerUserId"))) >= CONST.DOCUMENT_PERMISSION_LEVELS.OBSERVER
          )
          .map((a) => [a._id, a.name]),
      ]),
  },
  seat4Actor: {
    scope: "world",
    name: "Seat 4Player Character",
    default: [],
    
    type: Array<String>,
    getChoices: () =>
      Object.fromEntries([
        ["", "None"],
        ...game.actors
          .filter(
            (a: ActorV11) => a.hasPlayerOwner
            // a.document.getUserLevel(game.users.get(SETTINGS.get("tablePlayerUserId"))) >= CONST.DOCUMENT_PERMISSION_LEVELS.OBSERVER
          )
          .map((a) => [a._id, a.name]),
      ]),
  },
  seat5Actor: {
    scope: "world",
    name: "Seat 5 Player Character",
    
    default: [],
    type: Array<String>,
    getChoices: () =>
      Object.fromEntries([
        ["", "None"],
        ...game.actors
          .filter(
            (a: ActorV11) => a.hasPlayerOwner
            // a.document.getUserLevel(game.users.get(SETTINGS.get("tablePlayerUserId"))) >= CONST.DOCUMENT_PERMISSION_LEVELS.OBSERVER
          )
          .map((a) => [a.id, a.name]),
      ]),
  },
};

export class SeatSettings {
  constructor(public data) {

  }
  valueOf() { return this; }

}
Hooks.once("init", async () => {
  SETTINGS.init("in-person-hud");
  console.log("InPersonHud | ", "initSettings");
  console.log("InPersonHud | ", "registerSettings", InPersonHudSettings);
  for (let _settingName in InPersonHudSettings) {
    console.log("InPersonHud | ", "set setting", _settingName);
    try {
      const _settingOpts = InPersonHudSettings[_settingName];
      // if (_settingOpts.getChoices) {
      //   _settingOpts.choices = await _settingOpts.getChoices();
      // }
      // SETTINGS.register(_settingName, _settingOpts);
      SETTINGS.live[_settingName] = new SettingSubject(_settingName as keyof typeof InPersonHudSettings, _settingOpts as any);
    } catch (error) {
      console.error("InPersonHUD | ", error);
    }
    // console.log("DID SETTINGS", SETTINGS, this);
  }
  // game.keybindings.get('in-person-hud', 'rotateCurrentAction')[0].key

  SETTINGS.registerMenu('seatActorMapping', { label: "Seat to Character Mapping", hint: '', "icon": "fa fa-map", "name": "seatActorMapping", type: SeatMappingForm, restricted: true })

  game.keybindings.register("in-person-hud", "rotateCurrentAction", {
    name: "Cycle Player Actions",
    uneditable: [{ key: "Equal", modifiers: [] }],
    onUp: (ctx) => {
      SETTINGS.events.next({ type: "cycleActions", data: ctx });
    },
  });
  game.keybindings.register("in-person-hud", "rotateCurrentStrike", {
    name: "Cycle Player Strikes",
    uneditable: [{ key: "Minus", modifiers: [] }],
    onUp: (ctx) => {
      SETTINGS.events.next({ type: "cycleStrikes", data: ctx });
    },
  });
  game.keybindings.register("in-person-hud", "performCurrentStrike", {
    name: "Perform Current Strike",
    uneditable: [{ key: "Enter", modifiers: [] }],
    onUp: (ctx) => {
      SETTINGS.events.next({ type: "performCurrentStrike", data: ctx });
    },
  });
});

@Injectable()
export class SettingsService {
  // tablePlayerUserId = new BehaviorSubject("");
  get data(): Partial<{ [K in keyof typeof InPersonHudSettings]: (typeof SETTINGS.live)[K] }> {
    return SETTINGS.live;
  }

  constructor() {
    // Hooks.once("setup", () =>
    // );
    // this.get$('seat1Actor').pipe(map(v=>v))
  }

  get$<K extends keyof typeof InPersonHudSettings>(key: K): (typeof SETTINGS.live)[K] {
    return this.data[key];
  }
  get<K extends keyof typeof InPersonHudSettings>(key: K): (typeof SETTINGS.live)[K]["value"] {
    return this.data[key].value;
  }
}
