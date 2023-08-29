import { SystemTypeMap } from "../core/actor";
import { BaseActorSystemData } from "../core/flags";
import { Item, ItemSystemData } from "../core/items/item";
import { ActorItemTypes } from "../core/items/itemTypes";
import { ActorSystemData } from "./actor/data/base";
import { SpellPF2e } from "./item";
import { AncestrySystemData } from "./item/ancestry";
import { BackgroundSystemData } from "./item/background";
import { ClassSystemData } from "./item/class";
import { EquipmentSystemData } from "./item/equipment";
import { FeatSystemData } from "./item/feat";
import { HeritageSystemData } from "./item/heritage";
import { SpellSystemData } from "./item/spell";
import { WeaponSystemData } from "./item/weapon";
import { ItemDataPF2e, ClassDataPF2e, FeatDataPF2e, WeaponCategoryName, ArmorCategoryName, SpellDataPF2e } from "./items";

export interface PF2eTypes extends SystemTypeMap {
  ActorTypes: "character" | "npc" | "vehicle" | "loot" | "hazard";
  ActorSystemType: ActorSystemData;
  BaseItemData: ItemSystemData;
  ItemDataTypes: {
    ancestry: AncestrySystemData;
    background: BackgroundSystemData;
    class: ClassSystemData;
    spell: SpellSystemData;
    weapon: WeaponSystemData;
    tool: ItemDataPF2e;
    feat: FeatDataPF2e;
    consumable: ItemDataPF2e;
    equipment: EquipmentSystemData;
    heritage: HeritageSystemData;
    classfeature: FeatSystemData;
  };
}

export type ActorPF2eItemTypes = ActorItemTypes<PF2eTypes>;

export interface ActorDataPF2e extends BaseActorSystemData {
  details: any;
}

const actorSystemData = {
  attributes: {
    hp: {
      value: 11,
      temp: 0,
    },
    initiative: {
      statistic: "perception",
    },
    speed: {
      value: 25,
      otherSpeeds: [],
    },
    bonusLimitBulk: 0,
    bonusEncumbranceBulk: 0,
    sp: {
      value: 0,
      max: 0,
      details: "",
    },
    resolve: {
      value: 0,
      max: 0,
    },
  },
  details: {
    alignment: {
      value: "N",
    },
    level: {
      value: 1,
    },
    biography: {
      appearance: "",
      backstory: "",
      birthPlace: "",
      attitude: "",
      beliefs: "",
      likes: "",
      dislikes: "",
      catchphrases: "",
      campaignNotes: "",
      allies: "",
      enemies: "",
      organaizations: "",
    },
    keyability: {
      value: "str",
    },
    xp: {
      value: 226,
      min: 0,
      max: 1000,
      pct: 0,
    },
    age: {
      value: "",
    },
    height: {
      value: "",
    },
    weight: {
      value: "",
    },
    gender: {
      value: "She/Her",
    },
    ethnicity: {
      value: "",
    },
    nationality: {
      value: "",
    },
  },
  traits: {
    value: [],
    senses: [],
    languages: {
      value: [],
      custom: "",
      selected: [],
    },
  },
  resources: {
    heroPoints: {
      value: 1,
      max: 3,
    },
  },
  schema: {
    version: 0.854,
    lastMigration: {
      version: {
        schema: 0.849,
        foundry: "11.307",
        system: "5.3.1",
      },
    },
  },
  exploration: [],
  skills: {
    acr: {
      rank: 1,
    },
    arc: {
      rank: 1,
    },
    ath: {
      rank: 0,
    },
    cra: {
      rank: 0,
    },
    dec: {
      rank: 0,
    },
    dip: {
      rank: 1,
    },
    itm: {
      rank: 0,
    },
    med: {
      rank: 0,
    },
    nat: {
      rank: 0,
    },
    occ: {
      rank: 1,
    },
    prf: {
      rank: 0,
    },
    rel: {
      rank: 0,
    },
    soc: {
      rank: 0,
    },
    ste: {
      rank: 1,
    },
    sur: {
      rank: 1,
    },
    thi: {
      rank: 1,
    },
  },
  pfs: {
    playerNumber: null,
    characterNumber: null,
    levelBump: false,
    currentFaction: "EA",
    school: null,
    reputation: {
      EA: null,
      GA: null,
      HH: null,
      VS: null,
      RO: null,
      VW: null,
    },
  },
  saves: {},
  martial: {},
  crafting: {
    formulas: [],
  },
  build: {
    attributes: {
      boosts: {
        "1": ["int", "wis", "dex", "con"],
      },
    },
  },
};
const exampleActorPF2e = {
  prototypeToken: {
    displayName: 20,
    displayBars: 20,
    flags: {
      pf2e: {
        linkToActorSize: true,
        autoscale: true,
      },
    },
    height: 1,
    width: 1,
    actorLink: true,
    sight: {
      enabled: true,
      range: 0,
      angle: 360,
      visionMode: "basic",
      attenuation: 0.1,
      brightness: 0,
      saturation: 0,
      contrast: 0,
    },
    name: "Max PC",
    appendNumber: false,
    prependAdjective: false,
    texture: {
      src: "tokenizer/pc-images/max_pc.TokenJGkL8ib0IjUpNwlF.webp?1690106004679",
      scaleX: 1,
      scaleY: 1,
      offsetX: 0,
      offsetY: 0,
      rotation: 0,
    },
    lockRotation: false,
    rotation: 0,
    alpha: 1,
    disposition: -1,
    bar1: {
      attribute: "attributes.hp",
    },
    bar2: {
      attribute: null,
    },
    light: {
      alpha: 0.5,
      angle: 360,
      bright: 0,
      coloration: 1,
      dim: 0,
      attenuation: 0.5,
      luminosity: 0.5,
      saturation: 0,
      contrast: 0,
      shadows: 0,
      animation: {
        type: null,
        speed: 5,
        intensity: 5,
        reverse: false,
      },
      darkness: {
        min: 0,
        max: 1,
      },
    },
    detectionModes: [],
    randomImg: false,
  },
  folder: "hqzMFvbExqAeBJxp",
  name: "Ianthia Abrams",
  type: "character",
  ownership: {
    default: 1,
    f5TQXRGH0xdq9tP0: 3,
    OjkBEDlhd5y4dqPM: 3,
    "0L9jt9WlNNg7sw4c": 3,
  },
  effects: [],
  system: actorSystemData,
  img: "tokenizer/pc-images/max_pc.AvatarJGkL8ib0IjUpNwlF.webp?1690106004679",
  items: [
    {
      img: "systems/pf2e/icons/default-icons/alternatives/ancestries/human.svg",
      name: "Human",
      system: {
        description: {
          gm: "",
          value:
            "<p><em>As unpredictable and varied as any of Golarion's peoples, humans have exceptional drive and the capacity to endure and expand. Though many civilizations thrived before humanity rose to prominence, humans have built some of the greatest and the most terrible societies throughout the course of history, and today they are the most populous people in the realms around the Inner Sea.</em></p>\n<hr />\n<p>Humans' ambition, versatility, and exceptional potential have led to their status as the world's predominant ancestry. Their empires and nations are vast, sprawling things, and their citizens carve names for themselves with the strength of their sword arms and the power of their spells. Humanity is diverse and tumultuous, running the gamut from nomadic to imperial, sinister to saintly. Many of them venture forth to explore, to map the expanse of the multiverse, to search for long-lost treasure, or to lead mighty armies to conquer their neighbors—for no better reason than because they can.</p>\n<p>If you want a character who can be just about anything, you should play a human.</p>\n<h2>You Might...</h2>\n<ul>\n<li>Strive to achieve greatness, either in your own right or on behalf of a cause.</li>\n<li>Seek to understand your purpose in the world.</li>\n<li>Cherish your relationships with family and friends.</li>\n</ul>\n<h2>Others Probably...</h2>\n<ul>\n<li>Respect your flexibility, your adaptability, and—in most cases— your open‑mindedness.</li>\n<li>Distrust your intentions, fearing you seek only power or wealth.</li>\n<li>Aren't sure what to expect from you and are hesitant to assume your intentions.</li>\n</ul>\n<h2>Physical Description</h2>\n<p>Humans' physical characteristics are as varied as the world's climes. Humans have a wide variety of skin and hair colors, body types, and facial features. Generally speaking, their skin has a darker hue the closer to the equator they or their ancestors lived.</p>\n<p>Humans reach physical adulthood around the age of 15, though mental maturity occurs a few years later. A typical human can live to be around 90 years old. Humans often intermarry with people of other ancestries, giving rise to children who bear the traits of both parents. The most notable half-humans are half-elves and half-orcs.</p>\n<h2>Society</h2>\n<p>Human variety also manifests in terms of their governments, attitudes, and social norms. Though the oldest of human cultures can trace their shared histories thousands of years into the past, when compared to the societies of the elves or dwarves, human civilizations seem in a state of constant flux as empires fragment and new kingdoms subsume the old.</p>\n<h2>Alignment and Religion</h2>\n<p>Humanity is perhaps the most heterogeneous of all the ancestries, with a capacity for great evil and boundless good. Some humans assemble into vast raging hordes, while others build sprawling cities. Considered as a whole, most humans are neutral, yet they tend to congregate into nations or communities of a shared alignment, or at least a shared tendency toward an alignment. Humans also worship a wide range of gods and practice many different religions, tending to seek favor from any divine being they encounter.</p>\n<h2>Names</h2>\n<p>Unlike many ancestral cultures, which generally cleave to specific traditions and shared histories, humanity's diversity has resulted in a near-infinite set of names. The humans of northern tribes have different names than those dwelling in southern nation-states. Humans throughout much of the world speak Common (though some continents on Golarion have their own regional common languages), yet their names are as varied as their beliefs and appearances.</p>\n<h3><span style=\"text-decoration:underline\">Sample Names</span></h3>\n<p>A variety of human ethnic groups—many of which have origins on distant lands— populates the continents bordering Golarion's Inner Sea. Human characters can be any of these ethnicities, regardless of what lands they call home.</p>\n<hr />\n<p>Characters of human ethnicities in the Inner Sea region speak Common (also known as Taldane), and some ethnicities grant access to an uncommon language.</p>\n<h2 style=\"border-bottom:1px solid var(--color-underline-header)\">Human Mechanics</h2>\n<p><strong>Hit Points</strong> 8</p>\n<p><strong>Size</strong> Medium</p>\n<p><strong>Speed</strong> 25 feet</p>\n<p><strong>Ability Boosts</strong> Two free ability boosts</p>\n<p><strong>Languages</strong> Common</p>\n<p><strong>Additional Languages</strong> equal to 1 + your Intelligence modifier (if it's positive). Choose from the list of common languages and any other languages to which you have access (such as the languages prevalent in your region).</p>",
        },
        source: {
          value: "Pathfinder Core Rulebook",
        },
        rules: [],
        slug: "human",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        traits: {
          value: ["human", "humanoid"],
          rarity: "common",
        },
        hp: 8,
        size: "med",
        reach: 5,
        speed: 25,
        boosts: {
          "0": {
            value: ["cha", "con", "dex", "int", "str", "wis"],
            selected: "dex",
          },
          "1": {
            value: ["str", "dex", "con", "int", "wis", "cha"],
            selected: "int",
          },
          "2": {
            value: [],
          },
        },
        flaws: {
          "0": {
            value: [],
          },
        },
        languages: {
          value: ["common"],
          custom: "",
        },
        additionalLanguages: {
          count: 1,
          value: [],
          custom: "",
        },
        items: {},
        vision: "normal",
        voluntary: {
          flaws: ["str"],
        },
      },
      type: "ancestry",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.ancestries.Item.IiG7DgeLWYrSNXuX",
        },
        "scene-packer": {
          hash: "7f3604e8ad728e6c09497843bdb9b3c4ed74dc69",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690104430460,
        modifiedTime: 1690104772794,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
      _id: "kCTjqupNc2M8XFsS",
    },
    {
      img: "systems/pf2e/icons/default-icons/background.svg",
      name: "Codebreaker",
      system: {
        description: {
          gm: "",
          value:
            "<p>Whether you're employed by a military organization to decipher coded messages sent by enemy factions or work independently to crack an enigma created by a past civilization, you have a head for patterns and linguistics. You might even use new clockwork devices to aid you in your efforts.</p>\n<p>Choose two ability boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free ability boost.</p>\n<p>You're trained in the Society skill and the Cryptography Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.WeQGWvlWdeLeOlCN]{Glean Contents} skill feat.</p>",
        },
        source: {
          value: "Pathfinder Guns & Gears",
        },
        rules: [],
        slug: "codebreaker",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        traits: {
          value: [],
          rarity: "common",
        },
        boosts: {
          "0": {
            value: ["int", "wis"],
            selected: "int",
          },
          "1": {
            value: ["cha", "con", "dex", "int", "str", "wis"],
            selected: "wis",
          },
        },
        items: {
          m7kmw: {
            img: "systems/pf2e/icons/features/feats/feats.webp",
            level: 1,
            name: "Glean Contents",
            uuid: "Compendium.pf2e.feats-srd.Item.WeQGWvlWdeLeOlCN",
          },
        },
        trainedLore: "Cryptography",
        trainedSkills: {
          value: ["soc"],
          custom: "",
        },
      },
      type: "background",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.backgrounds.Item.4XpWgGejwb2L6WpK",
        },
        "scene-packer": {
          hash: "507c211ab3bdb9abe2eed11d531c34a644984532",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690104449653,
        modifiedTime: 1690104776251,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
      _id: "eJ9xVMRGkX1jRt69",
    },
    {
      img: "systems/pf2e/icons/features/feats/feats.webp",
      name: "Glean Contents",
      system: {
        description: {
          gm: "",
          value:
            "<p>You are adept at quickly scanning loose papers and carefully discerning the contents of sealed letters without damaging the seal.</p>\n<p>You can attempt Society checks to @UUID[Compendium.pf2e.actionspf2e.Item.d9gbpiQjChYDYA2L]{Decipher Writing} on a message that is only partially glimpsed, upside down or reversed from your perspective, or even sealed. However, on a critical failure, the recipient is made aware of your efforts (for instance, you damage the seal or disturb the papers in some way).</p>\n<p>When using this feat to decipher sealed letters, your attempt to Decipher Writing gains the manipulate trait.</p>\n<p>This feat doesn't prevent witnesses from noticing your efforts, particularly with sealed letters which you must manipulate directly in order to read; you might need to attempt Deception or Stealth checks to avoid being noticed.</p>",
        },
        source: {
          value: "Pathfinder Advanced Player's Guide",
        },
        rules: [],
        slug: "glean-contents",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 1,
        },
        traits: {
          value: ["general", "skill"],
          rarity: "common",
        },
        category: "skill",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: {
          value: "passive",
        },
        actions: {
          value: null,
        },
        prerequisites: {
          value: [
            {
              value: "trained in Society",
            },
          ],
        },
        location: "eJ9xVMRGkX1jRt69",
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.feats-srd.Item.WeQGWvlWdeLeOlCN",
        },
        "scene-packer": {
          hash: "0f6affe0d8db7eb1977c5604ca516e1686a1adf8",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690104449653,
        modifiedTime: 1690104449653,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
      _id: "X7USe1sT267CGXyR",
    },
    {
      img: "systems/pf2e/icons/equipment/weapons/long-air-repeater.webp",
      name: "Assault Rifle",
      system: {
        description: {
          gm: "",
          value:
            "<p>Like the one-handed air repeater, this thin-barreled firearm uses a container of pressurized air instead of black powder to propel small metal pellets from an attached cartridge. The long air repeater has better range and ammo capacity than the one-handed variant, though it still lacks significant stopping power. A typical long air repeater magazine holds 8 pellets.</p>",
        },
        source: {
          value: "Pathfinder Guns & Gears",
        },
        rules: [],
        slug: "long-air-repeater",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 0,
        },
        traits: {
          value: ["repeating"],
          rarity: "unique",
          otherTags: [],
        },
        quantity: 1,
        baseItem: "long-air-repeater",
        hp: {
          value: 0,
          max: 0,
        },
        hardness: 0,
        weight: {
          value: "1",
        },
        equippedBulk: {
          value: "",
        },
        price: {
          value: {
            gp: 9,
          },
        },
        equipped: {
          carryType: "held",
          invested: null,
          handsHeld: 2,
        },
        stackGroup: null,
        negateBulk: {
          value: "0",
        },
        containerId: null,
        preciousMaterial: {
          value: null,
        },
        preciousMaterialGrade: {
          value: null,
        },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "Unusual Long Air Repeater",
            img: "systems/pf2e/icons/unidentified_item_icons/weapon.webp",
            data: {
              description: {
                value: "",
              },
            },
          },
          misidentified: {},
        },
        usage: {
          value: "held-in-one-hand",
        },
        category: "simple",
        group: "firearm",
        bonus: {
          value: 0,
        },
        damage: {
          dice: 1,
          die: "d10",
          damageType: "piercing",
          persistent: {
            number: 1,
            faces: 4,
            type: "bleed",
          },
        },
        bonusDamage: {
          value: 0,
        },
        splashDamage: {
          value: 0,
        },
        range: 60,
        reload: {
          value: "0",
        },
        MAP: {
          value: "",
        },
        potencyRune: {
          value: null,
        },
        strikingRune: {
          value: null,
        },
        specific: {
          value: false,
        },
        propertyRune1: {
          value: null,
        },
        propertyRune2: {
          value: null,
        },
        propertyRune3: {
          value: null,
        },
        propertyRune4: {
          value: null,
        },
        property1: {
          value: "",
          dice: 0,
          die: "",
          damageType: "",
          critDice: 1,
          critDie: "d8",
          critDamage: "",
          critDamageType: "force",
          strikeConditionType: "",
          strikeConditionValue: null,
          criticalConditionType: "",
          criticalConditionValue: null,
        },
        selectedAmmoId: "mLXCeukiktJMwqRN",
      },
      type: "weapon",
      flags: {
        core: {
          sourceId: "Item.e3afm5FnsIlZM3Ad",
        },
        "scene-packer": {
          hash: "6d80e8312cd971b8246b08079e89f802d0c09144",
        },
        pf2e: {},
      },
      effects: [],
      folder: null,
      sort: 112500,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.3",
        coreVersion: "11.306",
        createdTime: 1690098771511,
        modifiedTime: 1690719914422,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
      _id: "sZTC7D6D6YXcrBJf",
    },
    {
      img: "systems/pf2e/icons/classes/inventor.webp",
      name: "Inventor",
      system: {
        description: {
          gm: "",
          value:
            "<p><em>Any tinkerer can follow a diagram to make a device, but you invent the impossible! Every strange contraption you dream up is a unique experiment pushing the edge of possibility, a mysterious machine that seems to work for only you. You're always on the verge of the next great breakthrough, and every trial and tribulation is another opportunity to test and tune. If you can dream it, you can build it.</em></p>\n<p><strong>Key Ability: INTELLIGENCE</strong></p>\n<p>At 1st level, your class gives you an ability boost to Intelligence.</p>\n<p><strong>Hit Points: 8 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1>Roleplaying the Inventor</h1>\n<h2>During Combat Encounters...</h2>\n<p>You rely on your inventions as much as possible, testing their functionalities under a variety of conditions. You don't set out to achieve anything as banal as simply winning a fight; you seek to collect valuable data that can be used to improve your creations!</p>\n<h2>During Social Encounters...</h2>\n<p>You provide useful context when discussing a variety of academic topics, particularly when speaking about those subjects related to crafting and invention. You might often look for opportunities to acquire patronage to fund some of your more expensive or unorthodox experiments. After all, the materials needed to assemble your inventions don't pay for themselves!</p>\n<h2>While Exploring...</h2>\n<p>You study the design and construction of the environments you explore ardently, making note of clever traps, ingenious mechanisms, or especially keen architecture you come across for later.</p>\n<h2>In Downtime...</h2>\n<p>You brainstorm new designs, bringing them to fruition through careful crafting and meticulous attention to detail. You might also modify previous inventions to adjust for data you've collected in the field. You might work as a local smith or tinker where your skills are needed, or you might keep a workshop on the edge of town where the clank and clatter of your experiments attracts less attention.</p>\n<h2>You Might...</h2>\n<ul>\n<li>Enjoy creating new things the world has never seen before.</li>\n<li>Be willing to take a chance on a theory, testing to see if your hypothesis proves accurate. If not, you probably record the results to try again later.</li>\n<li>Wear clothes spattered with oil and grime, or venture off on excited and technical tangents when asked simple questions.</li>\n</ul>\n<h2>Others Probably...</h2>\n<ul>\n<li>Marvel at your inventions and the variety of unbelievable wonder they can bring.</li>\n<li>Believe that you're a genius whose work is beyond understanding.</li>\n<li>Worry that your inventions might backfire or explode.</li>\n</ul>\n<h1>Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2>Perception</h2>\n<p>Trained in Perception</p>\n<h2>Saving Throws</h2>\n<p>Expert in Fortitude</p>\n<p>Trained in Reflex</p>\n<p>Expert in Will</p>\n<h2>Skills</h2>\n<p>Trained in Crafting</p>\n<p>Trained in a number of additional skills equal to 3 plus your Intelligence modifier</p>\n<h2>Attacks</h2>\n<p>Trained in simple weapons</p>\n<p>Trained in martial weapons</p>\n<p>Trained in unarmed attacks</p>\n<h2>Defenses</h2>\n<p>Trained in light armor</p>\n<p>Trained in medium armor</p>\n<p>Trained in unarmored defense</p>\n<h2>Class DC</h2>\n<p>Trained in inventor class DC</p>\n<h1>Class Features</h1>\n<p>You gain these features as an Inventor. Abilities gained at higher levels list the levels at which you gain them next to the features' names.</p>\n<table class=\"pf2-table\">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, overdrive, innovation, explode, peerless inventor, shield block, inventor feat</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Inventor feat, skill feat</td>\n</tr>\n<tr>\n<td>3</td>\n<td>Expert overdrive, general feat, reconfigure, skill increase</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Inventor feat, skill feat</td>\n</tr>\n<tr>\n<td>5</td>\n<td>Ability boosts, ancestry feat, inventor weapon expertise, skill increase</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Inventor feat, skill feat</td>\n</tr>\n<tr>\n<td>7</td>\n<td>Breakthrough innovation, general feat, lightning reflexes, master overdrive, skill increase, weapon specialization</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Inventor feat, skill feat</td>\n</tr>\n<tr>\n<td>9</td>\n<td>Ancestry feat, inventive expertise, offensive boost, skill increase</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, inventor feat, skill feat</td>\n</tr>\n<tr>\n<td>11</td>\n<td>General feat, medium armor expertise, resolve, skill increase</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Inventor feat, skill feat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>Alertness, ancestry feat, complete reconfiguration, inventor weapon mastery, skill increase</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Inventor feat, skill feat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>Ability boosts, general feat, greater weapon specialization, legendary overdrive, revolutionary innovation, skill increase</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Inventor feat, skill feat</td>\n</tr>\n<tr>\n<td>17</td>\n<td>Ancestry feat, inventive mastery, juggernaut, skill increase</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Inventor feat, skill feat</td>\n</tr>\n<tr>\n<td>19</td>\n<td>General feat, infinite invention, medium armor mastery, skill increase</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, inventor feat, skill feat</td>\n</tr>\n</tbody>\n</table>\n<h2>Ancestry and Background</h2>\n<p>In addition to the abilities provided by your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2>Overdrive</h2>\n<p>You have a bevy of smaller devices of your own invention, from muscle stimulants to concussive pistons. When it's necessary, you can throw them into overdrive to assist you in combat.</p>\n<h2>Innovation</h2>\n<p>While you're always creating inventions, there's one that represents your preeminent work, the one that you hope- with refinement-might change the world. Choose one of the below innovations. Your innovation's level is equal to your level. If your innovation is destroyed, you can spend 1 day of downtime and attempt a Crafting check with a high DC for your level; on a success, you rebuild it. An innovation only works due to your constant maintenance and tinkering, and therefore has no market Price.</p>\n<p>The innovations you can choose from in this book are as follows.</p>\n<h3>Armor</h3>\n<p>Your innovation is a cutting-edge suit of medium armor with a variety of attached gizmos and devices. Choose one of the sets of statistics on Table 2-2: Innovation Armor Statistics for your innovation armor (or choose another set of innovation armor statistics to which you have access).</p>\n<p>Your innovation armor can have fundamental and property runes added to it in the same way as ordinary armor. Because of the unique features of your innovation, everyone except you is untrained in it, even if they would normally be trained (or better) in medium armor. Choose one initial armor modification to apply to your innovation, either from the following or from other initial armor modifications to which you have access.</p>\n<ul>\n<li><strong>Harmonic Oscillator</strong> You designed your armor to inaudibly thrum at just the right frequency to create interference against force and sound waves. You gain resistance equal to 3 + half your level to force and sonic damage. When under the effects of Overdrive, the resistance increases by 2.</li>\n<li><strong>Metallic Reactance</strong> The metals in your armor are carefully alloyed to ground electricity and protect from acidic chemical reactions. You gain resistance equal to 3 + half your level to acid and electricity damage. When under the effects of Overdrive, the resistance increases by 2.</li>\n<li><strong>Muscular Exoskeleton (Power Suit Only)</strong> Your armor supports your muscles with a carefully crafted exoskeleton. When you send your armor into overdrive, the exoskeleton supplements your feats of athletics as well. When under the effects of Overdrive, you gain a +1 circumstance bonus to Athletics checks; if you're a master in Crafting, this increases to a +2 circumstance bonus.</li>\n<li><strong>Otherworldly Protection</strong> Just because you use science doesn't mean you can't build your armor with carefully chosen materials and gizmos designed to protect against otherworldly attacks. You gain resistance equal to 3 + half your level to negative damage, or to positive damage if you have negative healing (such as if you're a dhampir). You gain the same amount of resistance to any types of alignment damage-good, evil, chaotic, lawful-that can damage you (note that creatures don't take a given type of alignment damage unless they are of the opposing alignment; for instance, you can take evil damage only if you are good in alignment).</li>\n<li><strong>Phlogistonic Regulator</strong> A layer of insulation within your armor protects you from rapid temperature fluctuations. You gain resistance equal to half your level to cold and fire damage. When under the effects of Overdrive, the resistance increases by 2.</li>\n<li><strong>Speed Boosters</strong> You have boosters in your armor that increase your Speed. You gain a +5-foot status bonus to your Speed, which increases to a +10-foot status bonus when under the effects of Overdrive.</li>\n<li><strong>Subtle Dampeners (Subterfuge Suit Only)</strong> You've designed your armor to help you blend in and dampen noise slightly. When you send your armor into overdrive, the dampeners increase their effect, improving your Stealth. When under the effects of Overdrive, you gain a +1 circumstance bonus to Stealth checks. If you're a master in Crafting, this increases to a +2 circumstance bonus.</li>\n</ul>\n<table class=\"pf2-table\">\n<tbody>\n<tr>\n<th>Medium Armor</th>\n<th>AC Bonus</th>\n<th>Dex Cap</th>\n<th>Check Penalty</th>\n<th>Speed Penalty</th>\n<th>Strength</th>\n<th>Bulk</th>\n<th>Group</th>\n<th>Armor Traits</th>\n</tr>\n<tr>\n<td>Power Suit</td>\n<td>+4</td>\n<td>+1</td>\n<td>-2</td>\n<td>-5 feet</td>\n<td>16</td>\n<td>2</td>\n<td>composite</td>\n<td>-</td>\n</tr>\n<tr>\n<td>Subterfuge Suit</td>\n<td>+1</td>\n<td>+4</td>\n<td>-1</td>\n<td>-</td>\n<td>10</td>\n<td>1</td>\n<td>composite</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h3>Construct</h3>\n<p>Your innovation is a mechanical creature, such as a clockwork construct made of cogs and gears. It's a prototype construct companion, and you can adjust most of its base statistics by taking feats at higher levels, such as Advanced Companion. If you use the Overdrive action, your construct gains the same Overdrive benefits you do, and it also takes the same amount of fire damage on a critical failure.</p>\n<p>You know how to spend additional time directing, controlling, or programming your construct innovation for a more complex plan of action. You can spend 2 actions to Command instead of 1 when commanding your construct companion; your construct companion can then use an additional action (normally 3 actions, rather than 2).</p>\n<p>Choose one initial construct modification to apply to your innovation, either from the following or from other initial construct modifications to which you have access. These modifications alter the construct's abilities or form.</p>\n<ul>\n<li><strong>Accelerated Mobility</strong> Actuated legs, efficient gears in the wheels or treads, or add-on boosters make your construct faster. Your innovation's Speed increases to 40 feet.</li>\n<li><strong>Amphibious Construction</strong> Increased buoyancy, rudders, and a means of propulsion like a fluked tail or powerful propeller make your construct able to travel in water. Your innovation gains a swim Speed of 25 feet.</li>\n<li><strong>Increased Size</strong> You built your construct innovation bigger than most. Your construct is Large. If you have this modification and your construct innovation becomes an advanced construct companion or otherwise gains the ability to become Large, you can immediately change increased size to a different initial construct modification.</li>\n<li><strong>Manual Dexterity</strong> Your construct innovation has articulated hands or similar appendages with significant manual dexterity. It can perform manipulate actions with up to two of its limbs. As normal for a companion, it still can't wield weapons or held items that don't have the companion trait, and it can't activate items.</li>\n<li><strong>Projectile Launcher</strong> Your construct has a mounted dart launcher, embedded cannon, or similar armament. Your innovation gains a ranged unarmed attack that deals 1d4 bludgeoning or piercing damage (you choose when you pick this modification). The attack has the propulsive trait and a range increment of 30 feet.</li>\n<li><strong>Sensory Array</strong> Additional sensory devices give your innovation low-light vision and darkvision, as well as imprecise tremorsense out to a range of 30 feet.</li>\n<li><strong>Wonder Gears</strong> You map specialized skills into your construct's crude intelligence. Your innovation becomes trained in Intimidation, Stealth, and Survival.</li>\n</ul>\n<h3>Weapon</h3>\n<p>Your innovation is an impossible-looking weapon augmented by numerous unusual mechanisms. It begins with the same statistics as a level 0 common simple or martial weapon of your choice, or another level 0 simple or martial weapon to which you have access. You can instead use the statistics of a 1st-level common simple or martial weapon of your choice, or another 1st-level simple or martial weapon to which you have access, but you must pay the monetary Price for the weapon. An innovation weapon can have fundamental and property runes added to it in the same way as an ordinary weapon. Because of the unique features of your innovation, everyone except you is untrained in it, even if they would normally be trained (or better) in simple or martial weapons. If you use the Overdrive action, you can choose to change the additional damage from Overdrive to fire damage. Choose one initial weapon modification to apply to your innovation, either from the following or from other initial weapon modifications to which you have access. These modifications grant additional weapon traits, sometimes with extra abilities. A modification might give your weapon the versatile trait with a damage type that the weapon could already deal, either from its base damage type or from an existing versatile trait. In that case, if you select that modification, you can instead choose to give the weapon the versatile trait for a different damage type: bludgeoning, piercing, or slashing.</p>\n<ul>\n<li><strong>Blunt Shot (Ranged Only)</strong> Your weapon innovation can file the edges off your ammunition and adjust the blunt force of the shot to deliver a bludgeoning attack when necessary, as well as to avoid striking a lethal blow with an otherwise deadly shot. Your innovation gains the nonlethal and versatile B traits. You can choose whether to apply the nonlethal trait on each attack with your innovation.</li>\n<li><strong>Complex Simplicity (Simple Weapon Only)</strong> Increase your innovation's weapon damage die by one step (d4 to d6, d6 to d8, d8 to d10, d10 to d12). In addition, it gains one of the following traits of your choice: versatile B, versatile P, or versatile S.</li>\n<li><strong>Dynamic Weighting (One-handed Melee Weapon Only; Can't Have the Agile, Attached, or Free-hand Trait)</strong> Your weapon's modified weight distribution can increase power in exchange for taking more hands to wield. Your innovation gains the two-hand trait, with a damage die one size higher than the weapon's normal weapon damage die size (for instance, a longsword would gain the two-hand d10 trait). Your innovation also gains the versatile B trait.</li>\n<li><strong>Entangling Form (Melee Only)</strong> You've altered your weapon to including tangling wires or straps, or to have a flexible construction. Your innovation gains the grapple and trip traits.</li>\n<li><strong>Hampering Spikes (Melee Only)</strong> You've added long, snagging spikes to your weapon, which you can use to impede your foes' movement. Your innovation gains the hampering and versatile P traits.</li>\n<li><strong>Hefty Composition (Melee Only)</strong> Blunt surfaces and sturdy construction make your weapon hefty and mace-like. Your innovation gains the shove and versatile B traits.</li>\n<li><strong>Modular Head</strong> You've constructed a multi-purpose, adjustable striking surface for your weapon, or you've made special ammunition you can swiftly alter. Your innovation gains the modular trait for bludgeoning, piercing, and slashing. When you Interact to use the modular trait, you can also choose to give the weapon the nonlethal trait if it doesn't currently have it, or to remove that trait if it's currently nonlethal.</li>\n<li><strong>Pacification Tools (Melee Only)</strong> Softer materials make your weapon suited to knock out instead of kill, and special protrusions let you catch weapons and disarm your foes. Your innovation gains the disarm and nonlethal traits. You can choose whether to apply the nonlethal trait on each attack with your innovation.</li>\n<li><strong>Razor Prongs (Melee Only)</strong> You can knock down and slash your foes with sharp, curved blades added to your weapon. Your innovation gains the trip and versatile S traits.</li>\n<li><strong>Segmented Frame</strong> Hinges, clamps, and telescoping parts make your innovation collapsible and adjustable. It gains the modular trait for bludgeoning, piercing, and slashing. You can Interact to collapse the item down to light Bulk or to return it to your normal form. When it's collapsed to light Bulk, it has the concealable trait, which grants you a +2 circumstance bonus to Stealth checks and DCs to hide or conceal the weapon.</li>\n</ul>\n<h2>Explode</h2>\n<p>Your innovation is a creation barely held together by your own engineering, always on the edge of completely falling apart. Though this adds risk, it also means you can coax it to perform far beyond its design specifications using special unstable actions. See the definition of the unstable trait and how it affects your innovation.</p>\n<p>While inventors can learn various unstable actions over their career, all at least know how to make their innovation Explode.</p>\n<h2>Peerless Inventor</h2>\n<p>You are constantly inventing, and your skill at crafting is unimpeachable. You gain the Inventor skill feat, even if you don't meet its prerequisites.</p>\n<h2>Shield Block</h2>\n<p>You gain the Shield Block general feat, a reaction that lets you reduce damage with your shield.</p>\n<h2>Inventor Feats</h2>\n<p>At 1st level and every even-numbered level, you gain an inventor class feat. Some features and feats use an assortment of gizmos you keep on your person. For simplicity, these are left abstract, but if you are deprived of your gear for some reason, you might lose access to many feats and features, subject to GM discretion.</p>\n<h2>Skill Feats<span style=\"float:right\">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2>Expert Overdrive<span style=\"float:right\">Level 3</span></h2>\n<p>You've increased your skill in crafting, and you can put your devices into a more powerful state of overdrive. You become an expert in Crafting, and on a successful use of Overdrive, you increase the additional damage by 1.</p>\n<h2>General Feats<span style=\"float:right\">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2>Reconfigure<span style=\"float:right\">Level 3</span></h2>\n<p>You've become an expert in all crafts and are always adjusting your inventions. You can attempt to change the modifications on your innovation by spending 1 day of downtime tinkering with it and attempting a Crafting check, with a high DC for your level. On a success, you can change one modification you've chosen for your innovation to a different modification of the same kind (initial, breakthrough, or revolutionary).</p>\n<p>If you have any modification feats, on a successful check you can choose to instead retrain a modification feat to a different modification feat. The new feat has to meet the standard restrictions for retraining.</p>\n<h2>Skill Increases<span style=\"float:right\">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use this increase to either become trained in one skill you're untrained in, or become an expert in one skill in which you're already trained.</p>\n<p>At 7th level, you can use skill increases to become a master in a skill in which you're already an expert, and at 15th level, you can use them to become legendary in a skill in which you're already a master.</p>\n<h2>Ability Boosts<span style=\"float:right\">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, you boost four different ability scores. You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it's already 18 or above, or by 2 if it starts out below 18.</p>\n<h2>Ancestry Feats<span style=\"float:right\">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2>Inventor Weapon Expertise<span style=\"float:right\">Level 5</span></h2>\n<p>You develop tricks for using your weapons more effectively. Your proficiency ranks for simple and martial weapons and unarmed attacks increase to expert.</p>\n<p>If you have a weapon innovation, you gain access to the critical specialization effect with your innovation.</p>\n<h2>Breakthrough Innovation<span style=\"float:right\">Level 7</span></h2>\n<p>You've made a breakthrough in your field of study and discovered a powerful new way to enhance your innovation. Choose a breakthrough modification of your innovation's type to apply to your innovation. You can choose an initial modification of your innovation's type instead if you prefer.</p>\n<h3>Breakthrough Armor Modifications</h3>\n<ul>\n<li><strong>Antimagic Plating</strong> Whether you used some clever adaptation of the magic-negating skymetal known as noqual or created magical protections of your own design, you've strengthened your armor against magic. While wearing the armor, you gain a +1 circumstance bonus to all saving throws against spells and to AC against spells. Against spells that target the armor directly (like heat metal), you instead gain a +4 circumstance bonus to all saving throws and to AC.</li>\n<li><strong>Camouflage Pigmentation (Subterfuge Suit Only)</strong> You've modified your armor's exterior to let you blend into your surroundings with ease, as long as you stay still. While wearing your armor, you can Hide even without cover or concealment, as the pigmentation shifts to match your surroundings.</li>\n<li><strong>Dense Plating</strong> You have encased your armor in robust plating. While wearing your armor, you gain resistance to slashing damage equal to half your level.</li>\n<li><strong>Enhanced Resistance</strong> You've improved upon your initial modification's ability to resist damage. The resistance from your initial armor modification adds your full level, instead of half your level (for instance, phlogistonic regulator's resistance would increase to your level). If you have more than one initial modification that gives resistance, choose which one this applies to.</li>\n<li><strong>Heavy Construction (Power Suit Only)</strong> You've expanded your innovation into a heavy bulwark, and your groundbreaking design ensures you don't take any of the drawbacks for such heavy defenses. Your innovation becomes heavy armor, and your proficiency in your innovation armor (but no other heavy armor) advances to be equal to your proficiency in medium armor. If your Strength score is at least 16, you remove the Speed penalty entirely instead of reducing it to -5 feet. The armor's adjusted statistics are: AC Bonus +5; Dex Cap +1; Check Penalty -2; Speed Penalty -10 feet; Strength 16; Bulk 3; Group composite; Armor Traits bulwark.</li>\n<li><strong>Hyper Boosters</strong> You've improved your speed boosters' power through a breakthrough that significantly increases the energy flow without risking exploding. You gain a +10-foot status bonus to your Speed, which increases to a +20-foot status bonus when you're in Overdrive. If you're legendary in Crafting, it instead increases to a +30-foot status bonus when you're in Overdrive. You must have the speed boosters modification to select this modification.</li>\n<li><strong>Layered Mesh</strong> You've woven an incredibly powerful network of interlocking mesh around your armor, which catches piercing attacks and diffuses them. While wearing your armor, you gain resistance to piercing damage equal to half your level.</li>\n<li><strong>Tensile Absorption</strong> You've enhanced the tensile capabilities of your armor, enabling it to bend with bludgeoning attacks. While wearing your armor, you gain resistance to bludgeoning damage equal to half your level.</li>\n</ul>\n<h3>Breakthrough Construct Modifications</h3>\n<ul>\n<li><strong>Advanced Weaponry</strong> You've powered up your construct's weaponry. Choose one of your construct's unarmed attacks to gain your choice of one initial weapon modification, chosen from the list on page 18 or from other initial weapon modifications to which you have access. The unarmed attack must meet any requirements for the chosen traits (such as being a melee attack for entangling form), and since it's an unarmed attack, it can never meet certain requirements, such as being a simple weapon for complex simplicity.</li>\n<li><strong>Antimagic Construction</strong> Whether you used some clever adaptation of the magic-negating skymetal known as noqual or created magical protections entirely of your own devising, you've made your innovation highly resilient to spells. Your construct innovation gains a +2 circumstance bonus to all saving throws and AC against spells.</li>\n<li><strong>Climbing Limbs</strong> With appendages that can claw or create suction, your construct becomes a capable climber. Your innovation gains a climb Speed equal to half its land Speed.</li>\n<li><strong>Durable Construction</strong> Your innovation is solidly built; it can take significant punishment before being destroyed. Increase its maximum HP by your level.</li>\n<li><strong>Marvelous Gears</strong> Your innovation gains expert proficiency in Intimidation, Stealth, and Survival. For any of these skills in which it was already an expert (because of being an advanced construct companion, for example), it gains master proficiency instead. If you have the revolutionary innovation class feature, these proficiencies improve to master, or legendary if your construct innovation was already an expert. You must have the wonder gears modification to select this modification.</li>\n<li><strong>Turret Configuration</strong> Your innovation can transform from a mobile construct to a stationary turret. Your construct companion can transform as a single action, which has the manipulate trait, turning into a turret in its space (or transforming back from a turret into its normal configuration). While it's a turret, your innovation is @UUID[Compendium.pf2e.conditionitems.Item.eIcWbB5o3pP6OIMe]{Immobilized}, but the damage die from its projectile launcher increases to 1d6 and the range increment increases to 60 feet. You must have the projectile launcher modification to select this modification.</li>\n</ul>\n<h3>Breakthrough Weapon Modifications</h3>\n<ul>\n<li><strong>Advanced Rangefinder (Ranged Only)</strong> A carefully tuned scope or targeting device makes your weapon especially good at hitting weak points. Your innovation gains the backstabber trait and increases its range increment by 10 feet.</li>\n<li><strong>Aerodynamic Construction (Melee Only)</strong> You carefully engineer the shape of your weapon to maintain its momentum in attacks against successive targets. Your innovation gains the sweep trait and the versatile S trait.</li>\n<li><strong>Inconspicuous Appearance (Melee Only)</strong> Your innovation is built for easy concealment and surprise attacks. It gains the backstabber and versatile P traits. If the weapon has light Bulk, it also gains the concealable trait.</li>\n<li><strong>Integrated Gauntlet (One-Handed Weapon Only; Can't Have the Two-Hand Trait)</strong> Combining your weapon with a gauntlet, you make it so you can quickly switch between attacking with your weapon and tinkering using your hands. Your innovation gains the free-hand trait.</li>\n<li><strong>Manifold Alloy</strong> You've devised several alloys that contain useful properties of various metals, and you replace a number of parts of your weapon or its ammunition with pieces from these alloys. Your weapon innovation is cold iron and silver. This means you deal more damage to a variety of supernatural creatures, such as demons, devils, and fey.</li>\n<li><strong>Rope Shot (Ranged Only)</strong> Your weapon can shoot projectiles that split into simple ropes or nets around your foes' legs to trip your targets, and you can climb using the grappling hooks built into the weapon. Your weapon innovation gains the climbing and ranged trip traits.</li>\n<li><strong>Tangle Line (Thrown Only)</strong> Your weapon has an extensible line that you can use to knock your enemies over and quickly recall the weapon back to your hand. Your innovation gains the ranged trip trait and the tethered trait.</li>\n</ul>\n<h2>Lightning Reflexes<span style=\"float:right\">Level 7</span></h2>\n<p>Your reflexes are lightning fast. Your proficiency rank for Reflex saves increases to expert.</p>\n<h2>Master Overdrive<span style=\"float:right\">Level 7</span></h2>\n<p>Your mastery of invention and crafting enhances your Overdrive even further. You become a master in Crafting, and on a successful Overdrive, you increase the additional damage by a total of 2, replacing the increase from expert overdrive.</p>\n<h2>Weapon Specialization<span style=\"float:right\">Level 7</span></h2>\n<p>You've learned how to inflict greater injuries with the weapons you know best. You deal 2 additional damage with weapons and unarmed attacks in which you are an expert. This damage increases to 3 if you're a master, and 4 if you're legendary.</p>\n<h2>Inventive Expertise<span style=\"float:right\">Level 9</span></h2>\n<p>Through innovation and experimentation, you've made your inventions more effective and reliable. Your proficiency rank for your inventor class DC increases to expert.</p>\n<h2>Offensive Boost<span style=\"float:right\">Level 9</span></h2>\n<p>You've made additions to your innovation to upgrade your offensive capabilities. Your improvements make any Strikes that rely on your innovation deal an additional 1d6 damage, with a type determined by the boost you choose. If your innovation is armor, the boost applies to your melee unarmed Strikes and to your melee Strikes with one weapon you choose during daily preparations; if your innovation is a construct, the boost applies to your construct companion's Strikes; and if your innovation is a weapon, the boost applies to your Strikes with your innovation. You can spend downtime to switch to a different boost in the same way as switching your modification. Choose one of the following boosts, with the damage type in parentheses.</p>\n<ul>\n<li><strong>Chill (Cold)</strong> Your innovation rapidly absorbs heat, creating an intense chill.</li>\n<li><strong>Ignition (Fire)</strong> Your innovation shoots out jets of searing flame.</li>\n<li><strong>Jolt (Electricity)</strong> Your innovation jolts foes with charges of electricity.</li>\n<li><strong>Momentum (Bludgeoning)</strong> Your innovation slams into foes with added momentum.</li>\n<li><strong>Saws (Slashing)</strong> Your innovation reveals spinning sawblades during your attacks.</li>\n<li><strong>Spike (Piercing)</strong> Your innovation reveals wicked spikes during your attacks.</li>\n<li><strong>Vitriol (Acid)</strong> Your innovation releases spurts of caustic acid.</li>\n</ul>\n<h2>Medium Armor Expertise<span style=\"float:right\">Level 11</span></h2>\n<p>You've learned to better defend yourself against attacks. Your proficiency ranks for light armor, medium armor, and unarmored defense increase to expert. If you have a medium or heavy armor innovation, you gain access to the critical specialization effect with your armor innovation.</p>\n<h2>Resolve<span style=\"float:right\">Level 11</span></h2>\n<p>You've steeled your mind with resolve. Your proficiency rank for Will saves increases to master. When you roll a success on a Will save, you get a critical success instead.</p>\n<h2>Alertness<span style=\"float:right\">Level 13</span></h2>\n<p>Your attention to detail lets you remain alert to threats around you. Your proficiency rank for Perception increases to expert.</p>\n<h2>Complete Reconfiguration<span style=\"float:right\">Level 13</span></h2>\n<p>When it comes to crafting and tinkering, you've become incredibly adept at changing your modifications to adjust your innovation's functionality. When you spend downtime to reconfigure your innovation and succeed at your Crafting check, you can swap any number of modifications, swap your offensive boost, or retrain any number of modification feats, rather than one. You still must swap a modification only with one of the same type (initial, breakthrough, or revolutionary).</p>\n<h2>Inventor Weapon Mastery<span style=\"float:right\">Level 13</span></h2>\n<p>You fully understand your weapons. Your proficiency ranks for simple and martial weapons and unarmed attacks increase to master.</p>\n<h2>Greater Weapon Specialization<span style=\"float:right\">Level 15</span></h2>\n<p>Your damage from weapon specialization increases to 4 with weapons and unarmed attacks in which you're an expert, 6 if you're a master, and 8 if you're legendary.</p>\n<h2>Legendary Overdrive<span style=\"float:right\">Level 15</span></h2>\n<p>Your peerless inventing and Crafting ability has supercharged your Overdrives. You become legendary in Crafting, and on a successful Overdrive, you increase the additional damage by a total of 3, replacing the increase from master overdrive.</p>\n<h2>Revolutionary Innovation<span style=\"float:right\">Level 15</span></h2>\n<p>You are an unparalleled genius and have discovered a technique that will revolutionize your chosen field-or at least for the time being, your innovation! Choose a revolutionary modification to apply to your innovation. You can also choose an initial or breakthrough modification of the same type instead, if you prefer.</p>\n<h3>Revolutionary Armor Modifications</h3>\n<ul>\n<li><strong>Automated Impediments</strong> Your armor uses electromagnetic fields, subharmonic distortions, or other techniques to make it difficult for those close to you to move unless you allow it. While wearing your armor, all spaces adjacent to you are difficult terrain for your enemies.</li>\n<li><strong>Energy Barrier</strong> Your armor's defenses ablate any kind of energy coming your way. While wearing your armor, you gain resistance to all energy damage (acid, cold, electricity, fire, force, negative, positive, and sonic damage) equal to 2 + half your level. You must have the harmonic oscillator, metallic reactance, or phlogistonic regulator modification to select this modification.</li>\n<li><strong>Incredible Resistance</strong> You've improved upon your breakthrough modification's ability to resist damage. Choose one of the following breakthrough modifications your innovation has: dense plating, layered mesh, or tensile absorption. Increase the resistance you gain from that modification to be equal to your level, instead of half your level.</li>\n<li><strong>Multisensory Mask (Subterfuge Suit Only)</strong> You've built a multisensory mask over your armor that protects you by distorting your figure from all senses, leaving behind only a hazy image, muffled sounds, and so forth. While wearing the armor, you gain concealment against all creatures, even if they are using a nonvisual precise sense, such as a bat's echolocation. As normal for effects that leave your location obvious, you can't use this concealment to Hide or Sneak. If you use a hostile action, the concealment ends until you restore the mask as a single action, which has the manipulate trait.</li>\n<li><strong>Perfect Fortification (Power Suit Only)</strong> You've outfitted your armor with such heavy fortifications that deadly attacks often lose their edge. Each time you're critically hit while wearing the armor, attempt a @Check[type:flat|dc:13|showDC:owner] check. On a success, it becomes a normal hit. This isn't cumulative with fortification runes or other abilities that reduce critical hits with a flat check. Additionally, you gain resistance 2 + half your level against precision damage.</li>\n<li><strong>Physical Protections</strong> Your armor has so many adjustments and precautions that it can guard against all physical damage. While wearing your armor, you gain resistance to all physical damage (bludgeoning, piercing, and slashing damage, as well as persistent bleed damage) equal to half your level. You must have the dense plating, layered mesh, or tensile absorption breakthrough modification to select this modification.</li>\n<li><strong>Rune Capacity</strong> Whether you've done some dabbling in orichalcum alloys or found another engineering solution, you've built your innovation in such a way that it can hold an additional property rune. Your innovation can have one more property rune than a normal item of its kind (to a maximum of four property runes with a +3 potency armor).</li>\n</ul>\n<h3>Revolutionary Construct Modifications</h3>\n<ul>\n<li><strong>Flight Chassis</strong> You fit your construct with a means of flight, such as adding rotors or rebuilding it with wings and a lightweight construction. Your innovation gains a fly Speed of 25 feet.</li>\n<li><strong>Miracle Gears</strong> As you perfect your innovation's cortex, it becomes much more intelligent. Its Intelligence modifier increases by 2, and it learns a language of your choice from among the languages you know. Your construct gains the ability to use actions that require greater Intelligence, like Coerce and Decipher Writing. Finally, your construct becomes legendary in two Intelligence- or Charisma-based skills of your choice. You must have the marvelous gears modification to select this modification.</li>\n<li><strong>Resistant Coating</strong> Your innovation is hard to damage by any means. It gains resistance 5 to all damage (except adamantine).</li>\n<li><strong>Runic Keystone</strong> You've incorporated a device similar to a runestone into your innovation, allowing it to hold a property rune, even though it isn't a weapon or suit of armor. An armor property rune affects your innovation itself if it would affect the wearer of the armor. A weapon property rune grants whatever properties it would normally grant to a weapon to your innovation's unarmed attacks, following all the requirements as normal (for instance, a vorpal rune would only apply to slashing melee unarmed attacks); if the rune affects only ranged attacks, it has no effect unless your innovation has a built-in ranged attack (from the projectile launcher initial modification, for example). If the rune would affect the physical shape or appearance of the weapon or armor itself, like glamered, the rune has no effect when etched into your construct.</li>\n<li><strong>Wall Configuration</strong> Your innovation can transform from a mobile construct to a stationary battlefield emplacement. It can unfold as a 2-action activity that has the manipulate trait, changing from its usual form into a thin, straight wall of metal and gears up to 10 feet tall and 30 feet long. The wall must extend through your innovation's original space. While your construct is a wall, it can't take any actions except to use the same activity to transform back, and it can't defend itself easily, making it @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} and giving it an additional -2 status penalty to its AC. The wall blocks line of sight and effect unless your innovation has half its maximum HP or fewer, at which point holes in the wall allow creatures to see through and attack with cover, and Tiny creatures to slip through.</li>\n</ul>\n<h3>Revolutionary Weapon Modifications</h3>\n<ul>\n<li><strong>Attack Refiner</strong> Your weapon makes minute recalibrations after every missed attack to ensure the next lands true. Your innovation gains the backswing and shove traits.</li>\n<li><strong>Deadly Strike</strong> Through precise calculation, you've found the perfect shape for your weapon to deal extreme damage on a well-placed strike. Your innovation gains the deadly d8 trait. If your innovation was already deadly, it increases its deadly die to d12 instead of gaining deadly d8.</li>\n<li><strong>Enhanced Damage</strong> You've made your innovation more powerful than other weapons of its kind. Increase your innovation's weapon damage die by one step (d4 to d6, d6 to d8, d8 to d10, d10 to d12). As normal, you can't increase your die by more than one size, so this modification isn't cumulative with complex simplicity.</li>\n<li><strong>Extensible Weapon (Melee only)</strong> You've found a way to construct your weapon so that it can extend while leaving its balance unchanged. Your innovation gains the reach trait. If the weapon already had the reach trait, it increases your reach by an additional 10 feet, instead of the usual additional 5 feet.</li>\n<li><strong>Impossible Alloy</strong> Other inventors claim it's not even technically possible, but you've managed to create several metal alloys that seem to work for only you. These alloys can damage opponents vulnerable to any one of the seven skymetals. Your innovation is treated as all seven skymetals (abysium, adamantine, djezet, inubrix, noqual, orichalcum, and siccatite). This means you deal more damage to a variety of creatures, though you don't apply any of the other special effects for weapons made of those skymetals.</li>\n<li><strong>Momentum Retainer (Melee only)</strong> A special weighted device lets your weapon retain more of its momentum when you attack. Your innovation gains the forceful and versatile B traits.</li>\n<li><strong>Omnirange Stabilizers (Ranged only)</strong> You've modified your innovation to be dangerous and effective at any range. If your innovation had the volley trait, remove the volley trait. Otherwise, increase your innovation's range increment by 50 feet or an amount equal to the weapon's base range increment, whichever is more.</li>\n<li><strong>Rune Capacity</strong> Whether you've dabbled with orichalcum or found another engineering solution, you've built your innovation in such a way that it can hold an additional property rune. Your innovation can have one more property rune than a normal item of its kind (to a maximum of four property runes with a +3 potency weapon).</li>\n</ul>\n<h2>Inventive Mastery<span style=\"float:right\">Level 17</span></h2>\n<p>Your inventions are incredibly effective. Your proficiency rank for your inventor class DC increases to master.</p>\n<h2>Juggernaut<span style=\"float:right\">Level 17</span></h2>\n<p>Your body is accustomed to physical hardship and resistant to ailments. Your proficiency rank for Fortitude saves increases to master. When you roll a success on a Fortitude save, you get a critical success instead.</p>\n<h2>Infinite Invention<span style=\"float:right\">Level 19</span></h2>\n<p>Your ability to adjust your innovation has reached impossible heights, and you can use these skills to make major adjustments in your spare time. During your daily preparations, you automatically fix your innovation if it's destroyed or broken, and you can change to a different innovation (armor, construct, weapon, or other type you have access to) and change your modifications and offensive boost.</p>\n<p>If you have any feats that had your previous innovation as a prerequisite, you can't use them until you retrain the feats as normal. However, it takes you only 1 day of downtime to retrain such a feat into a feat that has your new innovation as a prerequisite, instead of 1 week.</p>\n<h2>Medium Armor Mastery<span style=\"float:right\">Level 19</span></h2>\n<p>Your skill with armor improves, helping you avoid more blows. Your proficiency ranks for light and medium armor, as well as for unarmored defense, increase to master.</p>",
        },
        source: {
          value: "Pathfinder Guns & Gears",
        },
        rules: [],
        slug: "inventor",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        traits: {
          value: [],
          rarity: "uncommon",
        },
        keyAbility: {
          value: ["int"],
        },
        items: {
          "1doue": {
            img: "systems/pf2e/icons/features/classes/weapon-expertise.webp",
            level: 5,
            name: "Inventor Weapon Expertise",
            uuid: "Compendium.pf2e.classfeatures.Item.0NyPgi6UACMTmAGE",
          },
          "43sk5": {
            img: "systems/pf2e/icons/features/classes/peerless-inventor.webp",
            level: 1,
            name: "Peerless Inventor",
            uuid: "Compendium.pf2e.classfeatures.Item.JH6um0St37UrjLNG",
          },
          "5aavk": {
            img: "systems/pf2e/icons/features/classes/alertness.webp",
            level: 13,
            name: "Alertness",
            uuid: "Compendium.pf2e.classfeatures.Item.D8CSi8c9XiRpVc5M",
          },
          "5prut": {
            img: "systems/pf2e/icons/features/classes/medium-armor-expertise.webp",
            level: 11,
            name: "Medium Armor Expertise (Inventor)",
            uuid: "Compendium.pf2e.classfeatures.Item.esyKPSDbFQPB4lhq",
          },
          "72ph9": {
            img: "systems/pf2e/icons/features/classes/complete-reconfiguration.webp",
            level: 13,
            name: "Complete Reconfiguration",
            uuid: "Compendium.pf2e.classfeatures.Item.j0klWHkH3AxUAgok",
          },
          "796tt": {
            img: "systems/pf2e/icons/default-icons/feat.svg",
            level: 9,
            name: "Offensive Boost",
            uuid: "Compendium.pf2e.classfeatures.Item.F8oXHnu9iNTcpXbJ",
          },
          "7aqni": {
            img: "systems/pf2e/icons/features/classes/master-overdrive.webp",
            level: 7,
            name: "Master Overdrive",
            uuid: "Compendium.pf2e.classfeatures.Item.SXv9bJFbntDOMRIL",
          },
          cqq8h: {
            img: "systems/pf2e/icons/features/classes/medium-armor-mastery.webp",
            level: 19,
            name: "Medium Armor Mastery",
            uuid: "Compendium.pf2e.classfeatures.Item.cGMSYAErbUG5E8X2",
          },
          d0g4j: {
            img: "systems/pf2e/icons/features/classes/greater-weapon-specialization.webp",
            level: 15,
            name: "Greater Weapon Specialization (Level 15)",
            uuid: "Compendium.pf2e.classfeatures.Item.Z7HX6TeFsaup7Dx9",
          },
          ebysz: {
            img: "systems/pf2e/icons/features/classes/revolutionary-innovation.webp",
            level: 15,
            name: "Revolutionary Innovation",
            uuid: "Compendium.pf2e.classfeatures.Item.tXbadIT3LzwuSR19",
          },
          f46jt: {
            img: "systems/pf2e/icons/features/classes/inventive-mastery.webp",
            level: 17,
            name: "Inventive Mastery",
            uuid: "Compendium.pf2e.classfeatures.Item.Uu8VnpAo3XZZEKPd",
          },
          g4pqo: {
            img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
            level: 7,
            name: "Weapon Specialization",
            uuid: "Compendium.pf2e.classfeatures.Item.9EqIasqfI8YIM3Pt",
          },
          havjj: {
            img: "systems/pf2e/icons/features/classes/shield-block.webp",
            level: 1,
            name: "Shield Block",
            uuid: "Compendium.pf2e.classfeatures.Item.eZNCckLzbH3GyncH",
          },
          hu0ip: {
            img: "systems/pf2e/icons/features/classes/breakthrough-innovation.webp",
            level: 7,
            name: "Breakthrough Innovation",
            uuid: "Compendium.pf2e.classfeatures.Item.78HIjRbGoONMpF31",
          },
          ihpyc: {
            img: "systems/pf2e/icons/features/classes/inventive-expertise.webp",
            level: 9,
            name: "Inventive Expertise",
            uuid: "Compendium.pf2e.classfeatures.Item.mQVC1iDyNi2tfsF8",
          },
          ijovo: {
            img: "systems/pf2e/icons/features/classes/juggerenaut.webp",
            level: 17,
            name: "Juggernaut",
            uuid: "Compendium.pf2e.classfeatures.Item.OMZs5y16jZRW9KQK",
          },
          lp0v8: {
            img: "systems/pf2e/icons/features/classes/resolve.webp",
            level: 11,
            name: "Resolve",
            uuid: "Compendium.pf2e.classfeatures.Item.JQAujUXjczVnYDEI",
          },
          n7f3b: {
            img: "systems/pf2e/icons/features/classes/legendary-overdrive.webp",
            level: 15,
            name: "Legendary Overdrive",
            uuid: "Compendium.pf2e.classfeatures.Item.o1omL2LdHvjEwh3P",
          },
          ng6mg: {
            img: "systems/pf2e/icons/features/classes/infinite-invention.webp",
            level: 19,
            name: "Infinite Invention",
            uuid: "Compendium.pf2e.classfeatures.Item.rOaLbipkComjc6qh",
          },
          ouhy4: {
            img: "systems/pf2e/icons/features/classes/lightning-reflexes.webp",
            level: 7,
            name: "Lightning Reflexes",
            uuid: "Compendium.pf2e.classfeatures.Item.TUOeATt52P43r5W0",
          },
          p0u0x: {
            img: "systems/pf2e/icons/features/classes/explode.webp",
            level: 1,
            name: "Explode",
            uuid: "Compendium.pf2e.classfeatures.Item.pEm1RTNuzzQVKkR0",
          },
          paomt: {
            img: "systems/pf2e/icons/features/classes/overdrive.webp",
            level: 1,
            name: "Overdrive",
            uuid: "Compendium.pf2e.classfeatures.Item.oP5zM5Yu41xcx3iu",
          },
          ptf4a: {
            img: "systems/pf2e/icons/features/classes/reconfigure.webp",
            level: 3,
            name: "Reconfigure",
            uuid: "Compendium.pf2e.classfeatures.Item.J46wcNqKXvtokBD1",
          },
          tkc99: {
            img: "systems/pf2e/icons/features/classes/expert-overdrive.webp",
            level: 3,
            name: "Expert Overdrive",
            uuid: "Compendium.pf2e.classfeatures.Item.YMKxN56w617BYwu4",
          },
          wg9yw: {
            img: "systems/pf2e/icons/features/classes/weapon-mastery.webp",
            level: 13,
            name: "Inventor Weapon Mastery",
            uuid: "Compendium.pf2e.classfeatures.Item.mJpPaoVlNmTK47x1",
          },
          y9fo7: {
            img: "systems/pf2e/icons/features/classes/innovation.webp",
            level: 1,
            name: "Innovation",
            uuid: "Compendium.pf2e.classfeatures.Item.jIAgXe2FetAKBwt7",
          },
        },
        hp: 8,
        trainedSkills: {
          value: ["cra"],
          additional: 3,
          custom: "",
        },
        perception: 1,
        savingThrows: {
          fortitude: 2,
          reflex: 1,
          will: 2,
        },
        attacks: {
          simple: 1,
          martial: 1,
          advanced: 0,
          unarmed: 1,
          other: {
            name: "",
            rank: 0,
          },
        },
        defenses: {
          unarmored: 1,
          light: 1,
          medium: 1,
          heavy: 0,
        },
        classDC: 1,
        ancestryFeatLevels: {
          value: [1, 5, 9, 13, 17],
        },
        classFeatLevels: {
          value: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        },
        generalFeatLevels: {
          value: [3, 7, 11, 15, 19],
        },
        skillFeatLevels: {
          value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        },
        skillIncreaseLevels: {
          value: [3, 5, 7, 9, 11, 13, 15, 17, 19],
        },
      },
      type: "class",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.classes.Item.30qVs46dVNflgQNx",
        },
        "scene-packer": {
          hash: "ae2ae28ae2d3d2e3f3dbf973ea209b3da92e183e",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690104659779,
        modifiedTime: 1690104659779,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
      _id: "EDZUBjxqZoz8YlbA",
    },
    {
      img: "systems/pf2e/icons/features/classes/innovation.webp",
      name: "Innovation",
      system: {
        description: {
          gm: "",
          value:
            "<p>While you're always creating inventions, there's one that represents your preeminent work, the one that you hope- with refinement-might change the world. Choose one of the below innovations. Your innovation's level is equal to your level. If your innovation is destroyed, you can spend 1 day of downtime and attempt a Crafting check with a high DC for your level; on a success, you rebuild it. An innovation only works due to your constant maintenance and tinkering, and therefore has no market Price.</p>",
        },
        source: {
          value: "Pathfinder Guns & Gears",
        },
        rules: [
          {
            adjustName: false,
            choices: [
              {
                value: "Compendium.pf2e.classfeatures.Item.fpwtpm8pdwO1I6MO",
              },
              {
                value: "Compendium.pf2e.classfeatures.Item.o70O2FysDd7BS9e0",
              },
              {
                value: "Compendium.pf2e.classfeatures.Item.bok3P78CMchFibxC",
              },
            ],
            flag: "innovation",
            key: "ChoiceSet",
            prompt: "PF2E.SpecificRule.Inventor.Innovation.Prompt",
            selection: "Compendium.pf2e.classfeatures.Item.bok3P78CMchFibxC",
          },
          {
            key: "GrantItem",
            uuid: "{item|flags.pf2e.rulesSelections.innovation}",
            flag: "weaponInnovation",
          },
        ],
        slug: "innovation",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 1,
        },
        traits: {
          value: ["inventor"],
          rarity: "common",
        },
        category: "classfeature",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: {
          value: "passive",
        },
        actions: {
          value: null,
        },
        prerequisites: {
          value: [],
        },
        location: "EDZUBjxqZoz8YlbA",
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.classfeatures.Item.jIAgXe2FetAKBwt7",
        },
        pf2e: {
          itemGrants: {
            weaponInnovation: {
              id: "9iEf9oJC6AWNXV9m",
              onDelete: "detach",
            },
          },
        },
        "scene-packer": {
          hash: "9bc494a4c6b2d74ea5788ba68929258b307b9c4f",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690104659779,
        modifiedTime: 1690104659779,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
      _id: "CQ6aYuaUL6npUTk2",
    },
    {
      img: "systems/pf2e/icons/features/classes/explode.webp",
      name: "Explode",
      system: {
        description: {
          gm: "",
          value:
            "<p>Your innovation is a creation barely held together by your own engineering, always on the edge of completely falling apart. Though this adds risk, it also means you can coax it to perform far beyond its design specifications using special unstable actions. See the definition of the unstable trait and how it affects your innovation.</p>\n<p>While inventors can learn various unstable actions over their career, all at least know how to make their innovation @UUID[Compendium.pf2e.actionspf2e.Item.naKVqd8POxcnGclz]{Explode}.</p>",
        },
        source: {
          value: "Pathfinder Guns & Gears",
        },
        rules: [
          {
            key: "GrantItem",
            uuid: "Compendium.pf2e.actionspf2e.Item.naKVqd8POxcnGclz",
            flag: "explode",
          },
        ],
        slug: "explode",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 1,
        },
        traits: {
          value: ["inventor"],
          rarity: "common",
        },
        category: "classfeature",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: {
          value: "passive",
        },
        actions: {
          value: null,
        },
        prerequisites: {
          value: [],
        },
        location: "EDZUBjxqZoz8YlbA",
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.classfeatures.Item.pEm1RTNuzzQVKkR0",
        },
        pf2e: {
          itemGrants: {
            explode: {
              id: "wGOVZ949C1bQXmcI",
              onDelete: "detach",
            },
          },
        },
        "scene-packer": {
          hash: "6ce76828ece0fc2d9a22746be373a6fcd572473c",
        },
      },
      effects: [],
      folder: null,
      sort: 100,
      ownership: {
        default: 0,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690104659779,
        modifiedTime: 1690104659779,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
      _id: "gV2PQJVd9y5Nj2sG",
    },
    {
      img: "systems/pf2e/icons/features/classes/overdrive.webp",
      name: "Overdrive",
      system: {
        description: {
          gm: "",
          value:
            "<p>You have a bevy of smaller devices of your own invention, from muscle stimulants to concussive pistons. When it's necessary, you can throw them into @UUID[Compendium.pf2e.actionspf2e.Item.3D9kGfwg4LUZBR9A]{Overdrive} to assist you in combat.</p>",
        },
        source: {
          value: "Pathfinder Guns & Gears",
        },
        rules: [
          {
            key: "GrantItem",
            uuid: "Compendium.pf2e.actionspf2e.Item.3D9kGfwg4LUZBR9A",
            flag: "overdrive",
          },
        ],
        slug: "overdrive",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 1,
        },
        traits: {
          value: ["inventor"],
          rarity: "common",
        },
        category: "classfeature",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: {
          value: "passive",
        },
        actions: {
          value: null,
        },
        prerequisites: {
          value: [],
        },
        location: "EDZUBjxqZoz8YlbA",
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.classfeatures.Item.oP5zM5Yu41xcx3iu",
        },
        pf2e: {
          itemGrants: {
            overdrive: {
              id: "qltK5tnPCPyP6iEf",
              onDelete: "detach",
            },
          },
        },
        "scene-packer": {
          hash: "41faccaf8b8e1e3780da118944052d16ea6fd183",
        },
      },
      effects: [],
      folder: null,
      sort: 200,
      ownership: {
        default: 0,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690104659779,
        modifiedTime: 1690104659779,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
      _id: "9R5n4oV9WxLcCfNO",
    },
    {
      img: "systems/pf2e/icons/features/classes/peerless-inventor.webp",
      name: "Peerless Inventor",
      system: {
        description: {
          gm: "",
          value:
            "<p>You are constantly inventing, and your skill at crafting is unimpeachable. You gain the @UUID[Compendium.pf2e.feats-srd.Item.XR95taODq1sq82Du]{Inventor} skill feat, even if you don't meet its prerequisites.</p>",
        },
        source: {
          value: "Pathfinder Guns & Gears",
        },
        rules: [
          {
            key: "GrantItem",
            uuid: "Compendium.pf2e.feats-srd.Item.XR95taODq1sq82Du",
            flag: "inventor",
          },
        ],
        slug: "peerless-inventor",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 1,
        },
        traits: {
          value: ["inventor"],
          rarity: "common",
        },
        category: "classfeature",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: {
          value: "passive",
        },
        actions: {
          value: null,
        },
        prerequisites: {
          value: [],
        },
        location: "EDZUBjxqZoz8YlbA",
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.classfeatures.Item.JH6um0St37UrjLNG",
        },
        pf2e: {
          itemGrants: {
            inventor: {
              id: "lqQxlwDATgMHpvZn",
              onDelete: "detach",
            },
          },
        },
        "scene-packer": {
          hash: "e333affb330f5c9211e1cd55c18a59c8d2b033f6",
        },
      },
      effects: [],
      folder: null,
      sort: 300,
      ownership: {
        default: 0,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690104659779,
        modifiedTime: 1690104659779,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
      _id: "QuE9JeiEyUfO7546",
    },
    {
      img: "systems/pf2e/icons/features/classes/shield-block.webp",
      name: "Shield Block",
      system: {
        description: {
          gm: "",
          value: "<p>You gain the @UUID[Compendium.pf2e.feats-srd.Item.jM72TjJ965jocBV8]{Shield Block} general feat, a reaction that lets you reduce damage with your shield.</p>",
        },
        source: {
          value: "Pathfinder Core Rulebook",
        },
        rules: [
          {
            key: "GrantItem",
            uuid: "Compendium.pf2e.feats-srd.Item.jM72TjJ965jocBV8",
            flag: "shieldBlock",
          },
        ],
        slug: "shield-block",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 1,
        },
        traits: {
          value: ["champion", "druid", "fighter"],
          rarity: "common",
        },
        category: "classfeature",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: {
          value: "passive",
        },
        actions: {
          value: null,
        },
        prerequisites: {
          value: [],
        },
        location: "EDZUBjxqZoz8YlbA",
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.classfeatures.Item.eZNCckLzbH3GyncH",
        },
        pf2e: {
          itemGrants: {
            shieldBlock: {
              id: "V3ClaXT3hwkrTTqt",
              onDelete: "detach",
            },
          },
        },
        "scene-packer": {
          hash: "b6a9322a8c724d15a4e842a1869fa976de946297",
        },
      },
      effects: [],
      folder: null,
      sort: 400,
      ownership: {
        default: 0,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690104659779,
        modifiedTime: 1690104659779,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
      _id: "lYLhL0xJcKPsWQkn",
    },
    {
      img: "systems/pf2e/icons/features/classes/segmented-frame.webp",
      name: "Segmented Frame",
      system: {
        description: {
          gm: "",
          value:
            "<p>Hinges, clamps, and telescoping parts make your innovation collapsible and adjustable. It gains the modular trait for bludgeoning, piercing, and slashing. You can Interact to collapse the item down to light Bulk or to return it to your normal form. When it's collapsed to light Bulk, it has the concealable trait, which grants you a +2 circumstance bonus to Stealth checks and DCs to hide or conceal the weapon.</p>",
        },
        source: {
          value: "Pathfinder Guns & Gears",
        },
        rules: [
          {
            domain: "all",
            key: "RollOption",
            label: "PF2E.SpecificRule.Inventor.Modification.InnovationCollapsed",
            option: "innovation-collapsed",
            toggleable: true,
            value: false,
          },
          {
            definition: ["item:id:{actor|flags.pf2e.trackedItems.weaponInnovation}"],
            key: "AdjustStrike",
            mode: "add",
            predicate: ["innovation-collapsed"],
            property: "weapon-traits",
            value: "concealable",
          },
          {
            definition: ["item:id:{actor|flags.pf2e.trackedItems.weaponInnovation}"],
            key: "AdjustStrike",
            mode: "add",
            property: "weapon-traits",
            value: "modular",
          },
        ],
        slug: "segmented-frame",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 1,
        },
        traits: {
          value: ["inventor"],
          rarity: "common",
        },
        category: "classfeature",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: {
          value: "passive",
        },
        actions: {
          value: null,
        },
        prerequisites: {
          value: [],
        },
        location: null,
        actionCategory: {
          value: "",
        },
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.classfeatures.Item.ZCfPjOn6JJ8Zrgvg",
        },
        pf2e: {
          grantedBy: {
            id: "9iEf9oJC6AWNXV9m",
            onDelete: "cascade",
          },
        },
        "scene-packer": {
          hash: "f017042bc86bb1f5b3cbd21541fa1ec20e0768ba",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.3.1",
        coreVersion: "11.307",
        createdTime: 1690104659779,
        modifiedTime: 1691319069807,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
      _id: "OQelhixLajhMYT6Y",
    },
    {
      img: "systems/pf2e/icons/features/classes/weapon-innovation.webp",
      name: "Weapon Innovation",
      system: {
        description: {
          gm: "",
          value:
            "<p>Your innovation is an impossible-looking weapon augmented by numerous unusual mechanisms. It begins with the same statistics as a level 0 common simple or martial weapon of your choice, or another level 0 simple or martial weapon to which you have access. You can instead use the statistics of a 1st-level common simple or martial weapon of your choice, or another 1st-level simple or martial weapon to which you have access, but you must pay the monetary Price for the weapon. An innovation weapon can have fundamental and property runes added to it in the same way as an ordinary weapon. Because of the unique features of your innovation, everyone except you is untrained in it, even if they would normally be trained (or better) in simple or martial weapons. If you use the Overdrive action, you can choose to change the additional damage from Overdrive to fire damage. Choose one initial weapon modification to apply to your innovation, either from the following or from other initial weapon modifications to which you have access. These modifications grant additional weapon traits, sometimes with extra abilities. A modification might give your weapon the versatile trait with a damage type that the weapon could already deal, either from its base damage type or from an existing versatile trait. In that case, if you select that modification, you can instead choose to give the weapon the versatile trait for a different damage type: bludgeoning, piercing, or slashing.</p>\n<ul>\n<li><strong>Blunt Shot (Ranged Only)</strong> Your weapon innovation can file the edges off your ammunition and adjust the blunt force of the shot to deliver a bludgeoning attack when necessary, as well as to avoid striking a lethal blow with an otherwise deadly shot. Your innovation gains the nonlethal and versatile B traits. You can choose whether to apply the nonlethal trait on each attack with your innovation.</li>\n<li><strong>Complex Simplicity (Simple Weapon Only)</strong> Increase your innovation's weapon damage die by one step (d4 to d6, d6 to d8, d8 to d10, d10 to d12). In addition, it gains one of the following traits of your choice: versatile B, versatile P, or versatile S.</li>\n<li><strong>Dynamic Weighting (One-handed Melee Weapon Only; Can't Have the Agile, Attached, or Free-hand Trait)</strong> Your weapon's modified weight distribution can increase power in exchange for taking more hands to wield. Your innovation gains the two-hand trait, with a damage die one size higher than the weapon's normal weapon damage die size (for instance, a longsword would gain the two-hand d10 trait). Your innovation also gains the versatile B trait.</li>\n<li><strong>Entangling Form (Melee Only)</strong> You've altered your weapon to including tangling wires or straps, or to have a flexible construction. Your innovation gains the grapple and trip traits.</li>\n<li><strong>Hampering Spikes (Melee Only)</strong> You've added long, snagging spikes to your weapon, which you can use to impede your foes' movement. Your innovation gains the hampering and versatile P traits.</li>\n<li><strong>Hefty Composition (Melee Only)</strong> Blunt surfaces and sturdy construction make your weapon hefty and mace-like. Your innovation gains the shove and versatile B traits.</li>\n<li><strong>Modular Head</strong> You've constructed a multi-purpose, adjustable striking surface for your weapon, or you've made special ammunition you can swiftly alter. Your innovation gains the modular trait for bludgeoning, piercing, and slashing. When you Interact to use the modular trait, you can also choose to give the weapon the nonlethal trait if it doesn't currently have it, or to remove that trait if it's currently nonlethal.</li>\n<li><strong>Pacification Tools (Melee Only)</strong> Softer materials make your weapon suited to knock out instead of kill, and special protrusions let you catch weapons and disarm your foes. Your innovation gains the disarm and nonlethal traits. You can choose whether to apply the nonlethal trait on each attack with your innovation.</li>\n<li><strong>Razor Prongs (Melee Only)</strong> You can knock down and slash your foes with sharp, curved blades added to your weapon. Your innovation gains the trip and versatile S traits.</li>\n<li><strong>Segmented Frame</strong> Hinges, clamps, and telescoping parts make your innovation collapsible and adjustable. It gains the modular trait for bludgeoning, piercing, and slashing. You can Interact to collapse the item down to light Bulk or to return it to your normal form. When it's collapsed to light Bulk, it has the concealable trait, which grants you a +2 circumstance bonus to Stealth checks and DCs to hide or conceal the weapon.</li>\n</ul>",
        },
        source: {
          value: "Pathfinder Guns & Gears",
        },
        rules: [
          {
            adjustName: false,
            choices: {
              filter: [
                {
                  or: ["item:level:0", "item:level:1"],
                },
                {
                  or: ["item:category:martial", "item:category:simple"],
                },
                {
                  not: "item:trait:consumable",
                },
              ],
              itemType: "weapon",
            },
            flag: "weaponInnovation",
            key: "ChoiceSet",
            prompt: "PF2E.SpecificRule.Inventor.Innovation.Weapon.Prompt",
            selection: "Item.e3afm5FnsIlZM3Ad",
          },
          {
            alterations: [
              {
                mode: "override",
                property: "rarity",
                value: "unique",
              },
            ],
            flag: "weaponInnovation",
            key: "GrantItem",
            track: true,
            uuid: "{item|flags.pf2e.rulesSelections.weaponInnovation}",
          },
          {
            adjustName: false,
            allowedDrops: {
              label: "PF2E.SpecificRule.Inventor.Modification.Initial.AllowedDrops",
              predicate: ["item:level:1", "item:type:feature", "item:trait:inventor"],
            },
            choices: [
              {
                predicate: [
                  "weapon-innovation:ranged",
                  {
                    not: "weapon-innovation:thrown",
                  },
                ],
                value: "Compendium.pf2e.classfeatures.Item.O3r84Uv6HytaSIbX",
              },
              {
                predicate: ["weapon-innovation:category:simple"],
                value: "Compendium.pf2e.classfeatures.Item.qIOKqT93h6CX6V4k",
              },
              {
                predicate: [
                  "weapon-innovation:usage:hands:1",
                  "weapon-innovation:melee",
                  {
                    nor: ["weapon-innovation:trait:agile", "weapon-innovation:trait:attached", "weapon-innovation:trait:free-hand"],
                  },
                ],
                value: "Compendium.pf2e.classfeatures.Item.O9wpXEKtKYJOMIlK",
              },
              {
                predicate: ["weapon-innovation:melee"],
                value: "Compendium.pf2e.classfeatures.Item.Z1au5zxYcjZvdQpd",
              },
              {
                predicate: ["weapon-innovation:melee"],
                value: "Compendium.pf2e.classfeatures.Item.R8cfRNPdaCkd2bud",
              },
              {
                predicate: ["weapon-innovation:melee"],
                value: "Compendium.pf2e.classfeatures.Item.Nbg4ZllDI9uCowZL",
              },
              {
                value: "Compendium.pf2e.classfeatures.Item.qwhfPgE2tTW0hvPe",
              },
              {
                predicate: ["weapon-innovation:melee"],
                value: "Compendium.pf2e.classfeatures.Item.pSXlZggdCCbkQqNr",
              },
              {
                predicate: ["weapon-innovation:melee"],
                value: "Compendium.pf2e.classfeatures.Item.fOulT6iKVqIK4jJX",
              },
              {
                value: "Compendium.pf2e.classfeatures.Item.ZCfPjOn6JJ8Zrgvg",
              },
            ],
            flag: "initialModification",
            key: "ChoiceSet",
            predicate: ["class:inventor"],
            prompt: "PF2E.SpecificRule.Inventor.Modification.Initial.Prompt",
            selection: "Compendium.pf2e.classfeatures.Item.ZCfPjOn6JJ8Zrgvg",
          },
          {
            allowDuplicate: false,
            flag: "initialModification",
            key: "GrantItem",
            predicate: ["class:inventor"],
            uuid: "{item|flags.pf2e.rulesSelections.initialModification}",
          },
          {
            key: "ActiveEffectLike",
            mode: "override",
            path: "flags.pf2e.innovationId",
            value: "{item|flags.pf2e.itemGrants.weaponInnovation.id}",
          },
        ],
        slug: "weapon-innovation",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 1,
        },
        traits: {
          value: ["inventor"],
          rarity: "common",
        },
        category: "classfeature",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: {
          value: "passive",
        },
        actions: {
          value: null,
        },
        prerequisites: {
          value: [],
        },
        location: null,
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.classfeatures.Item.bok3P78CMchFibxC",
        },
        pf2e: {
          grantedBy: {
            id: "CQ6aYuaUL6npUTk2",
            onDelete: "cascade",
          },
          itemGrants: {
            initialModification: {
              id: "OQelhixLajhMYT6Y",
              onDelete: "detach",
            },
          },
        },
        "scene-packer": {
          hash: "73b945d366f897e7655cbf7d255ee85ed25b743f",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690104659779,
        modifiedTime: 1690108273487,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
      _id: "9iEf9oJC6AWNXV9m",
    },
    {
      img: "systems/pf2e/icons/actions/TwoActions.webp",
      name: "Explode",
      system: {
        description: {
          gm: "",
          value:
            "<p>You intentionally take your innovation beyond normal safety limits, making it explode and damage nearby creatures without damaging the innovation... hopefully. The explosion deals [[/r max(2, @actor.level)d6[fire]]]{leveled fire damage} with a @Check[type:reflex|dc:resolve(@actor.attributes.classDC.value)|basic:true] to all creatures in a @Template[type:emanation|distance:5] around you (if you're wearing or holding the innovation) or around your innovation (if your innovation is a minion).</p>\n<p>At 3rd level, and every level thereafter, increase your explosion's damage by 1d6.</p>\n<p>If you have the breakthrough innovation class feature, you can choose either a 5-foot or @Template[type:emanation|distance:10] for the area when you use Explode; if you have the revolutionary innovation class feature, you can choose a 5-foot, 10-foot, or @Template[type:emanation|distance:15].</p>\n<p>@Check[type:flat|dc:17|name:Unstable Flat Check|showDC:all|traits:unstable]{Unstable Check}</p>\n<p>On a failure, the innovation malfunctions in a spectacular (though harmless) fashion, such as a belch of smoke or shower of sparks, and it becomes incapable of being used for further unstable actions.</p>\n<p>On a critical failure, you also take [[/r @actor.level[fire]]]{fire damage equal to your level}.</p>",
        },
        source: {
          value: "Pathfinder Guns & Gears",
        },
        rules: [],
        slug: "explode",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        traits: {
          value: ["fire", "inventor", "manipulate", "unstable"],
          rarity: "common",
        },
        actionType: {
          value: "action",
        },
        category: "interaction",
        actions: {
          value: 2,
        },
        requirements: {
          value: "",
        },
        trigger: {
          value: "",
        },
        deathNote: false,
      },
      type: "action",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.actionspf2e.Item.naKVqd8POxcnGclz",
        },
        pf2e: {
          grantedBy: {
            id: "gV2PQJVd9y5Nj2sG",
            onDelete: "cascade",
          },
        },
        "scene-packer": {
          hash: "3a87026135a35d225e576fd2f9686aac55e99560",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690104659779,
        modifiedTime: 1690104659779,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
      _id: "wGOVZ949C1bQXmcI",
    },
    {
      img: "systems/pf2e/icons/actions/OneAction.webp",
      name: "Overdrive",
      system: {
        description: {
          gm: "",
          value:
            "<p><strong>Frequency</strong> once per round</p>\n<hr />\n<p>Temporarily cranking the gizmos on your body into overdrive, you try to add greater power to your attacks. Attempt a @Check[type:crafting|dc:@self.level] that has a standard DC for your level.</p>\n<p>@UUID[Compendium.pf2e.feat-effects.Item.1XlJ9xLzL19GHoOL]{Effect: Overdrive}</p>\n<hr />\n<p><strong>Critical Success</strong> Your gizmos go into a state of incredible efficiency called critical overdrive, adding great power to your attacks. Your Strikes deal additional damage equal to your Intelligence modifier for 1 minute. After the Overdrive ends, your gizmos become unusable as they cool down or reset, and you can't use Overdrive for 1 minute.</p>\n<p><strong>Success</strong> Your gizmos go into overdrive, adding power to your attacks. As critical success, except the additional damage is equal to half your Intelligence modifier.</p>\n<p><strong>Failure</strong> You make a miscalculation and nothing happens.</p>\n<p><strong>Critical Failure</strong> Whoops! Something explodes. You take [[/r @actor.level[fire]]]{fire damage equal to your level}, and you can't use Overdrive again for 1 minute as your gizmos cool down and reset.</p>\n<hr />\n<p><strong>Special</strong> When under the effects of Overdrive, you can still use the @UUID[Compendium.pf2e.actionspf2e.Item.3D9kGfwg4LUZBR9A]{Overdrive} action. You can't extend your Overdrive's duration this way, but you can turn an overdrive into a critical overdrive if you critically succeed. A failure has no effect on your current Overdrive, and you end your Overdrive on a critical failure.</p>",
        },
        source: {
          value: "Pathfinder Guns & Gears",
        },
        rules: [],
        slug: "overdrive",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        traits: {
          value: ["inventor", "manipulate"],
          rarity: "common",
        },
        actionType: {
          value: "action",
        },
        category: "offensive",
        actions: {
          value: 1,
        },
        requirements: {
          value: "",
        },
        trigger: {
          value: "",
        },
        deathNote: false,
      },
      type: "action",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.actionspf2e.Item.3D9kGfwg4LUZBR9A",
        },
        pf2e: {
          grantedBy: {
            id: "9R5n4oV9WxLcCfNO",
            onDelete: "cascade",
          },
        },
        "scene-packer": {
          hash: "d196141fd1ab675df20aaba4aae682b3ebd16846",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690104659779,
        modifiedTime: 1690104659779,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
      _id: "qltK5tnPCPyP6iEf",
    },
    {
      img: "systems/pf2e/icons/features/feats/feats.webp",
      name: "Inventor",
      system: {
        description: {
          gm: "",
          value:
            "<p>You are a genius at Crafting, easily able to determine how things are made and create new inventions. You can spend downtime to invent a common formula that you don't know. This works just like the Craft activity: you spend half the Price of the formula up front, attempt a Crafting check, and on a success either finish the formula by paying the difference or work for longer to decrease the Price. The difference is that you spend the additional time in research, design, and development, rather than in creating an item. Once it's complete, you add the new formula you invented to your formula book.</p>",
        },
        source: {
          value: "Pathfinder Core Rulebook",
        },
        rules: [],
        slug: "inventor",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 7,
        },
        traits: {
          value: ["downtime", "general", "skill"],
          rarity: "common",
        },
        category: "skill",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: {
          value: "passive",
        },
        actions: {
          value: null,
        },
        prerequisites: {
          value: [
            {
              value: "master in Crafting",
            },
          ],
        },
        location: null,
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.feats-srd.Item.XR95taODq1sq82Du",
        },
        pf2e: {
          grantedBy: {
            id: "QuE9JeiEyUfO7546",
            onDelete: "cascade",
          },
        },
        "scene-packer": {
          hash: "f818fae233ad75518c43886c7963b298150799c3",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690104659779,
        modifiedTime: 1690104659779,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
      _id: "lqQxlwDATgMHpvZn",
    },
    {
      img: "systems/pf2e/icons/features/feats/feats.webp",
      name: "Shield Block",
      system: {
        description: {
          gm: "",
          value:
            "<p><strong>Trigger</strong> While you have your shield raised, you would take damage from a physical attack</p>\n<hr />\n<p>You snap your shield in place to ward off a blow. Your shield prevents you from taking an amount of damage up to the shield's Hardness. You and the shield each take any remaining damage, possibly breaking or destroying the shield.</p>",
        },
        source: {
          value: "Pathfinder Core Rulebook",
        },
        rules: [],
        slug: "shield-block",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 1,
        },
        traits: {
          value: ["general"],
          rarity: "common",
        },
        category: "general",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: {
          value: "reaction",
        },
        actions: {
          value: null,
        },
        prerequisites: {
          value: [],
        },
        location: null,
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.feats-srd.Item.jM72TjJ965jocBV8",
        },
        pf2e: {
          grantedBy: {
            id: "lYLhL0xJcKPsWQkn",
            onDelete: "cascade",
          },
        },
        "scene-packer": {
          hash: "4808b4af9cbe59abcd96b66771ffe1fe7b1702ec",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690104659779,
        modifiedTime: 1690104659779,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
      _id: "V3ClaXT3hwkrTTqt",
    },
    {
      img: "systems/pf2e/icons/features/ancestry/half-elf.webp",
      name: "Half-Elf",
      system: {
        description: {
          gm: "",
          value:
            "<p>Either one of your parents was an elf, or one or both were half-elves. You have pointed ears and other telltale signs of elf heritage. You gain the elf trait, the half-elf trait, and @UUID[Compendium.pf2e.ancestryfeatures.Item.DRtaqOHXTRtGRIUT]{Low-Light Vision}. In addition, you can select elf, half-elf, and human feats whenever you gain an ancestry feat.</p>",
        },
        source: {
          value: "Pathfinder Core Rulebook",
        },
        rules: [
          {
            key: "Sense",
            selector: "lowLightVision",
          },
          {
            add: ["elf", "half-elf"],
            key: "ActorTraits",
          },
          {
            key: "ActiveEffectLike",
            mode: "override",
            path: "system.details.ancestry.versatile",
            value: "elf",
          },
          {
            key: "ActiveEffectLike",
            mode: "add",
            path: "system.details.ancestry.countsAs",
            value: "elf",
          },
          {
            key: "ActiveEffectLike",
            mode: "add",
            path: "system.details.ancestry.countsAs",
            value: "half-elf",
          },
        ],
        slug: "half-elf",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        traits: {
          value: ["half-elf"],
          rarity: "common",
        },
        ancestry: {
          name: "Human",
          slug: "human",
          uuid: "Compendium.pf2e.ancestries.Item.IiG7DgeLWYrSNXuX",
        },
      },
      type: "heritage",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.heritages.Item.N36ZR4lh9eCazDaN",
        },
        "scene-packer": {
          hash: "4b10eeba15d87adabc8149a316621177ea97bc25",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690104682517,
        modifiedTime: 1690104682517,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
      _id: "roCIW3n1NY0K1YpL",
    },
    {
      _id: "hb4fv82Al48txGoQ",
      img: "systems/pf2e/icons/features/feats/feats.webp",
      name: "Natural Ambition",
      system: {
        description: {
          gm: "",
          value:
            "<p>You were raised to be ambitious and always reach for the stars, leading you to progress quickly in your chosen field. You gain a 1st-level class feat for your class. You must meet the prerequisites, but you can select the feat later in the character creation process in order to determine which prerequisites you meet.</p>",
        },
        source: {
          value: "Pathfinder Core Rulebook",
        },
        rules: [
          {
            adjustName: false,
            choices: {
              filter: [
                "item:level:1",
                "item:category:class",
                "item:trait:{actor|system.details.class.trait}",
                {
                  or: [
                    "feature:dragon-instinct",
                    {
                      not: "item:draconic-arrogance",
                    },
                  ],
                },
                {
                  nor: [
                    "item:animal-companion",
                    "item:animal-companion-druid",
                    "item:bardic-lore",
                    "item:fire-lung",
                    "item:lingering-composition",
                    "item:leshy-familiar",
                    "item:martial-performance",
                    "item:shore-step",
                    "item:steadying-stone",
                    "item:storm-born",
                    "item:versatile-performance",
                    "item:wild-shape",
                  ],
                },
              ],
              itemType: "feat",
            },
            flag: "naturalAmbition",
            key: "ChoiceSet",
            prompt: "PF2E.SpecificRule.Prompt.LevelOneClassFeat",
            selection: "Compendium.pf2e.feats-srd.Item.gFQFgREm3HaFx1mf",
          },
          {
            key: "GrantItem",
            uuid: "{item|flags.pf2e.rulesSelections.naturalAmbition}",
            flag: "builtInTools",
          },
        ],
        slug: "natural-ambition",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 1,
        },
        traits: {
          value: ["human"],
          rarity: "common",
        },
        category: "ancestry",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: {
          value: "passive",
        },
        actions: {
          value: null,
        },
        prerequisites: {
          value: [],
        },
        location: "ancestry-1",
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.feats-srd.Item.PodajLVxqYSAqVox",
        },
        pf2e: {
          itemGrants: {
            builtInTools: {
              id: "FDP2Wx1wdfJOL7nl",
              onDelete: "detach",
            },
          },
        },
        "scene-packer": {
          hash: "08371f7a6a9aea022b89605f8c73c76ab18130e1",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690104933453,
        modifiedTime: 1690104933453,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
    },
    {
      img: "systems/pf2e/icons/default-icons/feats.webp",
      name: "Built-In Tools",
      system: {
        description: {
          gm: "",
          value:
            "<p>You've built tools into your innovation so you can access and use them easily. When you take this feat, choose up to two sets of tools you own, such as thieves' tools or healer's tools, that weigh a total of 2 Bulk or less. These tools become part of your innovation. The innovation's Bulk doesn't increase from this addition. As long as you are wielding, wearing, or adjacent to your innovation, you have the same quick access to these tools as the tools you are wearing, and they don't count against the usual limit of tools you can wear.</p>",
        },
        source: {
          value: "Pathfinder Guns & Gears",
        },
        rules: [],
        slug: "built-in-tools",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 1,
        },
        traits: {
          value: ["inventor", "modification"],
          rarity: "common",
        },
        category: "class",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: {
          value: "passive",
        },
        actions: {
          value: null,
        },
        prerequisites: {
          value: [],
        },
        location: null,
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.feats-srd.Item.gFQFgREm3HaFx1mf",
        },
        pf2e: {
          grantedBy: {
            id: "hb4fv82Al48txGoQ",
            onDelete: "cascade",
          },
        },
        "scene-packer": {
          hash: "796d59bf7e7f4311272b68321faceeb18b9aafef",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690104933453,
        modifiedTime: 1690104933453,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
      _id: "FDP2Wx1wdfJOL7nl",
    },
    {
      _id: "mOS5aQs88KJbUSDW",
      img: "systems/pf2e/icons/default-icons/feats.webp",
      name: "Tamper",
      system: {
        description: {
          gm: "",
          value:
            "<p>You tamper with a foe's weapon or armor, using a free hand. Choose either a weapon held by an enemy in your reach or a suit of armor worn by an enemy in your reach. Attempt a <span data-pf2-action=\"tamper\" data-pf2-glyph=\"A\">Crafting</span> check against the enemy's Reflex DC.</p>\n<hr />\n<p><strong>Critical Success</strong> Your tampering is incredibly effective. If you tampered with a weapon, the enemy takes a -2 circumstance penalty to attack rolls and damage rolls with that weapon. If you tampered with armor, the armor hampers the enemy's movement, making the enemy @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} and inflicting a -10-foot penalty to its Speeds. The effect lasts until the enemy Interacts to remove it, regardless of which one you used. @UUID[Compendium.pf2e.feat-effects.Item.rzcpTJU9MvW1x1gz]{Effect: Armor Tampered With (Critical Success)} @UUID[Compendium.pf2e.feat-effects.Item.o7qm13OmaYOMwgib]{Effect: Weapon Tampered With (Critical Success)}</p>\n<p><strong>Success</strong> Your tampering is temporarily effective. As critical success, but the effect ends at the start of your next turn, even if the enemy doesn't Interact to end it. @UUID[Compendium.pf2e.feat-effects.Item.IfRkgjyh0JzGalIy]{Effect: Armor Tampered With (Success)} @UUID[Compendium.pf2e.feat-effects.Item.4QWayYR3JSL9bk2T]{Effect: Weapon Tampered With (Success)}</p>\n<p><strong>Critical Failure</strong> Your tampering backfires dramatically, creating a small explosion from your own tools or gear. You take [[/r (@actor.level)[fire] #Tamper Backfire]]{fire damage equal to your level}.</p>",
        },
        source: {
          value: "Pathfinder Guns & Gears",
        },
        rules: [],
        slug: "tamper",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 1,
        },
        traits: {
          value: ["inventor", "manipulate"],
          rarity: "common",
        },
        category: "class",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: {
          value: "action",
        },
        actions: {
          value: 1,
        },
        prerequisites: {
          value: [],
        },
        location: "class-1",
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.feats-srd.Item.SheifYobjKqyK3Fv",
        },
        "scene-packer": {
          hash: "0199c47aa5111a8708f53122c824ce4e7292f126",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690104974113,
        modifiedTime: 1690104974113,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
    },
    {
      img: "systems/pf2e/icons/default-icons/consumable.svg",
      name: "Magazine with 30 Bullets",
      system: {
        description: {
          gm: "",
          value:
            "<p>Firearms require ammunition consisting of a projectile and black powder. A round of ammo can vary in its composition but is typically either a prepackaged paper cartridge, including wadding, bullet, and black powder, or loose shot packed in manually. Some weapons, like hand cannons and blunderbusses, can fire other materials, but their ammunition has the same Price due to the cost of the black powder. Because making rounds of firearm ammunition requires creating black powder, you need the @UUID[Compendium.pf2e.feats-srd.Item.is3Oz9wt11lNq62K]{Alchemical Crafting} skill feat to make them. Firearm rounds are a valid option for magical ammunition, just like arrows or bolts. Crafting magical firearm ammunition requires you to be able to craft both alchemical and magical items.</p>",
        },
        source: {
          value: "Pathfinder Guns & Gears",
        },
        rules: [],
        slug: "magazine-with-8-pellets",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 0,
        },
        traits: {
          value: [],
          rarity: "common",
          otherTags: [],
        },
        quantity: 2,
        baseItem: null,
        hp: {
          value: 0,
          max: 0,
        },
        hardness: 0,
        weight: {
          value: "L",
        },
        equippedBulk: {
          value: "",
        },
        price: {
          value: {
            sp: 6,
          },
        },
        equipped: {
          carryType: "worn",
          handsHeld: 0,
        },
        stackGroup: null,
        negateBulk: {
          value: "0",
        },
        containerId: "null",
        preciousMaterial: {
          value: null,
        },
        preciousMaterialGrade: {
          value: null,
        },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "Unusual Ammunition",
            img: "systems/pf2e/icons/unidentified_item_icons/ammunition.webp",
            data: {
              description: {
                value: "",
              },
            },
          },
          misidentified: {},
        },
        usage: {
          value: "held-in-one-hand",
        },
        consumableType: {
          value: "ammo",
        },
        charges: {
          value: 30,
          max: 30,
        },
        consume: {
          value: "",
        },
        autoDestroy: {
          value: true,
        },
        spell: null,
      },
      type: "consumable",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.hXZrMJPlw1UvVzjC",
        },
        "scene-packer": {
          hash: "16e298dd72010a598ba2c641a0646432ae92764c",
        },
      },
      effects: [],
      folder: null,
      sort: 150000,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.3",
        coreVersion: "11.306",
        createdTime: 1690098691470,
        modifiedTime: 1690719975080,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
      _id: "mLXCeukiktJMwqRN",
    },
    {
      _id: "MtRISgWccBb1BK9u",
      img: "systems/pf2e/icons/equipment/weapons/dagger.webp",
      name: "Dagger",
      system: {
        description: {
          gm: "",
          value: "<p>This small, bladed weapon is held in one hand and used to stab a creature in close combat. It can also be thrown.</p>",
        },
        source: {
          value: "Pathfinder Core Rulebook",
        },
        rules: [],
        slug: "dagger",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 0,
        },
        traits: {
          value: ["agile", "finesse", "thrown-10", "versatile-s"],
          rarity: "common",
          otherTags: [],
        },
        quantity: 1,
        baseItem: "dagger",
        hp: {
          value: 0,
          max: 0,
        },
        hardness: 0,
        weight: {
          value: "L",
        },
        equippedBulk: {
          value: "",
        },
        price: {
          value: {
            sp: 2,
          },
        },
        equipped: {
          carryType: "worn",
          invested: null,
          handsHeld: 0,
        },
        stackGroup: null,
        negateBulk: {
          value: "0",
        },
        containerId: null,
        preciousMaterial: {
          value: null,
        },
        preciousMaterialGrade: {
          value: null,
        },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: {
              description: {
                value: "",
              },
            },
          },
          misidentified: {},
        },
        usage: {
          value: "held-in-one-hand",
        },
        category: "simple",
        group: "knife",
        bonus: {
          value: 0,
        },
        damage: {
          dice: 1,
          die: "d4",
          damageType: "piercing",
          persistent: null,
        },
        bonusDamage: {
          value: 0,
        },
        splashDamage: {
          value: 0,
        },
        range: null,
        reload: {
          value: "-",
        },
        MAP: {
          value: "",
        },
        potencyRune: {
          value: 0,
        },
        strikingRune: {
          value: "",
        },
        specific: {
          value: false,
        },
        propertyRune1: {
          value: null,
        },
        propertyRune2: {
          value: null,
        },
        propertyRune3: {
          value: null,
        },
        propertyRune4: {
          value: null,
        },
        property1: {
          value: "",
          dice: 0,
          die: "",
          damageType: "",
          critDice: 0,
          critDie: "",
          critDamage: "",
          critDamageType: "",
        },
      },
      type: "weapon",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.rQWaJhI5Bko5x14Z",
        },
        "scene-packer": {
          hash: "8ae1c47bf8087aabf2882a8f5b3b24dd5cda27e2",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690111917760,
        modifiedTime: 1690111917760,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
    },
    {
      _id: "lYq1wfiXaU0cWjLX",
      img: "systems/pf2e/icons/equipment/adventuring-gear/caltrops.webp",
      name: "Caltrops",
      system: {
        description: {
          gm: "",
          value:
            "<p>These four‑pronged metal spikes can cause damage to a creature's feet. You can scatter caltrops in an empty square adjacent to you with an Interact action. The first creature that moves into that square must succeed at a @Check[type:acrobatics|dc:14|name:Avoid Caltrops] check or take 1d4 piercing damage and [[/r 1[bleed]]] damage. A creature taking persistent bleed damage from caltrops takes a -5‑foot penalty to its Speed. Spending an Interact action to pluck the caltrops free reduces the DC to stop the bleeding. Once a creature takes damage from caltrops, enough caltrops are ruined that other creatures moving into the square are safe. Deployed caltrops can be salvaged and reused if no creatures took damage from them. Otherwise, enough caltrops are ruined that they can't be salvaged.</p>",
        },
        source: {
          value: "Pathfinder Core Rulebook",
        },
        rules: [],
        slug: "caltrops",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 0,
        },
        traits: {
          value: [],
          rarity: "common",
          otherTags: [],
        },
        quantity: 2,
        baseItem: null,
        hp: {
          value: 0,
          max: 0,
        },
        hardness: 0,
        weight: {
          value: "L",
        },
        equippedBulk: {
          value: "",
        },
        price: {
          value: {
            sp: 3,
          },
        },
        equipped: {
          carryType: "stowed",
          invested: null,
          handsHeld: 0,
        },
        stackGroup: null,
        negateBulk: {
          value: "",
        },
        containerId: "5HqyYPanvG3nobHL",
        preciousMaterial: {
          value: "",
        },
        preciousMaterialGrade: {
          value: "",
        },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: {
              description: {
                value: "",
              },
            },
          },
          misidentified: {},
        },
        usage: {
          value: "held-in-one-hand",
        },
      },
      type: "equipment",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.7fSnvJ2xoSfa6JXD",
        },
        "scene-packer": {
          hash: "f9eeecc379e09482285fd451f72b81f34f3767f4",
        },
      },
      effects: [],
      folder: null,
      sort: -300000,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.3.1",
        coreVersion: "11.307",
        createdTime: 1690111917760,
        modifiedTime: 1691311225846,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
    },
    {
      _id: "5HqyYPanvG3nobHL",
      img: "systems/pf2e/icons/equipment/adventuring-gear/backpack.webp",
      name: "Backpack",
      system: {
        description: {
          gm: "",
          value:
            "<p>A backpack holds up to 4 Bulk of items and the first 2 Bulk of these items don't count against your Bulk limits. If you're carrying or stowing the pack rather than wearing it on your back, its Bulk is light instead of negligible</p>",
        },
        source: {
          value: "Pathfinder Core Rulebook",
        },
        rules: [],
        slug: "backpack",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 0,
        },
        traits: {
          value: [],
          rarity: "common",
          otherTags: [],
        },
        quantity: 1,
        baseItem: null,
        hp: {
          value: 0,
          max: 0,
        },
        hardness: 0,
        weight: {
          value: "L",
        },
        equippedBulk: {
          value: "0",
        },
        price: {
          value: {
            sp: 1,
          },
        },
        equipped: {
          carryType: "worn",
          invested: null,
          inSlot: false,
        },
        stackGroup: null,
        negateBulk: {
          value: "2",
        },
        containerId: null,
        preciousMaterial: {
          value: "",
        },
        preciousMaterialGrade: {
          value: "",
        },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: {
              description: {
                value: "",
              },
            },
          },
          misidentified: {},
        },
        usage: {
          value: "wornbackpack",
        },
        bulkCapacity: {
          value: "4",
        },
        collapsed: false,
        stowing: true,
      },
      type: "backpack",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.3lgwjrFEsQVKzhh7",
        },
        "scene-packer": {
          hash: "f6a31c064f98d5b5d17ed18c48120a51e7f4872e",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690111917760,
        modifiedTime: 1690111917760,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
    },
    {
      _id: "BHTeJjN0vbcAFZCV",
      img: "systems/pf2e/icons/equipment/adventuring-gear/rope.webp",
      name: "Rope",
      system: {
        description: {
          gm: "",
          value: "<p>50 feet of rope.</p>",
        },
        source: {
          value: "Pathfinder Core Rulebook",
        },
        rules: [],
        slug: "rope",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 0,
        },
        traits: {
          value: [],
          rarity: "common",
          otherTags: [],
        },
        quantity: 1,
        baseItem: null,
        hp: {
          value: 0,
          max: 0,
        },
        hardness: 0,
        weight: {
          value: "L",
        },
        equippedBulk: {
          value: "",
        },
        price: {
          value: {
            sp: 5,
          },
        },
        equipped: {
          carryType: "worn",
          invested: null,
        },
        stackGroup: null,
        negateBulk: {
          value: "",
        },
        containerId: "5HqyYPanvG3nobHL",
        preciousMaterial: {
          value: "",
        },
        preciousMaterialGrade: {
          value: "",
        },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: {
              description: {
                value: "",
              },
            },
          },
          misidentified: {},
        },
        usage: {
          value: "held-in-one-hand",
        },
      },
      type: "equipment",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.fyYnQf1NAx9fWFaS",
        },
        "scene-packer": {
          hash: "6a5eb45ad9273e37c483fe77c1504b6437fab23a",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690111917760,
        modifiedTime: 1690111917760,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
    },
    {
      _id: "Gts2At5n3EPhUCsk",
      img: "systems/pf2e/icons/equipment/adventuring-gear/waterskin.webp",
      name: "Waterskin",
      system: {
        description: {
          gm: "",
          value: "<p>When it's full, a waterskin contains roughly 1 day's worth of water for a Small or Medium creature.</p>",
        },
        source: {
          value: "Pathfinder Core Rulebook",
        },
        rules: [],
        slug: "waterskin",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 0,
        },
        traits: {
          value: [],
          rarity: "common",
          otherTags: [],
        },
        quantity: 1,
        baseItem: null,
        hp: {
          value: 0,
          max: 0,
        },
        hardness: 0,
        weight: {
          value: "L",
        },
        equippedBulk: {
          value: "",
        },
        price: {
          value: {
            cp: 5,
          },
        },
        equipped: {
          carryType: "worn",
          invested: null,
        },
        stackGroup: null,
        negateBulk: {
          value: "0",
        },
        containerId: "5HqyYPanvG3nobHL",
        preciousMaterial: {
          value: "",
        },
        preciousMaterialGrade: {
          value: "",
        },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: {
              description: {
                value: "",
              },
            },
          },
          misidentified: {},
        },
        usage: {
          value: "held-in-one-hand",
        },
      },
      type: "equipment",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.VnPh324pKwd2ZB66",
        },
        "scene-packer": {
          hash: "4a066c11dead8b85c964983abc9f24984bb761c6",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690111917760,
        modifiedTime: 1690111917760,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
    },
    {
      _id: "tlsiWvXeY5XFC2Dt",
      img: "systems/pf2e/icons/equipment/adventuring-gear/chalk.webp",
      name: "Chalk",
      system: {
        description: {
          gm: "",
          value: "",
        },
        source: {
          value: "Pathfinder Core Rulebook",
        },
        rules: [],
        slug: "chalk",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 0,
        },
        traits: {
          value: [],
          rarity: "common",
          otherTags: [],
        },
        quantity: 10,
        baseItem: null,
        hp: {
          value: 0,
          max: 0,
        },
        hardness: 0,
        weight: {
          value: "-",
        },
        equippedBulk: {
          value: "",
        },
        price: {
          value: {
            cp: 1,
          },
          per: 10,
        },
        equipped: {
          carryType: "worn",
        },
        stackGroup: null,
        negateBulk: {
          value: "0",
        },
        containerId: "5HqyYPanvG3nobHL",
        preciousMaterial: {
          value: "",
        },
        preciousMaterialGrade: {
          value: "",
        },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: {
              description: {
                value: "",
              },
            },
          },
          misidentified: {},
        },
        usage: {
          value: "held-in-one-hand",
        },
        consumableType: {
          value: "other",
        },
        charges: {
          value: 1,
          max: 1,
        },
        consume: {
          value: "",
        },
        autoDestroy: {
          value: true,
        },
        spell: null,
      },
      type: "consumable",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.xShIDyydOMkGvGNb",
        },
        "scene-packer": {
          hash: "0265c015a84b895801f15a4a243dd0316608e889",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690111917760,
        modifiedTime: 1690111917760,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
    },
    {
      _id: "bBw5kk8xjLFEPfxw",
      img: "systems/pf2e/icons/equipment/adventuring-gear/flint-and-steel.webp",
      name: "Flint and Steel",
      system: {
        description: {
          gm: "",
          value:
            "<p>Flint and steel are useful in creating a fire if you have the time to catch a spark, though using them is typically too time‑consuming to be practical during an encounter. Even in ideal conditions, using flint and steel to light a flame requires using at least 3 actions, and often significantly longer.</p>",
        },
        source: {
          value: "Pathfinder Core Rulebook",
        },
        rules: [],
        slug: "flint-and-steel",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 0,
        },
        traits: {
          value: [],
          rarity: "common",
          otherTags: [],
        },
        quantity: 1,
        baseItem: null,
        hp: {
          value: 0,
          max: 0,
        },
        hardness: 0,
        weight: {
          value: "-",
        },
        equippedBulk: {
          value: "",
        },
        price: {
          value: {
            cp: 5,
          },
        },
        equipped: {
          carryType: "worn",
          invested: null,
        },
        stackGroup: null,
        negateBulk: {
          value: "0",
        },
        containerId: "5HqyYPanvG3nobHL",
        preciousMaterial: {
          value: "",
        },
        preciousMaterialGrade: {
          value: "",
        },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: {
              description: {
                value: "",
              },
            },
          },
          misidentified: {},
        },
        usage: {
          value: "held-in-one-hand",
        },
      },
      type: "equipment",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.UlIxxLm71UdRgCFE",
        },
        "scene-packer": {
          hash: "448f01cf946a5750b817d8e0755ed3b5fab619fb",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690111917760,
        modifiedTime: 1690111917760,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
    },
    {
      _id: "45KurVtJHc8exW5k",
      img: "systems/pf2e/icons/equipment/adventuring-gear/rations.webp",
      name: "Rations",
      system: {
        description: {
          gm: "",
          value: "",
        },
        source: {
          value: "Pathfinder Core Rulebook",
        },
        rules: [],
        slug: "rations",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 0,
        },
        traits: {
          value: [],
          rarity: "common",
          otherTags: [],
        },
        quantity: 2,
        baseItem: null,
        hp: {
          value: 0,
          max: 0,
        },
        hardness: 0,
        weight: {
          value: "L",
        },
        equippedBulk: {
          value: "",
        },
        price: {
          value: {
            sp: 4,
          },
        },
        equipped: {
          carryType: "worn",
        },
        stackGroup: null,
        negateBulk: {
          value: "0",
        },
        containerId: "5HqyYPanvG3nobHL",
        preciousMaterial: {
          value: null,
        },
        preciousMaterialGrade: {
          value: null,
        },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: {
              description: {
                value: "",
              },
            },
          },
          misidentified: {},
        },
        usage: {
          value: "held-in-one-hand",
        },
        consumableType: {
          value: "other",
        },
        charges: {
          value: 7,
          max: 7,
        },
        consume: {
          value: "",
        },
        autoDestroy: {
          value: true,
        },
        spell: null,
      },
      type: "consumable",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.L9ZV076913otGtiB",
        },
        "scene-packer": {
          hash: "477688281c0815565ed84e6736741665605f5fe3",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690111917760,
        modifiedTime: 1690111917760,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
    },
    {
      _id: "VpB8cbIuNxyVkwME",
      img: "systems/pf2e/icons/equipment/adventuring-gear/torch.webp",
      name: "Torch",
      system: {
        description: {
          gm: "",
          value:
            "<p>A torch sheds bright light in a 20-foot radius (and dim light to the next 20 feet) for 1 hour. It can be used as an improvised weapon that deals 1d4 bludgeoning damage plus 1 fire damage.</p>",
        },
        source: {
          value: "Pathfinder Core Rulebook",
        },
        rules: [
          {
            key: "TokenLight",
            predicate: ["lit-torch"],
            value: {
              animation: {
                intensity: 4,
                speed: 1,
                type: "torch",
              },
              bright: 20,
              color: "#9b7337",
              dim: 40,
              shadows: 0.2,
            },
          },
          {
            category: "simple",
            damage: {
              base: {
                damageType: "bludgeoning",
                dice: 1,
                die: "d4",
              },
            },
            key: "Strike",
            otherTags: ["improvised"],
          },
          {
            damageType: "fire",
            key: "FlatModifier",
            predicate: ["lit-torch"],
            selector: "{item|_id}-damage",
            value: 1,
          },
          {
            domain: "all",
            key: "RollOption",
            label: "PF2E.SpecificRule.LitTorch",
            option: "lit-torch",
            toggleable: true,
          },
          {
            key: "TokenEffectIcon",
            predicate: ["lit-torch"],
            value: "systems/pf2e/icons/equipment/held-items/everburning-torch.webp",
          },
        ],
        slug: "torch",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 0,
        },
        traits: {
          value: [],
          rarity: "common",
          otherTags: [],
        },
        quantity: 5,
        baseItem: null,
        hp: {
          value: 0,
          max: 0,
        },
        hardness: 0,
        weight: {
          value: "L",
        },
        equippedBulk: {
          value: "",
        },
        price: {
          value: {
            cp: 1,
          },
        },
        equipped: {
          carryType: "worn",
          invested: null,
          handsHeld: 0,
        },
        stackGroup: null,
        negateBulk: {
          value: "0",
        },
        containerId: "5HqyYPanvG3nobHL",
        preciousMaterial: {
          value: "",
        },
        preciousMaterialGrade: {
          value: "",
        },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: {
              description: {
                value: "",
              },
            },
          },
          misidentified: {},
        },
        usage: {
          value: "held-in-one-hand",
        },
      },
      type: "equipment",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.8Jdw4yAzWYylGePS",
        },
        "scene-packer": {
          hash: "ee8064622a8400cf87c9cb54fc289a2f7ab372b1",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.3.1",
        coreVersion: "11.307",
        createdTime: 1690111917760,
        modifiedTime: 1691311188406,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
    },
    {
      _id: "220pnyIm1mzJxShC",
      img: "systems/pf2e/icons/equipment/adventuring-gear/bedroll.webp",
      name: "Bedroll",
      system: {
        description: {
          gm: "",
          value: "<p>A rolled up bed.</p>",
        },
        source: {
          value: "Pathfinder Core Rulebook",
        },
        rules: [],
        slug: "bedroll",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 0,
        },
        traits: {
          value: [],
          rarity: "common",
          otherTags: [],
        },
        quantity: 1,
        baseItem: null,
        hp: {
          value: 0,
          max: 0,
        },
        hardness: 0,
        weight: {
          value: "L",
        },
        equippedBulk: {
          value: "",
        },
        price: {
          value: {
            cp: 2,
          },
        },
        equipped: {
          carryType: "worn",
          invested: null,
        },
        stackGroup: null,
        negateBulk: {
          value: "0",
        },
        containerId: "5HqyYPanvG3nobHL",
        preciousMaterial: {
          value: "",
        },
        preciousMaterialGrade: {
          value: "",
        },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: {
              description: {
                value: "",
              },
            },
          },
          misidentified: {},
        },
        usage: {
          value: "held-in-one-hand",
        },
      },
      type: "equipment",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.fagzYdmfYyMQ6J77",
        },
        "scene-packer": {
          hash: "36f2ff89c846d3054dc8a649d27a3d5aef698f4f",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690111917760,
        modifiedTime: 1690111917760,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
    },
    {
      _id: "dDZDI89mrBJkqpUf",
      img: "systems/pf2e/icons/equipment/adventuring-gear/soap.webp",
      name: "Soap",
      system: {
        description: {
          gm: "",
          value: "<p>Bar of soap.</p>",
        },
        source: {
          value: "Pathfinder Core Rulebook",
        },
        rules: [],
        slug: "soap",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 0,
        },
        traits: {
          value: [],
          rarity: "common",
          otherTags: [],
        },
        quantity: 1,
        baseItem: null,
        hp: {
          value: 0,
          max: 0,
        },
        hardness: 0,
        weight: {
          value: "-",
        },
        equippedBulk: {
          value: "",
        },
        price: {
          value: {
            cp: 2,
          },
        },
        equipped: {
          carryType: "worn",
          invested: null,
        },
        stackGroup: null,
        negateBulk: {
          value: "0",
        },
        containerId: "5HqyYPanvG3nobHL",
        preciousMaterial: {
          value: "",
        },
        preciousMaterialGrade: {
          value: "",
        },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: {
              description: {
                value: "",
              },
            },
          },
          misidentified: {},
        },
        usage: {
          value: "held-in-one-hand",
        },
      },
      type: "equipment",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.81aHsD27HFGnq1Nt",
        },
        "scene-packer": {
          hash: "5cdb9273643e20ea224232918913bcc5159c65db",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690111917760,
        modifiedTime: 1690111917760,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
    },
    {
      _id: "ElaVcZQe1f91JL4Z",
      img: "systems/pf2e/icons/equipment/adventuring-gear/basic-crafters-book.webp",
      name: "Basic Crafter's Book",
      system: {
        description: {
          gm: "",
          value: "<p>This book contains the formulas for Crafting the 0-level common items in Chapter 6 of the core rulebook.</p>",
        },
        source: {
          value: "Pathfinder Core Rulebook",
        },
        rules: [],
        slug: "basic-crafters-book",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 0,
        },
        traits: {
          value: [],
          rarity: "common",
          otherTags: [],
        },
        quantity: 1,
        baseItem: null,
        hp: {
          value: 0,
          max: 0,
        },
        hardness: 0,
        weight: {
          value: "L",
        },
        equippedBulk: {
          value: "",
        },
        price: {
          value: {
            sp: 1,
          },
        },
        equipped: {
          carryType: "stowed",
          invested: null,
          handsHeld: 0,
        },
        stackGroup: null,
        negateBulk: {
          value: "",
        },
        containerId: "5HqyYPanvG3nobHL",
        preciousMaterial: {
          value: "",
        },
        preciousMaterialGrade: {
          value: "",
        },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: {
              description: {
                value: "",
              },
            },
          },
          misidentified: {},
        },
        usage: {
          value: "held-in-one-hand",
        },
      },
      type: "equipment",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.w4Hd6nunVVqw3GWj",
        },
        "scene-packer": {
          hash: "dbe20a0946fdbd074944c1ba12b4fcea703af2f7",
        },
      },
      effects: [],
      folder: null,
      sort: -200000,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.3.1",
        coreVersion: "11.307",
        createdTime: 1690111917760,
        modifiedTime: 1691311221908,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
    },
    {
      img: "systems/pf2e/icons/equipment/adventuring-gear/repair-kit.webp",
      name: "Repair Kit (Superb)",
      system: {
        description: {
          gm: "",
          value:
            "<p>A repair kit allows you to perform simple repairs while traveling. It contains a portable anvil, tongs, woodworking tools, a whetstone, and oils for conditioning leather and wood. You can use a repair kit to Repair items using the Crafting skill. A superb repair kit gives you a +1 item bonus to the check.</p>",
        },
        source: {
          value: "Pathfinder Core Rulebook",
        },
        rules: [
          {
            key: "FlatModifier",
            label: "Repair Kit, Superb (Repair)",
            predicate: ["action:repair"],
            selector: "crafting",
            type: "item",
            value: 1,
          },
        ],
        slug: "repair-kit-superb",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 3,
        },
        traits: {
          value: [],
          rarity: "common",
          otherTags: [],
        },
        quantity: 1,
        baseItem: null,
        hp: {
          value: 0,
          max: 0,
        },
        hardness: 0,
        weight: {
          value: "1",
        },
        equippedBulk: {
          value: "",
        },
        price: {
          value: {
            gp: 25,
          },
        },
        equipped: {
          carryType: "worn",
          invested: null,
        },
        stackGroup: null,
        negateBulk: {
          value: "0",
        },
        containerId: "5HqyYPanvG3nobHL",
        preciousMaterial: {
          value: "",
        },
        preciousMaterialGrade: {
          value: "",
        },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: {
              description: {
                value: "",
              },
            },
          },
          misidentified: {},
        },
        usage: {
          value: "held-in-one-hand",
        },
      },
      type: "equipment",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.aDsdYMPpVc8hOnM5",
        },
        "scene-packer": {
          hash: "5bb06a947a5400f5593c21201b1e53d5ebcea666",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690111945822,
        modifiedTime: 1690111945822,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
      _id: "igb2dKQwQADbw9kr",
    },
    {
      img: "systems/pf2e/icons/equipment/adventuring-gear/brass-ear.webp",
      name: "Brass Ear",
      system: {
        description: {
          gm: "",
          value:
            "<p>A brass ear is a short, flared tube with one end narrow enough to comfortably fit against the ear canal. When using a brass ear to listen through a door, window, thin wall, or similar barrier, if the barrier would normally increase the DC of your Perception check to hear sounds on the other side, the DC increases by only half as much as normal.</p>",
        },
        source: {
          value: "Pathfinder Advanced Player's Guide",
        },
        rules: [],
        slug: "brass-ear",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 0,
        },
        traits: {
          value: [],
          rarity: "common",
          otherTags: [],
        },
        quantity: 1,
        baseItem: null,
        hp: {
          value: 0,
          max: 0,
        },
        hardness: 0,
        weight: {
          value: "-",
        },
        equippedBulk: {
          value: "",
        },
        price: {
          value: {
            gp: 1,
          },
        },
        equipped: {
          carryType: "stowed",
          invested: null,
          handsHeld: 0,
        },
        stackGroup: null,
        negateBulk: {
          value: "0",
        },
        containerId: "5HqyYPanvG3nobHL",
        preciousMaterial: {
          value: "",
        },
        preciousMaterialGrade: {
          value: "",
        },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: {
              description: {
                value: "",
              },
            },
          },
          misidentified: {},
        },
        usage: {
          value: "held-in-one-hand",
        },
      },
      type: "equipment",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.M91ye9B7IdxDIDsS",
        },
        "scene-packer": {
          hash: "b818eefc83a293e493b97123c3e5621ab933f115",
        },
      },
      effects: [],
      folder: null,
      sort: -100000,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.3.1",
        coreVersion: "11.307",
        createdTime: 1690111961579,
        modifiedTime: 1691311217823,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
      _id: "nyqUM9pJyG0BMHns",
    },
    {
      img: "systems/pf2e/icons/equipment/weapons/air-repeater.webp",
      name: "Modern 9mm",
      system: {
        description: {
          gm: "",
          value:
            "<p>A thin-barreled firearm that uses a container of pressurized air instead of black powder to propel small metal bullets from an attached cartridge, the air repeater has fallen out of common use in Arcadia due to its poor stopping power, though it's still used occasionally for casual hunting and sport shooting. The air repeater and its longer-ranged, two-handed variant are still valued by some for their ability to allow a shooter to fire multiple rounds without needing to stop to reload or crank to a new chamber. A typical air repeater magazine holds 6 pellets.</p>",
        },
        source: {
          value: "Pathfinder Guns & Gears",
        },
        rules: [],
        slug: "air-repeater",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 0,
        },
        traits: {
          value: ["agile", "repeating"],
          rarity: "uncommon",
          otherTags: [],
        },
        quantity: 1,
        baseItem: "air-repeater",
        hp: {
          value: 0,
          max: 0,
        },
        hardness: 0,
        weight: {
          value: "L",
        },
        equippedBulk: {
          value: "",
        },
        price: {
          value: {
            gp: 5,
          },
        },
        equipped: {
          carryType: "worn",
          invested: null,
          handsHeld: 0,
        },
        stackGroup: null,
        negateBulk: {
          value: "0",
        },
        containerId: "null",
        preciousMaterial: {
          value: null,
        },
        preciousMaterialGrade: {
          value: null,
        },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "Unusual Air Repeater",
            img: "systems/pf2e/icons/unidentified_item_icons/weapon.webp",
            data: {
              description: {
                value: "",
              },
            },
          },
          misidentified: {},
        },
        usage: {
          value: "held-in-one-hand",
        },
        category: "simple",
        group: "firearm",
        bonus: {
          value: 0,
        },
        damage: {
          dice: 1,
          die: "d8",
          damageType: "piercing",
          persistent: {
            number: 1,
            faces: 4,
            type: "bleed",
          },
        },
        bonusDamage: {
          value: 0,
        },
        splashDamage: {
          value: 0,
        },
        range: 30,
        reload: {
          value: "0",
        },
        MAP: {
          value: "",
        },
        potencyRune: {
          value: null,
        },
        strikingRune: {
          value: null,
        },
        specific: {
          value: false,
        },
        propertyRune1: {
          value: null,
        },
        propertyRune2: {
          value: null,
        },
        propertyRune3: {
          value: null,
        },
        propertyRune4: {
          value: null,
        },
        property1: {
          value: "",
          dice: 0,
          die: "",
          damageType: "",
          critDice: 1,
          critDie: "d8",
          critDamage: "",
          critDamageType: "force",
          strikeConditionType: "",
          strikeConditionValue: null,
          criticalConditionType: "",
          criticalConditionValue: null,
        },
      },
      type: "weapon",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.SzUynRs4HVtnpnel",
        },
        "scene-packer": {
          hash: "e19e549a4961148f7d5a66e5c7636768d7af486f",
        },
      },
      effects: [],
      folder: null,
      sort: 100000,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690098339895,
        modifiedTime: 1690111980878,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
      _id: "KMGKybKRnPj3Xvxn",
    },
    {
      img: "systems/pf2e/icons/default-icons/consumable.svg",
      name: "Magazine with 8 Pellets",
      system: {
        description: {
          gm: "",
          value:
            "<p>Firearms require ammunition consisting of a projectile and black powder. A round of ammo can vary in its composition but is typically either a prepackaged paper cartridge, including wadding, bullet, and black powder, or loose shot packed in manually. Some weapons, like hand cannons and blunderbusses, can fire other materials, but their ammunition has the same Price due to the cost of the black powder. Because making rounds of firearm ammunition requires creating black powder, you need the @UUID[Compendium.pf2e.feats-srd.Item.is3Oz9wt11lNq62K]{Alchemical Crafting} skill feat to make them. Firearm rounds are a valid option for magical ammunition, just like arrows or bolts. Crafting magical firearm ammunition requires you to be able to craft both alchemical and magical items.</p>",
        },
        source: {
          value: "Pathfinder Guns & Gears",
        },
        rules: [],
        slug: "magazine-with-8-pellets",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 0,
        },
        traits: {
          value: [],
          rarity: "common",
          otherTags: [],
        },
        quantity: 1,
        baseItem: null,
        hp: {
          value: 0,
          max: 0,
        },
        hardness: 0,
        weight: {
          value: "L",
        },
        equippedBulk: {
          value: "",
        },
        price: {
          value: {
            sp: 6,
          },
        },
        equipped: {
          carryType: "worn",
          handsHeld: 0,
        },
        stackGroup: null,
        negateBulk: {
          value: "0",
        },
        containerId: "null",
        preciousMaterial: {
          value: null,
        },
        preciousMaterialGrade: {
          value: null,
        },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "Unusual Ammunition",
            img: "systems/pf2e/icons/unidentified_item_icons/ammunition.webp",
            data: {
              description: {
                value: "",
              },
            },
          },
          misidentified: {},
        },
        usage: {
          value: "held-in-one-hand",
        },
        consumableType: {
          value: "ammo",
        },
        charges: {
          value: 8,
          max: 8,
        },
        consume: {
          value: "",
        },
        autoDestroy: {
          value: true,
        },
        spell: null,
      },
      type: "consumable",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.hXZrMJPlw1UvVzjC",
        },
        "scene-packer": {
          hash: "af1cbd2e2e95ff591dcd6736d2b427443d0e0cf2",
        },
      },
      effects: [],
      folder: null,
      sort: 150000,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.3.1",
        coreVersion: "11.307",
        createdTime: 1690098691470,
        modifiedTime: 1691319165602,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
      _id: "g6LpSlKg3I05xJOU",
    },
    {
      img: "systems/pf2e/icons/default-icons/armor.svg",
      name: "Ceramic Plate",
      system: {
        description: {
          gm: "",
          value:
            "<p>Traditional armor from Senghor, ceramic plate alleviates the need for metallurgy and smithing, instead relying on ceramic firing, glazing, and strong cord work with a backing of leather and thick canvas. Ceramic plate that follows Senghor's style is colorful and artistic, and is built with the armor latches armor adjustment.</p>",
        },
        source: {
          value: "Pathfinder Treasure Vault",
        },
        rules: [],
        slug: "ceramic-plate",
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        level: {
          value: 0,
        },
        traits: {
          value: ["adjusted", "noisy"],
          rarity: "common",
          otherTags: [],
        },
        quantity: 1,
        baseItem: "ceramic-plate",
        hp: {
          value: 0,
          max: 0,
        },
        hardness: 0,
        weight: {
          value: "3",
        },
        equippedBulk: {
          value: "2",
        },
        price: {
          value: {
            gp: 6,
          },
        },
        equipped: {
          carryType: "worn",
          invested: null,
          inSlot: true,
          handsHeld: 0,
        },
        stackGroup: null,
        negateBulk: {
          value: "0",
        },
        containerId: null,
        preciousMaterial: {
          value: null,
        },
        preciousMaterialGrade: {
          value: null,
        },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: {
              description: {
                value: "",
              },
            },
          },
          misidentified: {},
        },
        usage: {
          value: "wornarmor",
        },
        category: "medium",
        group: "plate",
        acBonus: 3,
        strength: 2,
        dexCap: 2,
        checkPenalty: -2,
        speedPenalty: -5,
        potencyRune: {
          value: null,
        },
        resiliencyRune: {
          value: null,
        },
        propertyRune1: {
          value: null,
        },
        propertyRune2: {
          value: null,
        },
        propertyRune3: {
          value: null,
        },
        propertyRune4: {
          value: null,
        },
      },
      type: "armor",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.Hg7btiITMu6Zf2EU",
        },
        "scene-packer": {
          hash: "6bb48dd1a8ddf54559a71df71320ca4e44f6ea78",
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.3",
        coreVersion: "11.306",
        createdTime: 1690112145680,
        modifiedTime: 1690716555167,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
      _id: "nTgJDZCiErwaQekE",
    },
    {
      type: "action",
      img: "systems/pf2e/icons/default-icons/action.svg",
      name: "Reload",
      system: {
        description: {
          gm: "",
          value: "",
        },
        source: {
          value: "",
        },
        rules: [],
        slug: null,
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        traits: {
          value: [],
        },
        actionType: {
          value: "action",
        },
        category: "interaction",
        actions: {
          value: 1,
        },
        requirements: {
          value: "",
        },
        trigger: {
          value: "",
        },
        deathNote: false,
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
      },
      flags: {
        "scene-packer": {
          hash: "547d7932a077b7530e9d7d1a3075d3b1edcdca10",
        },
        itemacro: {
          macro: {
            name: "Reload",
            type: "script",
            scope: "global",
            command: "game.pf2eRangedCombat.reloadMagazine();",
            author: "f5TQXRGH0xdq9tP0",
            _id: null,
            img: "icons/svg/dice-target.svg",
            folder: null,
            sort: 0,
            ownership: {
              default: 0,
            },
            flags: {},
            _stats: {
              systemId: null,
              systemVersion: null,
              coreVersion: null,
              createdTime: null,
              modifiedTime: null,
              lastModifiedBy: null,
            },
          },
        },
        core: {
          sourceId: "Actor.395DYTSr6p0sjObD.Item.XkQVGuZA7dQgLLgL",
        },
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.3",
        coreVersion: "11.306",
        createdTime: 1690705248074,
        modifiedTime: 1690705362612,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
      _id: "ahMJWSSIm26buaqN",
    },
    {
      _id: "fA4GVLlXdkFUE0wT",
      name: "Magazine Loaded (Assault Rifle) (Magazine with 30 Bullets) (23/30)",
      type: "effect",
      img: "systems/pf2e/icons/equipment/weapons/magazine-with-5-bolts.webp",
      effects: [],
      folder: null,
      sort: 0,
      flags: {
        core: {
          sourceId: "Compendium.pf2e-ranged-combat.effects.Item.vKeDaHOu3bGKSk6b",
        },
        "pf2e-ranged-combat": {
          targetId: "sZTC7D6D6YXcrBJf",
          name: "Magazine Loaded (Assault Rifle) (Magazine with 30 Bullets)",
          capacity: 30,
          remaining: 23,
          ammunitionName: "Magazine with 30 Bullets",
          ammunitionImg: "systems/pf2e/icons/default-icons/consumable.svg",
          ammunitionItemId: "mLXCeukiktJMwqRN",
          ammunitionSourceId: "Compendium.pf2e.equipment-srd.Item.hXZrMJPlw1UvVzjC",
        },
        pf2e: {
          rulesSelections: {
            weapon: "sZTC7D6D6YXcrBJf",
          },
        },
        "scene-packer": {
          hash: "e48085b0d8105ec5ae75ad9fae325a18c6a77952",
        },
      },
      system: {
        description: {
          gm: "",
          value: "<p>Your weapon is loaded with a magazine.</p>",
        },
        source: {
          value: "",
        },
        rules: [],
        slug: null,
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.849,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        traits: {
          value: [],
          rarity: "common",
        },
        level: {
          value: 1,
        },
        duration: {
          value: -1,
          unit: "unlimited",
          sustained: false,
          expiry: "turn-start",
        },
        start: {
          value: -85203126699,
          initiative: 15,
        },
        tokenIcon: {
          show: true,
        },
        badge: null,
        context: null,
        target: null,
      },
      ownership: {
        default: 0,
        I90qJ09IMT0McqwG: 3,
        f5TQXRGH0xdq9tP0: 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.3.1",
        coreVersion: "11.307",
        createdTime: 1690719937434,
        modifiedTime: 1691320784153,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
    },
  ],
  sort: 0,
  flags: {
    "scene-packer": {
      hash: "a35d43fe29903dc67b2c21b67188749e9f2b296c",
    },
    "pf2e-fatigue": {
      startTime: 0,
      isFatigued: false,
    },
    pf2e: {
      freeCrafting: false,
    },
    sequencer: {
      effects: [],
    },
  },
  _stats: {
    systemId: "pf2e",
    systemVersion: "5.3.1",
    coreVersion: "11.307",
    createdTime: 1690099922108,
    modifiedTime: 1691325690829,
    lastModifiedBy: "f5TQXRGH0xdq9tP0",
  },
  _id: "T0v2Pwg7TCHp8OAk",
};
