
import {defaultRouteConfig} from './config';
import { isGameInitialised } from '@qrpgt/fvtt-common';
import { RouterCreator } from './types';

export default (mkRouter: RouterCreator)=>mkRouter()
    .get('name/:name', (req,res)=>{
        if(isGameInitialised(game)){
            const actors = game.actors;
            const actor = (actors as Collection<Actor>).getName(req.params.name);
            res.json(actor).end();
        }
    })