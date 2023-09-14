import { Actor, Character } from "../core";
import { DnD5eTypes } from "./typemap";

export interface Actor5e extends Actor<DnD5eTypes> {}
export interface Character5e extends Character<DnD5eTypes> {}
