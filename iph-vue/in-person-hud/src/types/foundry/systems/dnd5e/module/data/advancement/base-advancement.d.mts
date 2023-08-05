declare class BaseAdvancement {
    /**
     * Name of this advancement type that will be stored in config and used for lookups.
     * @type {string}
     * @protected
     */
    protected static get typeName(): string;
    static defineSchema(): {
        _id: any;
        type: any;
        configuration: AdvancementDataField;
        value: AdvancementDataField;
        level: any;
        title: any;
        icon: any;
        classRestriction: any;
    };
    /** @inheritdoc */
    toObject(source?: boolean): any;
}
import { AdvancementDataField } from "../fields";
