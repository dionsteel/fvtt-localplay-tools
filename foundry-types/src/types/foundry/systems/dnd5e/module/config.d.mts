declare DND5E;
/**
 * Configuration data for abilities.
 */
export type AbilityConfiguration = {
    /**
     * Localized label.
     */
    label: string;
    /**
     * Localized abbreviation.
     */
    abbreviation: string;
    /**
     * Whether this is a "physical" or "mental" ability.
     */
    type?: string;
    /**
     * Default values for this ability based on actor type.
     *   If a string is used, the system will attempt to fetch.
     *   the value of the specified ability.
     */
    defaults?: {
        [x: string]: number | string;
    };
};
/**
 * Configuration data for skills.
 */
export type SkillConfiguration = {
    /**
     * Localized label.
     */
    label: string;
    /**
     * Key for the default ability used by this skill.
     */
    ability: string;
};
/**
 * Configuration data for an item with the "feature" type.
 */
export type FeatureTypeConfiguration = {
    /**
     * Localized label for this type.
     */
    label: string;
    /**
     * Enum containing localized labels for subtypes.
     */
    subtypes?: {
        [x: string]: string;
    };
};
export type CurrencyConfiguration = {
    /**
     * Localized label for the currency.
     */
    label: string;
    /**
     * Localized abbreviation for the currency.
     */
    abbreviation: string;
    /**
     * Number by which this currency should be multiplied to arrive at a standard value.
     */
    conversion: number;
};
/**
 * Information needed to represent different area of effect target types.
 */
export type AreaTargetDefinition = {
    /**
     * Localized label for this type.
     */
    label: string;
    /**
     * Type of `MeasuredTemplate` create for this target type.
     */
    template: string;
};
/**
 * Configuration data for different types of spellcasting supported.
 */
export type SpellcastingTypeConfiguration = {
    /**
     * Localized label.
     */
    label: string;
    /**
     * Any progression modes for this type.
     */
    progression?: {
        [x: string]: SpellcastingProgressionConfiguration;
    };
};
/**
 * Configuration data for a spellcasting progression mode.
 */
export type SpellcastingProgressionConfiguration = {
    /**
     * Localized label.
     */
    label: string;
    /**
     * Value by which the class levels are divided to determine spellcasting level.
     */
    divisor?: number;
    /**
     * Should fractional values should be rounded up by default?
     */
    roundUp?: boolean;
};
export type CharacterFlagConfig = {
    name: string;
    hint: string;
    section: string;
    type: typeof boolean | string | number;
    placeholder: string;
    abilities?: string[];
    choices?: {
        [x: string]: string;
    };
    skills?: string[];
};
/**
 * Trait configuration information.
 */
export type TraitConfiguration = {
    /**
     * Localization key for the trait name.
     */
    label: string;
    /**
     * If the trait doesn't directly map to an entry as `traits.[key]`, where is
     *       this trait's data stored on the actor?
     */
    actorKeyPath?: string;
    /**
     * If the list of trait options doesn't match the name of the trait, where can
     *          the options be found within `CONFIG.DND5E`?
     */
    configKey?: string;
    /**
     * If config is an enum of objects, where can the label be found?
     */
    labelKey?: string;
    /**
     * Configuration for traits that take some sort of base item.
     */
    subtypes?: {
        keyPath?: string;
        ids?: string[];
    };
    /**
     * Mapping of category key to an object defining its children.
     */
    children?: object;
    /**
     * Whether top-level categories should be sorted.
     */
    sortCategories?: boolean;
};
declare namespace DND5E {
    const ASCII: string;
    namespace abilities {
        namespace str {
            const label: string;
            const abbreviation: string;
            const type: string;
        }
        namespace dex {
            const label_1: string;
            export { label_1 as label };
            const abbreviation_1: string;
            export { abbreviation_1 as abbreviation };
            const type_1: string;
            export { type_1 as type };
        }
        namespace con {
            const label_2: string;
            export { label_2 as label };
            const abbreviation_2: string;
            export { abbreviation_2 as abbreviation };
            const type_2: string;
            export { type_2 as type };
        }
        namespace int {
            const label_3: string;
            export { label_3 as label };
            const abbreviation_3: string;
            export { abbreviation_3 as abbreviation };
            const type_3: string;
            export { type_3 as type };
            export namespace defaults {
                const vehicle: number;
            }
        }
        namespace wis {
            const label_4: string;
            export { label_4 as label };
            const abbreviation_4: string;
            export { abbreviation_4 as abbreviation };
            const type_4: string;
            export { type_4 as type };
            export namespace defaults_1 {
                const vehicle_1: number;
                export { vehicle_1 as vehicle };
            }
            export { defaults_1 as defaults };
        }
        namespace cha {
            const label_5: string;
            export { label_5 as label };
            const abbreviation_5: string;
            export { abbreviation_5 as abbreviation };
            const type_5: string;
            export { type_5 as type };
            export namespace defaults_2 {
                const vehicle_2: number;
                export { vehicle_2 as vehicle };
            }
            export { defaults_2 as defaults };
        }
        namespace hon {
            const label_6: string;
            export { label_6 as label };
            const abbreviation_6: string;
            export { abbreviation_6 as abbreviation };
            const type_6: string;
            export { type_6 as type };
            export namespace defaults_3 {
                export const npc: string;
                const vehicle_3: number;
                export { vehicle_3 as vehicle };
            }
            export { defaults_3 as defaults };
        }
        namespace san {
            const label_7: string;
            export { label_7 as label };
            const abbreviation_7: string;
            export { abbreviation_7 as abbreviation };
            const type_7: string;
            export { type_7 as type };
            export namespace defaults_4 {
                const npc_1: string;
                export { npc_1 as npc };
                const vehicle_4: number;
                export { vehicle_4 as vehicle };
            }
            export { defaults_4 as defaults };
        }
    }
    /**
     * The set of Ability Scores used within the system.
     */
    type abilities = AbilityConfiguration;
    const abilityAbbreviations: any;
    const initiativeAbility: string;
    const hitPointsAbility: string;
    namespace skills {
        namespace acr {
            const label_8: string;
            export { label_8 as label };
            export const ability: string;
        }
        namespace ani {
            const label_9: string;
            export { label_9 as label };
            const ability_1: string;
            export { ability_1 as ability };
        }
        namespace arc {
            const label_10: string;
            export { label_10 as label };
            const ability_2: string;
            export { ability_2 as ability };
        }
        namespace ath {
            const label_11: string;
            export { label_11 as label };
            const ability_3: string;
            export { ability_3 as ability };
        }
        namespace dec {
            const label_12: string;
            export { label_12 as label };
            const ability_4: string;
            export { ability_4 as ability };
        }
        namespace his {
            const label_13: string;
            export { label_13 as label };
            const ability_5: string;
            export { ability_5 as ability };
        }
        namespace ins {
            const label_14: string;
            export { label_14 as label };
            const ability_6: string;
            export { ability_6 as ability };
        }
        namespace itm {
            const label_15: string;
            export { label_15 as label };
            const ability_7: string;
            export { ability_7 as ability };
        }
        namespace inv {
            const label_16: string;
            export { label_16 as label };
            const ability_8: string;
            export { ability_8 as ability };
        }
        namespace med {
            const label_17: string;
            export { label_17 as label };
            const ability_9: string;
            export { ability_9 as ability };
        }
        namespace nat {
            const label_18: string;
            export { label_18 as label };
            const ability_10: string;
            export { ability_10 as ability };
        }
        namespace prc {
            const label_19: string;
            export { label_19 as label };
            const ability_11: string;
            export { ability_11 as ability };
        }
        namespace prf {
            const label_20: string;
            export { label_20 as label };
            const ability_12: string;
            export { ability_12 as ability };
        }
        namespace per {
            const label_21: string;
            export { label_21 as label };
            const ability_13: string;
            export { ability_13 as ability };
        }
        namespace rel {
            const label_22: string;
            export { label_22 as label };
            const ability_14: string;
            export { ability_14 as ability };
        }
        namespace slt {
            const label_23: string;
            export { label_23 as label };
            const ability_15: string;
            export { ability_15 as ability };
        }
        namespace ste {
            const label_24: string;
            export { label_24 as label };
            const ability_16: string;
            export { ability_16 as ability };
        }
        namespace sur {
            const label_25: string;
            export { label_25 as label };
            const ability_17: string;
            export { ability_17 as ability };
        }
    }
    /**
     * The set of skill which can be trained with their default ability scores.
     */
    type skills = SkillConfiguration;
    namespace alignments {
        const lg: string;
        const ng: string;
        const cg: string;
        const ln: string;
        const tn: string;
        const cn: string;
        const le: string;
        const ne: string;
        const ce: string;
    }
    /**
     * Character alignment options.
     */
    type alignments = string;
    namespace attunementTypes {
        const NONE: number;
        const REQUIRED: number;
        const ATTUNED: number;
    }
    /**
     * An enumeration of item attunement types.
     */
    type attunementTypes = number;
    const attunements: {
        "0": string;
        "1": string;
        "2": string;
    };
    namespace weaponProficiencies {
        const sim: string;
        const mar: string;
    }
    /**
     * General weapon categories.
     */
    type weaponProficiencies = string;
    namespace weaponProficienciesMap {
        const natural: boolean;
        const simpleM: string;
        const simpleR: string;
        const martialM: string;
        const martialR: string;
    }
    /**
     * A mapping between `DND5E.weaponTypes` and `DND5E.weaponProficiencies` that
     * is used to determine if character has proficiency when adding an item.
     */
    type weaponProficienciesMap = (boolean | string);
    namespace weaponIds {
        const battleaxe: string;
        const blowgun: string;
        const club: string;
        const dagger: string;
        const dart: string;
        const flail: string;
        const glaive: string;
        const greataxe: string;
        const greatclub: string;
        const greatsword: string;
        const halberd: string;
        const handaxe: string;
        const handcrossbow: string;
        const heavycrossbow: string;
        const javelin: string;
        const lance: string;
        const lightcrossbow: string;
        const lighthammer: string;
        const longbow: string;
        const longsword: string;
        const mace: string;
        const maul: string;
        const morningstar: string;
        const net: string;
        const pike: string;
        const quarterstaff: string;
        const rapier: string;
        const scimitar: string;
        const shortsword: string;
        const sickle: string;
        const spear: string;
        const shortbow: string;
        const sling: string;
        const trident: string;
        const warpick: string;
        const warhammer: string;
        const whip: string;
    }
    /**
     * The basic weapon types in 5e. This enables specific weapon proficiencies or
     * starting equipment provided by classes and backgrounds.
     */
    type weaponIds = string;
    namespace toolTypes {
        const art: string;
        const game: string;
        const music: string;
    }
    /**
     * The categories into which Tool items can be grouped.
     */
    type toolTypes = string;
    namespace toolProficiencies {
        const vehicle_5: string;
        export { vehicle_5 as vehicle };
    }
    /**
     * The categories of tool proficiencies that a character can gain.
     */
    type toolProficiencies = string;
    namespace toolIds {
        const alchemist: string;
        const bagpipes: string;
        const brewer: string;
        const calligrapher: string;
        const card: string;
        const carpenter: string;
        const cartographer: string;
        const chess: string;
        const cobbler: string;
        const cook: string;
        const dice: string;
        const disg: string;
        const drum: string;
        const dulcimer: string;
        const flute: string;
        const forg: string;
        const glassblower: string;
        const herb: string;
        const horn: string;
        const jeweler: string;
        const leatherworker: string;
        const lute: string;
        const lyre: string;
        const mason: string;
        const navg: string;
        const painter: string;
        const panflute: string;
        const pois: string;
        const potter: string;
        const shawm: string;
        const smith: string;
        const thief: string;
        const tinker: string;
        const viol: string;
        const weaver: string;
        const woodcarver: string;
    }
    /**
     * The basic tool types in 5e. This enables specific tool proficiencies or
     * starting equipment provided by classes and backgrounds.
     */
    type toolIds = string;
    namespace scalarTimePeriods {
        const turn: string;
        const round: string;
        const minute: string;
        const hour: string;
        const day: string;
        const month: string;
        const year: string;
    }
    /**
     * Time periods that accept a numeric value.
     */
    type scalarTimePeriods = string;
    namespace permanentTimePeriods {
        const disp: string;
        const dstr: string;
        const perm: string;
    }
    /**
     * Time periods for spells that don't have a defined ending.
     */
    type permanentTimePeriods = string;
    namespace specialTimePeriods {
        const inst: string;
        const spec: string;
    }
    /**
     * Time periods that don't accept a numeric value.
     */
    type specialTimePeriods = string;
    namespace timePeriods { }
    /**
     * The various lengths of time over which effects can occur.
     */
    type timePeriods = string;
    namespace abilityActivationTypes {
        export const action: string;
        export const bonus: string;
        export const reaction: string;
        import minute_1 = minute;
        export { minute_1 as minute };
        import hour_1 = hour;
        export { hour_1 as hour };
        import day_1 = day;
        export { day_1 as day };
        import special = spec;
        export { special };
        export const legendary: string;
        export const mythic: string;
        export const lair: string;
        export const crew: string;
    }
    /**
     * Various ways in which an item or ability can be activated.
     */
    type abilityActivationTypes = string;
    namespace abilityConsumptionTypes {
        const ammo: string;
        const attribute: string;
        const hitDice: string;
        const material: string;
        const charges: string;
    }
    /**
     * Different things that an ability can consume upon use.
     */
    type abilityConsumptionTypes = string;
    namespace actorSizes {
        export const tiny: string;
        export const sm: string;
        const med_1: string;
        export { med_1 as med };
        const lg_1: string;
        export { lg_1 as lg };
        export const huge: string;
        export const grg: string;
    }
    /**
     * Creature sizes.
     */
    type actorSizes = string;
    namespace tokenSizes {
        const tiny_1: number;
        export { tiny_1 as tiny };
        const sm_1: number;
        export { sm_1 as sm };
        const med_2: number;
        export { med_2 as med };
        const lg_2: number;
        export { lg_2 as lg };
        const huge_1: number;
        export { huge_1 as huge };
        const grg_1: number;
        export { grg_1 as grg };
    }
    /**
     * Default token image size for the values of `DND5E.actorSizes`.
     */
    type tokenSizes = number;
    namespace tokenHPColors {
        const damage: number;
        const healing: number;
        const temp: number;
        const tempmax: number;
        const negmax: number;
    }
    /**
     * Colors used to visualize temporary and temporary maximum HP in token health bars.
     */
    type tokenHPColors = number;
    namespace creatureTypes {
        const aberration: string;
        const beast: string;
        const celestial: string;
        const construct: string;
        const dragon: string;
        const elemental: string;
        const fey: string;
        const fiend: string;
        const giant: string;
        const humanoid: string;
        const monstrosity: string;
        const ooze: string;
        const plant: string;
        const undead: string;
    }
    /**
     * Default types of creatures.
     * *Note: Not pre-localized to allow for easy fetching of pluralized forms.*
     */
    type creatureTypes = string;
    namespace itemActionTypes {
        const mwak: string;
        const rwak: string;
        const msak: string;
        const rsak: string;
        const save: string;
        const heal: string;
        const abil: string;
        const util: string;
        const other: string;
    }
    /**
     * Classification types for item action types.
     */
    type itemActionTypes = string;
    namespace itemCapacityTypes {
        const items: string;
        const weight: string;
    }
    /**
     * Different ways in which item capacity can be limited.
     */
    type itemCapacityTypes = string;
    namespace itemRarity {
        export const common: string;
        export const uncommon: string;
        export const rare: string;
        export const veryRare: string;
        const legendary_1: string;
        export { legendary_1 as legendary };
        export const artifact: string;
    }
    /**
     * List of various item rarities.
     */
    type itemRarity = string;
    namespace limitedUsePeriods {
        export const sr: string;
        export const lr: string;
        const day_2: string;
        export { day_2 as day };
        const charges_1: string;
        export { charges_1 as charges };
    }
    /**
     * Enumerate the lengths of time over which an item can have limited use ability.
     */
    type limitedUsePeriods = string;
    namespace armorTypes {
        export const light: string;
        export const medium: string;
        export const heavy: string;
        const natural_1: string;
        export { natural_1 as natural };
        export const shield: string;
    }
    /**
     * Specific equipment types that modify base AC.
     */
    type armorTypes = string;
    namespace miscEquipmentTypes {
        export const clothing: string;
        export const trinket: string;
        const vehicle_6: string;
        export { vehicle_6 as vehicle };
    }
    /**
     * Equipment types that aren't armor.
     */
    type miscEquipmentTypes = string;
    namespace equipmentTypes { }
    /**
     * The set of equipment types for armor, clothing, and other objects which can be worn by the character.
     */
    type equipmentTypes = string;
    namespace vehicleTypes {
        const air: string;
        const land: string;
        const space: string;
        const water: string;
    }
    /**
     * The various types of vehicles in which characters can be proficient.
     */
    type vehicleTypes = string;
    const armorProficiencies: object;
    namespace armorProficienciesMap {
        const natural_2: boolean;
        export { natural_2 as natural };
        const clothing_1: boolean;
        export { clothing_1 as clothing };
        const light_1: string;
        export { light_1 as light };
        const medium_1: string;
        export { medium_1 as medium };
        const heavy_1: string;
        export { heavy_1 as heavy };
        const shield_1: string;
        export { shield_1 as shield };
    }
    /**
     * A mapping between `DND5E.equipmentTypes` and `DND5E.armorProficiencies` that
     * is used to determine if character has proficiency when adding an item.
     */
    type armorProficienciesMap = (boolean | string);
    namespace armorIds {
        const breastplate: string;
        const chainmail: string;
        const chainshirt: string;
        const halfplate: string;
        const hide: string;
        const leather: string;
        const padded: string;
        const plate: string;
        const ringmail: string;
        const scalemail: string;
        const splint: string;
        const studded: string;
    }
    /**
     * The basic armor types in 5e. This enables specific armor proficiencies,
     * automated AC calculation in NPCs, and starting equipment.
     */
    type armorIds = string;
    namespace shieldIds {
        const shield_2: string;
        export { shield_2 as shield };
    }
    /**
     * The basic shield in 5e.
     */
    type shieldIds = string;
    namespace armorClasses {
        export namespace flat {
            const label_26: string;
            export { label_26 as label };
            export const formula: string;
        }
        export namespace natural_3 {
            const label_27: string;
            export { label_27 as label };
            const formula_1: string;
            export { formula_1 as formula };
        }
        export { natural_3 as natural };
        namespace _default {
            const label_28: string;
            export { label_28 as label };
            const formula_2: string;
            export { formula_2 as formula };
        }
        export { _default as default };
        export namespace mage {
            const label_29: string;
            export { label_29 as label };
            const formula_3: string;
            export { formula_3 as formula };
        }
        export namespace draconic {
            const label_30: string;
            export { label_30 as label };
            const formula_4: string;
            export { formula_4 as formula };
        }
        export namespace unarmoredMonk {
            const label_31: string;
            export { label_31 as label };
            const formula_5: string;
            export { formula_5 as formula };
        }
        export namespace unarmoredBarb {
            const label_32: string;
            export { label_32 as label };
            const formula_6: string;
            export { formula_6 as formula };
        }
        export namespace custom {
            const label_33: string;
            export { label_33 as label };
        }
    }
    /**
     * Common armor class calculations.
     */
    type armorClasses = {
        label: string;
        [formula]: string;
    };
    namespace consumableTypes {
        const ammo_1: string;
        export { ammo_1 as ammo };
        export const potion: string;
        export const poison: string;
        export const food: string;
        export const scroll: string;
        export const wand: string;
        export const rod: string;
        const trinket_1: string;
        export { trinket_1 as trinket };
    }
    /**
     * Enumerate the valid consumable types which are recognized by the system.
     */
    type consumableTypes = string;
    namespace featureTypes {
        export namespace background {
            const label_34: string;
            export { label_34 as label };
        }
        export namespace _class {
            const label_35: string;
            export { label_35 as label };
            export namespace subtypes {
                const artificerInfusion: string;
                const channelDivinity: string;
                const defensiveTactic: string;
                const eldritchInvocation: string;
                const elementalDiscipline: string;
                const fightingStyle: string;
                const huntersPrey: string;
                const ki: string;
                const maneuver: string;
                const metamagic: string;
                const multiattack: string;
                const pact: string;
                const psionicPower: string;
                const rune: string;
                const superiorHuntersDefense: string;
            }
        }
        export { _class as class };
        export namespace monster {
            const label_36: string;
            export { label_36 as label };
        }
        export namespace race {
            const label_37: string;
            export { label_37 as label };
        }
        export namespace feat {
            const label_38: string;
            export { label_38 as label };
        }
    }
    /**
     * Types of "features" items.
     */
    type featureTypes = FeatureTypeConfiguration;
    namespace currencies {
        namespace pp {
            const label_39: string;
            export { label_39 as label };
            const abbreviation_8: string;
            export { abbreviation_8 as abbreviation };
            export const conversion: number;
        }
        namespace gp {
            const label_40: string;
            export { label_40 as label };
            const abbreviation_9: string;
            export { abbreviation_9 as abbreviation };
            const conversion_1: number;
            export { conversion_1 as conversion };
        }
        namespace ep {
            const label_41: string;
            export { label_41 as label };
            const abbreviation_10: string;
            export { abbreviation_10 as abbreviation };
            const conversion_2: number;
            export { conversion_2 as conversion };
        }
        namespace sp {
            const label_42: string;
            export { label_42 as label };
            const abbreviation_11: string;
            export { abbreviation_11 as abbreviation };
            const conversion_3: number;
            export { conversion_3 as conversion };
        }
        namespace cp {
            const label_43: string;
            export { label_43 as label };
            const abbreviation_12: string;
            export { abbreviation_12 as abbreviation };
            const conversion_4: number;
            export { conversion_4 as conversion };
        }
    }
    /**
     * The valid currency denominations with localized labels, abbreviations, and conversions.
     * The conversion number defines how many of that currency are equal to one GP.
     */
    type currencies = CurrencyConfiguration;
    namespace physicalDamageTypes {
        const bludgeoning: string;
        const piercing: string;
        const slashing: string;
    }
    /**
     * Types of damage that are considered physical.
     */
    type physicalDamageTypes = string;
    namespace damageTypes {
        export const acid: string;
        export const cold: string;
        export const fire: string;
        export const force: string;
        export const lightning: string;
        export const necrotic: string;
        const poison_1: string;
        export { poison_1 as poison };
        export const psychic: string;
        export const radiant: string;
        export const thunder: string;
    }
    /**
     * Types of damage the can be caused by abilities.
     */
    type damageTypes = string;
    namespace damageResistanceTypes {
        const physical: string;
    }
    /**
     * *
     */
    type damageResistanceTypes = string;
    namespace healingTypes {
        const healing_1: string;
        export { healing_1 as healing };
        export const temphp: string;
    }
    /**
     * Different types of healing that can be applied using abilities.
     */
    type healingTypes = string;
    namespace movementTypes {
        const burrow: string;
        const climb: string;
        const fly: string;
        const swim: string;
        const walk: string;
    }
    /**
     * The valid units of measure for movement distances in the game system.
     * By default this uses the imperial units of feet and miles.
     */
    type movementTypes = string;
    namespace movementUnits {
        const ft: string;
        const mi: string;
        const m: string;
        const km: string;
    }
    /**
     * The valid units of measure for movement distances in the game system.
     * By default this uses the imperial units of feet and miles.
     */
    type movementUnits = string;
    namespace rangeTypes {
        export const self: string;
        export const touch: string;
        const spec_1: string;
        export { spec_1 as spec };
        export const any: string;
    }
    /**
     * The types of range that are used for measuring actions and effects.
     */
    type rangeTypes = string;
    namespace distanceUnits { }
    /**
     * The valid units of measure for the range of an action or effect. A combination of `DND5E.movementUnits` and
     * `DND5E.rangeUnits`.
     */
    type distanceUnits = string;
    namespace encumbrance {
        namespace currencyPerWeight {
            const imperial: number;
            const metric: number;
        }
        namespace strMultiplier {
            const imperial_1: number;
            export { imperial_1 as imperial };
            const metric_1: number;
            export { metric_1 as metric };
        }
        namespace vehicleWeightMultiplier {
            const imperial_2: number;
            export { imperial_2 as imperial };
            const metric_2: number;
            export { metric_2 as metric };
        }
    }
    /**
     * Configure aspects of encumbrance calculation so that it could be configured by modules.
     */
    type encumbrance = {
        imperial: number;
        metric: number;
    };
    namespace individualTargetTypes {
        const self_1: string;
        export { self_1 as self };
        export const ally: string;
        export const enemy: string;
        export const creature: string;
        export const object: string;
        const space_1: string;
        export { space_1 as space };
    }
    /**
     * Targeting types that apply to one or more distinct targets.
     */
    type individualTargetTypes = string;
    namespace areaTargetTypes {
        namespace radius {
            const label_44: string;
            export { label_44 as label };
            export const template: string;
        }
        namespace sphere {
            const label_45: string;
            export { label_45 as label };
            const template_1: string;
            export { template_1 as template };
        }
        namespace cylinder {
            const label_46: string;
            export { label_46 as label };
            const template_2: string;
            export { template_2 as template };
        }
        namespace cone {
            const label_47: string;
            export { label_47 as label };
            const template_3: string;
            export { template_3 as template };
        }
        namespace square {
            const label_48: string;
            export { label_48 as label };
            const template_4: string;
            export { template_4 as template };
        }
        namespace cube {
            const label_49: string;
            export { label_49 as label };
            const template_5: string;
            export { template_5 as template };
        }
        namespace line {
            const label_50: string;
            export { label_50 as label };
            const template_6: string;
            export { template_6 as template };
        }
        namespace wall {
            const label_51: string;
            export { label_51 as label };
            const template_7: string;
            export { template_7 as template };
        }
    }
    /**
     * Targeting types that cover an area.
     */
    type areaTargetTypes = AreaTargetDefinition;
    /**
     * The types of single or area targets which can be applied to abilities.
     */
    type targetTypes = string;
    const targetTypes: any;
    const hitDieTypes: string[];
    namespace senses {
        const blindsight: string;
        const darkvision: string;
        const tremorsense: string;
        const truesight: string;
    }
    /**
     * The set of possible sensory perception types which an Actor may have.
     */
    type senses = string;
    const SPELL_SLOT_TABLE: number[][];
    namespace spellPreparationModes {
        export const prepared: string;
        const pact_1: string;
        export { pact_1 as pact };
        export const always: string;
        export const atwill: string;
        export const innate: string;
    }
    const spellUpcastModes: boolean[];
    const spellcastingTypes: SpellcastingTypeConfiguration;
    namespace spellProgression {
        export const none: string;
        export const full: string;
        export const half: string;
        export const third: string;
        const pact_2: string;
        export { pact_2 as pact };
        export const artificer: string;
    }
    /**
     * Ways in which a class can contribute to spellcasting levels.
     */
    type spellProgression = string;
    /**
     * Valid spell levels.
     */
    type spellLevels = string;
    const spellLevels: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
    };
    namespace spellScalingModes {
        const none_1: string;
        export { none_1 as none };
        export const cantrip: string;
        export const level: string;
    }
    /**
     * The available choices for how spell damage scaling may be computed.
     */
    type spellScalingModes = string;
    namespace spellComponents {
        export namespace vocal {
            const label_52: string;
            export { label_52 as label };
            export const abbr: string;
        }
        export namespace somatic {
            const label_53: string;
            export { label_53 as label };
            const abbr_1: string;
            export { abbr_1 as abbr };
        }
        export namespace material_1 {
            const label_54: string;
            export { label_54 as label };
            const abbr_2: string;
            export { abbr_2 as abbr };
        }
        export { material_1 as material };
    }
    /**
     * Types of components that can be required when casting a spell.
     */
    type spellComponents = object;
    namespace spellTags {
        namespace concentration {
            const label_55: string;
            export { label_55 as label };
            const abbr_3: string;
            export { abbr_3 as abbr };
        }
        namespace ritual {
            const label_56: string;
            export { label_56 as label };
            const abbr_4: string;
            export { abbr_4 as abbr };
        }
    }
    /**
     * Supplementary rules keywords that inform a spell's use.
     */
    type spellTags = object;
    namespace spellSchools {
        export const abj: string;
        const con_1: string;
        export { con_1 as con };
        export const div: string;
        export const enc: string;
        export const evo: string;
        export const ill: string;
        export const nec: string;
        export const trs: string;
    }
    /**
     * Schools to which a spell can belong.
     */
    type spellSchools = string;
    /**
     * Spell scroll item ID within the `DND5E.sourcePacks` compendium for each level.
     */
    type spellScrollIds = string;
    const spellScrollIds: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
    };
    namespace weaponTypes {
        const simpleM_1: string;
        export { simpleM_1 as simpleM };
        const simpleR_1: string;
        export { simpleR_1 as simpleR };
        const martialM_1: string;
        export { martialM_1 as martialM };
        const martialR_1: string;
        export { martialR_1 as martialR };
        const natural_4: string;
        export { natural_4 as natural };
        export const improv: string;
        export const siege: string;
    }
    /**
     * The set of types which a weapon item can take.
     */
    type weaponTypes = string;
    namespace physicalWeaponProperties {
        const ada: string;
        const mgc: string;
        const sil: string;
    }
    /**
     * A subset of weapon properties that determine the physical characteristics of the weapon.
     * These properties are used for determining physical resistance bypasses.
     */
    type physicalWeaponProperties = string;
    namespace weaponProperties {
        export const amm: string;
        export const fin: string;
        export const fir: string;
        export const foc: string;
        export const hvy: string;
        export const lgt: string;
        export const lod: string;
        export const rch: string;
        const rel_1: string;
        export { rel_1 as rel };
        export const ret: string;
        export const spc: string;
        export const thr: string;
        export const two: string;
        export const ver: string;
    }
    /**
     * The set of weapon property flags which can exist on a weapon.
     */
    type weaponProperties = string;
    namespace sourcePacks {
        const ITEMS: string;
    }
    /**
     * Compendium packs used for localized items.
     */
    type sourcePacks = string;
    namespace polymorphSettings {
        const keepPhysical: string;
        const keepMental: string;
        const keepSaves: string;
        const keepSkills: string;
        const mergeSaves: string;
        const mergeSkills: string;
        const keepClass: string;
        const keepFeats: string;
        const keepSpells: string;
        const keepItems: string;
        const keepBio: string;
        const keepVision: string;
        const keepSelf: string;
    }
    /**
     * Settings to configure how actors are merged when polymorphing is applied.
     */
    type polymorphSettings = string;
    namespace polymorphEffectSettings {
        const keepAE: string;
        const keepOtherOriginAE: string;
        const keepOriginAE: string;
        const keepEquipmentAE: string;
        const keepFeatAE: string;
        const keepSpellAE: string;
        const keepClassAE: string;
        const keepBackgroundAE: string;
    }
    /**
     * Settings to configure how actors are effects are merged when polymorphing is applied.
     */
    type polymorphEffectSettings = string;
    namespace transformationPresets {
        namespace wildshape {
            export const icon: string;
            const label_57: string;
            export { label_57 as label };
            export namespace options {
                const keepBio_1: boolean;
                export { keepBio_1 as keepBio };
                const keepClass_1: boolean;
                export { keepClass_1 as keepClass };
                const keepMental_1: boolean;
                export { keepMental_1 as keepMental };
                const mergeSaves_1: boolean;
                export { mergeSaves_1 as mergeSaves };
                const mergeSkills_1: boolean;
                export { mergeSkills_1 as mergeSkills };
                const keepEquipmentAE_1: boolean;
                export { keepEquipmentAE_1 as keepEquipmentAE };
            }
        }
        namespace polymorph {
            const icon_1: string;
            export { icon_1 as icon };
            const label_58: string;
            export { label_58 as label };
            export namespace options_1 {
                const keepEquipmentAE_2: boolean;
                export { keepEquipmentAE_2 as keepEquipmentAE };
                const keepClassAE_1: boolean;
                export { keepClassAE_1 as keepClassAE };
                const keepFeatAE_1: boolean;
                export { keepFeatAE_1 as keepFeatAE };
                const keepBackgroundAE_1: boolean;
                export { keepBackgroundAE_1 as keepBackgroundAE };
            }
            export { options_1 as options };
        }
        namespace polymorphSelf {
            const icon_2: string;
            export { icon_2 as icon };
            const label_59: string;
            export { label_59 as label };
            export namespace options_2 {
                const keepSelf_1: boolean;
                export { keepSelf_1 as keepSelf };
            }
            export { options_2 as options };
        }
    }
    /**
     * Settings to configure how actors are merged when preset polymorphing is applied.
     */
    type transformationPresets = object;
    /**
     * Skill, ability, and tool proficiency levels.
     * The key for each level represents its proficiency multiplier.
     */
    type proficiencyLevels = string;
    const proficiencyLevels: {
        0: string;
        1: string;
        0.5: string;
        2: string;
    };
    /**
     * The amount of cover provided by an object. In cases where multiple pieces
     * of cover are in play, we take the highest value.
     */
    type cover = string;
    const cover: {
        0: string;
        0.5: string;
        0.75: string;
        1: string;
    };
    const trackableAttributes: string[];
    const consumableResources: string[];
    namespace conditionTypes {
        const blinded: string;
        const charmed: string;
        const deafened: string;
        const diseased: string;
        const exhaustion: string;
        const frightened: string;
        const grappled: string;
        const incapacitated: string;
        const invisible: string;
        const paralyzed: string;
        const petrified: string;
        const poisoned: string;
        const prone: string;
        const restrained: string;
        const stunned: string;
        const unconscious: string;
    }
    /**
     * Conditions that can affect an actor.
     */
    type conditionTypes = string;
    namespace languages {
        const common_1: string;
        export { common_1 as common };
        export const aarakocra: string;
        export const abyssal: string;
        export const aquan: string;
        export const auran: string;
        const celestial_1: string;
        export { celestial_1 as celestial };
        export const deep: string;
        const draconic_1: string;
        export { draconic_1 as draconic };
        export const druidic: string;
        export const dwarvish: string;
        export const elvish: string;
        const giant_1: string;
        export { giant_1 as giant };
        export const gith: string;
        export const gnomish: string;
        export const goblin: string;
        export const gnoll: string;
        export const halfling: string;
        export const ignan: string;
        export const infernal: string;
        export const orc: string;
        export const primordial: string;
        export const sylvan: string;
        export const terran: string;
        export const cant: string;
        export const undercommon: string;
    }
    /**
     * Languages a character can learn.
     */
    type languages = string;
    const maxLevel: number;
    const CHARACTER_EXP_LEVELS: number[];
    const CR_EXP_LEVELS: number[];
    namespace traits {
        namespace saves {
            const label_60: string;
            export { label_60 as label };
            export const configKey: string;
            export const labelKey: string;
        }
        namespace skills {
            const label_61: string;
            export { label_61 as label };
            const labelKey_1: string;
            export { labelKey_1 as labelKey };
        }
        namespace languages {
            const label_62: string;
            export { label_62 as label };
        }
        namespace di {
            const label_63: string;
            export { label_63 as label };
            const configKey_1: string;
            export { configKey_1 as configKey };
        }
        namespace dr {
            const label_64: string;
            export { label_64 as label };
            const configKey_2: string;
            export { configKey_2 as configKey };
        }
        namespace dv {
            const label_65: string;
            export { label_65 as label };
            const configKey_3: string;
            export { configKey_3 as configKey };
        }
        namespace ci {
            const label_66: string;
            export { label_66 as label };
            const configKey_4: string;
            export { configKey_4 as configKey };
        }
        namespace weapon {
            const label_67: string;
            export { label_67 as label };
            export const actorKeyPath: string;
            const configKey_5: string;
            export { configKey_5 as configKey };
            export namespace subtypes_1 {
                const keyPath: string;
                const ids: string[];
            }
            export { subtypes_1 as subtypes };
        }
        namespace armor {
            const label_68: string;
            export { label_68 as label };
            const actorKeyPath_1: string;
            export { actorKeyPath_1 as actorKeyPath };
            const configKey_6: string;
            export { configKey_6 as configKey };
            export namespace subtypes_2 {
                const keyPath_1: string;
                export { keyPath_1 as keyPath };
                const ids_1: string[];
                export { ids_1 as ids };
            }
            export { subtypes_2 as subtypes };
        }
        namespace tool {
            const label_69: string;
            export { label_69 as label };
            const actorKeyPath_2: string;
            export { actorKeyPath_2 as actorKeyPath };
            const configKey_7: string;
            export { configKey_7 as configKey };
            export namespace subtypes_3 {
                const keyPath_2: string;
                export { keyPath_2 as keyPath };
                const ids_2: string[];
                export { ids_2 as ids };
            }
            export { subtypes_3 as subtypes };
            export namespace children {
                const vehicle_7: string;
                export { vehicle_7 as vehicle };
            }
            export const sortCategories: boolean;
        }
    }
    /**
     * Configurable traits on actors.
     */
    type traits = TraitConfiguration;
    namespace characterFlags {
        namespace diamondSoul {
            export const name: string;
            export const hint: string;
            export const section: string;
            const type_8: BooleanConstructor;
            export { type_8 as type };
        }
        namespace elvenAccuracy {
            const name_1: string;
            export { name_1 as name };
            const hint_1: string;
            export { hint_1 as hint };
            const section_1: string;
            export { section_1 as section };
            export const abilities: string[];
            const type_9: BooleanConstructor;
            export { type_9 as type };
        }
        namespace halflingLucky {
            const name_2: string;
            export { name_2 as name };
            const hint_2: string;
            export { hint_2 as hint };
            const section_2: string;
            export { section_2 as section };
            const type_10: BooleanConstructor;
            export { type_10 as type };
        }
        namespace initiativeAdv {
            const name_3: string;
            export { name_3 as name };
            const hint_3: string;
            export { hint_3 as hint };
            const section_3: string;
            export { section_3 as section };
            const type_11: BooleanConstructor;
            export { type_11 as type };
        }
        namespace initiativeAlert {
            const name_4: string;
            export { name_4 as name };
            const hint_4: string;
            export { hint_4 as hint };
            const section_4: string;
            export { section_4 as section };
            const type_12: BooleanConstructor;
            export { type_12 as type };
        }
        namespace jackOfAllTrades {
            const name_5: string;
            export { name_5 as name };
            const hint_5: string;
            export { hint_5 as hint };
            const section_5: string;
            export { section_5 as section };
            const type_13: BooleanConstructor;
            export { type_13 as type };
        }
        namespace observantFeat {
            const name_6: string;
            export { name_6 as name };
            const hint_6: string;
            export { hint_6 as hint };
            const skills_1: string[];
            export { skills_1 as skills };
            const section_6: string;
            export { section_6 as section };
            const type_14: BooleanConstructor;
            export { type_14 as type };
        }
        namespace powerfulBuild {
            const name_7: string;
            export { name_7 as name };
            const hint_7: string;
            export { hint_7 as hint };
            const section_7: string;
            export { section_7 as section };
            const type_15: BooleanConstructor;
            export { type_15 as type };
        }
        namespace reliableTalent {
            const name_8: string;
            export { name_8 as name };
            const hint_8: string;
            export { hint_8 as hint };
            const section_8: string;
            export { section_8 as section };
            const type_16: BooleanConstructor;
            export { type_16 as type };
        }
        namespace remarkableAthlete {
            const name_9: string;
            export { name_9 as name };
            const hint_9: string;
            export { hint_9 as hint };
            const abilities_1: string[];
            export { abilities_1 as abilities };
            const section_9: string;
            export { section_9 as section };
            const type_17: BooleanConstructor;
            export { type_17 as type };
        }
        namespace weaponCriticalThreshold {
            const name_10: string;
            export { name_10 as name };
            const hint_10: string;
            export { hint_10 as hint };
            const section_10: string;
            export { section_10 as section };
            const type_18: NumberConstructor;
            export { type_18 as type };
            export const placeholder: number;
        }
        namespace spellCriticalThreshold {
            const name_11: string;
            export { name_11 as name };
            const hint_11: string;
            export { hint_11 as hint };
            const section_11: string;
            export { section_11 as section };
            const type_19: NumberConstructor;
            export { type_19 as type };
            const placeholder_1: number;
            export { placeholder_1 as placeholder };
        }
        namespace meleeCriticalDamageDice {
            const name_12: string;
            export { name_12 as name };
            const hint_12: string;
            export { hint_12 as hint };
            const section_12: string;
            export { section_12 as section };
            const type_20: NumberConstructor;
            export { type_20 as type };
            const placeholder_2: number;
            export { placeholder_2 as placeholder };
        }
    }
    /**
     * Special character flags.
     */
    type characterFlags = CharacterFlagConfig;
    const allowedActorFlags: string[];
    namespace advancementTypes {
        const HitPoints: typeof advancement.HitPointsAdvancement;
        const ItemChoice: typeof advancement.ItemChoiceAdvancement;
        const ItemGrant: typeof advancement.ItemGrantAdvancement;
        const ScaleValue: typeof advancement.ScaleValueAdvancement;
    }
    /**
     * Advancement types that can be added to items.
     */
    type advancementTypes = any;
}
import * as advancement from "./documents/advancement/_module";
