/**
 * Data definition for Loot items.
 * @mixes ItemDescriptionTemplate
 * @mixes PhysicalItemTemplate
 */

import { ItemWithDescription } from "./mixins/item-description";
import { PhysicalItem5e } from "./mixins/physical";

export interface LootItem5e extends ItemWithDescription, PhysicalItem5e {}
