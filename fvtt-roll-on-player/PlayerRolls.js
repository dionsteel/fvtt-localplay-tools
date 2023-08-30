import RollPrompt from "./RollPrompt";
import RemoteRollPromptProxy from "./RollPromptRemote";
import SETTINGS from "./Settings";
String.prototype.dfmr_replaceAll = function (token, replacement) {
    return this.split(token).join(replacement);
};
class PlayerRolls {
    static get flagged() {
        return true;
    }
    static get toggled() {
        return false;
    }
    static setToggled(value) {
        return SETTINGS.set(PlayerRolls.PREF_TOGGLED, value);
    }
    static get toggleable() {
        var _a, _b;
        return ((((_a = game.user) === null || _a === void 0 ? void 0 : _a.getFlag(SETTINGS.MOD_NAME, PlayerRolls.FLAG_ROLL_TYPE)) ||
            SETTINGS.get(((_b = game.user) === null || _b === void 0 ? void 0 : _b.isGM)
                ? PlayerRolls.PREF_GM_STATE
                : PlayerRolls.PREF_PC_STATE)) === "toggle");
    }
    static get shouldRollOnPlayer() {
        var _a, _b;
        if ((_a = game.user) === null || _a === void 0 ? void 0 : _a.isGM) {
            (_b = game.canvas.tokens) === null || _b === void 0 ? void 0 : _b.controlled.filter((t) => { var _a; return (_a = t.actor) === null || _a === void 0 ? void 0 : _a.hasPlayerOwner; }).forEach((ct, i, all) => {
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
        return ((_a = game.canvas.tokens) === null || _a === void 0 ? void 0 : _a.controlled.filter((t) => { var _a; return (_a = t.actor) === null || _a === void 0 ? void 0 : _a.hasPlayerOwner; }).map((ct, i, all) => {
            var _a;
            const activeOwners = ((_a = ct.combatant) === null || _a === void 0 ? void 0 : _a.players.filter((p) => p.active)) || [];
            return { token: ct, activeOwners };
        }).filter(({ activeOwners, token }) => {
            return ((activeOwners === null || activeOwners === void 0 ? void 0 : activeOwners.length) || 0) > 0;
        })) || [];
    }
    static get shouldRollManually() {
        var _a, _b;
        const state = ((_a = game.user) === null || _a === void 0 ? void 0 : _a.getFlag(SETTINGS.MOD_NAME, PlayerRolls.FLAG_ROLL_TYPE)) ||
            SETTINGS.get(((_b = game.user) === null || _b === void 0 ? void 0 : _b.isGM) ? PlayerRolls.PREF_GM_STATE : PlayerRolls.PREF_PC_STATE);
        return (!this.tempDisable &&
            (state === "always" || (state === "toggle" && this.toggled)));
    }
    static patch() {
        libWrapper.register(SETTINGS.MOD_NAME, "Roll.prototype._evaluate", this._Roll_evaluate, "MIXED");
        libWrapper.register(SETTINGS.MOD_NAME, "DiceTerm.prototype._evaluate", this._DiceTerm_evaluate, "MIXED");
    }
    static unpatch() {
        libWrapper.unregister(SETTINGS.MOD_NAME, "Roll.prototype._identifyTerms", false);
        libWrapper.unregister(SETTINGS.MOD_NAME, "DiceTerm.prototype.roll", false);
    }
    static async _Roll_evaluate(wrapper, { minimize = false, maximize = false } = {}) {
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
                flavor = `${playerTokens[0].token.name}: ${flavor || ''}`;
                userId = playerTokens[0].activeOwners[0].id || '';
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
        const rollPrompt = (shouldRollOnPlayer && userId)
            ? new RemoteRollPromptProxy(userId, {}, flavor ? { title: flavor } : {})
            : new RollPrompt({}, flavor ? { title: flavor } : {});
        for (const term of this.terms) {
            if (!(term instanceof DiceTerm))
                continue;
            term.rollPrompt = rollPrompt;
        }
        // Step 3 - Evaluate remaining terms
        const promises = [];
        for (const term of this.terms) {
            // @ts-ignore
            if (term._evaluated)
                continue;
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
        const rollPrompt = this.rollPrompt;
        // Ignore Min/Max requests, if we are disabled, or if this dice term does not have a bound DFRollPrompt
        if (!PlayerRolls.shouldRollOnPlayer || !rollPrompt || minimize || maximize)
            return wrapper(minimize, maximize);
        const results = await rollPrompt.requestResult(this);
        for (const x of results)
            this.results.push({ result: x, active: true });
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
export default PlayerRolls;
