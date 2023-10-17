import { ActorPF2e, CreaturePF2e, FamiliarPF2e, PartyPF2e } from "../../actor";
import { Abilities, CreatureSpeeds, LabeledSpeed, SenseData } from "../creature/data.ts";
import { CreatureTrait, CreatureUpdateContext, GetReachParameters, ModeOfBeing } from "../creature/types.ts";
import { PrototypeTokenPF2e, RollOptionFlags, StrikeData } from "../data/base.ts";
import { ActorInitiative } from "../initiative.ts";
import { StatisticModifier } from "../modifiers.ts";
import {
  AbilityString,
  ActorAlliance,
  ActorDimensions,
  ApplyDamageParams,
  AttackItem,
  AuraData,
  CheckContext,
  CheckContextParams,
  EmbeddedItemInstances,
  MovementType,
  RollContext,
  RollContextParams,
  SaveType,
  SkillLongForm,
} from "../types.ts";
import {
  AbstractEffectPF2e,
  AncestryPF2e,
  ArmorPF2e,
  BackgroundPF2e,
  ClassPF2e,
  ConditionPF2e,
  ContainerPF2e,
  DeityPF2e,
  FeatPF2e,
  HeritagePF2e,
  ItemPF2e,
  PhysicalItemPF2e,
  WeaponPF2e,
} from "../../item";
import {
  ActionItemSource,
  AncestrySource,
  ArmorSource,
  BackgroundSource,
  BookSource,
  ClassSource,
  ConsumableSource,
  ContainerSource,
  DeitySource,
  EffectSource,
  EquipmentSource,
  FeatSource,
  ItemSourcePF2e,
  ItemType,
  KitSource,
  LoreSource,
  MeleeSource,
  PhysicalItemSource,
  SpellSource,
  SpellcastingEntrySource,
  TreasureSource,
  WeaponSource,
} from "../../item/data/index.ts";
import { MagicTradition } from "../../item/spell/types.ts";
import { UserPF2e } from "../../user/document.ts";
import { ScenePF2e, TokenDocumentPF2e } from "../../scene/index.ts";
import { RollParameters } from "../../system/rolls.ts";
import { Statistic, StatisticCheck, StatisticDifficultyClass } from "../../system/statistic/index.ts";
import { CraftingEntry, CraftingFormula } from "./crafting/index.ts";
import { BaseWeaponProficiencyKey, CharacterFlags, CharacterSource, CharacterStrike, CharacterSystemData, ClassDCData, WeaponGroupProficiencyKey } from "./data.ts";
import { CharacterFeats } from "./feats.ts";
import { CharacterHitPointsSummary, CharacterSkills } from "./types.ts";
import { ActorInventory } from "../inventory";
import EmbeddedCollection from "@types/foundry/common/abstract/embedded-collection";
import { ArmorStatistic } from "../../system/statistic/armor-class";
import { CombatantPF2e, EncounterPF2e } from "../../encounter";
import { ActorConditions } from "../conditions";
import { ConditionKey, ConditionSource } from "../../item/condition";
import BaseUser from "@types/foundry/common/documents/user";
import { TokenPF2e } from "../../canvas";
import Document, { _Document } from "@types/foundry/common/abstract/document";
import { DataSchema, SchemaField } from "@types/foundry/common/data/fields";
import { TokenSource } from "@types/foundry/common/documents/token";
import { ActiveEffectPF2e } from "../../active-effect";
import { RuleElementPF2e, RuleElementSynthetics } from "../../rules";
import { RuleElementSchema } from "../../rules/rule-element";
import { CreatureSensePF2e } from "../creature/sense";
import { ActorSpellcasting } from "../spellcasting";
import { ActorSheetPF2e } from "../sheet/base";
import { ZeroToThree } from "../../data";
import { ActiveEffectSchema } from "@types/foundry/common/documents/active-effect";
import { AfflictionSource } from "../../item/affliction";
import { CampaignFeatureSource } from "../../item/campaign-feature";
import { HeritageSource } from "../../item/heritage/data";
import { AppliedDamageFlag } from "../../chat-message";
import { ActorUpdateContext } from "../base";
import { ItemSource } from "@types/foundry/common/documents/item";
import { DataModelValidationOptions } from "@types/foundry/common/abstract/data";
export declare class CharacterPF2e<TParent extends TokenDocumentPF2e | null = TokenDocumentPF2e | null> extends CreaturePF2e<TParent> {
  /** Retrieve lore skills, class statistics, and spellcasting */
  getStatistic(slug: SaveType | SkillLongForm | "perception" | "classDC" | MagicTradition): Statistic;
  getStatistic(slug: string): Statistic | null;
  getCraftingFormulas(): Promise<CraftingFormula[]>;
  getCraftingEntries(formulas?: CraftingFormula[]): Promise<CraftingEntry[]>;
  getCraftingEntry(selector: string): Promise<CraftingEntry | null>;
  protected _initialize(options?: Record<string, unknown>): void;
  /** If one exists, prepare this character's familiar */
  prepareData(): void;
  /** Setup base ephemeral data to be modified by active effects and derived-data preparation */
  prepareBaseData(): void;
  /** After AE-likes have been applied, set numeric roll options */
  prepareEmbeddedDocuments(): void;
  /**
   * Immediately after boosts from this PC's ancestry, background, and class have been acquired, set ability scores
   * according to them.
   */
  prepareDataFromItems(): void;
  prepareDerivedData(): void;
  private setAbilityScores;
  /** Set roll operations for ability scores, proficiency ranks, and number of hands free */
  protected setNumericRollOptions(): void;
  private createArmorStatistic;
  private prepareSaves;
  private prepareSkills;
  prepareSpeed(movementType: "land"): CreatureSpeeds;
  prepareSpeed(movementType: Exclude<MovementType, "land">): (LabeledSpeed & StatisticModifier) | null;
  prepareSpeed(movementType: MovementType): CreatureSpeeds | (LabeledSpeed & StatisticModifier) | null;
  private prepareFeats;
  prepareClassDC(slug: string, classDC: Pick<ClassDCData, "label" | "ability" | "rank" | "primary">): Statistic;
  /** Prepare this character's strike actions */
  prepareStrikes({ includeBasicUnarmed }?: { includeBasicUnarmed?: boolean | undefined }): CharacterStrike[];
  /** Prepare a strike action from a weapon */
  private prepareStrike;
  getStrikeDescription(weapon: WeaponPF2e): {
    description: string;
    criticalSuccess: string;
    success: string;
  };
  /** Modify this weapon from AdjustStrike rule elements */
  getRollContext<TStatistic extends StatisticCheck | StrikeData | null, TItem extends AttackItem | null>(
    params: RollContextParams<TStatistic, TItem>
  ): Promise<RollContext<this, TStatistic, TItem>>;
  /** Create attack-roll modifiers from weapon traits */
  getCheckContext<TStatistic extends StatisticCheck | StrikeData, TItem extends AttackItem | null>(
    params: CheckContextParams<TStatistic, TItem>
  ): Promise<CheckContext<this, TStatistic, TItem>>;
  /** Prepare stored and synthetic martial proficiencies */
  prepareMartialProficiencies(): void;
  /** Add a proficiency in a weapon group or base weapon */
  addAttackProficiency(key: BaseWeaponProficiencyKey | WeaponGroupProficiencyKey): Promise<void>;
  protected _preUpdate(changed: DeepPartial<CharacterSource>, options: CreatureUpdateContext<TParent>, user: UserPF2e): Promise<boolean | void>;
  /** Toggle between boost-driven and manual management of ability scores */
  toggleAbilityManagement(): Promise<void>;
  clone(data: DocumentUpdateData<this> | undefined, options: DocumentCloneOptions & { save: true }): Promise<this>;
  clone(data?: DocumentUpdateData<this> | undefined, options?: (DocumentCloneOptions & { save?: false | undefined }) | undefined): this;
  clone(data?: DocumentUpdateData<this> | undefined, options?: DocumentCloneOptions | undefined): this | Promise<this>;
  checkAreaEffects(): void;
  decreaseCondition(conditionSlug: ConditionKey | ConditionPF2e<this>, { forceRemove }?: { forceRemove: boolean } | undefined): Promise<void>;
  increaseCondition(
    conditionSlug:
      | "blinded"
      | "broken"
      | "clumsy"
      | "confused"
      | "controlled"
      | "dazzled"
      | "deafened"
      | "doomed"
      | "drained"
      | "enfeebled"
      | "fascinated"
      | "fatigued"
      | "flat-footed"
      | "fleeing"
      | "frightened"
      | "grabbed"
      | "hidden"
      | "immobilized"
      | "paralyzed"
      | "petrified"
      | "prone"
      | "restrained"
      | "sickened"
      | "slowed"
      | "stunned"
      | "stupefied"
      | "unconscious"
      | "concealed"
      | "dying"
      | "encumbered"
      | "friendly"
      | "helpful"
      | "hostile"
      | "indifferent"
      | "invisible"
      | "observed"
      | "persistent-damage"
      | "quickened"
      | "undetected"
      | "unfriendly"
      | "unnoticed"
      | "wounded"
      | ConditionPF2e<this>,
    { min, max, value }?: { min?: number | null | undefined; max?: number | null | undefined; value?: number | null | undefined } | undefined
  ): Promise<ConditionPF2e<this> | null>;
  hasCondition(
    ...slugs: (
      | "blinded"
      | "broken"
      | "clumsy"
      | "confused"
      | "controlled"
      | "dazzled"
      | "deafened"
      | "doomed"
      | "drained"
      | "enfeebled"
      | "fascinated"
      | "fatigued"
      | "flat-footed"
      | "fleeing"
      | "frightened"
      | "grabbed"
      | "hidden"
      | "immobilized"
      | "paralyzed"
      | "petrified"
      | "prone"
      | "restrained"
      | "sickened"
      | "slowed"
      | "stunned"
      | "stupefied"
      | "unconscious"
      | "concealed"
      | "dying"
      | "encumbered"
      | "friendly"
      | "helpful"
      | "hostile"
      | "indifferent"
      | "invisible"
      | "observed"
      | "persistent-damage"
      | "quickened"
      | "undetected"
      | "unfriendly"
      | "unnoticed"
      | "wounded"
    )[]
  ): boolean;
  getUserLevel(user: BaseUser): DocumentOwnershipLevel | null;
  getActiveTokens(linked: boolean | undefined, document: true): TokenDocumentPF2e<ScenePF2e>[];
  getActiveTokens(linked?: undefined, document?: undefined): TokenPF2e<TokenDocumentPF2e<ScenePF2e>>[];
  getActiveTokens(linked?: boolean | undefined, document?: boolean | undefined): TokenDocumentPF2e<ScenePF2e>[] | TokenPF2e<TokenDocumentPF2e<ScenePF2e>>[];
  getFlag(scope: string, key: string): unknown;
  getCondition(slugOrKey: ConditionKey, { all }: { all: true }): ConditionPF2e<this>[];
  getCondition(slugOrKey: ConditionKey, { all }: { all?: false | undefined }): ConditionPF2e<this> | null;
  getCondition(slugOrKey: ConditionKey): ConditionPF2e<this> | null;
  getCondition(slugOrKey: ConditionKey, { all }: { all?: boolean | undefined }): ConditionPF2e<this> | ConditionPF2e<this>[] | null;
  getReach({ action, weapon }?: GetReachParameters | undefined): number;
  getRelativeUUID(doc: Document<_Document | null, DataSchema>): string;
  getRollData(): {
    [key: string]: unknown;
    actor?: ActorPF2e<TokenDocumentPF2e<ScenePF2e | null> | null> | null | undefined;
    item?: ItemPF2e<ActorPF2e<TokenDocumentPF2e<ScenePF2e | null> | null> | null> | null | undefined;
    mod?: number | undefined;
  };
  getRollOptions(domains?: string[] | undefined): string[];
  getTokenDocument(data?: DeepPartial<TokenSource> | undefined): Promise<NonNullable<TParent>>;
  getTokenImages(): Promise<VideoFilePath[]>;
  getSelfRollOptions(prefix?: "origin" | "self" | "target" | undefined): string[];
  getContextualClone(rollOptions: string[], ephemeralEffects?: (ConditionSource | EffectSource)[] | undefined): this;
  adjustCarryType(
    item: PhysicalItemPF2e<CreaturePF2e<TokenDocumentPF2e<ScenePF2e | null> | null>>,
    { carryType, handsHeld, inSlot }: { carryType: "held" | "worn" | "stowed" | "dropped"; handsHeld?: number | undefined; inSlot?: boolean | undefined }
  ): Promise<void>;
  importFromJSON(json: string): Promise<this>;
  importFromJSONDialog(): Promise<void>;

  isAffectedBy(
    damage:
      | "chaotic"
      | "evil"
      | "good"
      | "lawful"
      | "acid"
      | "bleed"
      | "bludgeoning"
      | "cold"
      | "electricity"
      | "fire"
      | "force"
      | "mental"
      | "negative"
      | "piercing"
      | "poison"
      | "positive"
      | "slashing"
      | "sonic"
      | "untyped"
      | ConditionPF2e<ActorPF2e<TokenDocumentPF2e<ScenePF2e | null> | null> | null>
  ): boolean;
  isAllyOf(actor: ActorPF2e<TokenDocumentPF2e<ScenePF2e | null> | null>): boolean;
  isEnemyOf(actor: ActorPF2e<TokenDocumentPF2e<ScenePF2e | null> | null>): boolean;
  isImmuneTo(
    effect:
      | ConditionSource
      | EffectSource
      | "blinded"
      | "broken"
      | "clumsy"
      | "confused"
      | "controlled"
      | "dazzled"
      | "deafened"
      | "doomed"
      | "drained"
      | "enfeebled"
      | "fascinated"
      | "fatigued"
      | "flat-footed"
      | "fleeing"
      | "frightened"
      | "grabbed"
      | "hidden"
      | "immobilized"
      | "paralyzed"
      | "petrified"
      | "prone"
      | "restrained"
      | "sickened"
      | "slowed"
      | "stunned"
      | "stupefied"
      | "unconscious"
      | "concealed"
      | "dying"
      | "encumbered"
      | "friendly"
      | "helpful"
      | "hostile"
      | "indifferent"
      | "invisible"
      | "observed"
      | "persistent-damage"
      | "quickened"
      | "undetected"
      | "unfriendly"
      | "unnoticed"
      | "wounded"
      | AbstractEffectPF2e<ActorPF2e<TokenDocumentPF2e<ScenePF2e | null> | null> | null>
  ): boolean;
  isLootableBy(user: UserPF2e): boolean;
  isOfType<T extends ActorType | "creature">(...types: T[]): this is ActorInstances<TParent>[T];

  protected prepareRuleElements(): RuleElementPF2e<RuleElementSchema>[];
  prepareSenses(data: SenseData[], synthetics: RuleElementSynthetics): CreatureSensePF2e[];
  protected prepareSynthetics(): void;
  addCustomModifier(stat: string, label: string, value: number, type: string): Promise<void>;
  allApplicableEffects(): Generator<ActiveEffect<this>, void, void>;
  applyActiveEffects(): void;
  applyAreaEffects(aura: AuraData, origin: { actor: ActorPF2e<TokenDocumentPF2e<ScenePF2e | null> | null>; token: TokenDocumentPF2e<ScenePF2e | null> }): Promise<void>;
  applyDamage({ damage, token, item, rollOptions, skipIWR, shieldBlockRequest, breakdown, notes }: ApplyDamageParams): Promise<this>;
  apps: { [x: number]: Application<ApplicationOptions> | undefined };
  canUserModify(user: BaseUser, action: UserAction, data?: Record<string, unknown> | undefined): boolean;
  createEmbeddedDocuments(
    embeddedName: "ActiveEffect",
    data: DeepPartial<SourceFromSchema<ActiveEffectSchema>>[],
    context?: DocumentModificationContext<this> | undefined
  ): Promise<ActiveEffectPF2e<this>[]>;
  createEmbeddedDocuments(
    embeddedName: "Item",
    data: (
      | (Omit<DeepPartial<ArmorSource>, "name" | "type"> & { name: string; type: "armor" })
      | (Omit<DeepPartial<BookSource>, "name" | "type"> & { name: string; type: "book" })
      | (Omit<DeepPartial<ConsumableSource>, "name" | "type"> & { name: string; type: "consumable" })
      | (Omit<DeepPartial<ContainerSource>, "name" | "type"> & { name: string; type: "backpack" })
      | (Omit<DeepPartial<EquipmentSource>, "name" | "type"> & { name: string; type: "equipment" })
      | (Omit<DeepPartial<TreasureSource>, "name" | "type"> & { name: string; type: "treasure" })
      | (Omit<DeepPartial<WeaponSource>, "name" | "type"> & { name: string; type: "weapon" })
      | (Omit<DeepPartial<ActionItemSource>, "name" | "type"> & { name: string; type: "action" })
      | (Omit<DeepPartial<AfflictionSource>, "name" | "type"> & { name: string; type: "affliction" })
      | (Omit<DeepPartial<AncestrySource>, "name" | "type"> & { name: string; type: "ancestry" })
      | (Omit<DeepPartial<BackgroundSource>, "name" | "type"> & { name: string; type: "background" })
      | (Omit<DeepPartial<CampaignFeatureSource>, "name" | "type"> & { name: string; type: "campaignFeature" })
      | (Omit<DeepPartial<ClassSource>, "name" | "type"> & { name: string; type: "class" })
      | (Omit<DeepPartial<ConditionSource>, "name" | "type"> & { name: string; type: "condition" })
      | (Omit<DeepPartial<DeitySource>, "name" | "type"> & { name: string; type: "deity" })
      | (Omit<DeepPartial<EffectSource>, "name" | "type"> & { name: string; type: "effect" })
      | (Omit<DeepPartial<FeatSource>, "name" | "type"> & { name: string; type: "feat" })
      | (Omit<DeepPartial<HeritageSource>, "name" | "type"> & { name: string; type: "heritage" })
      | (Omit<DeepPartial<KitSource>, "name" | "type"> & { name: string; type: "kit" })
      | (Omit<DeepPartial<LoreSource>, "name" | "type"> & { name: string; type: "lore" })
      | (Omit<DeepPartial<MeleeSource>, "name" | "type"> & { name: string; type: "melee" })
      | (Omit<DeepPartial<SpellSource>, "name" | "type"> & { name: string; type: "spell" })
      | (Omit<DeepPartial<SpellcastingEntrySource>, "name" | "type"> & { name: string; type: "spellcastingEntry" })
    )[],
    context?: DocumentModificationContext<this> | undefined
  ): Promise<ItemPF2e<this>[]>;
  createEmbeddedDocuments(
    embeddedName: "ActiveEffect" | "Item",
    data:
      | DeepPartial<SourceFromSchema<ActiveEffectSchema>>[]
      | (
          | (Omit<DeepPartial<ArmorSource>, "name" | "type"> & { name: string; type: "armor" })
          | (Omit<DeepPartial<BookSource>, "name" | "type"> & { name: string; type: "book" })
          | (Omit<DeepPartial<ConsumableSource>, "name" | "type"> & { name: string; type: "consumable" })
          | (Omit<DeepPartial<ContainerSource>, "name" | "type"> & { name: string; type: "backpack" })
          | (Omit<DeepPartial<EquipmentSource>, "name" | "type"> & { name: string; type: "equipment" })
          | (Omit<DeepPartial<TreasureSource>, "name" | "type"> & { name: string; type: "treasure" })
          | (Omit<DeepPartial<WeaponSource>, "name" | "type"> & { name: string; type: "weapon" })
          | (Omit<DeepPartial<ActionItemSource>, "name" | "type"> & { name: string; type: "action" })
          | (Omit<DeepPartial<AfflictionSource>, "name" | "type"> & { name: string; type: "affliction" })
          | (Omit<DeepPartial<AncestrySource>, "name" | "type"> & { name: string; type: "ancestry" })
          | (Omit<DeepPartial<BackgroundSource>, "name" | "type"> & { name: string; type: "background" })
          | (Omit<DeepPartial<CampaignFeatureSource>, "name" | "type"> & { name: string; type: "campaignFeature" })
          | (Omit<DeepPartial<ClassSource>, "name" | "type"> & { name: string; type: "class" })
          | (Omit<DeepPartial<ConditionSource>, "name" | "type"> & { name: string; type: "condition" })
          | (Omit<DeepPartial<DeitySource>, "name" | "type"> & { name: string; type: "deity" })
          | (Omit<DeepPartial<EffectSource>, "name" | "type"> & { name: string; type: "effect" })
          | (Omit<DeepPartial<FeatSource>, "name" | "type"> & { name: string; type: "feat" })
          | (Omit<DeepPartial<HeritageSource>, "name" | "type"> & { name: string; type: "heritage" })
          | (Omit<DeepPartial<KitSource>, "name" | "type"> & { name: string; type: "kit" })
          | (Omit<DeepPartial<LoreSource>, "name" | "type"> & { name: string; type: "lore" })
          | (Omit<DeepPartial<MeleeSource>, "name" | "type"> & { name: string; type: "melee" })
          | (Omit<DeepPartial<SpellSource>, "name" | "type"> & { name: string; type: "spell" })
          | (Omit<DeepPartial<SpellcastingEntrySource>, "name" | "type"> & { name: string; type: "spellcastingEntry" })
        )[],
    context?: DocumentModificationContext<this> | undefined
  ): Promise<ActiveEffectPF2e<this>[] | ItemPF2e<this>[]>;
  delete(context?: DocumentModificationContext<TParent> | undefined): Promise<this>;
  deleteDialog(options?: Record<string, unknown> | undefined): Promise<this>;
  deleteEmbeddedDocuments(
    embeddedName: "ActiveEffect" | "Item",
    ids: string[],
    context?: DocumentModificationContext<this> | undefined
  ): Promise<ActiveEffectPF2e<this>[] | ItemPF2e<this>[]>;
  deleteEmbeddedDocuments(embeddedName: "ActiveEffect", ids: string[], context?: DocumentModificationContext<this> | undefined): Promise<ActiveEffectPF2e<this>[]>;
  deleteEmbeddedDocuments(embeddedName: "Item", ids: string[], context?: DocumentModificationContext<this> | undefined): Promise<ItemPF2e<this>[]>;
  deleteEmbeddedDocuments(
    embeddedName: "ActiveEffect" | "Item",
    ids: string[],
    context?: DocumentModificationContext<this> | undefined
  ): Promise<ActiveEffectPF2e<this>[] | ItemPF2e<this>[]>;
  exportToJSON(options?: Record<string, unknown> | undefined): void;
  get folder(): Folder<Actor<null>> | null;
  getEmbeddedCollection(embeddedName: string): EmbeddedCollection<Document<Document<_Document | null, DataSchema>, DataSchema>>;
  getEmbeddedDocument(embeddedName: string, id: string, { strict }: { strict: true }): Document<_Document | null, DataSchema>;
  getEmbeddedDocument(embeddedName: string, id: string, { strict }: { strict: false }): Document<_Document | null, DataSchema> | undefined;
  getEmbeddedDocument(embeddedName: string, id: string, { strict }?: { strict?: boolean | undefined } | undefined): Document<_Document | null, DataSchema> | undefined;
  toJSON(): RawObject<this>;
  migrateSystemData({
    insertKeys,
    insertValues,
    enforceTypes,
  }?: { insertKeys?: boolean | undefined; insertValues?: boolean | undefined; enforceTypes?: boolean | undefined } | undefined): this["system"];
  modifyTokenAttribute(attribute: string, value: number, isDelta?: boolean | undefined, isBar?: boolean | undefined): Promise<this>;
  parent: TParent;
  removeCustomModifier(stat: string, slug: string): Promise<void>;
  render(force?: boolean | undefined, context?: RenderOptions | undefined): void;
  reset(): void;
  rollInitiative(
    options?: { createCombatants?: boolean | undefined; rerollInitiative?: boolean | undefined; initiativeOptions?: object | undefined } | undefined
  ): Promise<Combat | null>;
  rollRecovery(event: JQuery.TriggeredEvent<any, any, any, any>): Promise<any>;

  sortRelative({ updateData, ...sortOptions }: { updateData?: object | undefined } & SortingOptions<this>): Promise<void>;
  testUserPermission(
    user: BaseUser,
    permission: "INHERIT" | "NONE" | "LIMITED" | "OBSERVER" | "OWNER" | DocumentOwnershipLevel,
    { exact }?: { exact?: boolean | undefined } | undefined
  ): boolean;
  toAnchor(
    options?:
      | {
          attrs?: Record<string, string> | undefined;
          dataset?: Record<string, string> | undefined;
          classes?: string[] | undefined;
          name?: string | undefined;
          icon?: string | undefined;
        }
      | undefined
  ): HTMLAnchorElement;
  toCompendium(
    pack?: CompendiumCollection<CompendiumDocument> | undefined,
    options?:
      | { clearSort?: boolean | undefined; clearFlags?: boolean | undefined; clearOwnership?: boolean | undefined; clearState?: boolean | undefined; keepId?: boolean | undefined }
      | undefined
  ): this["_source"];
  toDragData(): { [key: string]: unknown; type: string };
  toObject(source?: true | undefined): this["_source"];
  toObject(source: false): RawObject<this>;
  toObject(source?: boolean | undefined): this["_source"] | RawObject<this>;
  toggleCondition(
    conditionSlug:
      | "blinded"
      | "broken"
      | "clumsy"
      | "confused"
      | "controlled"
      | "dazzled"
      | "deafened"
      | "doomed"
      | "drained"
      | "enfeebled"
      | "fascinated"
      | "fatigued"
      | "flat-footed"
      | "fleeing"
      | "frightened"
      | "grabbed"
      | "hidden"
      | "immobilized"
      | "paralyzed"
      | "petrified"
      | "prone"
      | "restrained"
      | "sickened"
      | "slowed"
      | "stunned"
      | "stupefied"
      | "unconscious"
      | "concealed"
      | "dying"
      | "encumbered"
      | "friendly"
      | "helpful"
      | "hostile"
      | "indifferent"
      | "invisible"
      | "observed"
      | "persistent-damage"
      | "quickened"
      | "undetected"
      | "unfriendly"
      | "unnoticed"
      | "wounded"
  ): Promise<void>;
  toggleRollOption(domain: string, option: string, value?: boolean | undefined): Promise<boolean | null>;
  toggleRollOption(domain: string, option: string, itemId?: string | null | undefined, value?: boolean | undefined, suboption?: string | null | undefined): Promise<boolean | null>;
  protected _tokenImages: string[] | null;
  transferItemToActor(
    targetActor: ActorPF2e<TokenDocumentPF2e<ScenePF2e | null> | null>,
    item: ItemPF2e<ActorPF2e<TokenDocumentPF2e<ScenePF2e | null> | null>>,
    quantity: number,
    containerId?: string | undefined,
    newStack?: boolean | undefined
  ): Promise<PhysicalItemPF2e<ActorPF2e<TokenDocumentPF2e<ScenePF2e | null> | null>> | null>;
  undoDamage(appliedDamage: AppliedDamageFlag): Promise<void>;
  unsetFlag(scope: string, key: string): Promise<this>;
  update(data: DocumentUpdateData<this>, options?: CreatureUpdateContext<TParent> | undefined): Promise<this>;
  updateEmbeddedDocuments(
    embeddedName: "ActiveEffect",
    updateData: EmbeddedDocumentUpdateData<ActiveEffectPF2e<this>>[],
    options?: DocumentUpdateContext<this> | undefined
  ): Promise<ActiveEffectPF2e<this>[]>;
  updateEmbeddedDocuments(
    embeddedName: "Item",
    updateData: EmbeddedDocumentUpdateData<ItemPF2e<this>>[],
    options?: DocumentUpdateContext<this> | undefined
  ): Promise<ItemPF2e<this>[]>;
  updateEmbeddedDocuments(
    embeddedName: "ActiveEffect" | "Item",
    updateData: EmbeddedDocumentUpdateData<ActiveEffectPF2e<this> | ItemPF2e<this>>[],
    options?: DocumentUpdateContext<this> | undefined
  ): Promise<ActiveEffectPF2e<this>[] | ItemPF2e<this>[]>;
  updateSource(data?: DocumentUpdateData<Document<_Document | null, DataSchema>> | undefined, options?: DocumentSourceUpdateContext | undefined): DeepPartial<this["_source"]>;
  protected _updateDependentTokens(update?: Record<string, unknown> | undefined, options?: DocumentModificationContext<TParent> | undefined): void;
  protected _onUpdate(changed: DeepPartial<this["_source"]>, options: ActorUpdateContext<TParent>, userId: string): void;
  protected _onUpdateDescendantDocuments(
    parent: this,
    collection: "effects" | "items",
    documents: ActiveEffect<this>[] | Item<this>[],
    changes: SourceFromSchema<ActiveEffectSchema>[] | ItemSource<string, object>[],
    options: DocumentModificationContext<this>,
    userId: string
  ): void;
  protected _preUpdateDescendantDocuments(parent: this, collection: string, changes: object[], options: DocumentModificationContext<this>, userId: string): void;
  validate(options?: DataModelValidationOptions | undefined): boolean;
  get wornArmor(): ArmorPF2e<this> | null;

  setEncounterRollOptions(): void;
  setFlag(scope: string, key: string, value: unknown): Promise<this>;

  findStackableItem<TActor extends this>(actor: TActor, itemSource: ItemSourcePF2e): PhysicalItemPF2e<TActor> | null;
  stowOrUnstow(item: PhysicalItemPF2e<this>, container?: ContainerPF2e<this> | undefined): Promise<void>;
  performDailyCrafting(): Promise<void>;
  consumeAmmo(weapon: WeaponPF2e<this>, params: RollParameters): boolean;
  /** Toggle the invested state of an owned magical item */
  toggleInvested(itemId: string): Promise<boolean>;
  addToInventory(itemSource: PhysicalItemSource, container?: ContainerPF2e<this> | undefined, newStack?: boolean | undefined): Promise<PhysicalItemPF2e<this> | null>;

  /** Core singular embeds for PCs */
  ancestry: AncestryPF2e<this> | null;
  heritage: HeritagePF2e<this> | null;
  background: BackgroundPF2e<this> | null;
  class: ClassPF2e<this> | null;
  deity: DeityPF2e<this> | null;

  get alliance(): ActorAlliance;
  get alignment(): "CE" | "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE";
  get attributes(): this["system"]["attributes"];
  get modeOfBeing(): ModeOfBeing;
  auras: Map<string, AuraData>;
  get appliedEffects(): ActiveEffect<this>[];

  /** A cached reference to this PC's familiar */
  familiar: FamiliarPF2e | null;

  feats: CharacterFeats<this>;
  pfsBoons: FeatPF2e<this>[];
  deityBoonsCurses: FeatPF2e<this>[];

  /** All base casting tradition proficiences, which spellcasting build off of */
  traditions: Record<MagicTradition, Statistic>;
  /** The primary class DC */
  classDC: Statistic | null;
  /** All class DCs, including the primary */
  classDCs: Record<string, Statistic>;
  /** Skills for the character, built during data prep */
  skills: CharacterSkills;
  initiative: ActorInitiative;
  get allowedItemTypes(): (ItemType | "physical")[];
  get keyAbility(): AbilityString;
  /** This PC's ability scores */
  get abilities(): Abilities;
  get hitPoints(): CharacterHitPointsSummary;
  get heroPoints(): {
    value: number;
    max: number;
  };
  flags: CharacterFlags;
  readonly _source: CharacterSource;
  system: CharacterSystemData;
  inventory: ActorInventory<this>;
  get itemTypes(): EmbeddedItemInstances<this>;
  _id: string | null;
  items: EmbeddedCollection<ItemPF2e<this>>;
  armorClass: StatisticDifficultyClass<ArmorStatistic>;
  get canAct(): boolean;
  get canAttack(): boolean;
  get canHostRuleElements(): boolean;
  get canSee(): boolean;
  get combatant(): CombatantPF2e<EncounterPF2e, TokenDocumentPF2e<ScenePF2e | null> | null> | null;
  conditions: ActorConditions<this>;
  get collection(): Collection<this>;
  get compendium(): CompendiumCollection<CompendiumDocument> | undefined;
  get dimensions(): ActorDimensions;
  get documentName(): any;
  effects: EmbeddedCollection<ActiveEffectPF2e<this>>;
  get emitsSound(): boolean;
  get hardness(): number;
  get hasDarkvision(): boolean;
  get hasLowLightVision(): boolean;
  get hasPlayerOwner(): boolean;
  get heldShield(): ArmorPF2e<this> | null;
  get id(): string;
  public img:
    | `${string}.apng`
    | `${string}.avif`
    | `${string}.bmp`
    | `${string}.gif`
    | `${string}.jpeg`
    | `${string}.jpg`
    | `${string}.png`
    | `${string}.svg`
    | `${string}.tiff`
    | `${string}.webp`;
  get inCombat(): boolean;
  get isDead(): boolean;
  get isEmbedded(): boolean;
  get isOwner(): boolean;
  get isSpellcaster(): boolean;
  get isToken(): boolean;
  get sourceId(): ActorUUID | null;
  get level(): number;
  get limited(): boolean;
  get link(): string;
  public name: string;
  overrides: Omit<DeepPartial<this["_source"]>, "prototypeToken">;
  parties: Set<PartyPF2e<TokenDocumentPF2e<ScenePF2e | null> | null>>;
  perception: Statistic;
  pack: string | null;
  get rarity(): "common" | "uncommon" | "rare" | "unique";
  get primaryUpdater(): UserPF2e | null;
  get permission(): DocumentOwnershipLevel;
  prototypeToken: PrototypeTokenPF2e<this>;
  synthetics: RuleElementSynthetics;
  rules: RuleElementPF2e<RuleElementSchema>[];
  spellcasting: ActorSpellcasting<this>;
  saves: Record<"fortitude" | "reflex" | "will", Statistic>;
  get rollOptions(): RollOptionFlags;
  get sheet(): ActorSheetPF2e<this>;
  get size(): "tiny" | "sm" | "med" | "lg" | "huge" | "grg";
  public sort: number;
  statuses: Set<string>;
  get temporaryEffects(): TemporaryEffect[];
  get thumbnail():
    | `${string}.apng`
    | `${string}.avif`
    | `${string}.bmp`
    | `${string}.gif`
    | `${string}.jpeg`
    | `${string}.jpg`
    | `${string}.png`
    | `${string}.svg`
    | `${string}.tiff`
    | `${string}.webp`;
  get token(): TParent;
  get traits(): Set<CreatureTrait>;
  public type: string;
  get uuid(): ActorUUID;
  get visible(): boolean;
  get visionLevel(): ZeroToThree;
  get schema(): SchemaField<DataSchema, SourceFromSchema<DataSchema>, ModelPropsFromSchema<DataSchema>, true, false, true>;
  get schemaVersion(): number | null;
}
