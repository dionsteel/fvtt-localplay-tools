// import { PredicateField, SlugField } from "@/interfaces/pf2e/system/predication";
export type StringField<A = string, B = string, C = boolean, D = any, E = any> = any;
export type SlugField = string;
export type NumberField<A = number, B = number, C = any, D = any, E = any> = any;
export type ArrayField<A = any[], B = any[], C = any, D = any, E = any> = any;
export type BooleanField<A=boolean, B=boolean, C=any, D=any, E=any> = any;
export type PredicateField = any;
export type SchemaField<A, B, C, D, E, F> = any;
// import type { BooleanField, NumberField, StringField } from "types/foundry/common/data/fields.d";
type RuleElementSource = {
  key?: unknown;
  data?: unknown;
  value?: unknown;
  label?: unknown;
  slug?: unknown;
  predicate?: unknown;
  /** The place in order of application (ascending), among an actor's list of rule elements */
  priority?: number;
  ignored?: unknown;
  requiresInvestment?: unknown;
  requiresEquipped?: unknown;
  removeUponCreate?: unknown;
};
type RuleValue = string | number | boolean | object | BracketedValue | null;
interface Bracket<T extends object | number | string> {
  start?: number;
  end?: number;
  value: T;
}
interface BracketedValue<T extends object | number | string = object | number | string> {
  field?: string;
  brackets: Bracket<T>[];
}
type RuleElementSchema = {
  key: StringField<string, string, true, false, false>;
  /** An identifying slug for the rule element: its significance and restrictions are determined per RE type */
  slug: SlugField;
  /** A label for use by any rule element for display in an interface */
  label: StringField<string, string, true, false, false>;
  /** The place in order of application (ascending), among an actor's list of rule elements */
  priority: NumberField<number, number, false, false, true>;
  /** A test of whether the rules element is to be applied */
  predicate: PredicateField;
  /** Whether the rule element is ignored and deactivated */
  ignored: BooleanField<boolean, boolean, false, false, true>;
  /** Whether the rule element requires that the parent item (if physical) be equipped */
  requiresEquipped: BooleanField<boolean, boolean, false, true, false>;
  /** Whether the rule element requires that the parent item (if physical) be invested */
  requiresInvestment: BooleanField<boolean, boolean, false, true, false>;
};
declare class ResolvableValueField<TRequired extends boolean, TNullable extends boolean, THasInitial extends boolean = false> {
  // protected _validateType(value: unknown): boolean;
  // /** No casting is applied to this value */
  // protected _cast(value: unknown): unknown;
  // protected _cleanType(value: RuleValue): RuleValue;
}
export type { Bracket, BracketedValue, ResolvableValueField, RuleElementSchema, RuleElementSource, RuleValue };
