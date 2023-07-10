console.log('preload script');
// console.log('document', document,window);
// const repl=require('repl');
// const cns=repl.start({useGlobal:true});
// cns.context.stuff = {window,document};
// console.log(cns);
// document.onload = function(event){console.log('alt document load listener');}
// global.getPreloadStatus=function() { return 'worked?'; }
// document.addEventListener('load', (e) => console.log('load event', e));
document.addEventListener('DOMContentLoaded', e => mount())

async function mount() {
    console.log('DOMCONTENTLOADED. check for foundry');
    // console.log(window.Hooks, window);
    Hooks.on('init', (_args) => {
        console.log('preload script mounted foundry. ', window, global)

        game.users.apps[0].form.userid.selectedIndex = 1

        game.users.apps[0].form.password.value = "G0ndolin1!";
    })
}