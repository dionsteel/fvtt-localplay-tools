export type Flags = Record<string, Record<string, string | number | boolean | any>>;
export type Ownership = Record<string, number> & { default: number };
export type BaseActorSystemData = Record<string, any>;
export type BaseTokenSystemData = Record<string, any>;
