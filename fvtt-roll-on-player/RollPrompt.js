import PlayerRolls from "./PlayerRolls";
import SETTINGS from "./Settings";
class RollPrompt extends FormApplication {
    constructor() {
        super(...arguments);
        this._nextId = 0;
        this._terms = [];
        this._rolled = false;
    }
    static get focusInput() {
        return SETTINGS.get(RollPrompt.PREF_FOCUS_INPUT);
    }
    static get defaultOptions() {
        return (mergeObject(FormApplication.defaultOptions, {
            title: game.i18n.localize("FVTT_ROLL_ON_PLAYER.Prompt.DefaultTitle"),
            template: `modules/${SETTINGS.MOD_NAME}/templates/roll-prompt.hbs`,
            width: 400,
        }));
    }
    getData(_options) {
        const data = [];
        for (const term of this._terms) {
            const die = term.term;
            for (let c = 0; c < die.number; c++) {
                data.push({
                    id: term.id.toString(),
                    idx: c,
                    faces: c == 0
                        ? `${die.number}d${die.faces}${die.modifiers.length > 0
                            ? " [" + die.modifiers.join(",") + "]"
                            : ""}`
                        : "",
                    hasTotal: c == 0 && die.modifiers.length == 0 && die.number > 1,
                    term: die,
                });
            }
        }
        return { terms: data };
    }
    close(options) {
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
        return super.close(options);
    }
    render(force, options) {
        if (this._terms.length == 0)
            return;
        return super.render(force, options);
    }
    async _render(force, options) {
        await super._render(force, options);
        if (RollPrompt.focusInput)
            this.element.find("input")[0].focus();
    }
    _updateObject(_, formData) {
        for (const x of this._terms) {
            const results = [];
            const total = formData[`${x.id}-total`];
            // If a total input was defined and given, it overrides everything else.
            if (total !== undefined && total !== null) {
                const value = parseInt(total);
                results.push(...RollPrompt.distributeRoll(value, x.term.number));
                if (PlayerRolls.flagged)
                    x.term.options.flavor = (x.term.options.flavor || "") + "[MRT]";
            }
            else {
                const flags = [];
                for (let c = 0; c < x.term.number; c++) {
                    const roll = `${formData[`${x.id}-${c}`]}`;
                    let value = parseInt(roll);
                    if (isNaN(value)) {
                        value = Math.ceil(CONFIG.Dice.randomUniform() * x.term.faces);
                        flags.push("RN");
                    }
                    else {
                        flags.push("MR");
                        x.term.options.isManualRoll = true;
                    }
                    results.push(value);
                }
                if (PlayerRolls.flagged && flags.some((x) => x === "MR")) {
                    x.term.options.flavor =
                        (x.term.options.flavor || "") + "[" + flags.join(",") + "]";
                    x.term.options.isManualRoll = true;
                }
            }
            x.res(results);
        }
        this._rolled = true;
        return undefined;
    }
    requestResult(term) {
        return new Promise((res, _) => this._terms.push({ id: this._nextId++, res, term }));
    }
    static distributeRoll(total, count) {
        const results = [];
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
RollPrompt.PREF_FOCUS_INPUT = "focus-input";
export default RollPrompt;
