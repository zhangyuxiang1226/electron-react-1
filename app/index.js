const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
    // 创建浏览器窗口。
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false
        }
    });

    // 然后加载应用的 index.html。
    win.loadURL('http://localhost:3000');

    // 当 window 被关闭，这个事件会被触发。
    win.on('closed', () => {
        win = null;
    });
}

// 开发工具
const isDev = require('electron-is-dev')

// electron-debug
isDev && require('electron-debug')({
    enable: true,
    showDevTools: false,
})

// Chromium
function createDevTools() {
    const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS, MOBX_DEVTOOLS } = require('electron-devtools-installer')
    // devtron
    const devtronExtension = require('devtron');
    devtronExtension.install();
    // react工具
    installExtension(REACT_DEVELOPER_TOOLS);
    installExtension(MOBX_DEVTOOLS);
}


app.on('ready', () => {
    createWindow();
    // 开发环境启动开发工具
    isDev && createDevTools();
});

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

