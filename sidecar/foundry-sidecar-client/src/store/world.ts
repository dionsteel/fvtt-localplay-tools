import { defineStore } from "pinia";
import { useObservable, from, toObserver } from "@vueuse/rxjs";
import { ObservableInput, Observable } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { mergeMap, map, scan, concatMap, tap } from "rxjs/operators";
import { CurrentGameInfo, WorldInfo } from "@/interfaces/worldinfo";
import { Actor, ActorListing } from "@/interfaces/core";
import { computed, ref } from "vue";
import { useConfigStore } from "./config";

export const useWorldStore = defineStore("worlds", () => {
  const config = useConfigStore();
  const activeGame$ = config.fetchJson$<CurrentGameInfo>("/info");
  const ownedActors$ = config.fetchJson$<ActorListing[]>("/actor");
  const worldActorMap = ref<{ [k: string]: string[] }>({});
  const worldId$ = activeGame$.pipe(
    map((g) => g.world.id)
    // tap((id) => (worldActorMap.value[id] = worldActorMap.value[id] || []))
  );

  const activeGame = useObservable<CurrentGameInfo>(activeGame$);
  const ownedActors = useObservable<ActorListing[]>(ownedActors$);
  const worldId = computed(() => activeGame.value?.world.id);

  const currentWorldActors = computed(() => {
    if (!worldActorMap.value[`${worldId.value}`]) {
      worldActorMap.value[`${worldId.value}`] = [];
    }
    return worldActorMap.value[`${worldId.value}`].map<ActorListing>((wid) => (ownedActors.value || []).find((oa) => oa.id == wid) || (null as any)).filter((v) => !!v) || [];
  });
  //  useObservable(
  //   from(worldActorMap, { deep: true, immediate: true }).pipe(
  //     mergeMap((wam) => {
  //       if (worldId.value) {
  //         wam["" + worldId.value] = wam["" + worldId.value] || [];
  //         return wam["" + worldId.value];
  //       }
  //       return [];
  //     }),
  //     concatMap((aid) => fetchJson<Actor>(`/actor/${aid}`)),
  //     scan<Actor, Actor[]>((a, c) => {
  //       a.push(c);
  //       return a;
  //     }, [] as Actor[])
  //   )
  // );

  return {
    config,
    activeGame,
    ownedActors,
    worldId,
    worldActorMap,
    currentWorldActors,
    addSelectedActor(actorId: string) {
      worldActorMap.value[`${worldId.value}`] = worldActorMap.value[`${worldId.value}`] || [];
      worldActorMap.value[`${worldId.value}`].push(actorId);
      console.log("adding selected actor id", actorId, worldActorMap.value);
    },
    removeSelectedActor(actorId: string) {
      if (worldActorMap.value[`${worldId.value}`]) {
        worldActorMap.value[`${worldId.value}`].splice(worldActorMap.value[`${worldId.value}`].indexOf(actorId), 1);
      } else {
        worldActorMap.value[`${worldId.value}`] = [];
      }
    },
  };
});
