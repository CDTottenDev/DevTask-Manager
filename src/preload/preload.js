const { contextBridge, ipcRenderer } = require("electron");

// Expose protected methods that allow the renderer process to use
// specific electron APIs without exposing all of electron
contextBridge.exposeInMainWorld("electron", {
  store: {
    get: (key) => ipcRenderer.invoke("store:get", key),
    set: (key, value) => ipcRenderer.invoke("store:set", [key, value]),
    delete: (key) => ipcRenderer.invoke("store:delete", key),
  },
  notify: (message) => ipcRenderer.send("notify", message),
});
