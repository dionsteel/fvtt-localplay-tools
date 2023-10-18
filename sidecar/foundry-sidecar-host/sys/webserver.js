const { createProxyMiddleware, fixRequestBody, responseInterceptor } = require("http-proxy-middleware");

const proxy = require("express-http-proxy");
// const jsonc = require("jsonc");
const { Observable, merge } = require("rxjs");
const { map, filter, reduce, scan, share, tap } = require("rxjs/operators");
const { proxy_paths } = require("./proxy_paths");
const express = require("express");
const _ = require("lodash");
const { isGameInitialised, performAutoLogin, creds, systemDescriptions, observeHookEvents, createEventListeners } = require("./lib");
const { fromEvent } = require("rxjs");
const { PlayerRolls } = require("./roll-on-player");
const helpers = require("./system_helpers");
let excludeKeys = ["canvas", "parent", "transform", "children", "tint", "model", "scene", "actor", "model"];
function getAllPropertyNames(item) {
  let protos = [];
  let cur = item;
  while ((cur = Object.getPrototypeOf(cur))) {
    if (cur == Object) break;
    protos.push(cur);
  }
  let propertyNames = [...Object.keys(item), ...Object.getOwnPropertyNames(item)];
  for (let prot of protos) {
    propertyNames.push(...Object.getOwnPropertyNames(prot));
  }
  return propertyNames.reduce((a, c) => {
    if (!a.includes(c) && !excludeKeys.includes(c)) {
      a.push(c);
    }
    return a;
  }, []);
}
function getAllProperties(item) {
  return getAllPropertyNames(item).reduce((o, k) => {
    o[k] = item[k];
    return o;
  }, {});
}

function extractProps(item, excludePrivate = true, excluded = []) {
  let q = [];
  let seen = [item];
  let refs = [];
  let refCount = 0;
  const propExtractor = (item) => {
    let out = Array.isArray(item) ? [] : {};
    if (typeof item !== "object" || item == null) {
      return item;
    }

    // if(Array.isArray(item)){
    //   for(let entry of item){ }

    // }

    let _ee = Object.entries(item);
    for (let [key, value] of _ee) {
      try {
        if (!key.endsWith("id") && excludePrivate && (key.startsWith("_") || key.startsWith("@"))) {
          continue;
        }
        if (!key.endsWith("id") && (excluded.includes(key) || excludeKeys.includes(key))) {
          continue;
        }
        let seenIdx = typeof item[key] == "object" && item[key] != null ? seen.indexOf(item[key]) : -1;
        if (seenIdx < 0) {
          if (typeof item[key] == "object" && item[key] != null) {
            seen.push(item[key]);
          }
          q.push(() => {
            try {
              out[key] = propExtractor(item[key]);
              if (!key.endsWith("id")) {
                out[key.replace(/^_/, "")] = out[key];
              }
            } catch (e) {
              console.error("propExtractor", e, item, key, value);
            }
          });
        } else {
          let refV = seen[seenIdx];
          if (!refs.includes(refV)) refs.push(refV);
          let refI = refs.indexOf(refV);
          out[key] = { _ref: refI };
        }
      } catch (e) {
        console.error("propExtractor", e, item, key, value);
      }
    }
    return out; //Object.fromEntries(Object.entries(item).map((e) => [e[0], extractProps(e[1])]));
  };
  let out = item.event ? Object.fromEntries(Object.entries(item).map((e) => [e[0], propExtractor(e[1])])) : propExtractor(item);
  let r;
  while ((r = q.shift())) {
    try {
      r();
    } catch (e) {
      console.error("extractProps loop", e, out);
    }
  }
  seen = [];
  out._refs = propExtractor(refs);
  while ((r = q.shift())) {
    try {
      r();
    } catch (e) {
      console.error("extractProps loop", e, out);
    }
  }
  return out;
}

function extractFullData(item = {}) {
  try {
    let stringed = JSON.stringify({ ...item });
    return JSON.parse(stringed);
  } catch (e) {
    console.error(e);
  }
  // let first = true;
  // let queue = [];
  // if (typeof item.toObject == "function") {
  //   return item.toObject();
  // }
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
    if (typeof item == "object" && item != null) {
      console.log("cloning object");
      let cloned = extractProps(item);
      // let cloned = _.assignIn({}, item);
      console.log("cloned", cloned);
      return cloned;
    }
    // let x = JSON.parse(JSON.stringify(deepClone(item), replacer));
    // if (x) return x;
    let ikeys = [...Object.keys(item)];
    for (let k of ikeys) {
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
    return { ...out };
  } catch (e) {
    console.error("cereal killer", e);
    return out;
  }

  return { ...(item.toJSON ? item.toJSON() : {}), ...out };
}

function mountWebServer(app) {
  console.log("MOUNTING WEB SERVER");
  const helper = game.system.id == "dnd5e" ? helpers.dnd5e : helpers.pf2e; //helpers[game.system.id];
  const events = createEventListeners();
  // events.rollRequest.pipe(map(rr=>rr.roll.toJSON().))
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
  PlayerRolls.patch();
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
    let actor = helper.getActorData(req.params.id);
    // actor.exportToJSON({});
    console.log("Get Actor", req.params.id, actor);
    const dactor = extractFullData(actor || {});
    console.log("returning actor", actor, dactor);
    res.json(dactor);
  });

  app.post(`/actor/:id`, (req, res) => {
    res.json(performActorItemAction(actorId, itemId, JSON.parse(req.body)));
  });

  /** Websocket Handler */
  app.ws("/actor/:id", (ws, req) => {
    try {
      const tgtActor = game.actors.get(req.params.id);
      // let oldOnUpdate = tgtActor.onUpdate;
      // tgtActor.onUpdate = function (...args) {
      //   console.log("actor.onUpdate", args, this);
      // };
      const pendingRolls = [];
      function rollId() {
        let placed = false;
        while (!placed) {
          let ni = Math.floor(Math.random() * 4500);
          if (!pendingRolls.find((r) => r.id == ni)) {
            placed = true;
            return ni;
          }
        }
      }
      PlayerRolls.enableForActor(req.params.id);
      function handlePlayerRPC(msg) {
        switch (msg.action) {
          case "performStrike":
            helper.performStrike(tgtActor._id, msg.options);
            // tgtActor.system.actions[msg.options.strikeIdx].variants[msg.options.variantIdx].roll();
            break;
          case "performStrikeAux":
            helper.performStrikeAux(tgtActor._id, msg.options);
            // tgtActor.system.actions[msg.options.strikeIdx].variants[msg.options.variantIdx].roll();
            break;
          case "rollStrikeDamage":
            helper.rollStrikeDamage(tgtActor._id, msg.options);
            break;
          case "performItemAction":
            helper.performItemAction(tgtActor._id, msg.options);
            // tgtActor.system.actions[msg.options.strikeIdx].variants[msg.options.variantIdx].roll();
            break;
          case "performAction":
            helper.performAction(tgtActor._id, msg.uuid, msg.options);
            // tgtActor.system.actions[msg.options.strikeIdx].variants[msg.options.variantIdx].roll();
            break;
          case "performSkillAction":
            helper.performSkillAction(tgtActor._id, msg.slug, msg.options);
            // tgtActor.system.actions[msg.options.strikeIdx].variants[msg.options.variantIdx].roll();
            break;
          default:
            break;
        }
      }
      function handleActorMessage(msg) {
        switch (msg.event) {
          case "rollReply":
            console.log("handing roll reply", msg, pendingRolls);
            const rollIdx = pendingRolls.findIndex((r) => r.id == msg.rollId);
            console.log("handing roll reply: found roll idx?", rollIdx);
            if (rollIdx >= 0) {
              const roll = pendingRolls[rollIdx];
              console.log("found roll", roll);
              if (roll) {
                roll.reply.next(msg.formData || msg.data.formData || msg.data || msg);
                pendingRolls.splice(rollIdx, 1);
              }
            }
            break;
          case "playerRPC":
            console.log("handling player rpc", msg);
            handlePlayerRPC(msg);
            break;
        }
        return [];
      }

      /** @type {()=>Token<TokenDocument<Scene>>} */
      let currentToken = () => tgtActor.getActiveTokens().shift();
      /** @type {()=>Combat} */
      let currentCombat = () =>
        game.combat || {
          active: false,
          status: "No active encounter",
          toJSON() {
            return this;
          },
        };
      // fromEvent("message", ws).pipe(map());
      ws.on("message", (data, isBinary) => {
        const msg = JSON.parse(data.toString("utf-8"));
        if (msg && (msg.event || msg.type)) {
          handleActorMessage(msg);
        }
      });

      try {
        forwardEventOverWS({ event: "updateActor", actor: helper.getActorData(req.params.id) });
        // forwardEventOverWS({ event: "updateToken", token: currentToken() || {} });
        forwardEventOverWS({ event: "updateCombat", combat: currentCombat() || {} });
      } catch (e) {
        console.log("failed on initial sendings");
      }

      function forwardEventOverWS(event) {
        try {
          ws.send(JSON.stringify(extractFullData(event)));
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
            let owner;
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
                owner = e.item.actor || e.item.parent;
                return owner && (owner.id || owner._id) == req.params.id;
              case "createActiveEffect":
              case "updateActiveEffect":
              case "deleteActiveEffect":
                owner = e.effect.actor || e.effect.parent;
                return owner && (owner.id || owner._id) == req.params.id;
              case "deleteCombat":
              case "updateCombat":
              case "createCombat":
                return e.combat.combatants.has(currentToken().id || currentToken()._id);
              case "renderChatMessage":
                if (e.html && e.html.html) {
                  try {
                    e.html = e?.html?.html();
                  } catch (e) {
                    console.error(e);
                  }
                }
                // return true;
                if (e.message.speaker?.alias == "Gamemaster") {
                  return true;
                }
                if (e.message.speaker.actor) {
                  return e.message.speaker.actor == req.params.id;
                }
                if (e.message.speaker.token) {
                  return e.message.speaker.token == currentToken().id;
                }
                if (e.message.flags["monks-tokenbar"]) {
                  const tbflags = e.message.flags["monks-tokenbar"];
                  let { dc, modename, name, options, requests, rollmode, showAdvantage, what, ...tokens } = tbflags;
                  const actorids = Object.values(tokens).map((v) => v.actorid);
                  return actorids.includes(req.params.id);
                }
                return e.message.speaker.alias || e.message.speaker.scene;
              case "rollRequest":
                console.log("rollRequest filter", e);
                // pendingRolls.push({id:rollId(),data:e.data})
                return e.controlled.actors.includes(req.params.id) || e.controlled.tokens.includes(currentToken().id);
              case "createScene":
              case "deleteScene":
              case "updateScene":
              default:
                return false;
            }
          } catch (e) {
            console.error("filter error", e);
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
              case "createActiveEffect":
              case "updateActiveEffect":
              case "deleteActiveEffect":
                forwardEventOverWS({ event: "updateActor", actor: helper.getActorData(req.params.id) });
                break;
              case "rollRequest":
                let nrId = e?.id || rollId();
                e.id = nrId;
                pendingRolls.push(e);

                console.log("RollRequest tap", e);
                break;
              // forwardEventOverWS({ event: "rollRequest", id: nrId, data: e.data, controlled: e.controlled });
              case "controlToken":
                e.token = e.token.id;
              // case "targetToken":
              // case "updateToken":
              // case "deleteCombat":
              // case "updateCombat":
              // case "createCombat":
              // case "updateScene":
              // ws.send(JSON.stringify({ event: "updateActor", data: extractFullData(tgtActor || {}) }));
              // case "updateActor":
              case "renderChatMessage":
                console.log("renderChatMessage", e);
                break;
              // case "createScene":
              // case "deleteScene":
              default:
                // forwardEventOverWS(extractFullData(e));
                console.log("event", e);
            }
          } catch (e) {
            console.error("Error in event filter for ", tgtActor.name, e);
            return false;
          }
        })
      );
      const aeSub = actorEvents.subscribe(eventForwardSubscriber);

      ws.on("disconnect", () => {
        aeSub.unsubscribe();
        PlayerRolls.disableForPlayer(req.params.id);
      });
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
    let pack = game.packs.get(req.params.key);
    pack.values = [...(pack?.index?.values() || [])];
    res.json(extractFullData(pack));
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
  app.get(["**", "**/*"], (req, res, next) => {
    console.log("catchall handler", req);
    try {
      if (
        proxy_paths.filter((p) => req.path.startsWith(p) || req.path.startsWith("/" + p)).length > 0 ||
        req.path.match(/\.(jpg|jpeg|png|webp|webm|gif|mp4|mp3|mp[\deg]{1,2}|avi|css|json|js|mjs|woff2|ttf|wof.*|svg|hbs)$/i)
      ) {
        // console.log("forwarding to next");
        next("route");
      } else {
        // console.log("serving file");
        const dirname = path.dirname(__dirname);
        res
          .sendFile(
            "foundry-sidecar-client/dist/index.html",
            {
              root: dirname, //`/home/dion/dev/fvtt-localplay-tools/sidecar/foundry-sidecar-client/dist/`,
            },
            (e) => {
              if (e) {
                console.error("index serve error", e);
              }
            }
          )
          .end();
      }
    } catch (err) {
      console.error("error serving index", e);
      next("route");
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

exports.mountWebServer = mountWebServer;
