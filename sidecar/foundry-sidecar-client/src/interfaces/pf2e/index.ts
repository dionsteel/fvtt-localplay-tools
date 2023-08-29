export * from "./actor";
export * from "./helper";
export * from "./items/base";
export * from "./items/armor";
export * from "./items/class";
export * from "./items/feat";
export * from "./items/weapon";
export * from "./typemap";
// import { ActorPF2e, ItemPF2e } from "@/interfaces/pf2e/documents";
/** The size property of creatures and equipment */
declare const SIZES: readonly ["tiny", "sm", "med", "lg", "huge", "grg"];
declare const SIZE_SLUGS: readonly ["tiny", "small", "medium", "large", "huge", "gargantuan"];
export type Size = (typeof SIZES)[number];
/** The rarity trait of creatures, equipment, spells, etc. */
declare const RARITIES: readonly ["common", "uncommon", "rare", "unique"];
export type Rarity = (typeof RARITIES)[number];
export interface ValuesList<T extends string = string> {
  value: T[];
  custom: string;
}
/** Generic { value, label, type } type used in various places in actor/items types. */
export interface LabeledValue {
  label: string;
  value: number | string;
  type: string;
}
export interface LabeledString extends LabeledValue {
  value: string;
}
export interface LabeledNumber extends LabeledValue {
  value: number;
}
export interface TypeAndValue<TType extends string> {
  type: TType;
  value: number;
}
export interface TraitsWithRarity<T extends string> {
  value: T[];
  rarity: Rarity;
}
/** Literal numeric types */
export type ZeroToTwo = 0 | 1 | 2;
export type ZeroToThree = ZeroToTwo | 3;
export type OneToThree = Exclude<ZeroToThree, 0>;
export type TwoToThree = Exclude<OneToThree, 1>;
export type ZeroToFour = ZeroToThree | 4;
export type OneToFour = Exclude<ZeroToFour, 0>;
export type ZeroToFive = ZeroToFour | 5;
export type OneToFive = OneToThree | Extract<ZeroToFive, 4 | 5>;
export type ZeroToTen = ZeroToFive | 6 | 7 | 8 | 9 | 10;
export type OneToTen = Exclude<ZeroToTen, 0>;
export type ZeroToEleven = ZeroToTen | 11;
export interface ValueAndMaybeMax {
  value: number;
  max?: number;
}
export type ValueAndMax = Required<ValueAndMaybeMax>;
declare function goesToEleven(value: number): value is ZeroToEleven;
/** The tracked schema data of actors and items */
export interface NewDocumentSchemaRecord {
  version: null;
  lastMigration: null;
}
export interface MigratedDocumentSchemaRecord {
  version: number;
  lastMigration: {
    version: {
      schema: number | null;
      system?: string;
      foundry?: string;
    };
  } | null;
}
export type DocumentSchemaRecord = NewDocumentSchemaRecord | MigratedDocumentSchemaRecord;
export declare const PROFICIENCY_RANKS: readonly ["untrained", "trained", "expert", "master", "legendary"];
// export declare const MATH_FUNCTION_NAMES: Set<MathFunctionName>;
// type EnfolderableDocumentPF2e = ActorPF2e<null> | ItemPF2e<null> | Exclude<EnfolderableDocument, Actor<null> | Item<null>>;
// export { DocumentSchemaRecord, EnfolderableDocumentPF2e, LabeledNumber, LabeledString, LabeledValue, OneToFive, OneToFour, OneToTen, OneToThree, RARITIES, Rarity, SIZES, SIZE_SLUGS, Size, TraitsWithRarity, TwoToThree, TypeAndValue, ValueAndMax, ValueAndMaybeMax, ValuesList, ZeroToEleven, ZeroToFive, ZeroToFour, ZeroToTen, ZeroToThree, ZeroToTwo, goesToEleven, };
