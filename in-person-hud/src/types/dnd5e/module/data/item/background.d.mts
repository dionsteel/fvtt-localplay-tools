/**
 * Data definition for Background items.
 * @mixes ItemDescriptionTemplate
 *
 * @property {object[]} advancement  Advancement objects for this background.
 */
export default class BackgroundData extends SystemDataModel {
    /** @inheritdoc */
    static defineSchema(): DataSchema;
}
import SystemDataModel from "../abstract.mjs";
