import { Item5E } from "./item";
import { ItemWithDescription } from "./mixins/item-description";
export interface AdvancementMixin {
  advancement: {
    byId: {};
    byLevel: any;
    byType: {};
    needingConfiguration: any[];
  }; //Advancement objects for this item
}
export interface Background5e extends ItemWithDescription, AdvancementMixin {}
