/**
 * Extend the base Actor class to implement additional system-specific logic.
 */
export default class Actor5e {
    /**
     * Contribute to the actor's spellcasting progression.
     * @param {object} progression                             Spellcasting progression data. *Will be mutated.*
     * @param {Item5e} cls                                     Class for whom this progression is being computed.
     * @param {object} [config={}]
     * @param {Actor5e|null} [config.actor]                    Actor for whom the data is being prepared.
     * @param {SpellcastingDescription} [config.spellcasting]  Spellcasting descriptive object.
     * @param {number} [config.count=1]                        Number of classes with this type of spellcasting.
     */
    static computeClassProgression(progression: object, cls: Item5e, { actor, spellcasting, count }?: {
        actor?: Actor5e | null;
        spellcasting?: SpellcastingDescription;
        count?: number;
    }): void;
    /**
     * Contribute to the actor's spellcasting progression for a class with leveled spellcasting.
     * @param {object} progression                    Spellcasting progression data. *Will be mutated.*
     * @param {Actor5e} actor                         Actor for whom the data is being prepared.
     * @param {Item5e} cls                            Class for whom this progression is being computed.
     * @param {SpellcastingDescription} spellcasting  Spellcasting descriptive object.
     * @param {number} count                          Number of classes with this type of spellcasting.
     */
    static computeLeveledProgression(progression: object, actor: Actor5e, cls: Item5e, spellcasting: SpellcastingDescription, count: number): void;
    /**
     * Contribute to the actor's spellcasting progression for a class with pact spellcasting.
     * @param {object} progression                    Spellcasting progression data. *Will be mutated.*
     * @param {Actor5e} actor                         Actor for whom the data is being prepared.
     * @param {Item5e} cls                            Class for whom this progression is being computed.
     * @param {SpellcastingDescription} spellcasting  Spellcasting descriptive object.
     * @param {number} count                          Number of classes with this type of spellcasting.
     */
    static computePactProgression(progression: object, actor: Actor5e, cls: Item5e, spellcasting: SpellcastingDescription, count: number): void;
    /**
     * Prepare actor's spell slots using progression data.
     * @param {object} spells           The `data.spells` object within actor's data. *Will be mutated.*
     * @param {string} type             Type of spellcasting slots being prepared.
     * @param {object} progression      Spellcasting progression data.
     * @param {object} [config]
     * @param {Actor5e} [config.actor]  Actor for whom the data is being prepared.
     */
    static prepareSpellcastingSlots(spells: object, type: string, progression: object, { actor }?: {
        actor?: Actor5e;
    }): void;
    /**
     * Prepare leveled spell slots using progression data.
     * @param {object} spells        The `data.spells` object within actor's data. *Will be mutated.*
     * @param {Actor5e} actor        Actor for whom the data is being prepared.
     * @param {object} progression   Spellcasting progression data.
     */
    static prepareLeveledSlots(spells: object, actor: Actor5e, progression: object): void;
    /**
     * Prepare pact spell slots using progression data.
     * @param {object} spells        The `data.spells` object within actor's data. *Will be mutated.*
     * @param {Actor5e} actor        Actor for whom the data is being prepared.
     * @param {object} progression   Spellcasting progression data.
     */
    static preparePactSlots(spells: object, actor: Actor5e, progression: object): void;
    /**
     * Get a color used to represent the current hit points of an Actor.
     * @param {number} current        The current HP value
     * @param {number} max            The maximum HP value
     * @returns {Color}               The color used to represent the HP percentage
     */
    static getHPColor(current: number, max: number): Color;
    /**
     * Add additional system-specific sidebar directory context menu options for Actor documents
     * @param {jQuery} html         The sidebar HTML
     * @param {Array} entryOptions  The default array of context menu options
     */
    static addDirectoryContextOptions(html: jQuery, entryOptions: any[]): void;
    /**
     * Format a type object into a string.
     * @param {object} typeData          The type data to convert to a string.
     * @returns {string}
     */
    static formatCreatureType(typeData: object): string;
    /**
     * The data source for Actor5e.classes allowing it to be lazily computed.
     * @type {Object<Item5e>}
     * @private
     */
    private _classes;
    /**
     * A mapping of classes belonging to this Actor.
     * @type {Object<Item5e>}
     */
    get classes(): any;
    /**
     * Is this Actor currently polymorphed into some other creature?
     * @type {boolean}
     */
    get isPolymorphed(): boolean;
    /**
     * The Actor's currently equipped armor, if any.
     * @type {Item5e|null}
     */
    get armor(): any;
    /**
     * The Actor's currently equipped shield, if any.
     * @type {Item5e|null}
     */
    get shield(): any;
    /** @inheritdoc */
    _initializeSource(source: any, options?: {}): any;
    /** @inheritDoc */
    prepareData(): void;
    _preparationWarnings: any[];
    /** @inheritDoc */
    prepareBaseData(): any;
    /** @inheritDoc */
    applyActiveEffects(): any;
    /** @inheritDoc */
    prepareDerivedData(): any;
    labels: {};
    /**
     * Return the amount of experience required to gain a certain character level.
     * @param {number} level  The desired level.
     * @returns {number}      The XP required.
     */
    getLevelExp(level: number): number;
    /**
     * Return the amount of experience granted by killing a creature of a certain CR.
     * @param {number} cr     The creature's challenge rating.
     * @returns {number}      The amount of experience granted per kill.
     */
    getCRExp(cr: number): number;
    /**
     * @inheritdoc
     * @param {object} [options]
     * @param {boolean} [options.deterministic] Whether to force deterministic values for data properties that could be
     *                                            either a die term or a flat term.
     */
    getRollData({ deterministic }?: {
        deterministic?: boolean;
    }): any;
    /**
     * Initialize derived AC fields for Active Effects to target.
     * Mutates the system.attributes.ac object.
     * @protected
     */
    protected _prepareBaseArmorClass(): void;
    /**
     * Derive any values that have been scaled by the Advancement system.
     * Mutates the value of the `system.scale` object.
     * @protected
     */
    protected _prepareScaleValues(): void;
    /**
     * Perform any Character specific preparation.
     * Mutates several aspects of the system data object.
     * @protected
     */
    protected _prepareCharacterData(): void;
    /**
     * Perform any NPC specific preparation.
     * Mutates several aspects of the system data object.
     * @protected
     */
    protected _prepareNPCData(): void;
    /**
     * Perform any Vehicle specific preparation.
     * Mutates several aspects of the system data object.
     * @protected
     */
    protected _prepareVehicleData(): void;
    /**
     * Prepare abilities.
     * @param {object} bonusData      Data produced by `getRollData` to be applied to bonus formulas.
     * @param {object} globalBonuses  Global bonus data.
     * @param {number} checkBonus     Global ability check bonus.
     * @param {object} originalSaves  A transformed actor's original actor's abilities.
     * @protected
     */
    protected _prepareAbilities(bonusData: object, globalBonuses: object, checkBonus: number, originalSaves: object): void;
    /**
     * Prepare skill checks. Mutates the values of system.skills.
     * @param {object} bonusData       Data produced by `getRollData` to be applied to bonus formulas.
     * @param {object} globalBonuses   Global bonus data.
     * @param {number} checkBonus      Global ability check bonus.
     * @param {object} originalSkills  A transformed actor's original actor's skills.
     * @protected
     */
    protected _prepareSkills(bonusData: object, globalBonuses: object, checkBonus: number, originalSkills: object): void;
    /**
     * Prepare tool checks. Mutates the values of system.tools.
     * @param {object} bonusData       Data produced by `getRollData` to be applied to bonus formulae.
     * @param {object} globalBonuses   Global bonus data.
     * @param {number} checkBonus      Global ability check bonus.
     * @protected
     */
    protected _prepareTools(bonusData: object, globalBonuses: object, checkBonus: number): void;
    /**
     * Prepare a character's AC value from their equipped armor and shield.
     * Mutates the value of the `system.attributes.ac` object.
     */
    _prepareArmorClass(): void;
    /**
     * Prepare the level and percentage of encumbrance for an Actor.
     * Optionally include the weight of carried currency by applying the standard rule from the PHB pg. 143.
     * Mutates the value of the `system.attributes.encumbrance` object.
     * @protected
     */
    protected _prepareEncumbrance(): void;
    /**
     * Prepare hit points for characters.
     * @param {object} rollData  Data produced by `getRollData` to be applied to bonus formulas.
     * @protected
     */
    protected _prepareHitPoints(rollData: object): void;
    /**
     * Prepare the initiative data for an actor.
     * Mutates the value of the system.attributes.init object.
     * @param {object} bonusData         Data produced by getRollData to be applied to bonus formulas
     * @param {number} globalCheckBonus  Global ability check bonus
     * @protected
     */
    protected _prepareInitiative(bonusData: object, globalCheckBonus?: number): void;
    /**
     * Prepare data related to the spell-casting capabilities of the Actor.
     * Mutates the value of the system.spells object.
     * @protected
     */
    protected _prepareSpellcasting(): void;
    /** @inheritdoc */
    _preCreate(data: any, options: any, user: any): Promise<void>;
    /** @inheritdoc */
    _preUpdate(changed: any, options: any, user: any): Promise<void>;
    /**
     * Assign a class item as the original class for the Actor based on which class has the most levels.
     * @returns {Promise<Actor5e>}  Instance of the updated actor.
     * @protected
     */
    protected _assignPrimaryClass(): Promise<Actor5e>;
    /** @override */
    override modifyTokenAttribute(attribute: any, value: any, isDelta: any, isBar: any): Promise<any>;
    /**
     * Apply a certain amount of damage or healing to the health pool for Actor
     * @param {number} amount       An amount of damage (positive) or healing (negative) to sustain
     * @param {number} multiplier   A multiplier which allows for resistance, vulnerability, or healing
     * @returns {Promise<Actor5e>}  A Promise which resolves once the damage has been applied
     */
    applyDamage(amount?: number, multiplier?: number): Promise<Actor5e>;
    /**
     * Apply a certain amount of temporary hit point, but only if it's more than the actor currently has.
     * @param {number} amount       An amount of temporary hit points to set
     * @returns {Promise<Actor5e>}  A Promise which resolves once the temp HP has been applied
     */
    applyTempHP(amount?: number): Promise<Actor5e>;
    /**
     * Determine whether the provided ability is usable for remarkable athlete.
     * @param {string} ability  Ability type to check.
     * @returns {boolean}       Whether the actor has the remarkable athlete flag and the ability is physical.
     * @private
     */
    private _isRemarkableAthlete;
    /**
     * Roll a Skill Check
     * Prompt the user for input regarding Advantage/Disadvantage and any Situational Bonus
     * @param {string} skillId      The skill id (e.g. "ins")
     * @param {object} options      Options which configure how the skill check is rolled
     * @returns {Promise<D20Roll>}  A Promise which resolves to the created Roll instance
     */
    rollSkill(skillId: string, options?: object): Promise<D20Roll>;
    /**
     * Roll a Tool Check.
     * Prompt the user for input regarding Advantage/Disadvantage and any Situational Bonuses.
     * @param {string} toolId       The identifier of the tool being rolled.
     * @param {object} options      Options which configure how the tool check is rolled.
     * @returns {Promise<D20Roll>}  A Promise which resolves to the created Roll instance.
     */
    rollToolCheck(toolId: string, options?: object): Promise<D20Roll>;
    /**
     * Roll a generic ability test or saving throw.
     * Prompt the user for input on which variety of roll they want to do.
     * @param {string} abilityId    The ability id (e.g. "str")
     * @param {object} options      Options which configure how ability tests or saving throws are rolled
     */
    rollAbility(abilityId: string, options?: object): void;
    /**
     * Roll an Ability Test
     * Prompt the user for input regarding Advantage/Disadvantage and any Situational Bonus
     * @param {string} abilityId    The ability ID (e.g. "str")
     * @param {object} options      Options which configure how ability tests are rolled
     * @returns {Promise<D20Roll>}  A Promise which resolves to the created Roll instance
     */
    rollAbilityTest(abilityId: string, options?: object): Promise<D20Roll>;
    /**
     * Roll an Ability Saving Throw
     * Prompt the user for input regarding Advantage/Disadvantage and any Situational Bonus
     * @param {string} abilityId    The ability ID (e.g. "str")
     * @param {object} options      Options which configure how ability tests are rolled
     * @returns {Promise<D20Roll>}  A Promise which resolves to the created Roll instance
     */
    rollAbilitySave(abilityId: string, options?: object): Promise<D20Roll>;
    /**
     * Perform a death saving throw, rolling a d20 plus any global save bonuses
     * @param {object} options          Additional options which modify the roll
     * @returns {Promise<D20Roll|null>} A Promise which resolves to the Roll instance
     */
    rollDeathSave(options?: object): Promise<D20Roll | null>;
    /**
     * Get an un-evaluated D20Roll instance used to roll initiative for this Actor.
     * @param {object} [options]                        Options which modify the roll
     * @param {D20Roll.ADV_MODE} [options.advantageMode]    A specific advantage mode to apply
     * @param {string} [options.flavor]                     Special flavor text to apply
     * @returns {D20Roll}                               The constructed but unevaluated D20Roll
     */
    getInitiativeRoll(options?: {
        advantageMode?: D20Roll.ADV_MODE;
        flavor?: string;
    }): D20Roll;
    /**
     * Roll initiative for this Actor with a dialog that provides an opportunity to elect advantage or other bonuses.
     * @param {object} [rollOptions]      Options forwarded to the Actor#getInitiativeRoll method
     * @returns {Promise<void>}           A promise which resolves once initiative has been rolled for the Actor
     */
    rollInitiativeDialog(rollOptions?: object): Promise<void>;
    _cachedInitiativeRoll: D20Roll;
    /** @inheritdoc */
    rollInitiative(options?: {}): Promise<any>;
    /**
     * Roll a hit die of the appropriate type, gaining hit points equal to the die roll plus your CON modifier.
     * @param {string} [denomination]  The hit denomination of hit die to roll. Example "d8".
     *                                 If no denomination is provided, the first available HD will be used
     * @param {object} options         Additional options which modify the roll.
     * @returns {Promise<Roll|null>}   The created Roll instance, or null if no hit die was rolled
     */
    rollHitDie(denomination?: string, options?: object): Promise<Roll | null>;
    /**
     * Roll hit points for a specific class as part of a level-up workflow.
     * @param {Item5e} item                         The class item whose hit dice to roll.
     * @param {object} options
     * @param {boolean} [options.chatMessage=true]  Display the chat message for this roll.
     * @returns {Promise<Roll>}                     The completed roll.
     * @see {@link dnd5e.preRollClassHitPoints}
     */
    rollClassHitPoints(item: Item5e, { chatMessage }?: {
        chatMessage?: boolean;
    }): Promise<Roll>;
    /**
     * Roll hit points for an NPC based on the HP formula.
     * @param {object} options
     * @param {boolean} [options.chatMessage=true]  Display the chat message for this roll.
     * @returns {Promise<Roll>}                     The completed roll.
     * @see {@link dnd5e.preRollNPCHitPoints}
     */
    rollNPCHitPoints({ chatMessage }?: {
        chatMessage?: boolean;
    }): Promise<Roll>;
    /**
     * Configuration options for a rest.
     *
     * @typedef {object} RestConfiguration
     * @property {boolean} dialog            Present a dialog window which allows for rolling hit dice as part of the
     *                                       Short Rest and selecting whether a new day has occurred.
     * @property {boolean} chat              Should a chat message be created to summarize the results of the rest?
     * @property {boolean} newDay            Does this rest carry over to a new day?
     * @property {boolean} [autoHD]          Should hit dice be spent automatically during a short rest?
     * @property {number} [autoHDThreshold]  How many hit points should be missing before hit dice are
     *                                       automatically spent during a short rest.
     */
    /**
     * Results from a rest operation.
     *
     * @typedef {object} RestResult
     * @property {number} dhp            Hit points recovered during the rest.
     * @property {number} dhd            Hit dice recovered or spent during the rest.
     * @property {object} updateData     Updates applied to the actor.
     * @property {object[]} updateItems  Updates applied to actor's items.
     * @property {boolean} longRest      Whether the rest type was a long rest.
     * @property {boolean} newDay        Whether a new day occurred during the rest.
     * @property {Roll[]} rolls          Any rolls that occurred during the rest process, not including hit dice.
     */
    /**
     * Take a short rest, possibly spending hit dice and recovering resources, item uses, and pact slots.
     * @param {RestConfiguration} [config]  Configuration options for a short rest.
     * @returns {Promise<RestResult>}       A Promise which resolves once the short rest workflow has completed.
     */
    shortRest(config?: {
        /**
         * Present a dialog window which allows for rolling hit dice as part of the
         * Short Rest and selecting whether a new day has occurred.
         */
        dialog: boolean;
        /**
         * Should a chat message be created to summarize the results of the rest?
         */
        chat: boolean;
        /**
         * Does this rest carry over to a new day?
         */
        newDay: boolean;
        /**
         * Should hit dice be spent automatically during a short rest?
         */
        autoHD?: boolean;
        /**
         * How many hit points should be missing before hit dice are
         *   automatically spent during a short rest.
         */
        autoHDThreshold?: number;
    }): Promise<{
        /**
         * Hit points recovered during the rest.
         */
        dhp: number;
        /**
         * Hit dice recovered or spent during the rest.
         */
        dhd: number;
        /**
         * Updates applied to the actor.
         */
        updateData: object;
        /**
         * Updates applied to actor's items.
         */
        updateItems: object[];
        /**
         * Whether the rest type was a long rest.
         */
        longRest: boolean;
        /**
         * Whether a new day occurred during the rest.
         */
        newDay: boolean;
        /**
         * Any rolls that occurred during the rest process, not including hit dice.
         */
        rolls: Roll[];
    }>;
    /**
     * Take a long rest, recovering hit points, hit dice, resources, item uses, and spell slots.
     * @param {RestConfiguration} [config]  Configuration options for a long rest.
     * @returns {Promise<RestResult>}       A Promise which resolves once the long rest workflow has completed.
     */
    longRest(config?: {
        /**
         * Present a dialog window which allows for rolling hit dice as part of the
         * Short Rest and selecting whether a new day has occurred.
         */
        dialog: boolean;
        /**
         * Should a chat message be created to summarize the results of the rest?
         */
        chat: boolean;
        /**
         * Does this rest carry over to a new day?
         */
        newDay: boolean;
        /**
         * Should hit dice be spent automatically during a short rest?
         */
        autoHD?: boolean;
        /**
         * How many hit points should be missing before hit dice are
         *   automatically spent during a short rest.
         */
        autoHDThreshold?: number;
    }): Promise<{
        /**
         * Hit points recovered during the rest.
         */
        dhp: number;
        /**
         * Hit dice recovered or spent during the rest.
         */
        dhd: number;
        /**
         * Updates applied to the actor.
         */
        updateData: object;
        /**
         * Updates applied to actor's items.
         */
        updateItems: object[];
        /**
         * Whether the rest type was a long rest.
         */
        longRest: boolean;
        /**
         * Whether a new day occurred during the rest.
         */
        newDay: boolean;
        /**
         * Any rolls that occurred during the rest process, not including hit dice.
         */
        rolls: Roll[];
    }>;
    /**
     * Perform all of the changes needed for a short or long rest.
     *
     * @param {boolean} chat           Summarize the results of the rest workflow as a chat message.
     * @param {boolean} newDay         Has a new day occurred during this rest?
     * @param {boolean} longRest       Is this a long rest?
     * @param {number} [dhd=0]         Number of hit dice spent during so far during the rest.
     * @param {number} [dhp=0]         Number of hit points recovered so far during the rest.
     * @returns {Promise<RestResult>}  Consolidated results of the rest workflow.
     * @private
     */
    private _rest;
    /**
     * Display a chat message with the result of a rest.
     *
     * @param {RestResult} result         Result of the rest operation.
     * @param {boolean} [longRest=false]  Is this a long rest?
     * @returns {Promise<ChatMessage>}    Chat message that was created.
     * @protected
     */
    protected _displayRestResultMessage(result: {
        /**
         * Hit points recovered during the rest.
         */
        dhp: number;
        /**
         * Hit dice recovered or spent during the rest.
         */
        dhd: number;
        /**
         * Updates applied to the actor.
         */
        updateData: object;
        /**
         * Updates applied to actor's items.
         */
        updateItems: object[];
        /**
         * Whether the rest type was a long rest.
         */
        longRest: boolean;
        /**
         * Whether a new day occurred during the rest.
         */
        newDay: boolean;
        /**
         * Any rolls that occurred during the rest process, not including hit dice.
         */
        rolls: Roll[];
    }, longRest?: boolean): Promise<ChatMessage>;
    /**
     * Automatically spend hit dice to recover hit points up to a certain threshold.
     * @param {object} [options]
     * @param {number} [options.threshold=3]  A number of missing hit points which would trigger an automatic HD roll.
     * @returns {Promise<number>}             Number of hit dice spent.
     */
    autoSpendHitDice({ threshold }?: {
        threshold?: number;
    }): Promise<number>;
    /**
     * Recovers actor hit points and eliminates any temp HP.
     * @param {object} [options]
     * @param {boolean} [options.recoverTemp=true]     Reset temp HP to zero.
     * @param {boolean} [options.recoverTempMax=true]  Reset temp max HP to zero.
     * @returns {object}                               Updates to the actor and change in hit points.
     * @protected
     */
    protected _getRestHitPointRecovery({ recoverTemp, recoverTempMax }?: {
        recoverTemp?: boolean;
        recoverTempMax?: boolean;
    }): object;
    /**
     * Recovers actor resources.
     * @param {object} [options]
     * @param {boolean} [options.recoverShortRestResources=true]  Recover resources that recharge on a short rest.
     * @param {boolean} [options.recoverLongRestResources=true]   Recover resources that recharge on a long rest.
     * @returns {object}                                          Updates to the actor.
     * @protected
     */
    protected _getRestResourceRecovery({ recoverShortRestResources, recoverLongRestResources }?: {
        recoverShortRestResources?: boolean;
        recoverLongRestResources?: boolean;
    }): object;
    /**
     * Recovers spell slots and pact slots.
     * @param {object} [options]
     * @param {boolean} [options.recoverPact=true]     Recover all expended pact slots.
     * @param {boolean} [options.recoverSpells=true]   Recover all expended spell slots.
     * @returns {object}                               Updates to the actor.
     * @protected
     */
    protected _getRestSpellRecovery({ recoverPact, recoverSpells }?: {
        recoverPact?: boolean;
        recoverSpells?: boolean;
    }): object;
    /**
     * Recovers class hit dice during a long rest.
     *
     * @param {object} [options]
     * @param {number} [options.maxHitDice]  Maximum number of hit dice to recover.
     * @returns {object}                     Array of item updates and number of hit dice recovered.
     * @protected
     */
    protected _getRestHitDiceRecovery({ maxHitDice }?: {
        maxHitDice?: number;
    }): object;
    /**
     * Recovers item uses during short or long rests.
     * @param {object} [options]
     * @param {boolean} [options.recoverShortRestUses=true]  Recover uses for items that recharge after a short rest.
     * @param {boolean} [options.recoverLongRestUses=true]   Recover uses for items that recharge after a long rest.
     * @param {boolean} [options.recoverDailyUses=true]      Recover uses for items that recharge on a new day.
     * @param {Roll[]} [options.rolls]                       Rolls that have been performed as part of this rest.
     * @returns {Promise<object[]>}                          Array of item updates.
     * @protected
     */
    protected _getRestItemUsesRecovery({ recoverShortRestUses, recoverLongRestUses, recoverDailyUses, rolls }?: {
        recoverShortRestUses?: boolean;
        recoverLongRestUses?: boolean;
        recoverDailyUses?: boolean;
        rolls?: Roll[];
    }): Promise<object[]>;
    /**
     * Convert all carried currency to the highest possible denomination using configured conversion rates.
     * See CONFIG.DND5E.currencies for configuration.
     * @returns {Promise<Actor5e>}
     */
    convertCurrency(): Promise<Actor5e>;
    /**
     * Options that determine what properties of the original actor are kept and which are replaced with
     * the target actor.
     *
     * @typedef {object} TransformationOptions
     * @property {boolean} [keepPhysical=false]       Keep physical abilities (str, dex, con)
     * @property {boolean} [keepMental=false]         Keep mental abilities (int, wis, cha)
     * @property {boolean} [keepSaves=false]          Keep saving throw proficiencies
     * @property {boolean} [keepSkills=false]         Keep skill proficiencies
     * @property {boolean} [mergeSaves=false]         Take the maximum of the save proficiencies
     * @property {boolean} [mergeSkills=false]        Take the maximum of the skill proficiencies
     * @property {boolean} [keepClass=false]          Keep proficiency bonus
     * @property {boolean} [keepFeats=false]          Keep features
     * @property {boolean} [keepSpells=false]         Keep spells
     * @property {boolean} [keepItems=false]          Keep items
     * @property {boolean} [keepBio=false]            Keep biography
     * @property {boolean} [keepVision=false]         Keep vision
     * @property {boolean} [keepSelf=false]           Keep self
     * @property {boolean} [keepAE=false]             Keep all effects
     * @property {boolean} [keepOriginAE=true]        Keep effects which originate on this actor
     * @property {boolean} [keepOtherOriginAE=true]   Keep effects which originate on another actor
     * @property {boolean} [keepSpellAE=true]         Keep effects which originate from actors spells
     * @property {boolean} [keepFeatAE=true]          Keep effects which originate from actors features
     * @property {boolean} [keepEquipmentAE=true]     Keep effects which originate on actors equipment
     * @property {boolean} [keepClassAE=true]         Keep effects which originate from actors class/subclass
     * @property {boolean} [keepBackgroundAE=true]    Keep effects which originate from actors background
     * @property {boolean} [transformTokens=true]     Transform linked tokens too
     */
    /**
     * Transform this Actor into another one.
     *
     * @param {Actor5e} target                      The target Actor.
     * @param {TransformationOptions} [options={}]  Options that determine how the transformation is performed.
     * @param {boolean} [options.renderSheet=true]  Render the sheet of the transformed actor after the polymorph
     * @returns {Promise<Array<Token>>|null}        Updated token if the transformation was performed.
     */
    transformInto(target: Actor5e, { keepPhysical, keepMental, keepSaves, keepSkills, mergeSaves, mergeSkills, keepClass, keepFeats, keepSpells, keepItems, keepBio, keepVision, keepSelf, keepAE, keepOriginAE, keepOtherOriginAE, keepSpellAE, keepEquipmentAE, keepFeatAE, keepClassAE, keepBackgroundAE, transformTokens }?: {
        /**
         * Keep physical abilities (str, dex, con)
         */
        keepPhysical?: boolean;
        /**
         * Keep mental abilities (int, wis, cha)
         */
        keepMental?: boolean;
        /**
         * Keep saving throw proficiencies
         */
        keepSaves?: boolean;
        /**
         * Keep skill proficiencies
         */
        keepSkills?: boolean;
        /**
         * Take the maximum of the save proficiencies
         */
        mergeSaves?: boolean;
        /**
         * Take the maximum of the skill proficiencies
         */
        mergeSkills?: boolean;
        /**
         * Keep proficiency bonus
         */
        keepClass?: boolean;
        /**
         * Keep features
         */
        keepFeats?: boolean;
        /**
         * Keep spells
         */
        keepSpells?: boolean;
        /**
         * Keep items
         */
        keepItems?: boolean;
        /**
         * Keep biography
         */
        keepBio?: boolean;
        /**
         * Keep vision
         */
        keepVision?: boolean;
        /**
         * Keep self
         */
        keepSelf?: boolean;
        /**
         * Keep all effects
         */
        keepAE?: boolean;
        /**
         * Keep effects which originate on this actor
         */
        keepOriginAE?: boolean;
        /**
         * Keep effects which originate on another actor
         */
        keepOtherOriginAE?: boolean;
        /**
         * Keep effects which originate from actors spells
         */
        keepSpellAE?: boolean;
        /**
         * Keep effects which originate from actors features
         */
        keepFeatAE?: boolean;
        /**
         * Keep effects which originate on actors equipment
         */
        keepEquipmentAE?: boolean;
        /**
         * Keep effects which originate from actors class/subclass
         */
        keepClassAE?: boolean;
        /**
         * Keep effects which originate from actors background
         */
        keepBackgroundAE?: boolean;
        /**
         * Transform linked tokens too
         */
        transformTokens?: boolean;
    }, { renderSheet }?: boolean): Promise<Array<Token>> | null;
    /**
     * If this actor was transformed with transformTokens enabled, then its
     * active tokens need to be returned to their original state. If not, then
     * we can safely just delete this actor.
     * @param {object} [options]
     * @param {boolean} [options.renderSheet=true]  Render Sheet after revert the transformation.
     * @returns {Promise<Actor>|null}  Original actor if it was reverted.
     */
    revertOriginalForm({ renderSheet }?: {
        renderSheet?: boolean;
    }): Promise<Actor> | null;
    /** @inheritdoc */
    _onUpdate(data: any, options: any, userId: any): void;
    /**
     * Display changes to health as scrolling combat text.
     * Adapt the font size relative to the Actor's HP total to emphasize more significant blows.
     * @param {number} dhp      The change in hit points that was applied
     * @private
     */
    private _displayScrollingDamage;
}
