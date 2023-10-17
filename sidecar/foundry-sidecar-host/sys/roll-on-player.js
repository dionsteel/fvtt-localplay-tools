const { Subject, tap, concatMap, firstValueFrom } = require("rxjs");
const { getControlledTokens } = require("./lib");

String.prototype.dfmr_replaceAll = function (token, replacement) {
  return this.split(token).join(replacement);
};
const SETTINGS = new Map([
  ["gm", false], //PREF_GM_STATE = "gm";
  ["pc", true], //PREF_PC_STATE = "pc";
  ["flagged", false], //PREF_FLAGGED = "flagged";
  ["toggled", true], //PREF_TOGGLED = "toggled";
  ["roll-type", "always"], //FLAG_ROLL_TYPE = "roll-type";
]);
SETTINGS.MOD_NAME = "foundry-sidecar";

export function getControlled(additionalActorIds = []) {
  const tokens = canvas.tokens.controlled.filter((t) => !!t);
  let actorids = [];
  console.log("controlled tokens:", tokens);
  const tamap = tokens.reduce((actors, token) => {
    const ta = token.actor;
    let aid = ta?.id || ta?._id;
    // actorids
    if (aid) {
      if (!actors[aid]) {
        actors[aid] = { actor: ta, tokens: [] };
      }
      if (!actors[aid].tokens) {
        actors[aid].tokens = [];
      }
      if (!actors[aid].targets) {
        actors[aid].targets = [...game.user.targets.values()].map((v) => v.id || v._id);
      }
      if (!actors[aid].tokens.includes(token)) {
        actors[aid].tokens.push(token);
      }
    }
    return actors;
  }, {});
  const controlledTokenIds = tokens.map((t) => t.id || t._id);
  const controlledActorIds = tamap ? Object.keys(tamap) : actorids;
  controlledActorIds.push(...additionalActorIds);
  return { controlled: { tokens: controlledTokenIds, actors: controlledActorIds }, tokenActorMap: tamap };
}

class PlayerRolls {
  static manualActors = [];
  static enableForActor(id) {
    this.manualActors.push(id);
  }
  static disableForActor(id) {
    let idx = this.manualActors.indexOf(id);
    if (idx > -1) {
      this.manualActors.splice(idx, 1);
    }
  }
  static get flagged() {
    return false;
  }
  static get toggled() {
    return true;
  }
  static setToggled(value) {
    return SETTINGS.set(PlayerRolls.PREF_TOGGLED, value);
  }
  static get toggleable() {
    return false;
    var _a, _b;
    return (
      (((_a = game.user) === null || _a === void 0 ? void 0 : _a.getFlag(SETTINGS.MOD_NAME, PlayerRolls.FLAG_ROLL_TYPE)) ||
        SETTINGS.get(((_b = game.user) === null || _b === void 0 ? void 0 : _b.isGM) ? PlayerRolls.PREF_GM_STATE : PlayerRolls.PREF_PC_STATE)) === "toggle"
    );
  }
  static get shouldRollOnPlayer() {
    return true;
    var _a, _b;
    if ((_a = game.user) === null || _a === void 0 ? void 0 : _a.isGM) {
      (_b = game.canvas.tokens) === null || _b === void 0
        ? void 0
        : _b.controlled
            .filter((t) => {
              var _a;
              return (_a = t.actor) === null || _a === void 0 ? void 0 : _a.hasPlayerOwner;
            })
            .forEach((ct, i, all) => {
              var _a;
              const activeOwners = (_a = ct.combatant) === null || _a === void 0 ? void 0 : _a.players.filter((p) => p.active);
              if (activeOwners && activeOwners.length > 0) {
                return true;
              }
            });
    }
    return false;
  }
  static getSelectedPlayerTokens() {
    var _a;
    return (
      ((_a = game.canvas.tokens) === null || _a === void 0
        ? void 0
        : _a.controlled
            .filter((t) => {
              var _a;
              return (_a = t.actor) === null || _a === void 0 ? void 0 : _a.hasPlayerOwner;
            })
            .map((ct, i, all) => {
              var _a;
              const activeOwners = ((_a = ct.combatant) === null || _a === void 0 ? void 0 : _a.players.filter((p) => p.active)) || [];
              return { token: ct, activeOwners };
            })
            .filter(({ activeOwners, token }) => {
              return ((activeOwners === null || activeOwners === void 0 ? void 0 : activeOwners.length) || 0) > 0;
            })) || []
    );
  }
  static get shouldRollManually() {
    // return true;
    const { controlled } = getControlled();
    return controlled.actors.filter((a) => this.manualActors.includes(a)).length > 0; //map(a=>game.actors.get(a)).filter(a=>a && a.hasPlayerOwner &&);

    var _a, _b;
    const state =
      ((_a = game.user) === null || _a === void 0 ? void 0 : _a.getFlag(SETTINGS.MOD_NAME, PlayerRolls.FLAG_ROLL_TYPE)) ||
      SETTINGS.get(((_b = game.user) === null || _b === void 0 ? void 0 : _b.isGM) ? PlayerRolls.PREF_GM_STATE : PlayerRolls.PREF_PC_STATE);
    return !this.tempDisable && (state === "always" || (state === "toggle" && this.toggled));
  }
  static patch() {
    game.modules.set("foundry-sidecar", {
      active: true,
      esmodules: [],
      compatibility: { verified: "11" },
      flags: [],
      id: "foundry-sidecar",
      scripts: [],
      title: "Foundry Sidecar",
    });
    if (typeof libWrapper !== "undefined") {
      libWrapper.register(SETTINGS.MOD_NAME, "Roll.prototype._evaluate", this._Roll_evaluate, "MIXED");
      libWrapper.register(SETTINGS.MOD_NAME, "DiceTerm.prototype._evaluate", this._DiceTerm_evaluate, "MIXED");
    }
  }
  static unpatch() {
    libWrapper.unregister(SETTINGS.MOD_NAME, "Roll.prototype._identifyTerms", false);
    libWrapper.unregister(SETTINGS.MOD_NAME, "DiceTerm.prototype.roll", false);
  }
  static async _Roll_evaluate(wrapper, { minimize = false, maximize = false } = {}) {
    console.log("_Roll_evaluate", { minimize, maximize }, this);
    const shouldRollOnPlayer = PlayerRolls.shouldRollOnPlayer;
    const shouldRollManually = PlayerRolls.shouldRollManually;
    const shouldSkip = !(shouldRollOnPlayer || shouldRollManually) || minimize || maximize;
    // Ignore Min/Max requests and if we are disabled
    if (shouldSkip) {
      return wrapper({ minimize, maximize });
    }
    let flavor = this.options.flavor;
    let userId = "";
    if (shouldRollOnPlayer) {
      const playerTokens = PlayerRolls.getSelectedPlayerTokens();
      if (playerTokens.length > 0) {
        flavor = `${playerTokens[0].token.name}: ${flavor || ""}`;
        userId = playerTokens[0].activeOwners[0].id || "";
      }
    }
    /****** THIS IS CAPTURED DIRECTLY FROM Roll.prototype._evaluate ******/
    // Step 1 - Replace intermediate terms with evaluated numbers
    const intermediate = [];
    for (const element of this.terms) {
      let term = element;
      if (!(term instanceof RollTerm)) {
        throw new Error("Roll evaluation encountered an invalid term which was not a RollTerm instance");
      }
      if (term.isIntermediate) {
        await term.evaluate({ minimize, maximize, async: true });
        this._dice = this._dice.concat(term.dice);
        term = new NumericTerm({
          number: term.total,
          options: term.options,
        });
      }
      intermediate.push(term);
    }
    this.terms = intermediate;
    // Step 2 - Simplify remaining terms
    this.terms = this.constructor.simplifyTerms(this.terms);
    /****** DF MANUAL ROLLS MODIFICATION ******/
    // @ts-ignore
    const rollPrompt = new RemoteRollPromptProxy(userId, this, flavor ? { title: flavor } : {});

    for (const term of this.terms) {
      if (!(term instanceof DiceTerm)) continue;
      term.rollPrompt = rollPrompt;
    }
    // Step 3 - Evaluate remaining terms
    const promises = [];
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
  static async _DiceTerm_evaluate(wrapper, { minimize = false, maximize = false } = {}) {
    console.log("_DiceTerm_evaluate", { minimize, maximize });
    const rollPrompt = this.rollPrompt;
    // Ignore Min/Max requests, if we are disabled, or if this dice term does not have a bound DFRollPrompt
    if (!PlayerRolls.shouldRollOnPlayer || !rollPrompt || minimize || maximize) return wrapper(minimize, maximize);
    const results = await rollPrompt.requestResult(this);
    for (const x of results) this.results.push({ result: x, active: true });
    this._evaluateModifiers();
    return this;
  }
}
PlayerRolls.PREF_GM_STATE = "gm";
PlayerRolls.PREF_PC_STATE = "pc";
PlayerRolls.PREF_FLAGGED = "flagged";
PlayerRolls.PREF_TOGGLED = "toggled";
PlayerRolls.FLAG_ROLL_TYPE = "roll-type";
PlayerRolls.tempDisable = false;
PlayerRolls.requests = new Subject();

class RemoteRollPromptProxy {
  /**
   *
   * @param {string} userId
   * @param {Roll} object
   * @param {*} options
   */
  constructor(userId, object = {}, options = {}) {
    console.log("RemoteRollProxy.construct", { userId, object, options });
    this.userId = userId;
    this.object = object;
    this.options = options;
    this._nextId = 0;
    this._terms = [];
    this._rolled = false;
    this.roll = object;

    // create socketlib socket
    const tokens = canvas.tokens.controlled.filter((t) => !!t);
    let actorids = [];
    console.log("controlled tokens:", tokens);
    const tamap = tokens.reduce((actors, token) => {
      const ta = token.actor;
      let aid = ta?.id || ta?._id;
      // actorids
      if (aid) {
        if (!actors[aid]) {
          actors[aid] = { actor: ta, tokens: [] };
        }
        if (!actors[aid].tokens) {
          actors[aid].tokens = [];
        }
        if (!actors[aid].targets) {
          actors[aid].targets = [...game.user.targets.values()].map((v) => v.id || v._id);
        }
        if (!actors[aid].tokens.includes(token)) {
          actors[aid].tokens.push(token);
        }
      }
      return actors;
    }, {});
    const controlledTokenIds = tokens.map((t) => t.id || t._id);
    const controlledActorIds = tamap ? Object.keys(tamap) : actorids;
    if (object?.data?.actorId) {
      controlledActorIds.push(object.data.actorId);
    }
    this.controlled = { tokens: controlledTokenIds, actors: controlledActorIds };
    this.actors = tamap;
    console.log("RemoteRollProxy.construct", "finished");
  }

  async render(force, options) {
    if (this._terms.length == 0) return;
    // socketlib render manual roll form on remote
    console.log("RemoteRollProxy.render", "Requesting roll on remote server");
    const result = await requestRemoteRoll(this.getData());
    // return dispatch.reply.pipe(
    //   concatMap(async (r) => {
    //     if (r.success) {
    //       await this.receiveUpdate(new Event("response"), r.formData);
    //     } else {
    //       await this.close();
    //     }
    //     return r.success;
    //   })
    // );
    console.log("RemoteRollProxy.render", "result", result);
    if (result.success) {
      await this.receiveUpdate(new Event("response"), result.formData);
    } else {
      await this.close();
    }
    // return r.success;
  }
  async receiveUpdate(_, formData) {
    console.log("RemoteRollProxy.receiveUpdate", formData);
    for (const x of this._terms) {
      const results = [];
      const total = formData[`${x.id}-total`];
      // If a total input was defined and given, it overrides everything else.
      if (total !== undefined && total !== null) {
        const value = parseInt(total);
        results.push(...RollPrompt.distributeRoll(value, x.term.number));
        if (PlayerRolls.flagged) x.term.options.flavor = (x.term.options.flavor || "") + "[MRT]";
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
            x.term.options.isManualRoll = true;
          }
          results.push(value);
        }
        if (PlayerRolls.flagged && flags.some((x) => x === "MR")) {
          x.term.options.flavor = (x.term.options.flavor || "") + "[" + flags.join(",") + "]";
          x.term.options.isManualRoll = true;
        }
      }
      x.res(results);
    }
    this._rolled = true;
    console.log("RemoteRollProxy.receiveUpdate", "end");
    return undefined;
  }

  async requestResult(term) {
    return new Promise((res, _) => this._terms.push({ id: this._nextId++, res, term }));
  }

  getData(_options) {
    const data = [];
    for (const term of this._terms) {
      const die = term.term;
      for (let c = 0; c < die.number; c++) {
        data.push({
          id: term.id.toString(),
          idx: c,
          faces: c == 0 ? `${die.number}d${die.faces}${die.modifiers.length > 0 ? " [" + die.modifiers.join(",") + "]" : ""}` : "",
          hasTotal: c == 0 && die.modifiers.length == 0 && die.number > 1,
          // term: die,
        });
      }
    }
    return { terms: data, controlled: this.controlled };
  }
  async close(options) {
    console.log("RemoteRollProxy.close", options, "rolled?", this._rolled);

    // If we have not actually rolled anything yet, we need to resolve these with RNG values
    if (!this._rolled) {
      this._rolled = true;
      for (const x of this._terms) {
        const results = [];
        for (let c = 0; c < x.term.number; c++) {
          results.push(Math.ceil(CONFIG.Dice.randomUniform() * x.term.faces));
        }
        x.res(results);
      }
    }
  }
}
RemoteRollPromptProxy.PREF_FOCUS_INPUT = "focus-input";

exports.RemoteRollPromptProxy = RemoteRollPromptProxy;

// async function displayCustomForm(formName, formInput) {
//   const form = new PlayerSlaveForm(formInput, forms[formName].options);
//   const result = Promise.resolve(null); // Put real result fetch here.
//   await (form === null || form === void 0 ? void 0 : form.render());
//   return await result;
// }
/**
 * @typedef TermJSON
 *
 * @property {string} id Term ID
 * @property {number} idx Term Index
 * @property {string} faces Term Dice Faces
 * @property {boolean} hasTotal Has Total?;
 * @property {any} term Dice Term;
 */

/**
 * @param {{terms:TermJSON[],controlled:{actor:string[];token:string[];}}} formInput
 */
function requestRemoteRoll(formInput) {
  console.log("requestRemoteRoll", formInput);
  const reply = new Subject();
  const { terms, controlled } = formInput;
  const dispatch = { event: "rollRequest", data: formInput, reply, controlled };

  console.log("requestRemoteRoll", "dispatch", dispatch);
  PlayerRolls.requests.next(dispatch);
  return firstValueFrom(reply);
  // return await socket.executeAsUser("displayCustomForm", userId, formName, formInput);
}

// class PlayerSlaveForm extends FormApplication {
//   constructor(
//     // private onUpdate: AnyFunction,
//     object,
//     options
//   ) {
//     super(object, options);
//     this._resolved = false;
//     this.onUpdate = () => {};
//   }
//   _updateObject(event, formData) {
//     this._resolved = true;
//     return this.onUpdate({ success: true, formData });
//   }
//   async _render(force, options) {
//     var _a;
//     await super._render(force, options);
//     (_a = this.element.find("input")[0]) === null || _a === void 0 ? void 0 : _a.focus();
//   }
//   async close(options) {
//     if (!this._resolved) {
//       this.onUpdate({ success: false, data: this.object });
//     }
//     return super.close(options);
//   }
// }

// exports.displayCustomForm = displayCustomForm;
exports.displayFormRemotely = requestRemoteRoll;
exports.requestRemoteRoll = requestRemoteRoll;
// exports.PlayerSlaveForm = PlayerSlaveForm;
exports.PlayerRolls = PlayerRolls;
