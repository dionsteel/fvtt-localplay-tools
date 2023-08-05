/**
 * A simple form to set skill configuration for a given skill.
 *
 * @param {Actor} actor                 The Actor instance being displayed within the sheet.
 * @param {ApplicationOptions} options  Additional application configuration options.
 * @param {string} skillId              The skill key as defined in CONFIG.DND5E.skills.
 * @deprecated since dnd5e 2.2, targeted for removal in 2.4
 */
declare class ActorSkillConfig extends BaseConfigSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    constructor(actor: any, options: any, skillId: any);
    _skillId: any;
    /** @inheritdoc */
    get title(): string;
    /** @inheritdoc */
    getData(options: any): {
        abilities: any;
        skill: any;
        skillId: any;
        proficiencyLevels: any;
        bonusGlobal: any;
    };
    /** @inheritdoc */
    _updateObject(event: any, formData: any): void;
}
import BaseConfigSheet from "./base-config";
