const { app, BrowserWindow } = require('electron')
const {session} = require('electron')

let win;

function createWindow () {
    win = new BrowserWindow({
        show: false,
        webPreferences: {
            webSecurity: false
          },
        width: 800,
        height: 600,
        backgroundColor: '#ffffff',
        minWidth: 700,
        minHeight: 500,
        icon:  `file://${__dirname}/dist/voltplayer/assets/logo.png`
    })
    win.loadURL(`file://${__dirname}/dist/voltplayer/index.html`)

    win.on('closed', () => {
        win = null
    })
    win.once('ready-to-show', () => {
        win.show()
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', function () {
    // macOS specific close process
    if (win === null) {
      createWindow()
    }
})