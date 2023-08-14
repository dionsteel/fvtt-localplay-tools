// import { ActorPF2e } from "../../foundry-types/src/types/foundry/systems/pf2e/module/documents";
const path = require("path");
const fs = require("fs");

const express = require("express");
const expressws = require("express-ws");
const cors = require("cors");
const { isGameInitialised } = require("./lib");
const _app = express();
const { app } = expressws(_app);
const {
  createProxyMiddleware,
  fixRequestBody,
  responseInterceptor,
} = require("http-proxy-middleware");
const proxy = require("express-http-proxy");
const debugHooks = false;
const gmlogin = true;
const autologin = true;
const creds = {
  MapTable: { u: "MapTable", p: "" },
  Gamemaster: { u: "Gamemaster", p: "" },
};
const { Observable } = require("rxjs");
const { map, filter, reduce, scan, share } = require("rxjs/operators");
document.addEventListener("DOMContentLoaded", (e) => mount());
const systemDescriptions = {
  dnd5e: {
    actor: {
      item_types: [
        "background",
        "class",
        "subclass",
        "feat",
        "spell",
        "weapon",
        "consumable",
        "equipment",
        "backpack",
        "tool",
        "loot",
      ],
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
    console.log('SIDECAR', "Foundry ready, loading web server");
    mountWebServer();
  });

  Hooks.once("renderJoinGameForm", performAutoLogin);
  Hooks.once("renderJoinGameForm", performAutoLogin);
}

function performAutoLogin() {
  try {
    if (isGameInitialised(game)) {
      console.log("preload script mounted foundry. ", game.users);
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
  app.get("/actor/:id/backgrounds", (req, res) =>
    res.send(
      _game.actors
        .get(req.params.id)
        .itemTypes.background.map((i) => i.toJSON())
    )
  );
  app.get("/actor/:id/classes", (req, res) =>
    res.send(
      _game.actors.get(req.params.id).itemTypes.class.map((i) => i.toJSON())
    )
  );
  app.get("/actor/:id/feats", (req, res) =>
    res.send(
      _game.actors.get(req.params.id).itemTypes.feat.map((i) => i.toJSON())
    )
  );
  app.get("/actor/:id/subclasses", (req, res) =>
    res.send(
      _game.actors.get(req.params.id).itemTypes.subclass.map((i) => i.toJSON())
    )
  );
  app.get("/actor/:id/spells", (req, res) =>
    res.send(
      _game.actors.get(req.params.id).itemTypes.spell.map((i) => i.toJSON())
    )
  );
  app.get("/actor/:id/weapons", (req, res) =>
    res.send(
      _game.actors.get(req.params.id).itemTypes.weapon.map((i) => i.toJSON())
    )
  );
  app.get("/actor/:id/consumables", (req, res) =>
    res.send(
      _game.actors
        .get(req.params.id)
        .itemTypes.consumable.map((i) => i.toJSON())
    )
  );
  app.get("/actor/:id/equipment", (req, res) =>
    res.send(
      _game.actors.get(req.params.id).itemTypes.equipment.map((i) => i.toJSON())
    )
  );
  app.get("/actor/:id/backpacks", (req, res) =>
    res.send(
      _game.actors.get(req.params.id).itemTypes.backpack.map((i) => i.toJSON())
    )
  );
  app.get("/actor/:id/tools", (req, res) =>
    res.send(
      _game.actors.get(req.params.id).itemTypes.tool.map((i) => i.toJSON())
    )
  );
  app.get("/actor/:id/loots", (req, res) =>
    res.send(
      _game.actors.get(req.params.id).itemTypes.loot.map((i) => i.toJSON())
    )
  );
  app.put("/actor/:id/backgrounds/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );
  app.put("/actor/:id/classes/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );
  app.put("/actor/:id/feats/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );
  app.put("/actor/:id/subclasses/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );
  app.put("/actor/:id/spells/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );
  app.put("/actor/:id/weapons/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );
  app.put("/actor/:id/consumables/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );
  app.put("/actor/:id/equipment/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );
  app.put("/actor/:id/backpacks/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );
  app.put("/actor/:id/tools/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );
  app.put("/actor/:id/loots/:item_id", (req, res) =>
    res.json(
      _game.actors
        .get(req.params.id)
        .items.get(req.params.item_id)
        .importFromJSON(req.body)
    )
  );
}

function handleActorMessage() {
  return [];
}
function mountWebServer() {
  console.log("MOUNTING WEB SERVER");
  const actorUpdates = observeHook("updateActor", "actor", "data", "context");
  const tokenUpdates = observeHook("updateToken", "token", "data", "context");
  const sceneUpdates = observeHook("updateScene", "scene", "data", "context");
  const combatUpdates = observeHook("updateCombat", "scene", "data", "context");

  function getActorItems(actor_id, type) {
    return game.actors.get(actor_id).itemTypes[type].map((i) => i.toJSON());
  }
  function getActorItem(actor_id, item_id) {
    return game.actors.get(actor_id).items.get(item_id).toJSON();
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

  app.get("/actor/:id", (req, res) => {
    res.json(game.actors.get(req.params.id).toJSON());
  });

  app.post(`/actor/:id`, (req, res) => {
    res.json(performActorItemAction(actorId, itemId, JSON.parse(req.body)));
  });

  app.ws("/actor/:id", (ws, req) => {
    const tgtActor = game.actors.get(req.params.id);
    ws.send(JSON.stringify(tgtActor.toJSON()));
    ws.on("message", (data, isBinary) => {
      const msg = JSON.parse(data.toString("utf-8"));
      if (msg && (msg.type || msg.event)) {
        handleActorMessage(tgtActor, msg, ws);
      }
    });
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
    app.get(`/actor/:id/${itemType}`, (req, res) =>
      res.json(getActorItems(req.params.id, itemType))
    );
    app.get(`/actor/:id/${itemType}/:itemId`, (req, res) =>
      res.json(getActorItems(req.params.id, itemType))
    );
    app.put(`/actor/:id/${itemType}/:itemId`, (req, res) =>
      res.json(
        updateActorItem(req.params.id, itemType, req.params.itemId, req.body)
      )
    );
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
    res.json(game.packs.get(req.params.key).toJSON());
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
  app.get("info", (req, res) => {
    if (game && isGameInitialised(game)) {
      res.json({ system: game.system?.toJSON(), world: game.world.toJSON() });
    } else {
      res.send("FAIL");
    }
  });
  app.use(
    express.static("../foundry-sidecar-client/dist/", { fallthrough: true })
  );
  app.get("**", (req, res, next) => {
    // console.log("catchall handler", req);
    try {
      if (
        [
          "tokenizer",
          "Tokens",
          "scripts",
          "Artwork",
          "Maps",
          "modules",
          "systems",
          "worlds",
          "pdftofoundry-image-mapping.json",
          "fonts",
          "icons",
          "css",
          "ui",
        ].filter((p) => req.path.startsWith(p) || req.path.startsWith("/" + p))
          .length > 0
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
  app.listen(3000);
}
app.listen(3000);
//# sourceMappingURL=preload.js.map
