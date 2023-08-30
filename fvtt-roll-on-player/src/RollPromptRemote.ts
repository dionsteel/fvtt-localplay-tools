import PlayerRolls from "./PlayerRolls";
import SETTINGS from "./Settings";
import { displayFormRemotely } from "./socket";

interface RollPromptData {
  id: number;
  res: AnyFunction;
  term: DiceTerm;
}

interface RenderData {
  id: string;
  idx: number;
  faces: string;
  hasTotal: boolean;
  term: DiceTerm;
  flavor?: string;
}

export default class RemoteRollPromptProxy {
  static readonly PREF_FOCUS_INPUT = "focus-input";

  private _nextId = 0;
  private _terms: RollPromptData[] = [];
  private _rolled = false;

  constructor(public userId: string, public object = {}, public options = {}) {
    // create socketlib socket
  }

  async render(force?: boolean, options?: Application.RenderOptions) {
    if (this._terms.length == 0) return;
    // socketlib render manual roll form on remote
    const result = await displayFormRemotely(
      this.userId,
      "manual_roll",
      this.getData()
    );
    if (result.success) {
      await this.receiveUpdate(new Event("response"), result.formData);
    } else {
      await this.close();
    }
  }

  async receiveUpdate(_: Event, formData: { [key: string]: string | null }) {
    for (const x of this._terms) {
      const results: number[] = [];
      const total = formData[`${x.id}-total`];
      // If a total input was defined and given, it overrides everything else.
      if (total !== undefined && total !== null) {
        const value = parseInt(total);
        results.push(...RollPrompt.distributeRoll(value, x.term.number));
        if (PlayerRolls.flagged)
          x.term.options.flavor = (x.term.options.flavor || "") + "[MRT]";
      } else {
        const flags = [];
        for (let c = 0; c < x.term.number; c++) {
          const roll = `${formData[`${x.id}-${c}`]}`;
          let value = parseInt(roll);
          if (isNaN(value)) {
            value = Math.ceil(CONFIG.Dice.randomUniform() * x.term.faces);
            flags.push("RN");
          } else {
            flags.push("MR");
            (<any>x.term.options).isManualRoll = true;
          }
          results.push(value);
        }
        if (PlayerRolls.flagged && flags.some((x) => x === "MR")) {
          x.term.options.flavor =
            (x.term.options.flavor || "") + "[" + flags.join(",") + "]";
          (<any>x.term.options).isManualRoll = true;
        }
      }
      x.res(results);
    }
    this._rolled = true;
    return undefined as any;
  }

  async requestResult(term: DiceTerm) {
    return new Promise((res, _) =>
      this._terms.push({ id: this._nextId++, res, term })
    );
  }

  getData(_options?: Application.RenderOptions): { terms: RenderData[] } {
    const data: RenderData[] = [];
    for (const term of this._terms) {
      const die = term.term;
      for (let c = 0; c < die.number; c++) {
        data.push({
          id: term.id.toString(),
          idx: c,
          faces:
            c == 0
              ? `${die.number}d${die.faces}${
                  die.modifiers.length > 0
                    ? " [" + die.modifiers.join(",") + "]"
                    : ""
                }`
              : "",
          hasTotal: c == 0 && die.modifiers.length == 0 && die.number > 1,
          term: die,
        });
      }
    }
    return { terms: data };
  }

  async close(options?: FormApplication.CloseOptions) {
    // If we have not actually rolled anything yet, we need to resolve these with RNG values
    if (!this._rolled) {
      this._rolled = true;
      for (const x of this._terms) {
        const results: number[] = [];
        for (let c = 0; c < x.term.number; c++) {
          results.push(Math.ceil(CONFIG.Dice.randomUniform() * x.term.faces));
        }
        x.res(results);
      }
    }
  }
}

export class PlayerRollPrompt extends FormApplication<
  FormApplicationOptions,
  { terms: RenderData[] }
> {
  static readonly PREF_FOCUS_INPUT = "focus-input";
  private _nextId = 0;
  private _terms: RollPromptData[] = [];
  private _rolled = false;

  static get focusInput(): boolean {
    return SETTINGS.get(RollPrompt.PREF_FOCUS_INPUT);
  }
  constructor(o: { terms: RenderData[] }, options: FormApplicationOptions) {
    super(o, options);
  }

  static get defaultOptions(): FormApplicationOptions {
    return <FormApplicationOptions>(
      mergeObject(
        <DeepPartial<FormApplicationOptions>>FormApplication.defaultOptions,
        {
          title: game.i18n.localize("FVTT_ROLL_ON_PLAYER.Prompt.DefaultTitle"),
          template: `modules/${SETTINGS.MOD_NAME}/templates/roll-prompt.hbs`,
          width: 400,
        }
      )
    );
  }

  getData(_options?: Application.RenderOptions): { terms: RenderData[] } {
    const data: RenderData[] = [];
    for (const term of this._terms) {
      const die = term.term;
      for (let c = 0; c < die.number; c++) {
        data.push({
          id: term.id.toString(),
          idx: c,
          faces:
            c == 0
              ? `${term.term.flavor ? term.term.flavor + ": " : ""}${
                  die.number
                }d${die.faces}${
                  die.modifiers.length > 0
                    ? " [" + die.modifiers.join(",") + "]"
                    : ""
                }`
              : "",
          hasTotal: c == 0 && die.modifiers.length == 0 && die.number > 1,
          term: die,
        });
      }
    }
    return { terms: data };
  }

  close(options?: FormApplication.CloseOptions): Promise<void> {
    // If we have not actually rolled anything yet, we need to resolve these with RNG values
    if (!this._rolled) {
      this._rolled = true;
      for (const x of this._terms) {
        const results: number[] = [];
        for (let c = 0; c < x.term.number; c++) {
          results.push(Math.ceil(CONFIG.Dice.randomUniform() * x.term.faces));
        }
        x.res(results);
      }
    }
    return super.close(options);
  }

  render(force?: boolean, options?: Application.RenderOptions) {
    if (this._terms.length == 0) return;
    return super.render(force, options);
  }

  async _render(force?: boolean, options?: Application.RenderOptions) {
    await super._render(force, options);
    if (RollPrompt.focusInput) this.element.find("input")[0].focus();
  }

  protected _updateObject(
    event: Event,
    formData?: object | undefined
  ): Promise<unknown> {
    // send form data by socket.
    return undefined as any;
  }

  requestResult(term: DiceTerm): Promise<number[]> {
    return new Promise((res, _) =>
      this._terms.push({ id: this._nextId++, res, term })
    );
  }

  static distributeRoll(total: number, count: number): number[] {
    const results: number[] = [];
    // If a total input was defined and given, it overrides everything else.
    let base = 0;
    // Append dice with the base average of the total.
    for (let c = 0; c < count - 1; c++) {
      base = Math.ceil(total / (count - results.length));
      total -= base;
      results.push(base);
    }
    results.push(total);
    return results;
  }
}

export class RollPrompt extends FormApplication<
  FormApplicationOptions,
  { terms: RenderData[] }
> {
  static readonly PREF_FOCUS_INPUT = "focus-input";

  private _nextId = 0;
  private _terms: RollPromptData[] = [];
  private _rolled = false;
  constructor(object = {}, options = {}) {
    super(object, options);
  }
  static get focusInput(): boolean {
    return SETTINGS.get(RollPrompt.PREF_FOCUS_INPUT);
  }

  static get defaultOptions(): FormApplicationOptions {
    return <FormApplicationOptions>(
      mergeObject(
        <DeepPartial<FormApplicationOptions>>FormApplication.defaultOptions,
        {
          title: game.i18n.localize("FVTT_ROLL_ON_PLAYER.Prompt.DefaultTitle"),
          template: `modules/${SETTINGS.MOD_NAME}/templates/roll-prompt.hbs`,
          width: 400,
        }
      )
    );
  }

  getData(_options?: Application.RenderOptions): { terms: RenderData[] } {
    const data: RenderData[] = [];
    for (const term of this._terms) {
      const die = term.term;
      for (let c = 0; c < die.number; c++) {
        data.push({
          id: term.id.toString(),
          idx: c,
          faces:
            c == 0
              ? `${die.number}d${die.faces}${
                  die.modifiers.length > 0
                    ? " [" + die.modifiers.join(",") + "]"
                    : ""
                }`
              : "",
          hasTotal: c == 0 && die.modifiers.length == 0 && die.number > 1,
          term: die,
        });
      }
    }
    return { terms: data };
  }

  close(options?: FormApplication.CloseOptions): Promise<void> {
    // If we have not actually rolled anything yet, we need to resolve these with RNG values
    if (!this._rolled) {
      this._rolled = true;
      for (const x of this._terms) {
        const results: number[] = [];
        for (let c = 0; c < x.term.number; c++) {
          results.push(Math.ceil(CONFIG.Dice.randomUniform() * x.term.faces));
        }
        x.res(results);
      }
    }
    return super.close(options);
  }

  render(force?: boolean, options?: Application.RenderOptions) {
    if (this._terms.length == 0) return;
    return super.render(force, options);
  }

  async _render(force?: boolean, options?: Application.RenderOptions) {
    await super._render(force, options);
    if (RollPrompt.focusInput) this.element.find("input")[0].focus();
  }

  protected _updateObject(
    _: Event,
    formData: { [key: string]: string | null }
  ): Promise<unknown> {
    for (const x of this._terms) {
      const results: number[] = [];
      const total = formData[`${x.id}-total`];
      // If a total input was defined and given, it overrides everything else.
      if (total !== undefined && total !== null) {
        const value = parseInt(total);
        results.push(...RollPrompt.distributeRoll(value, x.term.number));
        if (PlayerRolls.flagged)
          x.term.options.flavor = (x.term.options.flavor || "") + "[MRT]";
      } else {
        const flags = [];
        for (let c = 0; c < x.term.number; c++) {
          const roll = `${formData[`${x.id}-${c}`]}`;
          let value = parseInt(roll);
          if (isNaN(value)) {
            value = Math.ceil(CONFIG.Dice.randomUniform() * x.term.faces);
            flags.push("RN");
          } else {
            flags.push("MR");
            (<any>x.term.options).isManualRoll = true;
          }
          results.push(value);
        }
        if (PlayerRolls.flagged && flags.some((x) => x === "MR")) {
          x.term.options.flavor =
            (x.term.options.flavor || "") + "[" + flags.join(",") + "]";
          (<any>x.term.options).isManualRoll = true;
        }
      }
      x.res(results);
    }
    this._rolled = true;
    return undefined as any;
  }

  requestResult(term: DiceTerm): Promise<number[]> {
    return new Promise((res, _) =>
      this._terms.push({ id: this._nextId++, res, term })
    );
  }

  static distributeRoll(total: number, count: number): number[] {
    const results: number[] = [];
    // If a total input was defined and given, it overrides everything else.
    let base = 0;
    // Append dice with the base average of the total.
    for (let c = 0; c < count - 1; c++) {
      base = Math.ceil(total / (count - results.length));
      total -= base;
      results.push(base);
    }
    results.push(total);
    return results;
  }
}
