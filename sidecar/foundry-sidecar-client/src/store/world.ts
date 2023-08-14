import { defineStore } from "pinia";
import { useObservable } from "@vueuse/rxjs";
import { fromFetch } from "rxjs/fetch";
import { mergeMap } from "rxjs/operators";

export const WorldStore = defineStore("worlds", () => {
  const currentWorld = useObservable<WorldInfo>(
    fromFetch("/info").pipe(mergeMap((r) => r.json()))
  );
  currentWorld.value
  return {};
});
