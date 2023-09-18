import { ItemType } from "@/interfaces/pf2e/item/data/index";
// import { PickableThing } from "@/interfaces/pf2e/apps/pick-a-thing-prompt";
import { RawPredicate } from "@/interfaces/pf2e/system/predication";
import { PredicateField, BooleanField, SchemaField, StringField, RuleElementSchema } from "@/interfaces/pf2e/rules/rule-element";
import { RuleElementSource } from "../index";
export type PickableThing<T = any> = T;
export type SourceFromSchema<S> = any;
export type ModelPropsFromSchema<S> = any;

type ChoiceSetSchema = RuleElementSchema & {
  /** The prompt to present in the ChoiceSet application window */
  prompt: StringField<string, string, true, false, true>;
  /** Whether the parent item's name should be adjusted to reflect the choice made */
  adjustName: BooleanField<boolean, boolean, true, false, true>;
  /**
   * The name of the flag that will contain the user's selection. If not set, it defaults to the camel-casing of the
   * parent item's slug, falling back to name.
   */
  flag: StringField<string, string, false, false, false>;
  /** An optional roll option to be set from the selection */
  rollOption: StringField<string, string, false, true, true>;
  /** A predicate indicating valid dropped item selections */
  allowedDrops: SchemaField<AllowedDropsData, SourceFromSchema<AllowedDropsData>, ModelPropsFromSchema<AllowedDropsData>, false, true, true>;
  /** Allow the user to make no selection without suppressing all other rule elements on the parent item */
  allowNoSelection: BooleanField<boolean, boolean, false, false, true>;
};
type AllowedDropsData = {
  label: StringField<string, string, true, true, true>;
  predicate: PredicateField;
};
type UninflatedChoiceSet = string | PickableThing<string | number>[] | ChoiceSetOwnedItems | ChoiceSetAttacks | ChoiceSetPackQuery;
interface ChoiceSetSource extends RuleElementSource {
  choices?: UninflatedChoiceSet;
  flag?: unknown;
  prompt?: unknown;
  selection?: unknown;
  adjustName?: unknown;
  recordSlug?: unknown;
  allowedDrops?: unknown;
  allowNoSelection?: unknown;
  rollOption?: unknown;
}
interface ChoiceSetOwnedItems {
  /** Whether the choices should pull from items on the actor. */
  ownedItems: boolean;
  /** Whether the choices should include handwraps of mighty blows in addition to weapons */
  includeHandwraps?: boolean;
  /** The filter to apply the actor's own weapons/unarmed attacks */
  predicate: RawPredicate;
  attacks?: never;
  unarmedAttacks?: never;
  types: (ItemType | "physical")[];
}
interface ChoiceSetAttacks {
  /** Include all attacks, limited by predicate */
  attacks?: boolean;
  /** Include only unarmed attacks as the basis of the choices */
  unarmedAttacks?: boolean;
  /** The filter to apply the actor's own weapons/unarmed attacks */
  predicate: RawPredicate;
  ownedItems?: never;
}
interface ChoiceSetPackQuery {
  /** A system item type: defaults to "feat" */
  itemType?: ItemType;
  /** An optional pack to restrict the search to */
  pack?: boolean;
  /** A predicate used to filter items constructed from index data */
  filter: RawPredicate;
  /** Use the item slugs as values instead of their UUIDs */
  slugsAsValues?: boolean;
  ownedItems?: never;
  attacks?: never;
  unarmedAttacks?: never;
}
export type { ChoiceSetAttacks, ChoiceSetOwnedItems, ChoiceSetPackQuery, ChoiceSetSchema, ChoiceSetSource, UninflatedChoiceSet };