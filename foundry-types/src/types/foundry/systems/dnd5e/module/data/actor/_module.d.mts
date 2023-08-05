export { default as AttributesFields } from "./templates/attributes";
export { default as CommonTemplate } from "./templates/common";
export { default as CreatureTemplate } from "./templates/creature";
export { default as DetailsFields } from "./templates/details";
export { default as TraitsFields } from "./templates/traits";
export namespace config {
    export { CharacterData as character };
    export { GroupData as group };
    export { NPCData as npc };
    export { VehicleData as vehicle };
}
import CharacterData from "./character";
import GroupData from "./group";
import NPCData from "./npc";
import VehicleData from "./vehicle";
export { CharacterData, GroupData, NPCData, VehicleData };
