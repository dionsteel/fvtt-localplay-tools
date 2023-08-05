/**
 * A simple sub-application of the ActorSheet which is used to configure properties related to initiative.
 */
declare class ActorInitiativeConfig extends BaseConfigSheet {
    /** @override */
    static override get defaultOptions(): any;
    /** @override */
    override get title(): string;
    /** @override */
    override getData(options?: {}): {
        ability: any;
        abilities: any;
        bonus: any;
        initiativeAlert: any;
        initiativeAdv: any;
    };
    /** @inheritDoc */
    _getSubmitData(updateData?: {}): any;
}
import BaseConfigSheet from "./base-config";
