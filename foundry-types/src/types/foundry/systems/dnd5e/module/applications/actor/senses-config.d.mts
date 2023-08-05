/**
 * A simple form to configure Actor senses.
 */
declare class ActorSensesConfig extends BaseConfigSheet {
    /** @inheritdoc */
    static get defaultOptions(): any;
    /** @inheritdoc */
    get title(): string;
    /** @inheritdoc */
    getData(options: any): {
        senses: {};
        special: any;
        units: any;
        movementUnits: any;
    };
}
import BaseConfigSheet from "./base-config";
