/**
 * @typedef {FormApplicationOptions} ProficiencyConfigOptions
 * @property {string} key       The ID of the skill or tool being configured.
 * @property {string} property  The property on the actor being configured, either 'skills', or 'tools'.
 */
/**
 * An application responsible for configuring proficiencies and bonuses in tools and skills.
 *
 * @param {Actor5e} actor                     The Actor being configured.
 * @param {ProficiencyConfigOptions} options  Additional configuration options.
 */
export default class ProficiencyConfig extends BaseConfigSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /**
     * Are we configuring a tool?
     * @returns {boolean}
     */
    get isTool(): boolean;
    /**
     * Are we configuring a skill?
     * @returns {boolean}
     */
    get isSkill(): boolean;
    /** @inheritdoc */
    get title(): string;
    /** @inheritdoc */
    get id(): string;
    /** @inheritdoc */
    getData(options?: {}): {
        abilities: any;
        proficiencyLevels: any;
        entry: any;
        isTool: boolean;
        isSkill: boolean;
        key: any;
        property: any;
    };
    /** @inheritdoc */
    _updateObject(event: any, formData: any): Promise<any>;
}
export type ProficiencyConfigOptions = FormApplicationOptions;
import BaseConfigSheet from "./base-config.mjs";
