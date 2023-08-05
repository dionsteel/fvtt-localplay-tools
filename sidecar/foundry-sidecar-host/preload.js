const express = require("express");
const expressws = require("express-ws");
// const
const { isGameInitialised } = require("./lib");
const _app = express();
const app = expressws(_app);
const debugHooks = true;
const gmlogin = true;
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
    mountWebServer();
  });

  Hooks.once("renderJoinGameForm", performAutoLogin());
}

export function performAutoLogin() {
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

export function observeHook(name, ...resultKeys) {
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

/**
 *
 * @param {import("../../foundry-types/src/types/base").PathfinderGame} _game
 */
export function mountWebServerPF2e(_game) {}

/**
 *
 * @param {import("../../foundry-types/src/types/base").DnD5eGame} _game
 */
export function mountWebServer5e(_game) {
  const actorUpdates = observeHook("updateActor", "actor", "data", "context");
  const tokenUpdates = observeHook("updateToken", "token", "data", "context");
  const sceneUpdates = observeHook("updateScene", "scene", "data", "context");
  const combatUpdates = observeHook("updateCombat", "scene", "data", "context");

  function getActorItems(actor_id, type) {
    return _game.actors.get(actor_id).itemTypes[type].map((i) => i.toJSON());
  }

  function updateActorItem(actor_id, type, item_id, data) {
    const actor = _game.actors.get(actor_id);
    const item = actor.itemTypes[type].find((i) => i.id == item_id);
    if (item) {
      item.importFromJSON(data);
    }
  }

  const rActor = express.Router().get("", (req, res) => {
    res.json(_game.actors.get(req.params.id).toJSON());
  });
  rActor.ws("", (ws, req) => {
    const tgtActor = _game.actors.get(req.params.id);
    ws.send(JSON.stringify(tgtActor.toJSON()));

    actorUpdates
      .pipe(filter((u) => u.actor.id == tgtActor.id))
      .subscribe((u) =>
        ws.send(JSON.stringify({ event: "updateActor", data: u.data }))
      );
    tokenUpdates
      .pipe(filter((u) => u.token.actor.id == tgtActor.id))
      .subscribe((u) =>
        ws.send(JSON.stringify({ event: "updateToken", data: u.data }))
      );
    combatUpdates
      .pipe(filter((u) => tgtActor.inCombat))
      .subscribe((u) =>
        ws.send(JSON.stringify({ event: "updateCombat", data: u.data }))
      );
  });
  rActor.get("/:id/backgrounds", (req, res) =>
    res.send(
      _game.actors
        .get(req.params.id)
        .itemTypes.background.map((i) => i.toJSON())
    )
  );
  rActor.get("/:id/classes", (req, res) =>
    res.send(
      _game.actors.get(req.params.id).itemTypes.class.map((i) => i.toJSON())
    )
  );
  rActor.get("/:id/feats", (req, res) =>
    res.send(
      _game.actors.get(req.params.id).itemTypes.feat.map((i) => i.toJSON())
    )
  );
  rActor.get("/:id/subclasses", (req, res) =>
    res.send(
      _game.actors.get(req.params.id).itemTypes.subclass.map((i) => i.toJSON())
    )
  );
  rActor.get("/:id/spells", (req, res) =>
    res.send(
      _game.actors.get(req.params.id).itemTypes.spell.map((i) => i.toJSON())
    )
  );
  rActor.get("/:id/weapons", (req, res) =>
    res.send(
      _game.actors.get(req.params.id).itemTypes.weapon.map((i) => i.toJSON())
    )
  );
  rActor.get("/:id/consumables", (req, res) =>
    res.send(
      _game.actors
        .get(req.params.id)
        .itemTypes.consumable.map((i) => i.toJSON())
    )
  );
  rActor.get("/:id/equipment", (req, res) =>
    res.send(
      _game.actors.get(req.params.id).itemTypes.equipment.map((i) => i.toJSON())
    )
  );
  rActor.get("/:id/backpacks", (req, res) =>
    res.send(
      _game.actors.get(req.params.id).itemTypes.backpack.map((i) => i.toJSON())
    )
  );
  rActor.get("/:id/tools", (req, res) =>
    res.send(
      _game.actors.get(req.params.id).itemTypes.tool.map((i) => i.toJSON())
    )
  );
  rActor.get("/:id/loots", (req, res) =>
    res.send(
      _game.actors.get(req.params.id).itemTypes.loot.map((i) => i.toJSON())
    )
  );
  rActor.put("/:id/backgrounds/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );
  rActor.put("/:id/classes/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );
  rActor.put("/:id/feats/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );
  rActor.put("/:id/subclasses/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );
  rActor.put("/:id/spells/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );
  rActor.put("/:id/weapons/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );
  rActor.put("/:id/consumables/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );
  rActor.put("/:id/equipment/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );
  rActor.put("/:id/backpacks/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );
  rActor.put("/:id/tools/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );
  rActor.put("/:id/loots/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );

  const rActors = express
    .Router()
    .get("/", (req, res) =>
      res.json(
        _game.actors
          .filter((a) => a.isOwner)
          .map((a) => ({
            id: a.id,
            name: a.name,
            image: a.img,
            type: a.type,
          }))
      )
    )
    .get("/:id", rActor);
  app.get("/actor", rActors);
}

export function mountWebServer() {
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
  app.listen(3000);
}
//# sourceMappingURL=preload.js.map
