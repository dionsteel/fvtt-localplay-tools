import { ref, computed, watch, type Ref, type ComputedRef } from "vue";
import {
  defineStore,
  type DefineSetupStoreOptions,
  type _ExtractActionsFromSetupStore,
  type _ExtractGettersFromSetupStore,
  type _ExtractStateFromSetupStore,
  type _ExtractActionsFromSetupStore_Keys,
  type _ExtractGettersFromSetupStore_Keys,
  type StoreDefinition,
  type _ExtractStateFromSetupStore_Keys,
  type _UnwrapAll,
} from "pinia";
import type { ActorPF2e } from "@/types/foundry/systems/pf2e/module/documents";
import {
  isSystem,
  type GenericGame,
  type KnownCanvasTypes,
  type KnownGameTypes,
  type KnownSystemTypesMap,
  type SysId,
  type GameSystem,
  type PathfinderGame,
} from "@/types/base";

// declare const game: Game<ActorPF2e>;
import { SETTINGS } from "./settings";

export interface TablePlayerStore<GT extends GameSystem> {
  settings: Ref<Record<string, any>>;
  game: Ref<GT["game"]>;
  isPF2e: ComputedRef<boolean>;
  is5e: ComputedRef<boolean>;
  seats: ComputedRef<SeatsConfig<GT>>;
  canvas: GT["canvas"];
}
export interface SeatConfig<G extends GameSystem> {
  actors: GameSystem["actor"][];
}
export interface SeatsConfig<G extends GameSystem> {
  seat1: SeatConfig<G>;
  seat2: SeatConfig<G>;
  seat3: SeatConfig<G>;
  seat4: SeatConfig<G>;
  seat5: SeatConfig<G>;
}

// >(id: Id, options: Omit<DefineStoreOptions<Id, S, G, A>, 'id'>): StoreDefinition<Id, S, G, A>;

export function defineSysStore<SystemId extends SysId, Id extends string, SS>(
  sysId: SystemId,
  storeName: Id,
  storeSetup: () => SS,
  options?: DefineSetupStoreOptions<
    Id,
    _ExtractStateFromSetupStore<SS>,
    _ExtractGettersFromSetupStore<SS>,
    _ExtractActionsFromSetupStore<SS>
  >
): StoreDefinition<
  Id,
  _ExtractStateFromSetupStore<SS>,
  _ExtractGettersFromSetupStore<SS>,
  _ExtractActionsFromSetupStore<SS>
> {
  return defineStore(storeName, storeSetup);
}

export const useTableStore = defineStore<
  "table",
  TablePlayerStore<KnownSystemTypesMap[SysId]>
>("table", () => {
  const settingsState = SETTINGS._state;
  const isPF2e = computed(() => isSystem("pf2e", game));
  const is5e = computed(() => isSystem("dnd5e", game));
  console.log(settingsState.value);
  const seats = computed(() => ({
    seat1: {
      actors: settingsState.value["seat1Actor"]
        .map((aid: string) => (game as GenericGame)?.actors?.get(aid))
        .filter((a: any) => !!a)
        .map((a: Actor) => a),
    },
    seat2: {
      actors: settingsState.value["seat2Actor"]
        .map((aid: string) => (game as GenericGame)?.actors?.get(aid))
        .filter((a: any) => !!a)
        .map((a: Actor) => a),
    },
    seat3: {
      actors: settingsState.value["seat3Actor"]
        .map((aid: string) => (game as GenericGame)?.actors?.get(aid))
        .filter((a: any) => !!a)
        .map((a: Actor) => a),
    },
    seat4: {
      actors: settingsState.value["seat4Actor"]
        .map((aid: string) => (game as GenericGame)?.actors?.get(aid))
        .filter((a: any) => !!a)
        .map((a: Actor) => a),
    },
    seat5: {
      actors: settingsState.value["seat5Actor"]
        .map((aid: string) => (game as GenericGame)?.actors?.get(aid))
        .filter((a: any) => !!a)
        .map((a: Actor) => a),
    },
  }));
  const gid: SysId = game.system.id as any;

  return {
    settings: settingsState,
    seats,
    game: ref(game as GameSystem<typeof gid>["game"]),
    isPF2e,
    is5e,
    canvas: canvas as GameSystem<typeof gid>["canvas"],
  } as any; // TablePlayerStore<GameSystem<typeof gid>>;
});

export const usePF2eStore: StoreDefinition<
  "table",
  _UnwrapAll<
    Pick<
      TablePlayerStore<GameSystem<"pf2e">>,
      "game" | "canvas" | "seats" | "settings" | "is5e" | "isPF2e"
    >
  >
> = useTableStore as any;

export const useDnD5eStore: StoreDefinition<
  "table",
  _UnwrapAll<
    Pick<
      TablePlayerStore<GameSystem<"dnd5e">>,
      "game" | "canvas" | "seats" | "settings" | "is5e" | "isPF2e"
    >
  >
> = useTableStore as any;
