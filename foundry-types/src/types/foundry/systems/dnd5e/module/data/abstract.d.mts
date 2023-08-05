/**
 * Data Model variant with some extra methods to support template mix-ins.
 *
 * **Note**: This uses some advanced Javascript techniques that are not necessary for most data models.
 * Please refer to the [advancement data models]{@link BaseAdvancement} for an example of a more typical usage.
 *
 * In template.json, each Actor or Item type can incorporate several templates which are chunks of data that are
 * common across all the types that use them. One way to represent them in the schema for a given Document type is to
 * duplicate schema definitions for the templates and write them directly into the Data Model for the Document type.
 * This works fine for small templates or systems that do not need many Document types but for more complex systems
 * this boilerplate can become prohibitive.
 *
 * Here we have opted to instead create a separate Data Model for each template available. These define their own
 * schemas which are then mixed-in to the final schema for the Document type's Data Model. A Document type Data Model
 * can define its own schema unique to it, and then add templates in direct correspondence to those in template.json
 * via SystemDataModel.mixin.
 */
declare class SystemDataModel {
    /** @inheritdoc */
    static _enableV10Validation: boolean;
    /**
     * System type that this system data model represents (e.g. "character", "npc", "vehicle").
     * @type {string}
     */
    static _systemType: string;
    /**
     * Base templates used for construction.
     * @type {*[]}
     * @private
     */
    private static _schemaTemplates;
    /**
     * A list of properties that should not be mixed-in to the final type.
     * @type {Set<string>}
     * @private
     */
    private static _immiscible;
    /** @inheritdoc */
    static defineSchema(): {};
    /**
     * Merge two schema definitions together as well as possible.
     * @param {DataSchema} a  First schema that forms the basis for the merge. *Will be mutated.*
     * @param {DataSchema} b  Second schema that will be merged in, overwriting any non-mergeable properties.
     * @returns {DataSchema}  Fully merged schema.
     */
    static mergeSchema(a: DataSchema, b: DataSchema): DataSchema;
    /** @inheritdoc */
    static migrateData(source: any): any;
    /**
     * Mix multiple templates with the base type.
     * @param {...*} templates            Template classes to mix.
     * @returns {typeof SystemDataModel}  Final prepared type.
     */
    static mixin(...templates: any[]): typeof SystemDataModel;
    /** @inheritdoc */
    validate(options?: {}): any;
}
