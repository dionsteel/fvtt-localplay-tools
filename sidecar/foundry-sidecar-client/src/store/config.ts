import { defineStore } from "pinia";
import url from "url";
import { Ref, computed, ref } from "vue";
import { Observable, ObservableInput, Subject } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { from, useObservable, useSubject } from "@vueuse/rxjs";
import { concatMap, switchMap, filter, distinctUntilKeyChanged } from "rxjs/operators";
import { WebSocketSubject, webSocket } from "rxjs/webSocket";

export const useConfigStore = defineStore("config", () => {
  const SidecarServer = ref("localhost:3000");
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
    return fromFetch(getAPIUrl(input), { selector: (response) => response.json() }); //.pipe(mergeMap((r) => r.json()));
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
