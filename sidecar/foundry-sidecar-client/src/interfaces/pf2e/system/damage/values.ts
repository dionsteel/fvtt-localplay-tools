import { ImageFilePath } from "@/lib/utils";
import { DamageCategory, DamageType } from "./index";
export const PHYSICAL_DAMAGE_TYPES: readonly ["bludgeoning", "piercing", "slashing", "bleed"] = ["bludgeoning", "piercing", "slashing", "bleed"];
// export const ENERGY_DAMAGE_TYPES: readonly ["acid", "cold", "electricity", "fire", "sonic", "force", "positive", "negative"];
// export const ALIGNMENT_DAMAGE_TYPES: readonly ["chaotic", "lawful", "good", "evil"];

const LIFE_ENERGY_DAMAGE_TYPES = ["positive", "negative"] as const;
const ENERGY_DAMAGE_TYPES = ["acid", "cold", "electricity", "fire", "sonic", "force", ...LIFE_ENERGY_DAMAGE_TYPES] as const;
const ALIGNMENT_DAMAGE_TYPES = ["chaotic", "lawful", "good", "evil"] as const;

/** A set of mutually exclusive damage categories */
export const DAMAGE_CATEGORIES_UNIQUE: Set<"precision" | "splash" | "persistent"> = new Set(["persistent", "precision", "splash"] as const);
/** All damage modifications that only affect IWR (like materials) */
export const MATERIAL_DAMAGE_EFFECTS: Set<
  "adamantine" | "darkwood" | "mithral" | "orichalcum" | "silver" | "warpglass" | "cold-iron" | "sisterstone-dusk" | "sisterstone-scarlet"
> = new Set(["adamantine", "cold-iron", "darkwood", "mithral", "orichalcum", "silver", "sisterstone-dusk", "sisterstone-scarlet", "warpglass"] as const);
export const DAMAGE_CATEGORIES: Set<
  | "adamantine"
  | "darkwood"
  | "energy"
  | "mithral"
  | "orichalcum"
  | "physical"
  | "silver"
  | "warpglass"
  | "precision"
  | "splash"
  | "cold-iron"
  | "sisterstone-dusk"
  | "sisterstone-scarlet"
  | "persistent"
  | "alignment"
> = new Set([...DAMAGE_CATEGORIES_UNIQUE, ...MATERIAL_DAMAGE_EFFECTS, "alignment", "energy", "physical"] as const);
/** The standard damage die sizes */
export const DAMAGE_DIE_FACES_TUPLE: readonly ["d4", "d6", "d8", "d10", "d12"] = ["d4", "d6", "d8", "d10", "d12"] as const;
export const DAMAGE_DIE_FACES: Set<"d10" | "d12" | "d4" | "d6" | "d8"> = new Set(DAMAGE_DIE_FACES_TUPLE);
export const DAMAGE_TYPES: Set<
  | "acid"
  | "bleed"
  | "bludgeoning"
  | "chaotic"
  | "cold"
  | "electricity"
  | "evil"
  | "fire"
  | "force"
  | "good"
  | "lawful"
  | "mental"
  | "negative"
  | "piercing"
  | "poison"
  | "positive"
  | "slashing"
  | "sonic"
  | "untyped"
> = new Set([
  "acid",
  "bleed",
  "bludgeoning",
  "chaotic",
  "cold",
  "electricity",
  "evil",
  "fire",
  "force",
  "good",
  "lawful",
  "mental",
  "negative",
  "piercing",
  "poison",
  "positive",
  "slashing",
  "sonic",
  "untyped",
]);
/** Maps damage types to their damage category; these are the immutable base mappings used if there is no override. */
export const BASE_DAMAGE_TYPES_TO_CATEGORIES: Record<DamageType, DamageCategory | null> = {
  bludgeoning: "physical",
  piercing: "physical",
  slashing: "physical",
  bleed: "physical",

  acid: "energy",
  cold: "energy",
  electricity: "energy",
  fire: "energy",
  sonic: "energy",
  positive: "energy",
  negative: "energy",
  force: "energy",

  chaotic: "alignment",
  evil: "alignment",
  good: "alignment",
  lawful: "alignment",

  mental: null,
  poison: null,
  untyped: null,
};
export const DAMAGE_TYPE_ICONS: Record<DamageType, string | null> = {
  bleed: "droplet",
  acid: "vial",
  bludgeoning: "hammer",
  chaotic: "face-zany",
  cold: "snowflake",
  electricity: "bolt",
  evil: "face-angry-horns",
  fire: "fire",
  force: "sparkles",
  good: "face-smile-halo",
  lawful: "scale-balanced",
  mental: "brain",
  negative: "skull",
  piercing: "bow-arrow",
  poison: "spider",
  positive: "sun",
  slashing: "axe",
  sonic: "waveform-lines",
  untyped: null,
};
/** Image map for conditions, currently placed here until we get a new set */
export const PERSISTENT_DAMAGE_IMAGES: Partial<Record<DamageType, ImageFilePath>> = {
  piercing: "systems/pf2e/icons/equipment/weapons/throwing-knife.webp",
  bludgeoning: "systems/pf2e/icons/equipment/weapons/bola.webp",
  slashing: "systems/pf2e/icons/equipment/weapons/scimitar.webp",
  fire: "icons/magic/fire/flame-burning-creature-skeleton.webp",
  acid: "icons/magic/acid/dissolve-arm-flesh.webp",
  cold: "icons/magic/water/ice-snowman.webp",
  electricity: "systems/pf2e/icons/spells/chain-lightning.webp",
  sonic: "systems/pf2e/icons/spells/cry-of-destruction.webp",
  force: "systems/pf2e/icons/spells/magic-missile.webp",
  mental: "systems/pf2e/icons/spells/modify-memory.webp",
  poison: "systems/pf2e/icons/spells/acidic-burst.webp",
  lawful: "systems/pf2e/icons/equipment/adventuring-gear/merchant-scale.webp",
  chaotic: "systems/pf2e/icons/spells/dinosaur-form.webp",
  good: "systems/pf2e/icons/damage/persistent/good.webp",
  evil: "icons/magic/unholy/strike-body-explode-disintegrate.webp",
  positive: "systems/pf2e/icons/spells/moment-of-renewal.webp",
  negative: "systems/pf2e/icons/spells/grim-tendrils.webp",
};
/** Whether and how damage should be included on a critical hit */
export const CRITICAL_INCLUSION: {
  DOUBLE_ON_CRIT: null;
  CRITICAL_ONLY: boolean;
  DONT_DOUBLE_ON_CRIT: boolean;
} = {
  DOUBLE_ON_CRIT: null,
  CRITICAL_ONLY: true,
  DONT_DOUBLE_ON_CRIT: false,
};
// export type {
//   ALIGNMENT_DAMAGE_TYPES,
//   BASE_DAMAGE_TYPES_TO_CATEGORIES,
//   CRITICAL_INCLUSION,
//   DAMAGE_CATEGORIES,
//   DAMAGE_CATEGORIES_UNIQUE,
//   DAMAGE_DIE_FACES,
//   DAMAGE_DIE_FACES_TUPLE,
//   // DAMAGE_TYPE_ICONS,
//   ENERGY_DAMAGE_TYPES,
//   MATERIAL_DAMAGE_EFFECTS,
//   PERSISTENT_DAMAGE_IMAGES,
//   PHYSICAL_DAMAGE_TYPES,
// };
