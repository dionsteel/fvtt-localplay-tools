const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            allowRunningInsecureContent: true,
            contextIsolation: false,
            backgroundThrottling: false,
            experimentalFeatures: true,
            // nodeIntegration: true, 
            webSecurity: false,
            // offscreen: true,
            partition: 'persist:fvtt_copilot',
            preload: process.cwd() + '/preload.js'

        }
    })

    // win.loadFile('index.html')
    win.loadURL('https://foundry.rpgtable.quest/')

}

app.whenReady().then(() => {
    createWindow()
})

