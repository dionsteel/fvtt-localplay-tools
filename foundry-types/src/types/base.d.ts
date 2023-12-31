// import "./foundry";
// import { DND5E } from "./foundry/systems/dnd5e/dnd5e";
// import * as dnd from "./foundry/systems/dnd5e/dnd5e";
import type { Actor5e } from "./foundry/systems/dnd5e/documents/actor/actor";
import type { Token5e } from "./foundry/systems/dnd5e/module/canvas/_module";
import type { Actor5E } from "./foundry/actor5e";
import type { Item5e } from "./foundry/systems/dnd5e/module/documents/item";
import type {
  CanvasPF2e,
  TokenPF2e,
} from "./foundry/systems/pf2e/module/canvas";
import type { ActorsPF2e } from "./foundry/systems/pf2e/module/collection/actors";
import type {
  ActorPF2e,
  ChatMessagePF2e,
  ItemPF2e,
  MacroPF2e,
  UserPF2e,
} from "./foundry/systems/pf2e/module/documents";
import type { EncounterPF2e } from "./foundry/systems/pf2e/module/encounter";
import type { ScenePF2e } from "./foundry/systems/pf2e/module/scene";

export type PathfinderGame = Game<
  ActorPF2e,
  ActorsPF2e<ActorPF2e>,
  ChatMessagePF2e,
  EncounterPF2e,
  ItemPF2e,
  MacroPF2e,
  ScenePF2e,
  UserPF2e
>;

export type DnD5eGame = Game<
  Actor5e & Actor5E,
  Actors<Actor5e & Actor5E>,
  ChatMessage,
  Combat,
  Item5e,
  Macro,
  Scene,
  User
>;
export type GenericGame = Game<
  Actor,
  Actors<Actor>,
  ChatMessage,
  Combat,
  Item,
  Macro,
  Scene,
  User
>;
export type KnownGameTypes = PathfinderGame | DnD5eGame | GenericGame;
export type KnownCanvasTypes = Canvas | CanvasPF2e;

export interface KnownSystemTypesMap {
  pf2e: {
    canvas: CanvasPF2e;
    game: PathfinderGame;
    actor: ActorPF2e;
    token: TokenPF2e;
  };
  dnd5e: { canvas: Canvas; game: DnD5eGame; actor: Actor5e; token: Token5e };
  generic: { canvas: Canvas; game: GenericGame; actor: Actor; token: Token };
  dcc: { canvas: Canvas; game: GenericGame; actor: Actor; token: Token };
  starfinder: { canvas: Canvas; game: GenericGame; actor: Actor; token: Token };
}
export type SysId = keyof KnownSystemTypesMap;
export type GameSystem<ID extends SysId = SysId> = KnownSystemTypesMap[ID];

export type SystemCanvas<ID extends SysId> = GameSystem<ID>["canvas"];
export type SystemGame<ID extends SysId> = GameSystem<ID>["game"];
export type SystemActorType<ID extends SysId> = GameSystem<ID>["actor"];
export type SystemTokenType<ID extends SysId> = GameSystem<ID>["token"];

declare global {
  const game: KnownGameTypes;
  const canvas: KnownCanvasTypes;
}
