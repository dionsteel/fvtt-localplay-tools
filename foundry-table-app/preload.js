const express = require("express");
const { isGameInitialised } = require("./lib");
const app = express();
// console.log("preload script", !!game, !!Hooks);
// console.log('document', document,window);
// const repl=require('repl');
// const cns=repl.start({useGlobal:true});
// cns.context.stuff = {window,document};
// console.log(cns);
// document.onload = function(event){console.log('alt document load listener');}
// global.getPreloadStatus=function() { return 'worked?'; }
// document.addEventListener('load', (e) => console.log('load event', e));
document.addEventListener("DOMContentLoaded", (e) => mount());
async function mount() {
  CONFIG.debug.hooks = true;
  console.log("DOMCONTENTLOADED. check for foundry");
  // console.log(window.Hooks, window);
  Hooks.once("init", (_args) => {
    console.log("init", game);
    if (isGameInitialised(game)) {
      app.get("playerchars", (req, res) => {
        if (game && isGameInitialised(game)) {
          res.send(`${game.users.players.map((p) => p.name)}`);
        } else {
          res.send("FAIL");
        }
      });
      app.get("**", (req, res) => {
        if (game && isGameInitialised(game)) {
          res.send(`${game.users.players.map((p) => p.name)}`);
        } else {
          res.send("FAIL");
        }
      });
      app.listen(3000);
    }
  });
  Hooks.on("setup", (args) => {
    console.log("setup hook", args);
  });
  const gmlogin = true;
  const autologin = true;
  Hooks.on("renderJoinGameForm", (_args) => {
    try {
      if (isGameInitialised(game)) {
        console.log("preload script mounted foundry. ",_args, game.users);
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
  });
}
//# sourceMappingURL=preload.js.map
