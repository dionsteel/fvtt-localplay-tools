/**
 * A simple form to set save throw configuration for a given ability score.
 *
 * @param {Actor5e} actor               The Actor instance being displayed within the sheet.
 * @param {ApplicationOptions} options  Additional application configuration options.
 * @param {string} abilityId            The ability key as defined in CONFIG.DND5E.abilities.
 */
declare class ActorAbilityConfig extends BaseConfigSheet {
    /** @override */
    static override get defaultOptions(): any;
    constructor(actor: any, options: any, abilityId: any);
    _abilityId: any;
    /** @override */
    override get title(): string;
    /** @override */
    override getData(options: any): {
        ability: any;
        labelSaves: any;
        labelChecks: any;
        abilityId: any;
        proficiencyLevels: {
            0: any;
            1: any;
        };
        bonusGlobalSave: any;
        bonusGlobalCheck: any;
    };
}
import BaseConfigSheet from "./base-config";
