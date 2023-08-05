/**
 * An extension of the base CombatTracker class to provide some 5e-specific functionality.
 * @extends {CombatTracker}
 */
declare class CombatTracker5e {
    /** @inheritdoc */
    _onCombatantControl(event: any): Promise<any>;
}
