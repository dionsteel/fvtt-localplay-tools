import { ref } from "vue";

export class SETTINGS {
  static _state = ref({
    seat1Actor: ["12345"],
    seat2Actor: ["12346"],
    seat3Actor: ["12347"],
    seat4Actor: ["12348"],
    seat5Actor: ["12349"],
  } as Record<string, any>);
  static MODULE_NAME: string = "in-person-hud";
  static init(moduleName: string) {
    this.MODULE_NAME = moduleName;
  }
  static get<T>(key: string): T {
    return game.settings.get(this.MODULE_NAME, key) as T;
  }
  static set<T>(key: string, value: T) {
    // this._state.value[key] = value;
    return game.settings.set(this.MODULE_NAME, key, value);
  }
  static register<T>(
    key: string,
    options: SettingRegistration<Record<string, T>>
  ) {
    options.onChange = (choice) => {
      this._state.value[key] = this.get(key);
    };

    game.settings.register(this.MODULE_NAME, key, options);
    this._state.value[key] = this.get(key);
  }
  static registerMenu<T>(key: string, options: SettingSubmenuConfig) {
    game.settings.registerMenu(this.MODULE_NAME, key, options);
  }
}

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
export class SeatMappingForm extends FormApplication {
  seat1Enabled: boolean = true;
  seat1Actors: Actor[] = (SETTINGS.get<string[]>("seat1Actor") || [])
    .map((id) => (game?.actors as any)?.get(id))
    .filter((i) => !!i && i != null && typeof i !== "undefined");
  seat2Enabled: boolean = true;
  seat2Actors: Actor[] = (SETTINGS.get<string[]>("seat2Actor") || [])
    .map((id) => (game.actors as any).get(id))
    .filter((i) => i);
  seat3Enabled: boolean = true;
  seat3Actors: Actor[] = (SETTINGS.get<string[]>("seat3Actor") || [])
    .map((id) => (game.actors as any).get(id))
    .filter((i) => i);
  seat4Enabled: boolean = true;
  seat4Actors: Actor[] = (SETTINGS.get<string[]>("seat4Actor") || [])
    .map((id) => (game.actors as any).get(id))
    .filter((i) => i);
  seat5Enabled: boolean = true;
  seat5Actors: Actor[] = (SETTINGS.get<string[]>("seat5Actor") || [])
    .map((id) => (game.actors as any).get(id))
    .filter((i) => i);
  protected override async _updateObject(
    event: Event,
    formData: Record<string, boolean | string[]>
  ): Promise<SeatMappingConfig> {
    console.log("update settings", event, formData);
    let out: Partial<SeatMappingConfig> = {};
    for (let k in formData) {
      let t = formData[k];
      let path = k.split(/./g);
      let seclst: any = path
        .slice(0, -1)
        .reduce((a: any, p: string) => (a[p] = a[p] || {}), out as any);
      seclst[path[path.length - 1]] = t;
    }
    SETTINGS.set("seat1Actor", formData["seat1Actors"]);
    SETTINGS.set("seat2Actor", formData["seat2Actors"]);
    SETTINGS.set("seat3Actor", formData["seat3Actors"]);
    SETTINGS.set("seat4Actor", formData["seat4Actors"]);
    SETTINGS.set("seat5Actor", formData["seat5Actors"]);

    return out as SeatMappingConfig;
  }

  static override get defaultOptions(): FormApplicationOptions {
    return mergeObject(super.defaultOptions, {
      closeOnSubmit: true,
      editable: true,
      template: "modules/in-person-hud/templates/seat-mapping.hbs",
      width: 600,
      height: 600,
      minimizable: false,
      resizable: true,
      title: "Map Actors to Player Seats",
      id: "SeatMappingSettings",
    });
  }

  override getData(options?: Partial<FormApplicationOptions>) {
    const pc_actors = (game.actors as Actors<Actor>).filter(
      (a: Actor) =>
        a.hasPlayerOwner &&
        ![
          ...this.seat1Actors,
          ...this.seat2Actors,
          ...this.seat3Actors,
          ...this.seat4Actors,
          ...this.seat5Actors,
        ]
          .map((a: Actor) => a.id)
          .includes(a.id)
      // a.document.getUserLevel(game.users.get(SETTINGS.get("tablePlayerUserId"))) >= CONST.DOCUMENT_PERMISSION_LEVELS.OBSERVER
    );

    return {
      options,
      title: "Seat Actor Mapping",
      seatIdx: [1, 2, 3, 4, 5],
      pc_actors,
      seat1Enabled: this.seat1Enabled,
      seat1Actors: this.seat1Actors,
      seat2Enabled: this.seat2Enabled,
      seat2Actors: this.seat2Actors,
      seat3Enabled: this.seat3Enabled,
      seat3Actors: this.seat3Actors,
      seat4Enabled: this.seat4Enabled,
      seat4Actors: this.seat4Actors,
      seat5Enabled: this.seat5Enabled,
      seat5Actors: this.seat5Actors,
    };
  }

  static registerSettings() {}
}

export function registerSettings() {
  SETTINGS.register("seat1Actor", {
    default: [],
    name: "Seat 1 Actors",
    type: Array,
    config: false,
    scope: "world",
  });
  SETTINGS.register("seat2Actor", {
    default: [],
    name: "Seat 2 Actors",
    type: Array,
    config: false,
    scope: "world",
  });
  SETTINGS.register("seat3Actor", {
    default: [],
    name: "Seat 3 Actors",
    type: Array,
    config: false,
    scope: "world",
  });
  SETTINGS.register("seat4Actor", {
    default: [],
    name: "Seat 4 Actors",
    type: Array,
    config: false,
    scope: "world",
  });
  SETTINGS.register("seat5Actor", {
    default: [],
    name: "Seat 5 Actors",
    type: Array,
    config: false,
    scope: "world",
  });
  SETTINGS.register("tablePlayerId", {
    name: "Table Player Id",
    type: String,
    config: true,
    choices: {},
    scope: "world",
    default: "",
  });
  Hooks.once("ready", () => {
    game.settings.settings.get("in-person-hud.tablePlayerId").choices =
      Object.fromEntries(
        game?.users?.map((u: User) => [u.id, u._source.name]) || {}
      );
  });
  // SETTINGS.registerMenu('seatmap', {label:"Seat Mappings", hint:"Seat Mappings", icon:''})

  SETTINGS.registerMenu("seatActorMapping", {
    label: "Seat to Character Mapping",
    hint: "",
    icon: "fa fa-map",
    name: "Seat to Character Mapping",
    type: SeatMappingForm,
    restricted: true,
  });
}

export function registerKeybindings() {}
