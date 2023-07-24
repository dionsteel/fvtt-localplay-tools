import { Subject, Observable, share, BehaviorSubject, filter, OperatorFunction, fromEvent } from "rxjs";
import { AnonymousSubject } from "rxjs/internal/Subject";

export type Piped<T, I = T, S extends Subject<T> = Subject<T>> = S & AnonymousSubject<T> & { next: (value: I) => void };
export function mkState<T>(source: Observable<T>) {
  return source.pipe(
    share({ connector: () => new BehaviorSubject<T>(null) }),
    filter((v) => v != null)
  );
}
export function _mkState<I = any, T = I, S extends Observable<I> = Observable<I>, ST extends typeof Subject<T> = typeof Subject<T>>(
  source: S,
  type?: ST
): BehaviorSubject<T> {
  let bs;
  let as = new AnonymousSubject<T>(
    bs,
    source.pipe(
      share<I>({ connector: () => (bs = new ((type || BehaviorSubject) as any)(null) as Subject<any>) }) as any,
      filter((v) => v != null) as any
    )
  ) as any;
  return Object.defineProperties(as, {
    value: {
      get() {
        return bs.getValue();
      },
    },
    _value: {
      get() {
        return bs.getValue();
      },
    },
    getValue: {
      value: () => {
        return bs.getValue();
      },
    },
  }) as Piped<T, I, BehaviorSubject<T>>;
}

export function state<T = any, I = T>(
  initial: I | T | null = null,
  ...transforms: OperatorFunction<I | T, I | T>[]
): Piped<T, I, BehaviorSubject<T>> {
  const bs = new BehaviorSubject<T>(initial as any);
  if (!transforms) transforms = [];
  transforms.unshift(filter((v) => v != null));
  const as = (bs as any).pipe(...(transforms as Array<OperatorFunction<T, T>>)) as AnonymousSubject<T>;
  return Object.defineProperties(as, {
    value: {
      get() {
        return bs.getValue();
      },
    },
    _value: {
      get() {
        return bs.getValue();
      },
    },
    getValue: {
      value: () => {
        return bs.getValue();
      },
    },
  }) as Piped<T, I, BehaviorSubject<T>>;
}

export function eventHook<K extends keyof HookParamTypeMap, R = HookParamTypeMap[K]>(key: K): Observable<R> {
  return fromEvent(Hooks, key, (...args) => args as R);
}
