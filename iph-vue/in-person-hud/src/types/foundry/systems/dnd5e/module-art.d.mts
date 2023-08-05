/**
 * @typedef {object} ModuleArtInfo
 * @property {string} actor         The path to the actor's portrait image.
 * @property {string|object} token  The path to the token image, or a richer object specifying additional token
 *                                  adjustments.
 */
/**
 * A class responsible for managing module-provided art in compendia.
 */
export class ModuleArt {
    /**
     * If a module provides art, return the path to is JSON mapping.
     * @param {Module} module  The module.
     * @returns {string|null}
     */
    static getModuleArtPath(module: Module): string | null;
    /**
     * Set to true to temporarily prevent actors from loading module art.
     * @type {boolean}
     */
    suppressArt: boolean;
    /**
     * Register any art mapping information included in active modules.
     * @returns {Promise<void>}
     */
    registerModuleArt(): Promise<void>;
    #private;
}
/**
 * A class responsible for allowing GMs to configure art provided by installed modules.
 */
export class ModuleArtConfig {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /** @inheritdoc */
    constructor(object?: {}, options?: {});
    /** @inheritdoc */
    getData(options?: {}): any;
    /** @inheritdoc */
    _updateObject(event: any, formData: any): Promise<any>;
}
export type ModuleArtInfo = {
    /**
     * The path to the actor's portrait image.
     */
    actor: string;
    /**
     * The path to the token image, or a richer object specifying additional token
     * adjustments.
     */
    token: string | object;
};
