const express = require("express");
const expressws = require("express-ws");
// const
const { isGameInitialised } = require("./lib");
// const _app = 
const { app } = expressws(express());
const debugHooks = false;
const gmlogin = false;
const autologin = true;
const { Observable } = require("rxjs");
const { map, filter, reduce, scan, share } = require("rxjs/operators");
document.addEventListener("DOMContentLoaded", (e) => mount());

/** Mount app once content is loaded */
async function mount() {
  CONFIG.debug.hooks = debugHooks;

  Hooks.once("init", (_args) => {
    console.log("init", game);
  });

  Hooks.once("ready", () => {
    console.log('SIDECAR', "Foundry ready, loading web server");
    mountWebServer();
  });

  Hooks.once("renderJoinGameForm", performAutoLogin);
}

function performAutoLogin(_args) {
  try {
    if (isGameInitialised(game)) {
      console.log("preload script mounted foundry. ", _args, game.users);
      if (
        autologin &&
        game &&
        game.users &&
        game.users.apps &&
        game.users.apps.length == 1 &&
        game.users.apps[0] instanceof FormApplication
      ) {
        let loginApp = game.users.apps[0];
        if (gmlogin) {
          loginApp.form.userid.selectedIndex = 1;
          loginApp.form.password.value = "G0ndolin1!";
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

/**
 * 
 * @param {string} name 
 * @param  {...K} resultKeys 
 * @returns {Record<K,any>}
 */
function observeHook(name, ...resultKeys) {
  return new Observable((obs) => {
    const handler = (...args) => {
      obs.next(
        Object.fromEntries(resultKeys.map((a, i) => [resultKeys[i], args[i]]))
      );
    };
    Hooks.on(name, handler);
    return () => {
      Hooks.off(name, handler);
    };
  }).pipe(share());
}
function getRouter() { return express.Router({ mergeParams: true, caseSensitive: false, strict: false }); }
/**
 *
 * @param {import("../../foundry-types/src/types/base").PathfinderGame} _game
 */
function mountWebServerPF2e(_game) {
  mountWebServerBase(_game);
}

/**
 * 
 * @param {T} x 
 * @param  {...K extends keyof T} keys 
 * @returns {Pick<T,K>}
 */
function pick(x, ...keys) { return Object.fromEntries(Object.entries(x).filter(k => keys.includes(k))); }

/**
 * 
 * @param {T} x 
 * @param  {...K extends keyof T} keys 
 * @returns {Omit<T,K>}
 */
function omit(x, ...keys) { return Object.fromEntries(Object.entries(x).filter(k => !keys.includes(k))); }

function mountWebServerBase(_game) {
  const actorUpdates = observeHook("updateActor", "actor", "data", "context");
  const tokenUpdates = observeHook("updateToken", "token", "data", "context");
  const tokenControlUpdates = observeHook("controlToken", "token", "controlled", "context");
  const sceneUpdates = observeHook("updateScene", "scene", "data", "context");
  const combatUpdates = observeHook("updateCombat", "scene", "data", "context");
  const itemTypeList =
    [
      "backgrounds",
      "classes",
      "feats",
      "subclasses",
      "spells",
      "weapons",
      "consumables",
      "equipment",
      "backpacks",
      "tools",
      "loots"
    ];

  function getActorItems(actor_id, type) {
    return _game.actors.get(actor_id).itemTypes[type].map((i) => i.toJSON());
  }
  let x = pick({ Popo: true, slal: 2 }, 'slal');
  x
  function updateActorItem(actor_id, type, item_id, data) {
    try {
      const actor = _game.actors.get(actor_id);
      if (actor) {
        const item = actor.itemTypes[type].find((i) => i.id == item_id);
        if (item) {
          item.importFromJSON(data);
          return true;
        } else {
          throw new Error("Item not found")
        }
      }
      throw new Error('No actor found.')
    } catch (error) {
      console.warn('Actor item update error: ', error);
      return false;
    }
  }

  /**
   * 
   * @param {import("../../foundry-types/src/types/foundry/actor5e").Actor5E} actor
   * @param {Partial<import("../../foundry-types/src/types/foundry/actor5e").Actor5E>} updateData 
   */
  function updateActor(actor, updateData) {
    try {
      const dActor = actor.toJSON();
      if (dActor) {
        const merged = mergeObject(dActor, updateData);
        const text = JSON.stringify(merged);
        actor.importFromJSON(text);
        return true;
      }
      throw new Error("JSON conversion error");
    } catch (error) {
      console.warn('Actor update error: ', error);
      return false;
    }
  }


  function sanitize(x, q) {
    if (typeof x !== 'object') { return x; }
    if (typeof x == 'object' && typeof x['toJSON'] == 'function') { return x.toJSON(); }
    let first = false;
    if (!q || q?.length < 1) { q = []; first = true; }
    for (let k in x) {
      q.push(() => x[k] = sanitize(x, q));
    }
    if (first) { for (let i of q) { i(); } }
    return x;
  }
  function serialize(x) { return JSON.stringify(sanitize(x)); }
  const rActor = getRouter();

  rActor.ws("", (ws, req) => {
    const tgtActor = _game.actors.get(req.params.id);
    ws.send(JSON.stringify(tgtActor.toJSON()));

    actorUpdates
      .pipe(filter((u) => u.actor.id == tgtActor.id))
      .subscribe((u) =>
        ws.send(serialize({ event: "updateActor", ref: pick(u.actor, 'id', 'name'), data: u.data }))
      );
    tokenUpdates
      .pipe(filter((u) => u.token.actor.id == tgtActor.id))
      .subscribe((u) =>
        ws.send(serialize({ event: "updateToken", ref: pick(u.token, 'id', 'name'), data: u.data }))
      );
    tokenControlUpdates
      .pipe(filter((u) => u.token.actor.id == tgtActor.id))
      .subscribe((u) =>
        ws.send(serialize({ event: "controlToken", ref: pick(u.token, 'id', 'name'), data: { controlled: u.controlled } }))
      );
    combatUpdates
      .pipe(filter((u) => tgtActor.inCombat))
      .subscribe((u) =>
        ws.send(serialize({ event: "updateCombat", ref: pick(tgtActor, 'id', 'name'), data: u.data }))
      );
  });



  rActor.get(`/:id/item_types`, (req, res) => {

    console.log('get item types')
    let results = { success: false };
    console.log(`/:id/item_types`, req, res, results);
    try {
      const actor = _game.actors.get(req.params.id)

      if (actor && actor.itemTypes) { results = Object.keys(actor.itemTypes) } else { throw new Error('No actor or actor has no item types') }
    } catch (error) {
      console.log(error);
      results.error = error.message;
    }
    res.json(results).end();

  });

  rActor.get(`/:id/items/:itemType/:item_id`, (req, res) => {
    let results = { success: false };
    console.log(`/:id/items/:itemType/:item_id`, req, res, results);
    try {
      const actor = _game?.actors.get(req.params.id);
      const item = actor.items.get(req.params.item_id);
      if (item) { results = item; } else { throw new Error("Item not found") }
    } catch (error) {
      console.log(error);
      res.status(403);
      results.error = error.message;
    }
    res.json(results).end();
  });

  rActor.put(`/:id/items/:itemType/:item_id`, (req, res) =>
    res.json(
      updateActorItem(req.params.id, req.params.itemType, req.params.item_id)
    )
  );


  rActor.get(`/:id/item_types/:itemType`, (req, res) => {
    let results = { success: false };
    console.log(`/:id/item_types/:itemType`, req, res, results);

    try {
      const items = (getActorItems(req.params.id, req.params.itemType))
      if (items) { results = items; } else { throw new Error("No items found") }
    } catch (error) {
      console.log(error);
      results.error = error.message;
    }
    res.json(results).end();

  });

  rActor.put('/:id', (req, res) => {
    const actor = _game.actors.get(req.params.id).toJSON();
    updateActor(actor, JSON.parse(req.body));

  })
  rActor.get('/:id', (req, res) => {
    console.log('actor route', req);
    let results = { success: false };
    try {

      const actor = _game?.actors?.get(req.params.id);
      if (actor) {
        const aData = actor?.toJSON();
        if (aData) {
          results = aData;
        } else {
          console.log({ aData });
          throw new Error('Couldnt parse actor.');
        }
      } else {
        console.log({ actor, p: req.params });
        throw new Error('Couldnt find actor.');
      }
    } catch (error) {
      console.error('Error fetching actor by id', req.params, error);
      results.error = error.message;
    }
    res.json(results);
  });
  const rActors = getRouter()
    .get(["/", ""], (req, res) =>
      res.json(
        _game.actors
          .filter((a) => a.isOwner)
          .map((a) => (a.toJSON()))
        // .map((a) => ({
        //   id: a._id,
        //   name: a.name,
        //   image: a.img,
        //   type: a.type,
        // }))
      )
    );
  app.use("/actor", rActor);
  app.use("/actors", rActors);
  return { rActor, rActors };
}

/**
 *
 * @param {import("../../foundry-types/src/types/base").DnD5eGame} _game
 */
function mountWebServer5e(_game) {
  const { rActor, rActors } = mountWebServerBase(_game);

}

function mountWebServer() {
  if (isPathfinderGame(game)) {
    mountWebServerPF2e(game);
  } else if (isDnD5eGame(game)) {
    mountWebServer5e(game);
  }

  /** catch-all */
  app.get("**", (req, res) => {
    if (game && isGameInitialised(game)) {
      res.json({ system: game.system.id, g: game.world.toJSON() });
    } else {
      res.send("FAIL");
    }
  });
}
app.listen(3000);
//# sourceMappingURL=preload.js.map
