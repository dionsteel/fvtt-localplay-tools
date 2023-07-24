/**
 * A template for currently held currencies.
 *
 * @property {object} currency  Object containing currencies as numbers.
 * @mixin
 */
export default class CurrencyTemplate {
    /** @inheritdoc */
    static defineSchema(): {
        currency: MappingField;
    };
}
import { MappingField } from "../fields.mjs";
