import { ConfigPF2e } from "../../config";

type EquipmentTrait = keyof ConfigPF2e["PF2E"]["equipmentTraits"];
type OtherEquipmentTag = "implement";
export type { EquipmentTrait, OtherEquipmentTag };
