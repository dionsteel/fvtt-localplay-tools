import "../dice/d20-roll.mjs";
import type { D20RollConfiguration } from "../dice/dice.d.mts";
/**
 * Override and extend the basic Item implementation.
 */
declare class Item5e extends Item {
  /**
   * Apply listeners to chat messages.
   * @param {HTML} html  Rendered chat message.
   */
  static chatListeners(html: string|any): void;
  /**
   * Handle execution of a chat card action via a click event on one of the card buttons
   * @param {Event} event       The originating click event
   * @returns {Promise}         A promise which resolves once the handler workflow is complete
   * @private
   */
  private static _onChatCardAction;
  /**
   * Handle toggling the visibility of chat card content when the name is clicked
   * @param {Event} event   The originating click event
   * @private
   */
  private static _onChatCardToggleContent;
  /**
   * Get the Actor which is the author of a chat card
   * @param {HTMLElement} card    The chat card being used
   * @returns {Actor|null}        The Actor document or null
   * @private
   */
  private static _getChatCardActor;
  /**
   * Get the Actor which is the author of a chat card
   * @param {HTMLElement} card    The chat card being used
   * @returns {Actor[]}            An Array of Actor documents, if any
   * @private
   */
  private static _getChatCardTargets;
  /**
   * Create a consumable spell scroll Item from a spell Item.
   * @param {Item5e} spell      The spell to be made into a scroll
   * @returns {Item5e}          The created scroll consumable item
   */
  static createScrollFromSpell(spell: Item5e): Item5e;
  /**
   * Caches an item linked to this one, such as a subclass associated with a class.
   * @type {Item5e}
   * @private
   */
  private _classLink;
  /**
   * Which ability score modifier is used by this item?
   * @type {string|null}
   * @see {@link ActionTemplate#abilityMod}
   */
  get abilityMod(): string;
  /**
   * What is the critical hit threshold for this item, if applicable?
   * @type {number|null}
   * @see {@link ActionTemplate#criticalThreshold}
   */
  get criticalThreshold(): number;
  /**
   * Does the Item implement an ability check as part of its usage?
   * @type {boolean}
   * @see {@link ActionTemplate#hasAbilityCheck}
   */
  get hasAbilityCheck(): boolean;
  /**
   * Does this item support advancement and have advancements defined?
   * @type {boolean}
   */
  get hasAdvancement(): boolean;
  /**
   * Does the Item have an area of effect target?
   * @type {boolean}
   * @see {@link ActivatedEffectTemplate#hasAreaTarget}
   */
  get hasAreaTarget(): boolean;
  /**
   * Does the Item implement an attack roll as part of its usage?
   * @type {boolean}
   * @see {@link ActionTemplate#hasAttack}
   */
  get hasAttack(): boolean;
  /**
   * Does the Item implement a damage roll as part of its usage?
   * @type {boolean}
   * @see {@link ActionTemplate#hasDamage}
   */
  get hasDamage(): boolean;
  /**
   * Does the Item target one or more distinct targets?
   * @type {boolean}
   * @see {@link ActivatedEffectTemplate#hasIndividualTarget}
   */
  get hasIndividualTarget(): boolean;
  /**
   * Is this Item limited in its ability to be used by charges or by recharge?
   * @type {boolean}
   * @see {@link ActivatedEffectTemplate#hasLimitedUses}
   * @see {@link FeatData#hasLimitedUses}
   */
  get hasLimitedUses(): boolean;
  /**
   * Does the Item implement a saving throw as part of its usage?
   * @type {boolean}
   * @see {@link ActionTemplate#hasSave}
   */
  get hasSave(): boolean;
  /**
   * Does the Item have a target?
   * @type {boolean}
   * @see {@link ActivatedEffectTemplate#hasTarget}
   */
  get hasTarget(): boolean;
  /**
   * Return an item's identifier.
   * @type {string}
   */
  get identifier(): string;
  /**
   * Is this item any of the armor subtypes?
   * @type {boolean}
   * @see {@link EquipmentTemplate#isArmor}
   */
  get isArmor(): boolean;
  /**
   * Does the item provide an amount of healing instead of conventional damage?
   * @type {boolean}
   * @see {@link ActionTemplate#isHealing}
   */
  get isHealing(): boolean;
  /**
   * Is this item a separate large object like a siege engine or vehicle component that is
   * usually mounted on fixtures rather than equipped, and has its own AC and HP?
   * @type {boolean}
   * @see {@link EquipmentData#isMountable}
   * @see {@link WeaponData#isMountable}
   */
  get isMountable(): boolean;
  /**
   * Is this class item the original class for the containing actor? If the item is not a class or it is not
   * embedded in an actor then this will return `null`.
   * @type {boolean|null}
   */
  get isOriginalClass(): boolean;
  /**
   * Does the Item implement a versatile damage roll as part of its usage?
   * @type {boolean}
   * @see {@link ActionTemplate#isVersatile}
   */
  get isVersatile(): boolean;
  /**
   * Class associated with this subclass. Always returns null on non-subclass or non-embedded items.
   * @type {Item5e|null}
   */
  get class(): Item5e;
  /**
   * Subclass associated with this class. Always returns null on non-class or non-embedded items.
   * @type {Item5e|null}
   */
  get subclass(): Item5e;
  /**
   * Retrieve scale values for current level from advancement data.
   * @type {object}
   */
  get scaleValues(): any;
  /**
   * Spellcasting details for a class or subclass.
   *
   * @typedef {object} SpellcastingDescription
   * @property {string} type              Spellcasting type as defined in ``CONFIG.DND5E.spellcastingTypes`.
   * @property {string|null} progression  Progression within the specified spellcasting type if supported.
   * @property {string} ability           Ability used when casting spells from this class or subclass.
   * @property {number|null} levels       Number of levels of this class or subclass's class if embedded.
   */
  /**
   * Retrieve the spellcasting for a class or subclass. For classes, this will return the spellcasting
   * of the subclass if it overrides the class. For subclasses, this will return the class's spellcasting
   * if no spellcasting is defined on the subclass.
   * @type {SpellcastingDescription|null}  Spellcasting object containing progression & ability.
   */
  get spellcasting(): {
    /**
     * Spellcasting type as defined in ``CONFIG.DND5E.spellcastingTypes`.
     */
    type: string;
    /**
     * Progression within the specified spellcasting type if supported.
     */
    progression: string | null;
    /**
     * Ability used when casting spells from this class or subclass.
     */
    ability: string;
    /**
     * Number of levels of this class or subclass's class if embedded.
     */
    levels: number | null;
  };
  /**
   * Should this item's active effects be suppressed.
   * @type {boolean}
   */
  get areEffectsSuppressed(): boolean;
  /** @inheritDoc */
  prepareDerivedData(): void;
  labels: {};
  /**
   * Prepare derived data for an equipment-type item and define labels.
   * @protected
   */
  protected _prepareEquipment(): void;
  /**
   * Prepare derived data for a feat-type item and define labels.
   * @protected
   */
  protected _prepareFeat(): void;
  /**
   * Prepare derived data for a spell-type item and define labels.
   * @protected
   */
  protected _prepareSpell(): void;
  /**
   * Prepare derived data for activated items and define labels.
   * @protected
   */
  protected _prepareActivation(): void;
  /**
   * Prepare derived data and labels for items which have an action which deals damage.
   * @protected
   */
  protected _prepareAction(): void;
  /**
   * Prepare advancement objects from stored advancement data.
   * @protected
   */
  protected _prepareAdvancement(): void;
  advancement: {
    byId: {};
    byLevel: any;
    byType: {};
    needingConfiguration: any[];
  };
  /**
   * Compute item attributes which might depend on prepared actor data. If this item is embedded this method will
   * be called after the actor's data is prepared.
   * Otherwise, it will be called at the end of `Item5e#prepareDerivedData`.
   */
  prepareFinalAttributes(): void;
  /**
   * Populate a label with the compiled and simplified damage formula based on owned item
   * actor data. This is only used for display purposes and is not related to `Item5e#rollDamage`.
   * @returns {{damageType: string, formula: string, label: string}[]}
   */
  getDerivedDamageLabel(): {
    damageType: string;
    formula: string;
    label: string;
  }[];
  /**
   * Update the derived spell DC for an item that requires a saving throw.
   * @returns {number|null}
   */
  getSaveDC(): number | null;
  /**
   * Update a label to the Item detailing its total to hit bonus from the following sources:
   * - item document's innate attack bonus
   * - item's actor's proficiency bonus if applicable
   * - item's actor's global bonuses to the given item type
   * - item's ammunition if applicable
   * @returns {{rollData: object, parts: string[]}|null}  Data used in the item's Attack roll.
   */
  getAttackToHit(): {
    rollData: object;
    parts: string[];
  };
  /**
   * Populates the max uses of an item.
   * If the item is an owned item and the `max` is not numeric, calculate based on actor data.
   */
  prepareMaxUses(): void;
  /**
   * Populate the duration value of an item. If the item is an owned item and the
   * duration value is not numeric, calculate based on actor data.
   */
  prepareDurationValue(): void;
  /**
   * Replace referenced data attributes in the roll formula with values from the provided data.
   * If the attribute is not found in the provided data, display a warning on the actor.
   * @param {string} formula           The original formula within which to replace.
   * @param {object} data              The data object which provides replacements.
   * @param {object} options
   * @param {string} options.property  Name of the property to which this formula belongs.
   * @returns {string}                 Formula with replaced data.
   */
  replaceFormulaData(
    formula: string,
    data: object,
    {
      property,
    }: {
      property: string;
    }
  ): string;
  /**
   * Configuration data for an item usage being prepared.
   *
   * @typedef {object} ItemUseConfiguration
   * @property {boolean} createMeasuredTemplate  Trigger a template creation
   * @property {boolean} consumeQuantity         Should the item's quantity be consumed?
   * @property {boolean} consumeRecharge         Should a recharge be consumed?
   * @property {boolean} consumeResource         Should a linked (non-ammo) resource be consumed?
   * @property {number|string|null} consumeSpellLevel  Specific spell level to consume, or "pact" for pact level.
   * @property {boolean} consumeSpellSlot        Should any spell slot be consumed?
   * @property {boolean} consumeUsage            Should limited uses be consumed?
   * @property {boolean} needsConfiguration      Is user-configuration needed?
   */
  /**
   * Additional options used for configuring item usage.
   *
   * @typedef {object} ItemUseOptions
   * @property {boolean} configureDialog  Display a configuration dialog for the item usage, if applicable?
   * @property {string} rollMode          The roll display mode with which to display (or not) the card.
   * @property {boolean} createMessage    Whether to automatically create a chat message (if true) or simply return
   *                                      the prepared chat message data (if false).
   * @property {object} flags             Additional flags added to the chat message.
   * @property {Event} event              The browser event which triggered the item usage, if any.
   */
  /**
   * Trigger an item usage, optionally creating a chat message with followup actions.
   * @param {ItemUseOptions} [options]           Options used for configuring item usage.
   * @returns {Promise<ChatMessage|object|void>} Chat message if options.createMessage is true, message data if it is
   *                                             false, and nothing if the roll wasn't performed.
   * @deprecated since 2.0 in favor of `Item5e#use`, targeted for removal in 2.4
   */
  roll(options?: {
    /**
     * Display a configuration dialog for the item usage, if applicable?
     */
    configureDialog: boolean;
    /**
     * The roll display mode with which to display (or not) the card.
     */
    rollMode: string;
    /**
     * Whether to automatically create a chat message (if true) or simply return
     * the prepared chat message data (if false).
     */
    createMessage: boolean;
    /**
     * Additional flags added to the chat message.
     */
    flags: object;
    /**
     * The browser event which triggered the item usage, if any.
     */
    event: Event;
  }): Promise<ChatMessage | object | void>;
  /**
   * Trigger an item usage, optionally creating a chat message with followup actions.
   * @param {ItemUseConfiguration} [config]      Initial configuration data for the usage.
   * @param {ItemUseOptions} [options]           Options used for configuring item usage.
   * @returns {Promise<ChatMessage|object|void>} Chat message if options.createMessage is true, message data if it is
   *                                             false, and nothing if the roll wasn't performed.
   */
  use(
    config?: {
      /**
       * Trigger a template creation
       */
      createMeasuredTemplate: boolean;
      /**
       * Should the item's quantity be consumed?
       */
      consumeQuantity: boolean;
      /**
       * Should a recharge be consumed?
       */
      consumeRecharge: boolean;
      /**
       * Should a linked (non-ammo) resource be consumed?
       */
      consumeResource: boolean;
      /**
       * Specific spell level to consume, or "pact" for pact level.
       */
      consumeSpellLevel: number | string | null;
      /**
       * Should any spell slot be consumed?
       */
      consumeSpellSlot: boolean;
      /**
       * Should limited uses be consumed?
       */
      consumeUsage: boolean;
      /**
       * Is user-configuration needed?
       */
      needsConfiguration: boolean;
    },
    options?: {
      /**
       * Display a configuration dialog for the item usage, if applicable?
       */
      configureDialog: boolean;
      /**
       * The roll display mode with which to display (or not) the card.
       */
      rollMode: string;
      /**
       * Whether to automatically create a chat message (if true) or simply return
       * the prepared chat message data (if false).
       */
      createMessage: boolean;
      /**
       * Additional flags added to the chat message.
       */
      flags: object;
      /**
       * The browser event which triggered the item usage, if any.
       */
      event: Event;
    }
  ): Promise<ChatMessage | object | void>;
  /**
   * Verify that the consumed resources used by an Item are available and prepare the updates that should
   * be performed. If required resources are not available, display an error and return false.
   * @param {ItemUseConfiguration} config  Configuration data for an item usage being prepared.
   * @returns {object|boolean}             A set of data changes to apply when the item is used, or false.
   * @protected
   */
  protected _getUsageUpdates({
    consumeQuantity,
    consumeRecharge,
    consumeResource,
    consumeSpellSlot,
    consumeSpellLevel,
    consumeUsage,
  }: {
    /**
     * Trigger a template creation
     */
    createMeasuredTemplate: boolean;
    /**
     * Should the item's quantity be consumed?
     */
    consumeQuantity: boolean;
    /**
     * Should a recharge be consumed?
     */
    consumeRecharge: boolean;
    /**
     * Should a linked (non-ammo) resource be consumed?
     */
    consumeResource: boolean;
    /**
     * Specific spell level to consume, or "pact" for pact level.
     */
    consumeSpellLevel: number | string | null;
    /**
     * Should any spell slot be consumed?
     */
    consumeSpellSlot: boolean;
    /**
     * Should limited uses be consumed?
     */
    consumeUsage: boolean;
    /**
     * Is user-configuration needed?
     */
    needsConfiguration: boolean;
  }): object | boolean;
  /**
   * Handle update actions required when consuming an external resource
   * @param {object} itemUpdates        An object of data updates applied to this item
   * @param {object} actorUpdates       An object of data updates applied to the item owner (Actor)
   * @param {object[]} resourceUpdates  An array of updates to apply to other items owned by the actor
   * @returns {boolean|void}            Return false to block further progress, or return nothing to continue
   * @protected
   */
  protected _handleConsumeResource(
    itemUpdates: object,
    actorUpdates: object,
    resourceUpdates: object[]
  ): boolean | void;
  /**
   * Display the chat card for an Item as a Chat Message
   * @param {ItemUseOptions} [options]  Options which configure the display of the item chat card.
   * @returns {ChatMessage|object}      Chat message if `createMessage` is true, otherwise an object containing
   *                                    message data.
   */
  displayCard(options?: {
    /**
     * Display a configuration dialog for the item usage, if applicable?
     */
    configureDialog: boolean;
    /**
     * The roll display mode with which to display (or not) the card.
     */
    rollMode: string;
    /**
     * Whether to automatically create a chat message (if true) or simply return
     * the prepared chat message data (if false).
     */
    createMessage: boolean;
    /**
     * Additional flags added to the chat message.
     */
    flags: object;
    /**
     * The browser event which triggered the item usage, if any.
     */
    event: Event;
  }): ChatMessage | object;
  /**
   * Prepare an object of chat data used to display a card for the Item in the chat log.
   * @param {object} htmlOptions    Options used by the TextEditor.enrichHTML function.
   * @returns {object}              An object of chat data to render.
   */
  getChatData(htmlOptions?: object): object;
  /**
   * Place an attack roll using an item (weapon, feat, spell, or equipment)
   * Rely upon the d20Roll logic for the core implementation
   *
   * @param {D20RollConfiguration} options  Roll options which are configured and provided to the d20Roll function
   * @returns {Promise<D20Roll|null>}       A Promise which resolves to the created Roll instance
   */
  rollAttack(options?: D20RollConfiguration): Promise<D20Roll | null>;
  _ammo: any;
  /**
   * Place a damage roll using an item (weapon, feat, spell, or equipment)
   * Rely upon the damageRoll logic for the core implementation.
   * @param {object} [config]
   * @param {MouseEvent} [config.event]    An event which triggered this roll, if any
   * @param {boolean} [config.critical]    Should damage be rolled as a critical hit?
   * @param {number} [config.spellLevel]   If the item is a spell, override the level for damage scaling
   * @param {boolean} [config.versatile]   If the item is a weapon, roll damage using the versatile formula
   * @param {DamageRollConfiguration} [config.options]  Additional options passed to the damageRoll function
   * @returns {Promise<DamageRoll>}        A Promise which resolves to the created Roll instance, or null if the action
   *                                       cannot be performed.
   */
  rollDamage({
    critical,
    event,
    spellLevel,
    versatile,
    options,
  }?: {
    event?: MouseEvent;
    critical?: boolean;
    spellLevel?: number;
    versatile?: boolean;
    options?: DamageRollConfiguration;
  }): Promise<DamageRoll>;
  /**
   * Adjust a cantrip damage formula to scale it for higher level characters and monsters.
   * @param {string[]} parts   The original parts of the damage formula.
   * @param {string} scale     The scaling formula.
   * @param {number} level     Level at which the spell is being cast.
   * @param {object} rollData  A data object that should be applied to the scaled damage roll.
   * @returns {string[]}       The parts of the damage formula with the scaling applied.
   * @private
   */
  private _scaleCantripDamage;
  /**
   * Adjust the spell damage formula to scale it for spell level up-casting.
   * @param {string[]} parts      The original parts of the damage formula.
   * @param {number} baseLevel    Default level for the spell.
   * @param {number} spellLevel   Level at which the spell is being cast.
   * @param {string} formula      The scaling formula.
   * @param {object} rollData     A data object that should be applied to the scaled damage roll.
   * @returns {string[]}          The parts of the damage formula with the scaling applied.
   * @private
   */
  private _scaleSpellDamage;
  /**
   * Scale an array of damage parts according to a provided scaling formula and scaling multiplier.
   * @param {string[]} parts    The original parts of the damage formula.
   * @param {string} scaling    The scaling formula.
   * @param {number} times      A number of times to apply the scaling formula.
   * @param {object} rollData   A data object that should be applied to the scaled damage roll
   * @returns {string[]}        The parts of the damage formula with the scaling applied.
   * @private
   */
  private _scaleDamage;
  /**
   * Prepare data needed to roll an attack using an item (weapon, feat, spell, or equipment)
   * and then pass it off to `d20Roll`.
   * @param {object} [options]
   * @param {boolean} [options.spellLevel]  Level at which a spell is cast.
   * @returns {Promise<Roll>}   A Promise which resolves to the created Roll instance.
   */
  rollFormula({ spellLevel }?: { spellLevel?: boolean }): Promise<Roll>;
  /**
   * Perform an ability recharge test for an item which uses the d6 recharge mechanic.
   * @returns {Promise<Roll>}   A Promise which resolves to the created Roll instance
   */
  rollRecharge(): Promise<Roll>;
  /**
   * Prepare data needed to roll a tool check and then pass it off to `d20Roll`.
   * @param {D20RollConfiguration} [options]  Roll configuration options provided to the d20Roll function.
   * @returns {Promise<Roll>}                 A Promise which resolves to the created Roll instance.
   */
  rollToolCheck(options?: D20RollConfiguration): Promise<Roll>;
  /**
   * @inheritdoc
   * @param {object} [options]
   * @param {boolean} [options.deterministic] Whether to force deterministic values for data properties that could be
   *                                          either a die term or a flat term.
   */
  getRollData({ deterministic }?: { deterministic?: boolean }): any;
  /**
   * Create a new advancement of the specified type.
   * @param {string} type                          Type of advancement to create.
   * @param {object} [data]                        Data to use when creating the advancement.
   * @param {object} [options]
   * @param {boolean} [options.showConfig=true]    Should the new advancement's configuration application be shown?
   * @param {boolean} [options.source=false]       Should a source-only update be performed?
   * @returns {Promise<AdvancementConfig>|Item5e}  Promise for advancement config for new advancement if local
   *                                               is `false`, or item with newly added advancement.
   */
  createAdvancement(
    type: string,
    data?: object,
    {
      showConfig,
      source,
    }?: {
      showConfig?: boolean;
      source?: boolean;
    }
  ): Promise<AdvancementConfig> | Item5e;
  /**
   * Update an advancement belonging to this item.
   * @param {string} id                       ID of the advancement to update.
   * @param {object} updates                  Updates to apply to this advancement.
   * @param {object} [options={}]
   * @param {boolean} [options.source=false]  Should a source-only update be performed?
   * @returns {Promise<Item5e>|Item5e}        This item with the changes applied, promised if source is `false`.
   */
  updateAdvancement(
    id: string,
    updates: object,
    {
      source,
    }?: {
      source?: boolean;
    }
  ): Promise<Item5e> | Item5e;
  /**
   * Remove an advancement from this item.
   * @param {string} id                       ID of the advancement to remove.
   * @param {object} [options={}]
   * @param {boolean} [options.source=false]  Should a source-only update be performed?
   * @returns {Promise<Item5e>|Item5e}        This item with the changes applied.
   */
  deleteAdvancement(
    id: string,
    {
      source,
    }?: {
      source?: boolean;
    }
  ): Promise<Item5e> | Item5e;
  /**
   * Duplicate an advancement, resetting its value to default and giving it a new ID.
   * @param {string} id                             ID of the advancement to duplicate.
   * @param {object} [options]
   * @param {boolean} [options.showConfig=true]     Should the new advancement's configuration application be shown?
   * @param {boolean} [options.source=false]        Should a source-only update be performed?
   * @returns {Promise<AdvancementConfig>|Item5e}   Promise for advancement config for duplicate advancement if source
   *                                                is `false`, or item with newly duplicated advancement.
   */
  duplicateAdvancement(
    id: string,
    options?: {
      showConfig?: boolean;
      source?: boolean;
    }
  ): Promise<AdvancementConfig> | Item5e;
  /** @inheritdoc */
  getEmbeddedDocument(embeddedName: any, id: any, options: any): any;
  /** @inheritdoc */
  _preCreate(data: any, options: any, user: any): Promise<any>;
  /** @inheritdoc */
  _onCreate(data: any, options: any, userId: any): Promise<void>;
  /** @inheritdoc */
  _preUpdate(changed: any, options: any, user: any): Promise<void>;
  /** @inheritdoc */
  _onDelete(options: any, userId: any): void;
  /**
   * Pre-creation logic for the automatic configuration of owned equipment type Items.
   *
   * @param {object} data       Data for the newly created item.
   * @param {boolean} isNPC     Is this actor an NPC?
   * @returns {object}          Updates to apply to the item data.
   * @private
   */
  private _onCreateOwnedEquipment;
  /**
   * Pre-creation logic for the automatic configuration of owned spell type Items.
   *
   * @param {object} data       Data for the newly created item.
   * @param {boolean} isNPC     Is this actor an NPC?
   * @returns {object}          Updates to apply to the item data.
   * @private
   */
  private _onCreateOwnedSpell;
  /**
   * Pre-creation logic for the automatic configuration of owned tool type Items.
   * @param {object} data       Data for the newly created item.
   * @param {boolean} isNPC     Is this actor an NPC?
   * @returns {object}          Updates to apply to the item data.
   * @private
   */
  private _onCreateOwnedTool;
  /**
   * Pre-creation logic for the automatic configuration of owned weapon type Items.
   * @param {object} data       Data for the newly created item.
   * @param {boolean} isNPC     Is this actor an NPC?
   * @returns {object}          Updates to apply to the item data.
   * @private
   */
  private _onCreateOwnedWeapon;
  /**
   * Retrieve an item's critical hit threshold. Uses the smallest value from among the following sources:
   * - item document
   * - item document's actor (if it has one)
   * - item document's ammunition (if it has any)
   * - the constant '20'
   * @returns {number|null}  The minimum value that must be rolled to be considered a critical hit.
   * @deprecated since dnd5e 2.2, targeted for removal in 2.4
   */
  getCriticalThreshold(): number | null;
}
