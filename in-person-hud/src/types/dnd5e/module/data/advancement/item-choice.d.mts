export default class ItemChoiceConfigurationData {
    static defineSchema(): {
        hint: any;
        choices: MappingField;
        allowDrops: any;
        type: any;
        pool: any;
        spell: any;
        restriction: any;
    };
}
import { MappingField } from "../fields.mjs";
