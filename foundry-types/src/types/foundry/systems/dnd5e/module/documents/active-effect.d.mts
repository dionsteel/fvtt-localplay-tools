/**
 * Extend the base ActiveEffect class to implement system-specific logic.
 */
declare class ActiveEffect5e {
    /**
     * Manage Active Effect instances through the Actor Sheet via effect control buttons.
     * @param {MouseEvent} event      The left-click event on the effect control
     * @param {Actor5e|Item5e} owner  The owning document which manages this effect
     * @returns {Promise|null}        Promise that resolves when the changes are complete.
     */
    static onManageActiveEffect(event: MouseEvent, owner: Actor5e | Item5e): Promise<any> | null;
    /**
     * Prepare the data structure for Active Effects which are currently applied to an Actor or Item.
     * @param {ActiveEffect5e[]} effects  The array of Active Effect instances to prepare sheet data for
     * @returns {object}                  Data for rendering
     */
    static prepareActiveEffectCategories(effects: ActiveEffect5e[]): object;
    /**
     * Is this active effect currently suppressed?
     * @type {boolean}
     */
    isSuppressed: boolean;
    /** @inheritdoc */
    apply(actor: any, change: any): any;
    /** @inheritdoc */
    _applyAdd(actor: any, change: any, current: any, delta: any, changes: any): void;
    /** @inheritdoc */
    _applyOverride(actor: any, change: any, current: any, delta: any, changes: any): any;
    /**
     * Transform the data type of the change to match the type expected for flags.
     * @param {Actor5e} actor            The Actor to whom this effect should be applied.
     * @param {EffectChangeData} change  The change being applied.
     * @returns {EffectChangeData}       The change with altered types if necessary.
     */
    _prepareFlagChange(actor: Actor5e, change: EffectChangeData): EffectChangeData;
    /**
     * Determine whether this Active Effect is suppressed or not.
     */
    determineSuppression(): void;
}
