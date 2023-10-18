const { Observable, merge, Subject } = require("rxjs");
const { map, filter, reduce, scan, share, tap } = require("rxjs/operators");
// const { TokenDocumentPF2e } = require("../../../foundry-types/src/types/foundry/systems/pf2e/module/scene");
const { PlayerRolls } = require("./roll-on-player");

const debugHooks = false;
const gmlogin = false;
const autologin = true;
const creds = {
  coventry: {
    MapTable: { u: "MapTable", p: "" },
    Gamemaster: { u: "Gamemaster", p: "" },
  },
  "rimes-with-witch": {
    MapTable: { u: "MapTable", p: "" },
    Gamemaster: { u: "Gamemaster", p: "G0ndolin1!" },
  },
};

function isGameInitialised(game) {
  return typeof game.loading === "boolean";
}

const systemDescriptions = {
  dnd5e: {
    actor: {
      item_types: ["background", "class", "subclass", "feat", "spell", "weapon", "consumable", "equipment", "backpack", "tool", "loot"],
    },
  },
  pf2e: {
    actor: {
      item_types: [
        "action",
        "affliction",
        "ancestry",
        "armor",
        "background",
        "backpack",
        "book",
        "campaignFeature",
        "class",
        "condition",
        "consumable",
        "deity",
        "effect",
        "equipment",
        "feat",
        "heritage",
        "kit",
        "lore",
        "melee",
        "spell",
        "spellcastingEntry",
        "treasure",
        "weapon",
      ],
    },
  },
};

function performAutoLogin() {
  try {
    if (isGameInitialised(game)) {
      console.log("preload script mounted foundry. ", game.users);
      if (autologin && game && game.users && game.users.apps && game.users.apps.length == 1 && game.users.apps[0] instanceof FormApplication) {
        let worldCreds = creds[game.world.id];
        let loginApp = game.users.apps[0];
        if (gmlogin) {
          loginApp.form.userid.selectedIndex = 1;
          loginApp.form.password.value = worldCreds?.Gamemaster?.p;
        } else {
          const userlist = loginApp.form.userid.options;
          if (userlist.namedItem("MapTable")) {
            userlist.namedItem("MapTable").selected = true;
          } else {
            let ulen = userlist.length;
            for (let i = 0; i < ulen; i++) {
              let o = userlist.item(i);
              if (/maptable/i.test(o.text)) {
                o.selected = true;
              }
            }
          }
        }
        loginApp.form.requestSubmit();
      } else {
        console.log("some conditions not met", game.users.apps);
      }
    } else {
      console.log("game not initialized?");
    }
  } catch (error) {
    console.error(error);
  }
}

/**
 *
 * @param {I extends (import("../../foundry-types/src/types/base").SysId)} sysid
 * @param {import("../../foundry-types/src/types/base").KnownGameTypes} game
 * @returns {game is (import("../../foundry-types/src/types/base").KnownSystemTypesMap[I]})
 */
function isSystem(sysid, game) {
  return sysid == game.system.id;
}

/**
 *
 * @param {import("../../foundry-types/src/types/base").KnownGameTypes} game
 * @returns {game is import("../../foundry-types/src/types/base").PathfinderGame})
 */
function isPathfinderGame(game) {
  return "pf2e" == game.system.id;
}
/**
 *
 * @param {import("../../foundry-types/src/types/base").KnownGameTypes} game
 * @returns {game is import("../../foundry-types/src/types/base").PathfinderGame})
 */
function isDnD5eGame(game) {
  return "pf2e" == game.system.id;
}

function observeHook(name, ...resultKeys) {
  return new Observable((obs) => {
    const handler = (...args) => {
      obs.next(Object.fromEntries(resultKeys.map((a, i) => [resultKeys[i] || i, args[i]])));
    };
    Hooks.on(name, handler);
    return () => {
      Hooks.off(name, handler);
    };
  }).pipe(share());
}
/**
 * @typedef {T extends Array<infer M> ? M : never} MemberOf<T>
 */
/**
 * @typedef {Parameters<Parameters<(typeof Hooks)['on']>['1']>} HookCallbackParams<T>
 */

/**
 *
 * @param {T extends Parameters<(typeof Hooks)['on']>['0']} name
 * @param  {...RK} resultKeys
 * @returns {Observable<{event:T} & Record<RK, MemberOf<HookCallbackParams[T]>>>}
 */
function observeHookEvents(name, ...resultKeys) {
  return observeHook(name, ...resultKeys).pipe(
    map((e) => ({ event: name, ...e })),
    share()
  );
}

/**
 *
 * @param {string} id
 * @returns {ActorPF2e}
 */
function getActorPF2e(id) {
  return game.actors.get(id);
}

/**
 * @typedef hookEventMap
 * @property {Observable<{event:'updateActor'; actor:Actor,data; Partial<Actor>,context:any}} updateActor
 * @property {Observable<{event:"createActor"; "actor":Actor;  "data", "context"}>} createActor
 * @property {Observable<{event:"deleteActor"; "actor":Actor;  "data", "context"}>} deleteActor
 * @property {Observable<{event:"targetToken"; "user":User;  "token":Token<TokenDocument<Scene>>, "targetted":boolean}>} targetToken
 * @property {Observable<{event:"controlToken"; "user":User;  "token":Token<TokenDocument<Scene>>, "controlled":boolean}>} controlToken
 * @property {Observable<{event:"updateToken"; "token":Token<TokenDocument<Scene>>;  "data":DocumentUpdateData<Token<TokenDocument<Scene>>>, "context":DocumentUpdateContext<Token<TokenDocument<Scene>>>}>} updateToken
 * @property {Observable<{event:"createToken"; "token":Token<TokenDocument<Scene>>;  "data":DocumentUpdateData<Token<TokenDocument<Scene>>>, "context":DocumentUpdateContext<Token<TokenDocument<Scene>>>}>} createToken
 * @property {Observable<{event:"deleteToken"; "token":Token<TokenDocument<Scene>>;  "data":DocumentUpdateData<Token<TokenDocument<Scene>>>, "context":DocumentUpdateContext<Token<TokenDocument<Scene>>>}>} deleteToken
 * @property {Observable<{event:"updateScene"; "scene":Scene;  "data":DocumentUpdateData<Scene>, "context":DocumentUpdateContext<Scene>}>} updateScene
 * @property {Observable<{event:"createScene"; "scene":Scene;  "data":DocumentUpdateData<Scene>, "context":DocumentUpdateContext<Scene>}>} createScene
 * @property {Observable<{event:"deleteScene"; "scene":Scene;  "data":DocumentUpdateData<Scene>, "context":DocumentUpdateContext<Scene>}>} deleteScene
 * @property {Observable<{event:"updateCombat"; "combat":Combat; "data":DocumentUpdateData<Combat>, "context":DocumentUpdateContext<Combat>}>} updateCombat
 * @property {Observable<{event:"createCombat"; "combat":Combat; "data":DocumentUpdateData<Combat>, "context":DocumentUpdateContext<Combat>}>} createCombat
 * @property {Observable<{event:"deleteCombat"; "combat":Combat; "data":DocumentUpdateData<Combat>, "context":DocumentUpdateContext<Combat>}>} deleteCombat
 * @property {Observable<{event:"combatTurn"; "combat":Combat; "data":DocumentUpdateData<Combat>, "context":DocumentUpdateContext<Combat>}>} deleteCombat
 * @property {Observable<{event:"updateItem"; "item":Item;  "options":any, "userId": string}>} updateItem
 * @property {Observable<{event:"createItem"; "item":Item;  "options":any, "userId": string}>} createItem
 * @property {Observable<{event:"deleteItem"; "item":Item;  "options":any, "userId": string}>} deleteItem
 * @property {Observable<{event:"updateActiveEffect"; "effect":ActiveEffect;  "options":any, "userId": string}>} updateActiveEffect
 * @property {Observable<{event:"createActiveEffect"; "effect":ActiveEffect;  "options":any, "userId": string}>} createActiveEffect
 * @property {Observable<{event:"deleteActiveEffect"; "effect":ActiveEffect;  "options":any, "userId": string}>} deleteActiveEffect
 * @property {Observable<{event:"renderChatMessage"; "message":ChatMessage;  "html":JQuery<HTMLElement>, "source":ChatMessageSource}>} renderChatMessage
 * @property {Observable<{event:"renderChatLog"; "message":ChatLog; ChatMessage>, "html", "source"}>} renderChatLog
 * @property {Observable<{event:"rollRequest", data: {terms:TermJSON[],controlled:{actors:string[];tokens:string[];}}; controlled:{actors:string[];tokens:string[];}; reply: Record<string,number>; }>} rollRequest
 */

/**
 * @returns {Array<Token<TokenDocumentPF2e>>}
 */
function getControlledTokens() {
  return [...canvas.tokens.controlled.values()];
}

function createEventListeners() {
  /** @type {hookEventMap} */
  const eventSources = {
    updateActor: observeHookEvents("updateActor", "actor", "data", "context"),
    createActor: observeHookEvents("createActor", "actor", "data", "context"),
    deleteActor: observeHookEvents("deleteActor", "actor", "data", "context"),
    targetToken: observeHookEvents("targetToken", "user", "token", "targetted"),
    controlToken: observeHookEvents("controlToken", "token", "controlled"),
    updateToken: observeHookEvents("updateToken", "token", "data", "context"),
    createToken: observeHookEvents("createToken", "token", "data", "context"),
    deleteToken: observeHookEvents("deleteToken", "token", "data", "context"),
    updateScene: observeHookEvents("updateScene", "scene", "data", "context"),
    createScene: observeHookEvents("createScene", "scene", "data", "context"),
    deleteScene: observeHookEvents("deleteScene", "scene", "data", "context"),
    updateCombat: observeHookEvents("updateCombat", "combat", "data", "context"),
    createCombat: observeHookEvents("createCombat", "combat", "data", "context"),
    deleteCombat: observeHookEvents("deleteCombat", "combat", "data", "context"),
    combatTurn: observeHookEvents("combatTurn", "combat", "data", "context"),
    updateItem: observeHookEvents("updateItem", "item", "options", "userId"),
    createItem: observeHookEvents("createItem", "item", "options", "userId"),
    deleteItem: observeHookEvents("deleteItem", "item", "options", "userId"),
    renderChatMessage: observeHookEvents("renderChatMessage", "message", "html", "source"),
    renderChatLog: observeHookEvents("renderChatLog", "message", "html", "source"),
    createActiveEffect: observeHookEvents("createActiveEffect", "effect", "options", "userId"),
    deleteActiveEffect: observeHookEvents("deleteActiveEffect", "effect", "options", "userId"),
    updateActiveEffect: observeHookEvents("updateActiveEffect", "effect", "options", "userId"),
    rollRequest: PlayerRolls.requests,
  };

  return merge(...Object.values(eventSources));
}

exports.creds = creds;
exports.debugHooks = debugHooks;
exports.autologin = autologin;
exports.gmlogin = gmlogin;

exports.isSystem = isSystem;
exports.isPathfinderGame = isPathfinderGame;
exports.isDnD5eGame = isDnD5eGame;
exports.observeHook = observeHook;
exports.observeHookEvents = observeHookEvents;
exports.getActorPF2e = getActorPF2e;
exports.getControlledTokens = getControlledTokens;
exports.performAutoLogin = performAutoLogin;
exports.isGameInitialised = isGameInitialised;
exports.createEventListeners = createEventListeners;
exports.systemDescriptions = systemDescriptions;
