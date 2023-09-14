import { PartialDeep } from "@/lib/utils";
import { EffectDuration } from ".";
import { Item } from "./items/item";

export interface KnownFlags {
  "dfreds-convenient-effects"?: {
    description?: string;
  };
  "condition-lab-triggler"?: {
    conditionId?: string;
  };
  dae?: {
    selfTarget?: boolean;
    selfTargetAlways?: boolean;
    stackable?: string;
    durationExpression?: string | "";
    macroRepeat?: "none" | "once" | "repeat" | "loop";
    specialDuration?: EffectDuration[];
    transfer?: boolean;
    itemData?: Item;
    token?: string;
    damageApplied?: number;
  };
  core: {
    statusId?: string;
    overlay?: boolean;
  };
  ActiveAuras?: {
    isAura?: boolean;
    aura?: string;
    radius?: string;
    alignment?: string;
    type?: string;
    ignoreSelf?: boolean;
    height?: boolean;
    hidden?: boolean;
    displayTemp?: boolean;
    hostile?: boolean;
    onlyOnce?: boolean;
  };
  "times-up"?: {
    isPassive?: boolean;
  };
  "visual-active-effects"?: {
    data?: {
      content?: string; //
    };
  };
  ddbimporter?: {
    disabled?: boolean;
    dndbeyond: {
      url: string;
      characterId: string;
      totalLevels: number;
      proficiencies: null;
      proficienciesIncludingEffects: null;
      roUrl: string;
      characterValues: null;
      templateStrings: null;
      campaign: {
        id: number;
        name: string;
        description: string;
        link: string;
        publicNotes: string;
        dmUserId: number;
        dmUsername: string;
        characters: [
          {
            userId: number;
            username: string;
            characterId: number;
            characterName: string;
            characterUrl: string;
            avatarUrl: string;
            privacyType: number;
            campaignId: null;
            isAssigned: boolean;
          },
          {
            userId: number;
            username: string;
            characterId: number;
            characterName: string;
            characterUrl: string;
            avatarUrl: string;
            privacyType: number;
            campaignId: null;
            isAssigned: boolean;
          },
          {
            userId: number;
            username: string;
            characterId: number;
            characterName: string;
            characterUrl: string;
            avatarUrl: string;
            privacyType: number;
            campaignId: null;
            isAssigned: boolean;
          },
          {
            userId: number;
            username: string;
            characterId: number;
            characterName: string;
            characterUrl: string;
            avatarUrl: string;
            privacyType: number;
            campaignId: null;
            isAssigned: boolean;
          },
          {
            userId: number;
            username: string;
            characterId: number;
            characterName: string;
            characterUrl: string;
            avatarUrl: null;
            privacyType: number;
            campaignId: null;
            isAssigned: boolean;
          },
        ];
      };
      effectAbilities: null;
      abilityOverrides: null;
    };
    activeUpdate: boolean;
    compendium: boolean;
    acEffects: [
      {
        changes: [
          {
            key: string;
            value: string;
            mode: number;
            priority: number;
          },
        ];
        duration: {
          seconds: null;
          startTime: null;
          rounds: null;
          turns: null;
          startRound: null;
          startTurn: null;
        };
        origin: string;
        tint: "";
        disabled: boolean;
        transfer: boolean;
        selectedKey: [];
        icon: string;
        name: string;
        flags: {
          dae: {
            transfer: boolean;
            armorEffect: boolean;
          };
          ddbimporter: {
            disabled: boolean;
            itemId: number;
            entityTypeId: number;
            characterEffect: boolean;
          };
        };
      },
      {
        changes: [
          {
            key: string;
            value: string;
            mode: number;
            priority: number;
          },
        ];
        duration: {
          seconds: null;
          startTime: null;
          rounds: null;
          turns: null;
          startRound: null;
          startTurn: null;
        };
        origin: string;
        tint: "";
        disabled: boolean;
        transfer: boolean;
        selectedKey: [];
        icon: string;
        name: string;
        flags: {
          dae: {
            transfer: boolean;
            armorEffect: boolean;
          };
          ddbimporter: {
            disabled: boolean;
            characterEffect: boolean;
          };
        };
      },
    ];
    baseAC: number;
    autoAC: {
      flat: null;
      calc: string;
      formula: "";
    };
    overrideAC: {
      flat: number;
      calc: string;
      formula: "";
    };
    resources: {
      type: string;
      primary: string;
      secondary: string;
      tertiary: "";
      ask: boolean;
    };
    importId: string;
    syncItemReady: boolean;
    syncActionReady: boolean;
    activeSyncSpells: boolean;
  };
  "midi-qol"?: {
    forceCEOff?: boolean;
    castData?: {
      castLevel?: number;
      itemUuid?: string; //string;
    };
    "concentration-damage": number;
    onUseMacroName: string;
    actions: {
      bonus: boolean;
      reaction: boolean;
      action: boolean;
    };
  };
  "scene-packer": {
    hash: string;
  };
  dnd5e: {
    powerfulBuild: boolean;
    savageAttacks: boolean;
    elvenAccuracy: boolean;
    halflingLucky: boolean;
    initiativeAdv: boolean;
    initiativeAlert: boolean;
    jackOfAllTrades: boolean;
    weaponCriticalThreshold: number;
    observantFeat: boolean;
    remarkableAthlete: boolean;
    reliableTalent: boolean;
    diamondSoul: boolean;
    meleeCriticalDamageDice: number;
    wildMagic: boolean;
    spellSniper: boolean;
    initiativeHalfProf: boolean;
  };
  "ddb-importer": {
    version: string;
    syncId: number;
  };
  SharedVision: {
    enable: boolean;
    hidden: boolean;
    userSetting: [
      {
        id: string;
        token: boolean;
        vision: boolean;
        fog: boolean;
      },
      {
        id: string;
        token: boolean;
        vision: boolean;
        fog: boolean;
      },
      {
        id: string;
        token: boolean;
        vision: boolean;
        fog: boolean;
      },
      {
        id: string;
        token: boolean;
        vision: boolean;
        fog: boolean;
      },
      {
        id: string;
        token: boolean;
        vision: boolean;
        fog: boolean;
      },
    ];
  };
  "wild-magic-surge-5e": {
    die_type: {
      value: number;
      min: number;
      max: number;
      dieValue: string;
    };
    surge_increment_resource: {
      max: number;
      min: number;
      value: number;
    };
  };
  wire: {
    turnUpdatedEffectUuids: [];
  };
  combatbooster: {
    recentItems: [
      "A26I2nHZsBh2EM53",
      "Ry9n5oQE7FJQQY1b",
      "FiaRHlUMKqpsjNw8",
      "cMuePeOLJj8wZMjd",
      "mb677TPksL7vpfpo",
      "y5gkCFCfVNiEgzVP",
      "p1M9D9ZjAfKSuHK2",
      "cbbtuVR96bbj8L7F",
      "asvHYvUBvCXYh86L",
      "2cGRWInK5Zjb4sQr",
      "R2JIDHaSCkFpAlf4",
      "Wd1RddKgsLcFnUNi",
      "y4sHjq3IItIfYweg",
      "skJcAnH4wHEYGK8r",
      "4XM0c431OEnEQNS0",
    ];
  };
  "tidy5e-sheet": {
    classFilter: "";
    maxPreparedSpells: null;
    gender: "";
    age: "";
    height: "";
    weight: "";
    eyes: "";
    skin: "";
    hair: "";
    notes1: {
      name: "";
    };
    notes2: {
      name: "";
    };
    notes3: {
      name: "";
    };
    notes4: {
      name: "";
    };
    "allow-edit": boolean;
  };
  "rest-recovery": {
    data: {
      resources: {
        primary: {
          formula: "";
        };
        secondary: {
          formula: "";
        };
        tertiary: {
          formula: "";
        };
      };
    };
  };
  warpgate: {
    mutate: [
      {
        delta: {
          embedded: {
            Item: {
              "Rage - End": string;
            };
            ActiveEffect: {
              Rage: string;
            };
          };
        };
        user: string;
        comparisonKeys: {
          ActiveEffect: string;
        };
        name: string;
        updateOpts: {};
        overrides: {
          preserveData: boolean;
        };
      },
    ];
  };
  "monks-tokenbar": {
    stats: [
      {
        stat: string;
        icon: string;
        id: string;
      },
      {
        stat: string;
        icon: string;
        id: string;
      },
      {
        id: string;
        stat: string;
        icon: string;
      },
      {
        id: string;
        stat: string;
        icon: string;
      },
      {
        id: string;
        stat: string;
        icon: string;
      },
    ];
  };
}

export type Flags = Record<string, any> & PartialDeep<KnownFlags>;
export type Ownership = Record<string, number> & { default: number };
export type BaseActorSystemData = Record<string, any>;
export type BaseTokenSystemData = Record<string, any>;
