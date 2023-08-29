import { Actor, SystemTypeMap } from "./actor";

export interface Token<S extends SystemTypeMap = SystemTypeMap, SD = S["TokenSystemType"]> {
  actor: Actor<S>;
  system: SD;
  controlled: boolean;
  _id: string;
  isOwned: boolean;
  img: string;
}
