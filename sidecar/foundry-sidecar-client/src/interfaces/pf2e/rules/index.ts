// import { LaxSchemaField } from "@/interfaces/pf2e/system/schema-data-fields";
// import {  } from "./rule-element/choice-set";
import type { RuleElementSchema, RuleElementSource } from "./rule-element";
export type { RuleElementSynthetics } from "../rules/synthetics";
type RuleElementOptions = any;
type LaxSchemaField<T> = Partial<T>;
/**
 * @category RuleElement
 */
declare class RuleElements {
  static readonly builtin: Record<string, RuleElementConstructor | undefined>;
  static custom: Record<string, RuleElementConstructor | undefined>;
  static get all(): Record<string, RuleElementConstructor | undefined>;
  // static fromOwnedItem(options: RuleElementOptions): RuleElementPF2e[];
}
type RuleElementConstructor = {
  schema: LaxSchemaField<RuleElementSchema>;
} & (new (data: RuleElementSource, options: RuleElementOptions) => RuleElementSource);
export type { RuleElementOptions, RuleElementSource, RuleElements };
export interface RuleElementPF2e {
  scheme?: RuleElementSchema;
  system?: RuleElementSource;
}
