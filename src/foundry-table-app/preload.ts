// import { isGameInitialised } from "./lib/utils";
// import express from "express";
// const app = express();
// app.get("**", (req, res) => {
//   if (isGameInitialised(game)) {
//     res.send(`${game.users.players.map((p) => p.name)}`);
//   }
// });
// app.listen(3000);
// console.log("preload script", !!game, !!Hooks);
// // console.log('document', document,window);
// // const repl=require('repl');
// // const cns=repl.start({useGlobal:true});
// // cns.context.stuff = {window,document};
// // console.log(cns);
// // document.onload = function(event){console.log('alt document load listener');}
// // global.getPreloadStatus=function() { return 'worked?'; }
// // document.addEventListener('load', (e) => console.log('load event', e));
// document.addEventListener("DOMContentLoaded", (e) => mount());
// const gmlogin = true;

// async function mount() {
//   console.log("DOMCONTENTLOADED. check for foundry");
//   // console.log(window.Hooks, window);
//   Hooks.on("init", (_args) => {
//     console.log("preload script mounted foundry. ", window, global);
//     if (isGameInitialised(game) && game.users.apps[0]) {
//       if (
//         game.users.apps.length == 1 &&
//         game.users.apps[0] instanceof FormApplication
//       ) {
//         let loginApp = game.users.apps[0];
//         if (gmlogin) {
//           (loginApp.form as any).userid.selectedIndex = 1;
//           (loginApp.form as any).password.value = "G0ndolin1!";
//         } else {
//           const userlist = (
//             (loginApp.form as HTMLFormElement).userid as HTMLSelectElement
//           ).options;
//           if (userlist.namedItem("MapTable")) {
//             userlist.namedItem("MapTable").selected = true;
//           } else {
//             let ulen = userlist.length;
//             for (let i = 0; i < ulen; i++) {
//               let o = userlist.item(i);
//               if (/maptable/i.test(o.text)) {
//                 o.selected = true;
//               }
//             }
//           }
//         }
//         (loginApp.form as HTMLFormElement).requestSubmit();
//       }
//     }
//   });
// }
export * from '@qrpgt/fvtt-common';
import { AutoLogin } from '@qrpgt/fvtt-electron';
export { AutoLogin }; 