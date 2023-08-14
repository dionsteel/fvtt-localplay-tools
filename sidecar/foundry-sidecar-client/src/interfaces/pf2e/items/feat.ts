import { AbilityScoreKeyPF2e, ItemDataPF2e, ItemLink } from "./base";
export type FeatCategoryName =
  | "classfeature"
  | "skill"
  | "interaction"
  | "general"
  | "ancestry"
  | "class";
export type FeatActionType = "passive" | "action";

export interface FeatDataPF2e extends ItemDataPF2e {
  level: { value: number };
  category: string; //"classfeature";
  onlyLevel1?: boolean;
  maxTakable?: number;
  actionType: { value: FeatActionType }; // "passive"
  actions: { value: number|null };
  prerequisites: { value: [] };
  location: "KF9DPim79zZLQUWB";
}

/*
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
              predicate: [
                "item:level:1",
                "item:trait:alchemist",
                "item:type:feature",
              ],
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

    */
