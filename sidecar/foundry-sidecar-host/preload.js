// import { ActorPF2e } from "../../foundry-types/src/types/foundry/systems/pf2e/module/documents";
const path = require("path");
const fs = require("fs");

const express = require("express");
const expressws = require("express-ws");
const cors = require("cors");
const { isGameInitialised } = require("./lib");
const _app = express();
const { app } = expressws(_app);
const { createProxyMiddleware, fixRequestBody, responseInterceptor } = require("http-proxy-middleware");
const proxy = require("express-http-proxy");
// const jsonc = require("jsonc");
const debugHooks = false;
const gmlogin = true;
const autologin = true;
const creds = {
  MapTable: { u: "MapTable", p: "" },
  Gamemaster: { u: "Gamemaster", p: "" },
};
const { Observable, merge } = require("rxjs");
const { map, filter, reduce, scan, share, tap } = require("rxjs/operators");
const { proxy_paths } = require("./proxy_paths");

document.addEventListener("DOMContentLoaded", (e) => mount());
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

app.use(cors({ origin: "*" }));

/** Mount app once content is loaded */
async function mount() {
  CONFIG.debug.hooks = debugHooks;

  Hooks.once("init", (_args) => {
    console.log("init", game);
  });

  Hooks.once("ready", () => {
    console.log("SIDECAR", "Foundry ready, loading web server");
    mountWebServer();
  });

  Hooks.once("renderJoinGameForm", performAutoLogin);
  Hooks.once("renderJoinGameForm", performAutoLogin);
}

function performAutoLogin() {
  try {
    if (isGameInitialised(game)) {
      console.log("preload script mounted foundry. ", game.users);
      if (autologin && game && game.users && game.users.apps && game.users.apps.length == 1 && game.users.apps[0] instanceof FormApplication) {
        let loginApp = game.users.apps[0];
        if (gmlogin) {
          loginApp.form.userid.selectedIndex = 1;
          loginApp.form.password.value = creds.Gamemaster.p;
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
 *
 * @param {import("../../foundry-types/src/types/base").PathfinderGame} _game
 */
function mountWebServerPF2e(_game) {
  /**
   * a {ActorPF2e}
   */
  const a = getActorPF2e("idslks");
  a.itemTypes.treasure;
}

/**
 *
 * @param {T} x
 * @param  {...K extends keyof T} keys
 * @returns {Omit<T,K>}
 */
function mountWebServer5e(_game) {
  app.get("/actor/:id/backgrounds", (req, res) => res.send(_game.actors.get(req.params.id).itemTypes.background.map((i) => i.toJSON())));
  app.get("/actor/:id/classes", (req, res) => res.send(_game.actors.get(req.params.id).itemTypes.class.map((i) => i.toJSON())));
  app.get("/actor/:id/feats", (req, res) => res.send(_game.actors.get(req.params.id).itemTypes.feat.map((i) => i.toJSON())));
  app.get("/actor/:id/subclasses", (req, res) => res.send(_game.actors.get(req.params.id).itemTypes.subclass.map((i) => i.toJSON())));
  app.get("/actor/:id/spells", (req, res) => res.send(_game.actors.get(req.params.id).itemTypes.spell.map((i) => i.toJSON())));
  app.get("/actor/:id/weapons", (req, res) => res.send(_game.actors.get(req.params.id).itemTypes.weapon.map((i) => i.toJSON())));
  app.get("/actor/:id/consumables", (req, res) => res.send(_game.actors.get(req.params.id).itemTypes.consumable.map((i) => i.toJSON())));
  app.get("/actor/:id/equipment", (req, res) => res.send(_game.actors.get(req.params.id).itemTypes.equipment.map((i) => i.toJSON())));
  app.get("/actor/:id/backpacks", (req, res) => res.send(_game.actors.get(req.params.id).itemTypes.backpack.map((i) => i.toJSON())));
  app.get("/actor/:id/tools", (req, res) => res.send(_game.actors.get(req.params.id).itemTypes.tool.map((i) => i.toJSON())));
  app.get("/actor/:id/loots", (req, res) => res.send(_game.actors.get(req.params.id).itemTypes.loot.map((i) => i.toJSON())));
  app.put("/actor/:id/backgrounds/:item_id", (req, res) => res.json(_game.actors.get(req.params.id).items.get(req.params.item_id).importFromJSON(req.body)));
  app.put("/actor/:id/classes/:item_id", (req, res) => res.json(_game.actors.get(req.params.id).items.get(req.params.item_id).importFromJSON(req.body)));
  app.put("/actor/:id/feats/:item_id", (req, res) => res.json(_game.actors.get(req.params.id).items.get(req.params.item_id).importFromJSON(req.body)));
  app.put("/actor/:id/subclasses/:item_id", (req, res) => res.json(_game.actors.get(req.params.id).items.get(req.params.item_id).importFromJSON(req.body)));
  app.put("/actor/:id/spells/:item_id", (req, res) => res.json(_game.actors.get(req.params.id).items.get(req.params.item_id).importFromJSON(req.body)));
  app.put("/actor/:id/weapons/:item_id", (req, res) => res.json(_game.actors.get(req.params.id).items.get(req.params.item_id).importFromJSON(req.body)));
  app.put("/actor/:id/consumables/:item_id", (req, res) => res.json(_game.actors.get(req.params.id).items.get(req.params.item_id).importFromJSON(req.body)));
  app.put("/actor/:id/equipment/:item_id", (req, res) => res.json(_game.actors.get(req.params.id).items.get(req.params.item_id).importFromJSON(req.body)));
  app.put("/actor/:id/backpacks/:item_id", (req, res) => res.json(_game.actors.get(req.params.id).items.get(req.params.item_id).importFromJSON(req.body)));
  app.put("/actor/:id/tools/:item_id", (req, res) => res.json(_game.actors.get(req.params.id).items.get(req.params.item_id).importFromJSON(req.body)));
  app.put("/actor/:id/loots/:item_id", (req, res) => res.json(_game.actors.get(req.params.id).items.get(req.params.item_id).importFromJSON(req.body)));
}

function handleActorMessage() {
  return [];
}

function extractFullData(item = {}) {
  // let first = true;
  // let queue = [];
  let excludeKeys = ["data", "actor", "canvas", "parent", "transform", "children"];
  // let out = {};
  // let seen = [item];
  // const loopLevel = (_out, _item) => {
  //   for (let k in _item) {
  //     if (excludeKeys.includes(k)) continue;
  //     if (typeof _item[k] !== "undefined")
  //       try {
  //         if (typeof _item[k] === "object" && _item[k] != null) {
  //           if (!seen.includes(_item[k])) {
  //             seen.push(_item[k]);
  //             // queue.push(() => (out[k] = l(item[k])));
  //             queue.push(() => loopLevel(_out[k], _item[k]));
  //           }
  //         } else {
  //           _out[k] = JSON.parse(JSON.stringify(_item[k]));
  //         }
  //       } catch (e) {
  //         console.warn("ser err", e);
  //       }
  //   }
  // };
  // loopLevel(out, item);
  // if (first) {
  //   let cur;
  //   while ((cur = queue.shift())) {
  //     cur();
  //   }
  // }
  // return out;
  let out = {};
  let seen = [item];
  let seenIdx = [];
  function replacer(key, value) {
    try {
      if (typeof value == "object") {
        if (value == item || seenIdx.find((s) => s.value == value) || excludeKeys.includes(key)) {
          return undefined;
        } else {
          // try {
          //   let dc = deepClone(value);
          //   if (dc) return dc;
          // } catch (e) {
          //   console.warn("deepclone attempt failed");
          // }
          // seen.push(value);a
          seenIdx.push({ key, value });
          return Array.isArray(value) ? [...value] : { ...value }; // JSON.parse(JSON.stringify(value || null, replacer));
        }
      } else if (typeof value !== "undefined") {
        return value;
      } else {
        return;
      }
    } catch (e) {
      console.warn("JSON Replacer Error", { key, value }, e);
      if (value.toJSON) {
        return value.toJSON();
      }
      return undefined;
    }
  }
  try {
    // let x = JSON.parse(JSON.stringify(deepClone(item), replacer));
    // if (x) return x;
    for (let k in item) {
      try {
        if (typeof item[k] == "object") {
          if (item[k] == item || seenIdx.find((s) => s.value == item[k]) || excludeKeys.includes(k)) {
            continue;
          }
          seenIdx.push({ key: k, value: item[k] });

          let stringified = JSON.stringify(item[k], replacer);
          // let stringified = jsonc.stringify(item[k]);
          if (stringified && stringified != "undefined") out[k] = JSON.parse(stringified);
        } else if (typeof item[k] !== "undefined") {
          out[k] = item[k];
        }
      } catch (e) {
        // console.warn("Serialisation Error", { k, ik: item[k], ok: out[k] }, e);
      }
      // return Object.fromEntries(Object.toEntries(item || {}).map((e) => [e[0], JSON.parse(JSON.stringify(e[1]))]));
    }
    return mergeObject(item.toJSON ? item.toJSON() : {}, out);
  } catch (e) {
    console.warn("cereal killer", e);
    return out;
  }

  return { ...(item.toJSON ? item.toJSON() : {}), ...out };
}

function mountWebServer() {
  console.log("MOUNTING WEB SERVER");

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
   * @property {Observable<{event:"updateItem"; "item":Item;  "options":any, "userId": string}>} updateItem
   * @property {Observable<{event:"createItem"; "item":Item;  "options":any, "userId": string}>} createItem
   * @property {Observable<{event:"deleteItem"; "item":Item;  "options":any, "userId": string}>} deleteItem
   * @property {Observable<{event:"renderChatMessage"; "message":ChatMessage;  "html":JQuery<HTMLElement>, "source":ChatMessageSource}>} renderChatMessage
   * @property {Observable<{event:"renderChatLog"; "message":ChatLog; ChatMessage>, "html", "source"}>} renderChatLog
   */

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
    updateCombat: observeHookEvents("updateCombat", "scene", "data", "context"),
    createCombat: observeHookEvents("createCombat", "scene", "data", "context"),
    deleteCombat: observeHookEvents("deleteCombat", "scene", "data", "context"),
    updateItem: observeHookEvents("updateItem", "item", "options", "userId"),
    createItem: observeHookEvents("createItem", "item", "options", "userId"),
    deleteItem: observeHookEvents("deleteItem", "item", "options", "userId"),
    renderChatMessage: observeHookEvents("renderChatMessage", "message", "html", "source"),
    renderChatLog: observeHookEvents("renderChatLog", "message", "html", "source"),
  };

  const events = merge(...Object.values(eventSources));
  // Hooks.on('controlToken',(x,y,s)=>{x._source.speaker.})
  /** @type {Observable<{event:'updateActor'|'createActor'| 'deleteActor'; actor:Actor; data:DocumentUpdateData<Actor>}>} */
  const actorUpdates = events.pipe(filter((e) => e.event.endsWith("Actor")));
  /** @type {Observable<{event:'updateToken'|'createToken'|'controlToken'|'deleteToken'|'targetToken'; token:Token; data?:DocumentUpdateData<Token<TokenDocument<Scene>>>,user?:User;controlled?:boolean; targetted?:boolean;}>} */
  const tokenUpdates = events.pipe(filter((e) => e.event.endsWith("Token")));
  /** @type {Observable<{event:'updateScene'|'createScene'|'deleteScene'; token:Scene; data:DocumentUpdateData<Scene>}>} */
  const sceneUpdates = events.pipe(filter((e) => e.event.endsWith("Scene")));
  /** @type {Observable<{event:'updateCombat'|'createCombat'|'deleteCombat'; token:Combat; data:DocumentUpdateData<Combat>}>} */
  const combatUpdates = events.pipe(filter((e) => e.event.endsWith("Combat")));
  /** @type {Observable<{event:'renderChatMessage'; message:ChatMessage,html:JQuery<HTMLElement>; source:import("../../foundry-types/src/types/foundry/common/documents/chat-message").ChatMessageSource}>} */
  const chatMessages = events.pipe(filter((e) => e.event == "renderChatMessage"));
  // Hooks.on('renderChatMessage', (message,html, source)=>{

  // })

  function getActorItems(actor_id, type) {
    return game.actors.get(actor_id).itemTypes[type].map((i) => extractFullData(i));
  }
  function getActorItem(actor_id, item_id) {
    return extractFullData(game.actors.get(actor_id).items.get(item_id));
  }

  function updateActorItem(actor_id, type, item_id, data) {
    const actor = game.actors.get(actor_id);
    const item = actor.itemTypes[type].find((i) => i.id == item_id);
    if (item) {
      item.importFromJSON(data);
    }
  }
  function performActorAction(actor_id, actionData) {
    const actor = game.actors.get(actor_id);
    if (actionData.method && typeof actor[actionData.method] == "function") {
      return actor[actionData.method](...(actionData.parameters || []));
    }
  }
  function performActorItemAction(actor_id, item_id, actionData) {
    const actor = game.actors.get(actor_id);
    const item = actor.itemTypes[type].find((i) => i.id == item_id);
    if (actionData.method && typeof item[actionData.method] == "function") {
      return item[actionData.method](...(actionData.parameters || []));
    }
  }

  /**
   *
   * @param {any} actor
   * @returns {ActorPF2e}
   */
  function pfa(actor) {
    return actor;
  }
  app.get("/actor/:id", (req, res) => {
    let actor = game.actors.get(req.params.id);
    // actor.exportToJSON({});
    res.json(extractFullData(actor));
  });

  app.post(`/actor/:id`, (req, res) => {
    res.json(performActorItemAction(actorId, itemId, JSON.parse(req.body)));
  });

  app.ws("/actor/:id", (ws, req) => {
    try {
      const tgtActor = game.actors.get(req.params.id);
      // let oldOnUpdate = tgtActor.onUpdate;
      // tgtActor.onUpdate = function (...args) {
      //   console.log("actor.onUpdate", args, this);
      // };

      /** @type {Token<TokenDocument<Scene>>} */
      let currentToken = () => tgtActor.getActiveTokens().shift();
      /** @type {Combat} */
      let currentCombat = () =>
        game.combat || {
          active: false,
          status: "No active encounter",
          toJSON() {
            return this;
          },
        };

      ws.on("message", (data, isBinary) => {
        const msg = JSON.parse(data.toString("utf-8"));
        if (msg && (msg.type || msg.event)) {
          handleActorMessage(tgtActor, msg, ws);
        }
      });
      try {
        ws.send(JSON.stringify({ event: "updateActor", data: extractFullData(tgtActor || {}) }));
        ws.send(JSON.stringify({ event: "updateToken", data: extractFullData(currentToken() || {}) }));
        ws.send(JSON.stringify({ event: "updateCombat", data: extractFullData(currentCombat() || {}) }));
      } catch (e) {
        console.log("failed on initial sendings");
      }

      function forwardEventOverWS(event) {
        try {
          let data = {};
          for (let k in event) {
            if (k !== "event") {
              try {
                data[k] = typeof event[k] == "object" ? extractFullData(event[k]) : event[k];
              } catch (e) {
                console.warn("forwardEventOverWS Error:", e, event);
              }
            }
          }
          ws.send(JSON.stringify({ event, data }));
        } catch (e) {
          console.warn("forwardEventOverWS Error:", e, event);
        }
      }
      const eventForwardSubscriber = {
        next: forwardEventOverWS,
        error: (e) => console.error("eventForwardSubscriber", "|", e),
        error: () => console.log("eventForwardSubscriber | Complete."),
      };
      const actorEvents = events.pipe(
        filter((e) => {
          try {
            switch (e.event) {
              case "controlToken":
              case "targetToken":
                return currentToken().controlled || (e.token.actor?.id || e.token.actor?._id) == req.params.id;
              case "updateToken":
              case "createToken":
              case "deleteToken":
                return (e.token.actor?.id || e.token.actor?._id) == req.params.id;
              case "createActor":
              case "deleteActor":
              case "updateActor":
                return (e.actor.id || e.actor._id) == req.params.id;
              case "createItem":
              case "updateItem":
              case "deleteItem":
                let owner = e.item.actor || e.item.parent;
                return owner && (owner.id || owner._id) == req.params.id;
              case "deleteCombat":
              case "updateCombat":
              case "createCombat":
                return e.combat.combatants.has(currentToken().id || currentToken()._id);
              case "renderChatMessage":
                if (e.message.speaker.actor) {
                  return e.message.speaker.actor == req.params.id;
                }
                if (e.message.speaker.token) {
                  return e.message.speaker.token == currentToken().id;
                }
                return e.message.speaker.scene || e.message.speaker.alias;
              case "createScene":
              case "deleteScene":
              case "updateScene":
              default:
                return false;
            }
          } catch (e) {
            return false;
          }
        }),
        tap((e) => {
          try {
            switch (e.event) {
              case "createToken":
              case "deleteToken":
              case "createActor":
              case "deleteActor":
              case "createItem":
              case "updateItem":
              case "deleteItem":
                forwardEventOverWS({ event: "updateActor", actor: extractFullData(tgtActor || {}) });
                break;
              case "controlToken":
              case "targetToken":
              case "updateToken":
              case "deleteCombat":
              case "updateCombat":
              case "createCombat":
              case "updateScene":
              // ws.send(JSON.stringify({ event: "updateActor", data: extractFullData(tgtActor || {}) }));
              // case "updateActor":
              // case "renderChatMessage":
              // case "createScene":
              // case "deleteScene":
              default:
                console.log("event", e);
            }
          } catch (e) {
            return false;
          }
        })
      );
      const aeSub = actorEvents.subscribe(eventForwardSubscriber);

      // actorUpdates
      //   .pipe(
      //     tap((v) => console.log("Actor Update", v)),
      //     filter((u) => u.actor?.id == req.params.id),
      //     map((u) => {
      //       try {
      //         console.log("Actor Update", u);
      //         return { event: "updateActor", data: extractFullData(u.data) };
      //       } catch (e) {
      //         console.log("Actor Update error", e);
      //       }
      //     })
      //   )
      //   .subscribe((u) => {
      //     try {
      //       ws.send(JSON.stringify(u));
      //     } catch (err) {
      //       console.warn("websocket emit err", err);
      //     }
      //   });

      // tokenUpdates.pipe(filter((u) => (u.token.actor.id || u.token.actor._id) == req.params.id)).subscribe(eventForwardSubscriber);
    } catch (e) {
      console.error("Error starting sockets", e);
    }
  });
  app.get("/actor", (req, res) =>
    res.json(
      game.actors
        .filter((a) => a.hasPlayerOwner && a.isOwner)
        .map((a) => ({
          id: a.id,
          name: a.name,
          image: a.img,
          type: a.type,
        }))
    )
  );

  for (let itemType of systemDescriptions[game.system.id].actor.item_types) {
    app.get(`/actor/:id/${itemType}`, (req, res) => res.json(getActorItems(req.params.id, itemType)));
    app.get(`/actor/:id/${itemType}/:itemId`, (req, res) => res.json(getActorItems(req.params.id, itemType)));
    app.put(`/actor/:id/${itemType}/:itemId`, (req, res) => res.json(updateActorItem(req.params.id, itemType, req.params.itemId, req.body)));
    app.post(`/actor/:id/${itemType}/:itemId`, (req, res) => {
      res.json(performActorItemAction(actorId, itemId, JSON.parse(req.body)));
    });
  }

  app.get("/collections", (req, res) => {
    res.json([...game.collections.keys()]);
  });
  // app.get("/collection/:key", (req,res)=>{
  //   let x=game.collections.get(req.params.key);
  // })

  app.get("/packs", (req, res) => {
    res.json([...game.packs.keys()]);
  });
  app.get("/pack/:key", (req, res) => {
    res.json(extractFullData(game.packs.get(req.params.key)));
  });
  app.get("/system", (req, res) => {
    res.json([...game.system.packs.keys()]);
  });
  app.get("/system/packs", (req, res) => {
    res.json([...game.system.packs.keys()]);
  });
  app.get("/system/pack/:key", (req, res) => {
    res.json(game.packs.get(game.system.id + "." + req.params.key).toJSON());
  });
  app.get("/uuid/:uuid", (req, res) => {
    fromUuid(req.params.uuid)
      .then(
        (doc) => res.json(doc.toJSON()),
        (reason) => res.status(403).json(reason)
      )
      .catch((e) => console.error(e));
  });

  // if (isPathfinderGame(game)) {
  //   mountWebServerPF2e(game);
  // } else if (isDnD5eGame(game)) {
  //   mountWebServer5e(game);
  // }
  // app.use(
  //   createProxyMiddleware({
  //     target: `${window.location.protocol}//${window.location.host}/`,
  //     // changeOrigin: true,
  //     // autoRewrite: true,
  //     // followRedirects: true,
  //     // hostRewrite: "http://localhost:3000",
  //   })
  // );
  app.get("/info", (req, res) => {
    if (game && isGameInitialised(game)) {
      res.json({ system: extractFullData(game.system), world: game.world.toJSON() });
    } else {
      res.send("FAIL");
    }
  });
  app.use(express.static("../foundry-sidecar-client/dist/", { fallthrough: true }));
  app.get("**", (req, res, next) => {
    // console.log("catchall handler", req);
    try {
      if (
        proxy_paths.filter((p) => req.path.startsWith(p) || req.path.startsWith("/" + p)).length > 0 ||
        req.path.match(/\.(jpg|jpeg|png|webp|webm|gif|mp4|mp3|mp[\deg]{1,2}|avi|css|json|js|mjs|woff2|ttf|wof.*|svg|hbs)$/i)
      ) {
        // console.log("forwarding to next");
        next("route");
      } else {
        // console.log("serving file");
        res.sendFile(
          "foundry-sidecar-client/dist/index.html",
          {
            root: path.dirname(__dirname), //`/home/dion/dev/fvtt-localplay-tools/sidecar/foundry-sidecar-client/dist/`,
          },
          (e) => {
            if (e) {
              console.error("index serve error", e);
            }
          }
        );
      }
    } catch (err) {
      console.error("error serving index", e);
      next();
    }
    // res.send(require('fs').readFileSync('../foundry-sidecar-client/dist/index.html'));
  });
  app.use(
    proxy("https://foundry.rpgtable.quest/", {
      // filter: (req, res) => {
      //   return (
      //     [
      //       "tokenizer",
      //       "Tokens",
      //       "scripts",
      //       "Artwork",
      //       "Maps",
      //       "modules",
      //       "systems",
      //       "worlds",
      //       "pdftofoundry-image-mapping.json",
      //       "fonts",
      //       "icons",
      //       "css",
      //       "ui",
      //     ].filter(
      //       (p) => req.path.startsWith(p) || req.path.startsWith("/" + p)
      //     ).length > 0
      //   );
      // },
      https: true,
      proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
        proxyReqOpts.insecureHTTPParser = true;
        return proxyReqOpts;
      },
      preserveHostHdr: false,
    })
  );

  /** catch-all */
  // app.listen(3000);
}
app.listen(3000);
//# sourceMappingURL=preload.js.map
