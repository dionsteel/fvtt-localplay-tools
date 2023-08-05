/**
 * Update all compendium packs using the new system data model.
 */
export function refreshAllCompendiums(): Promise<void>;
/**
 * Update all Documents in a compendium using the new system data model.
 * @param {CompendiumCollection} pack  Pack to refresh.
 */
export function refreshCompendium(pack: CompendiumCollection): Promise<void>;
/**
 * Migrate a single Item document to incorporate latest data model changes
 *
 * @param {object} item             Item data to migrate
 * @param {object} [migrationData]  Additional data to perform the migration
 * @returns {object}                The updateData to apply
 */
export function migrateItemData(item: object, migrationData?: object): object;
/**
 * A general tool to purge flags from all documents in a Compendium pack.
 * @param {CompendiumCollection} pack   The compendium pack to clean.
 * @private
 */
export function purgeFlags(pack: CompendiumCollection): Promise<void>;
export function migrateWorld(): Promise<any>;
export function migrateCompendium(pack: CompendiumCollection): Promise<any>;
export function migrateArmorClass(pack: CompendiumCollection | string): Promise<any>;
export function migrateActorData(actor: object, migrationData?: object): object;
export function migrateEffects(parent: object, migrationData?: object): object[];
export function migrateEffectData(effect: object, migrationData?: object): object;
export function migrateMacroData(macro: object, migrationData?: object): object;
export function migrateSceneData(scene: object, migrationData?: object): object;
export function getMigrationData(): Promise<object>;
