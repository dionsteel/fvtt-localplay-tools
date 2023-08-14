export type Flags = Record<string, Record<string, string | number | boolean>>;
export type Ownership = Record<string, number> & { default: number };
export type BaseActorSystemData = Record<string, any>;
