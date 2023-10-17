import type { ActionItemSource } from "src/types/foundry/systems/pf2e/module/item/action/data.ts";
import type { AfflictionSource } from "src/types/foundry/systems/pf2e/module/item/affliction/data.ts";
import type { AncestrySource } from "src/types/foundry/systems/pf2e/module/item/ancestry/data.ts";
import type { ArmorSource } from "src/types/foundry/systems/pf2e/module/item/armor/data.ts";
import type { BackgroundSource } from "src/types/foundry/systems/pf2e/module/item/background/data.ts";
import type { BookSource } from "src/types/foundry/systems/pf2e/module/item/book/data.ts";
import type { CampaignFeatureSource } from "src/types/foundry/systems/pf2e/module/item/campaign-feature/data.ts";
import type { ClassSource } from "src/types/foundry/systems/pf2e/module/item/class/data.ts";
import type { ConditionSource } from "src/types/foundry/systems/pf2e/module/item/condition/data.ts";
import type { ConsumableSource } from "src/types/foundry/systems/pf2e/module/item/consumable/data.ts";
import type { ContainerSource } from "src/types/foundry/systems/pf2e/module/item/container/data.ts";
import type { DeitySource } from "src/types/foundry/systems/pf2e/module/item/deity/data.ts";
import type { EffectSource } from "src/types/foundry/systems/pf2e/module/item/effect/data.ts";
import type { EquipmentSource } from "src/types/foundry/systems/pf2e/module/item/equipment/data.ts";
import type { FeatSource } from "src/types/foundry/systems/pf2e/module/item/feat/data.ts";
import type { HeritageSource } from "src/types/foundry/systems/pf2e/module/item/heritage/data.ts";
import type { KitSource } from "src/types/foundry/systems/pf2e/module/item/kit/data.ts";
import type { LoreSource } from "src/types/foundry/systems/pf2e/module/item/lore/data.ts";
import type { MeleeSource } from "src/types/foundry/systems/pf2e/module/item/melee/data.ts";
import type { PhysicalItemType } from "src/types/foundry/systems/pf2e/module/item/physical/types.ts";
import type { SpellSource } from "src/types/foundry/systems/pf2e/module/item/spell/data.ts";
import type { SpellcastingEntrySource } from "src/types/foundry/systems/pf2e/module/item/spellcasting-entry/data.ts";
import type { TreasureSource } from "src/types/foundry/systems/pf2e/module/item/treasure/data.ts";
import type { WeaponSource } from "src/types/foundry/systems/pf2e/module/item/weapon/data.ts";
import { PROFICIENCY_RANKS } from "src/types/foundry/systems/pf2e/module/data.ts";
export * from "./helpers.ts";
type ProficiencyRank = (typeof PROFICIENCY_RANKS)[number];
type NonPhysicalItemType = "action" | "affliction" | "ancestry" | "background" | "campaignFeature" | "class" | "condition" | "deity" | "effect" | "feat" | "heritage" | "kit" | "lore" | "melee" | "spell" | "spellcastingEntry";
type ItemType = NonPhysicalItemType | PhysicalItemType;
type PhysicalItemSource = ArmorSource | BookSource | ConsumableSource | ContainerSource | EquipmentSource | TreasureSource | WeaponSource;
type ItemSourcePF2e = PhysicalItemSource | ActionItemSource | AfflictionSource | AncestrySource | BackgroundSource | CampaignFeatureSource | ClassSource | ConditionSource | DeitySource | EffectSource | FeatSource | HeritageSource | KitSource | LoreSource | MeleeSource | SpellSource | SpellcastingEntrySource;
type MagicItemSource = Exclude<PhysicalItemSource, ConsumableSource | TreasureSource>;
interface ItemSummaryData {
    [key: string]: unknown;
    description?: {
        value: string;
    };
    traits?: TraitChatData[];
    properties?: (string | number | null)[];
}
interface TraitChatData {
    value: string;
    label: string;
    description?: string;
    mystified?: boolean;
    excluded?: boolean;
}
export { ActionItemSource, AncestrySource, ArmorSource, BackgroundSource, BookSource, ClassSource, ConditionSource, ConsumableSource, ContainerSource, DeitySource, EffectSource, EquipmentSource, FeatSource, ItemSourcePF2e, ItemSummaryData, ItemType, KitSource, LoreSource, MagicItemSource, MeleeSource, NonPhysicalItemType, PhysicalItemSource, ProficiencyRank, SpellSource, SpellcastingEntrySource, TraitChatData, TreasureSource, WeaponSource, };
