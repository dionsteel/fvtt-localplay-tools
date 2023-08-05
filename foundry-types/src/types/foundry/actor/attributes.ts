/**
 * Fields shared between characters, NPCs, and vehicles.
 *
 * @type {object}
 */
export interface InitiativeScore {
  value: number; //    Calculated initiative modifier.
  bonus: number; //    Fixed bonus provided to initiative rolls.
}
export interface ActorMovement {
  burrow: number; //     Actor burrowing speed.
  climb: number; //     Actor climbing speed.
  fly: number; //     Actor flying speed.
  swim: number; //     Actor swimming speed.
  walk: number; //     Actor walking speed.
  units: string; //     Movement used to measure the various speeds.
  hover: boolean; //    Is this flying creature able to hover in place.
}
export interface Ablilities {
  str: AbilityData;
  dex: AbilityData;
  con: AbilityData;
  int: AbilityData;
  wis: AbilityData;
  cha: AbilityData;
}

export interface CommonAttributes {
  name: string;
  init: InitiativeScore;
  movement: ActorMovement;
}

export interface CreatureAttributes extends CommonAttributes {
  attunement: AttunementDetails;
  senses: CreatureSenses;
  spellcasting: string; //  Primary spellcasting ability.
}
export interface NPCAttributes extends CreatureAttributes {
  ac: ArmourClassDetails;
  hp: NPCHPDetails;
}
export interface VehicleAttributes extends CommonAttributes {
  ac: VehicleArmourClassDetails;
  hp: VehicleHPDetails;
  actions: VehicleActions; // Information on how the vehicle performs actions.
  //  Information on the vehicle's carrying capacity.
  capacity: {
    creature: number; //  Description of the number of creatures the vehicle can carry.
    cargo: number; //  Cargo carrying capacity measured in tons.
  };
}

export interface CharacterAttributes extends CreatureAttributes {
  ac: ArmourClassDetails;
  hp: HPDetails;
  death: DeathSaveDetails;
  exhaustion: number;
  inspiration: number;
  details: CharacterDetails;
  traits: CharacterTraits;
}

export interface AttunementDetails {
  max: number; //  Maximum number of attuned items.
}
export interface CreatureSenses {
  darkvision: number; //  Creature's darkvision range.
  blindsight: number; //  Creature's blindsight range.
  tremorsense: number; //  Creature's tremorsense range.
  truesight: number; //  Creature's truesight range.
  units: string; //  Distance units used to measure senses.
  special: string; //  Description of any special senses or restrictions.
}

/**
 * Data on configuration of a specific spell slot.
 */
export type SpellSlotData = {
  /**
   * Currently available spell slots.
   */
  value: number;
  /**
   * Number to replace auto-calculated max slots.
   */
  override: number;
};

/**
 * Data structure for actor's attack bonuses.
 */
export type AttackBonusesData = {
  /**
   * Numeric or dice bonus to attack rolls.
   */
  attack: string;
  /**
   * Numeric or dice bonus to damage rolls.
   */
  damage: string;
};

export type SkillData = {
  /**
   * Proficiency level creature has in this skill.
   */
  value: number;
  /**
   * Default ability used for this skill.
   */
  ability: string;
  /**
   * Bonuses for this skill.
   */
  bonuses: {
    check: string;
    passive: string;
  };
};

export interface ArmourClassDetails {
  flat: number; //                  Flat value used for flat or natural armor calculation.
  calc: string; //                  Name of one of the built-in formulas to use.
  formula: string; //               Custom formula to use.
}

export interface VehicleArmourClassDetails extends ArmourClassDetails {
  motionless: string;
}

export interface HPBonus {
  level: number;
  overall: number;
}

export interface HPDetails {
  value: number; // Current hit points.
  max: number; // Maximum allowed HP value.
  temp: number; // Temporary HP applied on top of value.
  tempmax: number; // Temporary change to maximum HP
  bonuses: HPBonus;
}

export interface NPCHPDetails extends HPDetails {
  formula: string;
}

export interface VehicleHPDetails extends HPDetails {
  dt: number; // Damage threshold.
  mt: number; // Mishap threshold.
}

export interface DeathSaveDetails {
  success: number;
  failure: number;
}

export interface CommonDetails {
  biography: BiographyData; // Actor's biography data.
}

export interface BiographyData {
  value: string; //  Full HTML biography information.
  public: string; //  Biography that will be displayed to players with observer privileges.
}

export interface CreatureDetails extends CommonDetails {
  alignment: string; //  Creature's alignment.
  race: string; //  Creature's race.
}

export interface NPCDetails extends CreatureDetails {
  type: TypeData;
  environment: string;
  cr: number;
  spellLevel: number;
  source: string;
}

export interface CharacterDetails extends CreatureDetails {
  background: string; // Name of character's background.
  originalClass: string; // ID of first class taken by character.
  xp: CharacterXPDetails; // Experience points gained.
  appearance: string; // Description of character's appearance.
  trait: string; // Character's personality traits.
  ideal: string; // Character's ideals.
  bond: string; // Character's bonds.
  flaw: string; // Character's flaws.
}

export interface TypeData {
  value: string;
  subtype: string;
  swarm: string;
  custom: string;
}

export interface CharacterXPDetails {
  value: number; // Total experience points earned.
}

export interface NPCResources {
  legact: { value: number; max: number };
  legres: { value: number; max: number };
  lair: { value: number; initiative: number };
}
export interface CharacterResources {
  primary: ResourceData; //  Resource number one.
  secondary: ResourceData; //  Resource number two.
  tertiary: ResourceData; //  Resource number three.
}
/**
 * Data structure for character's resources.
 */
export type ResourceData = {
  /**
   * Available uses of this resource.
   */
  value: number;
  /**
   * Maximum allowed uses of this resource.
   */
  max: number;
  /**
   * Does this resource recover on a short rest?
   */
  sr: boolean;
  /**
   * Does this resource recover on a long rest?
   */
  lr: boolean;
  /**
   * Displayed name.
   */
  label: string;
};
export type AbilityData = {
  /**
   * Ability score.
   */
  value: number;
  /**
   * Proficiency value for saves.
   */
  proficient: number;
  /**
   * Bonuses that modify ability checks and saves.
   */
  bonuses: {
    check: string;
    save: string;
  };
};

export interface VehicleActions {
  //   Does this vehicle rely on action stations that required individual crewing rather than general crew thresholds?
  stations: boolean;
  // Maximum number of actions available with full crewing.
  value: number;
  // Crew thresholds needed to perform various actions.
  thresholds: {
    2: number; // Minimum crew needed to take full action complement.
    1: number; // Minimum crew needed to take reduced action complement.
    0: number; // Minimum crew needed to perform any actions.
  };
}
export interface CreatureBonuses {
  mwak: AttackBonusesData; // Bonuses to melee weapon attacks.
  rwak: AttackBonusesData; // Bonuses to ranged weapon attacks.
  msak: AttackBonusesData; // Bonuses to melee spell attacks.
  rsak: AttackBonusesData; // Bonuses to ranged spell attacks.
  abilities: AbilityBonuses; // Bonuses to ability scores.
  spell: SpellBonuses; // Bonuses to spells.
}

export interface AbilityBonuses {
  check: string; // Numeric or dice bonus to ability checks.
  save: string; // Numeric or dice bonus to ability saves.
  skill: string; // Numeric or dice bonus to skill checks.
}
export interface SpellBonuses {
  dc: string; // Numeric bonus to spellcasting DC.
}

export type PassengerData = {
  /**
   * Name of individual or type of creature.
   */
  name: string;
  /**
   * How many of this creature are onboard?
   */
  quantity: number;
};
export interface VehicleCargo {
  crew: PassengerData[];
  passengers: PassengerData[];
}

export interface SimpleTraitData {
  value: Set<string>; //  Keys for currently selected traits .
  custom: string; //      Semicolon-separated list of custom traits.
}
export interface DamageTraitData extends SimpleTraitData {
  bypasses: Set<string>; //  Keys for physical weapon properties that cause resistances to be bypassed.
}

export interface CommonTraits {
  size: string; //   Actor's size.
  di: DamageTraitData; // Damage immunities.
  dr: DamageTraitData; // Damage resistances.
  dv: DamageTraitData; // Damage vulnerabilities.
  ci: SimpleTraitData; // Condition immunities.
}
export interface CreatureTraits extends CommonTraits {
  languages: SimpleTraitData; // Languages known by this creature.
}
export interface VehicleTraits extends CommonTraits {
  dimensions: SimpleTraitData;
}
export interface CharacterTraits extends CreatureTraits {
  weaponProf: SimpleTraitData;
  armorProf: SimpleTraitData;
}
