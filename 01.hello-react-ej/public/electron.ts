// public/electron.ts
import { app, BrowserWindow } from 'electron';
import * as isDev from 'electron-is-dev';
import * as path from 'path';

// 1. Declared outside the function so that garbage collection does not occur.
let mainWindow: BrowserWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    // These are the settings you use, so please set them yourself.
    //alwaysOnTop: true,
    center: true,
    //fullscreen: true,
    kiosk: !isDev,
    resizable: true,
    webPreferences: {
      // 2.
      // If you just want to turn your web application into a desktop, you don't have to,
      // To use it like a Node environment (including using the built-in package provided by Node)
      // must be true.
      nodeIntegration: true
    }
  });

  // 3. and load the index.html of the app.
  if (isDev) {
    // During development, load from address hosted by development tools
    mainWindow.loadURL('http://localhost:3000');
    mainWindow.webContents.openDevTools();
  } else {
    // Access to resources inside the package in production
    mainWindow.loadFile(path.join(__dirname, '../build/index.html'));
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    mainWindow = undefined!;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});