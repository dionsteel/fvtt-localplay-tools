/**
 * Get the key path to the specified trait on an actor.
 * @param {string} trait  Trait as defined in `CONFIG.DND5E.traits`.
 * @returns {string}      Key path to this trait's object within an actor's system data.
 */
export function actorKeyPath(trait: string): string;
/**
 * Fetch the categories object for the specified trait.
 * @param {string} trait  Trait as defined in `CONFIG.DND5E.traits`.
 * @returns {object}      Trait categories defined within `CONFIG.DND5E`.
 */
export function categories(trait: string): object;
/**
 * Get a list of choices for a specific trait.
 * @param {string} trait             Trait as defined in `CONFIG.DND5E.traits`.
 * @param {Set<string>} [chosen=[]]  Optional list of keys to be marked as chosen.
 * @returns {object}                 Object mapping proficiency ids to choice objects.
 */
export function choices(trait: string, chosen?: Set<string>): object;
/**
 * Fetch an item for the provided ID. If the provided ID contains a compendium pack name
 * it will be fetched from that pack, otherwise it will be fetched from the compendium defined
 * in `DND5E.sourcePacks.ITEMS`.
 * @param {string} identifier            Simple ID or compendium name and ID separated by a dot.
 * @param {object} [options]
 * @param {boolean} [options.indexOnly]  If set to true, only the index data will be fetched (will never return
 *                                       Promise).
 * @param {boolean} [options.fullItem]   If set to true, the full item will be returned as long as `indexOnly` is
 *                                       false.
 * @returns {Promise<Item5e>|object}     Promise for a `Document` if `indexOnly` is false & `fullItem` is true,
 *                                       otherwise else a simple object containing the minimal index data.
 */
export function getBaseItem(identifier: string, { indexOnly, fullItem }?: {
    indexOnly?: boolean;
    fullItem?: boolean;
}): Promise<Item5e> | object;
/**
 * List of fields on items that should be indexed for retrieving subtypes.
 * @returns {string[]}  Index list to pass to `Compendium#getIndex`.
 * @protected
 */
export function traitIndexFields(): string[];
/**
 * Get the localized label for a specific trait type.
 * @param {string} trait    Trait as defined in `CONFIG.DND5E.traits`.
 * @param {number} [count]  Count used to determine pluralization. If no count is provided, will default to
 *                          the 'other' pluralization.
 * @returns {string}        Localized label.
 */
export function traitLabel(trait: string, count?: number): string;
/**
 * Retrieve the proper display label for the provided key.
 * @param {string} trait  Trait as defined in `CONFIG.DND5E.traits`.
 * @param {string} key    Key for which to generate the label.
 * @returns {string}      Retrieved label.
 */
export function keyLabel(trait: string, key: string): string;
/**
 * Create a human readable description of the provided choice.
 * @param {string} trait        Trait as defined in `CONFIG.DND5E.traits`.
 * @param {TraitChoice} choice  Data for a specific choice.
 * @returns {string}
 */
export function choiceLabel(trait: string, choice: TraitChoice): string;
