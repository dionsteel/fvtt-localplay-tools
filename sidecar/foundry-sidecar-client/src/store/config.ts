import { defineStore } from "pinia";
import url from "url";
import { Ref, computed, ref } from "vue";
import { Observable, ObservableInput, Subject, map } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { from, useObservable, useSubject } from "@vueuse/rxjs";
import { concatMap, switchMap, filter, distinctUntilKeyChanged } from "rxjs/operators";
import { WebSocketSubject, webSocket } from "rxjs/webSocket";

export function dereference<T>(input: any): T {
  let refs = input._refs;
  let queue: Array<() => void> = [];
  function inflateProperties<T>(obj: any): T {
    // let out: any = {};
    if (typeof obj === "object") {
      if (Object.keys(obj).length == 1 && typeof obj._ref == "number") {
        return (obj = refs[obj._ref]);
      } else {
        let ee: [string, any][] = Object.entries(obj);
        for (let [key, value] of ee) {
          if (key.startsWith("_ref")) {
            continue;
          }
          if (typeof value == "object" && value != null) {
            queue.push(() => (obj[key] = inflateProperties(value)));
          } else {
            obj[key] = value;
          }
        }
        return obj;
      }
    } else {
      return obj;
    }
  }
  refs = inflateProperties(refs);
  let cur;
  while ((cur = queue.shift())) {
    try {
      cur();
    } catch (e) {
      console.warn("Inflate error:", e, input);
    }
  }
  let output = inflateProperties<T>(input);
  // let cur;
  while ((cur = queue.shift())) {
    try {
      cur();
    } catch (e) {
      console.warn("Inflate error:", e, input);
    }
  }
  delete (output as any)["_refs"];
  return output;
}

export const useConfigStore = defineStore("config", () => {
  // const SidecarServer = ref("localhost:3000");
  const SidecarServer = ref("192.168.8.115:3000");
  const SidecarUrl = ref(`http://${SidecarServer.value}`);
  const websocketBaseUrl = computed(() => {
    const purl = url.parse(SidecarUrl.value);
    let proto = purl.protocol == "https" ? "wss" : "ws";
    let host = purl.hostname;
    let port = purl.port != "80" ? ":" + purl.port : "";
    return `${proto}://${host}${port}`;
  });
  function getAPIUrl(suffix: string) {
    return url.resolve(SidecarUrl.value, suffix);
  }
  function getWebsocketUrl(suffix: string) {
    console.log("websocketBaseUrl.value", websocketBaseUrl.value);
    return `${websocketBaseUrl.value}${suffix}`;
  }

  function fetchJson$<T>(
    input: string,
    init?: RequestInit & {
      selector: (response: Response) => ObservableInput<unknown>;
    }
  ): Observable<T> {
    return fromFetch(getAPIUrl(input), { selector: (response) => response.json() }).pipe(map((j) => dereference(j))); //.pipe(mergeMap((r) => r.json()));
  }

  function fetchJson<T>(input: string): Ref<T> {
    return useObservable(fetchJson$(input), { initialValue: {} as T });
  }

  function getSocketSubject<T>(input: string) {
    const url = getWebsocketUrl(input);
    return webSocket<T>({ url });
  }

  return {
    SidecarServer,
    SidecarUrl,
    websocketBaseUrl,
    getWebsocketUrl,
    getAPIUrl,
    fetchJson,
    fetchJson$,
    getSocketSubject,
  };
});
