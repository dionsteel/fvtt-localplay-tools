/**
 * A simple form to set actor movement speeds.
 */
declare class ActorMovementConfig extends BaseConfigSheet {
    /** @override */
    static override get defaultOptions(): any;
    /** @override */
    override get title(): string;
    /** @override */
    override getData(options?: {}): {
        speeds: {
            land: string;
            water: string;
            air: string;
            walk?: undefined;
            burrow?: undefined;
            climb?: undefined;
            fly?: undefined;
            swim?: undefined;
        } | {
            walk: string;
            burrow: string;
            climb: string;
            fly: string;
            swim: string;
            land?: undefined;
            water?: undefined;
            air?: undefined;
        };
        movement: any;
        selectUnits: boolean;
        canHover: boolean;
        units: any;
    };
}
import BaseConfigSheet from "./base-config";
