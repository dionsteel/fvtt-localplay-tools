import { ItemType } from "@/interfaces/pf2e/item/data/index";
import { MagicTradition } from "@/interfaces/pf2e/item/spell/index";
import { BaseRawModifier } from "@/interfaces/pf2e/actor/modifiers";
import { DegreeAdjustmentsRecord, DegreeOfSuccessString } from "@/interfaces/pf2e/system/degree-of-success";
import { RollNoteSource } from "@/interfaces/pf2e/notes";
import { CheckRollContext } from "@/interfaces/pf2e/system/check/index";
import { ZeroToTwo } from "@/interfaces/pf2e/data";
import { DamageRollContext } from "@/interfaces/pf2e/system/damage/index";

type TokenPF2e = any;
type RollOptions = any;
type Rolled<T> = T;
type Roll = any;
type RollMode = "string";

interface ChatMessageSourcePF2e {
  flags: ChatMessageFlagsPF2e;
}
type DocumentUUID = string;
type ActorUUID = string;
type TokenDocumentUUID = string;

export interface ItemOriginFlag {
  type: ItemType;
  uuid: string;
  castLevel?: number;
  variant?: {
    overlays: string[];
  };
}
type ChatMessageFlagsPF2e = {
  pf2e: {
    damageRoll?: DamageRollFlag;
    context?: ChatContextFlag;
    origin?: ItemOriginFlag | null;
    casting?: {
      id: string;
      tradition: MagicTradition;
    } | null;
    modifierName?: string;
    modifiers?: BaseRawModifier[];
    preformatted?: "flavor" | "content" | "both";
    isFromConsumable?: boolean;
    journalEntry?: DocumentUUID;
    strike?: StrikeLookupData | null;
    appliedDamage?: AppliedDamageFlag | null;
    [key: string]: unknown;
  };
  core: NonNullable<Record<string, any>>;
};
type ChatContextFlag = CheckRollContextFlag | DamageRollContextFlag | SpellCastContextFlag;
/** Data used to lookup a strike on an actor */
interface StrikeLookupData {
  actor: ActorUUID | TokenDocumentUUID;
  index: number;
  damaging: boolean;
  name: string;
  altUsage?: "thrown" | "melee" | null;
}
interface DamageRollFlag {
  outcome: DegreeOfSuccessString;
  total: number;
  traits: string[];
  types: Record<string, Record<string, number>>;
  diceResults: Record<string, Record<string, DieResult[]>>;
  baseDamageDice: number;
}
interface DieResult {
  faces: number;
  result: number;
}
interface TargetFlag {
  actor: ActorUUID | TokenDocumentUUID;
  token?: TokenDocumentUUID;
}
type ContextFlagOmission = "actor" | "altUsage" | "createMessage" | "dosAdjustments" | "item" | "mapIncreases" | "notes" | "options" | "target" | "token";
interface CheckRollContextFlag extends Required<Omit<CheckRollContext, ContextFlagOmission>> {
  actor: string | null;
  token: string | null;
  item?: undefined;
  dosAdjustments?: DegreeAdjustmentsRecord;
  target: TargetFlag | null;
  altUsage?: "thrown" | "melee" | null;
  notes: RollNoteSource[];
  options: string[];
}
interface DamageRollContextFlag extends Required<Omit<DamageRollContext, ContextFlagOmission | "self">> {
  actor: string | null;
  token: string | null;
  item?: undefined;
  mapIncreases?: ZeroToTwo;
  target: TargetFlag | null;
  notes: RollNoteSource[];
  options: string[];
}
interface SpellCastContextFlag {
  type: "spell-cast";
  domains: string[];
  options: string[];
  outcome?: DegreeOfSuccessString;
  /** The roll mode (i.e., 'roll', 'blindroll', etc) to use when rendering this roll. */
  rollMode?: RollMode;
}
interface AppliedDamageFlag {
  uuid: ActorUUID;
  isHealing: boolean;
  isReverted?: boolean;
  persistent: string[];
  shield: {
    id: string;
    damage: number;
  } | null;
  updates: {
    path: string;
    value: number;
  }[];
}
export interface ChatMessagePF2e {
  system?: ChatMessageSourcePF2e;
  source?:ChatMessageSourcePF2e
}
export type {
  AppliedDamageFlag,
  ChatContextFlag,
  ChatMessageSourcePF2e,
  ChatMessageFlagsPF2e,
  CheckRollContextFlag,
  DamageRollFlag,
  DamageRollContextFlag,
  StrikeLookupData,
  TargetFlag,
};
