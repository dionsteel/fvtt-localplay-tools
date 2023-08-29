import { CharacterPF2e, FamiliarPF2e, HazardPF2e, LootPF2e, NPCPF2e, PartyPF2e, VehiclePF2e } from "../actor";
import { SenseAcuity, SenseType } from "../actor/creature/sense";
import { Alignment } from "../actor/creature/index";
import { ActorType } from "../actor/data/index";
import { AttributeString } from "../actor/types";
import {
  // AbilityItemPF2e,
  AfflictionPF2e,
  AncestryPF2e,
  ArmorPF2e,
  BackgroundPF2e,
  BookPF2e,
  CampaignFeaturePF2e,
  ClassPF2e,
  ConditionPF2e,
  ConsumablePF2e,
  ContainerPF2e,
  DeityPF2e,
  EffectPF2e,
  EquipmentPF2e,
  FeatPF2e,
  HeritagePF2e,
  KitPF2e,
  LorePF2e,
  MeleePF2e,
  SpellPF2e,
  SpellcastingEntryPF2e,
  TreasurePF2e,
  WeaponPF2e,
} from "../item";
import { ConditionSlug } from "../item/condition/index";
import { DeityDomain } from "../item/deity/index";
import { FeatCategory } from "../item/feat/index";
import { WEAPON_PROPERTY_RUNES } from "../item/physical/runes";
import { PreciousMaterialGrade } from "../item/physical/index";
import { MeleeWeaponGroup, WeaponGroup, WeaponPropertyRuneType, WeaponReloadTime } from "../item/weapon/index";
import { Size } from "../";
// import { JournalSheetPF2e } from "../module/journal-entry/sheet.ts";
// import { configFromLocalization, sluggify } from "../util";
import { damageCategories, damageRollFlavors, damageTypes, materialDamageEffects } from "./damage";
import { immunityTypes, resistanceTypes, weaknessTypes } from "./iwr";
import {
  actionTraits,
  alignmentTraits,
  ancestryItemTraits,
  ancestryTraits,
  armorTraits,
  classTraits,
  consumableTraits,
  creatureTraits,
  damageTraits,
  equipmentTraits,
  featTraits,
  hazardTraits,
  kingmakerTraits,
  magicSchools,
  magicTraditions,
  npcAttackTraits,
  otherArmorTags,
  otherConsumableTags,
  otherWeaponTags,
  preciousMaterials,
  spellOtherTraits,
  spellTraits,
  traitDescriptions,
  vehicleTraits,
  weaponTraits,
} from "./traits";

export type StatusEffectIconTheme = "default" | "blackWhite";

export const actorTypes: Record<ActorType, string> = {
  character: "TYPES.Actor.character",
  familiar: "TYPES.Actor.familiar",
  hazard: "TYPES.Actor.hazard",
  loot: "TYPES.Actor.loot",
  npc: "TYPES.Actor.npc",
  party: "TYPES.Actor.party",
  vehicle: "TYPES.Actor.vehicle",
};

export const abilities: Record<AttributeString, string> = {
  str: "PF2E.AbilityStr",
  dex: "PF2E.AbilityDex",
  con: "PF2E.AbilityCon",
  int: "PF2E.AbilityInt",
  wis: "PF2E.AbilityWis",
  cha: "PF2E.AbilityCha",
};

// Senses
export const senses: Record<SenseType, string> = {
  darkvision: "PF2E.Actor.Creature.Sense.Type.Darkvision",
  echolocation: "PF2E.Actor.Creature.Sense.Type.Echolocation",
  greaterDarkvision: "PF2E.Actor.Creature.Sense.Type.GreaterDarkvision",
  heatsight: "PF2E.Actor.Creature.Sense.Type.Heatsight",
  lifesense: "PF2E.Actor.Creature.Sense.Type.Lifesense",
  lowLightVision: "PF2E.Actor.Creature.Sense.Type.LowLightVision",
  motionsense: "PF2E.Actor.Creature.Sense.Type.Motionsense",
  scent: "PF2E.Actor.Creature.Sense.Type.Scent",
  seeInvisibility: "PF2E.Actor.Creature.Sense.Type.SeeInvisibility",
  spiritsense: "PF2E.Actor.Creature.Sense.Type.Spiritsense",
  thoughtsense: "PF2E.Actor.Creature.Sense.Type.Thoughtsense",
  tremorsense: "PF2E.Actor.Creature.Sense.Type.Tremorsense",
  wavesense: "PF2E.Actor.Creature.Sense.Type.Wavesense",
};

// Sense acuity
export const senseAcuity: Record<SenseAcuity, string> = {
  imprecise: "PF2E.Actor.Creature.Sense.Acuity.Imprecise",
  precise: "PF2E.Actor.Creature.Sense.Acuity.Precise",
  vague: "PF2E.Actor.Creature.Sense.Acuity.Vague",
};

export const weaponPropertyRunes = {
  ...Object.entries(WEAPON_PROPERTY_RUNES).reduce(
    (accumulated, [slug, rune]) => {
      return { ...accumulated, [slug]: rune.name };
    },
    {} as Record<WeaponPropertyRuneType, string>
  ),
};

/** Non-detection- and attitude- related conditions added to the Token HUD */
export const tokenHUDConditions = {
  blinded: "PF2E.ConditionTypeBlinded",
  broken: "PF2E.ConditionTypeBroken",
  clumsy: "PF2E.ConditionTypeClumsy",
  concealed: "PF2E.ConditionTypeConcealed",
  confused: "PF2E.ConditionTypeConfused",
  controlled: "PF2E.ConditionTypeControlled",
  dazzled: "PF2E.ConditionTypeDazzled",
  deafened: "PF2E.ConditionTypeDeafened",
  doomed: "PF2E.ConditionTypeDoomed",
  drained: "PF2E.ConditionTypeDrained",
  dying: "PF2E.ConditionTypeDying",
  encumbered: "PF2E.ConditionTypeEncumbered",
  enfeebled: "PF2E.ConditionTypeEnfeebled",
  fascinated: "PF2E.ConditionTypeFascinated",
  fatigued: "PF2E.ConditionTypeFatigued",
  fleeing: "PF2E.ConditionTypeFleeing",
  frightened: "PF2E.ConditionTypeFrightened",
  grabbed: "PF2E.ConditionTypeGrabbed",
  hidden: "PF2E.ConditionTypeHidden",
  immobilized: "PF2E.ConditionTypeImmobilized",
  invisible: "PF2E.ConditionTypeInvisible",
  "off-guard": "PF2E.ConditionTypeOffGuard",
  paralyzed: "PF2E.ConditionTypeParalyzed",
  "persistent-damage": "PF2E.ConditionTypePersistent",
  petrified: "PF2E.ConditionTypePetrified",
  prone: "PF2E.ConditionTypeProne",
  quickened: "PF2E.ConditionTypeQuickened",
  restrained: "PF2E.ConditionTypeRestrained",
  sickened: "PF2E.ConditionTypeSickened",
  slowed: "PF2E.ConditionTypeSlowed",
  stunned: "PF2E.ConditionTypeStunned",
  stupefied: "PF2E.ConditionTypeStupefied",
  unconscious: "PF2E.ConditionTypeUnconscious",
  undetected: "PF2E.ConditionTypeUndetected",
  wounded: "PF2E.ConditionTypeWounded",
};

export const conditionTypes: Record<ConditionSlug, string> = {
  ...tokenHUDConditions,
  friendly: "PF2E.ConditionTypeFriendly",
  helpful: "PF2E.ConditionTypeHelpful",
  hostile: "PF2E.ConditionTypeHostile",
  indifferent: "PF2E.ConditionTypeIndifferent",
  observed: "PF2E.ConditionTypeObserved",
  unfriendly: "PF2E.ConditionTypeUnfriendly",
  unnoticed: "PF2E.ConditionTypeUnnoticed",
};

export const weaponCategories = {
  simple: "PF2E.WeaponTypeSimple",
  martial: "PF2E.WeaponTypeMartial",
  advanced: "PF2E.WeaponTypeAdvanced",
  unarmed: "PF2E.WeaponTypeUnarmed",
}; 

/** Base weapon types that are considered equivalent for all rules purposes */
export const equivalentWeapons = {
  "composite-longbow": "longbow",
  "composite-shortbow": "shortbow",
  "big-boom-gun": "hand-cannon",
  "spoon-gun": "hand-cannon",
} as const;

export const preciousMaterialGrades: Record<PreciousMaterialGrade, string> = {
  low: "PF2E.PreciousMaterialLowGrade",
  standard: "PF2E.PreciousMaterialStandardGrade",
  high: "PF2E.PreciousMaterialHighGrade",
};

export const meleeWeaponGroups: Record<MeleeWeaponGroup, string> = {
  axe: "PF2E.WeaponGroupAxe",
  brawling: "PF2E.WeaponGroupBrawling",
  club: "PF2E.WeaponGroupClub",
  dart: "PF2E.WeaponGroupDart",
  flail: "PF2E.WeaponGroupFlail",
  hammer: "PF2E.WeaponGroupHammer",
  knife: "PF2E.WeaponGroupKnife",
  pick: "PF2E.WeaponGroupPick",
  polearm: "PF2E.WeaponGroupPolearm",
  shield: "PF2E.WeaponGroupShield",
  spear: "PF2E.WeaponGroupSpear",
  sword: "PF2E.WeaponGroupSword",
};

export const weaponGroups: Record<WeaponGroup, string> = {
  ...meleeWeaponGroups,
  bomb: "PF2E.WeaponGroupBomb",
  bow: "PF2E.WeaponGroupBow",
  firearm: "PF2E.WeaponGroupFirearm",
  sling: "PF2E.WeaponGroupSling",
};

// Creature and Equipment Sizes
export const sizeTypes: Record<Size, string> = {
  tiny: "PF2E.ActorSizeTiny",
  sm: "PF2E.ActorSizeSmall",
  med: "PF2E.ActorSizeMedium",
  lg: "PF2E.ActorSizeLarge",
  huge: "PF2E.ActorSizeHuge",
  grg: "PF2E.ActorSizeGargantuan",
};

export const featCategories: Record<FeatCategory, string> = {
  ancestry: "PF2E.FeatTypeAncestry",
  ancestryfeature: "PF2E.FeatTypeAncestryfeature",
  class: "PF2E.FeatTypeClass",
  classfeature: "PF2E.FeatTypeClassfeature",
  skill: "PF2E.FeatTypeSkill",
  general: "PF2E.FeatTypeGeneral",
  bonus: "PF2E.FeatTypeBonus",
  pfsboon: "PF2E.FeatTypePfsboon",
  deityboon: "PF2E.FeatTypeDeityboon",
  curse: "PF2E.FeatTypeCurse",
};

export const alignments: Record<Alignment, string> = {
  LG: "PF2E.AlignmentLG",
  NG: "PF2E.AlignmentNG",
  CG: "PF2E.AlignmentCG",
  LN: "PF2E.AlignmentLN",
  N: "PF2E.AlignmentN",
  CN: "PF2E.AlignmentCN",
  LE: "PF2E.AlignmentLE",
  NE: "PF2E.AlignmentNE",
  CE: "PF2E.AlignmentCE",
};
