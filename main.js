const { app, BrowserWindow } = require("electron");


app.on('ready',()=>{
    const win =  new BrowserWindow({
        width:700,
        height:700,
        autoHideMenuBar: true,
    })

    win.loadFile('./pages/index.html')

})