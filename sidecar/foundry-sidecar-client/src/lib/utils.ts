import { ActionCost } from "@/interfaces/pf2e/item/data/base";

export function applyDeep<T extends object = any, A extends PartialDeep<T> = PartialDeep<T>>(to: T, partial: A, queue?: Function[]): T & A {
  let first = false;
  if (typeof queue == "undefined") {
    first = true;
    queue = [];
  }
  if (typeof to == "undefined" || to == null) {
    return partial as any;
  }
  if (typeof partial == typeof to && typeof partial == "object") {
    for (let k in partial) {
      if (typeof partial[k] == "object") {
        queue.push(() => ((to as any)[k] = applyDeep((to as any)[k], (partial as any)[k], queue)));
      } else {
        (to as any)[k] = partial[k];
      }
    }
  } else {
    // if()
  }

  if (first) {
    let cur;
    while ((cur = queue.shift())) {
      cur();
    }
  }
  return to as T & A;
}

export function mergeDeep<T extends object = any, A extends object = any>(to: T, ...partials: A[]): T & A {
  return _mergeDeep<T, A>(to, partials);
}
export const mergeObject = mergeDeep;
export function _mergeDeep<T extends object = any, A extends PartialDeep<T> = PartialDeep<T>>(to: T, partials: A[], queue?: Function[]): T & A {
  let first = false;
  if (typeof queue == "undefined") {
    first = true;
    queue = [];
  }
  for (let partial of partials) {
    if (typeof to == "undefined" || to == null) {
      (to as any) = { ...partial };
    }
    if (typeof partial == typeof to && typeof partial == "object") {
      for (let k in partial) {
        if (typeof partial[k] == "object") {
          queue.push(() => ((to as any)[k] = applyDeep((to as any)[k], (partial as any)[k], queue)));
        } else {
          (to as any)[k] = partial[k];
        }
      }
    } else {
      // if()
    }
  }

  if (first) {
    let cur;
    while ((cur = queue.shift())) {
      cur();
    }
  }
  return to as T & A;
}
export type SetElement<S> = S extends Set<infer T> ? T : never;
export type ImageFilePath = string;
export type VideoFilePath = string;
export interface DocumentFlags {}
/**
 * Make all properties in T optional
 */
export type PartialDeep<T> = {
  [P in keyof T]?: PartialDeep<T[P]>;
};
export type UUID = string;
export type ItemUUID = string;
export type Maybe<T> = T | null | undefined | "";

/**
 * Given an array and a key export function, create a map where the key is the value that
 * gets returned when each item is pushed into the export function. Accumulate
 * items in an array that have the same key
 * @param array
 * @param criterion
 * @return
 */
export function groupBy<T, R>(array: T[], criterion: (value: T) => R): Map<R, T[]> {
  const result = new Map<R, T[]>();
  for (const elem of array) {
    const key = criterion(elem);
    const group = result.get(key);
    if (group) {
      group.push(elem);
    } else {
      result.set(key, [elem]);
    }
  }
  return result;
}

/** Creates a sorting comparator that sorts by the numerical result of a mapping export function */
export function sortBy<T, J>(mapping: (value: T) => J) {
  return (a: T, b: T): number => {
    const value1 = mapping(a);
    const value2 = mapping(b);
    return value1 < value2 ? -1 : value1 === value2 ? 0 : 1;
  };
}

/**
 * Given an array, adds a certain amount of elements to it
 * until the desired length is being reached
 */
export function padArray<T>(array: T[], requiredLength: number, padWith: T): T[] {
  const result = [...array];
  for (let i = array.length; i < requiredLength; i += 1) {
    result.push(padWith);
  }
  return result;
}

/** Given an object, returns a new object with the same keys, but with each value converted by a export function. */
export function mapValues<K extends string | number | symbol, V, R>(object: Record<K, V>, mapping: (value: V, key: K) => R): Record<K, R> {
  return Object.entries<V>(object).reduce(
    (result, [key, value]) => {
      result[key as K] = mapping(value, key as K);
      return result;
    },
    {} as Record<K, R>
  );
}

/**
 * Returns true if the string is null, undefined or only consists of 1..n spaces
 */
export function isBlank(text: Maybe<string>): text is null | undefined | "" {
  return text === null || text === undefined || text.trim() === "";
}

/** Returns a formatted number string with a preceding + if non-negative */
export function addSign(number: number): string {
  if (number < 0) {
    return `${number}`;
  }

  return `+${number}`;
}

/**
 * No idea why this isn't built in
 */
export function sum(values: number[]): number {
  return values.reduce((a, b) => a + b, 0);
}

/**
 * Zip to arrays together based on a given zip export function
 * @param a
 * @param b
 * @param zipexport Function
 */
export function zip<A, B, R>(a: A[], b: B[], zipFunction: (a: A, b: B) => R): R[] {
  if (a.length > b.length) {
    return b.map((elem, index) => zipFunction(a[index], elem));
  } else {
    return a.map((elem, index) => zipFunction(elem, b[index]));
  }
}

interface Fraction {
  numerator: number;
  denominator: number;
}

/**
 * Continually apply a export function on the result of itself until times is reached
 *
 * @param func
 * @param times
 * @param start start element, also result if times is 0
 */
export function applyNTimes<T>(func: (val: T) => T, times: number, start: T): T {
  let result = start;
  for (let i = 0; i < times; i += 1) {
    result = func(result);
  }
  return result;
}

/**
 * Check if a key is present in a given object in a type safe way
 *
 * @param obj The object to check
 * @param key The key to check
 */
export function objectHasKey<O extends object>(obj: O, key: unknown): key is keyof O {
  return (typeof key === "string" || typeof key === "number") && key in obj;
}

/** Check if a value is present in the provided array. Especially useful for checking against literal tuples */
export function tupleHasValue<const A extends readonly unknown[]>(array: A, value: unknown): value is A[number] {
  return array.includes(value);
}

/** Check if an element is present in the provided set. Especially useful for checking against literal sets */
export function setHasElement<T extends Set<unknown>>(set: T, value: unknown): value is SetElement<T> {
  return set.has(value);
}

/** Returns a subset of an object with explicitly defined keys */
export function pick<T extends object, K extends keyof T>(obj: T, keys: Iterable<K>): Pick<T, K> {
  return [...keys].reduce(
    (result, key) => {
      if (key in obj) {
        result[key] = obj[key];
      }
      return result;
    },
    {} as Pick<T, K>
  );
}

const wordCharacter = String.raw`[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Join_Control}]`;
const nonWordCharacter = String.raw`[^\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Join_Control}]`;
const nonWordCharacterRE = new RegExp(nonWordCharacter, "gu");
const wordBoundary = String.raw`(?:${wordCharacter})(?=${nonWordCharacter})|(?:${nonWordCharacter})(?=${wordCharacter})`;
const nonWordBoundary = String.raw`(?:${wordCharacter})(?=${wordCharacter})`;
const lowerCaseLetter = String.raw`\p{Lowercase_Letter}`;
const upperCaseLetter = String.raw`\p{Uppercase_Letter}`;
const lowerCaseThenUpperCaseRE = new RegExp(`(${lowerCaseLetter})(${upperCaseLetter}${nonWordBoundary})`, "gu");
const nonWordCharacterHyphenOrSpaceRE = /[^-\p{White_Space}\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Join_Control}]/gu;
const upperOrWordBoundariedLowerRE = new RegExp(`${upperCaseLetter}|(?:${wordBoundary})${lowerCaseLetter}`, "gu");

/**
 * The system's sluggification algorithm for labels and other terms.
 * @param text The text to sluggify
 * @param [options.camel=null] The sluggification style to use
 */
export function sluggify(text: string, { camel = null }: { camel?: SlugCamel } = {}): string {
  // Sanity check
  if (typeof text !== "string") {
    console.warn("Non-string argument passed to `sluggify`");
    return "";
  }

  // A hyphen by its lonesome would be wiped: return it as-is
  if (text === "-") return text;

  switch (camel) {
    case null:
      return text
        .replace(lowerCaseThenUpperCaseRE, "$1-$2")
        .toLowerCase()
        .replace(/['’]/g, "")
        .replace(nonWordCharacterRE, " ")
        .trim()
        .replace(/[-\s]+/g, "-");
    case "bactrian": {
      const dromedary = sluggify(text, { camel: "dromedary" });
      return dromedary.charAt(0).toUpperCase() + dromedary.slice(1);
    }
    case "dromedary":
      return text
        .replace(nonWordCharacterHyphenOrSpaceRE, "")
        .replace(/[-_]+/g, " ")
        .replace(upperOrWordBoundariedLowerRE, (part, index) => (index === 0 ? part.toLowerCase() : part.toUpperCase()))
        .replace(/\s+/g, "");
    default:
      throw ErrorPF2e("I don't think that's a real camel.");
  }
}

type SlugCamel = "dromedary" | "bactrian" | null;

/** Parse a string containing html */
export function parseHTML(unparsed: string): HTMLElement {
  const fragment = document.createElement("template");
  fragment.innerHTML = unparsed;
  const element = fragment.content.firstElementChild;
  if (!(element instanceof HTMLElement)) throw ErrorPF2e("Unexpected error parsing HTML");

  return element;
}

export function getActionTypeLabel(type: Maybe<"action" | "free" | "reaction" | "passive">, cost: Maybe<number>): string | null {
  switch (type) {
    case "action":
      return cost === 1 ? "PF2E.Item.Action.Type.Single" : "PF2E.Item.Action.Type.Activity";
    case "free":
      return "PF2E.Item.Action.Type.Free";
    case "reaction":
      return "PF2E.Item.Action.Type.Reaction";
    default:
      return null;
  }
}

const actionImgMap: Record<string, ImageFilePath> = {
  0: "systems/pf2e/icons/actions/FreeAction.webp",
  free: "systems/pf2e/icons/actions/FreeAction.webp",
  1: "systems/pf2e/icons/actions/OneAction.webp",
  2: "systems/pf2e/icons/actions/TwoActions.webp",
  3: "systems/pf2e/icons/actions/ThreeActions.webp",
  "1 or 2": "systems/pf2e/icons/actions/OneTwoActions.webp",
  "1 to 3": "systems/pf2e/icons/actions/OneThreeActions.webp",
  "2 or 3": "systems/pf2e/icons/actions/TwoThreeActions.webp",
  reaction: "systems/pf2e/icons/actions/Reaction.webp",
  passive: "systems/pf2e/icons/actions/Passive.webp",
};

export function getActionIcon(actionType: string | ActionCost | null, fallback: ImageFilePath): ImageFilePath;
export function getActionIcon(actionType: string | ActionCost | null, fallback: ImageFilePath | null): ImageFilePath | null;
export function getActionIcon(actionType: string | ActionCost | null): ImageFilePath;
export function getActionIcon(action: string | ActionCost | null, fallback: ImageFilePath | null = "systems/pf2e/icons/actions/Empty.webp"): ImageFilePath | null {
  if (action === null) return actionImgMap["passive"];
  const value = typeof action !== "object" ? action : action.type === "action" ? action.value : action.type;
  const sanitized = String(value ?? "")
    .toLowerCase()
    .trim();
  return actionImgMap[sanitized] ?? fallback;
}

const actionGlyphMap: Record<string, string> = {
  0: "F",
  free: "F",
  1: "A",
  2: "D",
  3: "T",
  "1 or 2": "A/D",
  "1 to 3": "A - T",
  "2 or 3": "D/T",
  reaction: "R",
};

/**
 * Returns a character that can be used with the Pathfinder action font
 * to display an icon. If null it returns empty string.
 */
export function getActionGlyph(action: string | number | null | ActionCost): string {
  if (!action && action !== 0) return "";

  const value = typeof action !== "object" ? action : action.type === "action" ? action.value : action.type;
  const sanitized = String(value ?? "")
    .toLowerCase()
    .trim();

  return actionGlyphMap[sanitized] ?? "";
}

export function ErrorPF2e(message: string): Error {
  return Error(`PF2e System | ${message}`);
}

/** Generate and return an HTML element for a FontAwesome icon */
type FontAwesomeStyle = "solid" | "regular" | "duotone";

export function fontAwesomeIcon(glyph: string, { style = "solid", fixedWidth = false }: { style?: FontAwesomeStyle; fixedWidth?: boolean } = {}): HTMLElement {
  const styleClass = `fa-${style}`;
  const glyphClass = glyph.startsWith("fa-") ? glyph : `fa-${glyph}`;
  const icon = document.createElement("i");
  icon.classList.add(styleClass, glyphClass);
  if (fixedWidth) icon.classList.add("fa-fw");

  return icon;
}

/** Short form of type and non-null check */
export function isObject<T extends object>(value: unknown): value is PartialDeep<T>;
export function isObject<T extends string>(value: unknown): value is { [K in T]?: unknown };
export function isObject(value: unknown): boolean {
  return typeof value === "object" && value !== null;
}

/** JSON.stringify with recursive key sorting */
export function sortObjByKey(value: unknown): unknown {
  return isObject<Record<string | number, unknown>>(value)
    ? Array.isArray(value)
      ? value.map(sortObjByKey)
      : Object.keys(value)
          .sort()
          .reduce((o: Record<string, unknown>, key) => {
            const v = value[key];
            o[key] = sortObjByKey(v);
            return o;
          }, {})
    : value;
}

export function sortedStringify(obj: object): string {
  return JSON.stringify(sortObjByKey(obj));
}
export function deepClone(source: any) {
  return mergeDeep({}, JSON.parse(JSON.stringify(source)));
}

/** Walk an object tree and replace any string values found according to a provided export function */
export function recursiveReplaceString<T>(source: T, replace: (s: string) => string): T;
export function recursiveReplaceString(source: unknown, replace: (s: string) => string): unknown {
  const clone = Array.isArray(source) || isObject(source) ? deepClone(source) : source;
  if (typeof clone === "string") {
    return replace(clone);
  } else if (Array.isArray(clone)) {
    return clone.map((e) => recursiveReplaceString(e, replace));
  } else if (isObject<Record<string, unknown>>(clone)) {
    for (const key of Object.keys(clone)) {
      clone[key] = recursiveReplaceString(clone[key], replace);
    }
  }

  return clone;
}

export const IMAGE_FILE_EXTENSIONS = ["jpg", "png", "webp", "jpeg", "gif"];
export const VIDEO_FILE_EXTENSIONS = ["avi", "mp4", "mpg", "m4v", "webm"];

/** Does the parameter look like an image file path? */
export function isImageFilePath(path: unknown): path is ImageFilePath {
  return typeof path === "string" && Object.keys(IMAGE_FILE_EXTENSIONS).some((e) => path.endsWith(`.${e}`));
}

/** Does the parameter look like a video file path? */
export function isVideoFilePath(path: unknown): path is ImageFilePath {
  return typeof path === "string" && Object.keys(VIDEO_FILE_EXTENSIONS).some((e) => path.endsWith(`.${e}`));
}

export function isImageOrVideoPath(path: unknown): path is ImageFilePath | VideoFilePath {
  return isImageFilePath(path) || isVideoFilePath(path);
}
