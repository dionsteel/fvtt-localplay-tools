// import { ActorPF2e } from "../../foundry-types/src/types/foundry/systems/pf2e/module/documents";
const path = require("path");
const fs = require("fs");
const http = require("http");
const https = require("https");
const express = require("express");
const expressws = require("express-ws");
const cors = require("cors");
const { isGameInitialised, performAutoLogin, debugHooks, creds, observeHookEvents, createEventListeners } = require("./sys/lib");
const _app = express();
const httpsServer = https.createServer(
  {
    cert: fs.readFileSync("./cert.pem", "utf8"),
    key: fs.readFileSync("./privkey.pem", "utf8"),
    ca: fs.readFileSync("./fullchain.pem", "utf8"),
    insecureHTTPParser: true,
  },
  _app
);
const { app } = expressws(_app, httpsServer);
const { createProxyMiddleware, fixRequestBody, responseInterceptor } = require("http-proxy-middleware");
const proxy = require("express-http-proxy");
// const jsonc = require("jsonc");
const { Observable, merge } = require("rxjs");
const { map, filter, reduce, scan, share, tap } = require("rxjs/operators");
const { proxy_paths } = require("./sys/proxy_paths");
const { mountWebServer } = require("./sys/webserver");

document.addEventListener("DOMContentLoaded", (e) => mount());
app.use(cors({ origin: "*" }));

/** Mount app once content is loaded */
async function mount() {
  CONFIG.debug.hooks = debugHooks;

  Hooks.once("init", (_args) => {
    console.log("init", game);
  });

  Hooks.once("ready", () => {
    console.log("SIDECAR", "Foundry ready, loading web server");
    mountWebServer(app);
  });

  Hooks.once("renderJoinGameForm", performAutoLogin);
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
httpsServer.on("error", (e) => console.error(e));
httpsServer.listen(3000, () => console.log("Listening on https://192.168.8.127:3000/"));
// app.listen(3000);
//# sourceMappingURL=preload.js.map
