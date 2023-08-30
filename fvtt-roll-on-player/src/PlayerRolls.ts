import RollPrompt from "./RollPrompt";
import RemoteRollPromptProxy from "./RollPromptRemote";
import SETTINGS from "./Settings";

export default class PlayerRolls {
  static PREF_GM_STATE = "gm";
  static PREF_PC_STATE = "pc";
  static PREF_FLAGGED = "flagged";
  static PREF_TOGGLED = "toggled";
  static FLAG_ROLL_TYPE = "roll-type";

  static get flagged(): boolean {
    return SETTINGS.get(PlayerRolls.PREF_FLAGGED);
  }

  static get toggled(): boolean {
    return SETTINGS.get(PlayerRolls.PREF_TOGGLED);
  }

  static setToggled(value: boolean): Promise<boolean> {
    return SETTINGS.set(PlayerRolls.PREF_TOGGLED, value);
  }
  static get toggleable() {
    return (
      (game.user?.getFlag(SETTINGS.MOD_NAME, PlayerRolls.FLAG_ROLL_TYPE) ||
        SETTINGS.get(
          game.user?.isGM
            ? PlayerRolls.PREF_GM_STATE
            : PlayerRolls.PREF_PC_STATE
        )) === "toggle"
    );
  }

  private static tempDisable = false;

  static get shouldRollOnPlayer() {
    if (game.user?.isGM) {
      const pt = PlayerRolls.getSelectedPlayerTokens();
      return (pt.length >= 1);
    }
    return false;
  }

  static getSelectedPlayerTokens() {
    return game.canvas.tokens?.controlled
      .filter((t) => t.actor?.hasPlayerOwner)
      .map((ct, i, all) => {
        const activeOwners =
          ct.combatant?.players.filter((p) => p.active) || [];
        return { token: ct, activeOwners };
      })
      .filter(({ activeOwners, token }) => {
        return (activeOwners?.length || 0) > 0;
      })||[];
  }

  static get shouldRollManually() {
    const state =
      game.user?.getFlag(SETTINGS.MOD_NAME, PlayerRolls.FLAG_ROLL_TYPE) ||
      SETTINGS.get(
        game.user?.isGM ? PlayerRolls.PREF_GM_STATE : PlayerRolls.PREF_PC_STATE
      );
    return (
      !this.tempDisable &&
      (state === "always" || (state === "toggle" && this.toggled))
    );
  }

  static patch() {
    libWrapper.register(
      SETTINGS.MOD_NAME,
      "Roll.prototype._evaluate",
      this._Roll_evaluate,
      "MIXED"
    );
    libWrapper.register(
      SETTINGS.MOD_NAME,
      "DiceTerm.prototype._evaluate",
      this._DiceTerm_evaluate,
      "MIXED"
    );
  }

  static unpatch() {
    libWrapper.unregister(
      SETTINGS.MOD_NAME,
      "Roll.prototype._identifyTerms",
      false
    );
    libWrapper.unregister(SETTINGS.MOD_NAME, "DiceTerm.prototype.roll", false);
  }

  private static async _Roll_evaluate(
    this: Roll,
    wrapper: (arg: any) => any,
    { minimize = false, maximize = false } = {}
  ): Promise<Roll> {
    const shouldRollOnPlayer = PlayerRolls.shouldRollOnPlayer;
    const shouldRollManually = PlayerRolls.shouldRollManually;
    const shouldSkip =
      !(shouldRollOnPlayer || shouldRollManually) || minimize || maximize;
    // Ignore Min/Max requests and if we are disabled
    if (shouldSkip) {
      return wrapper({ minimize, maximize });
    }
    let flavor = (this.options as any).flavor;
    let userId = "";
    if (shouldRollOnPlayer) {
      const playerTokens = PlayerRolls.getSelectedPlayerTokens();
      if(playerTokens.length>0){
        flavor = `${playerTokens[0].token.name}: ${flavor||''}`;
        userId = playerTokens[0].activeOwners[0].id||'';
      }
    }
    /****** THIS IS CAPTURED DIRECTLY FROM Roll.prototype._evaluate ******/
    // Step 1 - Replace intermediate terms with evaluated numbers
    const intermediate = [];
    for (const element of this.terms) {
      let term: any = element;
      if (!(term instanceof RollTerm)) {
        throw new Error(
          "Roll evaluation encountered an invalid term which was not a RollTerm instance"
        );
      }
      if (term.isIntermediate) {
        await term.evaluate({ minimize, maximize, async: true });
        this._dice = this._dice.concat((<any>term).dice);
        term = new NumericTerm({
          number: <number>term.total,
          options: (<any>term).options,
        });
      }
      intermediate.push(term);
    }
    this.terms = intermediate;

    // Step 2 - Simplify remaining terms
    this.terms = (this.constructor as any).simplifyTerms(this.terms);

    /****** DF MANUAL ROLLS MODIFICATION ******/
    // @ts-ignore

    const rollPrompt = (shouldRollOnPlayer && userId)
      ? new RemoteRollPromptProxy(userId, {}, flavor ? { title: flavor } : {})
      : new RollPrompt({}, flavor ? { title: flavor } : {});

    for (const term of this.terms) {
      if (!(term instanceof DiceTerm)) continue;
      (<any>term).rollPrompt = rollPrompt;
    }

    // Step 3 - Evaluate remaining terms
    const promises: Promise<RollTerm>[] = [];
    for (const term of this.terms) {
      
      // @ts-ignore
      if (term._evaluated) continue;
      promises.push(term.evaluate({ minimize, maximize, async: true }));
    }
    await rollPrompt.render(true);
    await Promise.all(promises);
    /************ END MODIFICATION ************/

    // Step 4 - Evaluate the final expression
    this._total = this._evaluateTotal();
    return this;
    /****** END OF CAPTURE ******/
  }

  private static async _DiceTerm_evaluate(
    this: DiceTerm,
    wrapper: AnyFunction,
    { minimize = false, maximize = false } = {}
  ): Promise<DiceTerm> {
    const rollPrompt: RollPrompt = (<any>this).rollPrompt;
    // Ignore Min/Max requests, if we are disabled, or if this dice term does not have a bound DFRollPrompt
    if (!PlayerRolls.shouldRollOnPlayer || !rollPrompt || minimize || maximize)
      return wrapper(minimize, maximize);
    const results = await rollPrompt.requestResult(this);
    for (const x of results) this.results.push({ result: x, active: true });
    this._evaluateModifiers();
    return this;
  }
}
