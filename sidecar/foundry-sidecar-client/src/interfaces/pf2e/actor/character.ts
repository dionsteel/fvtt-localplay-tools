import { CraftingEntryData } from "@/interfaces/pf2e/actor/character/crafting/entry";
import { CraftingFormulaData } from "@/interfaces/pf2e/actor/character/crafting/formula";
import {
  AbilityData,
  BaseCreatureSource,
  CreatureAttributes,
  CreatureDetails,
  CreaturePF2e,
  CreatureResources,
  CreatureSystemData,
  CreatureTraitsData,
  HeldShieldData,
  SaveData,
  SkillAbbreviation,
  SkillData,
} from "@/interfaces/pf2e/actor/creature";
import { CreatureSensePF2e } from "@/interfaces/pf2e/actor/creature/sense";
import { AbilityBasedStatistic, ActorFlagsPF2e, HitPointsStatistic, InitiativeData, PerceptionData, StrikeData, TraitViewData } from "@/interfaces/pf2e/actor/data/base";
import { AbilityString, SaveType } from "@/interfaces/pf2e/actor/index";
import { ConditionPF2e, FeatPF2e, ItemPF2e, WeaponPF2e } from "@/interfaces/pf2e/item";
import { ArmorCategory } from "@/interfaces/pf2e/item/armor/index";
import { ProficiencyRank } from "@/interfaces/pf2e/item/data/index";
import { DeitySystemData } from "@/interfaces/pf2e/item/deity";
import { DeityDomain } from "@/interfaces/pf2e/item/deity/index";
import { MagicTradition } from "@/interfaces/pf2e/item/spell/index";
import { BaseWeaponType, WeaponCategory, WeaponGroup } from "@/interfaces/pf2e/item/weapon/index";
import { ValueAndMax, ZeroToFour } from "@/interfaces/pf2e/data";
import { DamagePartialTerm, DamageType } from "@/interfaces/pf2e/system/damage/index";
import { PredicatePF2e } from "@/interfaces/pf2e/system/predication";
import { ArmorClassTraceData } from "@/interfaces/pf2e/system/statistic/armor-class";
import { StatisticTraceData } from "@/interfaces/pf2e/system/statistic/data";
// import { CharacterPF2e } from "./";
// import { WeaponAuxiliaryAction } from "./character/helpers";
// import { CharacterSheetTabVisibility } from "./sheet";
import { ItemSystemData } from "@/interfaces/pf2e/item/data/base";
import { ActorPF2e } from "@/interfaces/pf2e/actor";
import { PartialDeep } from "@/lib/utils";
import { RuleElementPF2e } from "../rules";
import { Ownership } from "@/interfaces/core/flags";
// import { FeatGroup } from "./character/";
// import type {ActorPF2e} from '../actor'

type RuleValueTypes =
  | number
  | string
  | {
      animation: {
        intensity: number;
        speed: number;
        type: string;
      };
      bright: number;
      color: string;
      dim: number;
      shadows: number;
    };

export interface CharacterPF2e extends CreaturePF2e {
  system: CharacterSystemData;

  allowedItemTypes: string;
  itemTypes: {
    action: Array<{
      type: string;
      img: string;
      name: string;
      system: {
        description: {
          gm: string;
          value: string;
        };
        rules: "undefined";
        slug: null;
        _migration: {
          version: number;
          lastMigration: null;
          previous: {
            schema: number;
            foundry: string;
            system: string;
          };
        };
        traits: {
          otherTags: "undefined";
          value: "undefined";
        };
        publication: {
          title: string;
          authors: string;
          license: string;
          remaster: boolean;
        };
        actionType: {
          value: string;
        };
        category: string;
        actions: {
          value: number;
        };
        requirements: {
          value: string;
        };
        trigger: {
          value: string;
        };
        deathNote: boolean;
      };
      effects: "undefined";
      folder: null;
      sort: number;
      ownership: {
        default: number;
        f5TQXRGH0xdq9tP0: number;
      };
      flags: {
        "scene-packer": {
          hash: string;
        };
        itemacro: {
          macro: {
            name: string;
            type: string;
            scope: string;
            command: string;
            author: string;
            _id: null;
            img: string;
            folder: null;
            sort: number;
            ownership: {
              default: number;
            };
            flags: {};
            _stats: {
              systemId: null;
              systemVersion: null;
              coreVersion: null;
              createdTime: null;
              modifiedTime: null;
              lastModifiedBy: null;
            };
          };
        };
        core: {
          sourceId: string;
        };
      };
      _stats: {
        systemId: string;
        systemVersion: string;
        coreVersion: string;
        createdTime: number;
        modifiedTime: number;
        lastModifiedBy: string;
      };
      _id: string;
    }>;

    affliction: "undefined";
    ancestry: {
      img: string;
      name: string;
      system: {
        description: {
          gm: string;
          value: string;
        };
        rules: "undefined";
        slug: string;
        _migration: {
          version: number;
          lastMigration: null;
          previous: {
            schema: number;
            foundry: string;
            system: string;
          };
        };
        traits: {
          otherTags: "undefined";
          value: string;
          rarity: string;
        };
        publication: {
          title: string;
          authors: string;
          license: string;
          remaster: boolean;
        };
        hp: number;
        size: string;
        reach: number;
        speed: number;
        boosts: Array<{
          value: string;
          selected: string;
        }>;
        flaws: Array<{
          value: "undefined";
        }>;

        languages: {
          value: string;
          custom: string;
        };
        additionalLanguages: {
          count: number;
          value: "undefined";
          custom: string;
        };
        items: {};
        vision: string;
      };
      type: string;
      flags: {
        core: {
          sourceId: string;
        };
        "scene-packer": {
          hash: string;
        };
      };
      effects: "undefined";
      folder: null;
      sort: number;
      ownership: {
        default: number;
        OjkBEDlhd5y4dqPM: number;
      };
      _stats: {
        systemId: string;
        systemVersion: string;
        coreVersion: string;
        createdTime: number;
        modifiedTime: number;
        lastModifiedBy: string;
      };
      _id: string;
    }[];

    armor: Array<{
      _id: string;
      img: string;
      name: string;
      system: {
        description: {
          gm: string;
          value: string;
        };
        rules: "undefined";
        slug: string;
        _migration: {
          version: number;
          lastMigration: null;
          previous: {
            schema: number;
            foundry: string;
            system: string;
          };
        };
        traits: {
          otherTags: "undefined";
          value: "undefined";
          rarity: string;
        };
        publication: {
          title: string;
          authors: string;
          license: string;
          remaster: boolean;
        };
        level: {
          value: number;
        };
        quantity: number;
        baseItem: string;
        hp: {
          value: number;
          max: number;
        };
        hardness: number;
        weight: {
          value: string;
        };
        equippedBulk: {
          value: string;
        };
        price: {
          value: {
            gp: number;
          };
        };
        equipped: {
          carryType: string;
          invested: null;
          inSlot: boolean;
          handsHeld: number;
        };
        stackGroup: null;
        negateBulk: {
          value: string;
        };
        containerId: null;
        size: string;
        material: {
          type: null;
          grade: null;
        };
        identification: {
          status: string;
          unidentified: {
            name: string;
            img: string;
            data: {
              description: {
                value: string;
              };
            };
          };
          misidentified: {};
        };
        usage: {
          value: string;
        };
        category: string;
        group: string;
        acBonus: number;
        strength: number;
        dexCap: number;
        checkPenalty: number;
        speedPenalty: null;
        potencyRune: {
          value: number;
        };
        resiliencyRune: {
          value: string;
        };
        propertyRune1: {
          value: string;
        };
        propertyRune2: {
          value: string;
        };
        propertyRune3: {
          value: string;
        };
        propertyRune4: {
          value: string;
        };
        potency: {};
      };
      type: string;
      flags: {
        core: {
          sourceId: string;
        };
        "scene-packer": {
          hash: string;
        };
      };
      effects: "undefined";
      folder: null;
      sort: number;
      ownership: {
        default: number;
        f5TQXRGH0xdq9tP0: number;
      };
      _stats: {
        systemId: string;
        systemVersion: string;
        coreVersion: string;
        createdTime: number;
        modifiedTime: number;
        lastModifiedBy: string;
      };
    }>;
    background: Array<{
      img: string;
      name: string;
      system: {
        description: {
          gm: string;
          value: string;
        };
        rules: "undefined";
        slug: string;
        _migration: {
          version: number;
          lastMigration: null;
          previous: {
            schema: number;
            foundry: string;
            system: string;
          };
        };
        traits: {
          otherTags: "undefined";
          value: "undefined";
          rarity: string;
        };
        publication: {
          title: string;
          authors: string;
          license: string;
          remaster: boolean;
        };
        boosts: Array<{
          value: string;
          selected: string;
        }>;
        items: {
          r7b3d: {
            img: string;
            level: number;
            name: string;
            uuid: string;
          };
        };
        trainedLore: string;
        trainedSkills: {
          value: string;
        };
      };
      type: string;
      flags: {
        core: {
          sourceId: string;
        };
        "scene-packer": {
          hash: string;
        };
      };
      effects: "undefined";
      folder: null;
      sort: number;
      ownership: {
        default: number;
        OjkBEDlhd5y4dqPM: number;
      };
      _stats: {
        systemId: string;
        systemVersion: string;
        coreVersion: string;
        createdTime: number;
        modifiedTime: number;
        lastModifiedBy: string;
      };
      _id: string;
    }>;
    book: "undefined";
    campaignFeature: "undefined";
    class: Array<{
      img: string;
      name: string;
      system: {
        description: {
          gm: string;
          value: string;
        };
        rules: Array<{
          key: string;
          mode: string;
          path: string;
          value: number;
        }>;
        slug: string;
        _migration: {
          version: number;
          lastMigration: null;
          previous: {
            schema: number;
            foundry: string;
            system: string;
          };
        };
        traits: {
          otherTags: "undefined";
          value: "undefined";
          rarity: string;
        };
        publication: {
          title: string;
          authors: string;
          license: string;
          remaster: boolean;
        };
        keyAbility: {
          value: string;
          selected: string;
        };
        items: {
          "0kdn2": {
            img: string;
            level: number;
            name: string;
            uuid: string;
          };
          "1nwhg": {
            img: string;
            level: number;
            name: string;
            uuid: string;
          };
          "1zn3l": {
            img: string;
            level: number;
            name: string;
            uuid: string;
          };
          "2xl4q": {
            img: string;
            level: number;
            name: string;
            uuid: string;
          };
          "4al2i": {
            img: string;
            level: number;
            name: string;
            uuid: string;
          };
          "517c6": {
            img: string;
            level: number;
            name: string;
            uuid: string;
          };
          "6ddtr": {
            img: string;
            level: number;
            name: string;
            uuid: string;
          };
          "8tar0": {
            img: string;
            level: number;
            name: string;
            uuid: string;
          };
          cifjd: {
            img: string;
            level: number;
            name: string;
            uuid: string;
          };
          e9ikq: {
            img: string;
            level: number;
            name: string;
            uuid: string;
          };
          g1dmk: {
            img: string;
            level: number;
            name: string;
            uuid: string;
          };
          hg9s4: {
            img: string;
            level: number;
            name: string;
            uuid: string;
          };
          i70zj: {
            img: string;
            level: number;
            name: string;
            uuid: string;
          };
          nilrb: {
            img: string;
            level: number;
            name: string;
            uuid: string;
          };
          odz8x: {
            img: string;
            level: number;
            name: string;
            uuid: string;
          };
          pfjze: {
            img: string;
            level: number;
            name: string;
            uuid: string;
          };
          qx6de: {
            img: string;
            level: number;
            name: string;
            uuid: string;
          };
          sjjee: {
            img: string;
            level: number;
            name: string;
            uuid: string;
          };
          thypm: {
            img: string;
            level: number;
            name: string;
            uuid: string;
          };
          xn3fx: {
            img: string;
            level: number;
            name: string;
            uuid: string;
          };
        };
        hp: number;
        trainedSkills: {
          value: string;
          additional: number;
        };
        perception: number;
        savingThrows: {
          fortitude: number;
          reflex: number;
          will: number;
        };
        attacks: {
          simple: number;
          martial: number;
          advanced: number;
          unarmed: number;
          other: {
            name: string;
            rank: number;
          };
        };
        defenses: {
          unarmored: number;
          light: number;
          medium: number;
          heavy: number;
        };
        classDC: number;
        ancestryFeatLevels: {
          value: number;
        };
        classFeatLevels: {
          value: number;
        };
        generalFeatLevels: {
          value: number;
        };
        skillFeatLevels: {
          value: number;
        };
        skillIncreaseLevels: {
          value: number;
        };
      };
      type: string;
      flags: {
        core: {
          sourceId: string;
        };
        "scene-packer": {
          hash: string;
        };
      };
      effects: "undefined";
      folder: null;
      sort: number;
      ownership: {
        default: number;
        OjkBEDlhd5y4dqPM: number;
      };
      _stats: {
        systemId: string;
        systemVersion: string;
        coreVersion: string;
        createdTime: number;
        modifiedTime: number;
        lastModifiedBy: string;
      };
      _id: string;
    }>;
    condition: Array<{
      _id: string;
      img: string;
      name: string;
      system: {
        description: {
          gm: string;
          value: string;
        };
        rules: Array<{
          key: string;
          selector: string;
          slug: string;
          type: string;
          value: number;
        }>;
        slug: string;
        _migration: {
          version: number;
          lastMigration: null;
          previous: {
            schema: number;
            foundry: string;
            system: string;
          };
        };
        traits: {
          otherTags: "undefined";
        };
        publication: {
          title: string;
          authors: string;
          license: string;
          remaster: boolean;
        };
        group: null;
        duration: {
          value: number;
          unit: string;
          expiry: null;
        };
        value: {
          isValued: boolean;
          value: null;
        };
        references: {
          children: "undefined";
          overrides: "undefined";
          overriddenBy: "undefined";
          immunityFrom: "undefined";
        };
        overrides: "undefined";
      };
      type: string;
      flags: {
        core: {
          sourceId: string;
        };
        "scene-packer": {
          hash: string;
        };
      };
      effects: "undefined";
      folder: null;
      sort: number;
      ownership: {
        default: number;
        f5TQXRGH0xdq9tP0: number;
      };
      _stats: {
        systemId: string;
        systemVersion: string;
        coreVersion: string;
        createdTime: number;
        modifiedTime: number;
        lastModifiedBy: string;
      };

    }>;
    consumable: Array<{
      _id: string;
      img: string;
      name: string;
      system: {
        description: {
          gm: string;
          value: string;
        };
        rules: "undefined";
        slug: string;
        _migration: {
          version: number;
          lastMigration: null;
          previous: {
            schema: number;
            foundry: string;
            system: string;
          };
        };
        traits: {
          otherTags: "undefined";
          value: "undefined";
          rarity: string;
        };
        publication: {
          title: string;
          authors: string;
          license: string;
          remaster: boolean;
        };
        level: {
          value: number;
        };
        quantity: number;
        baseItem: null;
        hp: {
          value: number;
          max: number;
        };
        hardness: number;
        weight: {
          value: string;
        };
        equippedBulk: {
          value: string;
        };
        price: {
          value: {
            cp: number;
          };
          per: number;
        };
        equipped: {
          carryType: string;
        };
        stackGroup: null;
        negateBulk: {
          value: string;
        };
        containerId: string;
        size: string;
        material: {
          type: null;
          grade: null;
        };
        identification: {
          status: string;
          unidentified: {
            name: string;
            img: string;
            data: {
              description: {
                value: string;
              };
            };
          };
          misidentified: {};
        };
        usage: {
          value: string;
        };
        consumableType: {
          value: string;
        };
        charges: {
          value: number;
          max: number;
        };
        consume: {
          value: string;
        };
        autoDestroy: {
          value: boolean;
        };
        spell: null;
      };
      type: string;
      flags: {
        core: {
          sourceId: string;
        };
        "scene-packer": {
          hash: string;
        };
      };
      effects: "undefined";
      folder: null;
      sort: number;
      ownership: {
        default: number;
        f5TQXRGH0xdq9tP0: number;
      };
      _stats: {
        systemId: string;
        systemVersion: string;
        coreVersion: string;
        createdTime: number;
        modifiedTime: number;
        lastModifiedBy: string;
      };
    }>;
    backpack: Array<{
      _id: string;
      img: string;
      name: string;
      system: {
        description: {
          gm: string;
          value: string;
        };
        rules: "undefined";
        slug: string;
        _migration: {
          version: number;
          lastMigration: null;
          previous: {
            schema: number;
            foundry: string;
            system: string;
          };
        };
        traits: {
          otherTags: "undefined";
          value: "undefined";
          rarity: string;
        };
        publication: {
          title: string;
          authors: string;
          license: string;
          remaster: boolean;
        };
        level: {
          value: number;
        };
        quantity: number;
        baseItem: null;
        hp: {
          value: number;
          max: number;
        };
        hardness: number;
        weight: {
          value: string;
        };
        equippedBulk: {
          value: string;
        };
        price: {
          value: {
            sp: number;
          };
        };
        equipped: {
          carryType: string;
          invested: null;
          inSlot: boolean;
        };
        stackGroup: null;
        negateBulk: {
          value: string;
        };
        containerId: null;
        size: string;
        material: {
          type: null;
          grade: null;
        };
        identification: {
          status: string;
          unidentified: {
            name: string;
            img: string;
            data: {
              description: {
                value: string;
              };
            };
          };
          misidentified: {};
        };
        usage: {
          value: string;
        };
        bulkCapacity: {
          value: string;
        };
        collapsed: boolean;
        stowing: boolean;
      };
      type: string;
      flags: {
        core: {
          sourceId: string;
        };
        "scene-packer": {
          hash: string;
        };
      };
      effects: "undefined";
      folder: null;
      sort: number;
      ownership: {
        default: number;
        f5TQXRGH0xdq9tP0: number;
      };
      _stats: {
        systemId: string;
        systemVersion: string;
        coreVersion: string;
        createdTime: number;
        modifiedTime: number;
        lastModifiedBy: string;
      };
    }>;
    deity: Array<{
      img: string;
      name: string;
      system: {
        description: {
          gm: string;
          value: string;
        };
        rules: "undefined";
        slug: string;
        _migration: {
          version: number;
          lastMigration: null;
          previous: {
            schema: number;
            foundry: string;
            system: string;
          };
        };
        traits: {
          otherTags: "undefined";
        };
        publication: {
          title: string;
          authors: string;
          license: string;
          remaster: boolean;
        };
        category: string;
        alignment: {
          own: null;
          follower: "undefined";
        };
        domains: {
          primary: "undefined";
          alternate: "undefined";
        };
        font: "undefined";
        ability: "undefined";
        skill: null;
        weapons: "undefined";
        spells: {};
      };
      type: string;
      flags: {
        core: {
          sourceId: string;
        };
        "scene-packer": {
          hash: string;
        };
      };
      effects: "undefined";
      folder: null;
      sort: number;
      ownership: {
        default: number;
        f5TQXRGH0xdq9tP0: number;
      };
      _stats: {
        systemId: string;
        systemVersion: string;
        coreVersion: string;
        createdTime: number;
        modifiedTime: number;
        lastModifiedBy: string;
      };
      _id: string;
    }>;
    effect: Array<{
      _id: string;
      name: string;
      type: string;
      img: string;
      effects: "undefined";
      folder: null;
      sort: number;
      flags: {
        core: {
          sourceId: string;
        };
        "pf2e-ranged-combat": {
          targetId: string;
          name: string;
          capacity: number;
          remaining: number;
          ammunitionName: string;
          ammunitionImg: string;
          ammunitionItemId: string;
          ammunitionSourceId: string;
        };
        pf2e: {
          rulesSelections: {
            weapon: string;
          };
        };
        "scene-packer": {
          hash: string;
        };
      };
      system: {
        description: {
          gm: string;
          value: string;
        };
        rules: "undefined";
        slug: null;
        _migration: {
          version: number;
          lastMigration: null;
          previous: {
            schema: number;
            foundry: string;
            system: string;
          };
        };
        traits: {
          otherTags: "undefined";
          value: "undefined";
          rarity: string;
        };
        publication: {
          title: string;
          authors: string;
          license: string;
          remaster: boolean;
        };
        level: {
          value: number;
        };
        duration: {
          value: number;
          unit: string;
          expiry: string;
          sustained: boolean;
        };
        start: {
          value: number;
          initiative: number;
        };
        tokenIcon: {
          show: boolean;
        };
        badge: null;
        context: null;
        target: null;
      };
      ownership: {
        default: number;
        I90qJ09IMT0McqwG: number;
        f5TQXRGH0xdq9tP0: number;
      };
      _stats: {
        systemId: string;
        systemVersion: string;
        coreVersion: string;
        createdTime: number;
        modifiedTime: number;
        lastModifiedBy: string;
      };
    }>;
    equipment: Array<{
      _id: string;
      img: string;
      name: string;
      system: {
        description: {
          gm: string;
          value: string;
        };
        rules: {
          key: string;
          predicate: string;
          value: RuleValueTypes;
          category: string;
          damage: {
            base: {
              damageType: string;
              dice: number;
              die: string;
            };
            [k: string]: {
              damageType: string;
              dice: number;
              die: string;
            };
          };
          otherTags: string;
          damageType: string;
          selector: string;
          domain: string;
          label: string;
          option: string;
          toggleable: boolean;
          slug: string;
          _migration: {
            version: number;
            lastMigration: null;
            previous: {
              schema: number;
              foundry: string;
              system: string;
            };
          };
        }[];
        slug: string;
        _migration: {
          version: number;
          lastMigration: null;
          previous: {
            schema: number;
            foundry: string;
            system: string;
          };
        };
        traits: {
          otherTags: "undefined";
          value: "undefined";
          rarity: string;
        };
        publication: {
          title: string;
          authors: string;
          license: string;
          remaster: boolean;
        };
        level: {
          value: number;
        };
        quantity: number;
        baseItem: null;
        hp: {
          value: number;
          max: number;
        };
        hardness: number;
        weight: {
          value: string;
        };
        equippedBulk: {
          value: string;
        };
        price: {
          value: {
            sp: number;
          };
        };
        equipped: {
          carryType: string;
          invested: null;
        };
        stackGroup: null;
        negateBulk: {
          value: string;
        };
        containerId: null;
        size: string;
        material: {
          type: null;
          grade: null;
        };
        identification: {
          status: string;
          unidentified: {
            name: string;
            img: string;
            data: {
              description: {
                value: string;
              };
            };
          };
          misidentified: {};
        };
        usage: {
          value: string;
        };
      };
      type: string;
      flags: {
        core: {
          sourceId: string;
        };
        "scene-packer": {
          hash: string;
        };
      };
      effects: "undefined";
      folder: null;
      sort: number;
      ownership: {
        default: number;
        f5TQXRGH0xdq9tP0: number;
      };
      _stats: {
        systemId: string;
        systemVersion: string;
        coreVersion: string;
        createdTime: number;
        modifiedTime: number;
        lastModifiedBy: string;
      };
      traits: {
        otherTags: "undefined";
        value: "undefined";
        rarity: string;
      };
      publication: {
        title: string;
        authors: string;
        license: string;
        remaster: boolean;
      };
      level: {
        value: number;
      };
      quantity: number;
      baseItem: null;
      hp: {
        value: number;
        max: number;
      };
      hardness: number;
      weight: {
        value: string;
      };
      equippedBulk: {
        value: string;
      };
      price: {
        value: {
          cp: number;
        };
      };
      equipped: {
        carryType: string;
        invested: null;
      };
      stackGroup: null;
      negateBulk: {
        value: string;
      };
      containerId: string;
      size: string;
      material: {
        type: null;
        grade: null;
      };
      identification: {
        status: string;
        unidentified: {
          name: string;
          img: string;
          data: {
            description: {
              value: string;
            };
          };
        };
        misidentified: {};
      };
      usage: {
        value: string;
      };
      
    }>;
    feat: Array<{
      img: string;
      name: string;
      system: {
        description: {
          gm: string;
          value: string;
        };
        rules: Array<{
          key: string;
          selector: string;
          type: string;
          value: number;
        }>;
        slug: string;
        _migration: {
          version: number;
          lastMigration: null;
          previous: {
            schema: number;
            foundry: string;
            system: string;
          };
        };
        traits: {
          otherTags: "undefined";
          value: string;
          rarity: string;
        };
        publication: {
          title: string;
          authors: string;
          license: string;
          remaster: boolean;
        };
        level: {
          value: number;
        };
        category: string;
        onlyLevel1: boolean;
        maxTakable: number;
        actionType: {
          value: string;
        };
        actions: {
          value: null;
        };
        prerequisites: {
          value: "undefined";
        };
        location: null;
      };
      type: string;
      flags: {
        core: {
          sourceId: string;
        };
        pf2e: {
          grantedBy: {
            id: string;
            onDelete: string;
          };
        };
        "scene-packer": {
          hash: string;
        };
      };
      effects: "undefined";
      folder: null;
      sort: number;
      ownership: {
        default: number;
        OjkBEDlhd5y4dqPM: number;
      };
      _stats: {
        systemId: string;
        systemVersion: string;
        coreVersion: string;
        createdTime: number;
        modifiedTime: number;
        lastModifiedBy: string;
      };
      _id: string;
    }>;
    heritage: Array<{
      img: string;
      name: string;
      system: {
        description: {
          gm: string;
          value: string;
        };
        rules: Array<{
          adjustName: boolean;
          choices: { filter: string; itemType: string };
          flag?: string;
          key?: string;
          prompt?: string;
          selection?: string;
          uuid?: string;
        }>;
        slug: string;
        _migration: {
          version: number;
          lastMigration: null;
          previous: {
            schema: number;
            foundry: string;
            system: string;
          };
        };
        traits: {
          otherTags: "undefined";
          value: "undefined";
          rarity: string;
        };
        publication: {
          title: string;
          authors: string;
          license: string;
          remaster: boolean;
        };
        ancestry: {
          name: string;
          slug: string;
          uuid: string;
        };
      };
      type: string;
      flags: {
        core: {
          sourceId: string;
        };
        pf2e: {
          itemGrants: {
            incredibleInitiative: {
              id: string;
              onDelete: string;
            };
          };
        };
        "scene-packer": {
          hash: string;
        };
      };
      effects: "undefined";
      folder: null;
      sort: number;
      ownership: {
        default: number;
        OjkBEDlhd5y4dqPM: number;
      };
      _stats: {
        systemId: string;
        systemVersion: string;
        coreVersion: string;
        createdTime: number;
        modifiedTime: number;
        lastModifiedBy: string;
      };
      _id: string;
    }>;
    kit: "undefined";
    lore: "undefined";
    melee: "undefined";
    spell: "undefined";
    spellcastingEntry: "undefined";
    treasure: "undefined";
    base: "undefined";
    weapon: Array<{
      _id: string;
      img: string;
      name: string;
      system: {
        description: {
          gm: string;
          value: string;
        };
        rules: "undefined";
        slug: string;
        _migration: {
          version: number;
          lastMigration: null;
          previous: {
            schema: number;
            foundry: string;
            system: string;
          };
        };
        traits: {
          otherTags: "undefined";
          value: string;
          rarity: string;
        };
        publication: {
          title: string;
          authors: string;
          license: string;
          remaster: boolean;
        };
        level: {
          value: number;
        };
        quantity: number;
        baseItem: string;
        hp: {
          value: number;
          max: number;
        };
        hardness: number;
        weight: {
          value: string;
        };
        equippedBulk: {
          value: string;
        };
        price: {
          value: {
            gp: number;
          };
        };
        equipped: {
          carryType: string;
          invested: null;
          handsHeld: number;
        };
        stackGroup: null;
        negateBulk: {
          value: string;
        };
        containerId: null;
        size: string;
        material: {
          type: null;
          grade: null;
        };
        identification: {
          status: string;
          unidentified: {
            name: string;
            img: string;
            data: {
              description: {
                value: string;
              };
            };
          };
          misidentified: {};
        };
        usage: {
          value: string;
        };
        category: string;
        group: string;
        bonus: {
          value: number;
        };
        damage: {
          dice: number;
          die: string;
          damageType: string;
          persistent: null;
        };
        bonusDamage: {
          value: number;
        };
        splashDamage: {
          value: number;
        };
        range: null;
        reload: {
          value: string;
        };
        potencyRune: {
          value: null;
        };
        strikingRune: {
          value: string;
        };
        specific: {
          value: boolean;
        };
        propertyRune1: {
          value: string;
        };
        propertyRune2: {
          value: string;
        };
        propertyRune3: {
          value: string;
        };
        propertyRune4: {
          value: string;
        };
        property1: {
          value: string;
          dice: number;
          die: string;
          damageType: string;
          critDice: number;
          critDie: string;
          critDamage: string;
          critDamageType: string;
        };
      };
      type: string;
      flags: {
        core: {
          sourceId: string;
        };
        "scene-packer": {
          hash: string;
        };
      };
      effects: "undefined";
      folder: null;
      sort: number;
      ownership: {
        default: number;
        f5TQXRGH0xdq9tP0: number;
      };
      _stats: {
        systemId: string;
        systemVersion: string;
        coreVersion: string;
        createdTime: number;
        modifiedTime: number;
        lastModifiedBy: string;
      };
    }>;
  };
  flags: {
    "scene-packer": {
      hash: string;
    };
    "pf2e-fatigue": {
      startTime: number;
      isFatigued: boolean;
    };
    pf2e: {
      freeCrafting: boolean;
      rollOptions: {
        all: {
          "self:type:character": boolean;
          "self:creature": boolean;
          "self:level:2": boolean;
          "self:ancestry:human": boolean;
          "self:trait:human": boolean;
          "self:trait:humanoid": boolean;
          "heritage:versatile-heritage": boolean;
          "self:heritage:versatile-heritage": boolean;
          "feat:incredible-initiative": boolean;
          "class:rogue": boolean;
          "feat:group-coercion": boolean;
          "feat:general-training": boolean;
          "feat:weapon-proficiency": boolean;
          "feat:nimble-dodge": boolean;
          "feat:experienced-smuggler": boolean;
          deity: boolean;
          "deity:primary:atheism": boolean;
          "deity:primary:alignment:follower:lg": boolean;
          "deity:primary:alignment:follower:ng": boolean;
          "deity:primary:alignment:follower:cg": boolean;
          "deity:primary:alignment:follower:ln": boolean;
          "deity:primary:alignment:follower:n": boolean;
          "deity:primary:alignment:follower:cn": boolean;
          "deity:primary:alignment:follower:le": boolean;
          "deity:primary:alignment:follower:ne": boolean;
          "deity:primary:alignment:follower:ce": boolean;
          "self:deity:atheism": boolean;
          "armor:base:leather-armor": boolean;
          "armor:category:light": boolean;
          "armor:equipped": boolean;
          "armor:group:leather": boolean;
          "armor:id:oUuJk3ejhQFwqtZ1": boolean;
          "armor:leather-armor": boolean;
          "armor:level:0": boolean;
          "armor:rarity:common": boolean;
          "armor:slug:leather-armor": boolean;
          "self:effect:magazine-loaded-modern-9mm-magazine-with-14-bullets-14-14": boolean;
          "self:effect:loaded-dagger-pistol-rounds-dagger-pistol": boolean;
          "feat:flying-blade": boolean;
          "feat:bon-mot": boolean;
          "self:condition:fatigued": boolean;
          "feat:tumble-behind-rogue": boolean;
          "feat:fanes-fourberie": boolean;
          "feat:pickpocket": boolean;
          "feat:juggler-dedication": boolean;
          "feat:juggle": boolean;
          "feature:rogues-racket": boolean;
          "feature:sneak-attack": boolean;
          "feature:surprise-attack": boolean;
          "feature:ruffian": boolean;
          "self:condition:hidden": boolean;
          "self:mode:living": boolean;
          "perception:rank:2": boolean;
          "attribute:str:mod:2": boolean;
          "attribute:dex:mod:4": boolean;
          "attribute:con:mod:2": boolean;
          "attribute:int:mod:0": boolean;
          "attribute:wis:mod:0": boolean;
          "attribute:cha:mod:1": boolean;
          "skill:acr:rank:1": boolean;
          "skill:arc:rank:0": boolean;
          "skill:ath:rank:1": boolean;
          "skill:cra:rank:1": boolean;
          "skill:dec:rank:1": boolean;
          "skill:dip:rank:1": boolean;
          "skill:itm:rank:1": boolean;
          "skill:med:rank:0": boolean;
          "skill:nat:rank:0": boolean;
          "skill:occ:rank:0": boolean;
          "skill:prf:rank:1": boolean;
          "skill:rel:rank:0": boolean;
          "skill:soc:rank:0": boolean;
          "skill:ste:rank:1": boolean;
          "skill:sur:rank:0": boolean;
          "skill:thi:rank:1": boolean;
          "attack:unarmed:rank:1": boolean;
          "attack:simple:rank:1": boolean;
          "attack:martial:rank:1": boolean;
          "attack:advanced:rank:0": boolean;
          "defense:unarmored:rank:1": boolean;
          "defense:light:rank:1": boolean;
          "defense:medium:rank:1": boolean;
          "defense:heavy:rank:0": boolean;
          "defense:light-barding:rank:0": boolean;
          "defense:heavy-barding:rank:0": boolean;
          "save:fortitude:rank:1": boolean;
          "save:reflex:rank:2": boolean;
          "save:will:rank:2": boolean;
          "hands-free:0": boolean;
          "hands-free:but-really:0": boolean;
          "self:armored": boolean;
          "self:size:2": boolean;
          "self:size:medium": boolean;
          "hp-remaining:28": boolean;
          "hp-percent:100": boolean;
          "speed:land": boolean;
        };
        ac: {};
        "skill-check": {
          "compass-in-possession": boolean;
          "armor:strength-requirement-met": boolean;
        };
        initiative: {
          "armor:strength-requirement-met": boolean;
        };
      };
      trackedItems: {};
      favoredWeaponRank: number;
      quickAlchemy: boolean;
      sheetTabs: {
        character: boolean;
        actions: boolean;
        inventory: boolean;
        spellcasting: boolean;
        crafting: boolean;
        proficiencies: boolean;
        feats: boolean;
        effects: boolean;
        biography: boolean;
        pfs: boolean;
      };
      showBasicUnarmed: boolean;
      sneakAttackDamage: {
        number: number;
        faces: number;
      };
      highestWeaponDamageDice: number;
    };
    "xdy-pf2e-workbench": {
      dyingLastApplied: number;
    };
    sequencer: {
      effects: "undefined";
    };
  };
  hitPoints: {
    value: number;
    max: number;
    temp: number;
    unrecoverable: number;
    negativeHealing: boolean;
    recoveryMultiplier: number;
    recoveryAddend: number;
  };
  items: Array<ItemPF2e>;
  class: {
    img: string;
    name: string;
    system: {
      description: {
        gm: string;
        value: string;
      };
      rules: Array<{
        key: string;
        mode: string;
        path: string;
        value: number;
      }>;
      slug: string;
      _migration: {
        version: number;
        lastMigration: null;
        previous: {
          schema: number;
          foundry: string;
          system: string;
        };
      };
      traits: {
        otherTags: "undefined";
        value: "undefined";
        rarity: string;
      };
      publication: {
        title: string;
        authors: string;
        license: string;
        remaster: boolean;
      };
      keyAbility: {
        value: string;
        selected: string;
      };
      items: {
        "0kdn2": {
          img: string;
          level: number;
          name: string;
          uuid: string;
        };
        "1nwhg": {
          img: string;
          level: number;
          name: string;
          uuid: string;
        };
        "1zn3l": {
          img: string;
          level: number;
          name: string;
          uuid: string;
        };
        "2xl4q": {
          img: string;
          level: number;
          name: string;
          uuid: string;
        };
        "4al2i": {
          img: string;
          level: number;
          name: string;
          uuid: string;
        };
        "517c6": {
          img: string;
          level: number;
          name: string;
          uuid: string;
        };
        "6ddtr": {
          img: string;
          level: number;
          name: string;
          uuid: string;
        };
        "8tar0": {
          img: string;
          level: number;
          name: string;
          uuid: string;
        };
        cifjd: {
          img: string;
          level: number;
          name: string;
          uuid: string;
        };
        e9ikq: {
          img: string;
          level: number;
          name: string;
          uuid: string;
        };
        g1dmk: {
          img: string;
          level: number;
          name: string;
          uuid: string;
        };
        hg9s4: {
          img: string;
          level: number;
          name: string;
          uuid: string;
        };
        i70zj: {
          img: string;
          level: number;
          name: string;
          uuid: string;
        };
        nilrb: {
          img: string;
          level: number;
          name: string;
          uuid: string;
        };
        odz8x: {
          img: string;
          level: number;
          name: string;
          uuid: string;
        };
        pfjze: {
          img: string;
          level: number;
          name: string;
          uuid: string;
        };
        qx6de: {
          img: string;
          level: number;
          name: string;
          uuid: string;
        };
        sjjee: {
          img: string;
          level: number;
          name: string;
          uuid: string;
        };
        thypm: {
          img: string;
          level: number;
          name: string;
          uuid: string;
        };
        xn3fx: {
          img: string;
          level: number;
          name: string;
          uuid: string;
        };
      };
      hp: number;
      trainedSkills: {
        value: string;
        additional: number;
      };
      perception: number;
      savingThrows: {
        fortitude: number;
        reflex: number;
        will: number;
      };
      attacks: {
        simple: number;
        martial: number;
        advanced: number;
        unarmed: number;
        other: {
          name: string;
          rank: number;
        };
      };
      defenses: {
        unarmored: number;
        light: number;
        medium: number;
        heavy: number;
      };
      classDC: number;
      ancestryFeatLevels: {
        value: number;
      };
      classFeatLevels: {
        value: number;
      };
      generalFeatLevels: {
        value: number;
      };
      skillFeatLevels: {
        value: number;
      };
      skillIncreaseLevels: {
        value: number;
      };
    };
    type: string;
    flags: {
      core: {
        sourceId: string;
      };
      "scene-packer": {
        hash: string;
      };
    };
    effects: "undefined";
    folder: null;
    sort: number;
    ownership: {
      default: number;
      OjkBEDlhd5y4dqPM: number;
    };
    _stats: {
      systemId: string;
      systemVersion: string;
      coreVersion: string;
      createdTime: number;
      modifiedTime: number;
      lastModifiedBy: string;
    };
    _id: string;
  };
  classDC: {
    slug: string;
    label: string;
    data: {
      slug: string;
      label: string;
      attribute: string;
      rank: number;
      domains: string;
      check: {
        type: string;
        domains: string;
      };
      modifiers: Array<{
        slug: string;
        label: string;
        modifier: number;
        type: string;
        ability: string;
        adjustments: "undefined";
        force: boolean;
        enabled: boolean;
        ignored: boolean;
        source: null;
        custom: boolean;
        damageType: null;
        damageCategory: null;
        predicate: "undefined";
        critical: null;
        traits: "undefined";
        hideIfDisabled: boolean;
        kind: string;
      }>;
      dc: {
        domains: string;
      };
    };
    domains: string;
    modifiers: Array<{
      slug: string;
      label: string;
      modifier: number;
      type: string;
      ability: string;
      adjustments: "undefined";
      force: boolean;
      enabled: boolean;
      ignored: boolean;
      source: null;
      custom: boolean;
      damageType: null;
      damageCategory: null;
      predicate: "undefined";
      critical: null;
      traits: "undefined";
      hideIfDisabled: boolean;
      kind: string;
    }>;
    attribute: string;
    rank: number;
    proficient: boolean;
    base: null;
    config: {};
  };
  classDCs: {
    rogue: {
      slug: string;
      label: string;
      data: {
        slug: string;
        label: string;
        attribute: string;
        rank: number;
        domains: string;
        check: {
          type: string;
          domains: string;
        };
        modifiers: Array<{
          slug: string;
          label: string;
          modifier: number;
          type: string;
          ability: string;
          adjustments: "undefined";
          force: boolean;
          enabled: boolean;
          ignored: boolean;
          source: null;
          custom: boolean;
          damageType: null;
          damageCategory: null;
          predicate: "undefined";
          critical: null;
          traits: "undefined";
          hideIfDisabled: boolean;
          kind: string;
        }>;
      };
      dc: {
        domains: string;
      };
      domains: string;
      modifiers: Array<{
        slug: string;
        label: string;
        modifier: number;
        type: string;
        ability: string;
        adjustments: "undefined";
        force: boolean;
        enabled: boolean;
        ignored: boolean;
        source: null;
        custom: boolean;
        damageType: null;
        damageCategory: null;
        predicate: "undefined";
        critical: null;
        traits: "undefined";
        hideIfDisabled: boolean;
        kind: string;
      }>;
      attribute: string;
      rank: number;
      proficient: boolean;
      base: null;
      config: {};
    };
  };
  heroPoints: {
    value: number;
    max: number;
  };
  keyAttribute: string;
  auras: {};
  conditions: ConditionPF2e[];
  img: string;
  name: string;
  overrides: {};
  ownership: Ownership;
  statuses: {};
  synthetics: {
    criticalSpecalizations: {
      standard: any;
      alternate: "undefined";
    };
    damageDice: {
      damage: any;
      "strike-damage": any;
    };

    degreeOfSuccessAdjustments: {};
    dexterityModifierCaps: "undefined";
    modifierAdjustments: {
      all: "undefined";
      damage: "undefined";
    };
    modifiers: {
      all: "undefined";
      damage: "undefined";
      initiative: any;
      ac: any;
      "saving-throw": any;
    };
    movementTypes: {};
    multipleAttackPenalties: {};
    ephemeralEffects: {
      "strike-attack-roll": {
        target: any;
        origin: "undefined";
      };
      "spell-attack-roll": {
        target: any;
        origin: "undefined";
      };
      "strike-damage": {
        target: any;
        origin: "undefined";
      };
      "attack-spell-damage": {
        target: any;
        origin: "undefined";
      };
    };
    rollNotes: {};
    rollSubstitutions: {};
    rollTwice: {};
    senses: "undefined";
    statistics: {};
    strikeAdjustments: "undefined";
    strikes: {};
    striking: {};
    tokenMarks: {};
    toggles: Array<{
      itemId: string;
      label: string;
      placement: string;
      domain: string;
      option: string;
      suboptions: "undefined";
      alwaysActive: boolean;
      checked: boolean;
      enabled: boolean;
    }>;
    tokenEffectIcons: "undefined";
    tokenOverrides: {};
    weaponPotency: {
      "strike-attack-roll": Array<{
        label: string;
        type: string;
        bonus: number;
        predicate: "undefined";
      }>;
    };
    preparationWarnings: {};
  };
  type: "character";
  armorClass: {
    slug: string;
    label: string;
    data: {
      rank: number;
      attribute: string;
      modifiers: Array<{
        slug: string;
        label: string;
        modifier: number;
        type: string;
        ability: string;
        adjustments: "undefined";
        force: boolean;
        enabled: boolean;
        ignored: boolean;
        source: null;
        custom: boolean;
        damageType: null;
        damageCategory: null;
        predicate: "undefined";
        critical: null;
        traits: "undefined";
        hideIfDisabled: boolean;
        kind: string;
      }>;
      label: string;
      slug: string;
      domains: string;
      proficient: boolean;
      dc: {
        label: string;
        domains: string;
        modifiers: "undefined";
      };
      check: {
        type: string;
        domains: string;
      };
    };
    domains: string;
    modifiers: Array<{
      slug: string;
      label: string;
      modifier: number;
      type: string;
      ability: string;
      adjustments: "undefined";
      force: boolean;
      enabled: boolean;
      ignored: boolean;
      source: null;
      custom: boolean;
      damageType: null;
      damageCategory: null;
      predicate: "undefined";
      critical: null;
      traits: "undefined";
      hideIfDisabled: boolean;
      kind: string;
    }>;
    attribute: string;
    rank: number;
    proficient: boolean;
    base: null;
    config: {};
    details: string;
  };
  domains: string;
  label: string;
  modifiers: Array<{
    slug: string;
    label: string;
    modifier: number;
    type: string;
    ability: string;
    adjustments: "undefined";
    force: boolean;
    enabled: boolean;
    ignored: boolean;
    source: null;
    custom: boolean;
    damageType: null;
    damageCategory: null;
    predicate: "undefined";
    critical: null;
    traits: "undefined";
    hideIfDisabled: boolean;
    kind: string;
  }>;
  options: any;
}

interface CharacterSource extends BaseCreatureSource<"character", CharacterSystemData> {
  flags: PartialDeep<CharacterFlags>;
}
type CharacterFlags = ActorFlagsPF2e & {
  pf2e: {
    /** If applicable, the character's proficiency rank in their deity's favored weapon */
    favoredWeaponRank: number;
    /** The highest number of damage dice among the character's equipped weapons and available unarmed attacks */
    highestWeaponDamageDice: number;
    /** Whether items are crafted without consuming resources */
    freeCrafting: boolean;
    /** Whether the alchemist's (and related dedications) Quick Alchemy ability is enabled */
    quickAlchemy: boolean;
    /** Whether ABP should be disabled despite it being on for the world */
    disableABP?: boolean;
    /** Which sheet tabs are displayed */
    sheetTabs: any;
    /** Whether the basic unarmed attack is shown on the Actions tab */
    showBasicUnarmed: boolean;
  };
};
interface CharacterSkillData extends SkillData {
  ability: AbilityString;
  /** The proficiency rank ("TEML") */
  rank: ZeroToFour;
  /** Whether this skill is subject to an armor check penalty */
  armor: boolean;
  /** Is this skill a Lore skill? */
  lore?: boolean;
  /** If this is a lore skill, what item it came from */
  itemID?: string;
}
/** The raw information contained within the actor data object for characters. */
interface CharacterSystemData extends CreatureSystemData {
  /** The six primary ability scores. */
  abilities: CharacterAbilities;
  /** Character build data, currently containing ability boosts and flaws */
  build: {
    abilities: CharacterBuildingAbilitySystemData;
  };
  /** The three save types. */
  saves: CharacterSaves;
  /** Tracks proficiencies for martial (weapon and armor) skills. */
  martial: MartialProficiencies;
  /** Various details about the character, such as level, experience, etc. */
  details: CharacterDetails;
  attributes: CharacterAttributes;
  /** A catch-all for character proficiencies */
  proficiencies: {
    /** Zero or more class DCs, used for saves related to class abilities. */
    classDCs: Record<string, ClassDCData>;
    /** Spellcasting attack modifiers and DCs for each magical tradition */
    traditions: MagicTraditionProficiencies;
    /** Aliased path components for use by rule element during property injection */
    aliases?: Record<string, string | undefined>;
  };
  /** Player skills, used for various skill checks. */
  skills: Record<SkillAbbreviation, CharacterSkillData>;
  traits: CharacterTraitsData;
  /** Pathfinder Society Organized Play */
  pfs: PathfinderSocietyData;
  /** Special strikes which the character can take. */
  actions: CharacterStrike[];
  resources: CharacterResources;
  /** Crafting-related data, including known formulas */
  crafting: {
    formulas: CraftingFormulaData[];
    entries: Record<string, Partial<CraftingEntryData>>;
  };
  exploration: string[];
}
interface CharacterAbilityData extends AbilityData {
  /** An ability score prior to modification by items */
  base: number;
}
interface CharacterBuildingAbilitySourceData {
  /** Whether this PC's ability scores are being manually entered (aka custom) */
  manual: boolean;
  boosts: {
    1: AbilityString[];
    5: AbilityString[];
    10: AbilityString[];
    15: AbilityString[];
    20: AbilityString[];
  };
}
/**
 * Prepared system data for character ability scores. This is injected by ABC classes to complete it.
 */
interface CharacterBuildingAbilitySystemData extends CharacterBuildingAbilitySourceData {
  /** Key ability score options drawn from class and class features */
  keyOptions: AbilityString[];
  boosts: CharacterBuildingAbilitySourceData["boosts"] & {
    ancestry: AbilityString[];
    background: AbilityString[];
    class: AbilityString | null;
  };
  /** Number of remaining allowed boosts (UI and gradual ability boosts only) */
  allowedBoosts: {
    1: number;
    5: number;
    10: number;
    15: number;
    20: number;
  };
  flaws: {
    ancestry: AbilityString[];
  };
}
type CharacterAbilities = Record<AbilityString, CharacterAbilityData>;
interface CharacterSaveData extends SaveData {
  ability: AbilityString;
  /** The proficiency rank ("TEML") */
  rank: ZeroToFour;
}
type CharacterSaves = Record<SaveType, CharacterSaveData>;
interface CharacterProficiency {
  label?: string;
  /** The actual modifier for this martial type. */
  value: number;
  /** Describes how the value was computed. */
  breakdown: string;
  /** The proficiency rank (0 untrained - 4 legendary). */
  rank: ZeroToFour;
  /** Can this proficiency be edited or deleted? */
  immutable?: boolean;
  /** A proficiency in a non-armor/weapon category and not added by a feat or feature */
  custom?: boolean;
}
/** A proficiency with a rank that depends on another proficiency */
interface MartialProficiency extends Omit<CharacterProficiency, "custom"> {
  /** A predicate to match against weapons and unarmed attacks */
  definition: PredicatePF2e;
  /** The category to which this proficiency is linked */
  sameAs?: WeaponCategory;
  /** The maximum rank this proficiency can reach */
  maxRank?: Exclude<ProficiencyRank, "untrained">;
}
interface LinkedProficiency extends MartialProficiency {
  sameAs: WeaponCategory;
}
type MagicTraditionProficiencies = Record<MagicTradition, CharacterProficiency>;
type CategoryProficiencies = Record<ArmorCategory | WeaponCategory, CharacterProficiency>;
type BaseWeaponProficiencyKey = `weapon-base-${BaseWeaponType}`;
type BaseWeaponProficiencies = Record<BaseWeaponProficiencyKey, CharacterProficiency>;
type WeaponGroupProficiencyKey = `weapon-group-${WeaponGroup}`;
type WeaponGroupProfiencies = Record<WeaponGroupProficiencyKey, CharacterProficiency>;
type LinkedProficiencies = Record<string, MartialProficiency>;
type MartialProficiencies = CategoryProficiencies & BaseWeaponProficiencies & WeaponGroupProfiencies & LinkedProficiencies;
type MartialProficiencyKey = keyof Required<MartialProficiencies>;
/** The full data for the class DC; similar to SkillData, but is not rollable. */
interface ClassDCData extends Required<AbilityBasedStatistic>, StatisticTraceData {
  label: string;
  rank: ZeroToFour;
  primary: boolean;
}
export type WeaponAuxiliaryAction = any;
/** The full data for a character strike */
interface CharacterStrike extends StrikeData {
  item: WeaponPF2e;
  /** Whether this attack is visible on the sheet */
  visible: boolean;
  /** Domains/selectors from which modifiers are drawn */
  domains: string[];
  altUsages: CharacterStrike[];
  auxiliaryActions: WeaponAuxiliaryAction[];
  weaponTraits: TraitViewData[];
  versatileOptions: VersatileWeaponOption[];
}
interface VersatileWeaponOption {
  value: DamageType;
  selected: boolean;
  label: string;
  glyph: string | null;
}
/** A Pathfinder Society Faction */
type PFSFaction = "EA" | "GA" | "HH" | "VS" | "RO" | "VW";
/** A Pathfinder Society School */
type PFSSchool = "scrolls" | "spells" | "swords" | null;
/** PFS faction reputation values */
type PathfinderSocietyReputation = Record<PFSFaction, number | null>;
/** Pathfinder Society Organized Play data fields */
interface PathfinderSocietyData {
  /** Number assigned to the player. */
  playerNumber: number | null;
  /** Number assigned to the character. */
  characterNumber: number | null;
  /** Is the character currently affected by a level bump? */
  levelBump: boolean;
  /** Character's currently slotted faction */
  currentFaction: PFSFaction;
  /** Character's Pathfinder school */
  school: PFSSchool;
  /** Character's Reputation with all the factions */
  reputation: PathfinderSocietyReputation;
}
interface CharacterResources extends CreatureResources {
  /** The current and maximum number of hero points */
  heroPoints: ValueAndMax;
  /** The current and maximum number of invested items */
  investiture: ValueAndMax;
  crafting: {
    infusedReagents: ValueAndMax;
  };
}
interface CharacterPerception extends PerceptionData {
  rank: ZeroToFour;
}
type CharacterDetails = Omit<CreatureDetails, "creature"> & {
  /** The key ability which class saves (and other class-related things) scale off of. */
  keyability: {
    value: AbilityString;
  };
  /** How old the character is (user-provided field). */
  age: {
    value: string;
  };
  /** Character height (user-provided field). */
  height: {
    value: string;
  };
  /** Character weight (user-provided field). */
  weight: {
    value: string;
  };
  /** Character gender/pronouns (user-provided field). */
  gender: {
    value: string;
  };
  /** Character ethnicity (user-provided field). */
  ethnicity: {
    value: string;
  };
  /** Character nationality (i.e, what nation they hail from; user-provided field). */
  nationality: {
    value: string;
  };
  /** User-provided biography for their character; value is HTML. */
  biography: {
    /** Character appearance (user-provided field). value is HTML */
    appearance: string;
    /** Character Backstory (user-provided field). value is HTML */
    backstory: string;
    /** Character birthPlace (user-provided field). */
    birthPlace: string;
    /** Character attitude (user-provided field). */
    attitude: string;
    /** Character beliefs (user-provided field). */
    beliefs: string;
    /** Character likes (user-provided field). */
    likes: string;
    /** Character dislikes (user-provided field). */
    dislikes: string;
    /** Character catchphrases (user-provided field). */
    catchphrases: string;
    /** Campaign notes (user-provided field). value is HTML */
    campaignNotes: string;
    /** Character allies (user-provided field). value is HTML */
    allies: string;
    /** Character enemies (user-provided field). value is HTML */
    enemies: string;
    /** Character organaizations (user-provided field). value is HTML */
    organaizations: string;
  };
  /** The amount of experience this character has. */
  xp: {
    /** The current experience value.  */
    value: number;
    /** The minimum amount of experience (almost always '0'). */
    min: number;
    /** The maximum amount of experience before level up (usually '1000', but may differ.) */
    max: number;
    /** COMPUTED: The percentage completion of the current level (value / max). */
    pct: number;
  };
  /** Convenience information for easy access when the item class instance isn't available */
  ancestry: {
    name: string;
    trait: string;
    /** An "adopted" ancestry (typically gained through the Adopted Ancestry feat) */
    adopted: string | null;
    /** A versatile ancestry trait (such as "orc" for being a half-orc) */
    versatile: string | null;
    /** All ancestries and versatile heritages the character "counts as" when selecting ancestry feats */
    countsAs: string[];
  } | null;
  heritage: {
    name: string;
    trait: string | null;
  } | null;
  class: {
    name: string;
    trait: string;
  } | null;
  deities: CharacterDeities;
};
interface CharacterDeities {
  primary: DeityDetails | null;
  secondary: null;
  domains: {
    [K in DeityDomain]?: string;
  };
}
type DeityDetails = Pick<DeitySystemData, "alignment" | "skill"> & {
  weapons: BaseWeaponType[];
};
interface CharacterAttributes extends CreatureAttributes {
  /** The perception statistic */
  perception: CharacterPerception;
  /** Used for saves related to class abilities */
  classDC: ClassDCData | null;
  /** The best spell DC, used for certain saves related to feats */
  spellDC: {
    rank: number;
    value: number;
  } | null;
  /** The higher between highest spellcasting DC and (if present) class DC */
  classOrSpellDC: {
    rank: number;
    value: number;
  };
  /** Creature armor class, used to defend against attacks. */
  ac: ArmorClassTraceData;
  /** Initiative, used to determine turn order in combat. */
  initiative: InitiativeData;
  /** The amount of HP provided per level by the character's class. */
  classhp: number;
  /** The amount of HP provided at level 1 by the character's ancestry. */
  ancestryhp: number;
  /** The number of hands this character has free */
  handsFree: number;
  /** A bonus to the maximum amount of bulk that this character can carry. */
  bonusLimitBulk: number;
  /** A bonus to the maximum amount of bulk that this character can carry without being encumbered. */
  bonusEncumbranceBulk: number;
  /** The number of familiar abilities this character's familiar has access to. */
  familiarAbilities: {
    value: number;
  };
  /** Data related to character hitpoints. */
  hp: CharacterHitPoints;
  /** Data related to character stamina, when using the variant stamina rules. */
  sp: {
    /** The current number of stamina points. */
    value: number;
    /** The minimum number of stamina points (almost always '0'). */
    min: number;
    /** The maximum number of stamina points. */
    max: number;
    /** Any details about stamina points. */
    details: string;
  };
  /**
   * Data related to the currently equipped shield. This is copied from the shield data itself and exists to
   * allow for the shield health to be shown on an actor shield and token.
   */
  shield: HeldShieldData;
  /** Used in the variant stamina rules; a resource expended to regain stamina/hp. */
  resolve: {
    value: number;
    max: number;
  };
  /** Whether this actor is under a polymorph effect */
  polymorphed: boolean;
  /** Whether this actor is under a battle form polymorph effect */
  battleForm: boolean;
}
interface CharacterHitPoints extends HitPointsStatistic {
  recoveryMultiplier: number;
  recoveryAddend: number;
}
interface CharacterTraitsData extends CreatureTraitsData {
  senses: CreatureSensePF2e[];
}
/** Any document that is similar enough to a feat/feature to be used as a feat for the purposes of feat groups */
interface FeatLike<TParent extends ActorPF2e | null = ActorPF2e | null> extends ItemPF2e {
  category: string;
  group: any; //FeatGroup<Exclude<TParent, null>, this> | null;
  isFeat: boolean;
  isFeature: boolean;
  system: ItemSystemData & {
    location: string | null;
  };
}
interface SlottedFeat<T extends FeatLike = FeatPF2e> {
  id: string;
  level: number | string;
  feat?: T;
}
interface BonusFeat<T extends FeatLike = FeatPF2e> {
  feat: T;
}
export type {
  BaseWeaponProficiencyKey,
  BonusFeat,
  CategoryProficiencies,
  CharacterAttributes,
  CharacterDetails,
  CharacterFlags,
  CharacterProficiency,
  CharacterResources,
  CharacterSaveData,
  CharacterSaves,
  CharacterSkillData,
  CharacterSource,
  CharacterStrike,
  CharacterSystemData,
  CharacterTraitsData,
  ClassDCData,
  FeatLike,
  LinkedProficiency,
  MagicTraditionProficiencies,
  MartialProficiencies,
  MartialProficiency,
  MartialProficiencyKey,
  SlottedFeat,
  WeaponGroupProficiencyKey,
};
