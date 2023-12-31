export interface CurrentGameInfo {
  system: SystemInfo;
  world: WorldInfo;
}
export interface WorldInfo {
  id: string;
  title: string;
  description: string;
  authors: { name: string; url: string; flags: any }[];
  flags: any;
  media: any[];
  version: string;
  compatibility: { minimum: string; verified: string; maximum: string };
  scripts: string[];
  esmodules: string[];
  styles: string[];
  languages: { lang: string; name: string; path: string; flags: {} }[];
  packs: {
    name: string;
    label: string;
    banner: string;
    path: string;
    type: string;
    system: string;
    ownership: { PLAYER: PermissionLevelText; ASSISTANT: PermissionLevelText };
    flags: {};
  }[];
  packFolders: PackFolder[];
  relationships: { systems: []; requires: []; recommends: []; conflicts: []; flags: {} };
  socket: boolean;
  manifest: string;
  download: string;
  protected: boolean;
  exclusive: boolean;
  persistentStorage: boolean;
  system: string;
  coreVersion: string;
  systemVersion: string;
  background?:string;
  lastPlayed: string;
  playtime: number;
  nextSession: string | null;
  safeMode: boolean;
}

export interface SystemInfo {
  id: string;
  title: string;
  description: string;
  authors: { name: string; url: string; flags: any }[];
  url: string;
  license: string;
  bugs: string;
  changelog: string;
  flags: any;
  media: any[];
  version: string;
  compatibility: { minimum: string; verified: string; maximum: string };
  scripts: string[];
  esmodules: string[];
  styles: string[];
  languages: { lang: string; name: string; path: string; flags: {} }[];
  packs: {
    name: string;
    label: string;
    banner: string;
    path: string;
    type: string;
    system: string;
    ownership: { PLAYER: PermissionLevelText; ASSISTANT: PermissionLevelText };
    flags: {};
  }[];
  packFolders: PackFolder[];
  relationships: { systems: []; requires: []; recommends: []; conflicts: []; flags: {} };
  socket: boolean;
  manifest: string;
  download: string;
  protected: boolean;
  exclusive: boolean;
  persistentStorage: boolean;
  initiative: string;
  gridDistance: number;
  gridUnits: string;
  primaryTokenAttribute: string;
}
export interface PackFolder {
  name: string;
  sorting: string;
  packs: string[];
  folders: PackFolder[];
}

export type PermissionLevelText = "LIMITED" | "OWNER" | "OBSERVER" | "NONE";
const demo = {
  system: {
    id: "pf2e",
    title: "Pathfinder 2nd Edition",
    description: "A community contributed game system for Pathfinder Second Edition",
    authors: [{ name: "The PF2e System Developers", url: "https://github.com/foundryvtt/pf2e", flags: {} }],
    url: "https://github.com/foundryvtt/pf2e",
    license: "./LICENSE",
    bugs: "https://github.com/foundryvtt/pf2e/issues",
    changelog: "https://github.com/foundryvtt/pf2e/blob/release/CHANGELOG.md",
    flags: {},
    media: [],
    version: "5.3.1",
    compatibility: { minimum: "11.307", verified: "11.307", maximum: "11" },
    scripts: ["scripts/greensock/dist/gsap.min.js", "systems/pf2e/lib/tooltipster.bundle.min.js"],
    esmodules: ["systems/pf2e/vendor.mjs", "systems/pf2e/pf2e.mjs"],
    styles: ["systems/pf2e/styles/pf2e.css"],
    languages: [
      { lang: "en", name: "Main (English)", path: "systems/pf2e/lang/en.json", flags: {} },
      { lang: "en", name: "Actions (English)", path: "systems/pf2e/lang/action-en.json", flags: {} },
      { lang: "en", name: "Rules Elements (English)", path: "systems/pf2e/lang/re-en.json", flags: {} },
      { lang: "en", name: "Kingmaker (English)", path: "systems/pf2e/lang/kingmaker-en.json", flags: {} },
    ],
    packs: [
      {
        name: "abomination-vaults-bestiary",
        label: "Abomination Vaults",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/abomination-vaults-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "age-of-ashes-bestiary",
        label: "Age of Ashes",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/age-of-ashes-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "agents-of-edgewatch-bestiary",
        label: "Agents of Edgewatch",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/agents-of-edgewatch-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "book-of-the-dead-bestiary",
        label: "Book of the Dead",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/book-of-the-dead-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "blood-lords-bestiary",
        label: "Blood Lords",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/blood-lords-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "blog-bestiary",
        label: "Paizo Blog",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/blog-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "extinction-curse-bestiary",
        label: "Extinction Curse",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/extinction-curse-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "fall-of-plaguestone-bestiary",
        label: "Fall of Plaguestone",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/fall-of-plaguestone",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "fists-of-the-ruby-phoenix-bestiary",
        label: "Fists of the Ruby Phoenix",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/fists-of-the-ruby-phoenix-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "hazards",
        label: "Hazards (Rulebooks)",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/hazards",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "gatewalkers-bestiary",
        label: "Gatewalkers",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/gatewalkers-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "lost-omens-impossible-lands-bestiary",
        label: "Lost Omens: Impossible Lands",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/impossible-lands-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "lost-omens-mwangi-expanse-bestiary",
        label: "Lost Omens: Mwangi Expanse",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/mwangi-expanse-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "lost-omens-highhelm-bestiary",
        label: "Lost Omens: Highhelm",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/highhelm-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "lost-omens-monsters-of-myth-bestiary",
        label: "Lost Omens: Monsters of Myth",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/monsters-of-myth-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "lost-omens-travel-guide-bestiary",
        label: "Lost Omens: Travel Guide",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/travel-guide-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "malevolence-bestiary",
        label: "Malevolence",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/malevolence-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "menace-under-otari-bestiary",
        label: "Menace Under Otari",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/menace-under-otari-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "npc-gallery",
        label: "NPC Gallery",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/npc-gallery",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "one-shot-bestiary",
        label: "One-Shots",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/one-shot-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "outlaws-of-alkenstar-bestiary",
        label: "Outlaws of Alkenstar",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/outlaws-of-alkenstar-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "kingmaker-bestiary",
        label: "Kingmaker",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/kingmaker-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "pathfinder-bestiary",
        label: "Bestiary 1",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/pathfinder-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "pathfinder-bestiary-2",
        label: "Bestiary 2",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/pathfinder-bestiary-2",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "pathfinder-bestiary-3",
        label: "Bestiary 3",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/pathfinder-bestiary-3",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "pathfinder-dark-archive",
        label: "Dark Archive",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/pathfinder-dark-archive",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "pfs-introductions-bestiary",
        label: "Introductions",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/pfs-introductions-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "pfs-season-1-bestiary",
        label: "Season 1",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/pfs-season-1-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "pfs-season-2-bestiary",
        label: "Season 2",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/pfs-season-2-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "pfs-season-3-bestiary",
        label: "Season 3",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/pfs-season-3-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "pfs-season-4-bestiary",
        label: "Season 4",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/pfs-season-4-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "pfs-season-5-bestiary",
        label: "Season 5",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/pfs-season-5-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "quest-for-the-frozen-flame-bestiary",
        label: "Quest for the Frozen Flame",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/quest-for-the-frozen-flame-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "shadows-at-sundown-bestiary",
        label: "Shadows at Sundown",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/shadows-at-sundown-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "sky-kings-tomb-bestiary",
        label: "Sky King's Tomb",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/sky-kings-tomb-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "strength-of-thousands-bestiary",
        label: "Strength of Thousands",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/strength-of-thousands-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "the-enmity-cycle-bestiary",
        label: "The Enmity Cycle",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/the-enmity-cycle-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "the-slithering-bestiary",
        label: "The Slithering",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/the-slithering-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "troubles-in-otari-bestiary",
        label: "Troubles in Otari",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/troubles-in-otari-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "night-of-the-gray-death-bestiary",
        label: "Night of the Gray Death",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/night-of-the-gray-death-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "crown-of-the-kobold-king-bestiary",
        label: "Crown of the Kobold King",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/crown-of-the-kobold-king-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "stolen-fate-bestiary",
        label: "Stolen Fate",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/stolen-fate-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "rage-of-elements-bestiary",
        label: "Rage of Elements",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/rage-of-elements-bestiary",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "vehicles",
        label: "Vehicles",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/vehicles",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "actionspf2e",
        label: "Actions",
        banner: "systems/pf2e/assets/compendium-banner/green.webp",
        path: "systems/pf2e/packs/actions",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "ancestries",
        label: "Ancestries",
        banner: "systems/pf2e/assets/compendium-banner/green.webp",
        path: "systems/pf2e/packs/ancestries",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "ancestryfeatures",
        label: "Ancestry Features",
        banner: "systems/pf2e/assets/compendium-banner/green.webp",
        path: "systems/pf2e/packs/ancestryfeatures",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "backgrounds",
        label: "Backgrounds",
        banner: "systems/pf2e/assets/compendium-banner/green.webp",
        path: "systems/pf2e/packs/backgrounds",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "classes",
        label: "Classes",
        banner: "systems/pf2e/assets/compendium-banner/green.webp",
        path: "systems/pf2e/packs/classes",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "classfeatures",
        label: "Class Features",
        banner: "systems/pf2e/assets/compendium-banner/green.webp",
        path: "systems/pf2e/packs/classfeatures",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "familiar-abilities",
        label: "Familiar Abilities",
        banner: "systems/pf2e/assets/compendium-banner/green.webp",
        path: "systems/pf2e/packs/familiar-abilities",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "feats-srd",
        label: "Feats",
        banner: "systems/pf2e/assets/compendium-banner/green.webp",
        path: "systems/pf2e/packs/feats",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "heritages",
        label: "Heritages",
        banner: "systems/pf2e/assets/compendium-banner/green.webp",
        path: "systems/pf2e/packs/heritages",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "spells-srd",
        label: "Spells",
        banner: "systems/pf2e/assets/compendium-banner/blue.webp",
        path: "systems/pf2e/packs/spells",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "bestiary-effects",
        label: "Bestiary Effects",
        banner: "systems/pf2e/assets/compendium-banner/blue.webp",
        path: "systems/pf2e/packs/bestiary-effects",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "boons-and-curses",
        label: "Divine Intercessions",
        banner: "systems/pf2e/assets/compendium-banner/blue.webp",
        path: "systems/pf2e/packs/boons-and-curses",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "conditionitems",
        label: "Conditions",
        banner: "systems/pf2e/assets/compendium-banner/blue.webp",
        path: "systems/pf2e/packs/conditions",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "campaign-effects",
        label: "Campaign Effects",
        banner: "systems/pf2e/assets/compendium-banner/blue.webp",
        path: "systems/pf2e/packs/campaign-effects",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "equipment-effects",
        label: "Equipment Effects",
        banner: "systems/pf2e/assets/compendium-banner/blue.webp",
        path: "systems/pf2e/packs/equipment-effects",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "other-effects",
        label: "Other Effects",
        banner: "systems/pf2e/assets/compendium-banner/blue.webp",
        path: "systems/pf2e/packs/other-effects",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "feat-effects",
        label: "Feat/Feature Effects",
        banner: "systems/pf2e/assets/compendium-banner/green.webp",
        path: "systems/pf2e/packs/feat-effects",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "pathfinder-society-boons",
        label: "Pathfinder Society Boons",
        banner: "systems/pf2e/assets/compendium-banner/blue.webp",
        path: "systems/pf2e/packs/pathfinder-society-boons",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "spell-effects",
        label: "Spell Effects",
        banner: "systems/pf2e/assets/compendium-banner/blue.webp",
        path: "systems/pf2e/packs/spell-effects",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "equipment-srd",
        label: "Equipment",
        banner: "systems/pf2e/assets/compendium-banner/blue.webp",
        path: "systems/pf2e/packs/equipment",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "deities",
        label: "Deities",
        banner: "systems/pf2e/assets/compendium-banner/green.webp",
        path: "systems/pf2e/packs/deities",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "iconics",
        label: "Iconics",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/iconics",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "paizo-pregens",
        label: "Adventure Pregens",
        banner: "systems/pf2e/assets/compendium-banner/red.webp",
        path: "systems/pf2e/packs/paizo-pregens",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "rollable-tables",
        label: "Rollable Tables",
        banner: "systems/pf2e/assets/compendium-banner/orange.webp",
        path: "systems/pf2e/packs/rollable-tables",
        type: "RollTable",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "criticaldeck",
        label: "Critical Hit/Fumble Deck",
        banner: "systems/pf2e/assets/compendium-banner/orange.webp",
        path: "systems/pf2e/packs/criticaldeck",
        type: "JournalEntry",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "journals",
        label: "PF2e Journals",
        banner: "systems/pf2e/assets/compendium-banner/orange.webp",
        path: "systems/pf2e/packs/journals",
        type: "JournalEntry",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "gmg-srd",
        label: "Game Mastery Guide",
        banner: "systems/pf2e/assets/compendium-banner/orange.webp",
        path: "systems/pf2e/packs/gmg-srd",
        type: "JournalEntry",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "action-macros",
        label: "Action Macros",
        banner: "systems/pf2e/assets/compendium-banner/orange.webp",
        path: "systems/pf2e/packs/action-macros",
        type: "Macro",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "pf2e-macros",
        label: "PF2e Macros",
        banner: "systems/pf2e/assets/compendium-banner/orange.webp",
        path: "systems/pf2e/packs/macros",
        type: "Macro",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "bestiary-ability-glossary-srd",
        label: "Bestiary Ability Glossary",
        banner: "systems/pf2e/assets/compendium-banner/green.webp",
        path: "systems/pf2e/packs/bestiary-ability-glossary-srd",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "bestiary-family-ability-glossary",
        label: "Creature Family Ability Glossary",
        banner: "systems/pf2e/assets/compendium-banner/green.webp",
        path: "systems/pf2e/packs/bestiary-family-ability-glossary",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "adventure-specific-actions",
        label: "Adventure-Specific Actions",
        banner: "systems/pf2e/assets/compendium-banner/green.webp",
        path: "systems/pf2e/packs/adventure-specific-actions",
        type: "Item",
        system: "pf2e",
        ownership: { PLAYER: "LIMITED", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "kingmaker-features",
        label: "Kingmaker Features",
        banner: "systems/pf2e/assets/compendium-banner/orange.webp",
        path: "systems/pf2e/packs/kingmaker-features",
        type: "Item",
        system: "pf2e",
        ownership: { GAMEMASTER: "NONE" },
        flags: {},
      },
    ],
    packFolders: [
      {
        name: "Bestiaries",
        sorting: "m",
        packs: ["pathfinder-bestiary", "pathfinder-bestiary-2", "pathfinder-bestiary-3"],
        folders: [
          {
            name: "Adventure Paths",
            sorting: "m",
            packs: [
              "abomination-vaults-bestiary",
              "age-of-ashes-bestiary",
              "agents-of-edgewatch-bestiary",
              "blood-lords-bestiary",
              "extinction-curse-bestiary",
              "fists-of-the-ruby-phoenix-bestiary",
              "gatewalkers-bestiary",
              "outlaws-of-alkenstar-bestiary",
              "kingmaker-bestiary",
              "quest-for-the-frozen-flame-bestiary",
              "sky-kings-tomb-bestiary",
              "strength-of-thousands-bestiary",
              "stolen-fate-bestiary",
            ],
            folders: [],
          },
          {
            name: "Rulebooks",
            sorting: "m",
            packs: [
              "pathfinder-dark-archive",
              "book-of-the-dead-bestiary",
              "rage-of-elements-bestiary",
              "hazards",
              "lost-omens-impossible-lands-bestiary",
              "lost-omens-highhelm-bestiary",
              "lost-omens-mwangi-expanse-bestiary",
              "lost-omens-monsters-of-myth-bestiary",
              "lost-omens-travel-guide-bestiary",
              "npc-gallery",
              "vehicles",
              "blog-bestiary",
            ],
            folders: [],
          },
          {
            name: "Standalone Adventures",
            sorting: "m",
            packs: [
              "fall-of-plaguestone-bestiary",
              "malevolence-bestiary",
              "menace-under-otari-bestiary",
              "one-shot-bestiary",
              "shadows-at-sundown-bestiary",
              "the-enmity-cycle-bestiary",
              "the-slithering-bestiary",
              "troubles-in-otari-bestiary",
              "night-of-the-gray-death-bestiary",
              "crown-of-the-kobold-king-bestiary",
            ],
            folders: [],
          },
          {
            name: "Pathfinder Society",
            sorting: "m",
            packs: ["pfs-introductions-bestiary", "pfs-season-1-bestiary", "pfs-season-2-bestiary", "pfs-season-3-bestiary", "pfs-season-4-bestiary", "pfs-season-5-bestiary"],
            folders: [],
          },
        ],
      },
      { name: "Pregenerated PCs", sorting: "m", packs: ["iconics", "paizo-pregens"], folders: [] },
      {
        name: "Effects",
        sorting: "m",
        packs: ["bestiary-effects", "conditionitems", "campaign-effects", "equipment-effects", "feat-effects", "other-effects", "spell-effects"],
        folders: [],
      },
      {
        name: "Character Building",
        sorting: "m",
        packs: [
          "actionspf2e",
          "ancestries",
          "ancestryfeatures",
          "backgrounds",
          "classes",
          "classfeatures",
          "deities",
          "equipment-srd",
          "familiar-abilities",
          "feats-srd",
          "heritages",
          "spells-srd",
          "kingmaker-features",
        ],
        folders: [],
      },
      {
        name: "GM Tools",
        sorting: "m",
        packs: [
          "adventure-specific-actions",
          "boons-and-curses",
          "pathfinder-society-boons",
          "bestiary-ability-glossary-srd",
          "bestiary-family-ability-glossary",
          "rollable-tables",
        ],
        folders: [],
      },
      { name: "Macros", sorting: "m", packs: ["action-macros", "pf2e-macros"], folders: [] },
      { name: "Journals", sorting: "m", packs: ["criticaldeck", "domains", "journals", "gmg-srd"], folders: [] },
    ],
    relationships: { systems: [], requires: [], recommends: [], conflicts: [], flags: {} },
    socket: true,
    manifest: "https://github.com/foundryvtt/pf2e/releases/latest/download/system.json",
    download: "https://github.com/foundryvtt/pf2e/releases/latest/download/pf2e.zip",
    protected: false,
    exclusive: false,
    persistentStorage: false,
    initiative: "1d20 + @attributes.perception.value + (@abilities.wis.value / 100)",
    gridDistance: 5,
    gridUnits: "ft",
    primaryTokenAttribute: "attributes.hp",
  },
  world: {
    id: "coventry",
    title: "Coventry",
    description: "",
    authors: [],
    flags: {},
    media: [],
    version: null,
    compatibility: { minimum: "11", verified: "11.307", maximum: "11" },
    scripts: [],
    esmodules: [],
    styles: [],
    languages: [],
    packs: [
      {
        name: "baileywiki-maps-premium-towns-actors-00",
        label: "(Baileywiki Maps Towns)BW Prefabs 00 - NEW Content",
        path: "worlds/coventry/packs/baileywiki-maps-premium-towns-actors-00",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "baileywiki-maps-premium-towns-actors-01",
        label: "(Baileywiki Maps Towns)BW Prefabs 01 - Buildings and Facades",
        path: "worlds/coventry/packs/baileywiki-maps-premium-towns-actors-01",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "baileywiki-maps-premium-towns-actors-02",
        label: "(Baileywiki Maps Towns)BW Prefabs 02 - Nature",
        path: "worlds/coventry/packs/baileywiki-maps-premium-towns-actors-02",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "baileywiki-maps-premium-actors",
        label: "(Baileywiki Maps Premium)Baileywiki Maps Premium",
        path: "worlds/coventry/packs/baileywiki-maps-premium-actors",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "baileywiki-maps-premium-towns-actors-03",
        label: "(Baileywiki Maps Towns)BW Prefabs 03 - Furnishings and Special",
        path: "worlds/coventry/packs/baileywiki-maps-premium-towns-actors-03",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "baileywiki-maps-premium-towns-actors-04",
        label: "(Baileywiki Maps Towns)BW Prefabs 04 - Modular Buildings",
        path: "worlds/coventry/packs/baileywiki-maps-premium-towns-actors-04",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
      {
        name: "baileywiki-maps-premium-towns-actors-05",
        label: "(Baileywiki Maps Towns)BW Prefabs 05 - Other Sets",
        path: "worlds/coventry/packs/baileywiki-maps-premium-towns-actors-05",
        type: "Actor",
        system: "pf2e",
        ownership: { PLAYER: "OBSERVER", ASSISTANT: "OWNER" },
        flags: {},
      },
    ],
    packFolders: [],
    relationships: { systems: [], requires: [], recommends: [], conflicts: [], flags: {} },
    socket: false,
    protected: false,
    exclusive: false,
    persistentStorage: false,
    system: "pf2e",
    coreVersion: "11.307",
    systemVersion: "5.3.1",
    lastPlayed: "Thu Aug 10 2023 21:42:08 GMT+1000 (Australian Eastern Standard Time)",
    playtime: 776562,
    nextSession: null,
    safeMode: false,
  },
};
