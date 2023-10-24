import { ImageFilePath, ItemUUID, UUID } from "@/lib/utils";
import { ActivatedEffect5e } from "../dnd5e/item/mixins/activated-effect";
import { BaseActorSystemData, BaseTokenSystemData, Flags, Ownership } from "./flags";
import { Item, ItemSystemData } from "./items/item";
import { ItemTypes } from "./items/itemTypes";
import { CharacterPF2e } from "../pf2e";

/*


*/

export interface SystemTypeMap {
  ActorTypes: string; // "character" | "npc" | "vehicle" | "loot" | "hazard";
  ActorDataTypes: {
    character: BaseActorSystemData;
    npc: BaseActorSystemData;
    vehicle?: BaseActorSystemData;
    loot?: BaseActorSystemData;
    hazard?: BaseActorSystemData;
  };
  ActorContainerTypes: {
    character: CharacterPF2e;
    npc: BaseActorSystemData;
    vehicle?: BaseActorSystemData;
    loot?: BaseActorSystemData;
    hazard?: BaseActorSystemData;
  };
  ActorSystemType: BaseActorSystemData;
  TokenSystemType: BaseTokenSystemData;
  BaseItemData: ItemSystemData;
  ItemDataTypes: {
    [k: string]: ItemSystemData;
  };
}

export interface Actor<S extends SystemTypeMap = SystemTypeMap> {
  _id: string;
  img: string;
  name: string;
  type: S["ActorTypes"];
  system: S["ActorSystemType"];
  items: Item<S["BaseItemData"]>[];
  flags: Flags;
  prototypeToken: PrototypeToken;
  folder: string;
  ownership: Ownership;
  sort?: number;
  effects: GenericEffect[];
}

export interface EffectChange {
  key: string;
  mode: number;
  value: string;
  priority: number;
}
export interface EffectDuration {
  startTime?: number;
  seconds?: number;
  combat?: number;
  rounds?: number;
  turns?: number;
  startRound?: number;
  startTurn?: number;
}
export interface GenericEffect {
  icon: ImageFilePath;
  changes: EffectChange[];
  transfer: boolean;
  _id: string;
  disabled: boolean;
  duration: EffectDuration;
  origin: UUID; //"Actor.mB9hj9id8f3sVApS.Item.tvzac83APIgSZshi";
  tint: any | null;
  flags: Flags;
  name: string;
  description: string;
  statuses: string[];
  parent?: Actor | { _id: string };
}

export interface Character<S extends SystemTypeMap = SystemTypeMap> extends Actor<S> {
  system: S["ActorDataTypes"]["character"];
}

export interface NPC<S extends SystemTypeMap = SystemTypeMap> extends Actor<S> {
  system: S["ActorDataTypes"]["npc"];
}

export interface ActorListing {
  id: string;
  image: string;
  name: string;
  type: string;
}

export interface TokenVision {
  enabled: boolean;
  range: number;
  angle: number;
  visionMode: "basic" | "darkvision" | "low-light-vision" | "blindsight" | "tremorsense";
  attenuation: number;
  brightness: number;
  saturation: number;
  contrast: number;
}

export interface TextureInfo {
  src: string;
  scaleX: number;
  scaleY: number;
  offsetX: number;
  offsetY: number;
  rotation: number;
}

export interface TokenBarSetting {
  attribute: string | null;
}

export interface LightSource {
  alpha: number;
  angle: number;
  bright: number;
  coloration: number;
  dim: number;
  attenuation: number;
  luminosity: number;
  saturation: number;
  contrast: number;
  shadows: number;
  animation: LightAnimation;
  darkness: { min: 0; max: 1 };
}

export interface LightAnimation {
  type: string | null;
  speed: number;
  intensity: number;
  reverse: boolean;
}

export interface PrototypeToken {
  displayName: number;
  displayBars: number;
  flags: Record<string, Record<string, boolean | string | number>>; //{ pf2e: { linkToActorSize: true; autoscale: true } };
  height: number;
  width: number;
  actorLink: boolean;
  sight: TokenVision;
  name: string;
  appendNumber: boolean;
  prependAdjective: boolean;
  texture: TextureInfo;
  lockRotation: false;
  rotation: 0;
  alpha: 1;
  disposition: -1;
  bar1: TokenBarSetting;
  bar2: TokenBarSetting;
  light: LightSource;
  detectionModes: [];
  randomImg: false;
}

const exampleActorPF2e = {
  prototypeToken: {
    displayName: 20,
    displayBars: 20,
    flags: { pf2e: { linkToActorSize: true, autoscale: true } },
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
    name: "Josh's PC",
    appendNumber: false,
    prependAdjective: false,
    texture: {
      src: "tokenizer/pc-images/josh_s_pc.TokenvQYgqrgXaaW144hl.webp?1690106247772",
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
    bar1: { attribute: "attributes.hp" },
    bar2: { attribute: null },
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
      darkness: { min: 0, max: 1 },
    },
    detectionModes: [],
    randomImg: false,
  },
  folder: "erm4Nvbr7vNUi857",
  name: "Chucky Arla",
  type: "character",
  ownership: {
    default: 1,
    f5TQXRGH0xdq9tP0: 3,
    XUVsOh1Kzgk6WvPB: 3,
    OjkBEDlhd5y4dqPM: 3,
    "0L9jt9WlNNg7sw4c": 3,
  },
  effects: [],
  system: {
    attributes: {
      hp: { value: 16, temp: 0 },
      initiative: { statistic: "perception" },
      speed: { value: 25, otherSpeeds: [] },
      bonusLimitBulk: 0,
      bonusEncumbranceBulk: 0,
      sp: { value: 0, max: 0, details: "" },
      resolve: { value: 0, max: 0 },
    },
    details: {
      alignment: { value: "N" },
      level: { value: 1 },
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
      keyability: { value: "str" },
      xp: { value: 226, min: 0, max: 1000, pct: 0 },
      age: { value: "" },
      height: { value: "" },
      weight: { value: "" },
      gender: { value: "" },
      ethnicity: { value: "" },
      nationality: { value: "" },
    },
    traits: {
      value: [],
      senses: [],
      languages: { value: [], custom: "", selected: [] },
    },
    resources: {
      heroPoints: { value: 1, max: 3 },
      crafting: { infusedReagents: { value: 1 } },
    },
    schema: {
      version: 0.854,
      lastMigration: {
        version: { schema: 0.849, foundry: "11.307", system: "5.3.1" },
      },
    },
    exploration: [],
    skills: {
      acr: { rank: 1 },
      arc: { rank: 0 },
      ath: { rank: 1 },
      cra: { rank: 0 },
      dec: { rank: 1 },
      dip: { rank: 1 },
      itm: { rank: 0 },
      med: { rank: 1 },
      nat: { rank: 0 },
      occ: { rank: 0 },
      prf: { rank: 0 },
      rel: { rank: 0 },
      soc: { rank: 1 },
      ste: { rank: 1 },
      sur: { rank: 0 },
      thi: { rank: 0 },
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
      formulas: [
        {
          uuid: "Compendium.pf2e.equipment-srd.Item.yd3kEK21YknZLlcT",
          deletable: true,
        },
        {
          uuid: "Compendium.pf2e.equipment-srd.Item.j8ajvNqyyQGBpBch",
          deletable: true,
        },
        {
          uuid: "Compendium.pf2e.equipment-srd.Item.ds0OdA989ZZw9km1",
          deletable: true,
        },
        { uuid: "Compendium.pf2e.equipment-srd.Item.T6Appwwl6nUl56Xj" },
      ],
    },
    build: {
      attributes: { boosts: { "1": ["str", "dex", "int", "cha"] } },
    },
  },
  img: "tokenizer/pc-images/josh_s_pc.AvatarvQYgqrgXaaW144hl.webp?1690106247772",
  items: [
    {
      img: "systems/pf2e/icons/classes/alchemist.webp",
      name: "Alchemist",
      system: {
        description: {
          gm: "",
          value:
            '<p>    <em>There\'s no sight more beautiful to you than a strange brew bubbling in a beaker, and you consume your ingenious elixirs with abandon. You\'re fascinated by uncovering the secrets of science and the natural world, and you\'re constantly experimenting in your lab or on the go with inventive concoctions for every eventuality. You are fearless in the face of risk, hurling explosive or toxic creations at your foes. Your unique path toward greatness is lined with alchemical brews that push your mind and body to their limits.</em></p>\n<p>    <strong>Key Ability: INTELLIGENCE</strong></p>\n<p>At 1st level, your class gives you an ability bonus to Intelligence</p>\n<p>    <strong>Hit Points: 8 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1>Roleplaying the Alchemist</h1>\n<h2>During Combat Encounters...</h2>\n<p>You lob bombs at your foes, harry your enemies, and support the rest of your party with potent elixirs. At higher levels, your mutagens warp your body into a resilient and powerful weapon.</p>\n<h2>During Social Encounters...</h2>\n<p>You provide knowledge and experience about alchemical items and related secrets, such as poisons and diseases.</p>\n<h2>While Exploring...</h2>\n<p>You keep an eye out for trouble with your bombs at the ready, while giving advice on all things alchemical and mysterious.</p>\n<h2>In Downtime...</h2>\n<p>You experiment in an alchemical lab, brewing elixirs, making bombs, and furthering your alchemical knowledge.</p>\n<h2>You Might...</h2>\n<ul>    \n<li>Enjoy tinkering with strange formulas and alchemical reagents, often with a single-minded dedication and recklessness that gives others pause.</li>    \n<li>Get a kick out of wreaking havoc with the alchemical concoctions you\'ve made, and enjoy watching things burn, dissolve, freeze, and jolt.</li>    \n<li>Endlessly experiment to discover new, more potent alchemical tools.</li>    \n</ul>\n<h2>Others Probably...</h2>\n<ul>    \n<li>Think you\'re some kind of sorcerer or an eccentric wizard and don\'t understand that you don\'t cast spells; spellcasters who clumsily dabble in alchemy only heighten this misconception.</li>    \n<li>Don\'t understand your zeal for alchemy, creativity, and invention.</li>    \n<li>Assume that if you haven\'t caused a catastrophe with your experimentations, you inevitably will.</li>    \n</ul>\n<h1>Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2>Perception</h2>\n<p>Trained in Perception</p>\n<h2>Saving Throws</h2>\n<p>Expert in Fortitude</p>\n<p>Expert in Reflex</p>\n<p>Trained in Will</p>\n<h2>Skills</h2>\n<p>Trained in Crafting</p>\n<p>Trained in a number of additional skills equal to 3 plus your Intelligence modifier</p>\n<h2>Attacks</h2>\n<p>Trained in simple weapons</p>\n<p>Trained in alchemical bombs</p>\n<p>Trained in unarmed attacks</p>\n<h2>Defenses</h2>\n<p>Trained in medium armor</p>\n<p>Trained in light armor</p>\n<p>Trained in unarmored defense</p>\n<h2>Class DC</h2>\n<p>Trained in alchemist class DC</p>\n<h1>Class Features</h1>\n<p>You gain these features as an Alchemist. Abilities gained at higher levels list the levels at which you gain them next to the features\' names.</p>\n<table class="pf2-table">    \n    <thead>        \n        <tr>            \n<th>Your Level</th>            \n<th>Class Features</th>            \n        </tr>        \n    </thead>    \n    <tbody>        \n        <tr>            \n<td>1</td>            \n<td>Ancestry and background, initial proficiencies, alchemy, formula book, research field, alchemist feat</td>            \n        </tr>        \n        <tr>            \n<td>2</td>            \n<td>Alchemist feat, skill feat</td>            \n        </tr>        \n        <tr>            \n<td>3</td>            \n<td>General feat, skill increase</td>            \n        </tr>        \n        <tr>            \n<td>4</td>            \n<td>Alchemist feat, skill feat</td>            \n        </tr>        \n        <tr>            \n<td>5</td>            \n<td>Ability boosts, ancestry feat, field discovery, powerful alchemy, skill increase</td>            \n        </tr>        \n        <tr>            \n<td>6</td>            \n<td>Alchemist feat, skill feat</td>            \n        </tr>        \n        <tr>            \n<td>7</td>            \n<td>Alchemical weapon expertise, general feat, iron will, perpetual infusions, skill increase</td>            \n        </tr>        \n        <tr>            \n<td>8</td>            \n<td>Alchemist feat, skill feat</td>            \n        </tr>        \n        <tr>            \n<td>9</td>            \n<td>Alchemical expertise, alertness, ancestry feat, double brew, skill increase</td>            \n        </tr>        \n        <tr>            \n<td>10</td>            \n<td>Ability boosts, alchemist feat, skill feat</td>            \n        </tr>        \n        <tr>            \n<td>11</td>            \n<td>General feat, juggernaut, perpetual potency, skill increase</td>            \n        </tr>        \n        <tr>            \n<td>12</td>            \n<td>Alchemist feat, skill feat</td>            \n        </tr>        \n        <tr>            \n<td>13</td>            \n<td>Ancestry feat, greater field discovery, light armor expertise, skill increase, weapon specialization</td>            \n        </tr>        \n        <tr>            \n<td>14</td>            \n<td>Alchemist feat, skill feat</td>            \n        </tr>        \n        <tr>            \n<td>15</td>            \n<td>Ability boosts, alchemical alacrity, evasion, general feat, skill increase</td>            \n        </tr>        \n        <tr>            \n<td>16</td>            \n<td>Alchemist feat, skill feat</td>            \n        </tr>        \n        <tr>            \n<td>17</td>            \n<td>Alchemical mastery, ancestry feat, perpetual perfection, skill increase</td>            \n        </tr>        \n        <tr>            \n<td>18</td>            \n<td>Alchemist feat, skill feat</td>            \n        </tr>        \n        <tr>            \n<td>19</td>            \n<td>General feat, light armor mastery, skill increase</td>            \n        </tr>        \n        <tr>            \n<td>20</td>            \n<td>Ability boosts, alchemist feat, skill feat</td>            \n        </tr>        \n    </tbody>    \n</table>\n<h2>Alchemist Feats</h2>\n<p>At 1st level and every even-numbered level thereafter, you gain an alchemist class feat.</p>\n<h2>Alchemy</h2>\n<p>You understand the complex interactions of natural and unnatural substances and can concoct alchemical items to meet your needs. You can do this using normal reagents and the Craft activity, or you can use special infused reagents that allow you to craft temporary items quickly and at no cost. Over time, you can create more and more alchemical items for free, and since each of them becomes more and more powerful, you advance in power dramatically, leaving behind those who don\'t understand your strange science.</p>\n<p>You gain the @UUID[Compendium.pf2e.feats-srd.Item.is3Oz9wt11lNq62K]{Alchemical Crafting} feat, even if you don\'t meet that feat\'s prerequisites, and you gain the four common 1st-level alchemical formulas granted by that feat. You can use this feat to create alchemical items as long as you have the items\' formulas in your formula book.</p>\n<h3>    <strong>Infused Reagents</strong></h3>\n<p>You infuse reagents with your own alchemical essence, allowing you to create alchemical items at no cost. Each day during your daily preparations, you gain a number of batches of infused reagents equal to your level + your Intelligence modifier. You can use these reagents for either advanced alchemy or Quick Alchemy, described below. Together, these infused reagents have light Bulk.</p>\n<p>As soon as you make your next daily preparations, your infused reagents from the previous day\'s preparations are instantly destroyed, and nonpermanent effects of your previous day\'s infused items immediately end. While infused reagents are physical objects, they can\'t be duplicated, preserved, or created in any way other than your daily preparations. Any such artificial reagents lack the infusion and are useless for advanced alchemy or Quick Alchemy.</p>\n<h3>    <strong>Advanced Alchemy</strong></h3>\n<p>During your daily preparations, after producing new infused reagents, you can spend batches of those infused reagents to create infused alchemical items. You don\'t need to attempt a Crafting check to do this, and you ignore both the number of days typically required to create the items and any alchemical reagent requirements. Your advanced alchemy level is equal to your level. For each batch of infused reagents you spend, choose an alchemical item of your advanced alchemy level or lower that\'s in your formula book, and make a batch of two of that item. These items have the infused trait and remain potent for 24 hours or until your next daily preparations, whichever comes first.</p>\n<h3>    <strong>Quick Alchemy</strong></h3>\n<p>If you need a specific alchemical item on the fly, you can use your infused reagents to quickly create it with the Quick Alchemy action.</p>\n<h3>    @UUID[Compendium.pf2e.feats-srd.Item.NlEZ0piDxg9buXCL]{Quick Alchemy}<span class="pf2-icon">A</span></h3>\n<p>    <strong>Cost</strong>    1 batch of infused reagents</p>\n<p>    <strong>Requirements</strong>    You have @UUID[Compendium.pf2e.equipment-srd.Item.4ftXXUCBHcf4b0MH]{Alchemist\'s Tools}, the formula for the alchemical item you\'re creating, and a free hand.</p>\n<hr/>\n<p>You swiftly mix up a short-lived alchemical item to use at a moment\'s notice. You create a single alchemical item of your advanced alchemy level or lower that\'s in your formula book without having to spend the normal monetary cost in alchemical reagents or needing to attempt a Crafting check. This item has the infused trait, but it remains potent only until the start of your next turn.</p>\n<h3>    <strong>Formula Book</strong></h3>\n<p>An alchemist keeps meticulous records of the formulas for every item they can create. You start with a standard formula book worth 10 sp or less for free. The formula book contains the formulas for two common 1st-level alchemical items of your choice, in addition to those you gained from Alchemical Crafting and your research field.</p>\n<p>Each time you gain a level, you can add the formulas for two common alchemical items to your formula book. These new formulas can be for any level of item you can create. You learn these formulas automatically, but it\'s also possible to find or buy additional formulas in settlements or from other alchemists, or to invent them with the @UUID[Compendium.pf2e.feats-srd.Item.XR95taODq1sq82Du]{Inventor} feat.</p>\n<h2>Ancestry and Background</h2>\n<p>In addition to the abilities provided by your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2>Initial Proficiencies</h2>\n<p>At 1st level, you gain a number of proficiencies that represent your basic training. These proficiencies are noted at the start of this class.</p>\n<h2>Research Field</h2>\n<p>Your inquiries into the alchemical nature of the universe have led you to focus on a particular field of research. You might have a degree from an scientific institute, correspond with other researchers in your field, or work as a genius loner. Choose a field of research.</p>\n<p>Your research field adds a number of formulas to your formulas book; these are your signature items. When using a batch of infused reagents to create your signature items using advanced alchemy, you can create three items instead of two. Each time you gain a level, you can swap one of your signature items with another formula in your formula book. This new signature item must be on your research field\'s list of possible signature items.</p>\n<p>Research fields can be found here (@UUID[Compendium.pf2e.classfeatures.Item.7JbiaZ8bxODM5mzS]{Bomber}, @UUID[Compendium.pf2e.classfeatures.Item.eNZnx4LISDNftbx2]{Chirurgeon}, @UUID[Compendium.pf2e.classfeatures.Item.tvdb1jkjl2bRZjSp]{Mutagenist} and @UUID[Compendium.pf2e.classfeatures.Item.P9quO9XZi3OWFe1k]{Toxicologist}).</p>\n<h2>    Skill Feats<span style="float:right">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2>    General Feats<span style="float:right">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2>    Skill Increases<span style="float:right">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use this increase either to increase your proficiency rank to trained in one skill you\'re untrained in, or to increase your proficiency rank in one skill in which you\'re already trained to expert.</p>\n<p>At 7th level, you can use skill increases to increase your proficiency rank to master in a skill in which you\'re already an expert, and at 15th level, you can use them to increase your proficiency rank to legendary in a skill in which you\'re already a master.</p>\n<h2>    Ability Boosts<span style="float:right">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, you boost four different ability scores. You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it\'s already 18 or above, or by 2 if it starts out below 18.</p>\n<h2>    Ancestry Feats<span style="float:right">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2>    Field Discovery<span style="float:right">Level 5</span></h2>\n<p>You learn a special discovery depending on your field.</p>\n<p>See specific research fields for more information.</p>\n<h2>    Powerful Alchemy<span style="float:right">Level 5</span></h2>\n<p>Alchemical items you create on the fly are particularily potent. When you use Quick Alchemy to create an infused alchemical item that allows a saving throw, you can change its DC to your class DC.</p>\n<h2>    Alchemical Weapon Expertise<span style="float:right">Level 7</span></h2>\n<p>You\'ve trained to more effectively wield the weapons you find in your lab. Your proficiency ranks for simple weapons, unarmed attacks, and alchemical bombs increase to expert.</p>\n<h2>    Iron Will<span style="float:right">Level 7</span></h2>\n<p>Your mental defenses are an iron fortress. Your proficiency rank for Will saves increases to expert.</p>\n<h2>    Perpetual Infusions<span style="float:right">Level 7</span></h2>\n<p>You have learned how to create perpetual alchemical infusions that can provide a near-infinite supply of certain simple items. You gain the ability to create two 1st-level alchemical items using Quick Alchemy without spending a batch of infused reagents. The items you can select depend on your research field and must be in your formula book.</p>\n<p>See specific research fields for more information.</p>\n<h2>    Alchemical Expertise<span style="float:right">Level 9</span></h2>\n<p>Constant practice has increased the effectiveness of your concoctions. Your proficiency rank for your alchemist class DC increases to expert.</p>\n<h2>    Alertness<span style="float:right">Level 9</span></h2>\n<p>You remain alert to threats around you. Your proficiency rank for Perception increases to expert.</p>\n<h2>    Double Brew<span style="float:right">Level 9</span></h2>\n<p>You know your formulas so well that you can concoct two items at once. When using the Quick Alchemy action, instead of spending one batch of infused reagents to create a single item, you can spend up to two batches of infused reagents to make up to two alchemical items as described in that action. These items do not have to be the same.</p>\n<h2>    Juggernaut<span style="float:right">Level 11</span></h2>\n<p>Your body has become accustomed to physical hazards and resistant to pathogens and ailments. Your proficiency rank for Fortitude saves increases to master. When you roll a success on a Fortitude save, you get a critical success instead.</p>\n<h2>    Perpetual Potency<span style="float:right">Level 11</span></h2>\n<p>Your perpetual infusions improve, allowing you to use Quick Alchemy to create more powerful items with no cost. The items you can select depend on your research field and must be in your formula book.</p>\n<p>See specific research fields for more information.</p>\n<h2>    Greater Field Discovery<span style="float:right">Level 13</span></h2>\n<p>You learn an incredible discovery that advances your understanding of your field.</p>\n<p>See specific research fields for more information.</p>\n<h2>    Light Armor Expertise<span style="float:right">Level 13</span></h2>\n<p>You\'ve learned how to dodge while wearing light or no armor. Your proficiency ranks for light armor and unarmored defense increase to expert.</p>\n<h2>    Weapon Specialization<span style="float:right">Level 13</span></h2>\n<p>You\'ve learned how to inflict greater injuries with the weapons you know best. You deal 2 additional damage with weapons and unarmed attacks in which you are an expert. This damage increases to 3 if you\'re a master, and to 4 if you\'re legendary.</p>\n<h2>    Alchemical Alacrity<span style="float:right">Level 15</span></h2>\n<p>Your comfort in concocting items is such that you can create three at a time. When using the Quick Alchemy action, you can spend up to three batches of infused reagents to make up to three alchemical items as described in that action. These items do not have to be the same.</p>\n<h2>    Evasion<span style="float:right">Level 15</span></h2>\n<p>You\'ve learned to move quickly to avoid explosions, dragon\'s breath, and worse. Your proficiency rank for Reflex saves increases to master. When you roll a success on a Reflex save, you get a critical success instead.</p>\n<h2>    Alchemical Mastery<span style="float:right">Level 17</span></h2>\n<p>Your alchemical concoctions are incredibly effective. Your proficiency rank for your alchemist class DC increases to master.</p>\n<h2>    Perpetual Perfection<span style="float:right">Level 17</span></h2>\n<p>You have perfected your perpetual infusions, allowing you to use Quick Alchemy to create even more powerful items at no cost. The items you can select depend on your research field and must be in your formula book.</p>\n<p>See specific research fields for more information.</p>\n<h2>    Light Armor Mastery<span style="float:right">Level 19</span></h2>\n<p>Your skill with light armor improves, increasing your ability to dodge blows. Your proficiency ranks for light armor and unarmored defense increase to master.</p>',
        },
        source: { value: "Pathfinder Core Rulebook" },
        rules: [
          {
            key: "ActiveEffectLike",
            mode: "upgrade",
            path: "system.martial.weapon-base-alchemical-bomb.rank",
            value: 1,
          },
        ],
        slug: "alchemist",
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
        traits: { value: [], rarity: "common" },
        keyAbility: { value: ["int"] },
        items: {
          "0btpz": {
            img: "systems/pf2e/icons/features/classes/choice-feature.webp",
            level: 7,
            name: "(Choice) Perpetual Infusions",
            uuid: "Compendium.pf2e.classfeatures.Item.ZqwHAoIZrI1dGoqK",
          },
          "0q0he": {
            img: "systems/pf2e/icons/features/classes/light-armor-expertise.webp",
            level: 13,
            name: "Alchemist Armor Expertise (Level 13)",
            uuid: "Compendium.pf2e.classfeatures.Item.bv3Qel8v9tpoFbw4",
          },
          "17vbv": {
            img: "systems/pf2e/icons/features/classes/alchemical-alarity.webp",
            level: 15,
            name: "Alchemical Alacrity",
            uuid: "Compendium.pf2e.classfeatures.Item.Eood6pNPaJxuSgD1",
          },
          "4bdrn": {
            img: "systems/pf2e/icons/features/classes/alchemy.webp",
            level: 1,
            name: "Alchemy",
            uuid: "Compendium.pf2e.classfeatures.Item.w3aS3tsvH2Ub6XMn",
          },
          "7rg3w": {
            img: "systems/pf2e/icons/features/classes/light-armor-master.webp",
            level: 19,
            name: "Alchemist Armor Mastery",
            uuid: "Compendium.pf2e.classfeatures.Item.FiVYuIPTBzPzNP4E",
          },
          b3ohx: {
            img: "systems/pf2e/icons/features/classes/choice-feature.webp",
            level: 1,
            name: "Research Field",
            uuid: "Compendium.pf2e.classfeatures.Item.cU2ofQLj7pg6wTSi",
          },
          bdpgv: {
            img: "systems/pf2e/icons/features/classes/choice-feature.webp",
            level: 11,
            name: "Perpetual Potency",
            uuid: "Compendium.pf2e.classfeatures.Item.MGn2wezOr3VAdO3U",
          },
          bm730: {
            img: "systems/pf2e/icons/features/classes/alertness.webp",
            level: 9,
            name: "Alertness",
            uuid: "Compendium.pf2e.classfeatures.Item.D8CSi8c9XiRpVc5M",
          },
          enfdl: {
            img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
            level: 13,
            name: "Weapon Specialization",
            uuid: "Compendium.pf2e.classfeatures.Item.9EqIasqfI8YIM3Pt",
          },
          f4a0p: {
            img: "systems/pf2e/icons/features/classes/double-brew.webp",
            level: 9,
            name: "Double Brew",
            uuid: "Compendium.pf2e.classfeatures.Item.76cwNLJEm4Yetnee",
          },
          j5xnl: {
            img: "systems/pf2e/icons/features/classes/alchemical-weapon-expertise.webp",
            level: 7,
            name: "Alchemical Weapon Expertise",
            uuid: "Compendium.pf2e.classfeatures.Item.4ocPy4O0OCLY0XCM",
          },
          k4a5r: {
            img: "systems/pf2e/icons/features/classes/juggerenaut.webp",
            level: 11,
            name: "Juggernaut",
            uuid: "Compendium.pf2e.classfeatures.Item.OMZs5y16jZRW9KQK",
          },
          l170j: {
            img: "systems/pf2e/icons/features/classes/choice-feature.webp",
            level: 13,
            name: "(Choice) Greater Field Discovery",
            uuid: "Compendium.pf2e.classfeatures.Item.MEwvBnT2VsO5lQ6I",
          },
          nmzo2: {
            img: "systems/pf2e/icons/features/classes/evasion.webp",
            level: 15,
            name: "Evasion",
            uuid: "Compendium.pf2e.classfeatures.Item.MV6XIuAgN9uSA0Da",
          },
          plldb: {
            img: "systems/pf2e/icons/features/classes/alchemical-expertise.webp",
            level: 9,
            name: "Alchemical Expertise",
            uuid: "Compendium.pf2e.classfeatures.Item.3e1PlMXmlSwKoc6d",
          },
          t9bmz: {
            img: "systems/pf2e/icons/features/classes/formula-book.webp",
            level: 1,
            name: "Formula Book",
            uuid: "Compendium.pf2e.classfeatures.Item.XPPG7nN9pxt0sjMg",
          },
          u9it3: {
            img: "systems/pf2e/icons/features/classes/iron-will.webp",
            level: 7,
            name: "Iron Will",
            uuid: "Compendium.pf2e.classfeatures.Item.wMyDcVNmA7xGK83S",
          },
          xtjxi: {
            img: "systems/pf2e/icons/features/classes/choice-feature.webp",
            level: 17,
            name: "Perpetual Perfection",
            uuid: "Compendium.pf2e.classfeatures.Item.11nGqrSJOoGRlDjO",
          },
          xzcdr: {
            img: "systems/pf2e/icons/features/classes/choice-feature.webp",
            level: 5,
            name: "Field Discovery",
            uuid: "Compendium.pf2e.classfeatures.Item.IxxPEahbqXwIXum7",
          },
          yc9ak: {
            img: "systems/pf2e/icons/features/classes/powerful-alchemy.webp",
            level: 5,
            name: "Powerful Alchemy",
            uuid: "Compendium.pf2e.classfeatures.Item.7JK2a1D3VeWDcObo",
          },
          yy1uz: {
            img: "systems/pf2e/icons/features/classes/alchemical-mastery.webp",
            level: 17,
            name: "Alchemical Mastery",
            uuid: "Compendium.pf2e.classfeatures.Item.eG7FBDjCdEFzW9V9",
          },
        },
        hp: 8,
        trainedSkills: { value: ["cra"], additional: 3 },
        perception: 1,
        savingThrows: { fortitude: 2, reflex: 2, will: 1 },
        attacks: {
          simple: 1,
          martial: 0,
          advanced: 0,
          unarmed: 1,
          other: { name: "Alchemical Bombs", rank: 1 },
        },
        defenses: { unarmored: 1, light: 1, medium: 1, heavy: 0 },
        classDC: 1,
        ancestryFeatLevels: { value: [1, 5, 9, 13, 17] },
        classFeatLevels: { value: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20] },
        generalFeatLevels: { value: [3, 7, 11, 15, 19] },
        skillFeatLevels: { value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] },
        skillIncreaseLevels: { value: [3, 5, 7, 9, 11, 13, 15, 17, 19] },
      },
      type: "class",
      flags: {
        core: { sourceId: "Compendium.pf2e.classes.Item.XwfcJuskrhI9GIjX" },
        "scene-packer": { hash: "58df44be0b48a9b6baf69971d8e5ea8800c71be7" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, XUVsOh1Kzgk6WvPB: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690101417728,
        modifiedTime: 1690101417728,
        lastModifiedBy: "XUVsOh1Kzgk6WvPB",
      },
      _id: "KF9DPim79zZLQUWB",
    },
    {
      img: "systems/pf2e/icons/features/classes/choice-feature.webp",
      name: "Research Field",
      system: {
        description: {
          gm: "",
          value:
            "<p>Your inquiries into the alchemical nature of the universe have led you to focus on a particular field of research. You might have a degree from a scientific institute, correspond with other researchers in your field, or work as a genius loner. Choose a field of research.</p>\n<p>Your research field adds a number of formulas to your formula book; these are your signature items. When using a batch of infused reagents to create your signature items using advanced alchemy, you create three items instead of two. Each time you gain a level, you can swap one of your signature items with another formula in your formula book. This new signature item must be on your research field's list of possible signature items.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
        rules: [
          {
            adjustName: false,
            allowedDrops: {
              label: "level 1 Alchemist class feature",
              predicate: ["item:level:1", "item:trait:alchemist", "item:type:feature"],
            },
            choices: [
              {
                value: "Compendium.pf2e.classfeatures.Item.7JbiaZ8bxODM5mzS",
              },
              {
                value: "Compendium.pf2e.classfeatures.Item.eNZnx4LISDNftbx2",
              },
              {
                value: "Compendium.pf2e.classfeatures.Item.tvdb1jkjl2bRZjSp",
              },
              { value: "Compendium.pf2e.classfeatures.Item.P9quO9XZi3OWFe1k" },
            ],
            flag: "researchField",
            key: "ChoiceSet",
            prompt: "PF2E.SpecificRule.Alchemist.ResearchField.Prompt",
            selection: "Compendium.pf2e.classfeatures.Item.7JbiaZ8bxODM5mzS",
          },
          {
            key: "GrantItem",
            uuid: "{item|flags.pf2e.rulesSelections.researchField}",
            flag: "bomber",
          },
        ],
        slug: "research-field",
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
        level: { value: 1 },
        traits: { value: ["alchemist"], rarity: "common" },
        category: "classfeature",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: { value: "passive" },
        actions: { value: null },
        prerequisites: { value: [] },
        location: "KF9DPim79zZLQUWB",
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.classfeatures.Item.cU2ofQLj7pg6wTSi",
        },
        pf2e: {
          itemGrants: {
            bomber: { id: "ZddnbhJRh83OQbJm", onDelete: "detach" },
          },
        },
        "scene-packer": { hash: "9b026422764e9cd8b4255abfb40b081617e83854" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, XUVsOh1Kzgk6WvPB: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690101417728,
        modifiedTime: 1690101417728,
        lastModifiedBy: "XUVsOh1Kzgk6WvPB",
      },
      _id: "RbnLqLQyCDnxk9ID",
    },
    {
      img: "systems/pf2e/icons/features/classes/alchemy.webp",
      name: "Alchemy",
      system: {
        description: {
          gm: "",
          value:
            "<p>You understand the complex interactions of natural and unnatural substances and can concoct alchemical items to meet your needs. You can do this using normal reagents and the Craft activity, or you can use special infused reagents that allow you to craft temporary items quickly and at no cost. Over time, you can create more and more alchemical items for free, and since each of them becomes more and more powerful, you advance in power dramatically, leaving behind those who don't understand your strange science.</p>\n<p>You gain the @UUID[Compendium.pf2e.feats-srd.Item.is3Oz9wt11lNq62K]{Alchemical Crafting} feat, even if you don't meet that feat's prerequisites, and you gain the four common 1st-level alchemical formulas granted by that feat. You can use this feat to create alchemical items as long as you have the items' formulas in your formula book.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
        rules: [
          {
            key: "GrantItem",
            uuid: "Compendium.pf2e.feats-srd.Item.is3Oz9wt11lNq62K",
            flag: "alchemicalCrafting",
          },
          {
            key: "GrantItem",
            uuid: "Compendium.pf2e.classfeatures.Item.wySB9VHOW1v3TX1L",
            flag: "infusedReagents",
          },
          {
            key: "GrantItem",
            uuid: "Compendium.pf2e.classfeatures.Item.Pe0zmIqyTBc2Td0I",
            flag: "advancedAlchemy",
          },
          {
            key: "GrantItem",
            uuid: "Compendium.pf2e.classfeatures.Item.sPtl05wwTpqFI0lL",
            flag: "quickAlchemy",
          },
        ],
        slug: "alchemy",
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
        level: { value: 1 },
        traits: { value: ["alchemist"], rarity: "common" },
        category: "classfeature",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: { value: "passive" },
        actions: { value: null },
        prerequisites: { value: [] },
        location: "KF9DPim79zZLQUWB",
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.classfeatures.Item.w3aS3tsvH2Ub6XMn",
        },
        pf2e: {
          itemGrants: {
            alchemicalCrafting: {
              id: "xYLze832PzNrbheE",
              onDelete: "detach",
            },
            infusedReagents: {
              id: "iCL20xNzv1s2v1Dn",
              onDelete: "detach",
            },
            advancedAlchemy: {
              id: "FiS96jgfE48Xjl24",
              onDelete: "detach",
            },
            quickAlchemy: { id: "cn7PUXSntkWCmqvi", onDelete: "detach" },
          },
        },
        "scene-packer": { hash: "279e593cd947420a94d01ebb1b8baaf9b041c73c" },
      },
      effects: [],
      folder: null,
      sort: 100,
      ownership: { default: 0, XUVsOh1Kzgk6WvPB: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690101417728,
        modifiedTime: 1690101417728,
        lastModifiedBy: "XUVsOh1Kzgk6WvPB",
      },
      _id: "ZGMlIUsxx7AGSmes",
    },
    {
      img: "systems/pf2e/icons/features/classes/formula-book.webp",
      name: "Formula Book",
      system: {
        description: {
          gm: "",
          value:
            "<p>An alchemist keeps meticulous formulas for every item they can create. You start with a standard @UUID[Compendium.pf2e.equipment-srd.Item.qCEOZ6109Yo34tRx]{Formula Book (Blank)} worth 10 sp or less for free. The formula book contains the formulas for two common 1st-level alchemical items of your choice, in addition to those you gained from @UUID[Compendium.pf2e.feats-srd.Item.is3Oz9wt11lNq62K]{Alchemical Crafting} and your research field.</p>\n<p>Each time you gain a level, you can add the formulas for two common alchemical items to your formula book. These new formulas can be for any level of item you can create. You learn these formulas automatically, but it's also possible to find or buy additional formulas in settlements or from other alchemists, or to invent them with the @UUID[Compendium.pf2e.feats-srd.Item.XR95taODq1sq82Du]{Inventor} feat.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
        rules: [
          {
            key: "GrantItem",
            uuid: "Compendium.pf2e.equipment-srd.Item.qCEOZ6109Yo34tRx",
            flag: "formulaBookBlank",
          },
        ],
        slug: "formula-book",
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
        level: { value: 1 },
        traits: { value: ["alchemist"], rarity: "common" },
        category: "classfeature",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: { value: "passive" },
        actions: { value: null },
        prerequisites: { value: [] },
        location: "KF9DPim79zZLQUWB",
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.classfeatures.Item.XPPG7nN9pxt0sjMg",
        },
        pf2e: {
          itemGrants: {
            formulaBookBlank: {
              id: "Ip04z7z8LfP6MEx0",
              onDelete: "detach",
            },
          },
        },
        "scene-packer": { hash: "044d35e94d8eab8ea10f61a05b3d747c66b8621d" },
      },
      effects: [],
      folder: null,
      sort: 200,
      ownership: { default: 0, XUVsOh1Kzgk6WvPB: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690101417728,
        modifiedTime: 1690101417728,
        lastModifiedBy: "XUVsOh1Kzgk6WvPB",
      },
      _id: "0z7owyE1j6BDEDV0",
    },
    {
      img: "systems/pf2e/icons/features/classes/bomber.webp",
      name: "Bomber",
      system: {
        description: {
          gm: "",
          value:
            '<p>You specialize in explosions and other violent alchemical reactions. You start with the formulas for two common 1st-level alchemical bombs, in addition to your other formulas.</p>\n<p>Your research field adds a number of formulas to your formula book; these are your signature items. When using a batch of @UUID[Compendium.pf2e.classfeatures.Item.wySB9VHOW1v3TX1L]{Infused Reagents} to create your signature items using @UUID[Compendium.pf2e.classfeatures.Item.Pe0zmIqyTBc2Td0I]{Advanced Alchemy}, you create three items instead of two. Each time you gain a level, you can swap one of your signature items with another formula in your formula book. This new signature item must be on your research field\'s list of possible signature items.</p>\n<p>When throwing an alchemical bomb with the splash trait, you can deal splash damage to only your primary target instead of the usual splash area.</p>\n<h2 class="title">    @UUID[Compendium.pf2e.classfeatures.Item.8QAFgy9U8PxEa7Dw]{Field Discovery}<span style="float:right">Level 5</span></h2>\n<p>When using Advanced Alchemy to make bombs during your daily preparations, you can use a batch of reagents to create any three bombs instead of just two of the same bomb.</p>\n<h2 class="title">    @UUID[Compendium.pf2e.classfeatures.Item.DFQDtT1Van4fFEHi]{Perpetual Infusions}<span style="float:right">Level 7</span></h2>\n<p>You have learned how to create perpetual alchemical infusions that can provide a near-infinite supply of certain simple items. You gain the ability to create two 1st-level alchemical items using @UUID[Compendium.pf2e.classfeatures.Item.sPtl05wwTpqFI0lL]{Quick Alchemy} without spending a batch of infused reagents. The items you can select depend on your research field and must be in your formula book.</p>\n<p>Each time you gain a level, you can swap any number of your perpetual infusions with other eligible infusions.</p>\n<p>Choose two 1st-level bombs.</p>\n<h2 class="title">    @UUID[Compendium.pf2e.classfeatures.Item.8rEVg03QJ71ic3PP]{Perpetual Potency}<span style="float:right">Level 11</span></h2>\n<p>Your perpetual infusions improve, allowing you to use Quick Alchemy to create more powerful items with no cost. The items you can select depend on your research field and must be in your formula book.</p>\n<p>The moderate versions of the bombs you chose for perpetual infusions.</p>\n<h2 class="title">    @UUID[Compendium.pf2e.classfeatures.Item.RGs4uR3CAvgbtBAA]{Greater Field Discovery}<span style="float:right">Level 13</span></h2>\n<p>You can increase the splash on your bombs to damage creatures within 10 feet, or 15 feet if you have @UUID[Compendium.pf2e.feats-srd.Item.gyVcJfZTmBytLsXq]{Expanded Splash}.</p>\n<h2 class="title">    @UUID[Compendium.pf2e.classfeatures.Item.xO90iBD8XNGyaCkz]{Perpetual Perfection}<span style="float:right">Level 17</span></h2>\n<p>You have perfected your perpetual infusions, allowing you to use Quick Alchemy to create even more powerful items at no cost. The items you can select depend on your research field and must be in your formula book.</p>\n<p>The greater versions of the bombs you chose for perpetual infusions.</p>',
        },
        source: { value: "Pathfinder Core Rulebook" },
        rules: [
          {
            key: "Note",
            predicate: ["alchemical", "bomb", "splash"],
            selector: "strike-damage",
            text: "You can deal splash damage to only your primary target instead of the usual splash area.",
            title: "{item|name}",
          },
          {
            key: "ActiveEffectLike",
            mode: "override",
            path: "flags.pf2e.alchemist",
            value: {
              fieldDiscovery: "Compendium.pf2e.classfeatures.Item.8QAFgy9U8PxEa7Dw",
              greaterFieldDiscovery: "Compendium.pf2e.classfeatures.Item.RGs4uR3CAvgbtBAA",
              perpetualInfusions: "Compendium.pf2e.classfeatures.Item.DFQDtT1Van4fFEHi",
              perpetualPerfection: "Compendium.pf2e.classfeatures.Item.xO90iBD8XNGyaCkz",
              perpetualPotency: "Compendium.pf2e.classfeatures.Item.8rEVg03QJ71ic3PP",
            },
          },
        ],
        slug: "bomber",
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
        level: { value: 1 },
        traits: { value: ["alchemist"], rarity: "common" },
        category: "classfeature",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: { value: "passive" },
        actions: { value: null },
        prerequisites: { value: [] },
        location: null,
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.classfeatures.Item.7JbiaZ8bxODM5mzS",
        },
        pf2e: {
          grantedBy: { id: "RbnLqLQyCDnxk9ID", onDelete: "cascade" },
        },
        "scene-packer": { hash: "e03af117dc019f07f8e3555756154f8283657916" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, XUVsOh1Kzgk6WvPB: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690101417728,
        modifiedTime: 1690101417728,
        lastModifiedBy: "XUVsOh1Kzgk6WvPB",
      },
      _id: "ZddnbhJRh83OQbJm",
    },
    {
      img: "systems/pf2e/icons/features/feats/feats.webp",
      name: "Alchemical Crafting",
      system: {
        description: {
          gm: "",
          value:
            "<p>You can use the Craft activity to create alchemical items. When you select this feat, you immediately add the formulas for four common 1st-level alchemical items to your formula book.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
        rules: [],
        slug: "alchemical-crafting",
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
        level: { value: 1 },
        traits: { value: ["general", "skill"], rarity: "common" },
        category: "skill",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: { value: "passive" },
        actions: { value: null },
        prerequisites: { value: [{ value: "trained in Crafting" }] },
        location: null,
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.feats-srd.Item.is3Oz9wt11lNq62K",
        },
        pf2e: {
          grantedBy: { id: "ZGMlIUsxx7AGSmes", onDelete: "cascade" },
        },
        "scene-packer": { hash: "26efd5b8b0121ae12cc10ff595fcb396efc7144e" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, XUVsOh1Kzgk6WvPB: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690101417728,
        modifiedTime: 1690101417728,
        lastModifiedBy: "XUVsOh1Kzgk6WvPB",
      },
      _id: "xYLze832PzNrbheE",
    },
    {
      img: "systems/pf2e/icons/features/classes/infused-reagents.webp",
      name: "Infused Reagents",
      system: {
        description: {
          gm: "",
          value:
            "<p>You infuse reagents with your own alchemical essence, allowing you to create alchemical items at no cost. Each day during your daily preparations, you gain a number of batches of infused reagents equal to your level + your Intelligence modifier. You can use these reagents for either advanced alchemy or Quick Alchemy, described below. Together, these infused reagents have light Bulk.</p>\n<p>As soon as you make your next daily preparations, your infused reagents from the previous day's preparations are instantly destroyed, and nonpermanent effects of your previous day's infused items immediately end. While infused reagents are physical objects, they can't be duplicated, preserved, or created in any way other than your daily preparations. Any such artificial reagents lack the infusion and are useless for advanced alchemy or Quick Alchemy.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
        rules: [
          {
            key: "ActiveEffectLike",
            mode: "upgrade",
            path: "system.resources.crafting.infusedReagents.max",
            predicate: ["class:alchemist"],
            value: "@actor.level + @actor.abilities.int.mod",
          },
          {
            key: "ActiveEffectLike",
            mode: "upgrade",
            path: "system.resources.crafting.infusedReagents.max",
            predicate: [{ not: "class:alchemist" }],
            value: "@actor.level",
          },
        ],
        slug: "infused-reagents",
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
        level: { value: 1 },
        traits: { value: ["alchemist"], rarity: "common" },
        category: "classfeature",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: { value: "passive" },
        actions: { value: null },
        prerequisites: { value: [] },
        location: null,
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.classfeatures.Item.wySB9VHOW1v3TX1L",
        },
        pf2e: {
          grantedBy: { id: "ZGMlIUsxx7AGSmes", onDelete: "cascade" },
        },
        "scene-packer": { hash: "a0c3ee339034e365c29ba6eb13d552b38bb0e38f" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, XUVsOh1Kzgk6WvPB: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690101417728,
        modifiedTime: 1690101417728,
        lastModifiedBy: "XUVsOh1Kzgk6WvPB",
      },
      _id: "iCL20xNzv1s2v1Dn",
    },
    {
      img: "systems/pf2e/icons/features/classes/advanced-alchemy.webp",
      name: "Advanced Alchemy",
      system: {
        description: {
          gm: "",
          value:
            "<p>During your daily preparations, after producing new @UUID[Compendium.pf2e.classfeatures.Item.wySB9VHOW1v3TX1L]{Infused Reagents}, you can spend batches of those infused reagents to create infused alchemical items.</p>\n<p>You don't need to attempt a Crafting check to do this, and you ignore both the number of days typically required to create the items and any alchemical reagent requirements.</p>\n<p>Your advanced alchemy level is equal to your level. For each batch of infused reagents you spend, choose an alchemical item of your advanced alchemy level or lower that's in your formula book, and make a batch of two of that item.</p>\n<p>These items have the infused trait and remain potent for 24 hours or until your next daily preparations, whichever comes first.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
        rules: [
          {
            craftableItems: ["item:trait:alchemical"],
            isAlchemical: true,
            isDailyPrep: true,
            key: "CraftingEntry",
            label: "PF2E.TraitAlchemist",
            maxItemLevel: "@actor.level",
            predicate: ["class:alchemist"],
            selector: "alchemist",
            preparedFormulas: [
              {
                itemUUID: "Compendium.pf2e.equipment-srd.Item.j8ajvNqyyQGBpBch",
                quantity: 7,
                isSignatureItem: true,
              },
            ],
          },
        ],
        slug: "advanced-alchemy",
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
        level: { value: 1 },
        traits: { value: ["alchemist"], rarity: "common" },
        category: "classfeature",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: { value: "passive" },
        actions: { value: null },
        prerequisites: { value: [] },
        location: null,
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.classfeatures.Item.Pe0zmIqyTBc2Td0I",
        },
        pf2e: {
          grantedBy: { id: "ZGMlIUsxx7AGSmes", onDelete: "cascade" },
        },
        "scene-packer": { hash: "9f3a541667f46026acc132ac85bb539507a2b121" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, XUVsOh1Kzgk6WvPB: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.3",
        coreVersion: "11.306",
        createdTime: 1690101417728,
        modifiedTime: 1690716179265,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
      _id: "FiS96jgfE48Xjl24",
    },
    {
      img: "systems/pf2e/icons/actions/OneAction.webp",
      name: "Quick Alchemy",
      system: {
        description: {
          gm: "",
          value:
            "<p>    <strong>Cost</strong>    1 batch of infused reagents</p>\n<p>    <strong>Requirements</strong>    You have the formula for the alchemical item you're creating, and you're either holding or wearing the @UUID[Compendium.pf2e.equipment-srd.Item.4ftXXUCBHcf4b0MH]{Alchemist's Tools}.</p>\n<hr/>\n<p>You swiftly mix up a short-lived alchemical item to use at a moment's notice. You create a single alchemical consumable item of your advanced alchemy level or lower that's in your formula book without having to spend the normal monetary cost in alchemical reagents or needing to attempt a Crafting check. This item has the infused trait, but it remains potent only until the start of your next turn.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
        rules: [],
        slug: "quick-alchemy",
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
        traits: { value: ["alchemist", "manipulate"], rarity: "common" },
        actionType: { value: "action" },
        category: "interaction",
        actions: { value: 1 },
        requirements: { value: "" },
        trigger: { value: "" },
        deathNote: false,
        weapon: { value: "" },
      },
      type: "action",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.actionspf2e.Item.yzNJgwzV9XqEhKc6",
        },
        pf2e: {
          grantedBy: { id: "cn7PUXSntkWCmqvi", onDelete: "cascade" },
        },
        "scene-packer": { hash: "087e1a60858508e7cb898fc2f549ff45271f42eb" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, XUVsOh1Kzgk6WvPB: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690101417728,
        modifiedTime: 1690101417728,
        lastModifiedBy: "XUVsOh1Kzgk6WvPB",
      },
      _id: "85b0rADRVC4POwoi",
    },
    {
      img: "systems/pf2e/icons/features/classes/quick-alchemy.webp",
      name: "Quick Alchemy",
      system: {
        description: {
          gm: "",
          value:
            "<p>If you need a specific alchemical item on the fly, you can use your infused reagents to quickly create it with the @UUID[Compendium.pf2e.actionspf2e.Item.yzNJgwzV9XqEhKc6]{Quick Alchemy} action.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
        rules: [
          {
            key: "GrantItem",
            uuid: "Compendium.pf2e.actionspf2e.Item.yzNJgwzV9XqEhKc6",
            flag: "quickAlchemy",
          },
        ],
        slug: "quick-alchemy",
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
        level: { value: 1 },
        traits: { value: ["alchemist"], rarity: "common" },
        category: "classfeature",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: { value: "passive" },
        actions: { value: null },
        prerequisites: { value: [] },
        location: null,
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.classfeatures.Item.sPtl05wwTpqFI0lL",
        },
        pf2e: {
          grantedBy: { id: "ZGMlIUsxx7AGSmes", onDelete: "cascade" },
          itemGrants: {
            quickAlchemy: { id: "85b0rADRVC4POwoi", onDelete: "detach" },
          },
        },
        "scene-packer": { hash: "8f78330d2de89d7d4c7a50154bed07aab6f5afaf" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, XUVsOh1Kzgk6WvPB: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690101417728,
        modifiedTime: 1690101417728,
        lastModifiedBy: "XUVsOh1Kzgk6WvPB",
      },
      _id: "cn7PUXSntkWCmqvi",
    },
    {
      img: "systems/pf2e/icons/equipment/adventuring-gear/formula-book.webp",
      name: "Formula Book (Blank)",
      system: {
        description: {
          gm: "",
          value:
            "<p>A formula book holds the formulas necessary to make items other than the common equipment from this chapter; alchemists typically get one for free. Each formula book can hold the formulas for up to 100 different items. Formulas can also appear on parchment sheets, tablets, and almost any other medium; there's no need for you to copy them into a specific book as long as you can keep them on hand to reference them.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
        rules: [],
        slug: "formula-book-blank",
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
        level: { value: 0 },
        traits: { value: [], rarity: "common", otherTags: [] },
        quantity: 1,
        baseItem: null,
        hp: { value: 0, max: 0 },
        hardness: 0,
        weight: { value: "L" },
        equippedBulk: { value: "" },
        price: { value: { gp: 1 } },
        equipped: { carryType: "worn", invested: null },
        stackGroup: null,
        negateBulk: { value: "" },
        containerId: null,
        preciousMaterial: { value: "" },
        preciousMaterialGrade: { value: "" },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: { description: { value: "" } },
          },
          misidentified: {},
        },
        usage: { value: "held-in-one-hand" },
      },
      type: "equipment",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.qCEOZ6109Yo34tRx",
        },
        pf2e: {
          grantedBy: { id: "0z7owyE1j6BDEDV0", onDelete: "detach" },
        },
        "scene-packer": { hash: "5a4a83a052955b5e9df0578517eba495183ca24d" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, XUVsOh1Kzgk6WvPB: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690101417728,
        modifiedTime: 1690101417728,
        lastModifiedBy: "XUVsOh1Kzgk6WvPB",
      },
      _id: "Ip04z7z8LfP6MEx0",
    },
    {
      img: "systems/pf2e/icons/default-icons/alternatives/ancestries/human.svg",
      name: "Human",
      system: {
        description: {
          gm: "",
          value:
            "<p>    <em>As unpredictable and varied as any of Golarion's peoples, humans have exceptional drive and the capacity to endure and expand. Though many civilizations thrived before humanity rose to prominence, humans have built some of the greatest and the most terrible societies throughout the course of history, and today they are the most populous people in the realms around the Inner Sea.</em></p>\n<hr/>\n<p>Humans' ambition, versatility, and exceptional potential have led to their status as the world's predominant ancestry. Their empires and nations are vast, sprawling things, and their citizens carve names for themselves with the strength of their sword arms and the power of their spells. Humanity is diverse and tumultuous, running the gamut from nomadic to imperial, sinister to saintly. Many of them venture forth to explore, to map the expanse of the multiverse, to search for long-lost treasure, or to lead mighty armies to conquer their neighbors—for no better reason than because they can.</p>\n<p>If you want a character who can be just about anything, you should play a human.</p>\n<h2>You Might...</h2>\n<ul>    \n<li>Strive to achieve greatness, either in your own right or on behalf of a cause.</li>    \n<li>Seek to understand your purpose in the world.</li>    \n<li>Cherish your relationships with family and friends.</li>    \n</ul>\n<h2>Others Probably...</h2>\n<ul>    \n<li>Respect your flexibility, your adaptability, and—in most cases— your open‑mindedness.</li>    \n<li>Distrust your intentions, fearing you seek only power or wealth.</li>    \n<li>Aren't sure what to expect from you and are hesitant to assume your intentions.</li>    \n</ul>\n<h2>Physical Description</h2>\n<p>Humans' physical characteristics are as varied as the world's climes. Humans have a wide variety of skin and hair colors, body types, and facial features. Generally speaking, their skin has a darker hue the closer to the equator they or their ancestors lived.</p>\n<p>Humans reach physical adulthood around the age of 15, though mental maturity occurs a few years later. A typical human can live to be around 90 years old. Humans often intermarry with people of other ancestries, giving rise to children who bear the traits of both parents. The most notable half-humans are half-elves and half-orcs.</p>\n<h2>Society</h2>\n<p>Human variety also manifests in terms of their governments, attitudes, and social norms. Though the oldest of human cultures can trace their shared histories thousands of years into the past, when compared to the societies of the elves or dwarves, human civilizations seem in a state of constant flux as empires fragment and new kingdoms subsume the old.</p>\n<h2>Alignment and Religion</h2>\n<p>Humanity is perhaps the most heterogeneous of all the ancestries, with a capacity for great evil and boundless good. Some humans assemble into vast raging hordes, while others build sprawling cities. Considered as a whole, most humans are neutral, yet they tend to congregate into nations or communities of a shared alignment, or at least a shared tendency toward an alignment. Humans also worship a wide range of gods and practice many different religions, tending to seek favor from any divine being they encounter.</p>\n<h2>Names</h2>\n<p>Unlike many ancestral cultures, which generally cleave to specific traditions and shared histories, humanity's diversity has resulted in a near-infinite set of names. The humans of northern tribes have different names than those dwelling in southern nation-states. Humans throughout much of the world speak Common (though some continents on Golarion have their own regional common languages), yet their names are as varied as their beliefs and appearances.</p>\n<h3>    <span style=\"text-decoration:underline\">Sample Names</span></h3>\n<p>A variety of human ethnic groups—many of which have origins on distant lands— populates the continents bordering Golarion's Inner Sea. Human characters can be any of these ethnicities, regardless of what lands they call home.</p>\n<hr/>\n<p>Characters of human ethnicities in the Inner Sea region speak Common (also known as Taldane), and some ethnicities grant access to an uncommon language.</p>\n<h2 style=\"border-bottom:1px solid var(--color-underline-header)\">Human Mechanics</h2>\n<p>    <strong>Hit Points</strong>    8</p>\n<p>    <strong>Size</strong>    Medium</p>\n<p>    <strong>Speed</strong>    25 feet</p>\n<p>    <strong>Ability Boosts</strong>    Two free ability boosts</p>\n<p>    <strong>Languages</strong>    Common</p>\n<p>    <strong>Additional Languages</strong>    equal to 1 + your Intelligence modifier (if it's positive). Choose from the list of common languages and any other languages to which you have access (such as the languages prevalent in your region).</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
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
        traits: { value: ["human", "humanoid"], rarity: "common" },
        hp: 8,
        size: "med",
        reach: 5,
        speed: 25,
        boosts: {
          "0": {
            value: ["cha", "con", "dex", "int", "str", "wis"],
            selected: "int",
          },
          "1": {
            value: ["str", "dex", "con", "int", "wis", "cha"],
            selected: "dex",
          },
          "2": { value: [] },
        },
        flaws: { "0": { value: [] } },
        languages: { value: ["common"], custom: "" },
        additionalLanguages: { count: 1, value: [], custom: "" },
        items: {},
        vision: "normal",
      },
      type: "ancestry",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.ancestries.Item.IiG7DgeLWYrSNXuX",
        },
        "scene-packer": { hash: "7f3604e8ad728e6c09497843bdb9b3c4ed74dc69" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, XUVsOh1Kzgk6WvPB: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690101429424,
        modifiedTime: 1690101494961,
        lastModifiedBy: "XUVsOh1Kzgk6WvPB",
      },
      _id: "A4mcQnnJJyPhfO2D",
    },
    {
      img: "systems/pf2e/icons/features/ancestry/versatile-heritage.webp",
      name: "Versatile Heritage",
      system: {
        description: {
          gm: "",
          value:
            "<p>Humanity's versatility and ambition have fueled its ascendance to be the most common ancestry in most nations throughout the world. Select a general feat of your choice for which you meet the prerequisites (as with your ancestry feat, you can select this general feat at any point during character creation).</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
        rules: [
          {
            adjustName: false,
            choices: {
              filter: ["item:level:1", "item:trait:general"],
              itemType: "feat",
            },
            flag: "versatileHeritage",
            key: "ChoiceSet",
            prompt: "PF2E.SpecificRule.GeneralTraining.Prompt",
            selection: "Compendium.pf2e.feats-srd.Item.2kwXTUjYYhoAGySr",
          },
          {
            key: "GrantItem",
            uuid: "{item|flags.pf2e.rulesSelections.versatileHeritage}",
            flag: "incredibleInitiative",
          },
        ],
        slug: "versatile-heritage",
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
        traits: { value: [], rarity: "common" },
        ancestry: {
          name: "Human",
          slug: "human",
          uuid: "Compendium.pf2e.ancestries.Item.IiG7DgeLWYrSNXuX",
        },
      },
      type: "heritage",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.heritages.Item.hFBwsVcSnNCJoimo",
        },
        pf2e: {
          itemGrants: {
            incredibleInitiative: {
              id: "foDrpjmqNZ6pV2r3",
              onDelete: "detach",
            },
          },
        },
        "scene-packer": { hash: "c230122cd7f8fece31f5d08f2c072e15ad4739d3" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, XUVsOh1Kzgk6WvPB: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690101467453,
        modifiedTime: 1690101467453,
        lastModifiedBy: "XUVsOh1Kzgk6WvPB",
      },
      _id: "lT8yN2q29cABgV7J",
    },
    {
      img: "systems/pf2e/icons/features/feats/feats.webp",
      name: "Incredible Initiative",
      system: {
        description: {
          gm: "",
          value: "<p>You react more quickly than others can. You gain a +2 circumstance bonus to initiative rolls.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
        rules: [
          {
            key: "FlatModifier",
            selector: "initiative",
            type: "circumstance",
            value: 2,
          },
        ],
        slug: "incredible-initiative",
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
        level: { value: 1 },
        traits: { value: ["general"], rarity: "common" },
        category: "general",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: { value: "passive" },
        actions: { value: null },
        prerequisites: { value: [] },
        location: null,
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.feats-srd.Item.2kwXTUjYYhoAGySr",
        },
        pf2e: {
          grantedBy: { id: "lT8yN2q29cABgV7J", onDelete: "cascade" },
        },
        "scene-packer": { hash: "64c0e152a81b6732e1e4c740e5ca3d689360bb5b" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, XUVsOh1Kzgk6WvPB: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690101467453,
        modifiedTime: 1690101467453,
        lastModifiedBy: "XUVsOh1Kzgk6WvPB",
      },
      _id: "foDrpjmqNZ6pV2r3",
    },
    {
      img: "systems/pf2e/icons/default-icons/background.svg",
      name: "Fireworks Performer",
      system: {
        description: {
          gm: "",
          value:
            "<p>Few celebrations in Tian-Xia are complete without a show of fireworks, and your job is to make sure they go off without a hitch. You load the fireworks, set the fuses, and choreograph the performance, bringing the show together in a finale of lights and explosions. Then it's time to pack up your gear and move on to the next civic holiday or religious festival. Of course, someone who travels the roads with a pack full of high explosives is bound to run into an adventure or two along the way, and so over time, your fireworks have been spent in support of that life.</p>\n<p>    Choose two ability boosts. One must be to <strong>Intelligence</strong>    or <strong>Charisma</strong>    , and one is a free ability boost.</p>\n<p>You're trained in the Performance skill and the Engineering Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.7LB00jkh6JaJr3vS]{Fascinating Performance} skill feat.</p>",
        },
        source: { value: "Pathfinder Guns &Gears" },
        rules: [],
        slug: "fireworks-performer",
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
        traits: { value: [], rarity: "common" },
        boosts: {
          "0": { value: ["cha", "int"], selected: "int" },
          "1": {
            value: ["cha", "con", "dex", "int", "str", "wis"],
            selected: "cha",
          },
        },
        items: {
          wr9b9: {
            img: "systems/pf2e/icons/features/feats/feats.webp",
            level: 1,
            name: "Fascinating Performance",
            uuid: "Compendium.pf2e.feats-srd.Item.7LB00jkh6JaJr3vS",
          },
        },
        trainedLore: "Engineering",
        trainedSkills: { value: ["prf"], custom: "" },
      },
      type: "background",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.backgrounds.Item.2lk5NOcu1aUglUdK",
        },
        "scene-packer": { hash: "cecb6e8e76fe6e432aa34baa27ceb4d710fb8d7e" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, XUVsOh1Kzgk6WvPB: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690101477827,
        modifiedTime: 1690101499214,
        lastModifiedBy: "XUVsOh1Kzgk6WvPB",
      },
      _id: "OQ5fRuGNIke9bKkJ",
    },
    {
      img: "systems/pf2e/icons/features/feats/feats.webp",
      name: "Fascinating Performance",
      system: {
        description: {
          gm: "",
          value:
            "<p>When you Perform, compare your result to the Will DC of one observer. If you succeed, the target is fascinated by you for 1 round. If the observer is in a situation that demands immediate attention, such as combat, you must critically succeed to fascinate it and the Perform action gains the incapacitation trait. You must choose which creature you're trying to fascinate before you roll your check, and the target is then temporarily immune for 1 hour. If you're an expert in Performance, you can fascinate up to four observers; if you're a master, you can fascinate up to 10 observers; and if you're legendary, you can fascinate any number of observers at the same time.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
        rules: [],
        slug: "fascinating-performance",
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
        level: { value: 1 },
        traits: { value: ["general", "skill"], rarity: "common" },
        category: "skill",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: { value: "passive" },
        actions: { value: null },
        prerequisites: { value: [{ value: "trained in Performance" }] },
        location: "OQ5fRuGNIke9bKkJ",
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.feats-srd.Item.7LB00jkh6JaJr3vS",
        },
        "scene-packer": { hash: "6bd51df2c5afa7ce79421a9f09dbd9182f09a069" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, XUVsOh1Kzgk6WvPB: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690101477827,
        modifiedTime: 1690101477827,
        lastModifiedBy: "XUVsOh1Kzgk6WvPB",
      },
      _id: "jMPbsLmwmHYXt3m4",
    },
    {
      _id: "Hc1dm3ZGNMvyCIxz",
      img: "systems/pf2e/icons/features/feats/feats.webp",
      name: "Natural Ambition",
      system: {
        description: {
          gm: "",
          value:
            "<p>You were raised to be ambitious and always reach for the stars, leading you to progress quickly in your chosen field. You gain a 1st-level class feat for your class. You must meet the prerequisites, but you can select the feat later in the character creation process in order to determine which prerequisites you meet.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
        rules: [
          {
            adjustName: false,
            choices: {
              filter: [
                "item:level:1",
                "item:category:class",
                "item:trait:{actor|system.details.class.trait}",
                {
                  or: ["feature:dragon-instinct", { not: "item:draconic-arrogance" }],
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
            selection: "Compendium.pf2e.feats-srd.Item.loC0wIyIrsG43Zrd",
          },
          {
            key: "GrantItem",
            uuid: "{item|flags.pf2e.rulesSelections.naturalAmbition}",
            flag: "alchemicalFamiliar",
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
        level: { value: 1 },
        traits: { value: ["human"], rarity: "common" },
        category: "ancestry",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: { value: "passive" },
        actions: { value: null },
        prerequisites: { value: [] },
        location: "ancestry-1",
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.feats-srd.Item.PodajLVxqYSAqVox",
        },
        pf2e: {
          itemGrants: {
            alchemicalFamiliar: {
              id: "ryvfCMKkAsa6zyGU",
              onDelete: "detach",
            },
          },
        },
        "scene-packer": { hash: "4d3564e81fc129ec80a6b8c007ad495ff47f9a1b" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, XUVsOh1Kzgk6WvPB: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690101545002,
        modifiedTime: 1690101545002,
        lastModifiedBy: "XUVsOh1Kzgk6WvPB",
      },
    },
    {
      img: "systems/pf2e/icons/features/feats/feats.webp",
      name: "Alchemical Familiar",
      system: {
        description: {
          gm: "",
          value:
            "<p>You have used alchemy to create life, a simple creature formed from alchemical materials, reagents, and a bit of your own blood. This alchemical familiar appears to be a small creature of flesh and blood, though it might have some unusual or distinguishing aspects depending on your creative process. Like other familiars, your alchemical familiar assists you in your laboratory and on adventures. The familiar uses your Intelligence modifier to determine its Perception, Acrobatics, and Stealth modifiers.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
        rules: [
          {
            key: "ActiveEffectLike",
            mode: "upgrade",
            path: "system.attributes.familiarAbilities.value",
            priority: 9,
            value: 2,
          },
        ],
        slug: "alchemical-familiar",
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
        level: { value: 1 },
        traits: { value: ["alchemist"], rarity: "common" },
        category: "class",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: { value: "passive" },
        actions: { value: null },
        prerequisites: { value: [] },
        location: null,
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.feats-srd.Item.loC0wIyIrsG43Zrd",
        },
        pf2e: {
          grantedBy: { id: "Hc1dm3ZGNMvyCIxz", onDelete: "cascade" },
        },
        "scene-packer": { hash: "825f036010392945aab99d10ca1d0a04a7aa2bbc" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, XUVsOh1Kzgk6WvPB: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690101545002,
        modifiedTime: 1690101545002,
        lastModifiedBy: "XUVsOh1Kzgk6WvPB",
      },
      _id: "ryvfCMKkAsa6zyGU",
    },
    {
      _id: "XVZPepajsGsxG0sJ",
      img: "systems/pf2e/icons/features/feats/feats.webp",
      name: "Quick Bomber",
      system: {
        description: {
          gm: "",
          value:
            "<p>You keep your bombs in easy-to-reach pouches from which you draw without thinking. You @UUID[Compendium.pf2e.actionspf2e.Item.pvQ5rY2zrtPI614F]{Interact} to draw a bomb, then Strike with it.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
        rules: [],
        slug: "quick-bomber",
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
        level: { value: 1 },
        traits: { value: ["alchemist"], rarity: "common" },
        category: "class",
        onlyLevel1: false,
        maxTakable: 1,
        actionType: { value: "action" },
        actions: { value: 1 },
        prerequisites: { value: [] },
        location: "class-1",
      },
      type: "feat",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.feats-srd.Item.xbg1scOIT7RI9Fij",
        },
        "scene-packer": { hash: "f3735d55ac5003f2f6480eaa2a2f49f4738e1e42" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, XUVsOh1Kzgk6WvPB: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690101577137,
        modifiedTime: 1690101577137,
        lastModifiedBy: "XUVsOh1Kzgk6WvPB",
      },
    },
    {
      type: "lore",
      img: "systems/pf2e/icons/default-icons/lore.svg",
      name: "engineering",
      effects: [],
      system: {
        description: { gm: "", value: "" },
        source: { value: "" },
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
        mod: { value: 0 },
        proficient: { value: 1 },
      },
      _id: "OtTGGl0WJIiSzuMJ",
      folder: null,
      sort: 0,
      ownership: { default: 0, XUVsOh1Kzgk6WvPB: 3 },
      flags: {
        "scene-packer": { hash: "da5f6a16937eb70d97d898e5db3f08ff278423b6" },
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690101681268,
        modifiedTime: 1690101691555,
        lastModifiedBy: "XUVsOh1Kzgk6WvPB",
      },
    },
    {
      img: "systems/pf2e/icons/equipment/weapons/bomb-launcher.webp",
      name: "Bomb Launcher",
      system: {
        description: {
          gm: "",
          value:
            "<p>This long, hollow tube is held in two hands and braced over the shoulder. Inside, it contains a small metal basket sized to hold alchemical bombs. A chute in the top delivers an alchemical bomb into the internal basket, while a lever on the underside pulls the basket back and locks it in place. Loading an alchemical bomb into a bomb launcher requires a single Interact action. With a pull of a trigger, the basket speeds forward, allowing you to Strike with the loaded alchemical bomb over long distances. Bombs fired with a bomb launcher have a range increment of 60 feet.</p>",
        },
        source: { value: "Pathfinder Guns &Gears" },
        rules: [
          {
            definition: ["item:base:alchemical-bomb"],
            key: "AdjustStrike",
            mode: "upgrade",
            predicate: ["bomb-launcher"],
            property: "range-increment",
            value: 60,
          },
          {
            domain: "all",
            key: "RollOption",
            option: "bomb-launcher",
            toggleable: true,
          },
        ],
        slug: "bomb-launcher",
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
        level: { value: 1 },
        traits: { value: [], rarity: "uncommon", otherTags: [] },
        quantity: 1,
        baseItem: null,
        hp: { value: 0, max: 0 },
        hardness: 0,
        weight: { value: "1" },
        equippedBulk: { value: "" },
        price: { value: { gp: 20 } },
        equipped: { carryType: "worn", invested: null },
        stackGroup: null,
        negateBulk: { value: "0" },
        containerId: "null",
        preciousMaterial: { value: null },
        preciousMaterialGrade: { value: null },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: { description: { value: "" } },
          },
          misidentified: {},
        },
        usage: { value: "held-in-two-hands" },
      },
      type: "equipment",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.ApMC9PSOnj7cPAGL",
        },
        "scene-packer": { hash: "b3cecf0437fd51de17e7aeda4491ba7f6d72c983" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, f5TQXRGH0xdq9tP0: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690111539232,
        modifiedTime: 1690111539232,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
      _id: "XX9B4LqfyxbPIp9w",
    },
    {
      _id: "wwJrSlI8lTC4Ybd3",
      img: "systems/pf2e/icons/equipment/armor/studded-leather-armor.webp",
      name: "Studded Leather Armor",
      system: {
        description: {
          gm: "",
          value:
            "<p>This leather armor is reinforced with metal studs and sometimes small metal plates, providing most of the flexibility of leather armor with more robust protection.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
        rules: [],
        slug: "studded-leather-armor",
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
        level: { value: 0 },
        traits: { value: [], rarity: "common", otherTags: [] },
        quantity: 1,
        baseItem: "studded-leather-armor",
        hp: { value: 0, max: 0 },
        hardness: 0,
        weight: { value: "2" },
        equippedBulk: { value: "1" },
        price: { value: { gp: 3 } },
        equipped: {
          carryType: "worn",
          invested: null,
          inSlot: true,
          handsHeld: 0,
        },
        stackGroup: null,
        negateBulk: { value: "0" },
        containerId: null,
        preciousMaterial: { value: "" },
        preciousMaterialGrade: { value: "" },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: { description: { value: "" } },
          },
          misidentified: {},
        },
        usage: { value: "wornarmor" },
        category: "light",
        group: "leather",
        acBonus: 2,
        strength: 1,
        dexCap: 3,
        checkPenalty: -1,
        speedPenalty: null,
        potencyRune: { value: 0 },
        resiliencyRune: { value: "" },
        propertyRune1: { value: "" },
        propertyRune2: { value: "" },
        propertyRune3: { value: "" },
        propertyRune4: { value: "" },
        potency: {},
      },
      type: "armor",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.ewQZ0VeL38v3qFnN",
        },
        "scene-packer": { hash: "6ac1aa916f1ec2a6d0d65090a2c6c8b20cc3fdfd" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, f5TQXRGH0xdq9tP0: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.3",
        coreVersion: "11.306",
        createdTime: 1690111554747,
        modifiedTime: 1690716353473,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
    },
    {
      _id: "in9AYn24XXq19ia4",
      img: "systems/pf2e/icons/equipment/weapons/dagger.webp",
      name: "Dagger",
      system: {
        description: {
          gm: "",
          value: "<p>This small, bladed weapon is held in one hand and used to stab a creature in close combat. It can also be thrown.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
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
        level: { value: 0 },
        traits: {
          value: ["agile", "finesse", "thrown-10", "versatile-s"],
          rarity: "common",
          otherTags: [],
        },
        quantity: 1,
        baseItem: "dagger",
        hp: { value: 0, max: 0 },
        hardness: 0,
        weight: { value: "L" },
        equippedBulk: { value: "" },
        price: { value: { sp: 2 } },
        equipped: { carryType: "worn", invested: null, handsHeld: 0 },
        stackGroup: null,
        negateBulk: { value: "0" },
        containerId: null,
        preciousMaterial: { value: null },
        preciousMaterialGrade: { value: null },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: { description: { value: "" } },
          },
          misidentified: {},
        },
        usage: { value: "held-in-one-hand" },
        category: "simple",
        group: "knife",
        bonus: { value: 0 },
        damage: {
          dice: 1,
          die: "d4",
          damageType: "piercing",
          persistent: null,
        },
        bonusDamage: { value: 0 },
        splashDamage: { value: 0 },
        range: null,
        reload: { value: "-" },
        MAP: { value: "" },
        potencyRune: { value: 0 },
        strikingRune: { value: "" },
        specific: { value: false },
        propertyRune1: { value: null },
        propertyRune2: { value: null },
        propertyRune3: { value: null },
        propertyRune4: { value: null },
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
        "scene-packer": { hash: "8ae1c47bf8087aabf2882a8f5b3b24dd5cda27e2" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, f5TQXRGH0xdq9tP0: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690111554747,
        modifiedTime: 1690111554747,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
    },
    {
      _id: "rbV0HBsr28lURwVy",
      img: "systems/pf2e/icons/equipment/adventuring-gear/caltrops.webp",
      name: "Caltrops",
      system: {
        description: {
          gm: "",
          value:
            "<p>These four‑pronged metal spikes can cause damage to a creature's feet. You can scatter caltrops in an empty square adjacent to you with an Interact action. The first creature that moves into that square must succeed at a @Check[type:acrobatics|dc:14|name:Avoid Caltrops] check or take 1d4 piercing damage and [[/r 1[bleed]]] damage. A creature taking persistent bleed damage from caltrops takes a -5‑foot penalty to its Speed. Spending an Interact action to pluck the caltrops free reduces the DC to stop the bleeding. Once a creature takes damage from caltrops, enough caltrops are ruined that other creatures moving into the square are safe. Deployed caltrops can be salvaged and reused if no creatures took damage from them. Otherwise, enough caltrops are ruined that they can't be salvaged.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
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
        level: { value: 0 },
        traits: { value: [], rarity: "common", otherTags: [] },
        quantity: 2,
        baseItem: null,
        hp: { value: 0, max: 0 },
        hardness: 0,
        weight: { value: "L" },
        equippedBulk: { value: "" },
        price: { value: { sp: 3 } },
        equipped: { carryType: "worn", invested: null },
        stackGroup: null,
        negateBulk: { value: "" },
        containerId: null,
        preciousMaterial: { value: "" },
        preciousMaterialGrade: { value: "" },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: { description: { value: "" } },
          },
          misidentified: {},
        },
        usage: { value: "held-in-one-hand" },
      },
      type: "equipment",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.7fSnvJ2xoSfa6JXD",
        },
        "scene-packer": { hash: "f9eeecc379e09482285fd451f72b81f34f3767f4" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, f5TQXRGH0xdq9tP0: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690111554747,
        modifiedTime: 1690111554747,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
    },
    {
      _id: "cosrsUPkHm7azt4U",
      img: "systems/pf2e/icons/equipment/adventuring-gear/waterskin.webp",
      name: "Waterskin",
      system: {
        description: {
          gm: "",
          value: "<p>When it's full, a waterskin contains roughly 1 day's worth of water for a Small or Medium creature.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
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
        level: { value: 0 },
        traits: { value: [], rarity: "common", otherTags: [] },
        quantity: 1,
        baseItem: null,
        hp: { value: 0, max: 0 },
        hardness: 0,
        weight: { value: "L" },
        equippedBulk: { value: "" },
        price: { value: { cp: 5 } },
        equipped: { carryType: "worn", invested: null, handsHeld: 0 },
        stackGroup: null,
        negateBulk: { value: "0" },
        containerId: null,
        preciousMaterial: { value: "" },
        preciousMaterialGrade: { value: "" },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: { description: { value: "" } },
          },
          misidentified: {},
        },
        usage: { value: "held-in-one-hand" },
      },
      type: "equipment",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.VnPh324pKwd2ZB66",
        },
        "scene-packer": { hash: "7571cb2bbecfd958fa73ce34f6f478f6f1c9c4c1" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, f5TQXRGH0xdq9tP0: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.3",
        coreVersion: "11.306",
        createdTime: 1690111554747,
        modifiedTime: 1690716281119,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
    },
    {
      _id: "UqHrKDJzkXTRo96z",
      img: "systems/pf2e/icons/equipment/adventuring-gear/chalk.webp",
      name: "Chalk",
      system: {
        description: { gm: "", value: "" },
        source: { value: "Pathfinder Core Rulebook" },
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
        level: { value: 0 },
        traits: { value: [], rarity: "common", otherTags: [] },
        quantity: 1,
        baseItem: null,
        hp: { value: 0, max: 0 },
        hardness: 0,
        weight: { value: "-" },
        equippedBulk: { value: "" },
        price: { value: { cp: 1 }, per: 10 },
        equipped: { carryType: "worn", handsHeld: 0 },
        stackGroup: null,
        negateBulk: { value: "0" },
        containerId: null,
        preciousMaterial: { value: "" },
        preciousMaterialGrade: { value: "" },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: { description: { value: "" } },
          },
          misidentified: {},
        },
        usage: { value: "held-in-one-hand" },
        consumableType: { value: "other" },
        charges: { value: 1, max: 1 },
        consume: { value: "" },
        autoDestroy: { value: true },
        spell: null,
      },
      type: "consumable",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.xShIDyydOMkGvGNb",
        },
        "scene-packer": { hash: "255bdac59ebf3999418f5078f138e8a182f9ad10" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, f5TQXRGH0xdq9tP0: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.3",
        coreVersion: "11.306",
        createdTime: 1690111554747,
        modifiedTime: 1690716325671,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
    },
    {
      _id: "j9JHHNmynobcNb0t",
      img: "systems/pf2e/icons/equipment/adventuring-gear/rations.webp",
      name: "Rations",
      system: {
        description: { gm: "", value: "" },
        source: { value: "Pathfinder Core Rulebook" },
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
        level: { value: 0 },
        traits: { value: [], rarity: "common", otherTags: [] },
        quantity: 1,
        baseItem: null,
        hp: { value: 0, max: 0 },
        hardness: 0,
        weight: { value: "L" },
        equippedBulk: { value: "" },
        price: { value: { sp: 4 } },
        equipped: { carryType: "worn", handsHeld: 0 },
        stackGroup: null,
        negateBulk: { value: "0" },
        containerId: null,
        preciousMaterial: { value: null },
        preciousMaterialGrade: { value: null },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: { description: { value: "" } },
          },
          misidentified: {},
        },
        usage: { value: "held-in-one-hand" },
        consumableType: { value: "other" },
        charges: { value: 7, max: 7 },
        consume: { value: "" },
        autoDestroy: { value: true },
        spell: null,
      },
      type: "consumable",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.L9ZV076913otGtiB",
        },
        "scene-packer": { hash: "7c7a6f85fcc623d73c116b5876d389f58457cbb5" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, f5TQXRGH0xdq9tP0: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.3",
        coreVersion: "11.306",
        createdTime: 1690111554747,
        modifiedTime: 1690716335912,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
    },
    {
      _id: "12XjCb2xbh4LhoqI",
      img: "systems/pf2e/icons/equipment/weapons/sling-bullets.webp",
      name: "Sling Bullets",
      system: {
        description: {
          gm: "",
          value: "<p>These are small metal balls, typically either iron or lead, designed to be used as ammunition in slings.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
        rules: [],
        slug: "sling-bullets",
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
        level: { value: 0 },
        traits: { value: [], rarity: "common", otherTags: [] },
        quantity: 18,
        baseItem: null,
        hp: { value: 0, max: 0 },
        hardness: 0,
        weight: { value: "L" },
        equippedBulk: { value: "" },
        price: { value: { cp: 1 }, per: 10 },
        equipped: { carryType: "worn", handsHeld: 0 },
        stackGroup: "slingBullets",
        negateBulk: { value: "0" },
        containerId: null,
        preciousMaterial: { value: "" },
        preciousMaterialGrade: { value: "" },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: { description: { value: "" } },
          },
          misidentified: {},
        },
        usage: { value: "held-in-one-hand" },
        consumableType: { value: "ammo" },
        charges: { value: 0, max: 0 },
        consume: { value: "" },
        autoDestroy: { value: true },
        spell: null,
      },
      type: "consumable",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.MKSeXwUm56c15MZa",
        },
        "scene-packer": { hash: "9b526024be7becf1fe98c93512681a0f58165dab" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, f5TQXRGH0xdq9tP0: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.3",
        coreVersion: "11.306",
        createdTime: 1690111554747,
        modifiedTime: 1690721362203,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
    },
    {
      _id: "ncFxJejSrU2W2Ong",
      img: "systems/pf2e/icons/equipment/weapons/sling.webp",
      name: "Sling",
      system: {
        description: {
          gm: "",
          value: "<p>Little more than a leather cup attached to a pair of straps, a sling can be used to fling smooth stones or sling bullets at a range.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
        rules: [],
        slug: "sling",
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
        level: { value: 0 },
        traits: {
          value: ["propulsive"],
          rarity: "common",
          otherTags: [],
        },
        quantity: 1,
        baseItem: "sling",
        hp: { value: 0, max: 0 },
        hardness: 0,
        weight: { value: "L" },
        equippedBulk: { value: "" },
        price: { value: {} },
        equipped: { carryType: "held", invested: null, handsHeld: 1 },
        stackGroup: null,
        negateBulk: { value: "0" },
        containerId: null,
        preciousMaterial: { value: null },
        preciousMaterialGrade: { value: null },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: { description: { value: "" } },
          },
          misidentified: {},
        },
        usage: { value: "held-in-one-hand" },
        category: "simple",
        group: "sling",
        bonus: { value: 0 },
        damage: {
          dice: 1,
          die: "d6",
          damageType: "bludgeoning",
          persistent: null,
        },
        bonusDamage: { value: 0 },
        splashDamage: { value: 0 },
        range: 50,
        reload: { value: "1" },
        MAP: { value: "" },
        potencyRune: { value: null },
        strikingRune: { value: "" },
        specific: { value: false },
        propertyRune1: { value: "" },
        propertyRune2: { value: "" },
        propertyRune3: { value: "" },
        propertyRune4: { value: "" },
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
        selectedAmmoId: "12XjCb2xbh4LhoqI",
      },
      type: "weapon",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.UCH4myuFnokGv0vF",
        },
        "scene-packer": { hash: "0d2dd2529da2f4ca75bd4ed73fa677d923c34288" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, f5TQXRGH0xdq9tP0: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.3",
        coreVersion: "11.306",
        createdTime: 1690111554747,
        modifiedTime: 1690721321185,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
    },
    {
      _id: "GLQaQnnRMsRONp21",
      img: "systems/pf2e/icons/equipment/adventuring-gear/basic-crafters-book.webp",
      name: "Basic Crafter's Book",
      system: {
        description: {
          gm: "",
          value: "<p>This book contains the formulas for Crafting the 0-level common items in Chapter 6 of the core rulebook.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
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
        level: { value: 0 },
        traits: { value: [], rarity: "common", otherTags: [] },
        quantity: 1,
        baseItem: null,
        hp: { value: 0, max: 0 },
        hardness: 0,
        weight: { value: "L" },
        equippedBulk: { value: "" },
        price: { value: { sp: 1 } },
        equipped: { carryType: "worn", invested: null },
        stackGroup: null,
        negateBulk: { value: "" },
        containerId: null,
        preciousMaterial: { value: "" },
        preciousMaterialGrade: { value: "" },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: { description: { value: "" } },
          },
          misidentified: {},
        },
        usage: { value: "held-in-one-hand" },
      },
      type: "equipment",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.w4Hd6nunVVqw3GWj",
        },
        "scene-packer": { hash: "dbe20a0946fdbd074944c1ba12b4fcea703af2f7" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, f5TQXRGH0xdq9tP0: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.1",
        coreVersion: "11.306",
        createdTime: 1690111554747,
        modifiedTime: 1690111554747,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
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
        source: { value: "Pathfinder Guns &Gears" },
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
        level: { value: 0 },
        traits: {
          value: ["agile", "repeating"],
          rarity: "uncommon",
          otherTags: [],
        },
        quantity: 1,
        baseItem: "air-repeater",
        hp: { value: 0, max: 0 },
        hardness: 0,
        weight: { value: "L" },
        equippedBulk: { value: "" },
        price: { value: { gp: 5 } },
        equipped: { carryType: "held", invested: null, handsHeld: 1 },
        stackGroup: null,
        negateBulk: { value: "0" },
        containerId: null,
        preciousMaterial: { value: null },
        preciousMaterialGrade: { value: null },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "Unusual Air Repeater",
            img: "systems/pf2e/icons/unidentified_item_icons/weapon.webp",
            data: { description: { value: "" } },
          },
          misidentified: {},
        },
        usage: { value: "held-in-one-hand" },
        category: "simple",
        group: "firearm",
        bonus: { value: 0 },
        damage: {
          dice: 1,
          die: "d8",
          damageType: "piercing",
          persistent: { number: 1, faces: 4, type: "bleed" },
        },
        bonusDamage: { value: 0 },
        splashDamage: { value: 0 },
        range: 30,
        reload: { value: "0" },
        MAP: { value: "" },
        potencyRune: { value: null },
        strikingRune: { value: null },
        specific: { value: false },
        propertyRune1: { value: null },
        propertyRune2: { value: null },
        propertyRune3: { value: null },
        propertyRune4: { value: null },
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
        selectedAmmoId: "A6qJBcPbvQcEnS0W",
      },
      type: "weapon",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.SzUynRs4HVtnpnel",
        },
        "scene-packer": { hash: "e19e549a4961148f7d5a66e5c7636768d7af486f" },
      },
      effects: [],
      folder: null,
      sort: 100000,
      ownership: { default: 0, f5TQXRGH0xdq9tP0: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.3",
        coreVersion: "11.306",
        createdTime: 1690098339895,
        modifiedTime: 1690721327609,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
      _id: "hH2i3WzxPDDzt1Cp",
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
        source: { value: "Pathfinder Guns &Gears" },
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
        level: { value: 0 },
        traits: { value: [], rarity: "common", otherTags: [] },
        quantity: 3,
        baseItem: null,
        hp: { value: 0, max: 0 },
        hardness: 0,
        weight: { value: "L" },
        equippedBulk: { value: "" },
        price: { value: { sp: 6 } },
        equipped: { carryType: "worn", handsHeld: 0 },
        stackGroup: null,
        negateBulk: { value: "0" },
        containerId: "null",
        preciousMaterial: { value: null },
        preciousMaterialGrade: { value: null },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "Unusual Ammunition",
            img: "systems/pf2e/icons/unidentified_item_icons/ammunition.webp",
            data: { description: { value: "" } },
          },
          misidentified: {},
        },
        usage: { value: "held-in-one-hand" },
        consumableType: { value: "ammo" },
        charges: { value: 8, max: 8 },
        consume: { value: "" },
        autoDestroy: { value: true },
        spell: null,
      },
      type: "consumable",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.hXZrMJPlw1UvVzjC",
        },
        "scene-packer": { hash: "af1cbd2e2e95ff591dcd6736d2b427443d0e0cf2" },
      },
      effects: [],
      folder: null,
      sort: 150000,
      ownership: { default: 0, f5TQXRGH0xdq9tP0: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.3.1",
        coreVersion: "11.307",
        createdTime: 1690098691470,
        modifiedTime: 1691316776962,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
      _id: "A6qJBcPbvQcEnS0W",
    },
    {
      type: "action",
      img: "systems/pf2e/icons/default-icons/action.svg",
      name: "Reload",
      system: {
        description: { gm: "", value: "" },
        source: { value: "" },
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
        traits: { value: [] },
        actionType: { value: "action" },
        category: "interaction",
        actions: { value: 1 },
        requirements: { value: "" },
        trigger: { value: "" },
        deathNote: false,
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, f5TQXRGH0xdq9tP0: 3 },
      flags: {
        "scene-packer": { hash: "547d7932a077b7530e9d7d1a3075d3b1edcdca10" },
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
            ownership: { default: 0 },
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
        core: { sourceId: "Actor.395DYTSr6p0sjObD.Item.XkQVGuZA7dQgLLgL" },
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.3",
        coreVersion: "11.306",
        createdTime: 1690705248074,
        modifiedTime: 1690705422853,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
      _id: "ELMHIQi3iISIXelD",
    },
    {
      _id: "edW0u7QfiyADkqet",
      img: "systems/pf2e/icons/equipment/alchemical-items/alchemical-bombs/tanglefoot-bag.webp",
      name: "Tanglefoot Bag (Lesser)",
      system: {
        description: {
          gm: "",
          value:
            "<p>A tanglefoot bag is filled with sticky substances. When you hit a creature with a tanglefoot bag, that creature takes a -10-foot status penalty to its Speeds for 1 minute. The Escape DC is 17.</p>\n<p>On a critical hit, a creature in contact with a solid surface becomes stuck to the surface and @UUID[Compendium.pf2e.conditionitems.Item.eIcWbB5o3pP6OIMe]{Immobilized} for 1 round, and a creature flying via wings has its wings tangled, causing it to fall safely to the ground and become unable to Fly again for 1 round. Tanglefoot bags are not effective when used on a creature that is in water.</p>\n<p>The target can end any effects by Escaping or spending a total of 3 actions to carefully remove the sticky substances. These Interact actions don't have to be consecutive, and other creatures can provide the actions as well.</p>",
        },
        source: { value: "Pathfinder Core Rulebook" },
        rules: [
          {
            key: "Note",
            outcome: ["success"],
            selector: "{item|_id}-attack",
            text: "PF2E.BombNotes.TanglefootBag.Lesser.success",
            title: "ITEM.TypeEffect",
          },
          {
            key: "Note",
            outcome: ["criticalSuccess"],
            selector: "{item|_id}-attack",
            text: "PF2E.BombNotes.TanglefootBag.Lesser.criticalSuccess",
            title: "ITEM.TypeEffect",
          },
        ],
        slug: "tanglefoot-bag-lesser",
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
        level: { value: 1 },
        traits: {
          value: ["alchemical", "bomb", "consumable", "infused"],
          rarity: "common",
          otherTags: [],
        },
        quantity: 0,
        baseItem: "alchemical-bomb",
        hp: { value: 0, max: 0 },
        hardness: 0,
        weight: { value: "L" },
        equippedBulk: { value: "" },
        price: { value: { gp: 3 } },
        equipped: {
          carryType: "dropped",
          invested: null,
          handsHeld: 0,
        },
        stackGroup: null,
        negateBulk: { value: "0" },
        containerId: null,
        preciousMaterial: { value: null },
        preciousMaterialGrade: { value: null },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: { description: { value: "" } },
          },
          misidentified: {},
        },
        usage: { value: "held-in-one-hand" },
        category: "martial",
        group: "bomb",
        bonus: { value: 0 },
        damage: {
          dice: 0,
          die: "",
          damageType: "bludgeoning",
          persistent: null,
        },
        bonusDamage: { value: 0 },
        splashDamage: { value: 0 },
        range: 20,
        reload: { value: "-" },
        MAP: { value: "" },
        potencyRune: { value: null },
        strikingRune: { value: "" },
        specific: { value: false },
        propertyRune1: { value: "" },
        propertyRune2: { value: "" },
        propertyRune3: { value: "" },
        propertyRune4: { value: "" },
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
        temporary: true,
      },
      type: "weapon",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.T6Appwwl6nUl56Xj",
        },
        "scene-packer": { hash: "5a2b7b1e58504ffcec33e8d70bf0c32ca62a09ab" },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, f5TQXRGH0xdq9tP0: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.3",
        coreVersion: "11.306",
        createdTime: 1690719630570,
        modifiedTime: 1690721305544,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
    },
    {
      _id: "J9BxEFZNgKlKxcyq",
      name: "Loaded (Sling) (Sling Bullets)",
      type: "effect",
      img: "systems/pf2e/icons/equipment/weapons/bolts.webp",
      effects: [],
      folder: null,
      sort: 0,
      flags: {
        core: {
          sourceId: "Compendium.pf2e-ranged-combat.effects.Item.nEqdxZMAHlYVXI0Z",
        },
        "pf2e-ranged-combat": {
          targetId: "ncFxJejSrU2W2Ong",
          ammunition: {
            name: "Sling Bullets",
            img: "systems/pf2e/icons/equipment/weapons/sling-bullets.webp",
            id: "12XjCb2xbh4LhoqI",
            sourceId: "Compendium.pf2e.equipment-srd.Item.MKSeXwUm56c15MZa",
          },
        },
        pf2e: { rulesSelections: { weapon: "ncFxJejSrU2W2Ong" } },
        "scene-packer": { hash: "dabfba0b3bc9cec4edbca737e2e2543ed1c61041" },
      },
      system: {
        description: {
          gm: "",
          value: "<p>Your weapon is loaded and ready to fire.</p>",
        },
        source: { value: "" },
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
        traits: { value: [], rarity: "common" },
        level: { value: 1 },
        duration: {
          value: -1,
          unit: "unlimited",
          sustained: false,
          expiry: "turn-start",
        },
        start: { value: -85203126693, initiative: 19 },
        tokenIcon: { show: true },
        badge: null,
        context: null,
        target: null,
      },
      ownership: {
        default: 0,
        "4siyeA20BbSN5bfQ": 3,
        f5TQXRGH0xdq9tP0: 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.2.3",
        coreVersion: "11.306",
        createdTime: 1690721362013,
        modifiedTime: 1690721362013,
        lastModifiedBy: "f5TQXRGH0xdq9tP0",
      },
    },
    {
      _id: "6zm7exqVf1Igzjzl",
      img: "systems/pf2e/icons/equipment/alchemical-items/alchemical-bombs/blight-bomb.webp",
      name: "Blight Bomb (Lesser)",
      system: {
        description: {
          gm: "",
          value:
            '<p>    <strong>Usage</strong>    held in 1 hand</p>\n<p>    <strong>Activate</strong>    <span class="pf2-icon">A</span>    Strike</p>\n<p>Blight bombs contain volatile toxic chemicals that rot flesh. A blight bomb deals 1d6 poison damage, 1d4 persistent poison damage, and 1 poison splash damage.</p>',
        },
        source: { value: "Pathfinder Advanced Player's Guide" },
        rules: [],
        slug: "blight-bomb-lesser",
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
        level: { value: 1 },
        traits: {
          value: ["alchemical", "bomb", "consumable", "poison", "splash", "infused"],
          rarity: "common",
          otherTags: [],
        },
        quantity: 0,
        baseItem: "alchemical-bomb",
        hp: { value: 0, max: 0 },
        hardness: 0,
        weight: { value: "L" },
        equippedBulk: { value: "" },
        price: { value: { gp: 3 } },
        equipped: { carryType: "held", invested: null, handsHeld: 1 },
        stackGroup: null,
        negateBulk: { value: "0" },
        containerId: null,
        preciousMaterial: { value: null },
        preciousMaterialGrade: { value: null },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: { description: { value: "" } },
          },
          misidentified: {},
        },
        usage: { value: "held-in-one-hand" },
        category: "martial",
        group: "bomb",
        bonus: { value: null },
        damage: {
          dice: 1,
          die: "d6",
          damageType: "poison",
          persistent: { faces: 4, number: 1, type: "poison" },
        },
        bonusDamage: { value: 0 },
        splashDamage: { value: 1 },
        range: 20,
        reload: { value: "-" },
        MAP: { value: "" },
        potencyRune: { value: null },
        strikingRune: { value: null },
        specific: { value: false },
        propertyRune1: { value: null },
        propertyRune2: { value: null },
        propertyRune3: { value: null },
        propertyRune4: { value: null },
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
        temporary: true,
      },
      type: "weapon",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.j8ajvNqyyQGBpBch",
        },
        "scene-packer": { hash: "a7c63a274ba11fa96534a50787b51480b5045d84" },
        "pf2e-ranged-combat": { groupIds: ["6zm7exqVf1Igzjzl"] },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.3.1",
        coreVersion: "11.307",
        createdTime: 1690716034064,
        modifiedTime: 1691315083440,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
    },
    {
      _id: "j6OEACKoIxnEwanm",
      img: "systems/pf2e/icons/equipment/alchemical-items/alchemical-bombs/blight-bomb.webp",
      name: "Blight Bomb (Lesser)",
      system: {
        description: {
          gm: "",
          value:
            '<p>    <strong>Usage</strong>    held in 1 hand</p>\n<p>    <strong>Activate</strong>    <span class="pf2-icon">A</span>    Strike</p>\n<p>Blight bombs contain volatile toxic chemicals that rot flesh. A blight bomb deals 1d6 poison damage, 1d4 persistent poison damage, and 1 poison splash damage.</p>',
        },
        source: { value: "Pathfinder Advanced Player's Guide" },
        rules: [],
        slug: "blight-bomb-lesser",
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
        level: { value: 1 },
        traits: {
          value: ["alchemical", "bomb", "consumable", "poison", "splash", "infused"],
          rarity: "common",
          otherTags: [],
        },
        quantity: 4,
        baseItem: "alchemical-bomb",
        hp: { value: 0, max: 0 },
        hardness: 0,
        weight: { value: "L" },
        equippedBulk: { value: "" },
        price: { value: { gp: 3 } },
        equipped: { carryType: "worn", invested: null, handsHeld: 0 },
        stackGroup: null,
        negateBulk: { value: "0" },
        containerId: null,
        preciousMaterial: { value: null },
        preciousMaterialGrade: { value: null },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: { description: { value: "" } },
          },
          misidentified: {},
        },
        usage: { value: "held-in-one-hand" },
        category: "martial",
        group: "bomb",
        bonus: { value: null },
        damage: {
          dice: 1,
          die: "d6",
          damageType: "poison",
          persistent: { faces: 4, number: 1, type: "poison" },
        },
        bonusDamage: { value: 0 },
        splashDamage: { value: 1 },
        range: 20,
        reload: { value: "-" },
        MAP: { value: "" },
        potencyRune: { value: null },
        strikingRune: { value: null },
        specific: { value: false },
        propertyRune1: { value: null },
        propertyRune2: { value: null },
        propertyRune3: { value: null },
        propertyRune4: { value: null },
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
        temporary: true,
      },
      type: "weapon",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.j8ajvNqyyQGBpBch",
        },
        "scene-packer": { hash: "93cf91b10c514348e7c425521daa4d61021024bc" },
        "pf2e-ranged-combat": {
          groupIds: ["j6OEACKoIxnEwanm", "789etoFvfEkJfdYF"],
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: { default: 0, f5TQXRGH0xdq9tP0: 3 },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.3.1",
        coreVersion: "11.307",
        createdTime: 1690716034064,
        modifiedTime: 1691319667641,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
    },
    {
      _id: "789etoFvfEkJfdYF",
      img: "systems/pf2e/icons/equipment/alchemical-items/alchemical-bombs/blight-bomb.webp",
      name: "Blight Bomb (Lesser)",
      system: {
        description: {
          gm: "",
          value:
            '<p>    <strong>Usage</strong>    held in 1 hand</p>\n<p>    <strong>Activate</strong>    <span class="pf2-icon">A</span>    Strike</p>\n<p>Blight bombs contain volatile toxic chemicals that rot flesh. A blight bomb deals 1d6 poison damage, 1d4 persistent poison damage, and 1 poison splash damage.</p>',
        },
        source: { value: "Pathfinder Advanced Player's Guide" },
        rules: [],
        slug: "blight-bomb-lesser",
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
        level: { value: 1 },
        traits: {
          value: ["alchemical", "bomb", "consumable", "poison", "splash", "infused"],
          rarity: "common",
          otherTags: [],
        },
        quantity: 0,
        baseItem: "alchemical-bomb",
        hp: { value: 0, max: 0 },
        hardness: 0,
        weight: { value: "L" },
        equippedBulk: { value: "" },
        price: { value: { gp: 3 } },
        equipped: { carryType: "held", invested: null, handsHeld: 1 },
        stackGroup: null,
        negateBulk: { value: "0" },
        containerId: null,
        preciousMaterial: { value: null },
        preciousMaterialGrade: { value: null },
        size: "med",
        identification: {
          status: "identified",
          unidentified: {
            name: "",
            img: "",
            data: { description: { value: "" } },
          },
          misidentified: {},
        },
        usage: { value: "held-in-one-hand" },
        category: "martial",
        group: "bomb",
        bonus: { value: null },
        damage: {
          dice: 1,
          die: "d6",
          damageType: "poison",
          persistent: { faces: 4, number: 1, type: "poison" },
        },
        bonusDamage: { value: 0 },
        splashDamage: { value: 1 },
        range: 20,
        reload: { value: "-" },
        MAP: { value: "" },
        potencyRune: { value: null },
        strikingRune: { value: null },
        specific: { value: false },
        propertyRune1: { value: null },
        propertyRune2: { value: null },
        propertyRune3: { value: null },
        propertyRune4: { value: null },
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
        temporary: true,
      },
      type: "weapon",
      flags: {
        core: {
          sourceId: "Compendium.pf2e.equipment-srd.Item.j8ajvNqyyQGBpBch",
        },
        "scene-packer": { hash: "2c4417d6df03f016034d0a5a14a4b1625c79e0da" },
        "pf2e-ranged-combat": {
          groupIds: ["j6OEACKoIxnEwanm", "789etoFvfEkJfdYF"],
        },
      },
      effects: [],
      folder: null,
      sort: 0,
      ownership: {
        default: 0,
        f5TQXRGH0xdq9tP0: 3,
        "0L9jt9WlNNg7sw4c": 3,
      },
      _stats: {
        systemId: "pf2e",
        systemVersion: "5.3.1",
        coreVersion: "11.307",
        createdTime: 1690716034064,
        modifiedTime: 1691319672431,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
    },
    {
      _id: "NOlX51BmRzy2fulu",
      name: "Magazine Loaded (Modern 9mm) (Magazine with 8 Pellets) (4/8)",
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
          targetId: "hH2i3WzxPDDzt1Cp",
          name: "Magazine Loaded (Modern 9mm) (Magazine with 8 Pellets)",
          capacity: 8,
          remaining: 4,
          ammunitionName: "Magazine with 8 Pellets",
          ammunitionImg: "systems/pf2e/icons/default-icons/consumable.svg",
          ammunitionItemId: "A6qJBcPbvQcEnS0W",
          ammunitionSourceId: "Compendium.pf2e.equipment-srd.Item.hXZrMJPlw1UvVzjC",
        },
        pf2e: { rulesSelections: { weapon: "hH2i3WzxPDDzt1Cp" } },
        "scene-packer": { hash: "5dc3d5c57483858a9d3a80e01bcec6a20ede7497" },
      },
      system: {
        description: {
          gm: "",
          value: "<p>Your weapon is loaded with a magazine.</p>",
        },
        source: { value: "" },
        rules: [],
        slug: null,
        schema: {
          version: 0.854,
          lastMigration: {
            version: {
              schema: 0.716,
              foundry: "11.307",
              system: "5.3.1",
            },
          },
        },
        traits: { value: [], rarity: "common" },
        level: { value: 1 },
        duration: {
          value: -1,
          unit: "unlimited",
          sustained: false,
          expiry: "turn-start",
        },
        start: { value: -85203126681, initiative: 7 },
        tokenIcon: { show: true },
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
        createdTime: 1691316776866,
        modifiedTime: 1691321350955,
        lastModifiedBy: "0L9jt9WlNNg7sw4c",
      },
    },
  ],
  sort: 0,
  flags: {
    "scene-packer": { hash: "9af8e16c2276dac8de1579588e480fc9b2f36524" },
    "pf2e-fatigue": { startTime: 0, isFatigued: false },
    pf2e: { freeCrafting: false, quickAlchemy: true },
    pathmuncher: {
      pathbuilderId: 190370,
      addMoney: true,
      addFeats: true,
      addSpells: true,
      adjustBlendedSlots: true,
      addEquipment: true,
      addTreasure: true,
      addLores: true,
      addWeapons: true,
      addArmor: true,
      addDeity: true,
      addName: true,
      addClass: true,
      addBackground: true,
      addHeritage: true,
      addAncestry: true,
      addFamiliars: true,
      addFormulas: true,
      askForChoices: false,
    },
    "xdy-pf2e-workbench": {
      allVisible: true,
      actions: { commandAnAnimal: { visible: false } },
    },
  },
  _stats: {
    systemId: "pf2e",
    systemVersion: "5.3.1",
    coreVersion: "11.307",
    createdTime: 1690099868293,
    modifiedTime: 1691393059528,
    lastModifiedBy: "OjkBEDlhd5y4dqPM",
  },
  _id: "Ko2tvvMlCldlRFEf",
};
