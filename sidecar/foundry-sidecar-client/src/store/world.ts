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

  const activeGame = ref<CurrentGameInfo>(); // await config.fetchJson<CurrentGameInfo>('/info');
  const ownedActors = ref<ActorListing[]>(); //(await config.fetchJson<ActorListing[]>("/actor"));
  const worldId = computed(() => activeGame.value?.world.id);
  // const config.SelectedActors: Array<{ worldId: string; actorId: string; listing?: ActorListing }> = [];
  const actorData = ref<Record<string, Actor>>({})
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
  const currentWorldActors = computed(() => (config.SelectedActors || []).filter(sel => worldId.value && sel.worldId == worldId.value && sel.listing).map(s => s.listing));
  async function getActorData(id: string, force = false) {
    if (!force) { return actorData.value[id] = actorData.value[id] || await config.fetchJson(`/actor/${id}`); }
    else { return actorData.value[id] = await config.fetchJson(`/actor/${id}`); }
  }

  async function startup() {
    activeGame.value = await config.fetchJson('/info');
    ownedActors.value = (await config.fetchJson<ActorListing[]>("/actor"));
    // if (!allSelectedActors) { allSelectedActors = [] }
    if (config.SelectedActors.filter(s => s.worldId == worldId.value).length > 0) {
      for (let sel of config.SelectedActors) {
        await getActorData(sel.actorId, true);// await config.fetchJson(`/actor/${sel.actorId}`);
      }
    }
    return true;
  }
  const started = startup();

  return {
    config, actorData,
    activeGame,
    ownedActors,
    currentWorldActors,
    worldId,
    allSelectedActors: config.SelectedActors,
    worldActorMap,
    startup, started,
    getActorData,
    addSelectedActor(actorId: string) {
      // worldActorMap.value[`${worldId.value}`] = worldActorMap.value[`${worldId.value}`] || [];
      // worldActorMap.value[`${worldId.value}`].push(actorId);
      if (worldId.value) {
        let existingIdx = config.SelectedActors.findIndex(a => a.actorId == actorId);
        const listing = ownedActors.value?.find(l => l.id == actorId);
        if (listing) {
          if (existingIdx < 0) {
            config.SelectedActors.push({ worldId: worldId.value, actorId, listing })
            console.log("adding selected actor id", actorId, worldActorMap.value);
          } else {
            config.SelectedActors[existingIdx].listing = listing;
          }
        }
      }

    },
    removeSelectedActor(actorId: string) {
      let existingIdx = config.SelectedActors.findIndex(a => a.actorId == actorId);
      if (existingIdx > -1) {
        config.SelectedActors.splice(existingIdx, 1);
      }
    },
  };
}, { persist: true });
