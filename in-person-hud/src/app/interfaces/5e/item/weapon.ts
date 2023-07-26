export interface IWeapon5e extends IItem5e {
  weaponType: string; //   Weapon category as defined in `DND5E.weaponTypes`.
  baseItem: string; //     Base weapon as defined in `DND5E.weaponIds` for determining proficiency.
  properties: object; //   Mapping of various weapon property booleans.
  proficient: boolean; //  Does the weapon's owner have proficiency?
}
