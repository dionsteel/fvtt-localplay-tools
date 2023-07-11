// global.setImmediate = global.setTimeout;
const { AutoLogin,isGameInitialised } = require('./preload_deps')
const express = require('express');
const app = express();
setImmediate(() => console.log('setimmediate works natch'))
// app.use(routes)
// const mkRouter = () => express.Router({ caseSensitive: false, mergeParams: true, strict: false });
// app.use(routes(mkRouter));
const actor_routes = express.Router().get('/name/:name', (req, res) => {
    // res.json({name:req.params.name}).end();return;
    if (isGameInitialised(game)) {
        const actors = game.actors;
        const actor = actors.getName(req.params.name);
        if (actor) {
            const aj=actor.toJSON();
            res.json(aj).end();
        } else { res.status(404).send('no actor found'); }
    } else { res.send('Game not initialised yet') }
});
app.use('/actors', actor_routes);
app.use('**', (req, res) => res.json({ stuff: true }))
app.listen(3000);
document.addEventListener('DOMContentLoaded', () => {
    Hooks.on('init', (_setup) => {
        AutoLogin().subscribe(v => console.log('logged in!', v));
        console.log('domcontentloaded')
    });
})