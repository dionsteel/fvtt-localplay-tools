import type { Application, Express, Router, } from 'express';

import { isGameInitialised } from '@qrpgt/fvtt-common';
import actors from './actors';
import { RouterCreator } from './types';
export { RouterCreator };
export const routes =
  (mkRouter: RouterCreator) => mkRouter().get("playerchars", (req, res) => {
    if (game && isGameInitialised(game)) {
      res.send(`${game.users.players.map((p) => p.name)}`);
    } else {
      res.send("FAIL");
    }
  }).use('actors', actors(mkRouter));
