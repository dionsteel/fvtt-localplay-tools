
import { isGameInitialised } from '@qrpgt/fvtt-common';
import { Observable } from 'rxjs';

export function AutoLogin(username: string = 'MapTable', password: string = '', gmlogin = false, autologin = true) {
  return new Observable((obs) => {
    Hooks.on("renderJoinGameForm", (_args) => {
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
            let loginAppForm = loginApp.form as HTMLFormElement;
            if (gmlogin) {
              loginAppForm['userid'].selectedIndex = 1;
              loginAppForm['password'].value = "G0ndolin1!";
            } else {
              const userlist = loginAppForm['userid'].options;
              if (userlist.namedItem(username)) {
                userlist.namedItem(username).selected = true;
                loginAppForm['password'].value = password;
              } else {
                let ulen = userlist.length;
                for (let i = 0; i < ulen; i++) {
                  let o = userlist.item(i);
                  if (new RegExp(username, 'i').test(o.text)) {
                    o.selected = true;
                    loginAppForm['password'].value = password;
                  }
                }
              }
            }
            loginAppForm.requestSubmit();
            obs.next(true);
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
  })
}