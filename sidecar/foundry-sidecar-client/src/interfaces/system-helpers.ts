import { PF2eHelper } from "./pf2e/helper";
import { DnD5eHelper } from "./dnd5e/helper";
import { SystemHelper } from "./core/helper";
import { SystemTypeMap } from "./core";
export type KnownSystemIds = "generic" | "dnd5e" | "pf2e" | "dcc" | "starfinder" | "sf2e" | "a5e";
export interface SystemHelperMap {
  pf2e: PF2eHelper;
  dnd5e: DnD5eHelper;
  generic: SystemHelper;
  dcc: SystemHelper;
  starfinder: SystemHelper;
  sf2e: SystemHelper;
  a5e: SystemHelper;
}
export type SystemHelpers<S extends SystemTypeMap = SystemTypeMap, G extends SystemHelper<S> = SystemHelper<S>> = {
  [P in KnownSystemIds]?: SystemHelperMap[P];
};
export const systemHelpers: SystemHelpers = {
  generic: SystemHelper,
  pf2e: PF2eHelper,
  dnd5e: DnD5eHelper,
};
