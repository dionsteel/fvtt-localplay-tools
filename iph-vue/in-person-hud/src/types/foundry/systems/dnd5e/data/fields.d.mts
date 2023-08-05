/**
 * Data field that selects the appropriate advancement data model if available, otherwise defaults to generic
 * `ObjectField` to prevent issues with custom advancement types that aren't currently loaded.
 */
export class AdvancementField {
    /**
     * Get the BaseAdvancement definition for the specified advancement type.
     * @param {string} type                    The Advancement type.
     * @returns {typeof BaseAdvancement|null}  The BaseAdvancement class, or null.
     */
    getModelForType(type: string): typeof BaseAdvancement | null;
    /** @inheritdoc */
    _cleanType(value: any, options: any): any;
    /** @inheritdoc */
    initialize(value: any, model: any, options?: {}): any;
}
/**
 * Data field that automatically selects the Advancement-specific configuration or value data models.
 *
 * @param {Advancement} advancementType  Advancement class to which this field belongs.
 */
export class AdvancementDataField {
    /** @inheritdoc */
    static get _defaults(): any;
    constructor(advancementType: any, options?: {});
    advancementType: any;
    /**
     * Get the DataModel definition for the specified field as defined in metadata.
     * @returns {typeof DataModel|null}  The DataModel class, or null.
     */
    getModel(): typeof DataModel | null;
    /**
     * Get the defaults object for the specified field as defined in metadata.
     * @returns {object}
     */
    getDefaults(): object;
    /** @inheritdoc */
    _cleanType(value: any, options: any): any;
    /** @inheritdoc */
    initialize(value: any, model: any, options?: {}): any;
}
/**
 * @typedef {StringFieldOptions} FormulaFieldOptions
 * @property {boolean} [deterministic=false]  Is this formula not allowed to have dice values?
 */
/**
 * Special case StringField which represents a formula.
 *
 * @param {FormulaFieldOptions} [options={}]  Options which configure the behavior of the field.
 * @property {boolean} deterministic=false    Is this formula not allowed to have dice values?
 */
export class FormulaField {
    /** @inheritdoc */
    static get _defaults(): any;
    /** @inheritdoc */
    _validateType(value: any): void;
}
/**
 * Special case StringField that includes automatic validation for identifiers.
 */
export class IdentifierField {
    /** @override */
    override _validateType(value: any): void;
}
/**
 * @callback MappingFieldInitialValueBuilder
 * @param {string} key       The key within the object where this new value is being generated.
 * @param {*} initial        The generic initial data provided by the contained model.
 * @param {object} existing  Any existing mapping data.
 * @returns {object}         Value to use as default for this key.
 */
/**
 * @typedef {DataFieldOptions} MappingFieldOptions
 * @property {string[]} [initialKeys]       Keys that will be created if no data is provided.
 * @property {MappingFieldInitialValueBuilder} [initialValue]  Function to calculate the initial value for a key.
 * @property {boolean} [initialKeysOnly=false]  Should the keys in the initialized data be limited to the keys provided
 *                                              by `options.initialKeys`?
 */
/**
 * A subclass of ObjectField that represents a mapping of keys to the provided DataField type.
 *
 * @param {DataField} model                    The class of DataField which should be embedded in this field.
 * @param {MappingFieldOptions} [options={}]   Options which configure the behavior of the field.
 * @property {string[]} [initialKeys]          Keys that will be created if no data is provided.
 * @property {MappingFieldInitialValueBuilder} [initialValue]  Function to calculate the initial value for a key.
 * @property {boolean} [initialKeysOnly=false]  Should the keys in the initialized data be limited to the keys provided
 *                                              by `options.initialKeys`?
 */
export class MappingField {
    /** @inheritdoc */
    static get _defaults(): any;
    constructor(model: any, options: any);
    /**
     * The embedded DataField definition which is contained in this field.
     * @type {DataField}
     */
    model: DataField;
    /** @inheritdoc */
    _cleanType(value: any, options: any): any;
    /** @inheritdoc */
    getInitialValue(data: any): any;
    /**
     * Get the initial value for the provided key.
     * @param {string} key       Key within the object being built.
     * @param {object} [object]  Any existing mapping data.
     * @returns {*}              Initial value based on provided field type.
     */
    _getInitialValueForKey(key: string, object?: object): any;
    /** @override */
    override _validateType(value: any, options?: {}): void;
    /**
     * Validate each value of the object.
     * @param {object} value     The object to validate.
     * @param {object} options   Validation options.
     * @returns {Object<Error>}  An object of value-specific errors by key.
     */
    _validateValues(value: object, options: object): any;
    /** @override */
    override initialize(value: any, model: any, options?: {}): any;
    /** @inheritdoc */
    _getField(path: any): any;
}
export type FormulaFieldOptions = StringFieldOptions;
export type MappingFieldInitialValueBuilder = (key: string, initial: any, existing: object) => object;
export type MappingFieldOptions = DataFieldOptions;
