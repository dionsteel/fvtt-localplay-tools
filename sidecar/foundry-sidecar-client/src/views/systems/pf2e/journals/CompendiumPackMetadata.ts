import { ItemFlagsPF2e } from "@/interfaces/pf2e/item/data/base";


export interface CompendiumPackMetadata {
name: string; // "bestiary-family-ability-glossary";
label: string; // "Creature Family Ability Glossary";
banner: string; // "systems/pf2e/assets/compendium-banner/green.webp";
path: string; // "systems/pf2e/packs/bestiary-family-ability-glossary";
type: string; //"Item";
system: "pf2e";
ownership: {
PLAYER: "LIMITED" | "OBSERVER" | "OWNER";
ASSISTANT: "OWNER";
};
flags: ItemFlagsPF2e;
packageType: string; // "system";
packageName: string; // "pf2e";
id: string; //"pf2e.bestiary-family-ability-glossary";
}
