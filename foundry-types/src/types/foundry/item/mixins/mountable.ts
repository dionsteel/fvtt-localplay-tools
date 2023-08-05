export interface EquipmentArmour {
  value: number; //  Armor class value for equipment.
}
export interface EquipmentHPDetails {
  value: number; //  Current hit point value.
  max: number; //  Max hit points.
  dt: number; //  Damage threshold.
  conditions: string; //  Conditions that are triggered when this equipment takes damage.
}

/** Data model template for equipment that can be mounted on a vehicle. */
export interface MountableEquipment {
  armor: EquipmentArmour; //  Equipment's armor class.
  hp: EquipmentHPDetails; //  Equipment's hit points.
}
